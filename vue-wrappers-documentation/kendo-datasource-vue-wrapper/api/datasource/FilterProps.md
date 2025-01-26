---
title: filterProps API
description: "API Index | filterProps"
api_reference: true
slug: api_datasource_filterprops
---

# FilterProps

### filter-field `String`

The data item field to which the filter operator is applied.

### filter-filters `Array`

The nested filter expressions. Supports the same options as `filter`. Filters can be nested indefinitely.

### filter-logic `String`

The logical operation that will be used when the `filter.filters` option is set.

The supported values are:

* `and`
* `or`

### filter-operator `String | Function`

The filter operator (comparison).

The supported operators are:

* `eq` (equal to)
* `neq` (not equal to)
* `isnull` (is equal to null)
* `isnotnull` (is not equal to null)
* `lt` (less than)
* `lte` (less than or equal to)
* `gt` (greater than)
* `gte` (greater than or equal to)
* (For string fields only) `startswith`
* (For string fields only) `doesnotstartwith`
* (For string fields only) `endswith`
* (For string fields only) `doesnotendwith`
* (For string fields only) `contains`
* (For string fields only) `doesnotcontain`
* (For string fields only) `isempty`
* (For string fields only) `isnotempty`

### filter-value `Object`

The value to which the field is compared. The value has to be of the same type as the field.

## Suggested Links

* [`Filter` in Kendo UI DataSource for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource/configuration/filter)
