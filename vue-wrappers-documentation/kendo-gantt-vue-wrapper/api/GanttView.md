---
title: GanttView API
description: "API Index | GanttView"
api_reference: true
slug: api_ganttviewcomponent
---

# GanttView

## Directive

`kendo-gantt-view`

## Parent Components

* [`kendo-gantt`]({% slug api_ganttcomponent %})

## Props

### date `Date`

If `date` is set to a date and the date is within the start-end range of the selected view, the timeline of the currently selected view will be scrolled to the start from this date. Overrides the `date` option of the Gantt.

### range-start `Date`

If `range-start` is set to a date, the timeline of the view will start from this date. Overrides the `range.start` option of the Gantt.

### range-end `Date`

If `range-end` is set to a date, the timeline of the view will end on this date. Overrides the `range.end` option of the Gantt.

### type `String`

The type of the view.

The built-in views are:

* `day`
* `week`
* `month`
* `year`

### selected `Boolean`

If `selected` is set to `true`, the view will be initially selected by the Gantt. The default selected view is `day`.

### slot-size `Number | String`

The size of the time-slot headers. Values are treated as pixels.

### time-header-template `String | Function`

The template for rendering the time slots in the **Day** view.

### day-header-template `String | Function`

The template for rendering the day slots in **Day** and **Week** views.

### week-header-template `String | Function`

The template for rendering the week slots in **Week** and **Month** views.

### month-header-template `String | Function`

The template for rendering the month slots in **Month** and **Year** views.

### year-header-template `String | Function`

The template for rendering the year slots in **Year** view.

### resize-tooltip-format `String`

The format for displaying the start and end dates in the resize tooltip.

## Suggested Links

* [`Views` in Kendo UI Gantt for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/configuration/views)
