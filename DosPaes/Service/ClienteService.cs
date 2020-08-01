using DosPaes.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DosPaes.Service
{
    public class ClienteService : IClienteService
    {
        DataBaseContext _context;
        public ClienteService(DataBaseContext context)
        {
            _context = context;
        }

        public async Task<string> GetEntityJsonById(int id)
        {
            Cliente cliente = await GetClienteById(id);

            return JsonService<Cliente>.GetJson(cliente);
        }

        public async Task<Cliente> DeleteEntity(int id)
        {
            var cliente = await GetClienteById(id);
            try
            {
                _context.Cliente.Remove(cliente);
                await _context.SaveChangesAsync();
                return cliente;
            }
            catch (DbUpdateException ex)
            {
                throw new Exception("Existe venda vinculada ao cliente, desta forma o mesmo não pode ser deletado");
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        private async Task<Cliente> GetClienteById(int id)
        {
            var cliente = await _context.Cliente.FindAsync(id);

            if (cliente == null)
            {
                throw new Exception("Cliente não encontrado");
            }

            return cliente;
        }
    }
}
