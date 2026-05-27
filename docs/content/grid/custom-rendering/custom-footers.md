---
title: Footer Template
page_title: Vue Grid - Footer Template - Kendo UI Native DataGrid
description: "Get started with the Kendo UI for Vue Native Grid and render custom footers by using Vue components, the render function, or named slots."
slug: custom_footers_grid
position: 4
---

# Footer Template

The Kendo UI for Vue Native Grid enables you to customize the rendering of its footers.

## Getting Started
To implement a custom footer set the [`footerCell`]({% slug api_grid_gridcolumnprops %}#footerCell) option of the column to define a custom footer cell only for the particular column. The Grid renders a single footer cell under each column that has its `footerCell` property set. That cell will appear at the bottom of the column and will be always visible regardless of the vertical scrolling of the Grid. One can also set the [`footerClassName`]({% slug api_grid_gridcolumnprops %}#footerClassName) to set a custom class to the footer cell.

To render the desired footer, you can assign a Vue component, a `render` function, or a named slot to both properties.

## Customization Approaches

To customize the footer of the Grid, apply any of the following approaches:

* [Using named slots](#using-named-slots)
* [Using the `render` function](#using-the-render-function)

### Using Named Slots

The following example demonstrates how to customize the Grid headers by using named slots.

{% meta height:400 %}
{% embed_file custom-rendering/footer/slot/main.vue preview %}
{% embed_file custom-rendering/footer/slot/main.js %}
{% endmeta %}

### Using the render Function

The following example demonstrates how to customize the Grid headers by using a `render` function. More details about the render function, you can find in [this Vue documentation article](https://v3.vuejs.org/guide/migration/render-function-api.html).

{% meta height:400 %}
{% embed_file custom-rendering/footer/function/main.vue preview %}
{% embed_file custom-rendering/footer/function/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Grid]({% slug api_grid_gridprops %})
* [API Index of the Grid]({% slug api_grid %})
* [Add Multi-row Footer to the Grid ]({% slug grid-add-multi-row-footer %})
