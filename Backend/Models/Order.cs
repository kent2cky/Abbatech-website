using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Abbatech.Models
{
    public class Order
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public int OrderID { get; set; }
        public IEnumerable<Stock> Stocks { get; set; }
        public string DeliveryAddress { get; set; }
        public DateTime DeliveryDate { get; set; }
        public string PaymentType { get; set; }
    }
}