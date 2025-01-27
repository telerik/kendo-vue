---
title: Layers
page_title: Layers - Map - Kendo UI for Vue
description: "Set the different types of layers when using the Kendo UI Map wrapper in Vue projects."
slug: layers_map
position: 1
---

<div><WrapperBanner></WrapperBanner></div>

# Layers

The information that the Map component renders is organized into layers.

## Types of Layers

The available Map layers are:

* [Tile](#toc-tile)
* [Bing](#toc-bing)
* [Marker](#toc-marker)
* [Shape](#toc-shape)
* [Bubble](#toc-bubble)

### Tile

Tile layers are suitable for displaying:

* Raster maps from popular online providers such as [OpenStreetMap](https://www.openstreetmap.org/), [OpenWeatherMap](https://openweathermap.org/), [ArcGIS](https://developers.arcgis.com/en/), [Here (Nokia) Maps](https://developer.here.com/documentation/map-tile/topics/introduction.html), and others.
* Any other Map Tile service that supports the [WGS 84 projection standards](https://en.wikipedia.org/wiki/World_Geodetic_System).

{% meta height:560 %}
{% embed_file layers/tile/main.vue preview %}
{% embed_file layers/tile/main.js %}
{% endmeta %}

### Bing

[Microsoft Bing](https://msdn.microsoft.com/en-us/library/ff701713.aspx) provides dedicated support and requires you to [obtain an API key](https://msdn.microsoft.com/en-us/library/ff428642.aspx).

The following example demonstrates how to display an OpenStreetMap layer.

{% meta height:560 %}
{% embed_file layers/bing/main.vue preview %}
{% embed_file layers/bing/main.js %}
{% endmeta %}

### Marker

The Marker layer enables you to bind a collection of data and render markers on the Map.

{% meta height:560 %}
{% embed_file layers/marker/main.vue preview %}
{% embed_file layers/marker/main.js %}
{% endmeta %}

### Shape

The Shape layer enables you to bind the layer to GeoJson data and plot shapes on the Map.

{% meta height:560 %}
{% embed_file layers/shape/main.vue preview %}
{% embed_file layers/shape/main.js %}
{% endmeta %}


### Bubble

The Bubble layer draws circle or square shapes whose size is defined by the value of the data that is bound.

{% meta height:560 %}
{% embed_file layers/bubble/main.vue preview %}
{% embed_file layers/bubble/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Map for jQuery](https://docs.telerik.com/kendo-ui/controls/diagrams-and-maps/map/overview)
* [API Reference of the Map Widget](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/map)
