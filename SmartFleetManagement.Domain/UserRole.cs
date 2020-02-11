using System;
using System.ComponentModel.DataAnnotations;

namespace SmartFleetManagement.Domain
{
    public class UserRole
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public string Description { get; set; }

        public UserRole()
        {
            Id = Guid.NewGuid();
        }

        public UserRole(string name, string code, string description)
            :this()
        {
            Name = name;
            Code = code;
            Description = description;
        }
    }
}