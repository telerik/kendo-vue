---
title: Selection
page_title: Selection - Calendar - Kendo UI for Vue
description: "Enable the user to select a month or multiple elements when working with the Kendo UI Calendar wrapper for Vue."
slug: multipleselection_calendar_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dateinputs/calendar/"
position: 6
---


<div><WrapperBanner link="/kendo-vue-ui/components/dateinputs/calendar"></WrapperBanner></div>

# Selection

The Calendar enables you to implement month and multiple selections.

## Month Selection

The Calendar allows the user to select a month.

```html-no-run
<kendo-calendar start="year" depth="year"></kendo-calendar>
```

## Multiple Selection

The available multiple-selection modes are available:

* Multiple selection&mdash;Implemented through the `Ctrl` key while selecting dates.
* Range selection&mdash;Implemented through the `Shift` key while selecting date ranges.
* Week selection&mdash;Represents range selection for a specific week.

The `Ctrl` key allows the user to perform multiple selection:
* `Ctrl`+ mouse click&mdash;Marks a specific date as selected. Previously selected dates remain selected as well.
* Selecting a date from a specific view without using the `Ctrl` key deselects all previously selected dates (including previously selected dates from other views or months) and selects the date of the clicked cell.
* Selecting a date that is already selected while holding the `Ctrl` key removes the date from the selection.

The `Shift` key allows the user to select a range of dates in the same month or between different months:
* `Shift`+ mouse click&mdash;Selects all dates between the last selected one (with `SPACE` or mouse click) and the clicked cell.
* `Shift`+ mouse click&mdash;When no previous selection was made, selects all dates from the beginning to the clicked cell.

When the user clicks a specific week number, the Calendar selects the entire week. This feature is a special case of range selection which starts from the first day of the week and selects all dates to the end of the week.

The following example demonstrates the new key combinations which are introduced by the multiple selection functionality.

{% meta height:350 %}
{% embed_file calendar/selection/main.vue preview %}
{% embed_file calendar/selection/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Calendar for jQuery](https://docs.telerik.com/kendo-ui/controls/scheduling/calendar/overview)
* [API Reference of the Calendar](https://docs.telerik.com/kendo-ui/api/javascript/ui/calendar)
