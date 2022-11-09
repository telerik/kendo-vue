---
title: Define a Grid Custom Cell Template with Grouping and Selection
description: An example on how to define a custom cell template that keeps the grouping and rows' selection functionality in the Kendo UI for Vue Native Grid.
type: how-to
page_title: Implement a Grid Cell Template with Grouping and Selection - Kendo UI for Vue Native Grid
slug: grid-custom-cell-grouping-and-selection
tags: grid, rows, group, selection, kendovue
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>3.0.1</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® Kendo UI for Vue Native</td>
	    </tr>
    </tbody>
</table>


## Description

The below example demonstrates how we can keep the Grouping and Select functionality of the Grid while using a custom cell template inside the Kendo UI for Vue Native Grid 

## Solution

To define a custom template, use the Use a [`cellRender`](slug:api_grid_gridprops#toc-cellrender) prop of the Native Grid. Initialize the `CustomCell` component inside the slot template that is passed to the `cellRender` as demonstrated below:

```js
<template v-slot:myTemplate="{props}">
    <custom :field="props.field"
            :expanded="props.expanded"
            :row-type="props.rowType"
            :level="props.level"
            :column-index="props.columnIndex"
            :columns-count="props.columnsCount"
            :data-item="props.dataItem"
            :class-name="props.className"
            @selectionchange="selectionChange"
            @click="clickHandler(props.dataItem)" />
</template>
```

### Runnable example
{% meta id:index height:580 %}
{% embed_file grid-custom-cell-grouping-and-selection/main.vue preview %}
{% embed_file grid-custom-cell-grouping-and-selection/CustomCell.vue %}
{% embed_file grid-custom-cell-grouping-and-selection/main.js %}
{% embed_file shared/products.json %}
{% endmeta %}
