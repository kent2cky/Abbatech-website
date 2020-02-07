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
        public async Task<IActionResult> GetAll()
        {
            _logger.LogInformation("Retrieving all Stocks.......................");
            try
            {
                var allStocks = await _repo.GetAll(c => c.Category);
                _logger.LogInformation("Successfully retrieved Stocks.......................");
                _logger.LogInformation("Returning Stocks.......................");
                return Ok(allStocks);
            }
            catch (Exception ex)
            {
                _logger.LogError($"{DateTime.Now}   From AvailableStocksController.GetAll() {ex}");
                return BadRequest();
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetByID(int ID)
        {
            _logger.LogInformation($"executing getbyid with argument {ID}......");
            var stock = await _repo.GetByID(e => e.Id == ID, f => f.Category);
            _logger.LogInformation($"returning {stock}.......");
            return Ok(stock);
        }

        [HttpDelete("delete")]
        public async Task<IActionResult> Delete(params Stock[] stocks)
        {
            _logger.LogInformation("Deleting stock(s)..........");
            var resultList = new List<object>();
            foreach (var stock in stocks)
            {
                var res = await _repo.Delete(stock);
                var ano = new
                {
                    result = res,
                    id = stock.Id,
                    name = stock.Name
                };
                resultList.Add(ano);

            }
            _logger.LogInformation("Deleted stock(s)..........");
            return Ok(resultList);
        }

        [HttpPut]
        public async Task<IActionResult> Update(params Stock[] Stocks)
        {
            _logger.LogInformation("Updating stock(s)..........");
            var StocksToUpdate = Stocks;
            foreach (var stock in StocksToUpdate)
            {
                stock.EntityState = Abbatech.Data.EntityState.Modified;
            }

            var res = await _repo.Update("AvailableStocksController.Update", StocksToUpdate);
            _logger.LogInformation("Updated stock(s)..........");
            return Ok(res);
        }

        [HttpPost]
        public async Task<IActionResult> AddStocks(params Stock[] Stocks)
        {
            _logger.LogInformation("Adding stock(s)..........");
            var StocksToAdd = Stocks;
            foreach (var stock in StocksToAdd)
            {
                stock.EntityState = Abbatech.Data.EntityState.Added;
            }

            var res = await _repo.Update("AvailableStocksController.AddStocks", StocksToAdd);
            _logger.LogInformation($"Added {StocksToAdd.Length} stock(s)..........");
            return Ok(res);
        }

        [HttpGet("{category}/{categoryId}")]
        public async Task<IActionResult> GetByCategory(string category, int categoryId)
        {
            _logger.LogInformation($"Getting stocks of category {categoryId}..........");
            var stocks = await _repo.GetByID(e => e.CategoryId == categoryId, f => f.Category);
            _logger.LogInformation($"{stocks.Count}.......");
            return Ok(stocks);
        }

    }
}
