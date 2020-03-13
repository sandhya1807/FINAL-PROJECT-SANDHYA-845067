using Emart.BuyerServices.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMart.Buyerservices.Repository;
using Emart.BuyerServices.Repositories;

namespace EMart.Buyerservices.Repository
{
    public class BuyerRepository : IBuyerRepository
    {
        private readonly EMARTDBContext _context;
        public BuyerRepository(EMARTDBContext context)
        {
            _context = context;
        }
       public Buyer GetById(string Bid)

        {
            return _context.Buyer.Find(Bid);
        }
        public void BuyItem(PurchaseHistory obj)
        {
            _context.PurchaseHistory.Add(obj);
            _context.SaveChanges();
        }

       public void EditProfile(Buyer buyer)
        {
            _context.Buyer.Update(buyer);
            _context.SaveChanges();

        }
         public Buyer GetProfile(string Bid)
        {
            return _context.Buyer.Find(Bid);
        }
        public List<PurchaseHistory>PurchaseHistories(string Bid)
        {
            return _context.PurchaseHistory.Where(e => e.Bid == Bid).ToList();
        }
        public List<Items> SearchItems(string name)

        {
            return _context.Items.Where(e => e.Itemname == name).ToList();
        }

       public  List<Category>GetCategories()
        {
            return _context.Category.ToList();
        }

            public  List<SubCategory>GetSubCategories(int cid)
        {
            List<SubCategory> subCategories = _context.SubCategory.Where(e => e.Categoryid == cid).ToList();
            return subCategories;
        }

          public List<Items>GetAllItems()
        {
            return _context.Items.ToList();
        }

        List<Items> IBuyerRepository.SearchByCategoryId(int categoryid)
        {
            return _context.Items.Where(e => e.Categoryid == categoryid).ToList();
        }

        public void Addtocart(Cart cartobj)
        {
            _context.Cart.Add(cartobj);
            _context.SaveChanges();
        }

        public void Deletefromcart(string cartid)
        {
            Cart cartobj = _context.Cart.Find(cartid);
            _context.Remove(cartobj);
            _context.SaveChanges();
        }

        public List<Cart> ViewCart()
        {
            return _context.Cart.ToList();
        }
    }


}

       
      
   
   
        
        
        

       
    

