using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DosPaes.Models
{
    public class BoardVendas
    {
        public int Id { get; set; }
        public string Cliente { get; set; }
        public int Quantidade { get; set; }
        public Venda Venda { get; set; }
    }
}
