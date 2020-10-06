using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class HealthInfo
    {
        public int Id { get; set; }
        public float Temperature { get; set; }
        public float OxygenLevel { get; set; }
        public bool FamilyStatus { get; set; }
    }
}
