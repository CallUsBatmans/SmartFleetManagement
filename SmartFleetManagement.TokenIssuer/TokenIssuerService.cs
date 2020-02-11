using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using SmartFleetManagement.Domain;

namespace SmartFleetManagement.TokenIssuer
{
    public class TokenIssuerService: ITokenIssuerService
    {
        public (string Token, string Role) IssueAuthorizationToken(User user, string secret, int expires)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = CreateUserSubject(user),
                Expires = DateTime.UtcNow.AddHours(expires),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
                    SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return (tokenHandler.WriteToken(token), user.Role.Code);
        }

        private ClaimsIdentity CreateUserSubject(User user)
        {
            return new ClaimsIdentity(CreateUserClaims(user));
        }

        private IEnumerable<Claim> CreateUserClaims(User user)
        {
            yield return new Claim(ClaimTypes.Name, user.Name);
            yield return new Claim(ClaimTypes.Role, user.Role.Code);
        }
    }
}