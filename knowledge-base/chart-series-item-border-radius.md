---
title: Add border-radius to the Chart's Series items
description: An example on how you can add border-radius to the Chart's series items
page_title: Add border-radius to Chart's Series - Kendo UI for Vue Native Chart
slug: chart-series-item-border-radius
tags: chart,series items, series, border-radius
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>4.1.1</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® Kendo UI for Vue Native</td>
	    </tr>
    </tbody>
</table>

## Description

How to add border-radius to the Chart's series items?

## Solution

This can be achieved by creating a custom function which modifies the border and is later passed to the  [`visual`](slug:api_charts_chartseriesdefaultsprops#toc_visual) prop. 

{% meta id:index height:400 %}
{% embed_file chart-series-item-border-radius/main.vue preview %}
{% embed_file chart-series-item-border-radius/main.js%}
{% embed_file chart-series-item-border-radius/waterfall-data.json %}
{% endmeta %}

