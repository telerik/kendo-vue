---
title: Resizing
description: "Use the configuration options of the TileLayout tiles and set their positions and dimensions as well as their resize, drag, and scrolling behavior in Vue projects."
slug: tiles_resizing_tilelayout
position: 30
---


# Resizing

Users can resize the tiles by dragging their bottom and right-hand side borders or the bottom-right corner. Use the [resizable]({% slug api_layout_tilelayoutitem %}#toc-resizable) property to determine if the tile can be resized or allow one-direction resizing only.

The possible values are:
* `'horizontal'`&mdash;Users can resize the tile only in a horizontal direction by using the right resize handle.
* `'vertical'`&mdash;Users can resize the tile only in a vertical direction by using the bottom resize handle.
* `true` (Default)&mdash;Users can resize the tile in both horizontal and vertical directions by using the resize handles from the right and bottom sides and bottom-right corner.
* `false`&mdash;Users cannot resize the tile.

Extending a tile in the direction of an adjacent tile will push the adjacent tile down on the next row but on the same column-line. Narrowing a tile produces a gap that can be filled by another, if it fits and if it's on the same column-line.

> Note: The resizing functionality is enabled by default.


{% meta height:500 %}
{% embed_file tilelayout/tiles/resizing/main.vue preview %}
{% embed_file tilelayout/tiles/resizing/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the TileLayout]({% slug api_layout_tilelayoutprops %})
* [API Reference of the TileLayoutItem]({% slug api_layout_tilelayoutitem %})
