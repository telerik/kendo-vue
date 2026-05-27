---
title: Single-column Sorting
description: 'Get started with the sorting functionality of the Kendo UI for Vue Grid and learn how to sort single data-bound columns.'
components: ["datagrid"]
slug: single_column_sorting_grid
position: 10
---

# Kendo UI for Vue Data Grid Single-column Sorting

The Kendo UI for Vue Data Grid enables you to sort single data-bound columns.

To enable sorting in the Kendo UI for Vue Grid and utilize its built-in state management, follow these steps:

1. Enable the [`autoProcessData`](slug:api_grid_gridprops#autoprocessdata) prop to allow the Grid to handle the updated state automatically.
1. Set the [`sortable`](slug:api_grid_gridprops#sortable) prop of the Grid to enable sorting.
1. (Optional) Set the [`defaultSort`](slug:api_grid_gridprops#defaultsort) prop to define the initial sorting.

The following example demonstrates how to use sorting handled by the built-in state management of the Kendo UI for Vue Grid.

{% meta height:370 %}
{% embed_file sorting-basic/built-in/main.vue preview %}
{% embed_file sorting-basic/built-in/main.js %}
{% endmeta %}

## Suggested Links

-   [Vue Data Grid](slug://overview_grid)
-   [Data Grid Sorting Overview](slug:sorting_grid)
-   [Data Grid Multiple-column Sorting](slug:multi_column_sorting_grid)
-   [Data Query Overview](slug:overview_dataquery)
-   [Vue Data Grid High-Level Overview](https://www.telerik.com/kendo-vue-ui/grid)
