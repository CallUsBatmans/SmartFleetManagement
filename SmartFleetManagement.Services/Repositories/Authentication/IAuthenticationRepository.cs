using System.Threading.Tasks;
using SmartFleetManagement.Services.Models;
using SmartFleetManagement.Services.View_Models;

namespace SmartFleetManagement.Services.Repositories.Authentication
{
    public interface IAuthenticationRepository
    {
        Task<AuthenticatedUserViewModel> Authenticate(AuthenticateModel credentials);
    }
}