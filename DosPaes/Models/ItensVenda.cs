using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace DosPaes.Models
{
    [Table("ItensVendas")]
    public class ItensVenda
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int Id { get; set; }
        public int IdProduto { get; set; }
        public int IdVenda { get; set; }
        [NotMapped]
        public decimal? PrecoProduto => Produto?.Valor;

        [NotMapped]
        public string NomeProduto
        {
            get
            {
                return Produto?.Descricao;
            }
        }
        public decimal Total { get; set; }
        public int Quantidade { get; set; }
        [ForeignKey("IdProduto")]
        public Produto Produto { get; set; }
    }
}
