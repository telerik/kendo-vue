---
title: Custom Rendering
description: "Use the configuration options of the TileLayout to customize the rendering of its tiles in Vue projects."
slug: tiles_custom_rendering_tilelayout
position: 40
---

# TileLayout Tiles Custom Rendering

The TileLayout tiles enable you to customize the appearance of its elements as follows:
* [Defining the tiles' header and body separately](#toc-customizing-tiles-header-and-body)
* [Defining the design of each tile using a single template](#toc-customizing-the-whole-tile)

## Customizing Tile's Header and Body

The following example uses the [header](slug:api_layout_tilelayoutitem#toc-header) and [body](slug:api_layout_tilelayoutitem#toc-body) properties to separately re-define the content of the header and body in each tile. 

{% meta height:580 %}
{% embed_file tilelayout/tiles/custom-header-body/main.vue preview %}
{% embed_file tilelayout/tiles/custom-header-body/main.js %}
{% endmeta %}


## Customizing the Whole Tile

The following example uses the [item](slug:api_layout_tilelayoutitem#toc-item) property to re-define the whole template of each tile. 

{% meta height:580 %}
{% embed_file tilelayout/tiles/custom-rendering/main.vue preview %}
{% embed_file tilelayout/tiles/custom-rendering/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the TileLayout]({% slug api_layout_tilelayoutprops %})
* [API Reference of the TileLayoutItem]({% slug api_layout_tilelayoutitem %})
