using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Authorization;
using Backend.Dtos;
using AutoMapper;

namespace Backend.Controllers
{
    [AllowAnonymous]
    [Route("api/{userId}/healthInfoes")]
    [ApiController]
    public class HealthInfoesController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public HealthInfoesController(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/HealthInfoes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<HealthInfo>>> GetHealthInfos()
        {
            return await _context.HealthInfos.ToListAsync();
        }

        // GET: api/HealthInfoes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<HealthInfo>> GetHealthInfo(int id)
        {
            var q =  _context.Users.Include(h => h.HealthInfo).AsQueryable();
            var user = await q.FirstOrDefaultAsync(u => u.Id == id);
            var healthInfo = user.HealthInfo;

            return healthInfo;
        }

        // PUT: api/HealthInfoes/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHealthInfo(int id, HealthUpdateDto healthUpdateDto)
        {
            var q = _context.Users.Include(h => h.HealthInfo).AsQueryable();
            var user = await q.FirstOrDefaultAsync(u => u.Id == id);

            var healthInfo = await _context.HealthInfos.FindAsync(user.HealthInfo.Id);
            var s = 0;
            if (healthUpdateDto.FamilyStatus == true)
            {
                s += 40;
            }
            if (healthUpdateDto.Temperature >= 99)
            {
                s += 30;
            }
            if (healthUpdateDto.OxygenLevel <= 90)
            {
                s += 50;
            }

            _mapper.Map(healthUpdateDto, healthInfo);
            user.RiskScore = s;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // POST: api/HealthInfoes
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<HealthInfo>> PostHealthInfo(int userId, HealthInfo healthInfo)
        {
            var user = await _context.Users.FindAsync(userId);
            _context.HealthInfos.Add(healthInfo);
            user.HealthInfo = healthInfo;
            await _context.SaveChangesAsync();

            // return CreatedAtRoute("GetHealthInfo", new { id = healthInfo.Id }, healthInfo);
            return NoContent();
        }

        // DELETE: api/HealthInfoes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<HealthInfo>> DeleteHealthInfo(int id)
        {
            var healthInfo = await _context.HealthInfos.FindAsync(id);
            if (healthInfo == null)
            {
                return NotFound();
            }

            _context.HealthInfos.Remove(healthInfo);
            await _context.SaveChangesAsync();

            return healthInfo;
        }

        private bool HealthInfoExists(int id)
        {
            return _context.HealthInfos.Any(e => e.Id == id);
        }
    }
}
