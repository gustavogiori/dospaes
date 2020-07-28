using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DosPaes.Service
{
    public class JsonService<T>
    {
        public static T GetObject(string json)
        {
            return JsonConvert.DeserializeObject<T>(json);
        }
        public static string GetJson(T objeto)
        {
            Newtonsoft.Json.JsonSerializer serializer = new Newtonsoft.Json.JsonSerializer();
            var settings = new JsonSerializerSettings
            {
                DateFormatString = "yyyy-MM-dd",
                DateTimeZoneHandling = DateTimeZoneHandling.Unspecified
            };
            var json = JsonConvert.SerializeObject(objeto, settings);
            return json;
        }
    }
}
