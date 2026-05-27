---
title: Keyboard Navigation
description: "Get started with the Kendo UI for Vue Scheduler and learn how to enable keyboard navigation."
slug: keyboard_navigation_scheduler
position: 60
---

# Keyboard Navigation

The Kendo UI for Vue Scheduler component provides keyboard navigaiton out-of-the box. 

## Slot Keyboard Navigation

Available shortcuts:

| SHORTCUT            | DESCRIPTION
|:---                 |:---
| `Left`              | Focuses the slot on the `left` of the current `slot`.
| `Right`              | Focuses the slot on the `right` of the current `slot`.
| `Up`              | Focuses the slot `above` the current `slot` in the view.
| `Down`              | Focuses the slot `bellow` the current `slot` in the view.
| `Tab`              | Focuses the `first` available `item` inside the slot. If no item is available inside the slot the `first` `item` in the view is focused. If no item is available, fall back to the default handling of the `keyDown` event.
| `Enter`              | Triggers the form `edit`, with predefined start, end, isAllDay and resources.

## Item Keyboard Navigation

| SHORTCUT            | DESCRIPTION
|:---                 |:---
| `Left`              | Focuses the slot on the `left` of the current `item`.
| `Right`              | Focuses the slot on the `right` of the current `item`.
| `Up`              | Focuses the slot `above` the first slot of the current `item`.
| `Down`              | Focuses the slot `bellow` the first slot of the current `item`.
| `Enter`              | Triggers the form `edit`, or the `occurrenceDialog` in case of a `recurring` item.
| `Tab`              | Focuses the `next` available item, sorted by `group`, `isAllDay`, `range`  and `start` - In this order.
| `Shift + Tab`              | Focuses the `previous` available item, sorted by `group`, `isAllDay`, `range`  and `start` - In this order.
| `Delete` or `Backspace`    | Deletes the event after a confirmation from the user.

## Play around with the Keyboard Navigation

{% meta height:700 %}
{% embed_file keyboard-navigation/basic/main.vue preview %}
{% embed_file keyboard-navigation/basic/main.js preview %}
{% embed_file shared/events-utc.js %}
{% endmeta %}

## Suggested Links

* [Editing in the Kendo UI for Vue Scheduler]({% slug editing_scheduler %})
* [API Reference of the Kendo UI for Vue Scheduler]({% slug api_scheduler_schedulerprops %})
