---
title: assignmentsProps API
description: "API Index | assignmentsProps"
api_reference: true
slug: api_gantt_assignmentsprops
---

# AssignmentsProps

### assignments-data-source `Object | Array`

The data source which contains the assignment data items.

The supported values are:

* A JavaScript object which represents any valid data source configuration.
* A JavaScript array.
* An existing `kendo.data.DataSource` instance.

If the `dataSource` option is set to a JavaScript object or an array, the Gantt initializes a new `kendo.data.DataSource` instance by using that value as the data source configuration. If the `dataSource` option is an existing `kendo.data.DataSource` instance, the Gantt uses that instance and will not initialize a new one.

### assignments-data-resource-id-field `String`

The field of the assignment data item which represents the resource `id`.

### assignments-data-task-id-field `String`

The field of the assignment data item which represents the task `id`.

### assignments-data-value-field `String`

The field of the assignment data item which represents the amount of the assigned resources.

## Suggested Links

* [`Assignments` in Kendo UI Gantt for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/configuration/assignments)
