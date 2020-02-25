using System;
using System.Collections.Generic;
using System.Linq;
using SmartFleetManagement.Domain;

namespace SmartFleetManagement.Services.Cache
{
    public class MemoryDataCache
    {
        private static readonly Dictionary<object, object> Cache = new Dictionary<object, object>();

        public T ReadFromCache<T>(object key)
        {
            if (!Cache.ContainsKey(key))
            {
                return default;
            }

            return (T) Cache[key];
        }

        private static void CacheEntity<T>(object key, Func<T> entity)
        {
            Cache[key] = entity();
        }

        public static void Initialize(SmartFleetManagementDbContext context)
        {
            CacheEntity(nameof(Role), () => context.UserRoles.Select(x => x).ToList());
            CacheEntity(nameof(User), () => context.Users.Select(x => x).ToList());
        }
    }
}