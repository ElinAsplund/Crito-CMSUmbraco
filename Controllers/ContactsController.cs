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
    public class ContactsController : SurfaceController
    {
        public ContactsController(IUmbracoContextAccessor umbracoContextAccessor, IUmbracoDatabaseFactory databaseFactory, ServiceContext services, AppCaches appCaches, IProfilingLogger profilingLogger, IPublishedUrlProvider publishedUrlProvider) : base(umbracoContextAccessor, databaseFactory, services, appCaches, profilingLogger, publishedUrlProvider)
        {
        }

        public IActionResult Index(ContactForm contactForm)
        {

            if (!ModelState.IsValid)
            {
                TempData.Clear();
                ModelState.AddModelError("", "Please, have a look at the current error message/messages!");
                return CurrentUmbracoPage();
            } 

            contactForm.Created = DateTime.Now;
            TempData.Clear();
            TempData["SuccessMessage"] = "Your comment has now been sent!";
            
            return CurrentUmbracoPage();

            //return LocalRedirect(contactForm.RedirectUrl ?? "/");
        }
    }
}
