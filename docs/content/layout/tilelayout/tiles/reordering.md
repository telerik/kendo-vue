---
title: Reordering
description: "Use the configuration options of the TileLayout tiles and set their positions and dimensions as well as their resize, drag, and scrolling behavior in Vue projects."
slug: tiles_reordering_tilelayout
position: 20
---


# Reordering

Users can reorder the tiles by dragging the whole item space. Use the [reorderable]({% slug api_layout_tilelayoutitem %}#toc-reorderable) boolean property to configure dragging.

Dragging a tile in the direction of an adjacent tile will push the adjacent tile down on the next row but on the same column-line. The initial placement of the dragged tile can be filled by another, if it fits and if it's on the same column-line. Non-reorderable tiles can fill gaps from reordering other tiles.

> Note: The reordering functionality is enabled by default.


{% meta height:500 %}
{% embed_file tilelayout/tiles/reordering/main.vue preview %}
{% embed_file tilelayout/tiles/reordering/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the TileLayout]({% slug api_layout_tilelayoutprops %})
* [API Reference of the TileLayoutItem]({% slug api_layout_tilelayoutitem %})
