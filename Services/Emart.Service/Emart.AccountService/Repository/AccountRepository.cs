using Emart.AccountService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.AccountService.Repository
{
    public class AccountRepository : IAccountRepository
    {
        private readonly EMARTDBContext _context;
        public AccountRepository(EMARTDBContext context)
        {
            _context = context;
        }
        public Buyer BuyerLogin(string username, string password)
        {
            Buyer b = _context.Buyer.SingleOrDefault(b => b.Busername == username && b.Password == password);
            return b;
         }
        public void BuyerRegister(Buyer buyer)
        {
            _context.Add(buyer);
            _context.SaveChanges();
        }
        public Seller SellerLogin(string username, string password)
        {
            Seller s = _context.Seller.SingleOrDefault(s => s.Susername == username && s.Password == password);
            return s;
        }
        public void SellerRegister(Seller seller)
        {
            _context.Add(seller);
            _context.SaveChanges();
        }
    }
}
        