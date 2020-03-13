﻿using System;
using System.Collections.Generic;

namespace Emart.AdminService.Models
{
    public partial class SubCategory
    {
        public SubCategory()
        {
            Cart = new HashSet<Cart>();
            Items = new HashSet<Items>();
        }

        public int Subcategoryid { get; set; }
        public string Subcategoryname { get; set; }
        public int? Categoryid { get; set; }
        public int? Gst { get; set; }

        public virtual Category Category { get; set; }
        public virtual ICollection<Cart> Cart { get; set; }
        public virtual ICollection<Items> Items { get; set; }
    }
}
