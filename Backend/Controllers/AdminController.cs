using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [AllowAnonymous]
    [Route("api/{userId}/admin")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly DataContext _context;

        public AdminController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<bool> GetStatusAsync(int userId)
        {
            var q = _context.Users.Include(h => h.HealthInfo).AsQueryable();
            var user = await q.FirstOrDefaultAsync(u => u.Id == userId);
            if (user.RiskScore > 30)
                return true;
            else
                return false;
        }
    }
}
