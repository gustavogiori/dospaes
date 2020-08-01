using DosPaes.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DosPaes.Service
{
    public interface IVendaService : IService
    {
        Task<string> GetJsonBoardVendasAsync(string typeFilter = "", string dateFilter = "");
        Task<string> GetVendasDateJsonAsync(DateTime date);
        Task<string> GetJsonVendasFilterAsync(string typeFilter = "", string dateFilter = "");
        Task<List<Venda>> GetVendaDate(DateTime date);
    }
}
