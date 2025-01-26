---
title: ArcGauge API
description: "API Index | ArcGauge"
api_reference: true
slug: api_arcgaugecomponent_wrapper
---

# ArcGauge

## Directive

`kendo-arcgauge`

## Child Components

* [`kendo-arcgauge-color`]({% slug api_arcgaugecolorcomponent_wrapper %})

## Props

### center-template `String | Function`

The label template ([`centerTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/arcgauge/configuration/centertemplate)). The template supports the `value` variable which represents the value.

### color `String`

The color of the value pointer ([`color` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/arcgauge/configuration/color)). Accepts any valid CSS color string, including hex and rgb.

### colors `Array`

The color ranges of the value pointer ([`colors` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/arcgauge/configuration/colors)). The pointer color will be set to the color from the range that contains the current value.

### gauge-area `Object`

The configuration options for the Gauge area&mdash;the entire visible area of the Gauge ([`gaugeArea` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/arcgauge/configuration/gaugearea)). The supported composite props are available in [`GaugeAreaProps`]({% slug api_arcgauge_gaugeareaprops_wrapper %}).

### opacity `Number`

The opacity of the value pointer ([`opacity` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/arcgauge/configuration/opacity)).

### render-as `String`

Sets the preferred rendering engine ([`renderAs` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/arcgauge/configuration/renderas)).

If not supported by the browser, the Gauge will switch to the first available mode.

The supported values are:

* `svg`&mdash;Renders the RadialGauge as an inline SVG document if available.
* `canvas`&mdash;Renders the RadialGauge as a `canvas` element if available.

### scale `Object`

Configures the scale ([`scale` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/arcgauge/configuration/scale)). The supported composite props are available in [`ScaleProps`]({% slug api_arcgauge_scaleprops_wrapper %}).

### theme `String`

The theme of the ArcGauge ([`theme` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/arcgauge/configuration/theme)).

`theme` can be either a built-in theme or a `sass` theme. When `theme` is set to `sass`, the Diagram will read the variables from the SASS-based themes.

The supported values are:

* `sass`&mdash;A special value.
* `black`
* `blueopal`
* `bootstrap`
* `default`
* `highcontrast`
* `metro`
* `metroblack`
* `moonlight`
* `silver`
* `uniform`

### transitions `Boolean`

A value which indicates if the transition animations will be played ([`transitions` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/arcgauge/configuration/transitions)).

### value `Number`

The value of the ArcGauge ([`value` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/arcgauge/configuration/value)).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/arcgauge#methods). 

### kendoWidget

##### returns

Returns the Kendo UI ArcGauge instance.
