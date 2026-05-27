---
title: Locked
page_title: Vue Grid - Locked Colunns - Kendo UI Native DataGrid
description: "Get started with the native Vue Grid by Kendo UI which enables you to set locked columns."
slug: locked_columns_grid
position: 2
---

# Locked columns

Locked (frozen or sticky) columns are the columns that are visible at all times while the user scrolls the Kendo UI for Vue Native Grid horizontally.

To lock a column, set the [`lock`]({% slug api_grid_gridcolumnprops %}#toc-locked) property of the Grid column to `true`.

> By default, columns are not locked.

This feature relies on CSS `position:sticky`, making it unsupported in IE11 and other browsers that lack support for this property.

{% meta height:470 %}
{% embed_file columns/locked/main.vue preview %}
{% embed_file columns/locked/main.js %}
{% embed_file columns/locked/products.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Grid]({% slug api_grid_gridprops %})
* [API Index of the Grid]({% slug api_grid %})
