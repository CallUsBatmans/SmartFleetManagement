using Microsoft.EntityFrameworkCore;
using SmartFleetManagement.Domain.Seed;

namespace SmartFleetManagement.Domain
{
    public sealed class SmartFleetManagementDbContext: DbContext
    {
        public SmartFleetManagementDbContext(DbContextOptions<SmartFleetManagementDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }
        public DbSet<Address> Addresses { get; set; }
        public DbSet<AddressType> AddressTypes { get; set; }
        public DbSet<Country> Countries { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasOne(r => r.Role);

            modelBuilder.Entity<UserRole>().HasData(DataSeeder.SeedUserRoles());
        }
    }
}