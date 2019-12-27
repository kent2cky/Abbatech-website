using System.ComponentModel.DataAnnotations.Schema;

namespace Abbatech.Models
{
    public class Category
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public int CategoryID { get; set; }
        public string CategoryName { get; set; }
    }
}