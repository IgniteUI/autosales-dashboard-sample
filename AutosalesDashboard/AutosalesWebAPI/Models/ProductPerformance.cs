using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AutosalesWebAPI.Models
{
    public class ProductPerformance
    {
        public string ProductSku { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public int? Hp { get; set; }
        public int? DoorsCount { get; set; }
        public string Model { get; set; }
        public string UseCategory { get; set; }
        public string Image { get; set; }
        public string MilesPerGallon { get; set; }
        public double? SafetyRanking { get; set; }
        public double? ConsumerRating { get; set; }
        public double? Target { get; set; }
        public double? Value { get; set; }
        public int Percent { get; set; }
        public double Max { get; set; }
        public bool IsTargetReached { get; set; }
        public IEnumerable<string> Awards { get; set; }
        public double? PrevYearSalesAmount { get; set; }
        public double? PrevYearSalesQuantity { get; set; }
    }
}