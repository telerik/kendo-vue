---
title: Spanned Rows
description: 'Get started with the Kendo UI for Vue Grid supporting the spanning of rows'
components: ["datagrid"]
slug: rowspan_grid
position: 10
tag: new
---

# Spanning of Rows

The Kendo UI for Vue Grid provides a built-in row-spanning feature, which can be enabled by setting the [rowSpannable]({% slug api_grid_gridprops %}#toc-rowspannable)

{% meta height:560 %}
{% embed_file rowspan/basic/main.vue preview %}
{% embed_file rowspan/basic/main.js %}
{% endmeta %}

## Advanced Row Spanning

The Grid supports advanced row-spanning configuration, which allows you to provide custom identifier to prevent unwanted row-spanning between different data items.

The following examples demonstrates how to generate unique identifier based on the `CustomerID` which prevents row-spanning of other columns between different customers.

{% meta height:560 %}
{% embed_file rowspan/advanced/main.vue preview %}
{% embed_file rowspan/advanced/main.js %}
{% endmeta %}

## Suggested Links

-   [Vue Data Grid](slug://overview_grid)
-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Index of the Grid]({% slug api_grid %})
