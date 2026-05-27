---
title: Basics
page_title: Vue Grid - Filtering - Kendo UI Native DataGrid
description: "Get started with the native Vue Grid by Kendo UI that makes filtering only of those data records which meet specified criteria possible."
slug: filtering_grid
position: 1
---

# Filtering

The Kendo UI for Vue Native Data Grid provides diverse filtering options for displaying Grid records which meet specified criteria.

## Enabling Filtering

The Kendo UI for Vue Grid supports filtering in two modes:

-   [Built-in State Management](#using-the-built-in-state-management-for-filtering): The Grid manages its own filtering state internally.

-   [Controlled Mode](#using-the-filtering-in-controlled-mode): The filtering state is externally managed by handling events and updating the state accordingly.

## Using the Built-in State Management for Filtering

To enable filtering using the built-in state management mechanism, follow these steps:

1. Enable the [`autoProcessData`](slug:api_grid_gridprops#autoprocessdata) prop to allow the Grid to handle paging automatically.
1. Set the [`filterable`]({% slug api_grid_gridprops %}#toc-filterable) prop of the Grid to render a filter row under the column headers.
1. Set the [`defaultFilter`](slug:api_grid_gridprops#defaultFilter) prop to set initial filtering for the Grid.

The following example demonstrates how to implement filtering using the built-in state management of the Kendo UI for Vue Grid.

{% meta height:440 %}
{% embed_file filtering/built-in/main.vue preview %}
{% embed_file filtering/built-in/main.js %}
{% endmeta %}

## Using the Filtering in Controlled Mode

To enable numeric paging in the Kendo UI for Vue Grid and use it in controlled mode, follow these steps:

1. Set the [`filterable`]({% slug api_grid_gridprops %}#toc-filterable) prop of the Grid to render a filter row under the column headers.
1. Set the [`filter`]({% slug api_grid_gridprops %}#toc-filter) option of the Grid. Filtering conditions are declared as [`FilterDescriptors`]({% slug api_kendo-data-query_filterdescriptor %}) or [`CompositeFilterDescriptor`]({% slug api_kendo-data-query_compositefilterdescriptor %}).
1. Handle the [`onFilterChange`]({% slug api_grid_gridprops %}#toc-onfilterchange) or [`onDataStateChange`]({% slug api_grid_gridprops %}#toc-ondatastatechange) event of the Grid.
1. Filter the data on the client using built-in methods like [filterBy]({% slug api_kendo-data-query_filterby %}) or [`process`]({% slug api_kendo-data-query_process %}). The data can also be filtered on the server using event parameters.

> The [`filterBy`]({% slug api_kendo-data-query_filterby %}) method is recommended for `onFilterChange` event. The [`process`]({% slug api_kendo-data-query_process %}) method is recommended when using the `onDataStateChange` event.



## Filter Options

The Grid data can be filtered using one of the following options:

|     Option    |    Setup    | Description |
| ----------- | ----------- | ----------- |
| Filter row | Set the [`filterable`]({% slug api_grid_gridprops %}#toc-filterable) option to `true` | Filter controls are rendered below each column header cell. The data is filtered automatically once the user stop typing.|
| ColumnMenu Filtering | Set the [`columnMenu`]({% slug api_grid_gridprops %}#toc-columnmenu) option to `true`. | A menu icon displays inside the column header. The data can be filtered when the user make a selection in the **Filter** popup of the column menu.|


The following example demonstrates the available filter modes of the Grid.

{% meta height:650 %}
{% embed_file filtering/select-filter-type/main.vue preview %}
{% embed_file filtering/select-filter-type/main.js %}
{% embed_file filtering/select-filter-type/products.js %}
{% endmeta %}

More details about each filtering option and the custom scenarios that can be applied, you can find on the following links:
* [Grid FilterRow examples]({% slug filter_row_grid %})
* [Grid ColumnMenu Filtering examples]({% slug filter_menu_grid %})

## Filter Data Types

In its column filters, the Grid provides a built-in filtering UI for all basic data types (`string`, `number`, `Date`, `boolean`). You can set the filtering UI type through the [filter]({% slug api_grid_gridprops %}#toc-filter) input property of each column.

### Text Filter

The text filter is the default filter type. Its UI is a [`Input`]({% slug overview_textbox %}) component.

{% meta height:670 %}
{% embed_file filtering/basic/string/main.vue preview %}
{% embed_file filtering/basic/string/main.js %}
{% embed_file filtering/basic/string/products.js %}
{% endmeta %}

### Numeric Filter

The numeric filtering UI is a [`NumericTextBox`]({% slug overview_numerictextbox %}) component.

{% meta height:670 %}
{% embed_file filtering/basic/number/main.vue preview %}
{% embed_file filtering/basic/number/main.js %}
{% embed_file filtering/basic/number/products.js %}
{% endmeta %}

### Date Filter

The date filtering UI is the [`DatePicker`]({% slug overview_datepicker %}) component.

{% meta height:670 %}
{% embed_file filtering/basic/date/main.vue preview %}
{% embed_file filtering/basic/date/main.js %}
{% embed_file filtering/basic/date/products.js %}
{% endmeta %}

### Boolean Filter

The boolean filtering UI utilizes the [`DropDownList`]({% slug overview_dropdownlist %}) component.

{% meta height:670 %}
{% embed_file filtering/basic/boolean/main.vue preview %}
{% embed_file filtering/basic/boolean/main.js %}
{% embed_file filtering/basic/boolean/products.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Grid]({% slug api_grid_gridprops %})
* [API Index of the Grid]({% slug api_grid %})
