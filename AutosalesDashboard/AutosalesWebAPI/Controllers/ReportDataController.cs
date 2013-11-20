using AutosalesWebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AutosalesWebAPI.Controllers
{
    public class ReportDataController : ApiController
    {
        public ReportData PostReportData([FromBody] FilterSettings filterSettings)
        {
            Enums.MeasureType measure = filterSettings.Measure;
            Enums.ReportPeriod period = filterSettings.Period;
            Enums.FilterType filter = filterSettings.Filter;
            string filterParam = filterSettings.FilterParam;

            DateTime startDate;
            DateTime endDate;

            Helpers.GetStartEndDates(period, out startDate, out endDate);

            using (AutosalesContext context = new AutosalesContext())
            {
                var result = new ReportData(
                    GetSalesPerformance(context, measure, filter, filterParam, startDate, endDate),
                    GetSalesPerformance(context, measure, filter, filterParam, startDate.AddYears(-1), endDate.AddYears(-1)),
                    GetProductsPerformance(context, measure, filter, filterParam, startDate, endDate),
                    GetEmployeesPerformance(context, measure, filter, filterParam, startDate, endDate),
                    GetDealershipsPerformance(context, measure, filter, filterParam, startDate, endDate),
                    GetRegionsPerformance(context, measure, filter, filterParam, startDate, endDate)
                );

                result.Period = period;
                return result;
            }
        }

        // OPTION http-verb handler
        public string OptionsHandler()
        {
            return null; // HTTP 200 response with empty body
        }

        private List<PlotPoint> GetSalesPerformance(AutosalesContext context, Enums.MeasureType measureType,
            Enums.FilterType filterType, string filterParam, DateTime startDate, DateTime endDate)
        {
            var sales = context.SalesTransactions
                            .Where(s => s.PurchaseDate >= startDate && s.PurchaseDate < endDate);
            List<PlotPoint> result = new List<PlotPoint>();

            //Handle filter type
            switch (filterType)
            {
                case Enums.FilterType.All:
                    {
                        break;
                    }
                case Enums.FilterType.ByRegion:
                    {
                        sales = sales.Join(context.Dealerships.Where(d => d.Region == filterParam),
                            s => s.DealershipID, d => d.ID, (s, d) => s);
                        break;
                    }
                case Enums.FilterType.ByState:
                    {
                        sales = sales.Join(context.Dealerships.Where(d => d.State == filterParam),
                                    s => s.DealershipID, d => d.ID, (s, d) => s);
                        break;
                    }
                case Enums.FilterType.ByDealership:
                    {
                        sales = sales.Join(context.Dealerships.Where(d => d.ID == filterParam),
                            s => s.DealershipID, d => d.ID, (s, d) => s);
                        break;
                    }
                default:
                    throw new ArgumentOutOfRangeException("filterType");
            }

            var monthlySales = sales.GroupBy(s => new
            {
                Year = s.PurchaseDate.Value.Year,
                Month = s.PurchaseDate.Value.Month
            }, s => s, (key, s) => new
            {
                TotalCost = s.Sum(t => t.ProductTotalCost),
                TotalQuantity = s.Sum(t => t.ProductQuantity),
                Year = key.Year,
                Month = key.Month
            });

            //Handle measure type
            switch (measureType)
            {
                case Enums.MeasureType.Revenue:
                    {
                        result = monthlySales.ToList()
                            .Select(s => new PlotPoint
                            {
                                Value = s.TotalCost,
                                Date = "/Date(" + new DateTime(s.Year, s.Month,
                                    DateTime.DaysInMonth(s.Year, s.Month))
                                    .Subtract(new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc))
                                    .TotalMilliseconds.ToString() + ")/"
                            }).OrderBy(s => s.Date).ToList();
                        break;
                    }
                case Enums.MeasureType.Volume:
                    {
                        result = monthlySales.ToList()
                            .Select(s => new PlotPoint
                            {
                                Value = s.TotalQuantity,
                                Date = "/Date(" + new DateTime(s.Year, s.Month,
                                    DateTime.DaysInMonth(s.Year, s.Month))
                                    .Subtract(new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc))
                                    .TotalMilliseconds.ToString() + ")/"
                            }).OrderBy(s => s.Date).ToList();
                        break;
                    }
                default:
                    throw new ArgumentOutOfRangeException("measureType");
            }

            return result;
        }

        private List<ProductPerformance> GetProductsPerformance(AutosalesContext context, Enums.MeasureType measureType,
            Enums.FilterType filterType, string filterParam, DateTime startDate, DateTime endDate)
        {
            DateTime prevYearStart = new DateTime(startDate.Year - 1, 1, 1);
            DateTime prevYearEnd = new DateTime(startDate.Year - 1, 12, 31);

            var targetMultiplier = ((endDate - startDate).Days) / 365d;
            var products = context.Products;
            IQueryable<DealershipProductTarget> targets = context.DealershipProductTargets;
            var sales = context.SalesTransactions
                .Where(s => s.PurchaseDate >= startDate && s.PurchaseDate < endDate);
            var prevYearSales = context.SalesTransactions
                .Where(s => s.PurchaseDate >= prevYearStart && s.PurchaseDate < prevYearEnd);

            List<ProductPerformance> result = new List<ProductPerformance>();

            //Handle filter type
            switch (filterType)
            {
                case Enums.FilterType.All:
                    {
                        break;
                    }
                case Enums.FilterType.ByRegion:
                    {
                        var byRegion = context.Dealerships.Where(d => d.Region == filterParam);

                        sales = sales.Join(byRegion, s => s.DealershipID,
                            d => d.ID, (s, d) => s);
                        targets = targets.Join(byRegion, t => t.DealershipID,
                            d => d.ID, (t, d) => t);
                        break;
                    }
                case Enums.FilterType.ByState:
                    {
                        var byState = context.Dealerships.Where(d => d.State == filterParam);

                        sales = sales.Join(byState, s => s.DealershipID,
                            d => d.ID, (s, d) => s);
                        targets = targets.Join(byState, t => t.DealershipID,
                            d => d.ID, (t, d) => t);
                        break;
                    }
                case Enums.FilterType.ByDealership:
                    {
                        var byDealership = context.Dealerships.Where(d => d.ID == filterParam);

                        sales = sales.Join(byDealership, s => s.DealershipID,
                            d => d.ID, (s, d) => s);
                        targets = targets.Join(byDealership, t => t.DealershipID,
                            d => d.ID, (t, d) => t);
                        break;
                    }
                default:
                    throw new ArgumentOutOfRangeException("filterType");
            }

            var productsValues = sales.GroupBy(s => s.ProductSKU,
                s => s, (key, s) => new
                {
                    ProductSku = key,
                    TotalCost = s.Sum(g => g.ProductTotalCost),
                    TotalQuantity = s.Sum(g => g.ProductQuantity)
                });

            var productsTargets = targets.GroupBy(t => t.ProductSKU,
                t => t, (key, t) => new
                {
                    ProductSku = key,
                    YearlyRevenueTarget = t.Sum(g => g.YearlyRevenueTarget),
                    YearlyVolumeTarget = t.Sum(g => g.YearlyVolumeTarget)
                });

            var productsValuesAndTargets = productsValues.Join(productsTargets, s => s.ProductSku,
                t => t.ProductSku, (s, t) => new
                {
                    ProductSku = s.ProductSku,
                    TotalCost = s.TotalCost,
                    TotalQuantity = s.TotalQuantity,
                    YearlyRevenueTarget = t.YearlyRevenueTarget,
                    YearlyVolumeTarget = t.YearlyVolumeTarget
                });

            var prevYearProductValues = prevYearSales.GroupBy(s => s.ProductSKU,
                s => s, (key, s) => new
                {
                    ProductSku = key,
                    PrevYearSalesAmount = s.Sum(x => x.ProductUnitCost),
                    PrevYearSalesQuantity = s.Sum(x => x.ProductQuantity)
                });

            var productsData = productsValuesAndTargets.Join(prevYearProductValues,
                p => p.ProductSku, py => py.ProductSku, (p, py) => new
                {
                    ProductSku = p.ProductSku,
                    TotalCost = p.TotalCost,
                    TotalQuantity = p.TotalQuantity,
                    YearlyRevenueTarget = p.YearlyRevenueTarget,
                    YearlyVolumeTarget = p.YearlyVolumeTarget,
                    PrevYearSalesAmount = py.PrevYearSalesAmount,
                    PrevYearSalesQuantity = py.PrevYearSalesQuantity
                });

            //Handle measure type
            switch (measureType)
            {
                case Enums.MeasureType.Revenue:
                    {
                        result = productsData.Join(products,
                            pd => pd.ProductSku, p => p.SKU, (pd, p) => new ProductPerformance
                            {
                                ProductSku = p.SKU,
                                Name = p.Name,
                                Description = p.Description,
                                Category = p.Category,
                                Hp = p.HP,
                                DoorsCount = p.Doors,
                                Model = p.Model,
                                ConsumerRating = p.ConsumerRating,
                                Image = p.Image,
                                MilesPerGallon = p.MilesPerGallon,
                                SafetyRanking = p.SafetyRanking,
                                UseCategory = p.UseCategory,
                                Awards = p.ProductAwards.Select(x => x.Award),
                                Value = pd.TotalCost,
                                Target = Math.Ceiling((double)pd.YearlyRevenueTarget * targetMultiplier),
                                PrevYearSalesAmount = pd.PrevYearSalesAmount,
                                PrevYearSalesQuantity = pd.PrevYearSalesQuantity
                            }).OrderByDescending(x => x.Value).ToList();
                        break;
                    }
                case Enums.MeasureType.Volume:
                    {
                        result = productsData.Join(products,
                            pd => pd.ProductSku, p => p.SKU, (pd, p) => new ProductPerformance
                            {
                                ProductSku = p.SKU,
                                Name = p.Name,
                                Description = p.Description,
                                Category = p.Category,
                                Hp = p.HP,
                                DoorsCount = p.Doors,
                                Model = p.Model,
                                ConsumerRating = p.ConsumerRating,
                                Image = p.Image,
                                MilesPerGallon = p.MilesPerGallon,
                                SafetyRanking = p.SafetyRanking,
                                UseCategory = p.UseCategory,
                                Awards = p.ProductAwards.Select(x => x.Award),
                                Value = pd.TotalQuantity,
                                Target = Math.Ceiling((double)pd.YearlyVolumeTarget * targetMultiplier),
                                PrevYearSalesAmount = pd.PrevYearSalesAmount,
                                PrevYearSalesQuantity = pd.PrevYearSalesQuantity
                            }).OrderByDescending(x => x.Value).ToList();
                        break;
                    }
                default:
                    throw new ArgumentOutOfRangeException("measureType");
            }

            if (result.Count > 0)
            {
                var max = CalculateScaleMax(result.Max(x => Math.Max(
                    x.Value.HasValue ? x.Value.Value : 0, x.Value.HasValue ? x.Value.Value : 0)));
                var allSales = result.Sum(x => x.Value);

                foreach (var boPerformance in result)
                {
                    boPerformance.Percent = (int)((boPerformance.Value / allSales) * 100);
                    boPerformance.Max = max;
                    boPerformance.IsTargetReached = boPerformance.Value -
                        boPerformance.Target > 0 ? true : false;
                }
            }

            return result;
        }

        private List<EmployeePerformance> GetEmployeesPerformance(AutosalesContext context, Enums.MeasureType measureType,
            Enums.FilterType filterType, string filterParam, DateTime startDate, DateTime endDate)
        {
            DateTime prevYearStart = new DateTime(startDate.Year - 1, 1, 1);
            DateTime prevYearEnd = new DateTime(startDate.Year - 1, 12, 31);

            var targetMultiplier = ((endDate - startDate).Days) / 365d;
            IQueryable<Employee> employees = context.Employees;
            var sales = context.SalesTransactions
                .Where(s => s.PurchaseDate >= startDate && s.PurchaseDate < endDate);
            var prevYearSales = context.SalesTransactions
                .Where(s => s.PurchaseDate >= prevYearStart && s.PurchaseDate < prevYearEnd);
            List<EmployeePerformance> result = new List<EmployeePerformance>();

            //Handle filter type
            switch (filterType)
            {
                case Enums.FilterType.All:
                    {
                        break;
                    }
                case Enums.FilterType.ByRegion:
                    {
                        var byRegion = context.Dealerships.Where(d => d.Region == filterParam);

                        sales = sales.Join(byRegion, s => s.DealershipID,
                            d => d.ID, (s, d) => s);
                        break;
                    }
                case Enums.FilterType.ByState:
                    {
                        var byState = context.Dealerships.Where(d => d.State == filterParam);

                        sales = sales.Join(byState, s => s.DealershipID,
                            d => d.ID, (s, d) => s);
                        break;
                    }
                case Enums.FilterType.ByDealership:
                    {
                        var byDealership = context.Dealerships.Where(d => d.ID == filterParam);

                        sales = sales.Join(byDealership, s => s.DealershipID,
                            d => d.ID, (s, d) => s);
                        break;
                    }
                default:
                    throw new ArgumentOutOfRangeException("filterType");
            }

            var employeesValues = sales.GroupBy(s => s.EmployeeID,
                s => s, (key, s) => new
                {
                    EmployeeID = key,
                    TotalCost = s.Sum(g => g.ProductTotalCost),
                    TotalQuantity = s.Sum(g => g.ProductQuantity)
                });

            var prevYearEmployeeValues = prevYearSales.GroupBy(s => s.EmployeeID,
                s => s, (key, s) => new
                {
                    EmployeeID = key,
                    PrevYearSalesAmount = s.Sum(x => x.ProductUnitCost),
                    PrevYearSalesQuantity = s.Sum(x => x.ProductQuantity)
                });

            var prevYearMonthlySales = prevYearSales.GroupBy(s => new
            {
                s.EmployeeID,
                s.PurchaseDate.Value.Year,
                s.PurchaseDate.Value.Month
            }, s => s, (key, s) => new
            {
                EmployeeID = key.EmployeeID,
                Year = key.Year,
                Month = key.Month,
                MonthlySalesAmount = s.Sum(x => x.ProductUnitCost)
            }).GroupBy(s => s.EmployeeID, s => s, (key, s) => new
            {
                EmployeeID = key,
                MonthlySales = s.Select(x => new
                {
                    Year = x.Year,
                    Month = x.Month,
                    Value = x.MonthlySalesAmount
                })
            });

            var employeeAwards = context.EmployeeAwards.GroupBy(
                e => e.EmployeeID, e => e, (key, e) => new
                {
                    EmployeeID = key,
                    Awards = e.Select(g => g.Award)
                });

            var employeesData = employeesValues.Join(prevYearEmployeeValues,
                e => e.EmployeeID, epy => epy.EmployeeID, (e, epy) => new
                {
                    EmployeeID = e.EmployeeID,
                    TotalCost = e.TotalCost,
                    TotalQuantity = e.TotalQuantity,
                    PrevYearSalesAmount = epy.PrevYearSalesAmount,
                    PrevYearSalesQuantity = epy.PrevYearSalesQuantity
                }).Join(employeeAwards, e => e.EmployeeID,
                    ea => ea.EmployeeID, (e, ea) => new
                    {
                        EmployeeID = e.EmployeeID,
                        TotalCost = e.TotalCost,
                        TotalQuantity = e.TotalQuantity,
                        PrevYearSalesAmount = e.PrevYearSalesAmount,
                        PrevYearSalesQuantity = e.PrevYearSalesQuantity,
                        Awards = ea.Awards
                    }).Join(prevYearMonthlySales, ed => ed.EmployeeID,
                    ms => ms.EmployeeID, (ed, ms) => new
                    {
                        EmployeeID = ed.EmployeeID,
                        TotalCost = ed.TotalCost,
                        TotalQuantity = ed.TotalQuantity,
                        PrevYearSalesAmount = ed.PrevYearSalesAmount,
                        PrevYearSalesQuantity = ed.PrevYearSalesQuantity,
                        Awards = ed.Awards,
                        MonthlySales = ms.MonthlySales
                    });

            switch (measureType)
            {
                case Enums.MeasureType.Revenue:

                    result = employees.ToList().Join(employeesData, e => e.ID, ed => ed.EmployeeID,
                        (e, ed) => new EmployeePerformance
                        {
                            Name = e.FirstName + " " + e.LastName,
                            Gender = e.Gender,
                            HireDate = e.HireDate.Value.ToShortDateString(),
                            Address = e.Address,
                            City = e.City,
                            State = e.State,
                            PostalCode = e.PostalCode,
                            Image = e.Image,
                            Target = Math.Ceiling((double)e.YearlyRevenueTarget * targetMultiplier),
                            Awards = ed.Awards.ToList(),
                            Value = ed.TotalCost,
                            PrevMonthlySales = ed.MonthlySales.Select(y => new PlotPoint
                            {
                                Date = "/Date(" + new DateTime(y.Year, y.Month,
                                    DateTime.DaysInMonth(y.Year, y.Month))
                                    .Subtract(new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc))
                                    .TotalMilliseconds.ToString() + ")/",
                                Value = y.Value
                            }).ToList(),
                            PrevYearSalesAmount = ed.PrevYearSalesAmount,
                            PrevYearSalesQuantity = ed.PrevYearSalesQuantity
                        }).OrderByDescending(e => e.Value).ToList();
                    break;
                case Enums.MeasureType.Volume:

                    result = employees.ToList().Join(employeesData, e => e.ID, ed => ed.EmployeeID,
                        (e, ed) => new EmployeePerformance
                        {
                            Name = e.FirstName + " " + e.LastName,
                            Gender = e.Gender,
                            HireDate = e.HireDate.Value.ToShortDateString(),
                            Address = e.Address,
                            City = e.City,
                            State = e.State,
                            PostalCode = e.PostalCode,
                            Image = e.Image,
                            Target = Math.Ceiling((double)e.YearlyVolumeTarget * targetMultiplier),
                            Awards = ed.Awards.ToList(),
                            Value = ed.TotalQuantity,
                            PrevMonthlySales = ed.MonthlySales.Select(y => new PlotPoint
                            {
                                Date = "/Date(" + new DateTime(y.Year, y.Month,
                                    DateTime.DaysInMonth(y.Year, y.Month))
                                    .Subtract(new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc))
                                    .TotalMilliseconds.ToString() + ")/",
                                Value = y.Value
                            }).ToList(),
                            PrevYearSalesAmount = ed.PrevYearSalesAmount,
                            PrevYearSalesQuantity = ed.PrevYearSalesQuantity
                        }).OrderByDescending(e => e.Value).ToList();
                    break;
                default:
                    throw new ArgumentOutOfRangeException("measureType");
            }

            if (result.Count > 0)
            {
                var max = CalculateScaleMax(result.Max(x => Math.Max(
                    x.Value.HasValue ? x.Value.Value : 0,
                    x.Target.HasValue ? x.Target.Value : 0)));
                var allSales = result.Sum(x => x.Value);

                int i = 1;
                foreach (var employee in result)
                {
                    //The number produced here can be 0.xxx that is casted to 0
                    employee.Percent = (int)((employee.Value / allSales) * 100);
                    employee.Max = max;
                    employee.IsTargetReached = employee.Value
                        - employee.Target > 0 ? true : false;
                    employee.PrevYearRank = i + "/" + result.Count;
                    employee.Phone = "1234567890";
                    employee.Email = String.Format("{0}@autodealers.com",
                            employee.Name.ToLower().Replace(' ', '.'));
                    i++;
                }
            }

            return result;
        }

        private List<DealershipPerformance> GetDealershipsPerformance(AutosalesContext context, Enums.MeasureType measureType,
            Enums.FilterType filterType, string filterParam, DateTime startDate, DateTime endDate)
        {
            DateTime prevYearStart = new DateTime(startDate.Year - 1, 1, 1);
            DateTime prevYearEnd = new DateTime(startDate.Year - 1, 12, 31);

            var targetMultiplier = ((endDate - startDate).Days) / 365d;
            IQueryable<DealershipProductTarget> targets = context.DealershipProductTargets;
            var sales = context.SalesTransactions
                .Where(s => s.PurchaseDate >= startDate && s.PurchaseDate < endDate);
            var prevYearSales = context.SalesTransactions
                .Where(s => s.PurchaseDate >= prevYearStart && s.PurchaseDate < prevYearEnd);
            List<DealershipPerformance> result = new List<DealershipPerformance>();

            //Handle filter type
            switch (filterType)
            {
                case Enums.FilterType.All:
                    {
                        break;
                    }
                case Enums.FilterType.ByRegion:
                    {
                        var byRegion = context.Dealerships.Where(d => d.Region == filterParam);

                        sales = sales.Join(byRegion, s => s.DealershipID,
                            d => d.ID, (s, d) => s);
                        targets = targets.Join(byRegion, t => t.DealershipID,
                            d => d.ID, (t, d) => t);
                        break;
                    }
                case Enums.FilterType.ByState:
                    {
                        var byState = context.Dealerships.Where(d => d.State == filterParam);

                        sales = sales.Join(byState, s => s.DealershipID,
                            d => d.ID, (s, d) => s);
                        targets = targets.Join(byState, t => t.DealershipID,
                            d => d.ID, (t, d) => t);
                        break;
                    }
                case Enums.FilterType.ByDealership:
                    {
                        var byDealership = context.Dealerships.Where(d => d.ID == filterParam);

                        sales = sales.Join(byDealership, s => s.DealershipID,
                            d => d.ID, (s, d) => s);
                        targets = targets.Join(byDealership, t => t.DealershipID,
                            d => d.ID, (t, d) => t);
                        break;
                    }
                default:
                    throw new ArgumentOutOfRangeException("filterType");
            }

            var dealershipsValues = sales.GroupBy(s => s.DealershipID,
                s => s, (key, s) => new
                {
                    DealershipID = key,
                    SalesPeopleCount = s.Select(g => g.EmployeeID).Distinct().Count(),
                    TotalCost = s.Sum(g => g.ProductTotalCost),
                    TotalQuantity = s.Sum(g => g.ProductQuantity)
                });

            var dealershipsTargets = targets.GroupBy(t => t.DealershipID,
                t => t, (key, t) => new
                {
                    DealershipID = key,
                    YearlyRevenueTarget = t.Sum(g => g.YearlyRevenueTarget),
                    YearlyVolumeTarget = t.Sum(g => g.YearlyVolumeTarget)
                });

            var dealershipsValuesAndTargets = dealershipsValues.Join(dealershipsTargets,
                s => s.DealershipID, t => t.DealershipID, (s, t) => new
                {
                    DealershipID = s.DealershipID,
                    SalesPeopleCount = s.SalesPeopleCount,
                    TotalCost = s.TotalCost,
                    TotalQuantity = s.TotalQuantity,
                    YearlyRevenueTarget = t.YearlyRevenueTarget,
                    YearlyVolumeTarget = t.YearlyVolumeTarget
                });

            var prevYearDealershipsValues = prevYearSales.GroupBy(s => s.DealershipID,
                s => s, (key, s) => new
                {
                    DealershipID = key,
                    PrevYearSalesAmount = s.Sum(x => x.ProductUnitCost),
                    PrevYearSalesQuantity = s.Sum(x => x.ProductQuantity)
                });

            var dealershipsData = dealershipsValuesAndTargets.Join(prevYearDealershipsValues,
                d => d.DealershipID, dpy => dpy.DealershipID, (d, dpy) => new
                {
                    DealershipID = d.DealershipID,
                    SalesPeopleCount = d.SalesPeopleCount,
                    TotalCost = d.TotalCost,
                    TotalQuantity = d.TotalQuantity,
                    YearlyRevenueTarget = d.YearlyRevenueTarget,
                    YearlyVolumeTarget = d.YearlyVolumeTarget,
                    PrevYearSalesAmount = dpy.PrevYearSalesAmount,
                    PrevYearSalesQuantity = dpy.PrevYearSalesQuantity
                });

            //Handle measure type
            switch (measureType)
            {
                case Enums.MeasureType.Revenue:
                    {
                        result = dealershipsData.Join(context.Dealerships,
                            dd => dd.DealershipID, d => d.ID, (dd, d) => new DealershipPerformance
                            {
                                Id = d.ID,
                                Address = d.Address,
                                City = d.City,
                                Country = d.Country,
                                Latitude = d.Latitude,
                                Longitude = d.Longitude,
                                Name = d.Name,
                                Region = d.Region,
                                State = d.State,
                                PostalCode = d.PostalCode,
                                EstablishDate = d.EstablishDate,
                                Image = d.Image,
                                GeneralManager = d.GeneralManager,
                                Email = d.Email,
                                Phone = d.Phone,
                                Awards = d.DealershipAwards.Select(x => x.Award),
                                Services = d.DealershipServices.Select(x => x.Service),
                                SalesPeopleCount = dd.SalesPeopleCount,
                                Value = dd.TotalCost,
                                Target = Math.Ceiling((double)dd.YearlyRevenueTarget * targetMultiplier),
                                PrevYearSalesAmount = dd.PrevYearSalesAmount,
                                PrevYearSalesQuantity = dd.PrevYearSalesQuantity
                            }).OrderByDescending(x => x.Value).ToList();
                        break;
                    }
                case Enums.MeasureType.Volume:
                    {
                        result = dealershipsData.Join(context.Dealerships,
                            dd => dd.DealershipID, d => d.ID, (dd, d) => new DealershipPerformance
                            {
                                Id = d.ID,
                                Address = d.Address,
                                City = d.City,
                                Latitude = d.Latitude,
                                Longitude = d.Longitude,
                                Name = d.Name,
                                Region = d.Region,
                                State = d.State,
                                PostalCode = d.PostalCode,
                                EstablishDate = d.EstablishDate,
                                Image = d.Image,
                                GeneralManager = d.GeneralManager,
                                Email = d.Email,
                                Phone = d.Phone,
                                Awards = d.DealershipAwards.Select(x => x.Award),
                                Services = d.DealershipServices.Select(x => x.Service),
                                SalesPeopleCount = dd.SalesPeopleCount,
                                Value = dd.TotalQuantity,
                                Target = Math.Ceiling((double)dd.YearlyVolumeTarget * targetMultiplier),
                                PrevYearSalesAmount = dd.PrevYearSalesAmount,
                                PrevYearSalesQuantity = dd.PrevYearSalesQuantity
                            }).OrderByDescending(x => x.Value).ToList();
                        break;
                    }
                default:
                    throw new ArgumentOutOfRangeException("measureType");
            }

            if (result.Count > 0)
            {
                var max = CalculateScaleMax(result.Max(x => Math.Max(
                    x.Value.HasValue ? x.Value.Value : 0, x.Target.HasValue ? x.Target.Value : 0)));
                var allSales = result.Sum(x => x.Value);

                int i = 1;
                foreach (var boPerformance in result)
                {
                    boPerformance.Percent = (int)((boPerformance.Value / allSales) * 100);
                    boPerformance.Max = max;
                    boPerformance.IsTargetReached = boPerformance.Value -
                        boPerformance.Target > 0 ? true : false;
                    boPerformance.PrevYearRank = i + "/" + result.Count;
                    i++;
                }
            }

            return result;
        }

        private List<RegionPerformance> GetRegionsPerformance(AutosalesContext context, Enums.MeasureType measureType,
            Enums.FilterType filterType, string filterParam, DateTime startDate, DateTime endDate)
        {
            DateTime prevYearStart = new DateTime(startDate.Year - 1, 1, 1);
            DateTime prevYearEnd = new DateTime(startDate.Year - 1, 12, 31);

            var targetMultiplier = ((endDate - startDate).Days) / 365d;
            IQueryable<DealershipProductTarget> targets = context.DealershipProductTargets;
            var sales = context.SalesTransactions
                .Where(s => s.PurchaseDate >= startDate && s.PurchaseDate < endDate);
            var prevYearSales = context.SalesTransactions
                .Where(s => s.PurchaseDate >= prevYearStart && s.PurchaseDate < prevYearEnd);
            List<RegionPerformance> result = new List<RegionPerformance>();

            var prevYearRegionValues = prevYearSales.Join(context.Dealerships, s => s.DealershipID,
                d => d.ID, (s, d) => new
                {
                    Region = d.Region,
                    PrevYearProductTotalCost = s.ProductTotalCost,
                    PrevYearProductQuantity = s.ProductQuantity
                }).GroupBy(s => s.Region, s => s, (key, s) => new
                {
                    Region = key,
                    PrevYearSalesAmount = s.Sum(g => g.PrevYearProductTotalCost),
                    PrevYearSalesQuantity = s.Sum(g => g.PrevYearProductQuantity)
                });

            var salesAndDealers = sales.Join(context.Dealerships, s => s.DealershipID,
                d => d.ID, (s, d) => new
                {
                    Region = d.Region,
                    PurchaseDate = s.PurchaseDate,
                    ProductTotalCost = s.ProductTotalCost,
                    ProductQuantity = s.ProductQuantity
                });

            var targetsAndDealers = targets.Join(context.Dealerships, t => t.DealershipID,
                d => d.ID, (t, d) => new
                {
                    Region = d.Region,
                    YearlyRevenueTarget = t.YearlyRevenueTarget,
                    YearlyVolumeTarget = t.YearlyVolumeTarget
                });

            var regionsValues = salesAndDealers.GroupBy(s => s.Region, s => s, (key, s) => new
            {
                Region = key,
                TotalCost = s.Sum(g => g.ProductTotalCost),
                TotalQuantity = s.Sum(g => g.ProductQuantity)
            });

            var regionsTargets = targetsAndDealers.GroupBy(s => s.Region, t => t, (key, t) => new
            {
                Region = key,
                YearlyRevenueTarget = t.Sum(g => g.YearlyRevenueTarget),
                YearlyVolumeTarget = t.Sum(g => g.YearlyVolumeTarget)
            });

            var regionsValuesAndTargets = regionsValues.Join(regionsTargets, s => s.Region,
                t => t.Region, (s, t) => new
                {
                    Region = s.Region,
                    TotalCost = s.TotalCost,
                    TotalQuantity = s.TotalQuantity,
                    YearlyRevenueTarget = t.YearlyRevenueTarget,
                    YearlyVolumeTarget = t.YearlyVolumeTarget
                });

            var dealersCountPerRegion = context.Dealerships.GroupBy(d => d.Region,
                d => new { d.ID, d.State }, (key, d) => new
                {
                    Region = key,
                    DealersCount = d.Count()
                });

            var regionsData = regionsValuesAndTargets.Join(
                prevYearRegionValues, vt => vt.Region, py => py.Region, (vt, py) => new
                {
                    Region = vt.Region,
                    TotalCost = vt.TotalCost,
                    TotalQuantity = vt.TotalQuantity,
                    YearlyRevenueTarget = vt.YearlyRevenueTarget,
                    YearlyVolumeTarget = vt.YearlyVolumeTarget,
                    PrevYearSalesAmount = py.PrevYearSalesAmount,
                    PrevYearSalesQuantity = py.PrevYearSalesQuantity
                }).Join(dealersCountPerRegion, r => r.Region, dc => dc.Region, (r, dc) => new
                {
                    Region = r.Region,
                    TotalCost = r.TotalCost,
                    TotalQuantity = r.TotalQuantity,
                    YearlyRevenueTarget = r.YearlyRevenueTarget,
                    YearlyVolumeTarget = r.YearlyVolumeTarget,
                    PrevYearSalesAmount = r.PrevYearSalesAmount,
                    PrevYearSalesQuantity = r.PrevYearSalesQuantity,
                    DealersCount = dc.DealersCount
                });

            //Handle measure type
            switch (measureType)
            {
                case Enums.MeasureType.Revenue:
                    {
                        result = context.Regions.Join(regionsData, r => r.Name,
                            rd => rd.Region, (r, rd) => new RegionPerformance
                            {
                                Name = r.Name,
                                Description = r.Description,
                                DirectorName = r.DirectorName,
                                DirectorEmail = r.DirectorEmail,
                                DirectorPhone = r.DirectorPhone,
                                DealersCount = rd.DealersCount,
                                Value = rd.TotalCost,
                                Target = Math.Ceiling((double)rd.YearlyRevenueTarget * targetMultiplier),
                                PrevYearSalesAmount = rd.PrevYearSalesAmount,
                                PrevYearSalesQuantity = rd.PrevYearSalesQuantity
                            }).OrderByDescending(x => x.Value).ToList();
                        break;
                    }
                case Enums.MeasureType.Volume:
                    {
                        result = context.Regions.Join(regionsData, r => r.Name,
                            rd => rd.Region, (r, rd) => new RegionPerformance
                            {
                                Name = r.Name,
                                Description = r.Description,
                                DirectorName = r.DirectorName,
                                DirectorEmail = r.DirectorEmail,
                                DirectorPhone = r.DirectorPhone,
                                DealersCount = rd.DealersCount,
                                Value = rd.TotalCost,
                                Target = Math.Ceiling((double)rd.YearlyRevenueTarget * targetMultiplier),
                                PrevYearSalesAmount = rd.PrevYearSalesAmount,
                                PrevYearSalesQuantity = rd.PrevYearSalesQuantity
                            }).OrderByDescending(x => x.Value).ToList();
                        break;
                    }
                default:
                    throw new ArgumentOutOfRangeException("measureType");
            }

            if (result.Count > 0)
            {
                var max = CalculateScaleMax(result.Max(x => Math.Max(
                    x.Value.HasValue ? x.Value.Value : 0, x.Target.HasValue ? x.Target.Value : 0)));
                var allSales = result.Sum(x => x.Value);

                foreach (var boPerformance in result)
                {
                    boPerformance.Percent = (int)((boPerformance.Value / allSales) * 100);
                    boPerformance.Max = max;
                    boPerformance.IsTargetReached = boPerformance.Value -
                        boPerformance.Target > 0 ? true : false;
                }
            }

            return result;
        }

        /// <summary>
        /// Calculates the closest integer in the form of x*(10^y) <= value.
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        private double CalculateScaleMax(double value)
        {
            if (value < 1.0) return 1.0;
            var power = Math.Floor(Math.Log10(value));
            var tenToPower = Math.Pow(10, power);
            var result = tenToPower * Math.Ceiling(value / (tenToPower));

            return result;
        }
    }
}