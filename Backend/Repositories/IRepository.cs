using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Abbatech.Data
{
    public interface IRepository<T> where T : class
    {
        Task<IEnumerable<T>> GetAll(params Expression<Func<T, Object>>[] navigationProperties);
        Task<int> Update(string caller, params T[] items); // caller parameter add for debugging purposes
        Task<int> Delete(params T[] items); // return 0 if successfull otherwise 1

        Task<T> GetByID(Expression<Func<T, bool>> where, params Expression<Func<T, object>>[] navigationProperties);
    }
}