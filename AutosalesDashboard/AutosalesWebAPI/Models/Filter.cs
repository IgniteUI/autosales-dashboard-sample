using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AutosalesWebAPI.Models
{
    public class Filter
    {

        public Filter(List<Dealer> dealers, List<RegionInfo> regions) 
        {
            Dealers = dealers;
            Regions = regions;
        }

        public List<Dealer> Dealers { get; set; }
        public List<RegionInfo> Regions { get; set; }
    }
}