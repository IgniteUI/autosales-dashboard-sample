using AutosalesWebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AutosalesWebAPI.Controllers
{
    public class FilterController : ApiController
    {

        public Filter PostFilter()
        {
            using (AutosalesContext context = new AutosalesContext())
            {
                Filter filter = new Filter(GetDealers(context), GetRegions(context));

                return filter;
            }
        }

        /// <summary>
        /// Gets the dealers.
        /// </summary>
        /// <returns></returns>
        private List<Dealer> GetDealers(AutosalesContext context)
        {
            DateTime startDate;
            DateTime endDate;

            Helpers.GetStartEndDates(Enums.ReportPeriod.TwelveMonths, out startDate, out endDate);
            var dealers = context.Dealerships;
            var sales = context.SalesTransactions
                .Where(s => s.PurchaseDate >= startDate && s.PurchaseDate < endDate);

            var dealerSales = sales.GroupBy(s => s.DealershipID,
                s => s.ProductTotalCost, (key, s) => new
                {
                    DealershipID = key,
                    Value = s.Sum(v => v.HasValue ? v.Value : 0)
                });

            List<Dealer> result = new List<Dealer>();

            result = context.Dealerships.Join(dealerSales, d => d.ID,
                s => s.DealershipID, (d, s) => new Dealer
                {
                    ID = d.ID,
                    Name = d.Name,
                    Region = d.Region,
                    State = d.State,
                    Country = d.Country,
                    City = d.City,
                    Address = d.Address,
                    PostCode = d.PostalCode,
                    Longitude = d.Longitude,
                    Latitude = d.Latitude,
                    Percent = s.Value
                }).ToList();

            return result;
        }

        private List<RegionInfo> GetRegions(AutosalesContext context)
        {
            var dealersByRegion = context.Dealerships.GroupBy(d => d.Region,
                d => new { d.ID, d.State }, (key, d) => new
                {
                    Region = key,
                    DealersCount = d.Count(),
                    States = d.Select(s => s.State).Distinct()
                });

            List<RegionInfo> result = new List<RegionInfo>();

            result = context.Regions.ToList().Join(dealersByRegion, r => r.Name,
                d => d.Region, (r, d) => new RegionInfo
                {
                    Name = r.Name,
                    Description = r.Description,
                    DirectorName = r.DirectorName,
                    DirectorEmail = r.DirectorEmail,
                    DirectorPhone = r.DirectorPhone,
                    DealersCount = d.DealersCount,
                    States = String.Join(", ", d.States.ToArray())
                }).ToList();

            return result;
        }

        // OPTION http-verb handler
        public string OptionsHandler()
        {
            return null; // HTTP 200 response with empty body
        }
    }
}
