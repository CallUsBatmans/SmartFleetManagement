using SmartFleetManagement.Domain;

namespace SmartFleetManagement.TokenIssuer
{
    public interface ITokenIssuerService
    {
        (string Token, string Role) IssueAuthorizationToken(User user, string roleCode, string secret, int expires);
    }
}