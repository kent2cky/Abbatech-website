using System;
using Abbatech.Models;

namespace Abbatech.Data
{
    public interface IEntity
    {
        int Id { get; set; }
        EntityState EntityState { get; set; }
    }
}

