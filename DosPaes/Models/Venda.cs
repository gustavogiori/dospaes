using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace DosPaes.Models
{
    public partial class Venda
    {
        public int Id { get; set; }

        public DateTime Data { get; set; }

        public decimal Valor { get; set; }
        public bool Entregue { get; set; }
        public int Qnt { get; set; }

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
        public int? IdCliente { get; set; }

        [ForeignKey("IdCliente")]
        public virtual Cliente Cliente { get; set; }

        [NotMapped]
        public List<ItensVenda> ItensVenda { get; set; }
    }
}