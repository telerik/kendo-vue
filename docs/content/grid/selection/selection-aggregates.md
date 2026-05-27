---
title: Selection Aggregates
description: 'Get started with the Kendo UI for Vue Data Grid supporting selection of a single row or multiple rows and calculate different metrics inside aggregated rows.'
components: ["datagrid"]
slug: aggregates_selection_grid
position: 50
subject: Selection Aggregates feature of the Grid
tag: new
---

# Selection Aggregates

The Grid enables you to select single or multiple cells or rows and calculate different metrics based on the selected data.

This functionality allows you to get a quick snapshot of some of the more important aggregates of the selected data. You can use the built-in approach and display these metrics at the bottom of the Grid or create your own elements that would display the data.

The Grid supports the following built-in aggregation for all selected cells:

-   `max`&mdash;the greatest number. Valid for numeric fields.
-   `min`&mdash;the smallest number. Valid for numeric fields.
-   `sum`&mdash;the sum of all numbers. Valid for numeric fields.
-   `average`&mdash;the average of all numbers. Valid for numeric fields.
-   `count`&mdash;the total number of cells.
-   `earliest`&mdash;the earliest date. Valid for `Date` fields.
-   `latest`&mdash;the latest date. Valid for `Date` fields.
-   `isTrue`&mdash;the total number of boolean fields with `true` value.
-   `isFalse`&mdash;the total number of boolean fields with `false` value.

To enable the selection aggregates of the Grid enable its [`selectable`]({% slug api_grid_gridprops %}#toc-selectable) prop, add a `StatusBar` component and update its `data` based on its current selection of the component kept inside its built-in `select` state.

{% meta height:700 %}
{% embed_file selection/aggregates/main.vue preview %}
{% embed_file selection/aggregates/main.js %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Index of the Grid]({% slug api_grid %})
