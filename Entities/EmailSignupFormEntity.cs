using System.ComponentModel.DataAnnotations;

namespace Crito.Entities;

public class EmailSignupFormEntity
{
    [Key]
    public string Email { get; set; } = null!;

    public DateTime Created { get; set; }
}
