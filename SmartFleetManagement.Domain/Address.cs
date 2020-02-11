using System;
using System.ComponentModel.DataAnnotations;

namespace SmartFleetManagement.Domain
{
    public class Address
    {
        [Key]
        public Guid Id { get; set; }
        public User User { get; set; }
        public string Name { get; set; }
        public AddressType AddressType { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public Country Country { get; set; }
        public string City { get; set; }
        public string PhoneNumber { get; set; }

        public Address()
        {
            Id = Guid.NewGuid();
        }

        public Address(User user, string name, AddressType addressType, string addressLine1, string addressLine2, Country country, string city, string phoneNumber)
            :this()
        {
            User = user;
            Name = name;
            AddressType = addressType;
            AddressLine1 = addressLine1;
            AddressLine2 = addressLine2;
            Country = country;
            City = city;
            PhoneNumber = phoneNumber;
        }
    }
}
