using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SmartFleetManagement.Domain;

namespace SmartFleetManagement.DataAccess.Services.Users
{
    public class UserServices : IUserServices
    {
        private readonly SmartFleetManagementDbContext _context;

        public UserServices(SmartFleetManagementDbContext context)
        {
            _context = context;
        }

        public async Task<(User user, string roleCode)> GetUser(string username, string password)
        {
            var result = await (from u in _context.Users
                                join ur in _context.UserRoles on u.Id equals ur.User.Id
                                join r in _context.Roles on ur.Role.Id equals r.Id
                                where (u.Username == username && u.Password == password)
                                select new
                                {
                                    user = u,
                                    roleCode = r.Code
                                }).FirstOrDefaultAsync();

            return (result.user, result.roleCode);
        }
    }
}
