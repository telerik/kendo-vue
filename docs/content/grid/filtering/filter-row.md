---
title: Filter Row
page_title: Vue Grid - Filtering - Kendo UI Native DataGrid
description: "Get started with the Filter row data filtering in the Kendo UI for Vue Native Grid."
slug: filter_row_grid
position: 2
---

# Filter row

The Kendo UI for Vue Native Grid provides diverse filtering options for displaying Grid records which meet specified criteria.

## Getting Started

To enable filtering:

1. Set the [filterable]({% slug api_grid_gridcolumnprops %}#toc-filterable)  and [filter]({% slug api_grid_gridcolumnprops %}#toc-filter) options of the Grid.
1. Handle the [filterchange]({% slug api_grid_gridfilterchangeevent %}) event of the Grid, and filter the data manually by applying the filter from the argument of the event.

## Filter Row

By default, when filtering is enabled, the Grid renders a filter row in its column headers. Based on the type of data the columns contain, the filter row displays textboxes in each column header where the user can filter string, numeric, or date inputs.

{% meta height:550 %}
{% embed_file filtering/basic/main.vue preview %}
{% embed_file filtering/basic/main.js %}
{% embed_file filtering/basic/products.js %}
{% endmeta %}

## Customizing the Filter Row

To render a custom filter cell in the Grid, use templates. To display a filter template in the header of the Grid columns, use any of the following approaches:

* Using slots, as demonstrated by the `filterSlotTemplate` in the following example.
* Using the `render` function, as demonstrated by the `filterRender` function in the following example.

{% meta height:650 %}
{% embed_file filtering/custom/main.vue preview %}
{% embed_file filtering/custom/main.js %}
{% embed_file filtering/custom/products.js %}
{% endmeta %}


## Using Switch in Filter Row

The below example shows how to use the [Switch]({% slug overview_switch %}) component in the Filter Row of the Grid. The example uses a custom slot template that is passed to the [filterCell]({% slug api_grid_gridcolumnprops %}#toc-filtercell) property of the `Discontinued` column.

{% meta height:540 %}
{% embed_file filtering/row/custom-switch/main.vue preview %}
{% embed_file filtering/row/custom-switch/main.js %}
{% embed_file filtering/row/custom-switch/products.js %}
{% endmeta %}

## Using DropDownList in Filter Row
The below example shows how to use the [DropDownList]({% slug overview_dropdownlist %}) component in the Filter Row of the Grid. The example uses a custom slot template that is passed to the [filterCell]({% slug api_grid_gridcolumnprops %}#toc-filtercell) property of the `Category.CategoryName` column.

{% meta height:650 %}
{% embed_file filtering/row/custom-dropdownlist/main.vue preview %}
{% embed_file filtering/row/custom-dropdownlist/main.js %}
{% embed_file filtering/row/custom-dropdownlist/products.js %}
{% endmeta %}

## Using DateRangePicker in Filter Row
The below example shows how to use the [DateRangePicker]({% slug overview_daterangepicker %}) component in the Filter Row of the Grid. The example uses a custom slot template that is passed to the [filterCell]({% slug api_grid_gridcolumnprops %}#toc-filtercell) property of the `FirstOrderedOn` column.

{% meta height:660 %}
{% embed_file filtering/row/custom-daterangepicker/main.vue preview %}
{% embed_file filtering/row/custom-daterangepicker/main.js %}
{% embed_file filtering/row/custom-daterangepicker/products.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Grid]({% slug api_grid_gridprops %})
* [API Index of the Grid]({% slug api_grid %})
