---
title: Keyboard Navigation
description: "Use the Kendo UI for Vue DatePicker keyboard navigation in Vue projects."
slug: keyboard_navigation_datepicker
position: 60
---

# Keyboard Navigation

By default, the keyboard navigation of the DatePicker is enabled.

The DatePicker supports the following keyboard shortcuts:

| Shortcut                            | Description         |
|:---                                 |:---                 |
| `Alt`+`Down Arrow`                  | Opens the popup and moves the focus to the displayed calendar. |
| `Alt`+`Up Arrow`                    | Closes the popup and moves the focus to the `input` element. |
| `Esc`                               | Closes the popup and moves the focus to the `input` element. |

{% meta height:450 %}
{% embed_file datepicker/keyboard/main.vue preview %}
{% embed_file datepicker/keyboard/main.js %}
{% endmeta %}


## Navigation Scenarios

When the popup of the DatePicker is opened, it adopts the same keyboard shortcuts as the keyboard shortcuts of the [Calendar]({% slug keyboard_navigation_calendar %}).

When the input of the DatePicker is focused, it adopts the same keyboard shortcuts as the keyboard shortcuts of the [DateInput]({% slug keyboard_navigation_dateinput %}).

## Suggested Links

* [API Reference of the DatePicker]({% slug api_dateinputs_datepickerprops %})
* [Accessibility]({% slug accessibility_datepicker %})
