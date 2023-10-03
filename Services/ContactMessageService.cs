using Crito.Contexts;
using Crito.Entities;
using Crito.Models;
using Microsoft.EntityFrameworkCore;

namespace Crito.Services;

public class ContactMessageService
{
    private readonly DataContext _context;

    public ContactMessageService(DataContext context)
    {
        _context = context;
    }

    public async Task<bool> AddContactMessageAsync(ContactForm form)
    {
        try
        {
            _context.ContactMessages.Add(new ContactFormEntity
            {
                Name = form.Name,
                Email = form.Email,
                Message = form.Message,
            });

            await _context.SaveChangesAsync();

            return true;
        }
        catch
        {
            return false;
        }
    }
}
