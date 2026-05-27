---
title: Customizing DatePicker to Render Months Instead of Days
description: Learn how to customize the Kendo UI for Vue DatePicker component to render months of each year and allow the selection of a month.
type: how-to
page_title: Month Selector Using Kendo UI for Vue DatePicker
meta_title: Month Selector Using Kendo UI for Vue DatePicker
slug: datepicker-months-selector
tags: kendo-vue, datepicker, months, customization
res_type: kb
ticketid: 1708259
---

## Environment

<table>
<tbody>
<tr>
<td> Product </td>
<td>Kendo UI for Vue DatePicker</td>
</tr>
<tr>
<td> Version </td>
<td>Current</td>
</tr>
</tbody>
</table>

## Description

I want to customize the [Kendo UI for Vue DatePicker]({% slug overview_datepicker %}) component to render only the months of each year. The goal is to allow users to select a month instead of a specific day in the calendar view.

This knowledge base article also answers the following questions:

-   How can I make the Kendo UI for Vue DatePicker show months instead of days?
-   How to implement a month picker using Kendo UI for Vue DatePicker?
-   What is the correct approach to customize the Kendo UI for Vue DatePicker for month selection?

## Solution

To customize the Kendo UI for Vue DatePicker component for rendering months instead of days, follow these steps:

1. Create a custom Calendar component to render months only.
2. Use the custom Calendar component within the DatePicker.

<demo metaUrl="knowledge-base/datepicker-months-selector/" height="430"></demo>

### Key Points

-   The `CustomCalendar` component replaces the standard calendar view with buttons representing months.
-   Use the `@change` event to update the selected month.
-   Attach the custom calendar component to the `calendar` prop of the DatePicker.

## See Also

-   [Kendo UI for Vue DatePicker Overview]({% slug overview_datepicker %})
-   [Kendo UI for Vue DatePicker API]({% slug api_dateinputs_datepickerprops %})


