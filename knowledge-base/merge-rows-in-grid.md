---
title: Merge Rows in the Grid
description: An example on how to merge rows in the Kendo UI for Vue Native Grid.
type: how-to
page_title: Merge Rows in the Grid - Kendo UI for Vue Native Grid
slug: merge-row-in-the-grid
tags: grid, rows, merge, kendovue
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>2.3.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® Kendo UI for Vue Native</td>
	    </tr>
    </tbody>
</table>


## Description

How can I merge rows in the Kendo UI for Vue Native Grid?

## Solution

Use a [`cellRender`](slug:api_grid_gridprops#toc-cellrender) and add `rowSpan` to the cells that need it.

{% meta id:index height:760 %}
{% embed_file merge-rows-in-grid/main.vue preview %}
{% embed_file merge-rows-in-grid/main.js preview %}
{% embed_file shared/products.json %}
{% endmeta %}
