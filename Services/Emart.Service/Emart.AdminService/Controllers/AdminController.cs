using Emart.AdminService.Models;
using Emart.AdminService.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;

namespace Emart.AdminService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IAdminRepository _repo;
        public AdminController(IAdminRepository repo)
        {
            _repo= repo;
        }
        [HttpPost]
        [Route("AddCategory")]
        public IActionResult AddCategory(Category category)
        {
            try
            {
                _repo.AddCategory(category);
                return Ok();
            }
            catch(Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }

        [HttpPost]
        [Route("AddSubCategory")]
        public IActionResult AddSubCategory(SubCategory subcategory)
        {
            try
            {
                _repo.AddSubCategory(subcategory);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpDelete]
        [Route("DeleteCategory/{categoryid}")]
        public IActionResult DeleteCategory(int categoryid)
        {
            try
            {
                _repo.DeleteCategory(categoryid);
                return Ok();
            }
            catch(Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpDelete]
        [Route("DeleteSubCategory/{subcategoryid}")]
        public IActionResult DeleteSubCategory(int subcategoryid)
        {
            try
            {
                _repo.DeleteSubCategory(subcategoryid);
                return Ok();
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("ViewCategories")]
        public IActionResult ViewCategories()
        {
            try
            {
                return Ok(_repo.ViewCategories());
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("ViewSubCategories")]
        public IActionResult ViewSubCategories()
        {
            try
            {
                return Ok(_repo.ViewSubCategories());
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("GetCategory")]
        public IActionResult GetCategory()
        {
            try
            {
                return Ok(_repo.GetCategories());
            }
            catch(Exception e)
            {
                return NotFound(e.Message);      
            }
        }
        [HttpGet]
        [Route("GetCategoryById")]
        public IActionResult GetCategoryById(int categoryid)
        {
            try
            {
                return Ok(_repo.GetCategoryById(categoryid));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("GetSubCategoryById")]
        public IActionResult GetSubCategoryById(int subcategoryid)
        {
            try
            {
                return Ok(_repo.GetSubCategoryById(subcategoryid));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }

            }
}