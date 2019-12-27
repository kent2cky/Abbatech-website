using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Abbatech.Data;
using Abbatech.Models;
using Newtonsoft.Json;

namespace Abbatech.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AvailableStocksController : ControllerBase
    {
        private readonly ILogger<AvailableStocksController> _logger;
        private readonly DataContext _context;

        public AvailableStocksController(ILogger<AvailableStocksController> logger, DataContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {

            var stocks = new Stock[]
              {
                new Stock{StockID=1, Name="Carson", PictureUrl="Alexander", Quantity=12, Price=1200, Category=null},
                new Stock{StockID=2, Name="Ben",PictureUrl="picture", Quantity=2, Price=200, Category=null},
                new Stock{StockID=3, Name="Sly",PictureUrl="New day", Quantity=123, Price=120, Category=null},
                new Stock{StockID=4, Name="Chinenye",PictureUrl="Brother", Quantity=112, Price=12200, Category=null},
                new Stock{StockID=5, Name="Ugoo",PictureUrl="Chukwu", Quantity=120, Price=1209, Category=null},
                new Stock{StockID=1, Name="Carson", PictureUrl="Alexander", Quantity=12, Price=1200, Category=null},
                new Stock{StockID=2, Name="Ben",PictureUrl="picture", Quantity=2, Price=200, Category=null},
                new Stock{StockID=3, Name="Sly",PictureUrl="New day", Quantity=123, Price=120, Category=null},
                new Stock{StockID=4, Name="Chinenye",PictureUrl="Brother", Quantity=112, Price=12200, Category=null},
                new Stock{StockID=5, Name="Ugoo",PictureUrl="Chukwu", Quantity=120, Price=1209, Category=null},
                new Stock{StockID=1, Name="Carson", PictureUrl="Alexander", Quantity=12, Price=1200, Category=null},
                new Stock{StockID=2, Name="Ben",PictureUrl="picture", Quantity=2, Price=200, Category=null},
                new Stock{StockID=3, Name="Sly",PictureUrl="New day", Quantity=123, Price=120, Category=null},
                new Stock{StockID=4, Name="Chinenye",PictureUrl="Brother", Quantity=112, Price=12200, Category=null},
                new Stock{StockID=5, Name="Ugoo",PictureUrl="Chukwu", Quantity=120, Price=1209, Category=null}
              };

            return Ok(stocks);
        }
    }
}
