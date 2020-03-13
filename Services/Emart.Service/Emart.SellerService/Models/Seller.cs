using System;
using System.Collections.Generic;

namespace Emart.SellerService.Models
{
    public partial class Seller
    {
        public Seller()
        {
            Cart = new HashSet<Cart>();
            Items = new HashSet<Items>();
            PurchaseHistory = new HashSet<PurchaseHistory>();
        }

        public string Sid { get; set; }
        public string Susername { get; set; }
        public string Password { get; set; }
        public string Companyname { get; set; }
        public int Gstin { get; set; }
        public string Brief { get; set; }
        public string Address { get; set; }
        public string Mobile { get; set; }
        public string Emailid { get; set; }
        public string Website { get; set; }

        public virtual ICollection<Cart> Cart { get; set; }
        public virtual ICollection<Items> Items { get; set; }
        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
    }
}
