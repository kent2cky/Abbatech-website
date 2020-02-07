using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abbatech.Data;

namespace Abbatech.Models
{
    public class User : IEntity
    {
        public int Id { get; set; }

        [Required]
        [StringLength(30, MinimumLength = 5)]
        public string Username { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [MinLength(5)]
        public string Password { get; set; }

        [Required]
        [MaxLength(50)]
        public string Role { get; set; }
        public EntityState EntityState { get; set; }
    }
}