---
title: Position and Dimensions
description: "Use the configuration options of the TileLayout tiles and set their positions in Vue projects."
slug: tiles_position_dimensions_tilelayout
position: 10
---


# TileLayout Tiles Position and Dimensions

There are several properties that control the position and dimensions of the TileLayout tiles. You can pass these properties either as a [defaultPosition]({% slug api_layout_tilelayoutitem %}#toc-defaultPosition) object for each tile (uncontrolled mode), or though the [positions]({% slug api_layout_tilelayoutprops %}#toc-positions) property of the TileLayout component. See [Controlling the Position](#toc-controlling-the-position) for details.

The possible configuration options are:

* [col]({% slug api_layout_tileposition %}#toc-col) (Required)&mdash;Defines on which column-line the tile will start. The _reordering_ and _resizing_ functionalities require it to work as expected.
* [row]({% slug api_layout_tileposition %}#toc-row)&mdash;Defines on which row-line the tile will start.
* [colSpan]({% slug api_layout_tileposition %}#toc-colSpan)&mdash;Specifies the number of cols that the tile spans.
* [rowSpan]({% slug api_layout_tileposition %}#toc-rowSpan)&mdash;Specifies the number of rows that the tile spans.
* [order]({% slug api_layout_tileposition %}#toc-order)&mdash;Defines the order index of the tile. If not set, tiles will receive a sequential order.



{% meta height:560 %}
{% embed_file tilelayout/tiles/positions/main.vue preview %}
{% embed_file tilelayout/tiles/positions/main.js %}
{% endmeta %}


## Controlling the Position

The TileLayout provides options for controlling the position of each item by using the [positions]({% slug api_layout_tilelayoutprops %}#toc-positions) property of the TileLayout.

To manage the positions of the TileLayout items:

1. Use its [`positions`]({% slug api_layout_tilelayoutprops %}#toc-positions) property.
1. Handle the [`onReposition`]({% slug api_layout_tilelayoutprops %}#toc-onReposition) event.
1. Pass the new value through the props.



{% meta height:600 %}
{% embed_file tilelayout/tiles/controlled-mode/main.vue preview %}
{% embed_file tilelayout/tiles/controlled-mode/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the TileLayout]({% slug api_layout_tilelayoutprops %})
* [API Reference of the TileLayoutItem]({% slug api_layout_tilelayoutitem %})
