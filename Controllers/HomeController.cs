using Crito.Models;
using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Core.Cache;
using Umbraco.Cms.Core.Logging;
using Umbraco.Cms.Core.Routing;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Web;
using Umbraco.Cms.Infrastructure.Persistence;
using Umbraco.Cms.Web.Website.Controllers;

namespace Crito.Controllers
{
    public class HomeController : SurfaceController
    {
        public HomeController(IUmbracoContextAccessor umbracoContextAccessor, IUmbracoDatabaseFactory databaseFactory, ServiceContext services, AppCaches appCaches, IProfilingLogger profilingLogger, IPublishedUrlProvider publishedUrlProvider) : base(umbracoContextAccessor, databaseFactory, services, appCaches, profilingLogger, publishedUrlProvider)
        {
        }

        public IActionResult Index(EmailSignupForm emailSignupForm)
        {
            if (!ModelState.IsValid)
            {
                TempData.Clear();
                return CurrentUmbracoPage();
            }

            emailSignupForm.Created = DateTime.Now;
            TempData.Clear();
            TempData["SuccessMessage"] = "You have now signed up to our newsletter!";

            return CurrentUmbracoPage();
        }
    }
}
