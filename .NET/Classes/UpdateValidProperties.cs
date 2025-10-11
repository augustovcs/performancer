namespace Classes.Special;

public static class UpdateHelper
{
    public static void UpdateValidProperties<TTarget, TSource>( TTarget target, TSource source)
    {
        var properties = typeof(TSource).GetProperties();
        foreach (var prop in properties)
        {
            var value = prop.GetValue(source);

            if (value == null) continue;

            // String
            if (prop.PropertyType == typeof(string))
            {
                var str = value as string;
                if (!string.IsNullOrWhiteSpace(str) && str != "string")
                {
                    var targetProp = typeof(TTarget).GetProperty(prop.Name);
                    targetProp?.SetValue(target, str);
                }
            }

            // Int
            else if (prop.PropertyType == typeof(int))
            {
                var num = (int)value;
                if (num >= 0)
                {
                    var targetProp = typeof(TTarget).GetProperty(prop.Name);
                    targetProp?.SetValue(target, num);
                }
            }

        }
    }
}
