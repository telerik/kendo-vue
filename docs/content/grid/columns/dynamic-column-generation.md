---
title: Dynamic Columns Generation
page_title: Vue Grid - Dynamic Columns Generation - Kendo UI Native DataGrid
description: "Get started with the native Vue Grid by Kendo UI and learn how to dynamically generate columns"
slug: dynamic_columns_generation_grid
position: 80
---

# Dynamic Columns Generation

The Kendo UI for Vue Native Grid allows the user to dynamically update the columns inside the component. You can dynamically change the number of the Grid columns using a computed property that returns the new columns' definition:

```jsx-no-run
columns() {
    const columns = [
    {
        field: "id",
        width: "150px",
    },
    ];
    for (let c = 1; c < this.numberOfColumns; c++) {
    columns.push({
        field: "Field-" + c.toString(),
        width: "150px",
    });
    }
    return columns;
}
```
{% meta height:650 %}
{% embed_file columns/dynamic-column-generation/main.vue preview %}
{% embed_file columns/dynamic-column-generation/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Grid]({% slug api_grid_gridprops %})
* [API Index of the Grid]({% slug api_grid %})
