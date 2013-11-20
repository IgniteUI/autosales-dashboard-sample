using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AutosalesWebAPI.Models
{
    public class FilterSettings
    {
        public Enums.FilterType Filter { get; set; }
        public string FilterParam { get; set; }
        public Enums.MeasureType Measure { get; set; }
        public Enums.ReportPeriod Period { get; set; }
    }
}