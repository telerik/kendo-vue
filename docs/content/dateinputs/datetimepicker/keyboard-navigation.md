---
title: Keyboard Navigation
description: "Use the Kendo UI for Vue DateTimePicker keyboard navigation in Vue projects."
slug: keyboard_navigation_datetimepicker
position: 60
---

# Keyboard Navigation

By default, the keyboard navigation of the DateTimePicker is enabled.

The DateTimePicker supports the following keyboard shortcuts:

| Shortcut                            | Description         |
|:---                                 |:---                 |
| `Alt`+`Down Arrow`                  | Opens the popup and moves the focus to the displayed date-time selector. |
| `Alt`+`Up Arrow`                    | Closes the popup and moves the focus to the `input` element. |
| `Esc`                               | Closes the popup and moves the focus to the `input` element. |
| `Alt`+`Right Arrow`                 | Move the focus to the `time` part of the date-time selector. |
| `Alt`+`Left Arrow`                  | Move the focus to the `date` part of the date-time selector. |

{% meta height:560 %}
{% embed_file datetimepicker/keyboard/main.vue preview %}
{% embed_file datetimepicker/keyboard/main.js %}
{% endmeta %}

## Navigation Scenarios

When the popup of the DateTimePicker is opened, it adopts the same keyboard shortcuts as the keyboard shortcuts of the [Calendar]({% slug keyboard_navigation_calendar %}) or the `time` part.

When the input of the DateTimePicker is focused, it adopts the same keyboard shortcuts as the keyboard shortcuts of the [DateInput]({% slug keyboard_navigation_dateinput %}).

## Suggested Links

* [API Reference of the DateTimePicker]({% slug api_dateinputs_datetimepickerprops %})
* [Accessibility]({% slug accessibility_datetimepicker %})
