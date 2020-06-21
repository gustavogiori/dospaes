using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Dos_Paes.Models
{
    [Table("Custos")]
    public partial class Custo
    {
        public int Id { get; set; }

        public DateTime Data { get; set; }

        [Required]
        public string Local { get; set; }

        public decimal Valor { get; set; }
    }
}