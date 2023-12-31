﻿using Crito.Models;
using Crito.Services;
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
        private readonly SubscriberService _subscriberService;

        public HomeController(IUmbracoContextAccessor umbracoContextAccessor, IUmbracoDatabaseFactory databaseFactory, ServiceContext services, AppCaches appCaches, IProfilingLogger profilingLogger, IPublishedUrlProvider publishedUrlProvider, SubscriberService subscriberService) : base(umbracoContextAccessor, databaseFactory, services, appCaches, profilingLogger, publishedUrlProvider)
        {
            _subscriberService = subscriberService;
        }

        public async Task<IActionResult> Index(EmailSignupForm subscriber)
        {
            if (!ModelState.IsValid)
            {
                TempData.Clear();
                ModelState.AddModelError("", "Something went wrong!");
                return CurrentUmbracoPage();
            }

            var registered = await _subscriberService.AddSubscriberAsync(subscriber);

            TempData.Clear();
            if (registered)
            {
                ModelState.Clear();
                TempData["SuccessMessage"] = "You have now signed up to our newsletter!";
            }
            else if(!registered)
                TempData["AlreadyRegisteredMessage"] = "Your e-mail is already registered!";
            else
                TempData["AlreadyRegisteredMessage"] = "Something went wrong!";


            return CurrentUmbracoPage();
        }
    }
}
