using Newtonsoft.Json;
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

        [NotMapped]
        public string ProdutoDescricao
        {
            get
            {
                return Produto?.Descricao;
            }
        }
        public int? IdProduto { get; set; }
        [JsonIgnore]
        [ForeignKey("IdProduto")]
        public virtual Produto Produto { get; set; }
    }
}