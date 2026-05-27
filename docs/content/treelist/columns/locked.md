---
title: Locked
description: "Get started with the Kendo UI for Vue Native TreeList supporting locked columns that are visible at all times while the user scrolls the TreeList horizontally."
slug: locked_columns_treelist
position: 2
---

# Locked columns

Locked, also knows as `frozen` or `sticky` columns are the columns that are constantly visible while the user scrolls the TreeList horizontally.

In order for the locked columns to work properly, configure the following options:
* (Required) Set [`width`]({% slug api_treelist_treelistcolumnprops %}#toc-width) of each column.
* (Required) Set `overflow: auto` and `width` in pixels through [`style`]({% slug api_treelist_treelistprops %}#toc-wrapperstyle) of the TreeList.
* (Required) Set [`locked`]({% slug api_treelist_treelistprops %}#toc-locked) property of the column.

> By default, the columns of the TreeList are not locked.

{% meta height:580 %}
{% embed_file locked/main.vue preview %}
{% embed_file locked/main.js %}
{% embed_file shared/data.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the TreeList]({% slug api_treelist_treelistprops %})
* [API Index of the TreeList]({% slug api_treelist %})
