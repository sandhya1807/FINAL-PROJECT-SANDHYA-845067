using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using Emart.AdminService.Models;
using Emart.AdminService.Repositories;

namespace Emart.Test
{
    class TestAdminService
    {
        AdminRepository _repo;
        [SetUp]
        public void Setup()
        {
            _repo = new AdminRepository(new EMARTDBContext());
        }
        [Test]
        [Description("Test AddCategory")]
        public void TestAddCategory()
        {
            _repo.AddCategory(new Category()
            {
                Categoryid=4,
                Categoryname="Electronics",
                Briefdetails="nothing"
            });
        }
        [Test]
        [Description("Test AddSubCategory")]
        public void TestAddSubCategory()
        {
            _repo.AddSubCategory(new SubCategory()
            {
                Subcategoryid =4,
                Subcategoryname = "Watches",
                Categoryid = 3,
                Gst = 12
            });
        }
        [Test]
        [Description("Test DeleteCategory")]
        public void TestDeleteCategory()
        {
            _repo.DeleteCategory(344);
            var result = _repo.GetCategoryById(344);
            Assert.Null(result);
        }
        [Test]
        [Description("Test DeleteSubCategory")]
        public void TestDeleteSubCategory()
        {
            _repo.GetSubCategoryById(2);
            var result = _repo.GetSubCategoryById(2);
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test GetCategoryById")]
        public void TestGetCategoryById()
        {
            var result = _repo.GetCategoryById(3);
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test GetSubCategoryById")]
        public void TestGetSubCategoryById()
        {
            var result = _repo.GetSubCategoryById(2);
            Assert.IsNotNull(result);
        }
    }
}
