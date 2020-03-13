using Emart.AdminService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.AdminService.Repositories
{
    public class AdminRepository:IAdminRepository
    {
        private readonly EMARTDBContext _context;
        public AdminRepository(EMARTDBContext context)
        {
            _context = context;
        }
        public void AddCategory(Category category)
        {
            _context.Add(category);
            _context.SaveChanges();
        }

        public void AddSubCategory(SubCategory subcategory)
        {
            _context.Add(subcategory);
            _context.SaveChanges();
        }

        public void DeleteCategory(int categoryid)
        {
            Category c = _context.Category.Find(categoryid);
            _context.Remove(c);
            _context.SaveChanges();
        }

        public void DeleteSubCategory(int subcategoryid)
        {
            SubCategory sub = _context.SubCategory.Find(subcategoryid);
            _context.Remove(sub);
            _context.SaveChanges();
        }
        public List<Category>ViewCategories()
        {
            return _context.Category.ToList();
        }
        public List<SubCategory> ViewSubCategories()
        {
            return _context.SubCategory.ToList();
        }
        public List<Category>GetCategories()
        {
            return _context.Category.ToList();
        }
        public Category GetCategoryById(int categoryid)
        {
            return _context.Category.Find(categoryid);
        }
        public SubCategory GetSubCategoryById(int subcategoryid)
        {
            return _context.SubCategory.Find(subcategoryid);
        }


    }
}
