---
title: Week Number Column
page_title: Week Number Column - Calendar - Kendo UI for Vue
description: "Render a column displaying the number of the weeks within the current month view when working with the Kendo UI Calendar in Vue projects."
slug: weeknumbercolumn_calendar_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dateinputs/calendar/weeks-numbers/"
position: 5
---

<div><WrapperBanner link="/kendo-vue-ui/components/dateinputs/calendar/weeks-numbers"></WrapperBanner></div>

# Week Number Column

In the Calendar, you can [render a column which displays the number of the weeks](#toc-rendering-week-numbers) within the current `month` view and use the week number template to [customize the cells in the **Week** column](#toc-customizing-column-cells).

## Rendering Week Numbers

The [`weekNumber`](https://docs.telerik.com/kendo-ui/api/javascript/ui/calendar#configuration-weekNumber) option enables you to display the week number on an annual base to the left side of the `month` view and as a separate column.

```html-no-run
<kendo-calendar :week-number="true"></kendo-calendar>
```

## Customizing Column Cells

To customize the week column cells, use the week number template. By default, the Calendar renders the calculated week of the year.

You can use the following available properties in the `data` object within the template to make additional calculations:
* `currentDate`&mdash;Returns the first date of the current week.
* `weekNumber`&mdash;The calculated week number.

## Suggested Links

* [Kendo UI Calendar for jQuery](https://docs.telerik.com/kendo-ui/controls/scheduling/calendar/overview)
* [API Reference of the Calendar](https://docs.telerik.com/kendo-ui/api/javascript/ui/calendar)
