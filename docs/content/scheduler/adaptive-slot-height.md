---
title: Adaptive Slot Height
description: "This demo shows the Adaptive Slot Height functionality, available in the Month View of the Kendo UI for Vue Scheduler."
slug: adaptive_slot_height_scheduler
position: 9
---

# Adaptive Slot Height

By default the Kendo UI for Vue `SchedulerViewSlot` component adapts itself to fit all `items` inside it.

You can further set the minimum height of a slot through the `minHeight` of the `slotStyle` prop, or configure the maximum number of `items` in a `MonthView` through the [`itemsPerSlot`]({% slug api_scheduler_monthviewprops %}#toc-itemsperslot).

The following example demonstrates the above properties in action:

{% meta height:1000 %}
{% embed_file adaptive-slot-height/overview/main.vue preview %}
{% embed_file adaptive-slot-height/overview/main.js %}
{% embed_file shared/events-utc.js preview %}
{% endmeta %}

## Constant Slot Height

In order to disable the `adaptive` slot height and provide a `constant` height for the slots, set the following properties to the `SchedulerViewSlot`:
- `slotStyle.height` In order to set the height of a single slot, and
- [`expandable="false"`]({% slug api_scheduler_schedulerviewslotprops %}#toc-expandable)&mdash;In order to disable the auto-expansion when more items fit in the slot.

> The slots have `minHeight` of `75px` by default.

The following example demonstrates disabling the `adaptive` slot height:

{% meta height:850 %}
{% embed_file adaptive-slot-height/disabled/main.vue preview %}
{% embed_file adaptive-slot-height/disabled/main.js preview %}
{% embed_file shared/events-utc.js preview %}
{% endmeta %}

## Suggested Links

* [API Reference of the Scheduler]({% slug api_scheduler_schedulerprops %})
* [Scheduler Slot Customization]({% slug scheduler_custom_slot %})
* [Scheduler Item Customization]({% slug scheduler_custom_event %})
* [Auto Item Height]({% slug auto_item_height_scheduler %})
