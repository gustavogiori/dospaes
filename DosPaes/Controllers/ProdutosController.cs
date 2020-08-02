using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DosPaes.Models;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Cors;

namespace DosPaes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdutosController : ControllerBase
    {
        private readonly DataBaseContext _context = new DataBaseContext();

        public ProdutosController()
        {
        }

        // GET: api/Produtos
        [HttpGet]
        public async Task<ActionResult<string>> GetProdutos()
        {
            JsonSerializer serializer = new JsonSerializer();
            var list = await _context.Produtos.Include(x => x.Categoria).ToListAsync();
            string json = JsonConvert.SerializeObject(list, Formatting.Indented);
            return json;
        }

        // GET: api/Produtos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<string>> GetProduto(int id)
        {
            var produto = await _context.Produtos.FindAsync(id);

            if (produto == null)
            {
                return NotFound();
            }

            return Service.JsonService<Produto>.GetJson(produto);
        }
        // GET: api/Produtos/5
        [HttpGet("{campo}/{valor}")]
        public async Task<ActionResult<string>> GetProduto(string campo = "", string valor = "")
        {
            // var produto = await _context.Produtos.ToListAsync();
            IQueryable<Produto> produto = _context.Produtos.Include(x => x.Categoria).AsQueryable();
            List<Produto> produtos;
            if (campo != "" || valor != "")
                produtos = Service.QueryService<Produto>.GetListFromFilter(campo, valor, produto);
            else
                produtos = produto.ToList();

            if (produtos == null)
            {
                return NotFound();
            }
            JsonSerializer serializer = new JsonSerializer();
            string json = JsonConvert.SerializeObject(produtos, Formatting.Indented);
            return json;
        }
        // PUT: api/Produtos/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduto(int id, Produto produto)
        {
            if (id != produto.Id)
            {
                return BadRequest();
            }

            _context.Entry(produto).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProdutoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Produtos
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Produto>> PostProduto(Produto produto)
        {
            try
            {
                _context.Produtos.Add(produto);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetProduto", new { id = produto.Id }, produto);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.InnerException.Message);
            }
        }

        // DELETE: api/Produtos/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Produto>> DeleteProduto(int id)
        {
            var produto = await _context.Produtos.FindAsync(id);
            if (produto == null)
            {
                return NotFound();
            }

            _context.Produtos.Remove(produto);
            await _context.SaveChangesAsync();

            return produto;
        }

        private bool ProdutoExists(int id)
        {
            return _context.Produtos.Any(e => e.Id == id);
        }
    }
}
