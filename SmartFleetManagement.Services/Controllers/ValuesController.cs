using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.OData;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SmartFleetManagement.Domain;
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
            var roles = _cache.ReadFromCache<IEnumerable<UserRole>>(nameof(UserRole));

            //var roles = _context.UserRoles.Select(x => x).ToList();

            //await _context.Users.AddAsync(new User("superuser", "superuser@test.com", "superuser", "testsuperuser", "testsuperuser", roles.SingleOrDefault(x => x.Code == "role.superuser")));
            //await _context.Users.AddAsync(new User("admin", "admin@test.com", "admin", "testadminuser", "testadminuser",
            //    roles.SingleOrDefault(x => x.Code == "role.admin")));
            //await _context.Users.AddAsync(new User("user", "user@test.com", "user", "testuseruser", "testuseruser",
            //    roles.SingleOrDefault(x => x.Code == "role.user")));

            //await _context.SaveChangesAsync();

            return Ok(roles);
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