using System;
using System.ComponentModel.DataAnnotations;

namespace SmartFleetManagement.Domain
{
    public class Role
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public string Description { get; set; }

        public Role()
        {
            Id = Guid.NewGuid();
        }

        public Role(string name, string code, string description)
            :this()
        {
            Name = name;
            Code = code;
            Description = description;
        }
    }
}