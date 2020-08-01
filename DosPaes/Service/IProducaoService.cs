using DosPaes.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DosPaes.Service
{
    public interface IProducaoService : IService
    {
        Task<string> GetProducao(string typeFilter = "", string dateFilter = "");
    }
}
