---
title: schemaProps API
description: "API Index | schemaProps"
api_reference: true
slug: api_datasource_schemaprops
---

# SchemaProps

### schema-aggregates `Function | String`

The field from the response which contains the aggregate results. Can be set to a function which is called to return the aggregate results from the response. The result of the function will be a JavaScript object which contains the aggregate results for every field.

### schema-data `Function | String`

The field from the server response which contains the data items. Can be set to a function which is called to return the data items for the response.

### schema-errors `Function | String`

The field from the server response which contains server-side errors. Can be set to a function which is called to return the errors for response. If errors occur, the `error` event will be fired.

### schema-groups `Function | String`

The field from the server response which contains the groups. Can be set to a function which is called to return the groups from the response.

### schema-model `Object`

The data item (model) configuration. If `schema-model` is set to an object, the `Model.define` method will initialize the data source model. If `schema-model` is set to an existing `kendo.data.Model` instance, the data source will use that instance and will not initialize a new one.

### schema-parse `Function`

The configuration for preprocessing or parsing the server response. Executed before the server response is used.

### schema-total `Function | String`

The field from the server response which contains the total number of data items. Can be set to a function which is called to return the total number of data items for the response.

### schema-type `String`

The type of the response.

The supported values are:

* `xml`
* (Default) `json`

## Suggested Links

* [`Schema` in Kendo UI DataSource for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource/configuration/schema)
