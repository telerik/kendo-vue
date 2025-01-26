---
title: ColorPalette API
description: "API Index | ColorPalette"
api_reference: true
slug: api_colorpalettecomponent_wrapper
---

# ColorPalette

## Directive

`kendo-colorpalette`

## Props

### palette `String | Array`

The color palette that will be displayed ([`palette` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/colorpalette/configuration/palette)).

The supported values are:

* A string with comma-separated colors in hex representation.
* An array of `kendo.Color` object objects.
* An arrays of strings that `parseColor` understands.  

Alternatively, to get the default simple palette, pass `basic` and to get the web-safe palette, pass `websafe`.

### columns `Number`

The number of columns that will be displayed ([`columns` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/colorpalette/configuration/columns)).  When you use the "websafe" palette, this will automatically default to 18.

### tile-size `Number | Object`

The size of a color cell ([`tileSize` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/colorpalette/configuration/tilesize)). The supported composite props are available in [`TileSizeProps`]({% slug api_colorpalette_tilesizeprops_wrapper %}).

### value `String`

The initially selected color ([`value` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/colorpalette/configuration/value)).

## Events

### change: `Function`

Fires when a new color was changed ([`change` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/colorpalette/events/change).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/colorpalette#methods). 

### kendoWidget

##### returns

Returns the Kendo UI ColorPalette instance.
