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
    public class CategoriesController : ControllerBase
    {
        private readonly ILogger<CategoriesController> _logger;
        private readonly DataContext _context;
        private readonly IRepository<Category> _repo;

        public CategoriesController(ILogger<CategoriesController> logger, DataContext context, IRepository<Category> repo)
        {
            _logger = logger;
            _context = context;
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_repo.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult GetByID(int ID)
        {
            var Category = _repo.GetByID(e => e.Name == "Carson");

            return Ok(Category);
        }

        [HttpDelete("delete")]
        public IActionResult Delete(Category[] Category)
        {
            Console.WriteLine("From delete...");
            var res = _repo.Delete(Category);
            return Ok(res);
        }

        [HttpPut]
        public IActionResult Update(params Category[] Categorys)
        {
            var CategorysToUpdate = Categorys;
            foreach (var Category in CategorysToUpdate)
            {
                Category.EntityState = Abbatech.Data.EntityState.Modified;
            }

            Console.WriteLine("From delete...");
            var res = _repo.Update("CategoriesController.Update", CategorysToUpdate);
            return Ok(res);
        }

        [HttpPost]
        public IActionResult AddCategories(params Category[] Categorys)
        {
            var CategorysToAdd = Categorys;
            foreach (var Category in CategorysToAdd)
            {
                Category.EntityState = Abbatech.Data.EntityState.Added;
            }

            Console.WriteLine("From delete...");
            var res = _repo.Update("CategoriesController.AddCategories", CategorysToAdd);
            return Ok(res);
        }

    }
}
