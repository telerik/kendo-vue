---
title: Display and Edit Multiple Data Item Fields in a Single Native Grid Cell  
description: An example on how to display and edit multiple data item fields in one Kendo UI for Vue Native Grid cell.  
type: how-to
page_title: Show and Edit Multiple Data Item Fields in One Grid Cell - Kendo UI for Vue Native Grid
slug: grid-display-and-edit-multiple-dataitem-fields-in-one-cell
tags: grid, custom cell, show, display, edit, multiple fields, single cell, kendovue, native
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

The current Knowledge base article demonstrates how you can display multiple data item fields data in a single Kendo UI for Vue Native `Grid` cell.  


**KB sections**

* [Solution description](#toc-solution-description)
* [Runnable example](#toc-runnable-example)

## Solution description

The below solution uses the [cell](slug:api_grid_gridcolumnprops#toc-cell) property of the Native Grid's column. Through this property, we can customize the way the selected cell looks. 

To display the `Status`, `Public`, and `Hide` fields available in the data item of each Grid row, the example uses the `StatusCell` custom component. What the custom component does is ensure the displaying of more than one data item in the "Status" field of the Grid. 


### Runnable example
{% meta id:index height:500 %}
{% embed_file grid-display-and-edit-multiple-dataitem-fields-in-one-cell/main.vue preview %}
{% embed_file grid-display-and-edit-multiple-dataitem-fields-in-one-cell/main.js %}
{% embed_file grid-display-and-edit-multiple-dataitem-fields-in-one-cell/CommandCell.vue %}
{% embed_file grid-display-and-edit-multiple-dataitem-fields-in-one-cell/StatusCell.vue %}
{% endmeta %}
