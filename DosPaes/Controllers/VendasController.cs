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
using DosPaes.Service;

namespace DosPaes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VendasController : ControllerBase
    {
        private readonly DataBaseContext _context = new DataBaseContext();
        IVendaService _vendaService;
        public VendasController(IVendaService vendaService)
        {
            this._vendaService = vendaService;
        }

        [HttpPut("SetEntrega/{id}")]
        public async Task<IActionResult> PutEntrega(int id, Venda data)
        {

            if (id != data.Id)
            {
                return BadRequest();
            }

            _context.Entry(data).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VendaExists(id))
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

        [HttpGet("BoardVendas")]
        public async Task<ActionResult<string>> GetBoardVendas(string typeFilter = "", string dateFilter = "")
        {
            try
            {
                return await _vendaService.GetJsonBoardVendasAsync(typeFilter, dateFilter);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        // GET: api/Vendas
        [HttpGet]
        public async Task<ActionResult<string>> GetVendas(string typeFilter = "", string dateFilter = "")
        {
            try
            {
                return await _vendaService.GetJsonVendasFilterAsync(typeFilter, dateFilter);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET: api/Vendas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<string>> GetVenda(int id)
        {
            var venda = _context.Vendas.Include(x => x.Cliente).Include(x => x.Produto).FirstOrDefault(x => x.Id == id);

            if (venda == null)
            {
                return NotFound();
            }
            var json = Service.JsonService<Venda>.GetJson(venda);
            return json;
        }

        // PUT: api/Vendas/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVenda(int id, Venda venda)
        {
            if (id != venda.Id)
            {
                return BadRequest();
            }

            _context.Entry(venda).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VendaExists(id))
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

        // POST: api/Vendas
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Venda>> PostVenda(Venda venda)
        {
            _context.Vendas.Add(venda);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVenda", new { id = venda.Id }, venda);
        }

        // DELETE: api/Vendas/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Venda>> DeleteVenda(int id)
        {
            var venda = await _context.Vendas.FindAsync(id);
            if (venda == null)
            {
                return NotFound();
            }

            _context.Vendas.Remove(venda);
            await _context.SaveChangesAsync();

            return venda;
        }

        private bool VendaExists(int id)
        {
            return _context.Vendas.Any(e => e.Id == id);
        }
    }
}
