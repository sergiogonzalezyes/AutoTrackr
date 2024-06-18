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
    public class UsersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IConfiguration _configuration;

        public UsersController(ApplicationDbContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(User user)
        {
            var connectionString = _configuration.GetConnectionString("DefaultConnection");

            using (var connection = new SqlConnection(connectionString))
            {
                using (var command = new SqlCommand("RegisterUser", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@Username", user.Username);
                    command.Parameters.AddWithValue("@PasswordHash", user.PasswordHash);
                    command.Parameters.AddWithValue("@Email", user.Email);

                    connection.Open();

                    try
                    {
                        var userIdObject = await command.ExecuteScalarAsync();
                        if (userIdObject != null && userIdObject != DBNull.Value)
                        {
                            var userId = (int)(decimal)userIdObject;
                            user.UserId = userId;
                            return Ok(user); // Registration successful
                        }
                        else
                        {
                            return BadRequest("Failed to register user."); // Handle registration failure
                        }
                    }
                    catch (SqlException ex)
                    {
                        // Check for specific error codes returned by the stored procedure
                        if (ex.Number == -1)
                        {
                            return BadRequest("Username already exists. Please choose a different username.");
                        }
                        else if (ex.Number == -2)
                        {
                            return BadRequest("Email address is already registered. Please use a different email.");
                        }
                        else
                        {
                            return BadRequest("Failed to register user. SQL error: " + ex.Message);
                        }
                    }
                }
            }
        }



        [HttpPost("login")]
        public async Task<IActionResult> Login(User loginUser)
        {
            try
            {
                var connectionString = _configuration.GetConnectionString("DefaultConnection");

                using (var connection = new SqlConnection(connectionString))
                {
                    var command = new SqlCommand("VerifyLogin", connection)
                    {
                        CommandType = CommandType.StoredProcedure
                    };

                    command.Parameters.AddWithValue("@Username", loginUser.Username);
                    command.Parameters.AddWithValue("@PasswordHash", loginUser.PasswordHash);

                    connection.Open();
                    var userId = await command.ExecuteScalarAsync();

                    if (userId == null || userId == DBNull.Value)
                    {
                        return Unauthorized();
                    }

                    // You can fetch the user details if needed
                    var user = await _context.Users.FindAsync((int)userId);
                    return Ok(user);
                }
            }
            catch (Exception ex)
            {
                // Handle exceptions as needed
                Console.Error.WriteLine($"Error during login: {ex.Message}");
                return StatusCode(500, "Internal server error");
            }
        }
    }
}
