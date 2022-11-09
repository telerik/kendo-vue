---
title: Display HTML in the Native Grid
description: An example of how to render HTML in the Kendo UI for Vue Native Grid.
type: how-to
page_title: Render HTML in the Grid - Kendo UI for Vue Native Grid
slug: render-html-in-native-grid
tags: grid, render, html, style
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>2.4.2</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® Kendo UI for Vue Native</td>
	    </tr>
    </tbody>
</table>


## Description

How can I render HTML inside the Kendo UI for Vue Native Grid?

## Solution

Define a custom template for the Grid column that should display rendered HTML. Pass the custom template to the selected column using the cell [`cell`](slug:api_grid_gridcolumnprops#toc-cell) column property. Define the custom template as follows:

``` js
<template v-slot:myTemplate="{props, listeners}">
    <td :class="props.className" v-html="getNestedValue(props.field, props.dataItem)"></td>
</template>
```

Add apply the template to the selected column with the following definition:

``` js
{ field: 'ProductName', title: 'Product Name', cell: 'myTemplate' }
```

{% meta id:index height:360 %}
{% embed_file render-html-in-native-grid/main.vue preview %}
{% embed_file render-html-in-native-grid/main.js preview %}
{% endmeta %}
