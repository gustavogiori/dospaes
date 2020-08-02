using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DosPaes.Models;
using System.Text.Json;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Authorization;

namespace DosPaes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class CustosController : ControllerBase
    {
        private readonly DataBaseContext _context = new DataBaseContext();

        public CustosController()
        {
        }

        // GET: api/Custos
        [HttpGet]
        public async Task<ActionResult<string>> GetCustos()
        {
            var custos = await _context.Custos.ToListAsync();
            var json = DosPaes.Service.JsonService<List<Custo>>.GetJson(custos);
            return json;
        }

        // GET: api/Custos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<string>> GetCusto(int id)
        {
            var custo = await _context.Custos.FindAsync(id);

            if (custo == null)
            {
                return NotFound();
            }

            var json = Service.JsonService<Custo>.GetJson(custo);
            return json;
        }

        // PUT: api/Custos/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCusto(int id, Custo custo)
        {
            if (id != custo.Id)
            {
                return BadRequest();
            }

            _context.Entry(custo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustoExists(id))
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

        // POST: api/Custos
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Custo>> PostCusto(Custo custo)
        {
            _context.Custos.Add(custo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCusto", new { id = custo.Id }, custo);
        }

        // DELETE: api/Custos/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Custo>> DeleteCusto(int id)
        {
            var custo = await _context.Custos.FindAsync(id);
            if (custo == null)
            {
                return NotFound();
            }

            _context.Custos.Remove(custo);
            await _context.SaveChangesAsync();

            return custo;
        }

        private bool CustoExists(int id)
        {
            return _context.Custos.Any(e => e.Id == id);
        }
    }
}
