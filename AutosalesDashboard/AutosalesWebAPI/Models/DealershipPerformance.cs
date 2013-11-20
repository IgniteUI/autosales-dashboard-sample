using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AutosalesWebAPI.Models
{
    public class DealershipPerformance
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Region { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string Address { get; set; }
        public string PostalCode { get; set; }
        public string EstablishDate { get; set; }
        public string Image { get; set; }
        public string GeneralManager { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public double? Longitude { get; set; }
        public double? Latitude { get; set; }
        public double? Value { get; set; }
        public double? Target { get; set; }
        public int Percent { get; set; }
        public double Max { get; set; }
        public bool IsTargetReached { get; set; }
        public string PrevYearRank { get; set; }
        public double? PrevYearSalesAmount { get; set; }
        public double? PrevYearSalesQuantity { get; set; }
        public int SalesPeopleCount { get; set; }
        public IEnumerable<string> Services { get; set; }
        public IEnumerable<string> Awards { get; set; }
    }
}