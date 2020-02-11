using SmartFleetManagement.Domain;

namespace SmartFleetManagement.TokenIssuer
{
    public interface ITokenIssuerService
    {
        (string Token, string Role) IssueAuthorizationToken(User user, string secret, int expires);
    }
}