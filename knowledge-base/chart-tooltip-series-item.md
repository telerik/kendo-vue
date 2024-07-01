---
title: Add a tooltip to the Chart series items
description: An example on how you can add a tooltip for the Chart series items
type: how-to
page_title: Add a tooltip for the Chart series items - Kendo UI for Vue Native Chart
slug: chart-tooltip-series-item
tags: chart, series, tooltip
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>4.3.1</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® Kendo UI for Vue Native</td>
	    </tr>
    </tbody>
</table>


## Description

How to add a tooltip to the Chart labels on the y-axis?

## Solution

This can be achieved by passing a custom template to the [`tooltip`](slug:api_charts_chartlegenditemprops#toc_tooltip) prop.

{% meta id:index height:400 %}
{% embed_file chart-tooltip-series-item/main.vue preview %}
{% embed_file chart-tooltip-series-item/main.js %}
{% endmeta %}