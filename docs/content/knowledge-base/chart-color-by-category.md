---
description: An example on how to set different colors per category for the ChartSeriesItem
type: how-to
page_title: Setting different colors per category for the ChartSeriesItem - Kendo UI for Vue Native Chart
slug: chart-color-by-category
tags: chart, chartseriesitem, customization, color
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
	    	<td>Progress® Kendo UI for Vue Native</td>
	    </tr>
    </tbody>
</table>

## Description

I want to have different colors per category value for the `ChartSeriesItem`

## Solution

The color property of the `ChartSeriesItem` accepts function where the dataItem is accessible. Using the category value we can create a random color per each category (or use predefined colors) and store it in an array or an object, so it can be re-used for other items with the same category.

### Runnable example

The following example showcases how to dynamically change the category colors:

{% meta height:600 %}
{% embed_file chart-color-by-category/main.vue preview %}
{% embed_file chart-color-by-category/main.js %}
{% embed_file chart-color-by-category/bubble-data.json %}
{% endmeta %}

