using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Dos_Paes.Models
{
    public partial class Venda
    {
        public int Id { get; set; }

        public DateTime Data { get; set; }

        public decimal Valor { get; set; }

        public int Qnt { get; set; }

     
        public int? IdProduto { get; set; }
        [ForeignKey("IdProduto")]
        public virtual Produto Produto { get; set; }
    }
}