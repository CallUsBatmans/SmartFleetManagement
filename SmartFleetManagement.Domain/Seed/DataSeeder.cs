using System.Collections.Generic;
using System.Linq;

namespace SmartFleetManagement.Domain.Seed
{
    internal class DataSeeder
    {
        public static IEnumerable<UserRole> SeedUserRoles()
        {
            yield return new UserRole("Superuser", "role.superuser", "The biggest role of an user");
            yield return new UserRole("Admin", "role.admin", "Has administrative roles");
            yield return new UserRole("User", "role.user", "Standard user of the app");
        }

        public static IEnumerable<User> SeedUsers(IEnumerable<UserRole> roles)
        {
            yield return new User("superuser", "superuser@test.com", "superuser", "testsuperuser", "testsuperuser", roles.SingleOrDefault(x => x.Code == "role.superuser"));
            yield return new User("admin", "admin@test.com", "admin", "testadminuser", "testadminuser", roles.SingleOrDefault(x => x.Code == "role.admin"));
            yield return new User("user", "user@test.com", "user", "testuseruser", "testuseruser", roles.SingleOrDefault(x => x.Code == "role.user"));
        }
    }
}
