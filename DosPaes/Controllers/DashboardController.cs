using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dos_Paes.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DosPaes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DashboardController : ControllerBase
    {
        private readonly DataBaseContext _context = new DataBaseContext();
        // GET: api/Dashboard
        [HttpGet("GetAllSum")]
        public async Task<ActionResult<string>> GetCustos()
        {
            var custos = await _context.Custos.ToListAsync();
            var vendas = await _context.Vendas.ToListAsync();
            var home = new HomeBoard();
            home.QntVendas = vendas.Count;
            home.Despesas = custos.Sum(x => x.Valor);
            home.Vendas = vendas.Sum(x => x.Valor);
            home.SubTotal = home.Vendas - home.Despesas;
            var json = DosPaes.Service.JsonService<HomeBoard>.GetJson(home);
            return json;
        }
    }
}