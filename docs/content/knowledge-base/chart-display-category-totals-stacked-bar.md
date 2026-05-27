---
title: Displaying Category-Level Totals Inside Kendo UI for Vue Stacked Bar Chart
description: Learn how to display category-level totals inside the chart area next to each bar in Kendo UI for Vue Stacked Bar Chart without compressing the plot area.
type: how-to
page_title: Show Totals Next to Bars in Kendo UI for Vue Stacked Bar Chart
slug: chart-display-category-totals-stacked-bar
tags: kendovue, chart, stacked-bar-chart, display-totals, labels
res_type: kb
ticketid: 1708621
---

## Environment

<table>
<tbody>
<tr>
<td> Product </td>
<td>
Progress® Kendo UI for Vue Native
</td>
</tr>
<tr>
<td> Version </td>
<td>
Current
</td>
</tr>
</tbody>
</table>

## Description

I want to display the sum of all stacked series for each category inside the chart area, positioned horizontally right next to each bar in a [Kendo UI for Vue Chart](slug:overview_charts), specifically a Stacked Bar Chart. The totals should appear next to the bars without shrinking or compressing the column width or the main plot area. Adding an additional series for totals should not affect the chart layout.

This knowledge base article also answers the following questions:

-   How to show totals for stacked series in Kendo UI for Vue Stacked Bar Chart?
-   How to position labels next to bars in Kendo UI for Vue Chart?
-   How to add a zero-value series to display totals?

## Solution

To achieve this behavior, add a series with zero values and use custom labels to display the totals. This approach ensures the layout remains unchanged while positioning the totals next to the bars.

{% meta height:460 %}
{% embed_file chart-display-category-totals-stacked-bar/main.vue preview %}
{% embed_file chart-display-category-totals-stacked-bar/main.js %}
{% endmeta %}

## See Also

-   [Kendo UI for Vue Chart Overview](slug:overview_charts)
-   [Kendo UI for Vue Bar Chart Documentation](slug:barcolumn_seriestypes_charts)
-   [Chart Series Labels](slug:labels_chart_charts)
