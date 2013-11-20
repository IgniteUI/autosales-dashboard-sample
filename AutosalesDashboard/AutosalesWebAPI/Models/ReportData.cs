using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AutosalesWebAPI.Models
{
    public class ReportData
    {
        #region Constructors
        /// <summary>
        /// Initializes a new instance of <see cref="ReportData"/> 
        /// </summary>
        public ReportData(List<PlotPoint> sales,
            List<PlotPoint> previousSales,
            List<ProductPerformance> products,
            List<EmployeePerformance> salesPeople,
            List<DealershipPerformance> dealers,
            List<RegionPerformance> regions
            )
        {
            Sales = sales;
            PreviousSales = previousSales;
            Products = products;
            SalesPeople = salesPeople;
            Dealers = dealers;
            Regions = regions;

            //TODO: refactor
            var salesAmount = 0d;

            if (Sales.Count > 0)
            {
                foreach (var sale in Sales)
                {
                    salesAmount += sale.Value.HasValue ? sale.Value.Value : 0;
                }
            }
            RegionalSales = salesAmount;

            var previousSalesAmount = 0d;

            if (previousSales.Count > 0)
            {
                foreach (var sale in previousSales)
                {
                    previousSalesAmount += sale.Value.HasValue ? sale.Value.Value : 0;
                }
            }
            PreviousRegionalSales = previousSalesAmount;

            var salesTargetAmount = 0d;

            if (Products.Count > 0)
            {
                foreach (var product in Products)
                {
                    salesTargetAmount += product.Target.HasValue ? product.Target.Value : 0;
                }
            }

            RegionalSalesTarget = salesTargetAmount;
        }
        #endregion Constructors

        #region Properites
        /// <summary>
        /// Gets the sales.
        /// </summary>
        /// <value>The sales.</value>
        public List<PlotPoint> Sales { get; private set; }

        /// <summary>
        /// Gets the previous sales.
        /// </summary>
        /// <value>The previous sales.</value>
        public List<PlotPoint> PreviousSales { get; private set; }

        /// <summary>
        /// Gets the car models performance.
        /// </summary>
        /// <value>The car models.</value>
        public List<ProductPerformance> Products { get; private set; }

        /// <summary>
        /// Gets or the sales people performance.
        /// </summary>
        /// <value>The sales people performance.</value>
        public List<EmployeePerformance> SalesPeople { get; private set; }

        /// <summary>
        /// Gets or the dealers performance.
        /// </summary>
        /// <value>The dealers performance.</value>
        public List<DealershipPerformance> Dealers { get; private set; }

        /// <summary>
        /// Gets or the regions performance.
        /// </summary>
        /// <value>The regions performance.</value>
        public List<RegionPerformance> Regions { get; private set; }

        public double RegionalSales { get; private set; }
        public double RegionalSalesTarget { get; private set; }
        public double PreviousRegionalSales { get; private set; }
        #endregion Properites

        public Enums.ReportPeriod Period { get; set; }
    }
}