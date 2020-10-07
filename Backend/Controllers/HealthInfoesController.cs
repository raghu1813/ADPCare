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
using Backend.Services;

namespace Backend.Controllers
{
    [AllowAnonymous]
    [Route("api/{userId}/healthInfoes")]
    [ApiController]
    public class HealthInfoesController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        

         private readonly IMailService _mailService;

        public HealthInfoesController(DataContext context, IMapper mapper, IMailService mailService)
        {
            _context = context;
            _mapper = mapper;
            _mailService = mailService;
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
            string email= " ";
            switch (user.Id)
            {
                case 1: email = "raghuramk33@gmail.com";
                        break;
                case 2: email = "nabin2407patra @gmail.com";
                        break;
                case 3: email = "priyanka1012madas@gmail.com";
                    break;
                case 4: email = "aithusriharika@gmail.com";
                    break;
            }
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
            if (s >  30)
            {
                MailRequest mailRequest = new MailRequest();
                mailRequest.Body = "Stay safe and Work from home today";
                mailRequest.ToEmail = email;
                mailRequest.Subject = "Update from ADP";
                try
                {
                    await _mailService.SendEmailAsync(mailRequest);
                    return Ok();
                }
                catch (Exception ex)
                {
                    throw;
                }
            }
            else
            {
                MailRequest mailRequest = new MailRequest();
                mailRequest.Body = "You can Come to Office With your own Precautions";
                mailRequest.ToEmail = email;
                mailRequest.Subject = "Update from ADP";
                try
                {
                    await _mailService.SendEmailAsync(mailRequest);
                    return Ok();
                }
                catch (Exception ex)
                {
                    throw;
                }
            }
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
