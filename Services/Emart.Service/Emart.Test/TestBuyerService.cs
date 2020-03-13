using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using EMart.Buyerservices.Repository;
using Emart.BuyerServices.Models;

namespace Emart.Test
{
    [TestFixture]
    public class TestBuyerService
    {
        BuyerRepository _repo;
        [SetUp]
        public void Setup()
        {
            _repo = new BuyerRepository(new EMARTDBContext());
        }
        [Test]
        public void TestGetById()
        {
            var result = _repo.GetById("1");
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestGetProfile()
        {
            var result = _repo.GetProfile("1");
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestEditProfile()
        {
            Buyer buyer = _repo.GetById("1");
            buyer.Mobile = "7894561335";
            buyer.Emailid = "editprofile@gmail.com";
            buyer.Password = "sandhya123";
            _repo.EditProfile(buyer);
            Buyer buyer1 = _repo.GetById("12");
            //Assert.AreSame(buyer,buyer1);
        }
        [Test]
        public void TestGetCategories()
        {
            var result = _repo.GetCategories();
            Assert.GreaterOrEqual(result.Count, 4);
        }
             
        [Test]
        [Description("to test add to cart")]
        public void Addtocart()
        {
            _repo.Addtocart(new Cart()
            {
                CartId = "Emcr60",
                Iid = "I078",
                Categoryid = 1,
                Subcategoryid = 1,
                Itemname = "flower",
                Price = "45",
                Description = "flower Keychain",
                Remarks = "super",
                Sid = "1",
                Image = "keychain.jpg",
                Bid = "1"
            });
            

        }
        [Test]
        [Description("to test buy item")]
        public void Buyitem()
        {
            _repo.BuyItem(new PurchaseHistory()
            {
                Id = "45",
                Bid = "1",
                Sid = "1",
                Transactiontype = "cashondelivery",
                Iid = "I078",
                Datetime = System.DateTime.Now,
                Remarks = "none"

            });
        }
       
        [Test]
        [Description("to test Get All Items")]

        public void TestGetAllItems()
        {
            var result = _repo.GetAllItems();
            Assert.IsNotNull(result);
            Assert.Greater(result.Count, 0);
        }
        [Test]
        [Description("to test Get cart by id")]

        public void TestCartItems()
        {
            var result = _repo.ViewCart();
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("to test Get All categories")]

        public void TestGetAllcategories()
        {
            var result = _repo.GetCategories();
            Assert.IsNotNull(result);
            Assert.Greater(result.Count, 0);
        }
        [Test]
        [Description("to test purchase history based on bid")]
        public void Testpurchase()
        {
            var result = _repo.PurchaseHistories("234 ");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("to test to search item by name")]
        public void TestsearchByname()
        {
            var result = _repo.SearchItems("panda");
            Assert.IsNotNull(result);
        }
        //[Test]
        //[Description("to test to search item by category")]
        //public void TestsearchBycategory()
        //{
        //    var result = _repo.("10");
        //    Assert.IsNotNull(result);
        //}
        //[Test]
        //[Description("to test to search item by subcategory")]
        //public void TestsearchBysubcategory()
        //{
        //    var result = _repo.SearchItemBySubCategory("0001");
        //    Assert.IsNotNull(result);
        //}
        //[Test]
        //[Description("to test delete cart items")]
        //public void TestTodelete()
        //{
        //    _repo.Deletefromcart("EMCR94");
        //    var result = _repo.ViewCart("EMCR27");
        //    Assert.Null(result);
        //}


    }
}

