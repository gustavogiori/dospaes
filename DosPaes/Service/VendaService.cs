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

        public async Task<List<Venda>> GetVendaDate(DateTime date)
        {
            List<Venda> vendasDate;
            if (date != DateTime.MinValue)
                vendasDate = await _context.Vendas.Include(x => x.Produto).Include(x => x.Cliente).Where(x => x.Data == date).ToListAsync();
            else
                vendasDate = await _context.Vendas.Include(x => x.Produto).Include(x => x.Cliente).Where(x => x.Data != date).ToListAsync();

            return vendasDate;
        }

        public async Task<string> GetJsonBoardVendasAsync(string typeFilter = "", string dateFilter = "")
        {
            var list = JsonService<List<Venda>>.GetObject(await GetJsonVendasFilterAsync(typeFilter, dateFilter));
            List<BoardVendas> board = new List<BoardVendas>();
            int id = 0;
            foreach (var item in list.OrderBy(x => x.Produto.Descricao))
            {
                if (board.Any(x => x.Produto == item.Produto.Descricao))
                    continue;
                else
                {
                    BoardVendas itemBoard = new BoardVendas();
                    itemBoard.Id = id;
                    itemBoard.Produto = item.ProdutoDescricao;
                    itemBoard.Quantidade = list.Where(x => x.Produto.Id == item.Produto.Id && x.Entregue == false).Sum(x => x.Qnt);
                    itemBoard.Vendas = new List<Venda>();
                    itemBoard.Vendas.AddRange(list.Where(x => x.Produto.Id == item.Produto.Id));
                    board.Add(itemBoard);
                    id++;
                }

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
