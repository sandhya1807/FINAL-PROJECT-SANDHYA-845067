using System;
using System.Collections.Generic;

namespace Emart.SellerService.Models
{
    public partial class PurchaseHistoryTransaction
    {
        public string Id { get; set; }
        public string Bid { get; set; }
        public string Sid { get; set; }
        public string Transactionid { get; set; }
        public string Iid { get; set; }
        public int? Numberofitems { get; set; }
        public DateTime Datetime { get; set; }
        public string Transactiontype { get; set; }
        public string Remarks { get; set; }
    }
}
