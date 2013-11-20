using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AutosalesWebAPI.Models
{
    public class RegionPerformance
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string DirectorName { get; set; }
        public string DirectorEmail { get; set; }
        public string DirectorPhone { get; set; }
        public int DealersCount { get; set; }
        public double? Value { get; set; }
        public double? Target { get; set; }
        public int Percent { get; set; }
        public double Max { get; set; }
        public bool IsTargetReached { get; set; }
        public double? PrevYearSalesAmount { get; set; }
        public double? PrevYearSalesQuantity { get; set; }
    }
}