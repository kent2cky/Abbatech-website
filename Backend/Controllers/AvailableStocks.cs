using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Abbatech.Data;
using Abbatech.Models;
using Newtonsoft.Json;
using Microsoft.EntityFrameworkCore;

namespace Abbatech.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AvailableStocksController : ControllerBase
    {
        private readonly ILogger<AvailableStocksController> _logger;
        private readonly DataContext _context;
        private readonly IRepository<Stock> _repo;

        public AvailableStocksController(ILogger<AvailableStocksController> logger, DataContext context, IRepository<Stock> repo)
        {
            _logger = logger;
            _context = context;
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_repo.GetAll(c => c.Category));
        }

        [HttpGet("{id}")]
        public IActionResult GetByID(int ID)
        {
            var stock = _repo.GetByID(e => e.Name == "Carson", f => f.Category);

            return Ok(stock);
        }

        [HttpDelete]
        public IActionResult Delete(Stock stock)
        {
            Console.WriteLine("From delete...");
            var res = _repo.Delete(stock);
            var result = new
            {
                id = stock.Id,
                deleted = res,
            };
            return Ok(result);
        }

        [HttpPut]
        public IActionResult Update(params Stock[] Stocks)
        {
            var StocksToUpdate = Stocks;
            foreach (var stock in StocksToUpdate)
            {
                stock.EntityState = Abbatech.Data.EntityState.Modified;
            }

            Console.WriteLine("From delete...");
            var res = _repo.Update("AvailableStocksController.Update", StocksToUpdate);
            return Ok(res);
        }

        [HttpPost]
        public IActionResult AddStocks(params Stock[] Stocks)
        {
            var StocksToAdd = Stocks;
            foreach (var stock in StocksToAdd)
            {
                stock.EntityState = Abbatech.Data.EntityState.Added;
            }

            Console.WriteLine("From delete...");
            var res = _repo.Update("AvailableStocksController.AddStocks", StocksToAdd);
            return Ok(res);
        }

    }
}
