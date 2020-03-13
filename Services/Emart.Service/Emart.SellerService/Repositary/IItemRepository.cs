using Emart.SellerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.SellerService.Repositary
{
        public interface IItemRepositary
    {
        Items GetItem(string iid);
        public void AddItem(Items items);
        List<Items> ViewItems(string sid);
        void DeleteItem(string id);
        void UpdateItem(Items items);
        
        List<Category> GetCategory();
       List<SubCategory> GetSubCategory(int categoryid);
    }
}
