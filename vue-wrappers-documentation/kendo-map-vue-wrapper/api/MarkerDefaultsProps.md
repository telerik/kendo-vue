---
title: markerDefaultsProps API
description: "API Index | markerDefaultsProps"
api_reference: true
slug: api_map_markerdefaultsprops
---

# MarkerDefaultsProps

### marker-defaults-shape `String`

The default marker shape.

The supported predefined marker shapes are:

* `pinTarget`
* `pin`

Marker shapes are implemented as CSS classes on the marker `span.k-marker` element&mdash;for example, `pinTarget` is rendered as `k-marker-pin-target`.

### marker-defaults-tooltip-auto-hide `Boolean`

Specifies if the tooltip will be hidden when the mouse leaves the target element.

* If `marker-defaults-tooltip-auto-hide` is set to `false`, the tooltip displays a **Close** button.
* If `marker-defaults-tooltip-auto-hide` is set to `false`, `showAfter` is specified, and `showOn` is set to `mouseenter`, the Map will display the tooltip after the given timeout even if the element is no longer hovered over.

### marker-defaults-tooltip-animation-close-effects `String`

The effect that will be used on closing the tooltip.

### marker-defaults-tooltip-animation-close-duration `Number`

The duration of the animation.

### marker-defaults-tooltip-animation-open-effects `String`

The effect that will be used on opening the tooltip.

### marker-defaults-tooltip-animation-open-duration `Number`

The duration of the animation.

### marker-defaults-tooltip-content `String | Function`

The text or the function whose results will be displayed within the tooltip. By default, the tooltip will display the content of the `title` attribute of the target element.

### marker-defaults-tooltip-content-url `String`

A URL or request options from where the tooltip will load its content.

### marker-defaults-tooltip-template `String`

The template for rendering the content of the tooltip.

The template supports the following fields:

* `location`&mdash;The marker location (a `kendo.dataviz.map.Location` instance).
* `marker`&mdash;The instance of the marker.

### marker-defaults-tooltip-callout `Boolean`

Specifies if the tooltip callout will be displayed.

### marker-defaults-tooltip-iframe `Boolean`

Explicitly states whether content iframe will be created.

### marker-defaults-tooltip-height `Number`

The height (in pixels) of the tooltip.

### marker-defaults-tooltip-width `Number`

The width (in pixels) of the tooltip.

### marker-defaults-tooltip-position `String`

The position that is relative to the target element at which the tooltip will be displayed.

The supported predefined values are:

* `bottom`
* `top`
* `left`
* `right`
* `center`

### marker-defaults-tooltip-show-after `Number`

The delay (in milliseconds) before the tooltip is displayed. If `showOn` is set to `click` or `focus`, `marker-defaults-tooltip-show-after` is ignored.

### marker-defaults-tooltip-show-on `String`

The event on which the tooltip will be displayed.

The supported predefined values are:

* `mouseenter`
* `click`
* `focus`

## Suggested Links

* [`MarkerDefaults` in Kendo UI Map for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/map/configuration/markerdefaults)
