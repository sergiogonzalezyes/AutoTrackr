using Microsoft.EntityFrameworkCore;
using AutoTrackrAPI.Models;

namespace AutoTrackrAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Vehicle> Vehicles { get; set; }
        public DbSet<MaintenanceLog> MaintenanceLogs { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Vehicle>()
                .Property(v => v.Price)
                .HasColumnType("decimal(18,2)");

            modelBuilder.Entity<MaintenanceLog>()
                .Property(m => m.Cost)
                .HasColumnType("decimal(18,2)");
        }
    }
}
