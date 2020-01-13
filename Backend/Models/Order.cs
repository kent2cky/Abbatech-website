using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Abbatech.Data;

namespace Abbatech.Models
{
    public class Order : IEntity
    {
        public int Id { get; set; }
        public IEnumerable<Stock> Stocks { get; set; }
        public string DeliveryAddress { get; set; }
        public DateTime DeliveryDate { get; set; }
        public string PaymentType { get; set; }
        public EntityState EntityState { get; set; }
    }
}