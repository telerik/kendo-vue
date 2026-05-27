---
title: Slot Templates
description: "Learn hot to customize the slot templates in the Native Scheduler component. Edit the text in the slots and change their colors."
slug: scheduler_custom_slot
position: 20
---

# Slot Templates

With the Kendo UI for Vue Native Scheduler, you can customize the `slot` templates in a way that best fits your requirements.

The `slots` are the cells inside the **Scheduler** above which the events are displayed. The `slots` can be separated into the following types:
* AllDay slots - the cells in the Scheduler inside which the "AllDay" events are rendered.
* WorkDay slots - the cells in the Scheduler that display the "Work Days" inside the component.
* Workhour slots - the Scheduler cells that display the "Work hours" inside the component.

Using the `slotRender` property of the **Scheduler** we can control the look and content of each `slot cell`. Below you will find examples about the following scenarios:
* [Define custom colors for all slot types](#toc-custom-slot-colors)
* [Customize the Month slots](#toc-custom-month-slots)
* [Customize the Time slots](#toc-custom-time-slots)


## Custom slot colors

The below example demonstrates how the `colors` of each slot type can be customized using the **slotRender property** of the Native Scheduler.

{% meta height:770 %}
{% embed_file custom-templates/slots/color/main.vue preview %}
{% embed_file custom-templates/slots/color/main.js %}
{% embed_file shared/events-utc.js %}
{% endmeta %}

The way we control the colors of the different `slots` is by dynamically setting the `background-color` of each cell. Each color we set depends on the values of the **props.isAllDay**, **props.isWorkDay** and **props.isWorkHour** variables available in the template passed to the **slotRender property**.

```jsx-no-run
<template #slotRender="{ props }">
  <SchedulerSlot
    v-bind="props"
    :style="{
      'background-color': props.isAllDay
        ? '#56ca85' // Define the color of AllDay slots
        : props.isWorkDay
        ? '#ffddcc' // Define the color of WorkDay slots
        : props.isWorkHour
        ? '#ccff99' // Define the color of WorkHours slots
        : !props.isWorkDay
        ? '#ffcccb ' // Define the color of Non-WorkDay slots
        : undefined,
    }"
    @showmoreitems="props.onShowmoreitems"
  >
  </SchedulerSlot>
</template>
```

## Custom Month slots

The below example demonstrates how we can edit the content of the `Month view slots`.

{% meta height:770 %}
{% embed_file custom-templates/slots/month/main.vue preview %}
{% embed_file custom-templates/slots/month/main.js %}
{% embed_file shared/events-utc.js %}
{% endmeta %}


The slot template passed to the `slotRender` property in the above example is defined as follows:

```jsx-no-run
<template #slotRender="{ props }">
  <SchedulerSlot
    v-bind="props"
    :nav-day="false"
    @showmoreitems="props.onShowmoreitems"
  >
    <span
      :style="{
        'font-weight': 'bold',
      }"
      >{{ formattedDate(props.start) }}</span
    >
  </SchedulerSlot>
</template>
```
The important thing in the above template is the usage of the `navDay` **SchedulerSlot** property. By setting its value to **false** the default content in the slot is removed and we can add our custom data to it.

## Custom Time slots

The below example demonstrates how we can edit the `Time` **slots** in the  `Day`, `Week` and `Timeline` views.

{% meta height:770 %}
{% embed_file custom-templates/slots/time/main.vue preview %}
{% embed_file custom-templates/slots/time/main.js %}
{% embed_file shared/events-utc.js %}
{% endmeta %}


## Suggested Links
* [API Reference of the Scheduler]({% slug api_scheduler_schedulerprops %})
* [API Reference of the SchedulerItem]({% slug api_scheduler_scheduleritemprops %})
