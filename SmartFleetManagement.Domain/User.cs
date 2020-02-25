using System;
using System.ComponentModel.DataAnnotations;

namespace SmartFleetManagement.Domain
{
    public class User
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }

        public User()
        {
            Id = Guid.NewGuid();
        }

        public User(string name, string email, string username, string password)
            :this()
        {
            Name = name;
            Email = email;
            Username = username;
            Password = password;
        }
    }
}
