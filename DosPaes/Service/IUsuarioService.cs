using DosPaes.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DosPaes.Service
{
    public interface IUsuarioService
    {
        Task<Usuario> Authenticate(string email, string senha);
        Task<Usuario> AddUsuario(Usuario usuario);
        bool UsuarioExists(string id);
        Task<string> GetAllUserJson();
    }
}
