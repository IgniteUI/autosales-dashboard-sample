using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AutosalesWebAPI.Models
{
    public class Helpers
    {
        /// <summary>
        /// Gets the start end dates from report period.
        /// </summary>
        /// <param name="period">The period.</param>
        /// <param name="startDate">The start date.</param>
        /// <param name="endDate">The end date.</param>
        public static void GetStartEndDates(Enums.ReportPeriod period, out DateTime startDate, out DateTime endDate)
        {
            endDate = DateTime.UtcNow.Date.AddDays(1);
            // this will make the current year always to be 2010, because the database does not have values for the next years
            endDate = endDate.AddYears(2010 - endDate.Year);

            switch (period)
            {
                case Enums.ReportPeriod.TwelveMonths:
                    { startDate = endDate.AddMonths(-12); break; }
                case Enums.ReportPeriod.YearToDate:
                    { startDate = new DateTime(endDate.Year, 1, 1, 0, 0, 0, DateTimeKind.Utc); break; }
                case Enums.ReportPeriod.Quarter:
                    { startDate = endDate.AddMonths(-3); break; }
                case Enums.ReportPeriod.Month:
                    { startDate = endDate.AddMonths(-1); break; }
                case Enums.ReportPeriod.Week:
                    { startDate = endDate.AddDays(-7); break; }
                default:
                    throw new ArgumentOutOfRangeException("period");
            }
        }
    }
}