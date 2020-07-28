using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace DosPaes.Models
{
    [NotMapped]
    public class DataFilter
    {
        public string tipo { get; set; }
        public DateTime dataInicio { get; set; }
        public DateTime dataFim { get; set; }
    }
}
