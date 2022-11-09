---
title: Customize the template/content of a locked Native Grid column using a cell template.
description: A project demonstrating how we can customize the content of a locked Native Grid column by defining a custom cell template.
type: how-to
page_title: Learn how to implement a locked column with a custom cell template inside the Native Grid
slug: grid-locked-column-with-custom-template
tags: grid, locked, column, custom, template, cell, kendovue, native
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>3.6.3</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® Kendo UI for Vue Native</td>
	    </tr>
    </tbody>
</table>


## Description

This Knowledge base(KB) article demonstrates how we can customize the template of a specific `locked` Native Grid column by defining a `custom cell template`. 


**KB sections**

* [Solution description](#toc-solution-description)
* [Runnable example](#toc-runnable-example)

## Solution description

The current example demonstrates how we can **bold** the content of the `ProductID` and `Discontinued` columns in the Kendo UI for Vue Native Grid. Both the `ProductID` and `Discontinued` columns are defined as locked and to be able to customize their content, we need to use a template as follows:

```js-no-run
<template v-slot:myLockedCell="{ props }">
  <td
    :colspan="props.colspan"
    :class="props.class"
    :role="props.role"
    :data-grid-col-index="props['data-grid-col-index']"
    :aria-selected="props['aria-selected']"
  >
    <b>{{ props.dataItem[props.field] }}</b>
  </td>
</template>
```

Once we have the above template defined, what we need to do is to pass its name(`myLockedCell`) to the [cell]({% slug api_grid_gridcolumnprops %}#toc-cell) column property. To do this, we are using the following definition:
```js-no-run
columns: [
  {
    field: 'ProductID',
    title: 'ID',
    width: '45px',
    cell: 'myLockedCell',
    locked: true,
  },
  .........
```

### Runnable example
{% meta id:index height:480 %}
{% embed_file grid-locked-column-with-custom-template/main.vue preview %}
{% embed_file grid-locked-column-with-custom-template/products.js %}
{% embed_file grid-locked-column-with-custom-template/main.js %}
{% endmeta %}
