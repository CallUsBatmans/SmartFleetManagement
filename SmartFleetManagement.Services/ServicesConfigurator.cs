using System.Reflection;
using FluentValidation;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Npgsql.EntityFrameworkCore.PostgreSQL.Infrastructure;
using SmartFleetManagement.DataAccess.Services.Users;
using SmartFleetManagement.Domain;
using SmartFleetManagement.Services.Cache;
using SmartFleetManagement.Services.Constants;
using SmartFleetManagement.Services.Models;
using SmartFleetManagement.Services.Repositories.Authentication;
using SmartFleetManagement.Services.Settings;
using SmartFleetManagement.Services.Validators;
using SmartFleetManagement.TokenIssuer;

namespace SmartFleetManagement.Services
{
    public static class ServicesConfigurator
    {
        public static void ResolveDependencies(this IServiceCollection services)
        {
            services.AddSingleton<MemoryDataCache>();
            services.AddTransient<IUserServices, UserServices>();
            services.AddTransient<ITokenIssuerService, TokenIssuerService>();
            services.AddTransient<IAuthenticationRepository, AuthenticationRepository>();
        }

        public static void ResolveValidatorsDependencies(this IServiceCollection services)
        {
            services.AddTransient<IValidator<User>, UserValidator>();
            services.AddTransient<IValidator<AuthenticateModel>, AuthenticateModelValidator>();
        }

        public static void ResolveJwtDependencies(this IServiceCollection services, IConfiguration configuration)
        {
            var appSettingsSection = configuration.GetSection(ApplicationSettings.AppSettings);
            services.Configure<AppSettings>(appSettingsSection);

            var appSettings = appSettingsSection.Get<AppSettings>();
            services.SetupJwtAuthorization(appSettings.Secret);
        }

        public static void UseSmartFleetManagementDbContext(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<SmartFleetManagementDbContext>(options => options.UseNpgsql(GetConnectionString(configuration), UseAssembly));
        }

        private static string GetConnectionString(IConfiguration configuration)
        {
            return configuration.GetConnectionString(ApplicationSettings.FleetDb);
        }

        private static void UseAssembly(NpgsqlDbContextOptionsBuilder obj)
        {
            obj.MigrationsAssembly(GetExecutingAssemblyName());
        }

        private static string GetExecutingAssemblyName()
        {
            return Assembly.GetExecutingAssembly().GetName().Name;
        }
    }
}
