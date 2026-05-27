---
title: Keyboard Navigation
description: "Use the Kendo UI for Vue DateRangePicker keyboard navigation in Vue projects."
slug: keyboard_navigation_daterangepicker
position: 60
---

# Keyboard Navigation

By default, the keyboard navigation of the DateRangePicker is enabled.

The DateRangePicker supports the following keyboard shortcuts:

| Shortcut                            | Description                                                                                          |
|:---                                 |:---                                                                                                  |
| `Alt`+`Down Arrow`                  | Opens the popup.                                                                                     |
| `Tab`                               | Moves the focus from the start input to the end input, or from the end input to the `calendar` element.|
| `Esc`                               | Closes the popup and moves the focus to the start or to an empty `input` element.                    |



{% meta height:580 %}
{% embed_file daterangepicker/keyboard/main.vue preview %}
{% embed_file daterangepicker/keyboard/main.js %}
{% endmeta %}


## Navigation Scenarios

When the popup of the DateRangePicker is opened, it adopts the same keyboard shortcuts as the keyboard shortcuts of the [Calendar]({% slug keyboard_navigation_calendar %}).

When the inputs of the DateRangePicker is focused, it adopts the same keyboard shortcuts as the keyboard shortcuts of the [DateInput]({% slug keyboard_navigation_dateinput %}).

## Suggested Links

* [API Reference of the DateRangePicker]({% slug api_dateinputs_daterangepickerprops %})
* [Accessibility]({% slug accessibility_daterangepicker %})
