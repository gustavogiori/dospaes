using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Dos_Paes.Models;

namespace DosPaes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustosController : ControllerBase
    {
        private readonly DataBaseContext _context = new DataBaseContext();

        public CustosController()
        {
        }

        // GET: api/Custos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Custo>>> GetCustos()
        {
            return await _context.Custos.ToListAsync();
        }

        // GET: api/Custos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Custo>> GetCusto(int id)
        {
            var custo = await _context.Custos.FindAsync(id);

            if (custo == null)
            {
                return NotFound();
            }

            return custo;
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
