namespace SmartFleetManagement.Services.Extensions
{
    public static class ObjectExtensions
    {
        public static bool DoesExist<T>(this T entity) where T : class
        {
            return entity != null;
        }
    }
}
