---
title: Multi-column Sorting
description: 'Get started with the sorting functionality of the Kendo UI for Vue Grid and learn how to sort single data-bound columns.'
components: ["datagrid"]
slug: multi_column_sorting_grid
position: 30
subject: Multi-column Sorting feature of the Grid
---

# Kendo UI for Vue Data Grid Multi-column Sorting

The Kendo UI for Vue Data Grid supports sorting by multiple data-bound columns.

## Enabling Multiple-column Sorting

To enable sorting by multiple columns, follow these steps:

1. Enable the [`autoProcessData`](slug:api_grid_gridprops#autoprocessdata) prop to allow the Grid to handle the updated state automatically.
1. Set the [`sortable`]({% slug api_grid_gridprops %}#toc-sortable) option of the Grid and set its `mode` prop to `multiple`.
1. (Optional) Set the [`defaultSort`](slug:api_grid_gridprops#defaultsort) prop to define the initial sorting.

The following example demonstrates the minimum required configuration for sorting multiple Grid records.

{% meta height:370 %}
{% embed_file sorting-multiple/main.vue preview %}
{% embed_file sorting-multiple/main.js %}
{% endmeta %}

## Suggested Links

-   [Vue Data Grid](slug://overview_grid)
-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [Data Grid Sorting Overview](slug:sorting_grid)
-   [Data Grid Single-column Sorting](slug:single_column_sorting_grid)
-   [Data Query Overview]({% slug overview_dataquery %})
-   [Vue Data Grid High-Level Overview](https://www.telerik.com/kendo-vue-ui/grid)
