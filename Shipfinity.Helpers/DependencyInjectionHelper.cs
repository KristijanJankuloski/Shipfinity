﻿using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Shipfinity.DataAccess.Context;
using Shipfinity.DataAccess.Repositories.Implementations;
using Shipfinity.DataAccess.Repositories.Interfaces;
using Shipfinity.Services.Implementations;
using Shipfinity.Services.Interfaces;

namespace Shipfinity.Helpers
{
    public static class DependencyInjectionHelper
    {
        public static void InjectDbContext(this IServiceCollection services, string connectionString)
        {
            services.AddDbContext<AppDbContext>(options => options.UseSqlServer(connectionString));
        }

        public static void InjectRepositories(this IServiceCollection services)
        {
            services.AddTransient<IProductRepository, ProductRepository>();
            services.AddTransient<ICategoryRepository, CategoryRepository>();
        }

        public static void InjectServices(this IServiceCollection services)
        {
            services.AddTransient<ICategoryService, CategoryService>();
        }
    }
}