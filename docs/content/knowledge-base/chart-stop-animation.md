---
title: Disable Chart Animations
description: An example on how to disable the animations of the Kendo UI for Vue Chart.
type: how-to
page_title: Prevent Chart Animations - Kendo UI for Vue Chart
slug: chart-stop-animation
tags: kendovue, chart, animation
ticketid: 1410594
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>7.0.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® Kendo UI for Vue Chart</td>
	    </tr>
    </tbody>
</table>

## Description

I’m updating the data in a Kendo UI for Vue Chart dynamically, but the chart animations create a poor user experience. How can I disable the animations?

## Solution

Use the [`transitions`]({% slug api_charts_chartprops %}#toc-transitions) property of the Chart.

The following example demonstrates this approach in action:

{% meta height:600 %}
{% embed_file chart-stop-animation/main.vue preview %}
{% embed_file chart-stop-animation/main.js %}
{% endmeta %}

## See Also

- [Kendo UI for Vue Charts Documentation]({% slug overview_charts %})
- [Chart SeriesItem Component]({% slug api_charts_chartseriesitemprops %})
- [Handling Events in Kendo UI for Vue Charts]({% slug charts_events %})
