---
title: Cell Template
page_title: Vue Grid - Cell Template - Kendo UI Native DataGrid
description: "Get started with the Kendo UI for Vue Native Grid and render custom cells by using Vue components, the render function, or named slots."
slug: custom_cells_grid
position: 1
---

# Cell Template

The Kendo UI for Vue Native Grid enables you to customize the rendering of its cells.

## Getting Started

To implement a custom cell:

1. Use the [`cellRender`]({% slug api_grid_gridprops %}#toc-cellRender) prop that will customize all cells.
2. Set the[`cell`]({% slug api_grid_gridcolumnprops %}#toc-cell) option of the column to define a custom cell only for the particular column.

If you use both `cellRender` and `cell`, the Grid will render the specified custom column cell. To render the desired cell, you can assign a Vue component, a `render` function, or a named slot to both properties.

## Customization Approaches

To customize the cells in the Grid, apply any of the following approaches:

* [Using named slots](#toc-using-named-slots)
* [Using the `render` function](#toc-using-the-render-function)

### Using Named Slots

{% meta height:550 %}
{% embed_file custom-rendering/cells/slot/main.vue preview %}
{% embed_file custom-rendering/cells/slot/main.js %}
{% endmeta %}

### Using the render Function

The following example demonstrates how to customize the Grid cells by using a `render` function.  More details about the render function, you can find in [this Vue documentation article](https://v3.vuejs.org/guide/migration/render-function-api.html).

{% meta height:550 %}
{% embed_file custom-rendering/cells/function/main.vue preview %}
{% embed_file custom-rendering/cells/function/main.js %}
{% endmeta %}


## Suggested Links
* [Add Action Button with Popup to a Grid Row]({% slug grid-add-action-button-with-popup %})
* [Grid with Custom Template, Row Details and Grouping]({% slug grid-details-template-with-grouping %})
* [Merge Rows in Grid]({% slug merge-row-in-the-grid %})
* [Render HTML in the Grid]({% slug render-html-in-native-grid %})
* [API Reference of the Grid]({% slug api_grid_gridprops %})
* [API Index of the Grid]({% slug api_grid %})
