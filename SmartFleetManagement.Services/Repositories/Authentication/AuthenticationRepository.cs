using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using SmartFleetManagement.DataAccess.Services.Users;
using SmartFleetManagement.Domain;
using SmartFleetManagement.Services.Extensions;
using SmartFleetManagement.Services.Models;
using SmartFleetManagement.Services.Settings;
using SmartFleetManagement.Services.View_Models;
using SmartFleetManagement.TokenIssuer;

namespace SmartFleetManagement.Services.Repositories.Authentication
{
    public class AuthenticationRepository: IAuthenticationRepository
    {
        private readonly AppSettings _appSettings;
        private readonly IUserServices _userServices;
        private readonly ITokenIssuerService _tokenIssuer;

        public AuthenticationRepository(IOptions<AppSettings> appSettings, IUserServices userServices, ITokenIssuerService tokenIssuer)
        {
            _appSettings = appSettings.Value;
            _userServices = userServices;
            _tokenIssuer = tokenIssuer;
        }

        public async Task<AuthenticatedUserViewModel> Authenticate(AuthenticateModel credentials)
        {
            var user = await GetUserToAuthenticate(credentials);

            if (!user.DoesExist())
            {
                return null;
            }

            var (token, role) =
                _tokenIssuer.IssueAuthorizationToken(user, _appSettings.Secret, _appSettings.Expires);

            return new AuthenticatedUserViewModel(token, role);
        }

        private async Task<User> GetUserToAuthenticate(AuthenticateModel credentials)
        {
            return await _userServices.GetUser(credentials.Username, credentials.Password);
        }
    }
}
