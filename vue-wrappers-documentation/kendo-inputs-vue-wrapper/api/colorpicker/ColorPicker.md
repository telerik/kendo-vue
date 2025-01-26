---
title: ColorPicker API
description: "API Index | ColorPicker"
api_reference: true
slug: api_colorpickercomponent_wrapper
---

# ColorPicker

## Directive

`kendo-colorpicker`

## Props

### buttons `Boolean`

Specifies whether the ColorPicker will display the **Apply** and **Cancel** buttons ([`buttons` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/colorpicker/configuration/buttons)). Applicable only for the HSV selector when a palette is not specified.

### clear-button `Boolean`

Specifies whether the ColorPicker will display the **Clear color** button ([`clearButton` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/colorpicker/configuration/clearbutton)). Applicable only for the HSV selector when a palette is not specified.

### columns `Number`

The number of columns that will be displayed in the color drop-down when a palette is specified ([`columns` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/colorpicker/configuration/columns)). `columns` is automatically initialized for the `basic` and `web-safe` palettes. If you use a custom palette, then you can set `columns` to a value that indicates your colors.

### tile-size `Number | Object`

The size of a color cell ([`tileSize` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/colorpicker/configuration/tilesize)). The supported composite props are available in [`TileSizeProps`]({% slug api_colorpicker_tilesizeprops_wrapper %}).

### messages `Object`

Allows the localization of the strings that are used in the ColorPicker ([`messages` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/colorpicker/configuration/messages)). The supported composite props are available in [`MessagesProps`]({% slug api_colorpicker_messagesprops_wrapper %}).

### palette `String | Array`

When `palette` receives an argument different from `null`, the drop-down will be a simple ColorPicker that lists the colors ([`palette` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/colorpicker/configuration/palette)).

The supported values are:

* `basic`&mdash;Displays 20 basic colors.
* `websafe`&mdash;Displays the `web-safe` color palette.
* A string with colors in HEX representation that are separated with commas&mdashh;Displays a palette.
* An array of colors&mdashh;Displays a palette. The passed array can contain strings that are supported by `parseColor` or `color` objects.

If `palette` is missing or is `null`, the ColorPicker will display the HSV selector.

### opacity `Boolean`

(Applicable only for the HSV selector) If `opacity` is set to `true`, the ColorPicker will display the opacity slider  ([`opacity` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/colorpicker/configuration/opacity)).

> Currently, `<input type=`color`>` in HTML5 does not support opacity.

### preview `Boolean`

(Applicable only for the HSV selector) Displays the color `preview` element along with an input field where the user can paste a color in a CSS-supported notation ([`preview` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/colorpicker/configuration/preview)).

### tool-icon `String`

A CSS class name that will display an icon in the ColorPicker button ([`toolIcon` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/colorpicker/configuration/toolicon)).

### value `String`

The initially selected color ([`value` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/colorpicker/configuration/value)).

> When the ColorPicker is initialized from an `<input>` element, the initial color will be decided by the field instead.

## Events

### change: `Function`

Fires when a color was selected by clicking the color itself in the simple ColorPicker, or the `Enter`, or the **Apply** button in the HSV picker ([`change` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/colorpicker/events/change).

### select: `Function`

Fires as a new color is displayed in the drop-down picker ([`select` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/colorpicker/events/select). The value can be different from `final`&mdash;for example, `select` is triggered when the sliders in the HSV selector are dragged. However, pressing the `Esc` key cancels the selection and the color will revert to the original value.

### open: `Function`

Fires when the ColorPicker popup is opening ([`open` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/colorpicker/events/open).

### close: `Function`

Fires when the ColorPicker popup is closing ([`close` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/colorpicker/events/close).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/colorpicker#methods). 

### kendoWidget

##### returns

Returns the Kendo UI ColorPicker instance.
