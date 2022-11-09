---
title: Style the filtered columns in the Kendo UI for Vue Native Grid.
description: A project demonstrating how to add a custom style that will visually differentiate the filtered Native Grid columns from the unfiltered ones.
type: how-to
page_title: See how you can apply a custom style to the filtered Grid columns and thus differentiate them from the unfiltered ones.
slug: grid-style-filtered-columns
tags: grid, style, filtered, column, custom, template, header, kendovue, native
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

This Knowledge Base(KB) article shows how you can apply a custom CSS style to the headers of the filtered columns inside the Native Grid. To achieve the desired scenario, the Grid columns are defined as a computed property as follows:
```js-no-run
columns: function () {
    const columns = [
        {
            field: 'ProductID',
            filterable: false,
            title: 'Product ID',
            width: '50px',
        },
        { field: 'ProductName', title: 'Product Name' },
        { field: 'FirstOrderedOn', filter: 'date', title: 'First Ordered On' },
        { field: 'UnitPrice', filter: 'numeric', title: 'Unit Price' },
        { field: 'Discontinued', filter: 'boolean', title: 'Discontinued' },
    ].map((col) => {
        return this.isFiltered(col)
            ? {
                ...col,
                headerClassName: 'filtered',
            }
            : col;
    });
    return columns;
}
```

The above definition adds the `filtered` CSS class to the header of the filtered columns, based on the result of the following `isFiltered` method:
```js-no-run
isFiltered(col) {
    const filters = this.filter ? this.filter.filters : [];
    return filters.findIndex((f) => f.field === col.field) >= 0;
}
```

The styles that will be applied to the Grid's header are defined in the following class:
```css
.filtered {
    background-color: red;
}
```

### Runnable example
{% meta height:480 %}
{% embed_file grid-style-filtered-columns/main.vue preview %}
{% embed_file grid-style-filtered-columns/products.js %}
{% embed_file grid-style-filtered-columns/main.js %}
{% endmeta %}
