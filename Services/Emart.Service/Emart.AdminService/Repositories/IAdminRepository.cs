using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.AdminService.Models;

namespace Emart.AdminService.Repositories
{
    public interface IAdminRepository
    {
        public void AddCategory(Category category);
        public void DeleteCategory(int categoryid);
        public void AddSubCategory(SubCategory subcategory);
        public void DeleteSubCategory(int subcategoryid);
        List<Category> ViewCategories();
        List<SubCategory> ViewSubCategories();
        List<Category> GetCategories();
        Category GetCategoryById(int categoryid);
        SubCategory GetSubCategoryById(int subcategoryid);

    }
}
