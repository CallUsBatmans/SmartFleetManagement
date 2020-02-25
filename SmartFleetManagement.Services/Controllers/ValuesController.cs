using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.OData;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SmartFleetManagement.Domain;
using SmartFleetManagement.Domain.Security;
using SmartFleetManagement.Services.Cache;

namespace SmartFleetManagement.Services.Controllers
{
    public class ValuesController : Controller
    {
        private readonly ILogger<ValuesController> _logger;
        private readonly SmartFleetManagementDbContext _context;
        private readonly MemoryDataCache _cache;

        public ValuesController(ILogger<ValuesController> logger, SmartFleetManagementDbContext context, MemoryDataCache cache)
        {
            _logger = logger;
            _context = context;
            _cache = cache;
        }

        [EnableQuery]
        [HttpGet]
        [Route("values")]
        public async Task<IActionResult> Get()
        {
            var roles = _cache.ReadFromCache<IEnumerable<Role>>(nameof(Role)).ToList();
            //var roles = _context.UserRoles.Select(x => x).ToList();

            var users = new List<User>()
            {
                new User("superuser", "superuser@test.com", "superuser", "testsuperuser"),
                new User("admin", "admin@test.com", "admin", "testadminuser"),
                new User("user", "user@test.com", "user", "testuseruser")
            };

            await _context.Users.AddRangeAsync(users);

            await _context.SaveChangesAsync();

            var usersList = _context.Users.Select(x => x).ToList();

            return Ok(new
            {
                roles = roles,
                users = usersList
            });
        }

        [Authorize]
        [HttpGet]
        [Route("value")]
        public IActionResult GetTest()
        {
            return Ok("Authorized");
        }
    }
}