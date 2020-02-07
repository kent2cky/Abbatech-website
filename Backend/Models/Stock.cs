using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abbatech.Data;

namespace Abbatech.Models
{
    public class Stock : IEntity
    {

        public int Id { get; set; }
        [Required]
        [StringLength(60)]
        public string Name { get; set; }

        [Required]
        [DataType(DataType.ImageUrl)]
        public string PictureUrl { get; set; }
        public int Quantity { get; set; }

        [DataType(DataType.Currency)]
        public float Price { get; set; }

        [Range(1, 600)]
        public int CategoryId { get; set; }
        public virtual Category Category { get; set; }

        [MaxLength(250)]
        public string Description { get; set; }
        public EntityState EntityState { get; set; }
    }
}

