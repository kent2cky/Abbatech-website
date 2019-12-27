using System.ComponentModel.DataAnnotations.Schema;

namespace Abbatech.Models
{
    public class User
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public int UserID { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
    }
}