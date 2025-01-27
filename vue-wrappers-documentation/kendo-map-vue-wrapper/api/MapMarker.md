---
title: MapMarker API
description: "API Index | MapMarker"
api_reference: true
slug: api_mapmarkercomponent
---

# MapMarker

## Directive

`kendo-map-marker`

## Parent Components

* [`kendo-map`]({% slug api_mapcomponent %})

## Props

### markers-marker-location `Array`

The marker location on the Map. Accepts coordinates in the `[Latitude, Longitude]` format.

### markers-marker-shape `String`

The shape of the marker.

The supported predefined marker shapes are:

* `pinTarget`
* `pin`

Marker shapes are implemented as CSS classes on the marker `span.k-marker` element&mdash;for example, `pinTarget` is rendered as `k-marker-pin-target`.

### markers-marker-title `String`

The title of the marker. Displayed as a browser tooltip.

### markers-marker-tooltip-auto-hide `Boolean`

Specifies if the tooltip will be hidden when the mouse leaves the target element.

* If `markers-marker-tooltip-auto-hide` is set to `false`, the tooltip displays a **Close** button.
* If `markers-marker-tooltip-auto-hide` is set to `false`, `showAfter` is specified, and `showOn` is set to `mouseenter`, the Map will display the tooltip after the given timeout even if the element is no longer hovered over.

### markers-marker-tooltip-animation-close-effects `String`

The effect that will be used on closing the tooltip.

### markers-marker-tooltip-animation-close-duration `Number`

The duration of the animation.

### markers-marker-tooltip-animation-open-effects `String`

The effect that will be used on opening the tooltip.

### markers-marker-tooltip-animation-open-duration `Number`

The duration of the animation.

### markers-marker-tooltip-content `String | Function`

The text or the function whose results will be displayed within the tooltip. By default, the tooltip will display the content of the `title` attribute of the target element.

### markers-marker-tooltip-content-url `String`

A URL or request options from where the tooltip will load its content.

### markers-marker-tooltip-template `String`

The template for rendering the content of the tooltip.

The template supports the following fields:

* `location`&mdash;The marker location (a `kendo.dataviz.map.Location` instance).
* `marker`&mdash;The instance of the marker.

### markers-marker-tooltip-callout `Boolean`

Specifies if the tooltip callout will be displayed.

### markers-marker-tooltip-iframe `Boolean`

Explicitly states whether the content iframe will be created.

### markers-marker-tooltip-height `Number`

The height (in pixels) of the tooltip.

### markers-marker-tooltip-width `Number`

The width (in pixels) of the tooltip.

### markers-marker-tooltip-position `String`

The position that is relative to the target element at which the tooltip will be displayed.

The supported predefined values are:

* `bottom`
* `top`
* `left`
* `right`
* `center`

### markers-marker-tooltip-show-after `Number`

The delay (in milliseconds) before the tooltip is displayed. If `showOn` is set to `click` or `focus`, `markers-marker-tooltip-show-after` is ignored.

### markers-marker-tooltip-show-on `String`

The event on which the tooltip will be displayed.

The supported predefined values are:

* `mouseenter`
* `click`
* `focus`

## Suggested Links

* [`Markers` in Kendo UI Map for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/map/configuration/markers)
