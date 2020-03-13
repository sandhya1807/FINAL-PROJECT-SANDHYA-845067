using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.BuyerServices.Models;
using Emart.BuyerServices.Repositories;
using EMart.Buyerservices.Controllers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EMart.Buyerservices.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BuyerController : ControllerBase
    {
        private IBuyerRepository _repo;
        public BuyerController(IBuyerRepository repo)
        {
            _repo = repo;
        }
        [HttpGet]
        [Route("GetById/{Bid}")]
        public IActionResult GetById(string Bid)
        {
            try
            {
                return Ok(_repo.GetById(Bid));
            }
            catch(Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpPost]
        [Route("BuyItem")]
        public IActionResult BuyItem(PurchaseHistory purchaseHistory)
        {
            try
            {
                _repo.BuyItem(purchaseHistory);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpPut]
        [Route("EditProfile")]
        public IActionResult EditProfile(Buyer buyer)
        {
            try
            {
                _repo.EditProfile(buyer);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
                     
        [HttpGet]
        [Route("GetProfile/{id}")]
        public IActionResult GetProfile(string id)
        {
            try
            {

                return Ok(_repo.GetProfile(id));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }

        }
      
        [HttpGet]
        [Route("SearchItems/{name}")]
        public IActionResult SearchItem(string name)
        {
            try
            {
                return Ok(_repo.SearchItems(name));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
       [HttpGet]
        [Route("PurchaseHistory/{id}")]
        public IActionResult PurchaseHistory(string id)
        {
            try
            {

                return Ok(_repo.PurchaseHistories(id));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
           }

        }
        [HttpGet]
        [Route("GetCategory")]
        public IActionResult GetCategories()
        {
            try
            {

                return Ok(_repo.GetCategories());
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("GetSubCategory")]
        public IActionResult GetSubCategory(int id)
        {
            try
            {

                return Ok(_repo.GetSubCategories(id));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("GetAllItems")]
        public IActionResult Get()
        {
            try
            {
                return Ok(_repo.GetAllItems());
            }
            catch(Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("SearchByCategoryId/{categoryid}")]
        public IActionResult SearchByCategoryId(int categoryid)
        {
            try
            {
                return Ok(_repo.SearchByCategoryId(categoryid));
            }
            catch(Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpPost]
        [Route("Addtocart")]

        public IActionResult Addtocart(Cart cartobj)
        {
            try
            {
                _repo.Addtocart(cartobj);
                return Ok();
            }

            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }

        [HttpDelete]
        [Route("Deletefromcart/{cartid}")]
        public IActionResult Deletefromcart(string cartid)
        {
            try
            {
                _repo.Deletefromcart(cartid);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }

        [HttpGet]
        [Route("ViewCart")]
        public IActionResult ViewCart()
        {
            try
            {

                return Ok(_repo.ViewCart());
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }

    }
}
