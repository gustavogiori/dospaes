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
        public async Task<string> GetProducao(DataBaseContext _context, string typeFilter = "", string dateFilter = "")
        {
            return await _serviceProvider.GetJsonBoardVendasAsync(_context, typeFilter, dateFilter, false);
        }
    }
}
