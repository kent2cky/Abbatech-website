using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Abbatech.Data
{
    public class Repository<T> : IRepository<T> where T : class, IEntity
    {
        private readonly DataContext _context;
        private readonly ILogger<Repository<T>> _logger;

        public Repository(DataContext context, ILogger<Repository<T>> logger)
        {
            _context = context;
            _logger = logger;
        }

        public virtual async Task<IEnumerable<T>> GetAll(params Expression<Func<T, Object>>[] navigationProperties)
        {
            try
            {
                IQueryable<T> dbQuery = _context.Set<T>();

                foreach (var navigationProperty in navigationProperties)
                    dbQuery = dbQuery.Include(navigationProperty);
                return await dbQuery
                            .AsNoTracking()
                            .ToListAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError(DateTime.Now + " From Repository.GetAll\n" + ex.Message + $"\nParameters: {navigationProperties}");
                return null;
            }
        }

        public virtual async Task<T> GetByID(Expression<Func<T, bool>> where, params Expression<Func<T, Object>>[] navigationProperties)
        {
            try
            {
                T item = null;
                IQueryable<T> dbQuery = _context.Set<T>();

                //Apply eager loading
                foreach (Expression<Func<T, object>> navigationProperty in navigationProperties)
                    dbQuery = dbQuery.Include<T, object>(navigationProperty);

                return item = await dbQuery
                    .AsNoTracking() //Don't track any changes for the selected item
                    .FirstOrDefaultAsync<T>(where, default); //Apply where clause
            }
            catch (Exception ex)
            {
                _logger.LogError(DateTime.Now + " From Repository.GetByID\n" + ex.Message + $"\nParameters: {navigationProperties}");
                return null;
            }
        }

        public virtual async Task<int> Update(string caller, params T[] items)
        {
            try
            {
                DbSet<T> dbSet = _context.Set<T>();
                foreach (T item in items)
                {
                    dbSet.Add(item);
                    foreach (var entry in _context.ChangeTracker.Entries<IEntity>())
                    {
                        Console.WriteLine(entry.Metadata);
                        IEntity entity = entry.Entity;
                        entry.State = GetEntityState(entity.EntityState);
                    }
                }
                return await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError(DateTime.Now + $" From {caller}\n" + ex.Message + $"\nParameters: {items}");
                return 0;
            }
        }

        public virtual async Task<int> Delete(params T[] items)
        {
            try
            {
                var ItemsToDelete = items;
                foreach (T item in ItemsToDelete)
                {
                    item.EntityState = Abbatech.Data.EntityState.Deleted;
                }
                var result = await Update("Delete", ItemsToDelete);
                return result == 1 ? 1 : 0;
            }
            catch (Exception ex)
            {
                _logger.LogError(DateTime.Now + $" From Repository.Delete\n" + ex.Message + $"\nParameters: {items}");
                return 0;
            }
        }

        protected static Microsoft.EntityFrameworkCore.EntityState GetEntityState(Abbatech.Data.EntityState entityState)
        {
            switch (entityState)
            {
                case Abbatech.Data.EntityState.Unchanged:
                    return Microsoft.EntityFrameworkCore.EntityState.Unchanged;
                case Abbatech.Data.EntityState.Added:
                    return Microsoft.EntityFrameworkCore.EntityState.Added;
                case Abbatech.Data.EntityState.Modified:
                    return Microsoft.EntityFrameworkCore.EntityState.Modified;
                case Abbatech.Data.EntityState.Deleted:
                    return Microsoft.EntityFrameworkCore.EntityState.Deleted;
                default:
                    return Microsoft.EntityFrameworkCore.EntityState.Detached;
            }
        }
    }
}