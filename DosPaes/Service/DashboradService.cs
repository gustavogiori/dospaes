using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DosPaes.Models;
using Microsoft.AspNetCore.Mvc;

namespace DosPaes.Service
{
    public class DashboradService : IDashboardService
    {

        DataBaseContext _context;
        public DashboradService(DataBaseContext context)
        {
            this._context = context;
        }

        public async Task<string> GetCustos(DataFilter dashboardFilter)
        {
            List<Custo> custos = new List<Custo>();
            List<Venda> vendas = new List<Venda>();

            DateTime dataInicio;
            DateTime dataFinal;
            Util.UtilDateTime.GetDateFilterCusto(dashboardFilter, out dataInicio, out dataFinal);

            FiltraDadosPorData(out custos, out vendas, dataInicio, dataFinal);

            var home = new HomeBoard()
            {
                QntVendas = vendas.Count,
                Despesas = custos.Sum(x => x.Valor),
                Vendas = vendas.Sum(x => x.Valor)
            };
            home.SubTotal = home.Vendas - home.Despesas;

            var json = JsonService<HomeBoard>.GetJson(home);
            return json;
        }


        private void FiltraDadosPorData(out List<Custo> custos, out List<Venda> vendas, DateTime dateInicio, DateTime dateFim)
        {
            custos = _context.Custos.Where(x => x.Data >= dateInicio && x.Data <= dateFim).ToList();
            vendas = _context.Vendas.Where(x => x.Data >= dateInicio && x.Data <= dateFim).ToList();
        }


    }
}
