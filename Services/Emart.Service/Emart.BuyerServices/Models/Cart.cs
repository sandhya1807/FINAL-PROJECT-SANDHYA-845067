using System;
using System.Collections.Generic;

namespace Emart.BuyerServices.Models
{
    public partial class Cart
    {
        public string CartId { get; set; }
        public int Categoryid { get; set; }
        public int Subcategoryid { get; set; }
        public string Sid { get; set; }
        public string Iid { get; set; }
        public string Itemname { get; set; }
        public string Price { get; set; }
        public string Description { get; set; }
        public string Remarks { get; set; }
        public string Image { get; set; }
        public string Bid { get; set; }

        public virtual Buyer B { get; set; }
        public virtual Category Category { get; set; }
        public virtual Items I { get; set; }
        public virtual Seller S { get; set; }
        public virtual SubCategory Subcategory { get; set; }
    }
}
