using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AutosalesWebAPI.Models
{
    public class RegionInfo
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string DirectorName { get; set; }
        public string DirectorEmail { get; set; }
        public string DirectorPhone { get; set; }
        public int DealersCount { get; set; }
        public string States { get; set; }
    }
}