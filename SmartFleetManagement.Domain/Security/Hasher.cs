using System;
using System.Security.Cryptography;
using System.Text;

namespace SmartFleetManagement.Domain.Security
{
    public class Hasher
    {
        public static string HashPassword(string password)
        {
            if (string.IsNullOrEmpty(password))
            {
                throw new ArgumentNullException($"Password can not be null or empty!");
            }

            var inputBytes = Encoding.UTF8.GetBytes(password);
            var hashBytes = new SHA512Managed().ComputeHash(inputBytes);
            var hash = BitConverter.ToString(hashBytes).Replace("-", string.Empty);

            return hash;
        }
    }
}
