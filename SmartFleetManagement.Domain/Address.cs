using System;
using System.ComponentModel.DataAnnotations;

namespace SmartFleetManagement.Domain
{
    public class Address
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string AddressType { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string PhoneNumber { get; set; }

        public Address()
        {
            Id = Guid.NewGuid();
        }

        public Address(string name, string addressType, string addressLine1, string addressLine2, string country, string city, string phoneNumber)
            :this()
        {
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
