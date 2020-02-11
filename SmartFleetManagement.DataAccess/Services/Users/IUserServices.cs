using System.Threading.Tasks;
using SmartFleetManagement.Domain;

namespace SmartFleetManagement.DataAccess.Services.Users
{
    public interface IUserServices
    {
        Task<User> GetUser(string username, string password);
    }
}