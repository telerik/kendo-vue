---
title: Drag and Drop Rows between Two Grids
description: An example of how to move records from one Kendo UI for Vue Native Grid to another.
type: how-to
page_title: Drag and Drop Rows between Two Grids - Kendo UI for Vue Native Grid
slug: grid-drag-and-drop-rows-between-two-grids
tags: grid, rows, drag, drop, reorder, kendovue
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

The current Knowledge base article shows how we can drag and drop rows between two Kendo UI for Vue Native Grids. 

## Solution

To define the Draggable functionality of the Grids' rows, the below slot template is defined and passed to the "Drag" field in each of the Grids.  

```js
<template v-slot:myTemplate="{props}">
    <custom  :data-item="props.dataItem"
            @dragover="reorder"
            @dragstart="setActive"
            @dragend="updateRemote"/>
</template>
```
Once the `reorder` function from the above template is triggered, it applies the changes in the states of the two Grids. 

For more information about the rows reordering in the Kendo UI for Vue Native Grid, you can check [this documentation article](slug:rowreorder_grid). 

### Runnable example
{% meta id:index height:580 %}
{% embed_file grid-drag-and-drop-rows-between-two-grids/main.vue preview %}
{% embed_file grid-drag-and-drop-rows-between-two-grids/CustomCell.vue %}
{% embed_file grid-drag-and-drop-rows-between-two-grids/main.js %}
{% embed_file shared/products.json %}
{% endmeta %}
