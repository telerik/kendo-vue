---
title: resourcesProps API
description: "API Index | resourcesProps"
api_reference: true
slug: api_gantt_resourcesprops
---

# ResourcesProps

### resources-data-format-field `String`

The field of the resource data item which contains the format of the resource value that can be assigned to a Gantt task. The format value of the  data item can be any valid Kendo UI format.

### resources-data-color-field `String`

The field of the resource data item which contains the resource color.

### resources-data-source `Object | Array`

The data source which contains data items for the resource.

The supported values are:

* A JavaScript object which represents any valid data source configuration.
* A JavaScript array.
* An existing `kendo.data.DataSource` instance.

If the `dataSource` option is set to a JavaScript object or an array, the Gantt initializes a new `kendo.data.DataSource` instance by using that value as the data source configuration. If the `dataSource` option is an existing `kendo.data.DataSource` instance, the Gantt uses that instance and will not initialize a new one.

### resources-data-text-field `String`

The field of the resource data item which represents the resource text.

### resources-field `String`

The field of the Gantt task which contains the assigned resource objects.

## Suggested Links

* [`Resources` in Kendo UI Gantt for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/configuration/resources)
