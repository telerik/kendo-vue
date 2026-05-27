---
title: Make a reordered column locked when dropping it over a locked column
description: See how to automatically lock a given Grid column when reordering it among locked columns
type: how-to
page_title: Select Grid rows when Shift, Ctrl or Command(for Mac) buttons are pressed | Kendo UI for Vue Native Grid
slug: grid-reordering-locked-columns
tags: grid, reorder, locked column, columns, kendovue, native
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>3.10.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® Kendo UI for Vue Native</td>
	    </tr>
    </tbody>
</table>


## Description

This KB is an example that mimics the way the locked columns are internally handled by the Kendo UI for jQuery Grid. 

In the current scenario when we reorder a column and drop it over a locked column or on the left of a locked column, then the column that is being reordered is becoming also a locked column.


## Runnable example

To test the following example reorder one of the columns different from `Product Id` by moving it before the `Product Id` column. The result will be that the reordered column will also become locked. 

{% meta height: 600 %}
{% embed_file grid-reordering-locked-columns/main.vue preview %}
{% embed_file grid-reordering-locked-columns/main.js %}
{% embed_file grid-reordering-locked-columns/ColumnMenu.vue %}
{% embed_file grid-reordering-locked-columns/products.js %}
{% endmeta %}

