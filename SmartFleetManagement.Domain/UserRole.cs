﻿using System;
using System.ComponentModel.DataAnnotations;

namespace SmartFleetManagement.Domain
{
    public class UserRole
    {
        [Key]
        public Guid Id { get; set; }
        public User User { get; set; }
        public Role Role { get; set; }

        protected UserRole()
        {
            Id = Guid.NewGuid();
        }

        public UserRole(User user, Role role)
        {
            User = user;
            Role = role;
        }
    }
}