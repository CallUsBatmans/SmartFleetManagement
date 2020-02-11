using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace SmartFleetManagement.Services.Helpers
{
    public static class RequestHandler
    {
        public static async Task<IActionResult> HandleRequest<T>(Func<Task<T>> request)
        {
            var response = await request();

            return new ObjectResult(response);
        }
    }
}