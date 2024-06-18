using Microsoft.AspNetCore.Mvc;
using AutoTrackrAPI.Models; // Ensure this namespace is correct
using AutoTrackrAPI.Data;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Linq;

namespace AutoTrackrAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MaintenanceLogsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public MaintenanceLogsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetLogs()
        {
            var logs = await _context.MaintenanceLogs.ToListAsync();
            return Ok(logs);
        }

        [HttpPost]
        public async Task<IActionResult> AddLog(MaintenanceLog log)
        {
            _context.MaintenanceLogs.Add(log);
            await _context.SaveChangesAsync();
            return Ok(log);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLog(int id)
        {
            var log = await _context.MaintenanceLogs.FindAsync(id);
            if (log == null)
            {
                return NotFound();
            }
            _context.MaintenanceLogs.Remove(log);
            await _context.SaveChangesAsync();
            return Ok(log);
        }
    }
}
