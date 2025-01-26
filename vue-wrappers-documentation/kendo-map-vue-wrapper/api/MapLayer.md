---
title: MapLayer API
description: "API Index | MapLayer"
api_reference: true
slug: api_maplayercomponent
---

# MapLayer

## Directive

`kendo-map-layer`

## Parent Components

* [`kendo-map`]({% slug api_mapcomponent %})

## Props

### layers-layer-attribution `String`

The attribution for the layer. Accepts valid HTML.

### layers-layer-auto-bind `Boolean`

If `layers-layer-auto-bind` is set to `false`, the layer will not bind to the data source during initialization. In this case, data binding will occur when the `change` event of the data source is fired. By default, the Map will bind to the data source specified in the configuration.

### layers-layer-data-source `Object | Array`

The data source of the layer.

The supported values are:

* A JavaScript object which represents any valid data source configuration.
* A JavaScript array.
* An existing `kendo.data.DataSource` instance.

### layers-layer-extent `Array`

Specifies the extent of the region that is covered by this layer. If the specified area is out of view, the layer will be hidden. Accepts a four-element array which specifies the extent that is covered by this layer&mdash;North-West latitude, longitude, South-East latitude, longitude. If `layers-layer-extent` is not specified, the layer is always visible.

### layers-layer-key `String`

The API key for the layer. Currently supported only for Bing (tm) tile layers.

### layers-layer-imagery-set `String`

The Bing map tile types.

### layers-layer-culture `String`

The culture that will be used for the Bing map tiles.

### layers-layer-location-field `String`

The data item field which contains the marker (symbol) location. The field accepts an array of numbers which contains the latitude and longitude in decimal degrees. Requires you to set the `dataSource` option. Only applicable to the marker and bubble layers.

### layers-layer-shape `String`

The default marker shape for data-bound markers.

The supported predefined marker shapes are:

* `pinTarget`
* `pin`

Marker shapes are implemented as CSS classes on the marker `span.k-marker` element&mdash;for example, `pinTarget` is rendered as `k-marker-pin-target`.

### layers-layer-tile-size `Number`

The size (in pixels) of the image tile.

### layers-layer-title-field `String`

The data item field which contains the marker title. Requires you to set the `dataSource` option.

### layers-layer-tooltip-auto-hide `Boolean`

Specifies if the tooltip will be hidden when the mouse leaves the target element.

* If `layer-layer-tooltip-auto-hide` is set to `false`, the tooltip displays a **Close** button.
* If `layer-layer-tooltip-auto-hide` is set to `false`, `showAfter` is specified, and `showOn` is set to `mouseenter`, the Map will display the tooltip after the given timeout even if the element is no longer hovered over.

### layers-layer-tooltip-animation-close-effects `String`

The effect that will be used on closing the tooltip.

### layers-layer-tooltip-animation-close-duration `Number`

The duration of the animation.

### layers-layer-tooltip-animation-open-effects `String`

The effects tat will be used on opening the Tooltip.

### layers-layer-tooltip-animation-open-duration `Number`

The duration of the animation.

### layers-layer-tooltip-content `String | Function`

The text or the function whose results will be displayed within the tooltip. By default, the tooltip will display the content of the `title` attribute of the target element.

### layers-layer-tooltip-content-url `String`

A URL or request options from where the tooltip will load its content.

### layers-layer-tooltip-template `String`

The template for rendering the content of the tooltip.

The template supports the following fields:

* `location`&mdash;The marker location (a `kendo.dataviz.map.Location` instance).
* `marker`&mdash;The instance of the marker.

### layers-layer-tooltip-callout `Boolean`

Specifies if the tooltip callout will be displayed.

### layers-layer-tooltip-iframe `Boolean`

Explicitly states whether a content iframe will be created.

### layers-layer-tooltip-height `Number`

The height (in pixels) of the tooltip.

### layers-layer-tooltip-width `Number`

The width (in pixels) of the tooltip.

### layers-layer-tooltip-position `String`

The position that is relative to the target element at which the tooltip will be displayed.

The supported predefined values are:

* `bottom`
* `top`
* `left`
* `right`
* `center`

### layers-layer-tooltip-show-after `Number`

The delay (in milliseconds) before the tooltip is displayed. If `showOn` is set to `click` or `focus`, `layers-layer-tooltip-show-after` is ignored.

### layers-layer-tooltip-show-on `String`

The event on which the tooltip will be displayed.

The supported predefined values are:

* `mouseenter`
* `click`
* `focus`

### layers-layer-max-size `Number`

The maximum symbol size for the bubble layer symbols.

### layers-layer-min-size `Number`

The minimum symbol size for the bubble layer symbols.

### layers-layer-max-zoom `Number`

The maximum zoom level at which this layer will be displayed.

### layers-layer-min-zoom `Number`

The minimum zoom level at which this layer will be displayed.

### layers-layer-opacity `Number`

The opacity of the layer.

### layers-layer-subdomains `Array`

A list of subdomains that will be used for loading tiles. Alternating between different subdomains enables the parallel execution of more requests.

### layers-layer-symbol `String | Function`

The symbol that will be used for bubble layers.

The supported values are:

* `circle`&mdash;A circle.
* `square`&mdash;A square symbol
* A function&mdash;A symbol that is defined by the user.

  Has to accept an object with the following fields:

    * `center`&mdash;The symbol center on the current layer.
    * `size`&mdash;The size of the symbol.
    * `style`&mdash;The style of the symbol.
    * `dataItem`&mdash;The dataItem for creating the symbol.
    * `location`&mdash;The location of the data point.

  The return value of the function has to be `kendo.drawing.Shape`.

### layers-layer-type `String`

The layer type.

The supported types are:

* `bing`&mdash;A Bing (tm) tile layer.
* `tile`&mdash;A generic "slippy map" tile layer.
* `marker`&mdash;A data-bound marker layer.
* `shape`&mdash;A vector shape layer, that is, bound to GeoJSON data.
* `bubble`&mdash;A specialized vector shape layer for bubble maps.

### layers-layer-style-fill-color `String`

The default fill color for layer shapes. Accepts any valid CSS color string, including hex and rgb.

### layers-layer-style-fill-opacity `Number`

The default fill opacity (0 to 1) for layer shapes.

### layers-layer-style-stroke-color `String`

The default stroke color for layer shapes. Accepts any valid CSS color string, including hex and rgb.

### layers-layer-style-stroke-dash-type `Number`

The default dash type for layer shapes.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### layers-layer-style-stroke-opacity `Number`

The default stroke opacity (0 to 1) for layer shapes.

### layers-layer-style-stroke-width `Number`

The default stroke width for layer shapes.

### layers-layer-url-template `String`

The URL template for tile layers.

The template supports the following variables:

* `x`&mdash;The x coordinate of the tile.
* `y`&mdash;The y coordinate of the tile.
* `zoom`&mdash;The zoom level.
* `subdomain`&mdash;The subdomain for this tile.

### layers-layer-value-field `String`

The value field for bubble layer symbols. The data item field accepts a number.

### layers-layer-z-index `Number`

The `zIndex` for this layer. Layers are normally stacked in a declaration order&mdash;the last layer is on top.

## Suggested Links

* [`Layers` in Kendo UI Map for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/map/configuration/layers)
