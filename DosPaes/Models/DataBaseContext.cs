using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DosPaes.Models;

namespace DosPaes.Models
{
    public class DataBaseContext : DbContext
    {
        public DbSet<Categoria> Categorias { get; set; }
        public DbSet<Produto> Produtos { get; set; }
        public DbSet<Custo> Custos { get; set; }
        public virtual DbSet<Venda> Vendas { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=41b1c84d-84c1-4717-a896-a8d101463f9a.sqlserver.sequelizer.com;Database=db41b1c84d84c14717a896a8d101463f9a;User ID=yfaahsrvcubglvtg;Password=iR6aBThtMi3FL2ZcTbnMdwTHgXZXmnXtmvjwhjXnfPwhYion6bCzLgnU7w2L3sgz;");
        }

        public DbSet<Cliente> Cliente { get; set; }

        public DbSet<DosPaes.Models.Usuario> Usuario { get; set; }
    }
}
