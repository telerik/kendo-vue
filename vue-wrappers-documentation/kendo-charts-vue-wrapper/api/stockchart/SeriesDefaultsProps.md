---
title: seriesDefaultsProps StockChart API
description: "API Index | seriesDefaultsProps"
api_reference: true
slug: api_stockchart_seriesdefaultsprops_wrapper
---

# SeriesDefaultsProps

### series-defaults-area `Object`

The area configuration options. The default options for all Area series. For more information, refer to the `series` options.

### series-defaults-candlestick `Object`

The candlestick configuration options. The default options for all Candlestick series. For more information, refer to the `series` options.

### series-defaults-ohlc `Object`

The OHLC configuration options. The default options for all OHLC series. For more information, refer to the `series` options.

### series-defaults-border-color `String`

The color of the border.

### series-defaults-border-dash-type `String`

The dash type of the border.

### series-defaults-border-width `Number`

The width of the border.

### series-defaults-column `Object`

The column configuration options. The default options for all Column series. For more information, refer to the `series` options.

### series-defaults-gap `Number`

The distance between category clusters.

### series-defaults-labels-background `String`

The background color of the labels. Accepts any valid CSS color string, including hex and rgb.

### series-defaults-labels-border-color `String`

The color of the border.

### series-defaults-labels-border-dash-type `String`

The dash type of the border.

### series-defaults-labels-border-width `Number`

The width of the border.

### series-defaults-labels-color `String`

The text color of the labels. Accepts any valid CSS color string, including hex and rgb.

### series-defaults-labels-font `String`

The font style of the labels. labels

### series-defaults-labels-format `String`

The format of the labels.

### series-defaults-labels-margin `Number | Object`

The margin of the labels.

### series-defaults-labels-padding `Number | Object`

The padding of the labels.

### series-defaults-labels-template `String | Function`

The label template.

The template supports the following variables:

* `value`&mdash;The point value.
* `category`&mdash;The category name.
* `series`&mdash;The data series.
* `dataItem`&mdash;The original data item that is used to construct the point. Will be `null` if binding to an array.

### series-defaults-labels-visible `Boolean`

The visibility of the labels.

### series-defaults-line `Object`

The line configuration options. The default options for all Line series. For more information, refer to the `series` options.

### series-defaults-overlay `Object`

The overlay of the effects.

### series-defaults-pie `Object`

The pie configuration options. The default options for all Pie series. For more information, refer to the `series` options.

### series-defaults-spacing `Number`

The space between bars.

### series-defaults-stack `Boolean`

A Boolean value which indicates if the series will be stacked.

### series-defaults-stack-type `String`

The type of stack that will be plotted.

The supported types are:

* `normal`&mdash;The value of the stack is the sum of all points in the category (or group).
* `100%`&mdash;The value of the stack is always 100% (1.00). Points within the category (or group) are represented in percentage.

### series-defaults-type `String`

The default type of the series.

The supported values are:

* `area`
* `column`
* `line`
* `candlestick`
* `ohlc`
* `bullet`

### series-defaults-tooltip-background `String`

The background color of the tooltip. The default is determined by the series color.

### series-defaults-tooltip-border-color `String`

The color of the border.

### series-defaults-tooltip-border-width `Number`

The width of the border.

### series-defaults-tooltip-color `String`

The text color of the tooltip. The default value is the same as the series labels color.

### series-defaults-tooltip-font `String`

The tooltip font.

### series-defaults-tooltip-format `String`

The tooltip format.

### series-defaults-tooltip-padding `Number | Object`

The padding of the tooltip.

### series-defaults-tooltip-template `String | Function`

The tooltip template.

The template supports the following variables:

* `value`&mdash;The point value.
* `category`&mdash;The category name.
* `series`&mdash;The data series.
* `dataItem`&mdash;The original data item that is used to construct the point. Will be `null` if binding to an array.

### series-defaults-tooltip-visible `Boolean`

A value which indicates if the tooltip will be displayed.

## Suggested Links

* [`SeriesDefaults` in Kendo UI StockChart for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/configuration/seriesdefaults)
