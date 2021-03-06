﻿using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class User : IdentityUser<int>
    {
        public HealthInfo HealthInfo { get; set; }
        public float RiskScore { get; set; }
        public ICollection<UserRole> UserRoles { get; set; }
    }
}
