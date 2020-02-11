using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SmartFleetManagement.Domain;

namespace SmartFleetManagement.DataAccess.Services.Users
{
    public class UserServices: IUserServices
    {
        private readonly SmartFleetManagementDbContext _context;

        public UserServices(SmartFleetManagementDbContext context)
        {
            _context = context;
        }

        public async Task<User> GetUser(string username, string password)
        {
            return await _context.Users.Include(x => x.Role).SingleOrDefaultAsync(x =>
                x.Username == username && x.Password == password);
        }
    }
}
