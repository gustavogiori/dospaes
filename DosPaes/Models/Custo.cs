using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DosPaes.Models
{
    [Table("Custos")]
    public partial class Custo
    {
        public int Id { get; set; }

        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime Data { get; set; }

        [Required]
        public string Local { get; set; }

        public decimal Valor { get; set; }
    }
}