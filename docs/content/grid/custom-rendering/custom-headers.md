---
title: Header Template
page_title: Vue Grid - Header Template - Kendo UI Native DataGrid
description: "Get started with the native Vue Grid by Kendo UI and render custom headers by using Vue components, the render function, or named slots."
slug: custom_headers_grid
position: 3
---

# Header Template

The Kendo UI for Vue Native Grid enables you to customize the rendering of its headers.

## Getting Started

To implement a custom header:

1. Use the [`headerCellRender`]({% slug api_grid_gridprops %}#toc-headerCellRender) prop that will customize all header cells.
2. Set the[`headerCell`]({% slug api_grid_gridcolumnprops %}#toc-headerCell) option of the column to define a custom header cell only for the particular column.

If you use both `headerCellRender` and `headerCell`, the Grid will render the specified custom header. To render the desired header, you can assign a Vue component, a `render` function, or a named slot to both properties.

## Customization Approaches

To customize the headers of the Grid, apply any of the following approaches:

* [Using named slots](#toc-using-named-slots)
* [Using the `render` function](#toc-using-the-render-function)

### Using Named Slots

The following example demonstrates how to customize the Grid headers by using named slots. For the complete example.

{% meta height:450 %}
{% embed_file custom-rendering/headers/slot/main.vue preview %}
{% embed_file custom-rendering/headers/slot/main.js %}
{% endmeta %}

### Using the render Function

The following example demonstrates how to customize the Grid headers by using a `render` function. More details about the render function, you can find in [this Vue documentation article](https://v3.vuejs.org/guide/migration/render-function-api.html).

{% meta height:550 %}
{% embed_file custom-rendering/headers/function/main.vue preview %}
{% embed_file custom-rendering/headers/function/main.js %}
{% endmeta %}


## Suggested Links

* [Edit Grid's Header on Double Click]({% slug grid-edit-column-headers-on-double-click %})
* [API Reference of the Grid]({% slug api_grid_gridprops %})
* [API Index of the Grid]({% slug api_grid %})
