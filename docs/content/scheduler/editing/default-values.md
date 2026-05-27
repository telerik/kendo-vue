---
title: Set Initial Values
description: "Learn how to define initial values in the Kendo UI for Vue Native Scheduler edit form."
slug: editing_scheduler_default_values
position: 20
---

# Initial Edit Form Values

The Scheduler enables you to pre-define values for the different fields when creating and updating tasks. The initial values of the Scheduler's Edit Form can be defined with the [modifyInitialFormValues]({% slug api_scheduler_schedulerprops %}#toc-modifyinitialformvalues) property.

## Basic Usage

The below example shows how we can set the initial values of the `AllDay` checkbox and the `Rooms` DropDownList available in the editing form.

{% meta height:700 %}
{% embed_file data-operations/editing/default-values/main.vue preview %}
{% embed_file data-operations/editing/default-values/main.js %}
{% embed_file shared/events-utc.js  %}
{% endmeta %}

To achieve the above example the following `modifyInitialFormValues` method is passed to the [modifyInitialFormValues]({% slug api_scheduler_schedulerprops %}#toc-modifyinitialformvalues) property of the Scheduler.

```jsx-no-run
modifyInitialFormValues(dataItem) {
  return dataItem.roomId === undefined
    ? {
        ...dataItem,
        roomId: 1,
        isAllDay: true,
      }
    : dataItem;
},
```

The above snippet modifies the default `isAllDay` task field and the `roomId` resource field.

* The default fields available in the edit form are listed in the [Fields API documentation]({% slug api_scheduler_fields %}).

## Suggested Links

* [Native Scheduler Editing - Basic configuration]({% slug editing_scheduler %})
* [Native Scheduler - Custom Edit Form]({% slug editing_scheduler_custom %})
* [Native Scheduler - Custom validation messages]({% slug editing_scheduler_custom_validation_messages %})
* [API Reference of the SchedulerFormEditor]({% slug api_scheduler_schedulerformeditorprops %})
* [Kendo UI for Vue Native Form]({% slug overview_form %})
