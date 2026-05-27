---
title: Column Virtualization
page_title: Vue Grid - Column Virtualization - Kendo UI Native DataGrid
description: "Get started with the native Vue Grid by Kendo UI and learn how to enable column virtualization"
slug: virtual_columns_grid
position: 6
---

# Column Virtualization

The Kendo UI for Vue Native Grid supports column virtualization.

To enable it, set the [`columnVirtualization`]({% slug api_grid_gridprops %}#toc-columnVirtualization) property. As a result, the columns outside the current visible aria of the Grid will not be rendered and will improve the rendering performance.

To work properly, the column virtualization requires you to set the following configuration options:
* (Required) [`width`](slug:api_grid_gridcolumnprops#toc-width)&mdash;for each of the columns.
* (Required) [`width` through `style`](slug:api_grid_gridprops#toc-style) for the grid.

{% meta height:500 %}
{% embed_file columns/column-virtualization/main.vue preview %}
{% embed_file columns/column-virtualization/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Grid]({% slug api_grid_gridprops %})
* [API Index of the Grid]({% slug api_grid %})
