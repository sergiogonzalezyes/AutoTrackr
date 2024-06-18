using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using AutoTrackrAPI.Models;
using AutoTrackrAPI.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Threading.Tasks;

namespace AutoTrackrAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VehiclesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IConfiguration _configuration;

        public VehiclesController(ApplicationDbContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        [HttpPost("addVehicle")]
        public async Task<IActionResult> AddVehicle(Vehicle vehicle)
        {
            var connectionString = _configuration.GetConnectionString("DefaultConnection");

            using (var connection = new SqlConnection(connectionString))
            {
                using (var command = new SqlCommand("AddVehicle", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@UserId", vehicle.UserId);
                    command.Parameters.AddWithValue("@Make", vehicle.Make);
                    command.Parameters.AddWithValue("@Model", vehicle.Model);
                    command.Parameters.AddWithValue("@Year", vehicle.Year);
                    command.Parameters.AddWithValue("@Price", vehicle.Price);
                    command.Parameters.AddWithValue("@Description", vehicle.Description);
                    command.Parameters.AddWithValue("@ImageUrl", vehicle.ImageUrl);

                    connection.Open();
                    var vehicleIdObject = await command.ExecuteScalarAsync();
                    if (vehicleIdObject != null && vehicleIdObject != DBNull.Value)
                    {
                        var vehicleId = (int)(decimal)vehicleIdObject;
                        vehicle.VehicleId = vehicleId;
                    }
                }
            }
            return Ok(vehicle);
        }

    }
}
