---
title: legendProps StockChart API
description: "API Index | legendProps"
api_reference: true
slug: api_stockchart_legendprops_wrapper
---

# LegendProps

### legend-background `String`

The background color of the legend. Accepts any valid CSS color string, including hex and rgb.

### legend-border-color `String`

The color of the border.

### legend-border-dash-type `String`

The dash type of the border.

### legend-border-width `Number`

The width of the border.

### legend-item-cursor `String`

The cursor style of the legend item.

### legend-item-visual `Function`

A function for creating a custom visual for the legend items.

The available argument fields are:

* `options`&mdash;The item options.
* `createVisual`&mdash;A function for getting the default visual.

### legend-labels-color `String`

The color of the labels. Accepts any valid CSS color string, including hex and rgb.

### legend-labels-font `String`

The font style of the labels.

### legend-labels-template `String`

The template which renders the labels.

The template supports the following fields:

* `text`&mdash;The text of the legend item.
* `series`&mdash;The data series.
* `value`&mdash;The point value. Available for the Donut and Pie Charts.
* `percentage`&mdash;The point value represented as a percentage value. Available only for the 100% Stacked charts.
* `dataItem`&mdash;The original data item that is used to construct the point.

### legend-margin `Number | Object`

The margin of the legend.

### legend-offset-x `Number`

The X offset from its position. The offset is relative to the current position of the legend. For example, a value of `20` will move the legend 20 pixels to the right of its initial position. A negative value will move the legend to the left of the current position.

### legend-offset-y `Number`

The Y offset from its position. The offset is relative to the current position of the legend. For example, a value of `20` will move the legend 20 pixels down from its initial position.  A negative value will move the legend upwards from the current position.

### legend-padding `Number | Object`

The padding of the legend.

### legend-position `String`

The positions of the legend.

### legend-reverse `Boolean`

If `legend-reverse` is set to `true`, the legend items will be reversed. Available as of version 2013.3.1306 and later.

### legend-visible `Boolean`

The visibility of the legend.

### legend-inactive-items-labels-color `String`

The color of the labels. Accepts any valid CSS color string, including hex and rgb.

### legend-inactive-items-labels-font `String`

The font style of the labels.

### legend-inactive-items-labels-template `String`

The template which renders the labels.

The template supports the following fields:

* `text`&mdash;The text of the legend item.
* `series`&mdash;The data series.
* `value`&mdash;The point value. Available for the Donut and Pie Charts.
* `percentage`&mdash;The point value represented as a percentage value. Available only for the 100% Stacked charts.
* `dataItem`&mdash;The original data item that is used to construct the point.

### legend-inactive-items-markers-color `String`

The color of the markers. Accepts any valid CSS color string, including hex and rgb.

## Suggested Links

* [`Legend` in Kendo UI StockChart for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/configuration/legend)
