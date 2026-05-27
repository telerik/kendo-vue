---
title: Keyboard Navigation
description: "Use the Kendo UI for Vue TimePicker keyboard navigation in Vue projects."
slug: keyboard_navigation_timepicker
position: 60
---

# Keyboard Navigation

By default, the keyboard navigation of the TimePicker is enabled.

The TimePicker supports the following keyboard shortcuts:

| Shortcut                            | Description         |
|:---                                 |:---                 |
| `Alt`+`Down Arrow`                  | Opens the popup and moves the focus to the displayed time selector. |
| `Alt`+`Up Arrow`                    | Closes the popup and moves the focus to the `input` element. |
| `Esc`                               | Closes the popup. |
| `Left Arrow/Right Arrow`            | Moves focus to the next/previous time section in the popup. |
| `Enter`                             | Accepts the current value change. |

{% meta height:450 %}
{% embed_file timepicker/keyboard/main.vue preview %}
{% embed_file timepicker/keyboard/main.js %}
{% endmeta %}

## Navigation Scenarios

When the input of the TimePicker is focused, it adopts the same keyboard shortcuts as the keyboard shortcuts of the [DateInput]({% slug keyboard_navigation_dateinput %}).

When the popup of the TimePicker is opened, the hours become focused and the following shortcuts become available:

| Shortcut                            | Description         |
|:---                                 |:---                 |
| `Up Arrow`                          | Increments the value of the focused time section. |
| `Down Arrow`                        | Decrements the value of the focused time section. |
| `Left Arrow/Right Arrow`            | Moves focus to the next/previous time section in the popup. |
| `Tab`                               | Moves the focus back to the date input and closes the popup. |
| `Enter`                             | Accepts the current value change. |

## Suggested Links

* [API Reference of the TimePicker]({% slug api_dateinputs_timepickerprops %})
* [Accessibility]({% slug accessibility_timepicker %})
