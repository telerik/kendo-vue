---
title: Filter the Kendo UI for Vue Native Grid's data using a comma separated values.
description: A a sample project that shows how to implement a custom row filter inside the Native Grid that allows data filtering using comma separated values. 
type: how-to
page_title: Filter the Native Grid using comma separated values | Kendo UI for Vue Native Grid
slug: grid-filtering-comma-separated-values
tags: grid, filter, filtering, row filter, comma separated, kendovue, native
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

The current KB article demonstrates how you can implement a custom row filter inside the Native Grid that filter's its data using comma separated values.


## Runnable example

To test the following example start adding values in the filter input of the `UnitsInStock` column. Ex: "`13,120,17`"

{% meta id:index height:600 %}
{% embed_file grid-filtering-comma-separated-values/main.vue preview %}
{% embed_file grid-filtering-comma-separated-values/main.js %}
{% embed_file grid-filtering-comma-separated-values/products.js %}
{% endmeta %}
