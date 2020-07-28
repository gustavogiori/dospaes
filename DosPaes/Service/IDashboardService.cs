using DosPaes.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DosPaes.Service
{
    public interface IDashboardService : IService
    {
        Task<string> GetCustos(DataFilter dashboardFilter, DataBaseContext _context);
    }
}
