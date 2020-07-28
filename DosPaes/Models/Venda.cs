using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace DosPaes.Models
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
        [NotMapped]
        public string ClienteNome
        {
            get
            {
                return Cliente?.Nome;
            }
        }
        [NotMapped]
        public string ClienteEndereco
        {
            get
            {
                return Cliente?.Endereco;
            }
        }
        [NotMapped]
        public string ClienteTelefone
        {
            get
            {
                return Cliente?.Telefone1;
            }
        }
        public int? IdProduto { get; set; }
        public int? IdCliente { get; set; }
        public bool Entregue { get; set; }
      
        [ForeignKey("IdProduto")]
        public virtual Produto Produto { get; set; }
   
        [ForeignKey("IdCliente")]
        public virtual Cliente Cliente { get; set; }
    }
}