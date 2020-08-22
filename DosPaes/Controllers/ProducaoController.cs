using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DosPaes.Models;
using DosPaes.Service;
using DosPaes.Util;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DosPaes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Policy = Policies.User)]
    public class ProducaoController : ControllerBase
    {
        IProducaoService _producaoService;
        public ProducaoController(IProducaoService producaoService)
        {
            _producaoService = producaoService;
        }
        [HttpGet("GetProducao")]
        public async Task<ActionResult<string>> GetProducaoAsync(string typeFilter = "", string dateFilter = "")
        {
            try
            {
                return await _producaoService.GetProducao(typeFilter, dateFilter);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}