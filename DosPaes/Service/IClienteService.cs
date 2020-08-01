using DosPaes.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DosPaes.Service
{
    public interface IClienteService : IService
    {
        Task<string> GetEntityJsonById(int id);
        Task<Cliente> DeleteEntity(int id);
    }
}
