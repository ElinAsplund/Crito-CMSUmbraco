using Crito.Entities;
using Microsoft.EntityFrameworkCore;

namespace Crito.Contexts;

public class DataContext : DbContext
{
    protected DataContext()
    {
    }

    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {
    }

    public DbSet<EmailSignupFormEntity> Subscribers { get; set; }
}