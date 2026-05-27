---
title: ColumnMenu Filtering
page_title: Vue Grid - ColumnMenu Filtering - Kendo UI Native Grid
description: "Get started with the Column Menu data filtering in the Kendo UI for Vue Native Grid."
slug: filter_menu_grid
position: 3
---

# ColumnMenu Filtering

One of the filtering options provided by the Kendo UI for Vue Native Grid is through its column menu. The [Column Menu documentation]({% slug column_menu_grid %}) provides more details about how to initialize it.

The current article discusses how to modify the column menu to use its filtering functionality in an efficient manner.

## Display Filtering Functionality with Custom Icon

The below example shows how to change the `column menu` icon and display only the filtering functionality of the menu.

{% meta height:690 %}
{% embed_file columns/column-menu/flter-only-custom-icon/main.vue preview %}
{% embed_file columns/column-menu/flter-only-custom-icon/ColumnMenu.vue %}
{% embed_file columns/column-menu/flter-only-custom-icon/main.js %}
{% embed_file columns/column-menu/flter-only-custom-icon/products.js %}
{% endmeta %}

## Checkbox Filter

The ColumnMenu provides the [GridColumnMenuCheckboxFilter]({% slug api_grid_gridcolumnmenucheckboxfilterprops %}) component, which provides a checkbox list to filter the column data.

The following example demonstrates how to setup the checkbox filtering:

{% meta height:650 %}
{% embed_file columns/column-menu/checkboxFilter/main.vue preview %}
{% embed_file columns/column-menu/checkboxFilter/ColumnMenu.vue %}
{% embed_file columns/column-menu/checkboxFilter/main.js %}
{% embed_file columns/column-menu/checkboxFilter/products.js %}
{% endmeta %}

## Customizing the Filter Component

The filter component of the column menu enables you to customize its user interface (UI) by passing a custom component to the [`columnMenu`]({% slug api_grid_gridcolumnprops %}#toc-columnmenu) property.

You can integrate custom components in the column menu and pass additional properties to them.

The following example demonstrates how to:

* Render the columns inside the column menu based on an array of the column names and on the column `hidden` property.
* Hide columns from the column menu and enable the Grid to update the column menu.

To access all demo files, refer to the tree pane of the file.

{% meta height:690 %}
{% embed_file columns/column-menu/custom/main.vue preview %}
{% embed_file columns/column-menu/custom/ColumnMenu.vue %}
{% embed_file columns/column-menu/custom/main.js %}
{% embed_file columns/column-menu/custom/products.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the Grid]({% slug api_grid_gridprops %})
* [API Index of the Grid]({% slug api_grid %})
