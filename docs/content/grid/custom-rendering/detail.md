---
title: Detail-Row Template
page_title: Vue Grid - Detail-Row Template - Kendo UI Native DataGrid
description: "Get started with the detail rows feature of the native Vue Grid by Kendo UI and see how to provide additional details about rows by expanding and collapsing content."
slug: detailrow_grid
position: 5
---

# Detail-Row Template

The detail rows of the native Vue Grid by Kendo UI enable you to provide additional details about a particular row of table data through expanding or collapsing its content.

To define the detail rows:

1. Set the [`detail`]({% slug api_grid_gridprops %}#toc-detail) property of the Grid to a component, a render function, or a slot.
1. Define the [`expandField`]({% slug api_grid_gridprops %}#toc-expandfield) property to a field that will correspond to the expanded state of the item.

{% meta height:440 %}
{% embed_file custom-rendering/detail/main.vue preview %}
{% embed_file custom-rendering/detail/main.js %}
{% embed_file custom-rendering/detail/DetailComponent.vue %}
{% embed_file custom-rendering/detail/products.js %}
{% endmeta %}


Alternatively, you can define the detail rows using the `render` function or named slots.

## Suggested Links

* [Grid with Custom Template, Row Details and Grouping]({% slug grid-details-template-with-grouping %})
* [API Reference of the Grid]({% slug api_grid_gridprops %})
* [API Index of the Grid]({% slug api_grid %})
