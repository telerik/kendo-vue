---
title: Global Filtering
description: 'Learn how to implement global filtering in the Kendo UI for Vue Data Grid with built-in and controlled state management.'
components: ["datagrid"]
slug: global-filtering_grid
position: 5
---

# Kendo UI for Vue Data Grid Global Filtering

The Kendo UI for Vue Data Grid provides flexible global filtering capabilities that allow you to display only those Grid records which meet specified criteria. Global filtering can be implemented using either built-in state management or controlled mode, giving you full control over the filtering behavior.

## Filtering Modes

The Grid supports two primary filtering modes:

-   **Built-in State Management**: The Grid manages its own filtering state internally.
-   **Controlled Mode**: The filtering state is externally managed by handling events and updating the state accordingly.

## Using Built-in State Management for Filtering

The built-in state management approach is the simplest way to enable filtering in the Grid. The Grid automatically handles the filtering logic and state updates.

### Enabling Built-in Filtering

To enable filtering using the built-in state management mechanism, follow these steps:

1. Enable the [`autoProcessData`](slug:api_grid_gridprops#autoprocessdata) prop to allow the Grid to handle filtering automatically.
1. Add the [`GridSearchBox`]({% slug api_grid_gridsearchbox %}) component to provide a global search input.
1. (Optional) Set the [`defaultSearch`](slug:api_grid_gridprops#defaultSearch) prop to apply initial filtering to the Grid.

The following example demonstrates how to implement filtering using the built-in state management of the Kendo UI for Vue Grid.

{% meta height:670 %}
{% embed_file global-filtering/built-in/main.vue preview %}
{% embed_file global-filtering/built-in/main.js %}
{% endmeta %}

### Key Features of Built-in Mode

-   Automatic handling of filter state
-   No need to manually process data
-   Simplified implementation
-   Supports default filter configuration

## Using Controlled Mode for Filtering

Controlled mode gives you complete control over the filtering state, allowing you to implement custom filtering logic, integrate with external state management, or handle server-side filtering.

### Enabling Controlled Filtering

To enable filtering in controlled mode, follow these steps:

1. Add the [`GridSearchBox`]({% slug api_grid_gridsearchbox %}) component to provide a global search input.
1. Define the [`search`]({% slug api_grid_gridprops %}#toc-filter) prop with filter conditions as [`FilterDescriptor`]({% slug api_kendo-data-query_filterdescriptor %}) or [`CompositeFilterDescriptor`]({% slug api_kendo-data-query_compositefilterdescriptor %}).
1. Handle the [`searchchange`]({% slug api_grid_gridprops %}#toc-searchchange) event to update the filter state.
1. Process the data using the [`filterBy`]({% slug api_kendo-data-query_filterby %}) method from `@progress/kendo-data-query`.

### Controlled Filtering with FilterBy

The following example demonstrates controlled filtering using the `filterBy` method to manually filter the data when the filter state changes.

{% meta height:500 %}
{% embed_file global-filtering/controlled/main.vue preview %}
{% embed_file global-filtering/controlled/main.js %}
{% endmeta %}

### Controlled Filtering with Initial Filter

You can also set an initial filter state in controlled mode to display pre-filtered data when the Grid loads.

{% meta height:440 %}
{% embed_file global-filtering/controlled-with-filter/main.vue preview %}
{% embed_file global-filtering/controlled-with-filter/main.js %}
{% endmeta %}


## Suggested Links

-   [Vue Data Grid](slug://overview_grid)
-   [Filter Row]({% slug filter_row_grid %})
-   [ColumnMenu Filtering]({% slug filter_menu_grid %})
-   [External Filtering]({% slug filter_external_grid %})
-   [Vue Data Grid High-Level Overview](https://www.telerik.com/kendo-vue-ui/grid)
