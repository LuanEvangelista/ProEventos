using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using ProEventos.API.Data;

namespace ProEventos.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            // Adiciona o serviço do Entity Framework Core ao container de injeção de dependência.
            // Aqui, está sendo configurado para usar o banco de dados SQLite.
            // O DataContext é a classe que representa o contexto do banco de dados (herda de DbContext).
            // O método UseSqlite recebe a string de conexão definida no appsettings.json (chave "Default").
            services.AddDbContext<DataContext>(
                context => context.UseSqlite(Configuration.GetConnectionString("Default"))
            );

            // Adiciona os serviços necessários para os controllers da API.
            services.AddControllers();

            // Adiciona e configura o Swagger para documentação da API.
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "ProEventos.API", Version = "v1" });
            });
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                // Middleware para exibir páginas de exceção detalhadas em ambiente de desenvolvimento.
                app.UseDeveloperExceptionPage();
                // Ativa o Swagger e sua interface gráfica.
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "ProEventos.API v1"));
            }

            // Redireciona requisições HTTP para HTTPS.
            app.UseHttpsRedirection();

            // Habilita o roteamento de requisições.
            app.UseRouting();

            // Habilita a autorização (caso seja configurada).
            app.UseAuthorization();

            // Mapeia os endpoints dos controllers.
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
