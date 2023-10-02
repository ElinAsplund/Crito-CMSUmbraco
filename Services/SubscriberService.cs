using Crito.Contexts;
using Crito.Entities;
using Crito.Models;
using Microsoft.EntityFrameworkCore;

namespace Crito.Services
{
    public class SubscriberService
    {
        private readonly DataContext _context;

        public SubscriberService(DataContext context)
        {
            _context = context;
        }

        public async Task<bool> AddSubscriberAsync(EmailSignupForm form)
        {
            try 
            {
                var alreadySubscriber = await _context.Subscribers.FirstOrDefaultAsync(x => x.Email == form.Email);

                if (alreadySubscriber != null) { 
                    return false;                
                }
                else
                {
                    _context.Subscribers.Add(new EmailSignupFormEntity 
                    { 
                        Email = form.Email,
                        Created = form.Created
                    });

                    await _context.SaveChangesAsync();
                    
                    return true;
                }
            }
            catch 
            { 
                return false;
            }
        }
    }
}
