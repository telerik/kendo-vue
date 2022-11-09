---
title: Add Styles to Dragged Rows in the Native Grid
description: An example on how to style the currently dragged row when reordering rows in the Kendo UI for Vue Native Grid.
type: how-to
page_title: Style the Dragged Row - Kendo UI for Vue Native Grid
slug: grid-style-dragged-row-on-row-reorder
tags: grid, rows, reorder, drag, kendovue, style
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

The current Knowledge base article demonstrates how we can add style to the row that is currently dragged inside the Native Grid component. With this styling, the users can easily identify which row is currently dragged and which will be its position when dropped. 

## Solution

To add style to the currently dragged row inside the Native Grid, we can use its built-in style for `selected` field. To use this functionality, in the setActive method in the example we set the `selected` field of the currently active row to `true`.

```js
setActive(dataItem) {
	this.activeItem = dataItem;
	this.activeItem.selected = true;
}
```

To reset the style of a row, once it is dropped, the below code is used.
```js
this.items  =  this.items.map(i => {
    i.selected = undefined;
    return i;
})
``` 

### Runnable example
{% meta id:index height:480 %}
{% embed_file grid-style-dragged-row-on-row-reorder/main.vue preview %}
{% embed_file grid-style-dragged-row-on-row-reorder/CustomCell.vue %}
{% embed_file grid-style-dragged-row-on-row-reorder/main.js %}
{% embed_file shared/products.json %}
{% endmeta %}
