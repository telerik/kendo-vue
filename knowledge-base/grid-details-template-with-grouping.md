---
title: Add a Native Grid with a Custom Template, Row Details, and Grouping
description: An example on how to combine grouping, row details, and custom templates in the Kendo UI for Vue Native Grid.
type: how-to
page_title: Add a Grid with Grouping, Row Details, and Custom Template - Kendo UI for Vue Native Grid
slug: grid-details-template-with-grouping
tags: grid, details, custom, template, group, grouping, kendovue
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>2.4.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® Kendo UI for Vue Native</td>
	    </tr>
    </tbody>
</table>


## Description

This Knowledge base article demonstrates how the Grouping, row Details and custom template functionality of the Native Grid can be combined.

## Solution

The Details template of the Grid can be defined with the [`detail`](slug:api_grid_gridprops#toc-detail) property. The template passed to this property in the below example is defined as follows:  

``` js
<template v-slot:cellDetailTemplate="{props}">
		<section>
			<p><strong>Descriptions:</strong> {{props.dataItem.ProductName}}</p>
		</section>
</template>
```

The custom template in which the Grouping functionality is implemented is passed to the Grid through its [`cellRender`](slug:api_grid_gridprops#toc-cellrender) property. The slot template passed to the `cellRender` is the following one:

``` js
<template v-slot:myTemplate="{props}">
	<custom :field="props.field"
			:expanded="props.expanded"
			:row-type="props.rowType"
			:level="props.level"
			:column-index="props.columnIndex"
			:columns-count="props.columnsCount"
			:data-item="props.dataItem"
			:class-name="props.className"
			@click="clickHandler(props.dataItem)" />
</template>
```

### Runnable example
{% meta id:index height:600 %}
{% embed_file grid-details-template-with-grouping/main.vue preview %}
{% embed_file grid-details-template-with-grouping/CustomCell.vue %}
{% embed_file grid-details-template-with-grouping/main.js %}
{% endmeta %}
