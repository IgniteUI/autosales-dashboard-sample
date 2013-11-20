using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AutosalesWebAPI.Models
{
    public class Enums
    {
        public enum MeasureType
        {
            Revenue,
            Volume
        }

        public enum ReportPeriod
        {
            TwelveMonths,
            YearToDate,
            Quarter,
            Month,
            Week
        }

        public enum FilterType
        {
            All,
            ByRegion,
            ByState,
            ByDealership
        }

        public enum GroubBy
        {
            Product,
            SalesPerson,
            Dealership
        }
    }
}