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
        DataBaseContext _context = new DataBaseContext();
        public async Task<string> GetCustos(DataFilter dashboardFilter, DataBaseContext context)
        {
            List<Custo> custos = new List<Custo>();
            List<Venda> vendas = new List<Venda>();
            _context = context;

            switch (dashboardFilter.tipo)
            {
                case "H":
                case "":
                    {
                        FiltraDadosHoje(out custos, out vendas);
                    }
                    break;
                case "M":
                    {
                        FiltraDadosMes(out custos, out vendas);
                    }
                    break;
                case "S":
                    {
                        FiltraDadosSemana(out custos, out vendas);
                    }
                    break;
                case "A":
                    {
                        FiltraDadosAnoAtual(out custos, out vendas);
                    }
                    break;
                default:
                    FiltraDadosDataEspecifica(out custos, out vendas, dashboardFilter);
                    break;
            }

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

        private void FiltraDadosDataEspecifica(out List<Custo> custos, out List<Venda> vendas, DataFilter dashboardFilter)
        {
            custos = _context.Custos.Where(x => x.Data >= dashboardFilter.dataInicio && x.Data <= dashboardFilter.dataFim).ToList();
            vendas = _context.Vendas.Where(x => x.Data >= dashboardFilter.dataInicio && x.Data <= dashboardFilter.dataFim).ToList();
        }

        private void FiltraDadosAnoAtual(out List<Custo> custos, out List<Venda> vendas)
        {
            DateTime dateInicio = new DateTime(DateTime.Now.Year, 1, 1);
            DateTime dateFim = new DateTime(DateTime.Now.Year, 12, 31);

            FiltraDadosPorData(out custos, out vendas, dateInicio, dateFim);
        }

        private void FiltraDadosPorData(out List<Custo> custos, out List<Venda> vendas, DateTime dateInicio, DateTime dateFim)
        {
            custos = _context.Custos.Where(x => x.Data >= dateInicio && x.Data <= dateFim).ToList();
            vendas = _context.Vendas.Where(x => x.Data >= dateInicio && x.Data <= dateFim).ToList();
        }

        private void FiltraDadosSemana(out List<Custo> custos, out List<Venda> vendas)
        {
            DateTime dateInicio = DateTime.Now;
            dateInicio = dateInicio.AddDays(-(int)dateInicio.DayOfWeek);
            DateTime dateFim = dateInicio;
            dateFim = dateInicio.AddDays(6);

            FiltraDadosPorData(out custos, out vendas, dateInicio, dateFim);
        }

        private void FiltraDadosMes(out List<Custo> custos, out List<Venda> vendas)
        {
            var dtInicioMes = new DateTime(DateTime.Now.Year, DateTime.Now.Month, 1);
            var dtFimMes = new DateTime(DateTime.Now.Year, DateTime.Now.Month, 1).AddMonths(1).AddDays(-1);

            FiltraDadosPorData(out custos, out vendas, dtInicioMes, dtFimMes);
        }

        private void FiltraDadosHoje(out List<Custo> custos, out List<Venda> vendas)
        {
            FiltraDadosPorData(out custos, out vendas, DateTime.Now.Date, DateTime.Now.Date);
        }
    }
}
