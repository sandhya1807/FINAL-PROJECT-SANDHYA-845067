using Microsoft.AspNetCore.Mvc;
using System;

namespace ItemService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        [HttpGet]
        [Route("Greet")]
        public IActionResult Greet()
        {
            return Ok("HelloWorld");
           
        }
    }
    
}