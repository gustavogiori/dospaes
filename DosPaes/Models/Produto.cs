using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.Serialization;

namespace DosPaes.Models
{
    [DataContract]
    [Table("Produto")]
    public class Produto
    {
        [DataMember]
        public int Id { get; set; }
        [DataMember]
        public string Descricao { get; set; }
        [DataMember]
        public decimal Valor { get; set; }
     
        public int IdCategoria { get; set; }

        [NotMapped]
        [DataMember]
        public string CategoriaDescricao
        {
            get
            {
                return Categoria?.Descricao;
            }
        }

        [ForeignKey("IdCategoria")] 
        public Categoria Categoria { get; set; }
    }
}