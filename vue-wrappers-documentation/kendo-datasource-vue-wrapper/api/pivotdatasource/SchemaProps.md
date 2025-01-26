---
title: schemaProps API
description: "API Index | schemaProps"
api_reference: true
slug: api_pivotdatasource_schemaprops
---

# SchemaProps

### schema-axes `Function | String`

The field from the server response which contains the data about the columns and rows axes. Can be set to a function which is called to return the column and row axes data for the response.

### schema-catalogs `Function | String`

The field from the server response which contains the list of the catalogs that are available on the server. Can be set to a function which is called to return the catalogs schema information for the response. Executed during the schema discovery.

### schema-cubes `Function | String`

The field from the server response which contains the list of the cubes that are available in the catalog. Can be set to a function which is called to return the cube schema information for the response. Executed during the schema discover.

### schema-cube `Object`

The cube declaration. If `schema-cube` is configured, the client cube processing is enabled, which is useful for binding to flat data. Applicable only if the cube processing is on the client.

### schema-data `Function | String`

The field from the server response which contains the cells data. Can be set to a function which is called to return the cell data for the response.

### schema-dimensions `Function | String`

The field from the server response which contains the schema information about dimensions. Can be set to a function which is called to return the dimensions schema information for the response. Executed during the schema discover.

### schema-hierarchies `Function | String`

The field from the server response which contains the schema information about hierarchy. Can be set to a function which is called to return the hierarchies schema information for the response. Executed during the schema discover requests.

### schema-levels `Function | String`

The field from the server response which contains the schema information about levels. Can be set to a function which is called to return the levels schema information for the response. Executed during the schema discover.

### schema-measures `Function | String`

The field from the server response which contains the schema information about measures. Can be set to a function which is called to return the measures schema information for the response. Executed during the schema discover.

## Suggested Links

* [`Schema` in Kendo UI PivotDataSource for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/pivotdatasource/configuration/schema)
