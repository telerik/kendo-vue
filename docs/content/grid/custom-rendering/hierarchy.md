---
title: Master-Detail Template
page_title: Vue Grid - Master-Detail Template - Kendo UI Native DataGrid
description: "Get started with the native Vue Grid by Kendo UI enabling you to apply hierarchical order to desired records using the detail property of the Grid."
slug: master_detail_grid
position: 6
---

# Master-Detail Template

The Kendo UI for Vue Native Grid provides options for visualizing the relations between its parent and child records by displaying the table data in a hierarchical order.

To apply a hierarchical order to the desired records, use the [`detail`]({% slug api_grid_gridprops %}#toc-detail) property of the master Grid. The feature allows you to load the detail component which contains the corresponding child Grid records that are filtered by the parent key field value.

{% meta height:650 %}
{% embed_file custom-rendering/hierarchy/main.vue preview %}
{% embed_file custom-rendering/hierarchy/main.js %}
{% embed_file custom-rendering/hierarchy/DetailComponent.vue %}
{% embed_file custom-rendering/hierarchy/products.js %}
{% endmeta %}


Alternatively, you can define the hierarchy relation using the `render` function or named slots.

## Suggested Links

* [API Reference of the Grid]({% slug api_grid_gridprops %})
* [API Index of the Grid]({% slug api_grid %})
