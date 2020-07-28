using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DosPaes.Util
{
    public static class UtilDateTime
    {
        public static DateTime ToDateTime(string date)
        {
            if (string.IsNullOrEmpty(date))
            {
                return DateTime.MinValue;
            }
            else
            {
                return Convert.ToDateTime(date);
            }
        }
    }
}
