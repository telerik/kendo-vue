---
title: Basics
description: "Get started with the Kendo UI for Vue Native Scheduler component and create, edit, and delete its events."
slug: editing_scheduler
position: 1
---

# Editing

The Scheduler enables you to create, update, and delete its events.

## Getting Started

The Scheduler provides a `data` property and an `onDatachange` callback to allow full user control. For more information on handling data changes, refer to the article on [data binding]({% slug data_binding_scheduler %}).

To enable all edit modes in the Scheduler, set its [`editable`]({% slug api_scheduler_schedulerprops %}#toc-editable) property to `true`.

```jsx-no-run
    <Scheduler :editable="true" />
```

To configure which edit modes will be enabled, set the `editable` property to an `Object` of type [`EditableProp`]({% slug api_scheduler_editableprop %}) with your custom configuration.

The `EditableProp` option provides the following options:

* `add`&mdash;Allows the creation of a new `DataItem` when the user double-clicks a `time` or a `day` slot.
* `remove`&mdash;Allows the deletion of the `DataItem` which is associated with the clicked event.
* `drag`&mdash;Changes the `start` and `end` settings, or the provided [`resources`]({% slug resources_scheduler %}) configuration of the `DataItem`.
* `resize`&mdash;Changes the duration of the `DataItem`.
* `edit`&mdash;Provides advanced editing through a form component.

```jsx-no-run
    <Scheduler
        editable: {
            add: true,
            remove: true,
            drag: true,
            resize: true,
            edit: true
        }
    />
```

## Setup

The Scheduler provides the `created`, `updated`, and `deleted` data items through the [`onDataChange`]({% slug api_scheduler_schedulerprops %}#toc-ondatachange) callback function.

The following example demonstrates how to allow editing in the Scheduler component and modify the local data based on the parameters that are passed as arguments to the `onDataChange` callback. To avoid the same `id` configurations on two data items, the following example uses a [`guid`](http://guid.one/guid) setting for the newly created data items.



{% meta height:700 %}
{% embed_file data-operations/editing/basic/main.vue preview %}
{% embed_file data-operations/editing/basic/main.js %}
{% embed_file shared/events-utc.js  %}
{% endmeta %}


## Customization
The Scheduler provides configurations we can use for the customization of the Edit Form of the component. For more details about each customization option see the following links:
* [Native Scheduler - Custom Editing Form]({% slug editing_scheduler_custom %})
* [Native Scheduler - Set Edit Form initial values]({% slug editing_scheduler_default_values %})
* [Native Scheduler - Custom validation messages]({% slug editing_scheduler_custom_validation_messages %})


## Suggested Links

* [Data Binding in the Kendo UI for Vue Native Scheduler]({% slug data_binding_scheduler %})
* [Grouping in the Kendo UI for Vue Native Scheduler]({% slug grouping_scheduler %})
* [Handling the Native Scheduler Resources]({% slug resources_scheduler %})
* [API Reference of the SchedulerDataChangeEvent]({% slug api_scheduler_schedulerprops %}#toc-ondatachange)
