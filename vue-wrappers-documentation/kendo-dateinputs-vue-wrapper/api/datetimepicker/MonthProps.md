---
title: monthProps API
description: "API Index | monthProps"
api_reference: true
slug: api_datetimepicker_monthprops_wrapper
---

# MonthProps

### month-content `String`

The template that will be used by the DateTimePicker for rendering the cells in the min-max range in the `month` view.

### month-week-number `String`

The template which will be used by the DateTimePicker for rendering the cells in the week column. By default, the DateTimePicker renders the calculated week of the year.

The supported properties in the `data` object are:

* `currentDate`&mdash;Returns the first date of the current week.
* `weekNumber`&mdash;The calculated week number.

You can use the `currentDate` and `weekNumber` properties in the template to make additional calculations.

### month-empty `String`

The template that will be used by the DateTimePicker for rendering the cells outside the min-max range in the `month` view.

## Suggested Links

* [`Month` in Kendo UI Calendar for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datetimepicker/configuration/month)
