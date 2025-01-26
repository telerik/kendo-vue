---
title: monthProps API
description: "API Index | monthProps"
api_reference: true
slug: api_calendar_monthprops_wrapper
---

# MonthProps

### month-content `String`

The template which will be used by the Calendar for rendering the cells in the min-max range in the `month` view. By default, the Calendar renders the value of the corresponding day.

### month-week-number `String`

The template which will be used by the Calendar for rendering the cells in the week column. By default, the Calendar renders the calculated week of the year.

The supported properties in the `data` object are:

* `currentDate`&mdash;Returns the first date of the current week.
* `weekNumber`&mdash;The calculated week number.

You can use the `currentDate` and `weekNumber` properties in the template to make additional calculations.

### month-empty `String`

The template that will be used by the Calendar for rendering the cells outside the min-max range in the `month` view. By default, the Calendar renders an empty string.

## Suggested Links

* [`Month` in Kendo UI Calendar for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/calendar/configuration/month)
