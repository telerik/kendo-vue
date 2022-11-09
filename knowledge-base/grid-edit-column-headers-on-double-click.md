---
title: Edit the Grid's Header on Double-Click
description: An example demonstrating how to edit the headers of the kendo UI for Vue Native Grid on double-click.  
type: how-to
page_title: Edit Native Grid's Headers on Double-Click - Kendo UI for Vue Native Grid
slug: grid-edit-column-headers-on-double-click
tags: grid, data grid, column header, edit, double click, kendovue, native
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

The below example implements a logic that allows you to edit the column headers of the Native Grid when double-clicking on each of them.

**KB sections**

* [Solution description](#toc-solution-description)
* [Runnable example](#toc-runnable-example)

## Solution description

To be able to edit the Grid's headers on the fly, we have to use the [headerCell](slug:api_grid_gridcolumnprops#toc-headercell) property of the `Native Grid's` columns and define a custom header for each column. The below example uses the following template that is passed to the `headerCell` prop of all column. 

```js
<template v-slot:headerTemplate="{ props }">
    <span
    v-if="!getColumnItem(props).headerInEdit"
    @dblclick="(e) => customHandler(e, props)"
    >{{ props.title }}</span
    >
    <span v-else
    ><k-input
        @blur="onBlur(props)"
        @input="(e) => onInput(e, props)"
        type="text"
        :value="props.title"
    /></span>
</template>
```
With the above, the default behavior of the header will be to show the current value of its title(defined in the `columns` array). Then if we double-click on a random header, it will enter in **edit** mode by which you can change the `title` value.


### Runnable example
{% meta id:index height:460 %}
{% embed_file grid-edit-column-headers-on-double-click/main.vue preview %}
{% embed_file grid-edit-column-headers-on-double-click/main.js %}
{% endmeta %}
