---
title: Spanned Columns
description: 'Get started with the Kendo UI for Vue Grid supporting the spanning of columns'
components: ["datagrid"]
slug: spanned_columns_grid
position: 30
subject: Data Grid
tag: new
---

# Spanned Columns

The Kendo UI for Vue Grid supports the spanning of the row content over multiple cells of data while the individual header and footer cells are retained.

This can be achieved by easily by implementing a [`colSpan`](slug:api_grid_gridcolumnprops#colspan) callback to control the visibility of the chosen column. It will make the row content to span over multiple cells.

In the sample below, the `colSpan` prop is configured for the **Product Name** column which will be spanned to the **Category Name** one.

{% meta height:480 %}
{% embed_file colspan/main.vue preview %}
{% embed_file colspan/main.js %}
{% endmeta %}

## Spanned Column Headers

You can also use the `colSpan` prop in order to span multiple columns headers like demonstrated in the sample below.

{% meta height:480 %}
{% embed_file colspan-headers/main.vue preview %}
{% embed_file colspan-headers/main.js %}
{% endmeta %}

## Suggested Links

-   [Vue Data Grid](slug://overview_grid)
-   [GridColumnProps]({% slug api_grid_gridcolumnprops %})
-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Index of the Grid]({% slug api_grid %})
