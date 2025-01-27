---
title: PivotDataSource API
description: "API Index | PivotDataSource"
api_reference: true
slug: api_pivotdatasourcecomponent
---

# PivotDataSource

The PivotDataSource component utilizes the `kendo-datasource` component as a mixin. Other supported props are available in the API of the [`kendo-datasource`]({% slug api_datasourcecomponent %}) component.

## Directive

`kendo-pivotdatasource`

## Child Components

* [`kendo-pivotcolumn`]({% slug api_pivotdatasource_pivotcolumncomponent %})
* [`kendo-pivotmeasure`]({% slug api_pivotdatasource_pivotmeasurecomponent %})
* [`kendo-pivotrow`]({% slug api_pivotdatasource_pivotrowcomponent %})

## Props

### columns `Array`

The configuration of the column axis members ([`columns` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/pivotdatasource/configuration/columns)). An array of JavaScript objects or strings. JavaScript objects are interpreted as column descriptors. Strings are interpreted as the hierarchical names of the members.

### measures `Array | Object`

The configuration of measures ([`measures` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/pivotdatasource/configuration/measures)). A string array whose values are interpreted as the name of the measures that will be loaded. You can define measures as a list of objects with a name and type fields.

### rows `Array`

The configuration of the rows axis members ([`rows` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/pivotdatasource/configuration/rows)). An array of JavaScript objects or strings. JavaScript objects are interpreted as rows descriptors. Strings are interpreted as the hierarchical names of the members.

### transport `Object`

The configuration for loading data items and discovering schema information ([`transport` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/pivotdatasource/configuration/transport)). The supported composite props are available in [`TransportProps`]({% slug api_pivotdatasource_transportprops %}).

### schema `Object`

The schema configuration of the PivotDataSource ([`schema` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/pivotdatasource/configuration/schema)). The supported composite props are available in [`SchemaProps`]({% slug api_pivotdatasource_schemaprops %}).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/data/pivotdatasource#methods). 

### kendoWidget

##### returns

Returns the Kendo UI PivotDataSource instance.
