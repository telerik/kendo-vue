---
title: HierarchicalDataSource API
description: "API Index | HierarchicalDataSource"
api_reference: true
slug: api_hierarchicaldatasourcecomponent
---

# HierarchicalDataSource

The HierarchicalDataSource component utilizes the `kendo-datasource` component as a mixin. Other supported props are available in the API of the [`kendo-datasource`]({% slug api_datasourcecomponent %}) component.

## Directive

`kendo-hierarchicaldatasource`

## Props

### filter `Array | Object`

The filters which are applied over the data items ([`filter` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/hierarchicaldatasource/configuration/filter)). `filter` applies filtering to all loaded nodes and creates views from the nodes that match the filter and their parent nodes up to the root of the hierarchy. Nodes that are not currently loaded are not filtered. By default, `filter` is not applied.

### schema `Object`

The schema configuration ([`schema` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/hierarchicaldatasource/configuration/schema)). For more information, refer to `DataSource.schema`. The supported composite props are available in [`SchemaProps`]({% slug api_hierarchicaldatasource_schemaprops %}).

## Events

### change: `Function`

Fires when the data is changed ([`change` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/hierarchicaldatasource/events/change)). As compared to the standard `change` event, the HierarchicalDataSource includes additional data when the event was triggered from a child DataSource.

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/data/hierarchicaldatasource#methods). 

### kendoWidget

##### returns

Returns the Kendo UI HierarchicalDataSource instance.
