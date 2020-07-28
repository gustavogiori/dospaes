using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DosPaes.Models;
using DosPaes.Service;
using DosPaes.Util;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DosPaes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProducaoController : ControllerBase
    {
        IProducaoService _producaoService;
        private readonly DataBaseContext _context = new DataBaseContext();
        public ProducaoController(IProducaoService producaoService)
        {
            _producaoService = producaoService;
        }
        [HttpGet("GetProducao")]
        public async Task<ActionResult<string>> GetCustosAsync(string typeFilter = "", string dateFilter = "")
        {
            try
            {
                return await _producaoService.GetProducao(_context, typeFilter, dateFilter);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}