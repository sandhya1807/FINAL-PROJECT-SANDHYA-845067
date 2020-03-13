using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.SellerService.Models;
using Emart.SellerService.Controllers;
using Emart.SellerService.Repositary;

namespace Emart.SellerService.Repositary
{
    public class ItemRepository:IItemRepositary
    {
        private readonly EMARTDBContext _context;
        public ItemRepository(EMARTDBContext context)
        {
            _context = context;
        }
        public Items GetItem(string id)
        {
            return _context.Items.Find(id);
        }

        public void AddItem(Items items)
        {

            _context.Add(items);
            _context.SaveChanges();
        }

        public List<Items> ViewItems(string sid)
        {
                   return _context.Items.ToList();
        }

        public void DeleteItem(string id)
        {
            Items item = _context.Items.Find(id);
            _context.Remove(item);
            _context.SaveChanges();
        }

       
        public void UpdateItem(Items items)
        {
            _context.Items.Update(items);
            _context.SaveChanges();
        }

        public List<Category> GetCategory()
        {
            return _context.Category.ToList();
        }
        public List<SubCategory> GetSubCategory(int categoryid)
        {
            List<SubCategory> subCategories = _context.SubCategory.Where(e => e.Categoryid == categoryid).ToList();
            return _context.SubCategory.ToList();
        }

    }
}
