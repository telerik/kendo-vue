---
title: Add a tooltip to the Chart Legend items
description: An example on how you can add a tooltip for the Chart legend items
type: how-to
page_title: Add a tooltip for the Chart legend items - Kendo UI for Vue Native Chart
slug: chart-tooltip-legend
tags: chart, legend, tooltip
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

How to add a tooltip to the Chart legend items?

## Solution

This can be achieved by creating a custom function which renders the tooltip and it is later passed to the [`visual`](slug:api_charts_chartlegenditemprops#toc_visual) prop.

{% meta id:index height:400 %}
{% embed_file chart-tooltip-legend/main.vue preview %}
{% embed_file chart-tooltip-legend/main.js %}
{% endmeta %}