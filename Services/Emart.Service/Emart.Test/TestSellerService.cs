using Emart.SellerService.Models;
using Emart.SellerService.Repositary;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;


namespace Emart.Test
{
    public class TestSellerRepository
    {
        SellerRepository _repo;
        ItemRepository _repo1;
        [SetUp]
        public void SetUp()
        {
            _repo = new SellerRepository(new EMARTDBContext());
        }
        [Test]
        public void TestGetProfile()
        {
            var result = _repo.GetProfile("sf");
            Assert.Null(result);
        }
        [Test]
        public void TestEditProfile()
        {
            Seller seller = _repo.GetProfile("1");
            seller.Emailid ="Amazon";
            seller.Mobile ="9581719882";
            _repo.EditProfile(seller);
            Seller seller1 = _repo.GetProfile("1");
            Assert.AreSame(seller, seller1);

        }
        
    }
}
