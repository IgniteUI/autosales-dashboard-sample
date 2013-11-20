//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace AutosalesWebAPI.Models
{
    using Newtonsoft.Json;
    using System;
    using System.Collections.Generic;
    
    public partial class DealershipProductTarget
    {
        public string DealershipID { get; set; }
        public string ProductSKU { get; set; }
        public Nullable<float> YearlyRevenueTarget { get; set; }
        public Nullable<float> YearlyVolumeTarget { get; set; }
        public int ID { get; set; }

        [JsonIgnore]
        public virtual Dealership Dealership { get; set; }
        [JsonIgnore]
        public virtual Product Product { get; set; }
    }
}