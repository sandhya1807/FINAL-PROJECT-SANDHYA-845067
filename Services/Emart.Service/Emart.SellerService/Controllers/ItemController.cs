using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.SellerService.Models;
using Emart.SellerService.Repositary;

namespace Emart.SellerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        private readonly IItemRepositary _repo;
        public ItemController(IItemRepositary rep)
        {
            _repo = rep;
        }
        [HttpPost]
        [Route("AddItem")]
        public IActionResult Post(Items items)
        {
            try
            {
                _repo.AddItem(items);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpDelete]
        [Route("DeleteItem/{id}")]
        public IActionResult Delete(string id)
        {
            try
            {
                _repo.DeleteItem(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }

        }
        [HttpPut]
        [Route("UpdateItem")]
        public IActionResult put(Items items)
        {
            try
            {
                _repo.UpdateItem(items);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetItem/{id}")]
        public IActionResult Get(string id)
        {
            try
            {
                return Ok(_repo.GetItem(id));
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("ViewItems/{sid}")]
        public IActionResult ViewItems(string sid)
        {
            try
            {

                return Ok(_repo.ViewItems(sid));
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);

            }
        }
        [HttpGet]
        [Route("GetCategory")]
        public IActionResult GetCat()
        {
            try
            {
                return Ok(_repo.GetCategory());
            }
            catch(Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetSubCategory/{categoryid}")]
           public IActionResult GetSubCat(int categoryid)
        {
            try
            {
                return Ok(_repo.GetSubCategory(categoryid));
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }

     }
}
