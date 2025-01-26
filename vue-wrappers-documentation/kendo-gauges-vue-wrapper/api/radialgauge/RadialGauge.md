---
title: RadialGauge API
description: "API Index | RadialGauge"
api_reference: true
slug: api_radialgaugecomponent_wrapper
---

# RadialGauge

## Directive

`kendo-radialgauge`

## Child Components

* [`kendo-radialgauge-pointer`]({% slug api_radialgaugepointercomponent_wrapper %})

## Props

### gauge-area `Object`

The configuration options for the Gauge area&mdash;the entire visible area of the Gauge ([`gaugeArea` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/radialgauge/configuration/gaugearea)). The supported composite props are available in [`GaugeAreaProps`]({% slug api_radialgauge_gaugeareaprops_wrapper %}).

### pointer `Array`

The configuration options for the pointer ([`pointer` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/radialgauge/configuration/pointer)). `pointer` accepts an array of pointers each having its own configuration options.

### render-as `String`

Sets the preferred rendering engine ([`renderAs` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/radialgauge/configuration/renderas)). If not supported by the browser, the Gauge will switch to the first available mode.

The supported values are:

* `svg`&mdash;Renders the RadialGauge as an inline SVG document if available.
* `canvas`&mdash;Renders the RadialGauge as a `canvas` element if available.

### scale `Object`

Configures the scale ([`scale` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/radialgauge/configuration/scale)). The supported composite props are available in [`ScaleProps`]({% slug api_radialgauge_scaleprops_wrapper %}).

### theme `String`

The theme of the RadialGauge ([`theme` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/radialgauge/configuration/theme)).

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

A value which indicates if the transition animations will be played ([`transitions` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/radialgauge/configuration/transitions)).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/radialgauge#methods). 

### kendoWidget

##### returns

Returns the Kendo UI RadialGauge instance.
