using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abbatech.Data;

namespace Abbatech.Models
{
    public class Category : IEntity
    {
        public int Id { get; set; }

        [Required]
        [StringLength(60, MinimumLength = 3)]
        public string Name { get; set; }
        public EntityState EntityState { get; set; }
    }
}