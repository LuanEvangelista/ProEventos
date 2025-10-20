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
            // Adiciona o servi�o do Entity Framework Core ao container de inje��o de depend�ncia.
            // Aqui, est� sendo configurado para usar o banco de dados SQLite.
            // O DataContext � a classe que representa o contexto do banco de dados (herda de DbContext).
            // O m�todo UseSqlite recebe a string de conex�o definida no appsettings.json (chave "Default").
            services.AddDbContext<DataContext>(
                context => context.UseSqlite(Configuration.GetConnectionString("Default"))
            );

            // Adiciona os servi�os necess�rios para os controllers da API.
            services.AddControllers();

            services.AddCors();

            // Adiciona e configura o Swagger para documenta��o da API.
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "ProEventos.API", Version = "v1" });
            });
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                // Middleware para exibir p�ginas de exce��o detalhadas em ambiente de desenvolvimento.
                app.UseDeveloperExceptionPage();
                // Ativa o Swagger e sua interface gr�fica.
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "ProEventos.API v1"));
            }

            // Redireciona requisi��es HTTP para HTTPS.
            app.UseHttpsRedirection();

            // Habilita o roteamento de requisi��es.
            app.UseRouting();

            // Habilita a autoriza��o (caso seja configurada).
            app.UseAuthorization();

            app.UseCors(cors => cors.AllowAnyHeader()
                                      .AllowAnyMethod()
                                      .AllowAnyOrigin());

            // Mapeia os endpoints dos controllers.
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
