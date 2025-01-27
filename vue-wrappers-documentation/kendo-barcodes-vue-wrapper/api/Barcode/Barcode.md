---
title: Barcode API
description: "API Index | Barcode"
api_reference: true
slug: api_barcodecomponent_wrapper
---

# Barcode

## Directive

`kendo-barcode`

## Props

### render-as `String`

Sets the preferred rendering engine. If `render-as` is not supported by the browser, the Barcode will switch to the first available mode ([`renderAs` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/barcode/configuration/renderas)).

The supported values are:

* `canvas`&mdash;Renders the Barcode as a `canvas` element, if available.
* `svg`&mdash;Renders the Barcode as inline SVG document, if available.

### background `String`

The background of the Barcode area. Accepts any valid CSS color string, including hex and rgb ([`background` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/barcode/configuration/background)).

### border `Object`

The border of the Barcode area ([`border` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/barcode/configuration/border)). The supported composite props are available in [`BorderProps`]({% slug api_barcode_borderprops_wrapper %}).

### checksum `Boolean`

If set to `true`, the Barcode will display the `checksum` digit next to the value in the text area ([`checksum` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/barcode/configuration/checksum)).

### color `String`

The color of the bar elements. Accepts any valid CSS color string, including hex and rgb ([`color` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/barcode/configuration/color)).

### height `Number`

The height (in pixels) of the Barcode ([`height` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/barcode/configuration/height)). Defaults to `100`.

### padding `Object`

The padding of the Barcode ([`padding` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/barcode/configuration/padding)). The supported composite props are available in [`PaddingProps`]({% slug api_barcode_paddingprops_wrapper %}).

### text `Object`

Can be set to a JavaScript object which represents the text configuration ([`text` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/barcode/configuration/text)). The supported composite props are available in [`TextProps`]({% slug api_barcode_textprops_wrapper %}).

### type `String`

The symbology (encoding) the Barcode will use ([`type` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/barcode/configuration/type)).

The supported values are:

* EAN8
* EAN13
* UPCE
* UPCA
* Code11
* Code39
* Code39Extended
* Code93
* Code93Extended
* Code128
* Code128A
* Code128B
* Code128C
* GS1-128
* MSImod10
* MSImod11
* MSImod1010
* MSImod1110
* POSTNET

### value `String`

The initial value of the Barcode ([`value` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/barcode/configuration/value)).

### width `Number`

The width (in pixels) of the Barcode ([`width` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/barcode/configuration/width)). Defaults to `300`.

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/barcode#methods). 

### kendoWidget

##### returns

Returns the Kendo UI Barcode instance.
