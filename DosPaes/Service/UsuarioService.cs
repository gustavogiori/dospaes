using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DosPaes.Models;
using Microsoft.EntityFrameworkCore;

namespace DosPaes.Service
{
    public class UsuarioService : IUsuarioService
    {
        DataBaseContext _context;
        public UsuarioService(DataBaseContext context)
        {
            this._context = context;
        }
        public bool UsuarioExists(string id)
        {
            return _context.Usuario.Any(e => e.Email == id);
        }
        public async Task<Usuario> AddUsuario(Usuario usuario)
        {
            _context.Usuario.Add(usuario);

            if (usuario.ChaveCadastro != "AB12C")
                throw new Exception("Você não tem permissão para realizar este cadastro!");

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException ex)
            {
                if (UsuarioExists(usuario.Email))
                {
                    throw new Exception($"Usuário {usuario.Email} cadastrado já existe.");
                }
                else
                {
                    throw new Exception(ex.Message); ;
                }
            }

            return usuario;
        }

        public async Task<string> GetAllUserJson()
        {
            var users = await _context.Usuario.ToListAsync();
            return JsonService<List<Usuario>>.GetJson(users.ToList());
        }

        public async Task<Usuario> Authenticate(string email, string senha)
        {
            var user = await Task.Run(() => _context.Usuario.SingleOrDefault(x => x.Email == email && x.Senha == senha));

            // return null if user not found
            if (user == null)
                return null;

            // authentication successful so return user details without password
            return user;
        }
    }
}
