using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DosPaes.Models;
using DosPaes.Util;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DosPaes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class DashboardController : ControllerBase
    {
        private Service.IDashboardService _dashboardService;
        public DashboardController(Service.IDashboardService dashboardService)
        {
            _dashboardService = dashboardService;
        }
        // GET: api/Dashboard
        [HttpGet("GetAllSum")]
        public async Task<ActionResult<string>> GetCustosAsync(string tipo = "", string dataInicio = "", string dataFim = "")
        {
            try
            {
                var filter = new DataFilter() { tipo = tipo, dataInicio = UtilDateTime.ToDateTime(dataInicio), dataFim = UtilDateTime.ToDateTime(dataFim) };
                return await _dashboardService.GetCustos(filter);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}