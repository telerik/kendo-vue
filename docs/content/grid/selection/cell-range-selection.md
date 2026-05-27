---
title: Cell Range Selection
description: 'Get started with the Kendo UI for Vue Data Grid supporting selection of a single row or multiple rows.'
components: ["datagrid"]
slug: cell_range_selection_grid
position: 30
subject: Cell Range Selection feature of the Grid
tag: new
---

# Cell Range Selection

Cell selection is enabled by setting an object to the [`selectable`]({% slug api_grid_gridprops %}#toc-selectable) property with `enabled` set to `true` and `cell` set to `true`.

The following example demonstrates multiple-cell selection with enabled drag selection where the `select` state is handled internally by the Grid.

{% meta height:520 %}
{% embed_file selection/multi-cell-selection/main.vue preview %}
{% embed_file selection/multi-cell-selection/main.js %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Index of the Grid]({% slug api_grid %})
