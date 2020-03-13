using Emart.AccountService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.AccountService.Repository
{
    public interface IAccountRepository
    {
       Buyer BuyerLogin(string username, string password);
       Seller SellerLogin(string username, string password);
        void SellerRegister(Seller seller);
        void BuyerRegister(Buyer buyer);
    }
}

