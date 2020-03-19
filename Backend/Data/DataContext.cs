using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Hosting;
using Abbatech.Models;

namespace Abbatech.Data
{
    public class DataContext : DbContext
    {
        private IWebHostEnvironment _webHost;
        public DataContext(IWebHostEnvironment webHost)
        {
            _webHost = webHost;
        }
        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlite($"Data Source={_webHost.WebRootPath}/abbatech.db");
        public DbSet<Stock> Stocks { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Order> Orders { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Stock>()
            .ToTable("Stock")
            .Property(p => p.Id)
            .IsRequired()
            .ValueGeneratedOnAdd();

            modelBuilder.Entity<Stock>().Ignore(p => p.EntityState);


            modelBuilder.Entity<Category>()
            .ToTable("Category")
            .Property(p => p.Id)
            .IsRequired()
            .ValueGeneratedNever();

            modelBuilder.Entity<Category>().Ignore(p => p.EntityState);

            modelBuilder.Entity<User>().ToTable("User").Ignore(p => p.EntityState);
            modelBuilder.Entity<Order>().ToTable("Order").Ignore(p => p.EntityState);
        }
    }
}
