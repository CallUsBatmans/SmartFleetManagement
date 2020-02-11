using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SmartFleetManagement.Services.Models;
using SmartFleetManagement.Services.Repositories.Authentication;
using static SmartFleetManagement.Services.Helpers.RequestHandler;

namespace SmartFleetManagement.Services.Controllers
{
    public class AuthenticationController : Controller
    {
        private readonly IAuthenticationRepository _authenticationRepository;

        public AuthenticationController(IAuthenticationRepository authenticationRepository)
        {
            _authenticationRepository = authenticationRepository;
        }

        [HttpPost]
        [Route("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody]AuthenticateModel credentials)
        {
            return await HandleRequest(() => _authenticationRepository.Authenticate(credentials));
        }
    }
}