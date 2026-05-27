---
title: Column Menu
page_title: Vue Grid Columns - Column Menu - Kendo UI Native DataGrid
description: "Get started with the native Vue Grid by Kendo UI allowing you to add a column menu to its columns."
slug: column_menu_grid
position: 5
---

# Column Menu

The Native Vue Grid enables you to show a menu with quick actions for its columns.

The column menu provides flexible options for high-level customization. For example, the regular sorting and filtering features are represented by individual components which allows you to implement complex scenarios and meet the specific requirements of your project.

## Basic Usage

To configure the column menu, use the [`columnMenu`]({% slug api_grid_gridcolumnprops %}#toc-columnmenu) option of the columns.

The following example demonstrates how to use the components for sorting and filtering while you implement the column menu in the Grid.

{% meta height:550 %}
{% embed_file columns/column-menu/basic/main.vue preview %}
{% embed_file columns/column-menu/basic/main.js %}
{% embed_file columns/column-menu/basic/products.js %}
{% endmeta %}


## Styling the Column Menu Icon

The following example demonstrates:
* How to change the column menu icon using the [columnMenuIcon]({% slug api_grid_gridprops %}#toc-columnmenuicon) property of the Grid.
* How to add an `active` style to the column menu icon when sorting and/or filtering are applied. To achieve this functionality, we use the `filterGroupByField` and `sortGroupByField` static methods

{% meta height:550 %}
{% embed_file columns/column-menu/custom-style/main.vue preview %}
{% embed_file columns/column-menu/custom-style/main.js %}
{% embed_file columns/column-menu/custom-style/styles.css %}
{% embed_file columns/column-menu/custom-style/products.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Grid]({% slug api_grid_gridprops %})
* [API Index of the Grid]({% slug api_grid %})
