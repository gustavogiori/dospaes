using DosPaes.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DosPaes.Service
{
    public interface IVendaService : IService
    {
        Task<string> GetJsonBoardVendasAsync(DataBaseContext context, string typeFilter = "", string dateFilter = "", bool filterQnt = true);
    }
}
