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
            List<ItensVenda> itensVendas = await _serviceProvider.GetItensVendaDate(dateFilter);
            List<Producao> paesProduzidos = new List<Producao>();

            foreach (var itemVenda in itensVendas)
            {
                if (!paesProduzidos.Any(x => x.Produto == itemVenda.NomeProduto))
                    paesProduzidos.Add(new Producao() { Produto = itemVenda.NomeProduto, Quantidade = itemVenda.Quantidade });
                else
                    paesProduzidos.Find(x => x.Produto == itemVenda.NomeProduto).Quantidade += itemVenda.Quantidade;

            }


            return JsonService<List<Producao>>.GetJson(paesProduzidos);
        }
    }
}

