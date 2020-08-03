using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace DosPaes.Models
{
    [Table("Usuario")]
    public class Usuario
    {
        [Key]
        public string Email { get; set; }
        public string Nome { get; set; }
        public string Senha { get; set; }
        public bool MantemLogado { get; set; }
        [NotMapped]
        public string ChaveCadastro { get; set; }
        [NotMapped]
        public string Role { get; set; }
        [NotMapped]
        public bool isLoggedIn { get; set; }

    }
}
