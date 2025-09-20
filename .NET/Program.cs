using Analytics.Interfaces;
using Auth.Interfaces;
using Auth.Services;
using Supabase;
using Task.Interfaces;
using Task.Services;
using Configs.JwtRules;
using Microsoft.OpenApi.Models;

var AllowSpecificOrigins = "innertiaWeb";

var builder = WebApplication.CreateBuilder(args);



builder.Services.AddCors(options =>
{
	options.AddPolicy(name: AllowSpecificOrigins,
	policy =>
	{
		policy.WithOrigins("http://localhost:5173")
		.AllowAnyHeader()
		.AllowAnyMethod();
	});
});

builder.Services.AddAuthorization();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c => 
{
	c.SwaggerDoc("v1", new OpenApiInfo()
	{
		Version = "v1.2",
		Title =  "Innertia Official API",
		Description = "Be careful with our endpoints! ass: Augusto ",
		
		
	});

}
);




builder.Services.AddScoped<Supabase.Client>(_ =>
new Supabase.Client(
		builder.Configuration["SupabaseUrl"] ?? throw new ArgumentNullException("SupabaseUrl is not configured"),
		builder.Configuration["SupabaseKey"],
		new SupabaseOptions
		{
			AutoRefreshToken = true,
			AutoConnectRealtime = true,
		}
));





//Console.WriteLine("Supabase URL: " + builder.Configuration["SupabaseUrl"]);
//Console.WriteLine("Supabase KEY: " + builder.Configuration["SupabaseKey"]);

builder.Services.AddControllers();


builder.Services.AddScoped<ITestingServices, AuthTestingService>();
builder.Services.AddScoped<IRegisterService, RegisterService>();
builder.Services.AddScoped<IEditService, EditService>();
builder.Services.AddScoped<IAuthService, LoginUserService>();
builder.Services.AddScoped<ITaskItem, ItemTaskService>();
builder.Services.AddScoped<IAnalyticsKanban, analyticsKanbanService>();
builder.Services.AddScoped<JwtTokenGenerator>();

var secretKey = builder.Configuration["Jwt:Key"];


var app = builder.Build();

// Add CORS policy


app.UseCors(AllowSpecificOrigins);



app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
	app.UseSwagger();
	app.UseSwaggerUI(c =>
	{
			c.DocumentTitle = "Innertia Official API 1.2";
			c.EnableFilter();
			c.DisplayRequestDuration();
	}); 
	
}



app.UseHttpsRedirection();




app.MapStaticAssets();



app.Run();
