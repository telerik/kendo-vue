---
title: SchedulerView API
description: "API Index | SchedulerView"
api_reference: true
slug: api_schedulerviewcomponent_wrapper
---

# SchedulerView

## Directive

`kendo-scheduler-view`

## Props

### all-day-event-template `String | Function`

The template for rendering **All day** events.

The template supports the following fields:

* `description` (String)&mdash;The description of the event.
* `end` (Date)&mdash;The date of the event.
* `resources` (Array)&mdash;The resources of the event.
* `start` (Date)&mdash;The start date of the event.
* `title` (String)&mdash;The title of the event.

### all-day-slot `Boolean`

If `all-day-slot` is set to `true`, the Scheduler will display a slot for the **All day** events.

### all-day-slot-template `String | Function`

The template for rendering the **All day** slot cell.

The template supports the following fields:

* `date`&mdash;Represents the slot date.
* `resources()`&mdash;Returns the relevant resources for the current slot.

### column-width `Number`

The width (in pixels) of the table columns in the timeline views.

### date-header-template `String | Function`

The template for rendering the header cells of the date. By default, the Scheduler renders the date by using a custom `ddd M/dd` format. The `ddd` specifier represents the abbreviated name of the week day and will be localized based on the current Kendo UI culture. To control the order of the days and months, define a custom template. The template supports the `date` field which represents the major tick date.

### day-template `String | Function`

The template for rendering the day slots in the **Month** view.

The template supports the following fields:

* `date`&mdash;Represents the slot date.
* `resources()`&mdash;Returns the relevant resources for the current slot.

### editable `Boolean`

If `editable` is set to `true`, the user will be able to create new Scheduler events and modify or delete the existing ones. Overrides the `editable` option of the Scheduler.

### editable-create `Boolean`

If `editable-create` is set to `true`, the user can create new events. By default, `editable-create` is enabled.

### editable-destroy `Boolean`

If `editable-destroy` is set to `true`, the user can delete events from the view by clicking the **Destroy** button. By default, `editable-destroy` is enabled.

### editable-update `Boolean`

If `editable-update` is set to `true`, the user can update events. By default, `editable-update` is enabled.

### end-time `Date`

The end time of the view. The Scheduler displays events which end before the `endTime`.

### event-height `Number`

The height of the Scheduler event that is rendered in the **Month** and **Timeline** views.

### event-template `String | Function`

The template which is used by the view for rendering the events of the Scheduler.

The template supports the following fields:

* `description` (String)&mdash;The description of the event.
* `end` (Date)&mdash;The date of the event.
* `resources` (Array)&mdash;The resources of the event.
* `start` (Date)&mdash;The start date of the event.
* `title` (String)&mdash;The title of the event.

### event-time-template `String | Function`

The template which is used by the **Agenda** view for rendering the time of the Scheduler events.

The template supports the following fields:

* `description` (String)&mdash;The description of the event.
* `end` (Date)&mdash;The date of the event.
* `isAllDay` (Boolean)&mdash;If set to `true`, the event is an all-day event.
* `resources` (Array)&mdash;The resources of the event.
* `start` (Date)&mdash;The start date of the event.
* `title` (String)&mdash;The title of the event.

### group-date `Boolean`

If `group-date` is set to `true` and `group.resources` contains set resources, the view is grouped by date. Overrides the `date` option of the Scheduler.

### group-orientation `String`

The orientation of the group headers.

The supported values are:

* `horizontal`
* `vertical`

> The **Agenda** view is always in vertical orientation.

### major-tick `Number`

The number of minutes which are represented by a major tick.

### major-time-header-template `String | Function`

The template for rendering the major ticks. By default, the Scheduler renders the time based on the current culture time format. The template supports the `date` field which represents the major tick date.

### minor-tick-count `Number`

The number of the time slots that will be displayed per major tick.

### minor-time-header-template `String | Function`

The template for rendering the minor ticks. By default, the Scheduler renders a `&nbsp;`. The template supports the `date` field which represents the major tick date.

### name `String`

The name of the view. Typically, used to get the name of the currently selected view through the `view` method.

### selected `Boolean`

If `selected` is set to `true`, the view will be initially selected by the Scheduler.

### selected-date-format `String`

The format for displaying the selected date. Uses `kendo.format`.

The supported placeholders are:

* `{0}`&mdash;Represents the start date displayed by the view.
* `{1}`&mdash;Represents the end date displayed by the view.

### selected-short-date-format `String`

The format for displaying the selected date when the viewport is narrow. By default, the date is displayed in the short (`d`) format. Uses `kendo.format`.

### show-work-hours `Boolean`

If `show-work-hours` is set to `true`, the view will be initially shown in the business-hour mode. By default, the view is displayed in the full-day mode.

### slot-template `String | Function`

The template for rendering the cells of the time slot.

The template supports the following fields:

* `date`&mdash;Represents the slot date and time.
* `resources()`&mdash;Returns the relevant resources for the current slot.

### start-time `Date`

The start time of the view. The Scheduler will display events which start after the `startTime` value.

### title `String`

The user-friendly title of the view which is displayed by the Scheduler.

### type `String`

The type of the view.

The supported built-in views are:

* `day`
* `week`
* `workWeek`
* `month`
* `agenda`
* `timeline`
* `timelineWeek`
* `timelineWorkWeek`
* `timelineMonth`

### virtual `Boolean`

Enables the DOM virtualization for vertical grouping of the view - renders batches of DOM elements as you scroll. The views that support this option are: "day", "week", "workWeek", "month".

### work-week-start `Number`

The start of working week (index-based).

### work-week-end `Number`

The end of working week (index-based).

## Suggested Links

* [`Views` in Kendo UI Scheduler for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/configuration/views)
