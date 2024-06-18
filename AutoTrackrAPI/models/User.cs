using System.ComponentModel.DataAnnotations;

namespace AutoTrackrAPI.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; } // Primary key
        public string Username { get; set; } = string.Empty; // Default value
        public string PasswordHash { get; set; } = string.Empty; // Default value
        public string Email { get; set; } = string.Empty; // Default value
    }
}
