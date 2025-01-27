---
title: tooltipProps StockChart API
description: "API Index | tooltipProps"
api_reference: true
slug: api_stockchart_tooltipprops_wrapper
---

# TooltipProps

### tooltip-background `String`

The background color of the tooltip. The default is determined from the series color.

### tooltip-border-color `String`

The color of the border.

### tooltip-border-width `Number`

The width of the border.

### tooltip-color `String`

The text color of the tooltip. The default is the same as the series labels color.

### tooltip-font `String`

The tooltip font.

### tooltip-format `String`

The tooltip format.

### tooltip-padding `Number | Object`

The padding of the tooltip.

### tooltip-template `String | Function`

The tooltip template.

The template supports the following variables:

* `value`&mdash;The point value.
* `category`&mdash;The category name.
* `series`&mdash;The data series.
* `dataItem`&mdash;The original data item that is used to construct the point. Will be `null` if binding to an array.

### tooltip-visible `Boolean`

A value which indicates if the tooltip will be displayed.

### tooltip-shared `Boolean`

A value which indicates if the tooltip will be shared.

### tooltip-shared-template `String`

The shared tooltip template.

The template supports the following variables:

* `points`&mdash;The category points.
* `category`&mdash;The category name.

## Suggested Links

* [`Tooltip` in Kendo UI StockChart for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/configuration/tooltip)
