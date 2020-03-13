using System;
using System.Collections.Generic;

namespace Emart.AccountService.Models
{
    public partial class Discounts
    {
        public int Id { get; set; }
        public string Discountcode { get; set; }
        public int? Percentage { get; set; }
        public DateTime Startdate { get; set; }
        public DateTime Enddate { get; set; }
        public string Description { get; set; }
    }
}
