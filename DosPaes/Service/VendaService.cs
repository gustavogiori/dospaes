using DosPaes.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DosPaes.Service
{
    public class VendaService : IVendaService
    {
        DataBaseContext _context;

        public VendaService(DataBaseContext context)
        {
            this._context = context;
        }
        public async Task<string> GetVendasDateJsonAsync(DateTime date)
        {
            List<Venda> vendasDate = await GetVendaDate(date);

            return JsonService<List<Venda>>.GetJson(vendasDate);
        }
        public async Task<List<ItensVenda>> GetItensVendaDate(DateTime date)
        {
            var itensVenda = await _context.ItensVendas.Include(x => x.Produto).Include(x => x.Venda).ToListAsync();
            if (date != DateTime.MinValue)
                itensVenda = itensVenda.Where(x => x.Venda.Data == date).ToList();
            else
                itensVenda = itensVenda.Where(x => x.Venda.Data != date).ToList();

            return itensVenda;
        }
        public async Task<List<Venda>> GetVendaDate(DateTime date)
        {
            List<Venda> vendasDate;
            if (date != DateTime.MinValue)
                vendasDate = await _context.Vendas.Include(x => x.Cliente).Where(x => x.Data == date).ToListAsync();
            else
                vendasDate = await _context.Vendas.Include(x => x.Cliente).Where(x => x.Data != date).ToListAsync();


            foreach (var item in vendasDate)
            {
                item.ItensVenda = new List<ItensVenda>();
                List<ItensVenda> list = new List<ItensVenda>();
                try
                {
                    list = _context.ItensVendas.Include(x => x.Produto).Where(x => x.IdVenda == item.Id).ToList();
                }
                catch (Exception ex)
                {

                }
                foreach (var itemVenda in list)
                {
                    item.ItensVenda.Add(itemVenda);
                }

            }
            return vendasDate;
        }

        public async Task<string> GetJsonBoardVendasAsync(string typeFilter = "", string dateFilter = "")
        {
            var list = JsonService<List<Venda>>.GetObject(await GetJsonVendasFilterAsync(typeFilter, dateFilter));
            List<BoardVendas> board = new List<BoardVendas>();
            int id = 0;
            foreach (var item in list)
            {
                BoardVendas itemBoard = new BoardVendas();
                itemBoard.Id = id;
                itemBoard.Cliente = item.ClienteNome;
                var itens = item.ItensVenda.Where(x => x.IdVenda == item.Id);
                itemBoard.Quantidade = itens.Sum(x => x.Quantidade);
                itemBoard.Venda = item;
                board.Add(itemBoard);
                id++;
            }
            var json = JsonService<List<BoardVendas>>.GetJson(board);
            return json;
        }
        public async Task<string> GetJsonVendasFilterAsync(string typeFilter = "", string dateFilter = "")
        {
            string json = "";

            DateTime dataFiltro = Util.UtilDateTime.GetDateFilterVendas(typeFilter, dateFilter);
            json = await GetVendasDateJsonAsync(dataFiltro);

            return json;
        }
    }
}
