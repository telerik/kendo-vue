---
title: Auto Item Height
description: "This demo shows the Auto Item Height functionality, available in the Timeline, Day, Week and Month views of the Kendo UI for Vue Scheduler."
slug: auto_item_height_scheduler
position: 10
---

# Auto Item Height

The Kendo UI for Vue `SchedulerViewSlot` can automatically extend depending on the content inside it, or take a predefined `height`.

This feature is available in `horizontal` configuration of the events, which can be observed in the following views:

- `TimelineView`
- `DayView`&mdash; only in the `allDay` section.
- `Week`&mdash; only in the `allDay` section.
- `WorkWeek`&mdash; only in the `allDay` section.
- `MonthView`

> This feature is compatible with the [Adaptive Slot Height]({% slug adaptive_slot_height_scheduler %}) of the `SchedulerViewSlot`.

In order to set enable the auto item height functionality, set the `itemStyle.height` property of the `SchedulerViewItem` to `auto`:

```js
<template #itemRender="{ props }">
      <SchedulerViewItem
        v-bind="props"
        :itemStyle="{
          height: 'auto',
        }"
      />
</template>
```

The following example demonstrates the `auto` item height feature in action:

{% meta height:1000 %}
{% embed_file auto-item-height/overview/main.vue preview %}
{% embed_file auto-item-height/overview/main.js %}
{% embed_file shared/events-utc.js %}
{% endmeta %}

## Constant Item Height

In order to set a `constant` height of an item, set its `itemStyle.height` to a specifix value, representing the height:

```js
<template #itemRender="{ props }">
      <SchedulerViewItem
        v-bind="props"
        :itemStyle="{
          height: '45px',
        }"
      />
</template>
```

The following example demonstrates `constant` item height in action:

{% meta height:1000 %}
{% embed_file auto-item-height/constant/main.vue preview %}
{% embed_file auto-item-height/constant/main.js %}
{% embed_file shared/events-utc.js preview %}
{% endmeta %}

## Suggested Links

* [API Reference of the Scheduler]({% slug api_scheduler_schedulerprops %})
* [Scheduler Slot Customization]({% slug scheduler_custom_slot %})
* [Scheduler Item Customization]({% slug scheduler_custom_event %})
* [Adaptive Slot Height]({% slug adaptive_slot_height_scheduler %})
