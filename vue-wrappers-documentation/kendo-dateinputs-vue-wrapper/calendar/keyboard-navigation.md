---
title: Keyboard Navigation
page_title: Keyboard Navigation - Calendar - Kendo UI for Vue
description: "Explore the keyboard navigation options provided by the Kendo UI Calendar wrapper for Vue."
slug: keyboardnavigation_calendar_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dateinputs/calendar/keyboard-navigation/"
position: 8
---

<div><WrapperBanner link="/kendo-vue-ui/components/dateinputs/calendar/keyboard-navigation"></WrapperBanner></div>

# Keyboard Navigation

The keyboard support of the Calendar is always available.

The Calendar supports the following keyboard shortcuts:

| SHORTCUT | DESCRIPTION |
|:--- |:--- |
| `Alt`+`w` | Focuses the Calendar.|
| `Left Arrow` | Highlights the previous day.|
| `Right Arrow` | Highlights the next day.|
| `Up Arrow` | Highlights the same day from the previous week.|
| `Down Arrow` | Highlights the same day from the next week.|
| `Ctrl`+`Left Arrow` | Navigates to the previous month.|
| `Ctrl`+`Right Arrow` | Navigates to the next month.|
| `Ctrl`+`Up Arrow` | Navigates to the previous view.|
| `Ctrl`+`Down Arrow` | Navigates to the next view.|
| `Home` | Highlights the first day of the month.|
| `End` | Highlights the last day of the month.|
| `Enter` or `Space` | If in the `month` view, selects the highlighted day. In other views, navigates to lower view.|

When in multiple selection mode, the Calendar supports the following keyboard shortcuts:

SHORTCUT | DESCRIPTION |
|:--- |:--- |
| `Ctrl`+`Enter` or `Space` | Adds the highlighted day to the current selection. If that day was already selected, removes it from the selection.|
| `Shift`+`Left Arrow` or `Right Arrow` | Adds the next or the previous date to the selected items.|
| `Shift`+`Up Arrow` or `Down Arrow` | In the month view, extends the selection up or down one row.|
| `Shift`+`Space` | Performs range selection. Selects all dates between the last selected one (with `SPACE` or mouse click) and the one which holds the focused cell.|

{% meta height:350 %}
{% embed_file calendar/keyboard/main.vue preview %}
{% embed_file calendar/keyboard/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Calendar for jQuery](https://docs.telerik.com/kendo-ui/controls/scheduling/calendar/overview)
* [API Reference of the Calendar](https://docs.telerik.com/kendo-ui/api/javascript/ui/calendar)
