---
title: transportProps API
description: "API Index | transportProps"
api_reference: true
slug: api_pivotdatasource_transportprops
---

# TransportProps

### transport-discover `Object | String | Function`

The configuration used when the data source discovers schema information about the current cube.

* If the value of `transport.discover` is a function, the data source invokes that function instead of `jQuery.ajax`.
* If the value of `transport.discover` is a string, the data source uses this string as the URL of the remote service.
* If the value of `transport.discover` is omitted, the data source uses `transport.read` for schema discover.

### transport-connection-catalog `String`

The catalog name.

### transport-connection-cube `String`

The cube name in the current data source.

## Suggested Links

* [`Transport` in Kendo UI PivotDataSource for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/pivotdatasource/configuration/transport)
