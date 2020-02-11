using System;
using System.ComponentModel.DataAnnotations;

namespace SmartFleetManagement.Domain
{
    public class Country
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }

        public Country()
        {
            Id = Guid.NewGuid();
        }

        public Country(string name, string code)
            :this()
        {
            Name = name;
            Code = code;
        }
    }
}
