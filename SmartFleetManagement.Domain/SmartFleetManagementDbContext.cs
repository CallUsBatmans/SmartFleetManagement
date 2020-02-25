using Microsoft.EntityFrameworkCore;

namespace SmartFleetManagement.Domain
{
    public sealed class SmartFleetManagementDbContext: DbContext
    {
        public SmartFleetManagementDbContext(DbContextOptions<SmartFleetManagementDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }
        public DbSet<Address> Addresses { get; set; }
        public DbSet<AddressType> AddressTypes { get; set; }
        public DbSet<UserAddress> UserAddresses { get; set; }
        public DbSet<Country> Countries { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }
    }
}