using System.ComponentModel.DataAnnotations;

namespace AutoTrackrAPI.Models
{
    public class Vehicle
    {
        [Key]
        public int VehicleId { get; set; } // Primary key
        public int UserId { get; set; }
        public string Make { get; set; } = string.Empty; // Default value
        public string Model { get; set; } = string.Empty; // Default value
        public int Year { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; } = string.Empty; // Default value
        public string ImageUrl { get; set; } = string.Empty; // Default value
    }
}
