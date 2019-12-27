using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Abbatech.Models
{
    public class Stock
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public int StockID { get; set; }
        public string Name { get; set; }
        public string PictureUrl { get; set; }
        public int Quantity { get; set; }
        public float Price { get; set; }
        public Category Category { get; set; }
    }
}

