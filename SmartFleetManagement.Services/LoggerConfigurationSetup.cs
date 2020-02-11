using System;
using Microsoft.Extensions.Configuration;
using Serilog;
using Serilog.Exceptions;
using Serilog.Formatting.Elasticsearch;
using Serilog.Sinks.Elasticsearch;
using SmartFleetManagement.Services.Constants;

namespace SmartFleetManagement.Services
{
    public static class LoggerConfigurationSetup
    {
        public static void ConfigureElasticSearchLogger(this IConfiguration configuration)
        {
            var elasticUri = configuration.GetValue<Uri>(ApplicationSettings.ElasticSearchUri);

            Log.Logger = new LoggerConfiguration()
                .Enrich.FromLogContext()
                .WriteTo.Elasticsearch(new ElasticsearchSinkOptions(elasticUri)
                {
                    AutoRegisterTemplate = true,
                    CustomFormatter = new ElasticsearchJsonFormatter()
                })
                .CreateLogger();

            Log.Logger = new LoggerConfiguration()
                .Enrich.FromLogContext()
                .Enrich.WithExceptionDetails()
                .WriteTo.Elasticsearch(new ElasticsearchSinkOptions(elasticUri)
                {
                    AutoRegisterTemplate = true,
                })
                .CreateLogger();
        }
    }
}
