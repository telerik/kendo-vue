---
title: Overview
description: 'Get started with the sorting functionality of the Kendo UI for Vue Grid and learn how to sort single and multiple data-bound columns.'
components: ["datagrid"]
slug: sorting_grid
position: 10
---

# Kendo UI for Vue Data Grid Single-column Sorting

The Kendo UI for Vue Data Grid provides powerful sorting capabilities that allow users to organize and analyze data effectively. Sorting can be applied to a single column or multiple columns simultaneously, depending on the application's requirements.


## Basics of Sorting in the Kendo UI for Vue Data Grid

Sorting in the Grid is enabled through the sortable property. When sorting is enabled, users can click on column headers to sort data in ascending or descending order. Additional customization options allow for multi-column sorting and custom sorting logic in either one of the following modes:

-   [Built-in State Management](#using-the-built-in-state-management-for-sorting): The Grid manages its own sorting state internally.

-   [Controlled Mode](#using-the-sorting-in-controlled-mode): The sorting state is externally managed by handling events and updating the state accordingly.

### Features of Sorting

-   [Single-column Sorting](#single-column-sorting)&mdash;Users can sort data by one column at a time, with an option to unsort.
-   [Multiple-column Sorting](#multiple-solumn-sorting)&mdash;Allows sorting by multiple columns, defining sorting priorities.
-   **Custom Sorting Logic**&mdash;Developers can implement [custom compare functions](#customizing-the-sort-compare-function)
-   [Reversing Sorting Order](#reversing-sorting-order)&mdash;Allows you to prioritize the last sorted column.
-   **Client-side and Server-side Sorting**&mdash;allows you to handle the sorting on the client for fast updates or processed on the server for larger datasets.

You can also enable the unsorting of columns by utilizing the `sortable.allowUnsort` option.

{% meta height:500 %}
{% embed_file sorting/basic/main.vue preview %}
{% embed_file sorting/basic/main.js %}
{% endmeta %}

## Using the Built-in State Management for Sorting

To enable sorting in the Kendo UI for Vue Grid and utilize its built-in state management, follow these steps:

1. Enable the [`autoProcessData`](slug:api_grid_gridprops#autoprocessdata) prop to allow the Grid to handle the updated state automatically.
1. Set the [`sortable`](slug:api_grid_gridprops#sortable) prop of the Grid to enable sorting.
1. Set the [`defaultSort`](slug:api_grid_gridprops#defaultsort) prop to define the initial sorting.

The following example demonstrates how to use sorting handled by the built-in state management of the Kendo UI for Vue Grid.

{% meta height:370 %}
{% embed_file sorting-basic/built-in/main.vue preview %}
{% embed_file sorting-basic/built-in/main.js %}
{% endmeta %}

## Using the Sorting in Controlled Mode

To enable sorting in the Kendo UI for Vue Grid and use it in controlled mode, follow these steps:

1. Set the [`sortable`]({% slug api_grid_gridprops %}#toc-sortable) option of the Grid and set its `mode` prop to `single`.
1. Set the [`field`]({% slug api_grid_gridcolumnprops %}#toc-field) option of the Grid column.
1. Utilize the [`sort`]({% slug api_grid_gridprops %}#toc-sort) option to apply the sorting styles and buttons to the affected columns.
1. Handle the [`onSortChange`]({% slug api_grid_gridprops %}#toc-onsortchange) or the [`onDataStateChange`]({% slug api_grid_gridprops %}#toc-ondatastatechange) event of the Grid. The `onDataStateChange` event is recommended when the Grid will have other data operations as it provides the complete [`dataState`]({% slug api_kendo-data-query_state %}) in a single event.
1. Sort the data on the client by using our built-in methods [`orderBy`]({% slug api_kendo-data-query_orderby %}) or [`process`]({% slug api_kendo-data-query_process %}). The data can also be sorted on the server by making a request using the event parameters.

> The [`orderBy`]({% slug api_kendo-data-query_orderby %}) method is recommended when using the `onSortChange` event and the [`process`]({% slug api_kendo-data-query_process %}) method is recommended when using the `onDataStateChange` event.

The following example demonstrates the minimum required configuration for single column sorting the Grid records.

{% meta height:370 %}
{% embed_file sorting-basic/controlled/main.vue preview %}
{% embed_file sorting-basic/controlled/main.js %}
{% endmeta %}

## Single-column Sorting

Single-column sorting allows users to sort records by clicking on a column header. Clicking repeatedly cycles through ascending, descending, and unsorted states if enabled.

Learn more about enabling and customizing single-column sorting: [Single-column Sorting Guide](slug:single_column_sorting_grid)

## Multiple-column Sorting

Multiple-column sorting lets users define a sorting hierarchy by sorting several columns at once. The order of sorting can be adjusted to prioritize certain columns.

Explore multiple-column sorting options: [Multiple-column Sorting Guide](slug:multi_column_sorting_grid)

## Customizing the Sort Compare Function

The `SortDescriptor` allows setting custom `compare` function for providing custom sorting logic. In the context of the Grid, the `onSortChange` or `onDataStateChange` events can be handled for finding the SortDescriptor for specific field and adding the custom sort compare function.

The following example demonstrates how to add custom compare function to `version` field within the `onDataStateChange` event of the Grid:

{% meta height:430 %}
{% embed_file sorting-custom-compare/main.vue preview %}
{% embed_file sorting-custom-compare/main.js %}
{% endmeta %}

## Reversing Sorting Order

The Grid allows you to reverse the sorting order of its columns. To apply higher priority to the last sorted column, place it at the beginning of the sorting array before setting the new state. When a column is removed from the sorting state, you do not have to reverse the items.

```vue
<script setup lang="ts">
import { ref } from 'vue';
import type { GridSortChangeEvent } from '@progress/kendo-vue-grid';

const sort = ref<SortDescriptor[]>([]);
const products = ref([]);

const sortChange = (event: GridSortChangeEvent) => {
  const newSort = event.sort;
  if (newSort.length >= sort.value.length) {
    newSort.unshift(newSort.pop());
  }
  sort.value = newSort;
  products.value = GetProducts(newSort);
};
</script>
```

## Customize Sorting

The sorting feature of the Grid allows you to clear the sorting on columns and sort the records by multiple columns.
* To enable the unsorting of columns, use the `sortable.allowUnsort` option which determines if the columns can be unsorted.
* To enable the sorting of multiple columns, set the `sortable.mode` option which accepts a `single` or `multiple` value.

{% meta height:500 %}
{% embed_file sorting/custom/main.vue preview %}
{% embed_file sorting/custom/main.js %}
{% endmeta %}

## Suggested Links

-   [Vue Data Grid](slug://overview_grid)
-   [Data Query Overview]({% slug overview_dataquery %})
-   [Vue Data Grid High-Level Overview](https://www.telerik.com/kendo-vue-ui/grid)
