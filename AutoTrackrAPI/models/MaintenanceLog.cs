using System.ComponentModel.DataAnnotations;

namespace AutoTrackrAPI.Models
{
    public class MaintenanceLog
    {
        [Key]
        public int LogId { get; set; } // Primary key
        public int VehicleId { get; set; }
        public decimal Cost { get; set; }
        public DateTime Date { get; set; }
        public TimeSpan Time { get; set; }
        public string Description { get; set; } = string.Empty; // Default value
    }
}
