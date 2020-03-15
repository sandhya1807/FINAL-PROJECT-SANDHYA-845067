using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using Emart.SellerService.Models;
using Emart.SellerService.Repositary;


namespace Emart.Test
{

    [TestFixture]
    class TestItemRepository
    {
        ItemRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new ItemRepository(new EMARTDBContext());
        }
        [Test]
        [Description("Test AddItem()")]
        public void TestAddItem()
        {
            _repo.AddItem(new Items()
            {
                Iid = "12",
                Categoryid =1,
                Subcategoryid =1,
                Itemname = "Mi 4",
                Sid = "1",
                Image = "backgroung.jpg",
                Price =78945,
                Description = "A mobile",
                Stocknumber = "855",
                Remarks = "Best"
            });
            var result = _repo.GetItem("I078");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test DeleteItem()")]
        public void TestDeleteItem()
        {
            _repo.DeleteItem("12");
            var result = _repo.GetItem("12");
            Assert.Null(result);
        }
        [Test]
        [Description("Test UpdateItem()")]
        public void TestUpdateItem()
        {
            Items item = _repo.GetItem("I12");
            item.Stocknumber = "5670";
            _repo.UpdateItem(item);
            Items item1 = _repo.GetItem("I12");
            Assert.AreEqual(item, item1);
        }
        
        [Test]
        [Description("Test ViewItems()")]
        public void TestViewItems()
        {
            var result = _repo.ViewItems("S001");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test GetItem()")]
        public void TestGetItem()
        {
            var result = _repo.GetItem("121");
            Assert.Null(result);
        }
        [Test]
        [Description("Test GetCategories()")]
        public void TestGetCategories()
        {
            var result = _repo.GetCategory();
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test GetSubCategories()")]
        public void TestGetSubCategories()
        {
            var result = _repo.GetSubCategory(12);
            Assert.IsNotNull(result);
        }
    }
}


