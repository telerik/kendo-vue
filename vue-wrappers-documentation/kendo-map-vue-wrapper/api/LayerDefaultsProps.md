---
title: layerDefaultsProps API
description: "API Index | layerDefaultsProps"
api_reference: true
slug: api_map_layerdefaultsprops
---

# LayerDefaultsProps

### layer-defaults-marker-shape `String`

The default marker shape for all marker layers.

The supported predefined marker shapes are:

* `pinTarget`
* `pin`

Marker shapes are implemented as CSS classes on the `span.k-marker` marker element&mdash;for example, `pinTarget` is rendered as `k-i-marker-pin-target`.

### layer-defaults-marker-tooltip-auto-hide `Boolean`

Specifies if the tooltip will be hidden when the mouse leaves the target element.

* If `layer-defaults-marker-tooltip-auto-hide` is set to `false`, the tooltip displays a **Close** button.
* If `layer-defaults-marker-tooltip-auto-hide` is set to `false`, `showAfter` is specified, and `showOn` is set to `mouseenter`, the Map will display the tooltip after the given timeout even if the element is no longer hovered over.

### layer-defaults-marker-tooltip-animation-close-effects `String`

The effects that will be displayed on closing the tooltip.

### layer-defaults-marker-tooltip-animation-close-duration `Number`

The duration of the animation.

### layer-defaults-marker-tooltip-animation-open-effects `String`

The effects that will be displayed on opening the tooltip.

### layer-defaults-marker-tooltip-animation-open-duration `Number`

The duration of the animation.

### layer-defaults-marker-tooltip-content `String | Function`

The text or the function whose results will be displayed within the tooltip. By default, the tooltip will display the content of the `title` attribute of the target element.

### layer-defaults-marker-tooltip-content-url `String`

A URL or the request options from which the tooltip will load its content.

### layer-defaults-marker-tooltip-template `String`

The template which renders the content of the tooltip.

The template supports the following fields:

* `location`&mdash;The location of the marker (the `kendo.dataviz.map.Location` instance).
* `marker`&mdash;The instance of the marker.

### layer-defaults-marker-tooltip-callout `Boolean`

Specifies if the tooltip callout will be displayed.

### layer-defaults-marker-tooltip-iframe `Boolean`

Explicitly states whether content iframe will be created.

### layer-defaults-marker-tooltip-height `Number`

The height (in pixels) of the tooltip.

### layer-defaults-marker-tooltip-width `Number`

The width (in pixels) of the tooltip.

### layer-defaults-marker-tooltip-position `String`

The position which is relative to the target element and at which the tooltip will be displayed.

The supported predefined values are;

* `bottom`
* `top`
* `left`
* `right`
* `center`

### layer-defaults-marker-tooltip-show-after `Number`

The delay (in milliseconds) before the tooltip is displayed. If `showOn` is set to `click` or `focus`, `layer-defaults-marker-tooltip-show-after` is ignored.

### layer-defaults-marker-tooltip-show-on `String`

The event on which the tooltip will be displayed.

The supported predefined values are:

* `mouseenter`
* `click`
* `focus`

### layer-defaults-marker-opacity `Number`

The opacity of all marker layers.

### layer-defaults-shape-attribution `String`

The attribution for all shape layers.

### layer-defaults-shape-opacity `Number`

The opacity of all shape layers.

### layer-defaults-shape-style-fill-color `String`

The default fill color for layer shapes. Accepts any valid CSS color string, including hex and rgb.

### layer-defaults-shape-style-fill-opacity `Number`

The default fill opacity (0 to 1) for layer shapes.

### layer-defaults-shape-style-stroke-color `String`

The default stroke color for layer shapes. Accepts any valid CSS color string, including hex and rgb.

### layer-defaults-shape-style-stroke-dash-type `String`

The default dash type for layer shapes.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### layer-defaults-shape-style-stroke-opacity `Number`

The default stroke opacity (0 to 1) for layer shapes.

### layer-defaults-shape-style-stroke-width `Number`

The default stroke width for layer shapes.

### layer-defaults-bubble-attribution `String`

The attribution for all bubble layers.

### layer-defaults-bubble-opacity `Number`

The opacity of all bubble layers.

### layer-defaults-bubble-max-size `Number`

The maximum symbol size for bubble layer symbols.

### layer-defaults-bubble-min-size `Number`

The minimum symbol size for bubble layer symbols.

### layer-defaults-bubble-style-fill-color `String`

The default fill color for bubble layer symbols. Accepts any valid CSS color string, including hex and rgb.

### layer-defaults-bubble-style-fill-opacity `Number`

The default fill opacity (0 to 1) for layer symbols.

### layer-defaults-bubble-style-stroke-color `String`

The default stroke color for bubble layer symbols. Accepts any valid CSS color string, including hex and rgb.

### layer-defaults-bubble-style-stroke-dash-type `String`

The default dash type for layer symbols.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### layer-defaults-bubble-style-stroke-opacity `Number`

The default stroke opacity (0 to 1) for bubble layer symbols.

### layer-defaults-bubble-style-stroke-width `Number`

The default stroke width for bubble layer symbols.

### layer-defaults-bubble-symbol `String | Function`

The default symbol for bubble layers.

The supported values are:

* `circle`&mdash;The markers shape is circular.
* `square`&mdash;The markers shape is square.
* A function&mdash;A symbol that is defined by the user.

  Has to accept an object with the following fields:

    * `center`&mdash;The symbol center on the current layer.
    * `size`&mdash;The size of the symbol.
    * `style`&mdash;The style of the symbol.
    * `dataItem`&mdash;The dataItem for creating the symbol.
    * `location`&mdash;The location of the data point.

  The return value of the function has to be `kendo.drawing.Shape`.

### layer-defaults-tile-size `Number`

The size of the image tile in pixels.

### layer-defaults-tile-url-template `String`

The URL template for tile layers.

The template supports the following variables:

* `x`&mdash;The x coordinate of the tile.
* `y`&mdash;The y coordinate of the tile.
* `zoom`&mdash;The zoom level.
* `subdomain`&mdash;The subdomain for this tile.

### layer-defaults-tile-attribution `String`

The attribution of all tile layers.

### layer-defaults-tile-subdomains `Array`

The subdomain of all tile layers.

### layer-defaults-tile-opacity `Number`

The opacity of all tile layers.

### layer-defaults-bing-attribution `String`

The attribution of all Bing (tm) layers.

### layer-defaults-bing-opacity `Number`

The opacity of all Bing (tm) tile layers.

### layer-defaults-bing-key `String`

The key of all Bing (tm) tile layers.

### layer-defaults-bing-imagery-set `String`

The map tile types of Bing.

### layer-defaults-bing-culture `String`

The culture that will be used for the Bing map tiles.

## Suggested Links

* [`LayerDefaults` in Kendo UI Map for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/map/configuration/layerdefaults)
