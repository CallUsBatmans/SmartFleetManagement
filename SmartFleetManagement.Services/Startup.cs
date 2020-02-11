using FluentValidation.AspNetCore;
using Microsoft.AspNet.OData.Extensions;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Serilog;
using SmartFleetManagement.Domain;
using SmartFleetManagement.Services.Cache;

namespace SmartFleetManagement.Services
{
    public class Startup
    {
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            Configuration.ConfigureElasticSearchLogger();

            services.AddCors();
            services.AddOData();
            services.ResolveJwtDependencies(Configuration);
            services.ResolveDependencies();
            services.ResolveValidatorsDependencies();
            services.UseSmartFleetManagementDbContext(Configuration);
            services.AddControllers();
            services.AddMvc(options => { options.EnableEndpointRouting = false; }).AddFluentValidation();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ILoggerFactory loggerFactory, SmartFleetManagementDbContext context)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            loggerFactory.AddSerilog();

            context.InitializeCache();

            app.UseCors(x => x
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader());

            app.UseAuthentication();

            app.UseAuthorization();

            app.UseRouting();

            app.UseMvc(routeBuilder =>
            {
                routeBuilder.EnableDependencyInjection();
                routeBuilder.Expand().Select().Filter().Count().OrderBy();
            });
        }
    }
}
