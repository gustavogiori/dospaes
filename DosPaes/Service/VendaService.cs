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


        private async Task<string> GetVendasTodayAsync()
        {
            return await GetVendasDateAsync(DateTime.Now.Date);
        }
        private async Task<string> GetVendasYesterdayAsync()
        {
            return await GetVendasDateAsync(DateTime.Now.Date.AddDays(-1));
        }
        private async Task<string> GetVendasTomorrowAsync()
        {
            return await GetVendasDateAsync(DateTime.Now.Date.AddDays(1));
        }
        private async Task<string> GetVendasDateAsync(DateTime date)
        {
            var dateFilter = new DateTime(date.Year, date.Month, date.Day);
            var vendasDate = await _context.Vendas.Include(x => x.Produto).Include(x => x.Cliente).Where(x => x.Data == dateFilter).ToListAsync();

            return JsonService<List<Venda>>.GetJson(vendasDate);
        }
        public async Task<string> GetJsonBoardVendasAsync(DataBaseContext context, string typeFilter = "", string dateFilter = "", bool filterQnt = true)
        {
            var list = JsonService<List<Venda>>.GetObject(await GetJsonVendasFilterAsync(context, typeFilter, dateFilter));
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
                    itemBoard.Produto = item.Produto.Descricao;
                    if (filterQnt)
                        itemBoard.Quantidade = list.Where(x => x.Produto.Id == item.Produto.Id && x.Entregue == false).Sum(x => x.Qnt);
                    else
                        itemBoard.Quantidade = list.Where(x => x.Produto.Id == item.Produto.Id).Sum(x => x.Qnt);

                    itemBoard.Vendas = new List<Venda>();
                    itemBoard.Vendas.AddRange(list.Where(x => x.Produto.Id == item.Produto.Id));
                    board.Add(itemBoard);
                    id++;
                }

            }
            var json = JsonService<List<BoardVendas>>.GetJson(board);
            return json;
        }
        public async Task<string> GetJsonVendasFilterAsync(DataBaseContext context, string typeFilter = "", string dateFilter = "")
        {
            this._context = context;
            string json = "";

            switch (typeFilter)
            {
                case "H":
                    {
                        json = await GetVendasTodayAsync();
                    }
                    break;
                case "A":
                    {
                        json = await GetVendasTomorrowAsync();
                    }
                    break;
                case "O":
                    {
                        json = await GetVendasYesterdayAsync();
                    }
                    break;
                case "P":
                    {
                        json = await GetVendasDateAsync(Convert.ToDateTime(dateFilter));
                    }
                    break;
                default:
                    {
                        json = await GetVendasTodayAsync();
                    }
                    break;
            }
            return json;
        }
    }
}
