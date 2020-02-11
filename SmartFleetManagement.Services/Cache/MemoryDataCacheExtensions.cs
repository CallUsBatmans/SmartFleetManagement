using SmartFleetManagement.Domain;

namespace SmartFleetManagement.Services.Cache
{
    public static class MemoryDataCacheExtensions
    {
        public static void InitializeCache(this SmartFleetManagementDbContext context)
        {
            MemoryDataCache.Initialize(context);
        }
    }
}