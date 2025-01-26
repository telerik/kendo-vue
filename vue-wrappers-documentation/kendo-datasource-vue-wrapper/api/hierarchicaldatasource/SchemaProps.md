---
title: schemaProps API
description: "API Index | schemaProps"
api_reference: true
slug: api_hierarchicaldatasource_schemaprops
---

# SchemaProps

### schema-model `kendo.data.Node`

The data item (model) configuration. For more information, refer to `DataSource.schema.model`.

### schema-model-has-children `Boolean | String | Function`

Specifies whether the model can be loaded and have children. Applicable when the rendering of a widget needs to have different states for items that have no children&mdash;for example, the toggle button in the TreeView.

### schema-model-children `String | Object`

A DataSource object or configuration for fetching child nodes. For more information on the way children are fetched, refer to the overview article of the HierarchicalDataSource. If you use static HierarchicalDataSource (with local data), the `schema-model-children` field can be a string which indicates which field holds the nested data.

## Suggested Links

* [`Schema` in Kendo UI HierarchicalDataSource for jQuery]((https://docs.telerik.com/kendo-ui/api/javascript/data/hierarchicaldatasource/configuration/schema)
