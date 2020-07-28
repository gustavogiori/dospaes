using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Threading.Tasks;

namespace DosPaes.Service
{
    public static class QueryService<T>
    {
        public static List<T> GetListFromFilter(string campo, string valor, IQueryable<T> itens)
        {
            // recupera o objeto IQueryable da Context do EF
            IQueryable<T> query = itens;
            // cria alias do objecto Lambda
            ParameterExpression param = Expression.Parameter(typeof(T), "x");
            // obtem tipo da propriedade
            Type type;
            var _propertyNames = campo.Split('.');
            if (_propertyNames.Length > 1)
                type = typeof(T).GetProperty(_propertyNames[0]).PropertyType.GetProperty(_propertyNames[1]).PropertyType;
            else
                type = typeof(T).GetProperty(campo).PropertyType;
            // cria Expression para o campo
            MemberExpression propertyExpression = Expression.PropertyOrField(param, campo);
            // cria Expression para o valor
            ConstantExpression valueExpression = Expression.Constant(Convert.ChangeType(valor, type), type);
            MethodInfo methodInfo;
            if (type == typeof(string))
                methodInfo = type.GetMethod("Contains", new[] { type });
            else
                methodInfo = type.GetMethod("Equals", new[] { type });

            var predicate = Expression.Lambda<Func<T, bool>>(
                // aplica tipo de Filtro, no caso do exemplo Contains (LIKE campo '%valor%')
                Expression.Call(propertyExpression, methodInfo, valueExpression)
            , param);

            // adiciona predicate ao where da query
            query = query.Where(predicate);
            // executa a consulta no banco de dados
            var result = query.ToList();

            return result;

        }
    }
}
