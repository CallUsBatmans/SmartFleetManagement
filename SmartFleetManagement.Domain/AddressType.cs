using System;
using System.ComponentModel.DataAnnotations;

namespace SmartFleetManagement.Domain
{
    public class AddressType
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }

        public AddressType()
        {
            Id = Guid.NewGuid();
        }

        public AddressType(string name, string code)
            :this()
        {
            Name = name;
            Code = code;
        }
    }
}