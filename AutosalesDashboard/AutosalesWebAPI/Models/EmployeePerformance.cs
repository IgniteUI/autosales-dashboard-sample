using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AutosalesWebAPI.Models
{
    public class EmployeePerformance
    {
        public string Name { get; set; }
        public string Gender { get; set; }
        public string HireDate { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string PostalCode { get; set; }
        public string Image { get; set; }
        public double? Target { get; set; }
        public double? Value { get; set; }
        public int Percent { get; set; }
        public double Max { get; set; }
        public bool IsTargetReached { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public double? PrevYearSalesAmount { get; set; }
        public double? PrevYearSalesQuantity { get; set; }
        public string PrevYearRank { get; set; }
        public List<PlotPoint> PrevMonthlySales { get; set; }
        public IEnumerable<string> Awards { get; set; }
    }
}