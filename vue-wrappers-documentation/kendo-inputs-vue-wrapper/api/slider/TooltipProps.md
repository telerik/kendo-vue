---
title: tooltipProps API
description: "API Index | tooltipProps"
api_reference: true
slug: api_slider_tooltipprops_wrapper
---

# TooltipProps

### tooltip-enabled `Boolean`

* If `tooltip-enabled` is set to `true`, the tooltip of the Slider is enabled.
* If `tooltip-enabled` is set to `false`, the tooltip of the Slider is disabled.

### tooltip-format `String`

The `format` string for the text of the tooltip. The Slider supports the precision of up to ten digits after the decimals point.

> The applied format will also influence the appearance of the tick labels of the Slider.

### tooltip-template `String | Function`

The template of the tooltip.

The template supports the following variables:

* `value`&mdash;The current value in a regular Sider.
* `selectionStart` and `selectionEnd`&mdash;The current values in a RangeSlider.

## Suggested Links

* [`Tooltip` in Kendo UI Slider for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/slider/configuration/tooltip)
