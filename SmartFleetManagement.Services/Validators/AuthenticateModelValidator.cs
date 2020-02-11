using FluentValidation;
using SmartFleetManagement.Services.Models;

namespace SmartFleetManagement.Services.Validators
{
    public class AuthenticateModelValidator: AbstractValidator<AuthenticateModel>
    {
        public AuthenticateModelValidator()
        {
            RuleFor(x => x.Username).NotEmpty().NotNull();
            RuleFor(x => x.Password).NotEmpty().NotNull();
        }
    }
}
