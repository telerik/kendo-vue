---
title: Keyboard Navigation
description: "Use the Kendo UI for Vue Calendar keyboard navigation in Vue projects."
slug: keyboard_navigation_calendar
position: 60
---

# Keyboard Navigation

By default, the keyboard navigation of the Calendar is enabled.

The Calendar supports the following keyboard shortcuts:

| Shortcut                                  | Description                                  |
|:---                                       |:---                                          |
| `Up Arrow`                                | Focuses the same date in the previous week.  |
| `Down Arrow`                              | Focuses the same date in the next week.      |
| `Left Arrow`                              | Focuses the previous date.                   |
| `Right Arrow`                             | Focuses the next date.                       |
| `Enter`                                   | Selects the focused date.                    |
| `Home`                                    | Focuses the first date in the month.         |
| `End`                                     | Focuses the last date in the month.          |
| `PageUp`                                  | Focuses the same date in the previous month. |
| `PageDown`                                | Focuses the same date in the next month.     |
| `Ctrl`+`Left Arrow` & `Cmd`+`Left Arrow`  | Focuses the same date in the previous month. |
| `Ctrl`+`Right Arrow` & `Cmd`+`Right Arrow`| Focuses the same date in the next month.     |
| `Ctrl`+`Up Arrow` & `Cmd`+`Up Arrow`      | Selects the upper view.                      |
| `Ctrl`+`Down Arrow` & `Cmd`+`Down Arrow`  | Selects the lower view.                      |

{% meta height:430 %}
{% embed_file calendar/keyboard/main.vue preview %}
{% embed_file calendar/keyboard/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Calendar]({% slug api_dateinputs_calendarprops %})
* [Accessibility]({% slug accessibility_calendar %})
