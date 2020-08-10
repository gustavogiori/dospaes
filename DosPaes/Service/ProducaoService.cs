using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DosPaes.Models;
using Microsoft.Extensions.DependencyInjection;

namespace DosPaes.Service
{
    public class ProducaoService : IProducaoService
    {
        IVendaService _serviceProvider;
        public ProducaoService(IVendaService serviceProvider)
        {
            this._serviceProvider = serviceProvider;
        }
        public async Task<string> GetProducao(string typeFilter = "", string dateFilterString = "")
        {
            DateTime dateFilter = Util.UtilDateTime.GetDateFilterVendas(typeFilter, dateFilterString);
            List<Venda> vendas = await _serviceProvider.GetVendaDate(dateFilter);
            List<Producao> paesProduzidos = new List<Producao>();

            foreach (var venda in vendas)
            {
                foreach (var itemVenda in venda.ItensVenda)
                {
                    paesProduzidos.Add(new Producao() { Produto = itemVenda.NomeProduto, Quantidade = itemVenda.Quantidade });
                }
            }

            return JsonService<List<Producao>>.GetJson(paesProduzidos);
        }
    }
}

