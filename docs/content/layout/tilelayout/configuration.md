---
title: Configuration
description: "An example demonstrating how to use the Kendo UI for Vue TileLayout configuration options in Vue project."
slug: configuration_tilelayout
position: 20
---

# TileLayout Configuration Options

The Kendo UI for Vue Native TileLayout provides various built-in configuration options that allow you to quickly adjust it to your specific application requirements.

The TileLayout features the following options:

* Sets custom [number of columns]({% slug api_layout_tilelayoutprops %}#toc-columns);
* Sets custom [row heights]({% slug api_layout_tilelayoutprops %}#toc-rowHeight) and [column widths]({% slug api_layout_tilelayoutprops %}#toc-columnWidth);
* Sets [gaps]({% slug api_layout_tilelayoutprops %}#toc-gap) between rows and columns;
* Sets [autoFlow]({% slug api_layout_tilelayoutprops %}#toc-autoFlow) algorithm;
* Sets [resizing]({% slug api_layout_tilelayoutitem %}#toc-resizable) and [reordering]({% slug api_layout_tilelayoutitem %}#toc-reorderable) for the tiles.

{% meta height:700 %}
{% embed_file tilelayout/configuration/main.vue preview %}
{% embed_file tilelayout/configuration/main.js %}
{% endmeta %}

# TileLayout items unique keys

The Kendo UI for Vue Native TileLayout TileLayout provides option for setting unique item key. Set the [dataItemKey]({% slug api_layout_tilelayoutitem %}#toc-dataItemKey) property to determine the key field. Make sure that the field contains unique values.

The following example demonstrates TileLayout items with unique keys.

{% meta height:700 %}
{% embed_file tilelayout/configuration-unique/main.vue preview %}
{% embed_file tilelayout/configuration-unique/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the TileLayout]({% slug api_layout_tilelayoutprops %})
* [API Reference of the TileLayoutItem]({% slug api_layout_tilelayoutitem %})
