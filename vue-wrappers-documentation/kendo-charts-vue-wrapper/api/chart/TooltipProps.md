---
title: tooltipProps Chart API
description: "API Index | tooltipProps"
api_reference: true
slug: api_chart_tooltipprops_wrapper
---

# TooltipProps

### tooltip-background `String`

The background color of the tooltip. Accepts any valid CSS color string, including hex and rgb.

### tooltip-border-color `String`

The color of the border.

### tooltip-border-width `Number`

The width (in pixels) of the border. By default, the border width is set to zero which means that the border will not appear.

### tooltip-color `String`

The text color of the tooltip. Accepts any valid CSS color string, including hex and rgb.

### tooltip-font `String`

The tooltip font.

### tooltip-format `String`

The format of the labels. Uses `kendo.format`.

The supported format placeholders are:

* Area, bar, column, funnel, line and pie{0}&mdash;value
* Bubble{0}&mdash;x value{1}&mdash;y value{2}&mdash;size value{3}&mdash;category name
* Scatter and scatterLine{0}&mdash;x value{1}&mdash;y value
* Candlestick and OHLC{0}&mdash;open value{1}&mdash;high value{2}&mdash;low value{3}&mdash;close value{4}&mdash;category name or RangeArea, rangeBar, rangeColumn{0}&mdash;from value{1}&mdash;to value

### tooltip-opacity `Number`

The opacity of the tooltip.

### tooltip-padding `Number`

The padding of the tooltip. A numeric value will set all paddings.

### tooltip-padding-bottom `Number`

The bottom padding of the tooltip.

### tooltip-padding-left `Number`

The left padding of the tooltip.

### tooltip-padding-right `Number`

The right padding of the tooltip.

### tooltip-padding-top `Number`

The top padding of the tooltip.

### tooltip-shared `Boolean`

If `tooltip-shared` is set to `true`, the Chart will display a single tooltip for every category.

### tooltip-shared-template `String | Function`

The template which renders the shared tooltip.

The template supports the following fields:

* `points`&mdash;The category points.
* `category`&mdash;The category name.

### tooltip-template `String | Function`

The template which renders the tooltip.

The template supports the following fields:

* `category`&mdash;The category name.
* `dataItem`&mdash;The original data item used to construct the point. Will be `null` if binding to array.
* `series`&mdash;The data series.
* `value`&mdash;The point value. Can be a number or object which contains each bound field.
* `runningTotal`&mdash;The sum of point values since the last `runningTotal` summary point. Available for the Waterfall series.
* `total`&mdash;The sum of all previous series values. Available for the Waterfall series.

### tooltip-visible `Boolean`

If `tooltip-visible` is set to `true`, the Chart will display the series tooltip. By default, the series tooltip is not displayed.

## Suggested Links

* [`Tooltip` in Kendo UI Chart for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/configuration/tooltip)
