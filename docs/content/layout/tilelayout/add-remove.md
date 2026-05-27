---
title: Add/Remove
description: "An example demonstrating how to add or remove tiles from the Kendo UI for Vue TileLayout in Vue projects."
slug: addremove_tilelayout
position: 15
---

# TileLayout Add and Remove Tiles

Some scenarios in which the Kendo UI for Vue Native TileLayout can be used require the option to add or remove a Tile in the component or dynamically enable/disable the Tiles' resizing and reordering.

The following example demonstrates how you can switch between `readonly` and `edit` modes in the context of the TileLayout component. To be able to `add`, `remove`, `reorder` or `resize` a Tile, you need to click on the **Edit** button to switch between the operating modes.

{% meta height:950 %}
{% embed_file tilelayout/add-remove/main.vue preview %}
{% embed_file tilelayout/add-remove/PageViews.vue %}
{% embed_file tilelayout/add-remove/WindowContent.vue %}
{% embed_file tilelayout/add-remove/PopularPagesChart.vue %}
{% embed_file tilelayout/add-remove/VisitorsDonut.vue %}
{% embed_file tilelayout/add-remove/main.js %}
{% embed_file tilelayout/add-remove/tilelayout-data.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the TileLayout]({% slug api_layout_tilelayoutprops %})
* [API Reference of the TileLayoutItem]({% slug api_layout_tilelayoutitem %})
