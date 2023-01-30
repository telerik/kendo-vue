---
title: Add Multiple Rows to the Native Grid's Footer and Display Aggregates and Custom Data
description: An example demonstrating how to display multiple footer rows in the Kendo UI for Vue Native Grid and display different custom data-like aggregates.  
type: how-to
page_title: Add a Multi-Row Footer with Custom Data in the Native Grid - Kendo UI for Vue Native Grid
slug: grid-add-multi-row-footer
tags: grid, footer, custom footer, multirow, multiple, rows, aggregates,custom data, kendovue, native
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>3.3.2</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® Kendo UI for Vue Native</td>
	    </tr>
    </tbody>
</table>


## Description

This Knowledge base article shows how you can add a multi-row footer to the Native `Grid` and display custom data(like aggregates or other) in each of the rows.

**KB sections**

* [Solution description](#toc-solution-description)
* [Runnable example](#toc-runnable-example)

## Solution description

The below solution uses the [footerCell](slug:api_grid_gridcolumnprops#toc-footercell) property of the Native Grid's column. By passing custom slot templates with similar structures to the `footerCell` props of each column, we can create a multi-row footer for the whole Grid component.  

To achieve the targeted functionality we have the following templates for the footers of each of the three columns in our Grid:

**Footer template of the Product ID column**
```js
<template v-slot:footerTemplate1="{ props }">
	<div>
	<div class="first-footer-row">
		<span>&nbsp;</span>
	</div>
	<div class="second-footer-row">
		<span>&nbsp;</span>
	</div>
	<div style="padding: 2px">
		<span>&nbsp;</span>
	</div>
	</div>
</template>
```
**Footer template of the Product Name column**
```js
<template v-slot:footerTemplate2="{ props }">
	<div>
	<div class="first-footer-row">
		<span>Custom Footer Row 1</span>
	</div>
	<div class="second-footer-row">
		<span @click="customHandler">Custom Footer Row 2</span>
	</div>
	<div style="padding: 2px">
		<span @click="customHandler">Column field: {{ props.field }}</span>
	</div>
	</div>
</template>
```
**Footer template of the Unit Price column**
```js
<template v-slot:footerTemplate3="{ props }">
	<div>
	<div class="first-footer-row">
		<span>The sum</span>
	</div>
	<div class="second-footer-row">
		<span>of the above rows is:</span>
	</div>
	<div style="padding: 2px">
		<span @click="customHandler"> {{ unitPriceSum }} </span>
	</div>
	</div>
</template>
```
Each of the above templates are passed to the columns configuration of the Grid though the following object:
```js
columns: [
  { field: 'ProductID', footerCell: 'footerTemplate1' },
  {
    field: 'ProductName',
    title: 'Product Name',
    footerCell: 'footerTemplate2',
  },
  {
    field: 'UnitPrice',
    title: 'Unit Price',
    footerCell: 'footerTemplate3',
  },
],
```

### Runnable example
{% meta id:index height:400 %}
{% embed_file grid-add-multi-row-footer/main.vue preview %}
{% embed_file grid-add-multi-row-footer/main.js %}
{% endmeta %}
