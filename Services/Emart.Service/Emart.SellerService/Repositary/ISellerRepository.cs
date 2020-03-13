using Emart.SellerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.SellerService.Repositary
{
    public interface IsellerRepositary
    {
        void EditProfile(Seller seller);
        Seller GetProfile(string sid);
        Seller GetById(string sid); 
    }
}