---
title: SchedulerResource API
description: "API Index | SchedulerResource"
api_reference: true
slug: api_schedulerresourcecomponent_wrapper
---

# SchedulerResource

## Directive

`kendo-scheduler-resource`

## Props

### data-color-field `String`

The field of the resource data item which contains the resource color.

### data-source `Object | Array`

The data source which contains the resource data items..

You can set `data-source` to:

* A JavaScript object which represents any valid data source configuration.
* A JavaScript array.
* An existing `kendo.data.DataSource` instance.

If the `dataSource` option is set to a JavaScript object or an array, the Scheduler will initialize a new `kendo.data.DataSource` instance by using that value as a data source configuration. If the `dataSource` option is an existing `kendo.data.DataSource` instance, the Scheduler will use that instance and will not initialize a new one.

### data-text-field `String`

The field of the resource data item which represents the resource text.

### data-value-field `String`

The field of the resource data item which represents the `resource` value. The `resource` value links the Scheduler event with a resource.

### field `String`

The field of the Scheduler event which contains the resource `id`.

### multiple `Boolean`

If `multiple` is set to `true`, the Scheduler event can be assigned multiple instances of the resource. The Scheduler event field which is specified through the `field` option will contain an array of resources. By default, only one resource instance can be assigned to an event.

### name `String`

The name of the resource that is used to distinguish between resources. If `name` is not set, the Scheduler uses the value of the `field` option.

### title `String`

The user-friendly title of the resource which is displayed in the edit form of the Scheduler. If `title` is not set, the Scheduler uses the value of the `field` option.

### value-primitive `Boolean`

If the Scheduler event field which is specified through the `field` option contains a resource data item, set `value-primitive` to `false`. By default, the Scheduler expects that field to contain a primitive value (string, number) which corresponds to the `value` of the resource that is specified through `dataValueField`.

## Suggested Links

* [`Resources` in Kendo UI Scheduler for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/configuration/resources)
