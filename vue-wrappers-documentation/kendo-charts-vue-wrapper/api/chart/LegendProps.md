---
title: legendProps Chart API
description: "API Index | legendProps"
api_reference: true
slug: api_chart_legendprops_wrapper
---

# LegendProps

### legend-align `String`

The horizontal alignment of the legend when `legend.position` is `top` or `bottom` and the vertical alignment of the legend when `legend.position` is `left` or `right`.

The supported values are:

* `start`&mdash;The legend is aligned to the start.
* `center`&mdash;The legend is aligned to the center.
* `end`&mdash;The legend is aligned to the end.

### legend-background `String`

The background color of the legend. Accepts any valid CSS color string, including hex and rgb.

### legend-border-color `String`

The color of the border. Accepts any valid CSS color string, including hex and rgb.

### legend-border-dash-type `String`

The dash type of the border.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### legend-border-width `Number`

The width (in pixels) of the border. By default, the border width is set to zero which means that the border will not appear.

### legend-height `Number`

The legend height when `legend.orientation` is set to `vertical`.

### legend-inactive-items-labels-color `String`

The text color of the labels. Accepts any valid CSS color string, including hex and rgb.

### legend-inactive-items-labels-font `String`

The font style of the labels.

### legend-inactive-items-labels-template `String | Function`

The template which renders the labels.

The template supports the following fields:

* `text`&mdash;The text of the legend item.
* `series`&mdash;The data series.
* `value`&mdash;The point value. Available for the Donut and Pie Charts.
* `percentage`&mdash;The point value represented as a percentage value. Available only for the Donut, Pie, and 100% Stacked charts.

### legend-item-cursor `String`

The cursor style of the legend item.

### legend-item-visual `Function`

A function for creating a custom visual for the legend items.

The available argument fields are:

* `options`&mdash;The item options.
* `createVisual`&mdash;A function for getting the default visual.
* `series`&mdash;The item series.
* `pointIndex`&mdash;The index of the point in the series. Available for the Pie, Donut, and Funnel series.

### legend-labels-color `String`

The text color of the labels. Accepts any valid CSS color string, including hex and rgb.

### legend-labels-font `String`

The font style of the labels.

### legend-labels-margin `Number`

The margin of the labels. A numeric value will set all margins.

### legend-labels-margin-bottom `Number`

The bottom margin of the labels.

### legend-labels-margin-left `Number`

The left margin of the labels.

### legend-labels-margin-right `Number`

The right margin of the labels.

### legend-labels-margin-top `Number`

The top margin of the labels.

### legend-labels-padding `Number`

The padding of the labels. A numeric value will set all paddings.

### legend-labels-padding-bottom `Number`

The bottom padding of the labels.

### legend-labels-padding-left `Number`

The left padding of the labels.

### legend-labels-padding-right `Number`

The right padding of the labels.

### legend-labels-padding-top `Number`

The top padding of the labels.

### legend-labels-template `String | Function`

The template which renders the labels.

The template supports the following fields:

* `text`&mdash;The text of the legend item.
* `series`&mdash;The data series.
* `value`&mdash;The point value. Available for the Donut and Pie Charts.
* `percentage`&mdash;The point value represented as a percentage value. Available only for the Donut, Pie, and 100% Stacked charts.

### legend-margin `Number`

The margin of the Chart legend. A numeric value will set all paddings.

### legend-margin-bottom `Number`

The bottom margin of the Chart legend.

### legend-margin-left `Number`

The left margin of the Chart legend.

### legend-margin-right `Number`

The right margin of the Chart legend.

### legend-margin-top `Number`

The top margin of the Chart legend.

### legend-offset-x `Number`

The X offset of the Chart legend. The offset is relative to the default position of the legend. For example, a value of `20` will move the legend 20 pixels to the right of its initial position. A negative value will move the legend to the left of its current position.

### legend-offset-y `Number`

The Y offset of the chart legend. The offset is relative to the current position of the legend. For example, a value of `20` will move the legend 20 pixels down from its initial position. A negative value will move the legend upwards from its current position.

### legend-orientation `String`

The orientation of the legend items.

The supported values are:

* `vertical`&mdash;The legend items are added vertically.
* `horizontal`&mdash;The legend items are added horizontally.

### legend-padding `Number`

The padding of the Chart legend. A numeric value will set all paddings.

### legend-padding-bottom `Number`

The bottom padding of the Chart legend.

### legend-padding-left `Number`

The left padding of the Chart legend.

### legend-padding-right `Number`

The right padding of the Chart legend.

### legend-padding-top `Number`

The top padding of the Chart legend.

### legend-position `String`

The positions of the Chart legend.

The supported values are:

* `top`&mdash;The legend is positioned on the top.
* `bottom`&mdash;The legend is positioned on the bottom.
* `left`&mdash;The legend is positioned on the left.
* `right`&mdash;The legend is positioned on the right.
* `custom`&mdash;The legend is positioned based on `legend.offsetX` and `legend.offsetY`.

### legend-reverse `Boolean`

If `legend-reverse` is set to `true`, the legend items will be reversed. Available in versions 2013.3.1306 and later.

### legend-spacing `Number`

The spacing between the labels in pixels when `legend.orientation` is `horizontal`.

### legend-visible `Boolean`

If `legend-visible` is set to `true`, the Chart will display the legend. By default, the chart legend is visible.

### legend-width `Number`

The legend width when `legend.orientation` is set to `horizontal`.

## Suggested Links

* [`Legend` in Kendo UI Chart for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/configuration/legend)
