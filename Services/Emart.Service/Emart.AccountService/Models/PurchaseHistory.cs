﻿using System;
using System.Collections.Generic;

namespace Emart.AccountService.Models
{
    public partial class PurchaseHistory
    {
        public string Id { get; set; }
        public string Bid { get; set; }
        public string Sid { get; set; }
        public string Iid { get; set; }
        public string Transactiontype { get; set; }
        public DateTime Datetime { get; set; }
        public string Remarks { get; set; }
        public string Noofitems { get; set; }

        public virtual Buyer B { get; set; }
        public virtual Items I { get; set; }
        public virtual Seller S { get; set; }
    }
}
