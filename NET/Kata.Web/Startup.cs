using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Kata.Web.Startup))]
namespace Kata.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            //ConfigureAuth(app);
            app.MapSignalR();
        }
    }
}
