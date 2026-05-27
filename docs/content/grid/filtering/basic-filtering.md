---
title: Basic Filtering
description: 'Learn how to apply global filtering in the Kendo UI for Vue Data Grid to display only relevant records.'
components: ["datagrid"]
slug: basic-filtering_grid
position: 10
---

# Kendo UI for Vue Data Grid Basic Filtering

The Kendo UI for Vue Data Grid provides a free global filtering feature that allows you to display only those Grid records which meet specified criteria.

## Enabling Basic Filtering

You can enable the global filtering of the Grid by following these steps:

1. Enable the [`autoProcessData`](slug:api_grid_gridprops#autoprocessdata) prop to allow the Grid to handle paging automatically.
1. Set the [`filterable`]({% slug api_grid_gridprops %}#toc-filterable) prop of the Grid to render a filter row under the column headers.
1. (Optional) Set the [`defaultFilter`](slug:api_grid_gridprops#defaultFilter) prop to set initial filtering for the Grid.

The following example demonstrates how to implement filtering using the built-in state management of the Kendo UI for Vue Grid.

{% meta height:440 %}
{% embed_file filtering/built-in/main.vue preview %}
{% embed_file filtering/built-in/main.js %}
{% endmeta %}

## Kendo UI for Vue Data Grid Filtering APIs

-   [FilterDescriptors]({% slug api_kendo-data-query_filterdescriptor %})
-   [onDataStateChange]({% slug api_grid_gridprops %}#toc-ondatastatechange)
-   [API Reference of the Grid]({% slug api_grid_gridprops %})

## Suggested Links

-   [Vue Data Grid](slug://overview_grid)
-   [Vue Data Grid High-Level Overview](https://www.telerik.com/kendo-vue-ui/grid)
