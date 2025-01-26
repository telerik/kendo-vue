---
title: QRCode API
description: "API Index | QRCode"
api_reference: true
slug: api_qrcodecomponent_wrapper
---

# QRCode

## Directive

`kendo-qrcode`

## Props

### background `String`

The background color of the QRCode ([`background` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/qrcode/configuration/background)). Accepts any valid CSS color string, including hex and rgb.

### border `Object`

The border of the QRCode ([`border` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/qrcode/configuration/border)). The supported composite props are available in [`BorderProps`]({% slug api_qrcode_borderprops_wrapper %}).

### color `String`

The color of the QRCode ([`color` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/qrcode/configuration/color)). Accepts any valid CSS color string, including hex and rgb.

### encoding `String`

The encoding mode used to encode the value ([`encoding` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/qrcode/configuration/encoding)).

The supported values are:

* `ISO_8859_1`&mdash;Supports all characters from the ISO/IEC 8859-1 character set.
* `UTF_8`&mdashh;Supports all Unicode characters.

### error-correction `String`

The error correction level that is used to encode the value ([`errorCorrection` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/qrcode/configuration/errorcorrection)).

The supported values are:

* `L`&mdash;Approximately seven percent of the code-words can be restored.
* `M`&mdash;Approximately 15% of the code-words can be restored.
* `Q`&mdash;Approximately 25% of the code-words can be restored.
* `H`&mdash;Approximately 30% of the code-words can be restored.

### padding `Number`

Sets the minimum distance in pixels that should be left between the border and the QR modules ([`padding` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/qrcode/configuration/padding)).

### render-as `String`

Sets the preferred rendering engine ([`renderAs` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/qrcode/configuration/renderas)). If `render-as` is not supported by the browser, the QRCode will switch to the first available mode.

The supported values are:

* `canvas`&mdash;Renders the QRCode as a `canvas` element, if available.
* `svg`&mdash;Renders the QRCode as an inline SVG document, if available.

### size `Number | String`

Specifies the size (in pixels) of the QRCode, for example, `200px` ([`size` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/qrcode/configuration/size)). Numeric values are treated as pixels. If no size is specified, the `size` will be determined from the width and height of the element. If the element has zero width or height, it will use the default value of 200 pixels.

### value `Number | String`

The value of the QRCode ([`value` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/qrcode/configuration/value)).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/qrcode). 

### kendoWidget

##### returns

Returns the Kendo UI QRCode instance.
