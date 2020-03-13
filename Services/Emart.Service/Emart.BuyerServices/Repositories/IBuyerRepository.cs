using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.BuyerServices.Models;
using Emart.BuyerServices.Repositories;
using Emart.BuyerServices.Controllers;

namespace Emart.BuyerServices.Repositories
{
    public   interface IBuyerRepository
    {
        List<Items> SearchItems(string name);
        Buyer GetById(string Bid);
        void BuyItem(PurchaseHistory obj);
        void EditProfile(Buyer buyer);
        Buyer GetProfile(string Bid);
        List<PurchaseHistory>PurchaseHistories(string Bid);
        List<Category> GetCategories();
        List<SubCategory> GetSubCategories(int cid);
        List<Items> GetAllItems();
        List<Items> SearchByCategoryId(int categoryid);
        void Addtocart(Cart cartobj);
        void Deletefromcart(string cartid);
        List<Cart> ViewCart();



    }
}
