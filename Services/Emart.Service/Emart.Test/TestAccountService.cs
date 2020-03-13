using Emart.AccountService.Models;
using Emart.AccountService.Repository;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;

namespace Emart.Test
{
    public class TestAccountRepository
    {
        AccountRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new AccountRepository(new EMARTDBContext());
        }
        [Test]
        [Description("to test add seller")]
        public void TestAddSeller()

        {
            _repo.SellerRegister(new Seller()
            {
                Sid = "ESEL123",
                Susername = "prasu",
                Password = "chinna",
                Companyname = "infosys",
                Mobile = "9000326398",
                Emailid = "prasu@123.com",
                Gstin = 90,
                Brief = "good",
                Website = "www.infosys.com",
              Address = "karamchedu"


            });
        }
        [Test]
        [Description("to test add buyer")]
        public void AddBuyer()
        {
            _repo.BuyerRegister(new Buyer()
            {
                Bid = "EBuy123",
                Createddatetime =DateTime.Now,
                Busername = "vijay",
                Password = "sush",
                Emailid = "vijaysush@gmail.com",
                Mobile = "8142070133"
            });
        }
        [Test]
        [Description("to check seller login")]
        public void TestSellerLogin()
        {
            var result = _repo.SellerLogin("vinni", "sandy");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("to check Buyer login")]
        public void TestBuyerLogin()
        {
            var result = _repo.BuyerLogin("sandy", "sandhya123");
            Assert.IsNotNull(result);
        }


    }
}