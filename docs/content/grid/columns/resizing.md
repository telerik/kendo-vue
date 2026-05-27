---
title: Resizing
page_title: Vue Grid - Resizing Columns - Kendo UI Native DataGrid
description: "Get started with the native Vue Grid by Kendo UI which supports the resizing of columns by dragging the resize handlers of the header cells."
slug: resizing_columns_grid
position: 1
---

# Resizing

The Kendo UI for Vue Grid enables you to resize its columns by dragging the edges (resize handles) of the header cells.

To enable column resizing, set the [`resizable`]({% slug api_grid_gridprops %}#toc-resizable) property of the Grid to `true`.

> * By default, the column-resizing feature is disabled.
> * If the user resizes the Grid columns so that the total width of the columns becomes less than the width of the Grid, the remaining table is filled with whitespace.

{% meta height:500 %}
{% embed_file columns/resizing/main.vue preview %}
{% embed_file columns/resizing/main.js %}
{% endmeta %}

## Suggested Links

* [ColumnComponent]({% slug api_grid_gridcolumnprops %})
* [API Reference of the Grid]({% slug api_grid_gridprops %})
