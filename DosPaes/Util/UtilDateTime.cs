using DosPaes.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DosPaes.Util
{
    public static class UtilDateTime
    {
        public static void GetDateFilterCusto(DataFilter dataFilter, out DateTime dtInicio, out DateTime DtFinal)
        {
            switch (dataFilter.tipo)
            {
                case "H":
                case "":
                    {
                        dtInicio = DateTime.Now.Date;
                        DtFinal = DateTime.Now.Date;
                    }
                    break;
                case "M":
                    {
                        dtInicio = new DateTime(DateTime.Now.Year, DateTime.Now.Month, 1);
                        DtFinal = new DateTime(DateTime.Now.Year, DateTime.Now.Month, 1).AddMonths(1).AddDays(-1);
                    }
                    break;
                case "S":
                    {
                        dtInicio = DateTime.Now;
                        dtInicio = dtInicio.AddDays(-(int)dtInicio.DayOfWeek);
                        DtFinal = dtInicio.AddDays(6);
                    }
                    break;
                case "A":
                    {
                        dtInicio = new DateTime(DateTime.Now.Year, 1, 1);
                        DtFinal = new DateTime(DateTime.Now.Year, 12, 31);
                    }
                    break;
                default:
                    {
                        dtInicio = dataFilter.dataInicio;
                        DtFinal = dataFilter.dataFim;
                    }
                    break;
            }
        }
        public static DateTime GetDateFilterVendas(string typeFilter = "", string dateFilterString = "")
        {
            switch (typeFilter)
            {
                case "H":
                    {
                        return DateTime.Now.Date;
                    }

                case "A":
                    {
                        return DateTime.Now.Date.AddDays(1);
                    }
                case "O":
                    {
                        return DateTime.Now.Date.AddDays(-1);
                    }
                case "P":
                    {
                        return ToDateTime(dateFilterString);
                    }
                case "T":
                    return DateTime.MinValue;
                default:
                    {
                        return DateTime.Now.Date;
                    }
            }
        }
        public static DateTime ToDateTime(string date)
        {
            if (string.IsNullOrEmpty(date))
            {
                return DateTime.MinValue;
            }
            else
            {
                try
                {
                    return Convert.ToDateTime(date);
                }
                catch
                {
                    return DateTime.MinValue;
                }
            }
        }
    }
}
