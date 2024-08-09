---
title: Add an Popup Action Button to a Grid Row
description: An example on how to add a custom Action button that controls the state of the Kendo UI for Vue Native Grid.
type: how-to
page_title: Add an Action Button to a Grid Row - Kendo UI for Vue Native Grid
slug: grid-add-action-button-with-popup
tags: grid, action, button, popup, kendovue, row, style, color
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

This Knowledge base article shows how we can add an action button to the rows of the Native Grid component. Using this action button, we can control the data state of the Grid or change the look of the component.  

## Solution

The way we define the action button in the Grid column is through the [`cell`](slug:api_grid_gridcolumnprops#toc-cell) column property. The custom template passed to this property is defined as follows:

``` js
<template v-slot:myTemplate="{props}">
	<custom :data-item="props.dataItem" 
		@actionselect="actionSelected"
		/>
</template>
```
You can see the definition of the `custom` component in the `ActionCell.vue` file in the example below.

### Runnable example
{% meta id:index height:560 %}
{% embed_file grid-add-action-button-with-popup/main.vue preview %}
{% embed_file grid-add-action-button-with-popup/ActionCell.vue %}
{% embed_file grid-add-action-button-with-popup/main.js %}
{% endmeta %}
