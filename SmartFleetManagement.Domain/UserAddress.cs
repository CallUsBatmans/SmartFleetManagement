using System;
using System.ComponentModel.DataAnnotations;

namespace SmartFleetManagement.Domain
{
    public class UserAddress
    {
        [Key]
        public Guid Id { get; set; }

        public User User { get; set; }
        public Address Address { get; set; }

        protected UserAddress()
        {
            Id = Guid.NewGuid();
        }

        public UserAddress(User user, Address address)
        {
            User = user;
            Address = address;
        }
    }
}