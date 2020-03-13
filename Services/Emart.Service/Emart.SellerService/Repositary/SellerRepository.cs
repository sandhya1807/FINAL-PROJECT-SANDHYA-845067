using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.SellerService.Models;
using Emart.SellerService.Repositary;
using Emart.SellerService.Controllers;

namespace Emart.SellerService.Repositary
{
    public class SellerRepository:IsellerRepositary
    {
            private readonly EMARTDBContext _context;
            public SellerRepository(EMARTDBContext context)
            {
                _context = context;
            }
            public void EditProfile(Seller seller)
            {
                _context.Seller.Update(seller);
                _context.SaveChanges();
            }

            public Seller GetProfile(string sid)
            {
                return _context.Seller.Find(sid);
            }
        public Seller GetById(string sid)
        {
            return _context.Seller.Find(sid);
        }
    }
}
