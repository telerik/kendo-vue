---
title: ChartSeriesItem Chart API
description: "API Index | ChartSeriesItem"
api_reference: true
slug: api_chartseriesitemcomponent_wrapper
---

# ChartSeriesItem

## Directive

`kendo-chart-series-item`

## Parent Components

* [kendo-chart](slug:api_chartcomponent_wrapper)
* [kendo-stockchart](slug:api_stockchartcomponent_wrapper)

## Props

### aggregate `String | Function`

The aggregate function that will apply for the date series. The `aggregate` function is used when a category, such as a year, month, or other, contains two or more points. The returned value of the function is displayed instead of the individual points.

The supported values are:

* `avg`&mdash;The average of all values for the date period.
* `count`&mdash;The number of values for the date period.
* `max`&mdash;Te highest value for the date period.
* `min`&mdash;The lowest value for the date period.
* `sum`&mdash;The sum of all values for the date period. If no data points are defined, defaults to `0`.
* `sumOrNull`&mdash;The sum of all values for the date period. If no data points are defined, defaults to `null`.
* `first`&mdash;The first value.
* `function` (values, series, dataItems, category)&mdash;A user-defined aggregate function. Returns a single value or a data item.
* `object`&mdash;(compound aggregate) Applicable to `candlestick`, `boxPlot`,  and ohlc `series`. Specifies the aggregate for each data item field.

### axis `String`

The name of the value axis that will be used.

### border-color `String | Function`

The color of the border. Accepts any valid CSS color string, including hex and rgb. By default,  `border-color` is set to color of the current series.

### border-dash-type `String | Function`

The dash type of the border.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### border-opacity `Number | Function`

The opacity of the border. By default,  the border is opaque.

### border-width `Number | Function`

The width (in pixels) of the border.

### category-axis `String`

The name of the category axis that will be uses for the series. If no `categoryAxis` is specified, the first axis will be used.

### category-field `String`

The data item field which contains the category name or date.

### close-field `String`

The data field which contains the `close` value.

### color `String | Function`

The series base color.

The supported values are:

* A CSS color string, including hex and rgb.
* A function (point)&mdash;A user-defined function that will be evaluated for each point. If the return value is `undefined`, it will assume the default series color.

### color-field `String`

The data item field which contains the series color.

### connectors-color `String | Function`

The color of the connector. Accepts any valid CSS color string, including hex and rgb.

### connectors-padding `Number`

The padding between the connector line and the label, and the connector line and the Donut Chart.

### connectors-width `Number`

The width of the connector line.

### current-field `String`

The data item field which contains the current value.

### dash-type `String`

The dash type of the Line Chart.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### data `Array`

The array of data items which represent the series data.

The supported settings are:

* An array of objects&mdash;each point is bound to the field which is specified through the `series.field` option.
* An array of numbers&mdash;Supported when the `series.type` option is set to `area`, `bar`, `column`, `donut`, `pie`, `line`, or `waterfall`.
* An array of arrays of numbers&mdash;Supported when the `series.type` option is set to `bubble`, `scatter`, `scatterLine`, `ohlc`, `rangeBar`, `rangeArea`, or polar series. Bubble series need arrays of an X value, a Y value and a `Size` value&mdash;for example, `[1, 1, 10]`. Scatter and Scatter Line series need arrays of an X value and a Y values. OHLC and Candlestick series need arrays of an open, high, low, and `closeRangeBar`. Range Area series need arrays of a `from` and `to` value.

### down-color `String | Function`

The series color when the `open` value is greater than the `close` value.

### down-color-field `String`

The data field which contains the color that is applied when the `open` value is greater than the `close` value.

### segment-spacing `Number`

The space (in pixels) between the different segments of the Funnel Chart.

### summary-field `String`

The data item field which contains the summary type for the Waterfall series. The summary columns are optional.

The supported types are:

* `runningTotal`&mdash;Displays the sum of all items since the last `runningTotal` point.
* `total`&mdash;Displays the sum of all previous items.

### neck-ratio `Number`

Specifies the ratio between the top base and the bottom base of the whole Chart. For example, if `neckRatio` is set to `3`, the top base is three times smaller than the bottom base.

### dynamic-slope `Boolean`

When `dynamic-slope` is set to `true`, the ratio of the bases of each segment is calculated based on the `currentDataItem.value`/`nextDataItem.value` ration. The last element is always created as a rectangle since no element follows.

### dynamic-height `Boolean`

When `dynamic-height` is set to `false`, all segments acquire the same height. Otherwise, the height of each segment is based on its value.

### error-bars-value `String | Number | Array | Function`

The value of the error bars.

The supported value types are:

* `stderr`&mdash;The standard error of the series values will be used to calculate the low and high value of the point.
* `stddev(n)`&mdash;The standard deviation of the series values will be used to calculate the low and high value of the point. Between the parentheses, you can specify a number that will be multiplied by the calculated standard deviation.
* `percentage(n)`&mdash;A percentage of the point value.
* A number that will be subtracted or added to the point value.
* An array that holds the difference between the low and high values of the point.
* A function that returns the point value of the `errorBars`.

### error-bars-visual `Function`

A function that can be used to create a custom visual for the error bars.

The supported argument fields are:

* `rect`&mdash;The `kendo.geometry.Rect` that defines where the visual will be rendered.
* `options`&mdash;The label options.
* `createVisual`&mdash;A function that can be used to get the default visual.
* `low`&mdash;The low value of the error bar.
* `high`&mdash;The high value of the error bar
* `sender`&mdash;The Chart instance (may be undefined).

### error-bars-x-value `String | Number | Array | Function`

The value of the `xAxis` error bars. For a list of the supported value types, refer to the `series.errorBars.value` option.

### error-bars-y-value `String | Number | Array | Function`

The value of the `yAxis` error bars. For a list of the supported value types, refer to the `series.errorBars.value` option.

### error-bars-end-caps `Boolean`

If `error-bars-end-caps` is set to `false`, the error bars caps will not be displayed. By default,  the caps are visible.

### error-bars-color `String`

The color of the error bars. Accepts any valid CSS color string, including hex and rgb.

### error-bars-line-width `Number`

The width of the line.

### error-bars-line-dash-type `String`

The dash type of the error bars line.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### error-low-field `String`

The data item field which contains the low value of the `series.errorBars`.

### error-high-field `String`

The data item field which contains the high value of the `series.errorBars`.

### x-error-low-field `String`

The data item field which contains the low value of the  xAxis `series.errorBars`.

### x-error-high-field `String`

The data item field which contains the high value of the xAxis `series.errorBars`.

### y-error-low-field `String`

The data item field which contains the low value of the yAxis `series.errorBars`.

### y-error-high-field `String`

The data item field which contains the high value of the yAxis `series.errorBars`.

### explode-field `String`

The data item field which contains a Boolean value that indicates whether the sector is exploded.

### field `String`

The data item field which contains the series value. The field name will be any valid JavaScript identifier and has to contain only alphanumeric or `$` or `_` characters and must not start with a digit.

### from-field `String`

The data item field which contains the `from` series value.

### to-field `String`

The data item field which contains the `to` series value.

### note-text-field `String`

The data item field which contains the `note` series text.

### lower-field `String`

The data item field which contains the `lower` series value.

### q1-field `String`

The data item field which contains the `q1` series value.

### median-field `String`

The data item field which contains the `median` series value.

### q3-field `String`

The data item field which contains the `q3` series value.

### upper-field `String`

The data item field which contains the `upper` series value.

### mean-field `String`

The data item field which contains the `mean` series value.

### outliers-field `String`

The data item field which contains the `outliers` series value.

### gap `Number`

The distance between categories expressed as a percentage of the bar width. For more information, refer to the related `spacing` setting.

### high-field `String`

The data field which contains the high value.

### highlight-border-color `String`

The color of the border. Accepts any valid CSS color string, including hex and rgb.

### highlight-border-opacity `Number`

The opacity of the border. By default,  the border is opaque.

### highlight-border-width `Number`

The width (in pixels) of the border. By default,  the border width is set to zero which means that the border will not appear.

### highlight-color `String`

The highlight color. Accepts any valid CSS color string, including hex and rgb.

### highlight-line-dash-type `String`

The dash type of the highlight line.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### highlight-line-color `String`

The line color. Accepts any valid CSS color string, including hex and rgb.

### highlight-line-opacity `Number`

The opacity of the line. By default, the border is opaque.

### highlight-line-width `Number`

The width of the line.

### highlight-opacity `Number`

The opacity of the highlighted points.

### highlight-toggle `Function`

A function that can be used to handle the toggling of the points highlight.

The supported argument fields are:

* `preventDefault`&mdash;A function that prevents the showing of the default highlight overlay.
* `show`&mdash;A Boolean value which indicates whether the highlight will be shown.
* `visual`&mdash;The visual element that will be highlighted.
* `category`&mdash;The point category.
* `dataItem`&mdash;The `dataItem` of the point.
* `value`&mdash;The value of the point.
* `series`&mdash;The point series.

### highlight-visible `Boolean`

If `highlight-visible` is set to `true`, the Chart will highlight the series when the user hovers over it with the mouse. By default, the Chart series highlighting is enabled.

### highlight-visual `Function`

A function that sets custom visual for the point highlight.

The supported argument fields are:

* `createVisual`&mdash;A function that gets the default visual.
* `rect`&mdash;The `kendo.geometry.Rect` that defines where the visual will be rendered.
* `visual`&mdash;The visual element that will be highlighted.
* `options`&mdash;The point options.
* `category`&mdash;The point category.
* `dataItem`&mdash;The data item of the point.
* `value`&mdash;The point value.
* `sender`&mdash;The Chart instance (may be undefined).
* `series`&mdash;The point series.
* `stackValue`&mdash;The cumulative point value on the stack. Available only for Stackable series.
* `percentage`&mdash;The point value which is represented as a percentage value. Available only for the Donut, Pie, and 100% Stacked Charts.
* `runningTotal`&mdash;The sum of point values since the last `runningTotal` summary point. Available for the Waterfall series.
* `total`&mdash;The sum of all previous series values. Available for the Waterfall series.
* `from`&mdash;The `from` point highlight visual options. Available for the Range Area and Vertical Range Area series.
* `to`&mdash;The `to` point highlight visual options. Available for the Range Area and Vertical Range Area series.

### hole-size `Number`

The diameter (in pixels) of the donut hole.

### labels-align `String`

The label alignment when `series.type` is set to `donut`, `funnel`, or `pie`.

The supported values  for `donut` and `pie` are:

* `circle`&mdash;The labels are positioned in a circle around the Chart.
* `column`&mdash;The labels are positioned in columns to the left and right of the Chart.

The supported values for `funnel` are:

* `center`&mdash;The labels are positioned in the center over the funnel segment.
* `right`&mdash;The labels are positioned on the right side of the Chart and, if the space is enough, do not overlap the funnel segments.
* `left`&mdash;The labels are positioned on the left side of the Chart and, if the space is enough, do not overlap the funnel segments.

### labels-background `String | Function`

The background color of the labels. Accepts any valid CSS color string, including hex and rgb.

### labels-border-color `String | Function`

The color of the border. Accepts any valid CSS color string, including hex and rgb.

### labels-border-dash-type `String | Function`

The dash type of the border.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### labels-border-width `Number | Function`

The width (in pixels) of the border. By default, the border width is set to zero which means that the border will not appear.

### labels-color `String | Function`

The text color of the labels. Accepts any valid CSS color string, including hex and rgb.

### labels-distance `Number`

The distance of the labels when `series.type` is set to `donut` or `pie`.

### labels-font `String | Function`

The font style of the labels.

### labels-format `String | Function`

The format of the labels. Uses `kendo.format`.

### labels-margin `Number`

The margin of the labels. A numeric value will set all margins.

### labels-margin-bottom `Number`

The bottom margin of the labels.

### labels-margin-left `Number`

The left margin of the labels.

### labels-margin-right `Number`

The right margin of the labels.

### labels-margin-top `Number`

The top margin of the labels.

### labels-padding `Number`

The padding of the labels. A numeric value will set all paddings.

### labels-padding-bottom `Number`

The bottom padding of the labels.

### labels-padding-left `Number`

The left padding of the labels.

### labels-padding-right `Number`

The right padding of the labels.

### labels-padding-top `Number`

The top padding of the labels.

### labels-position `String | Function`

The position of the labels.

The supported values are:

* `above`&mdash;The label is positioned at the top of the marker. Applicable for series that render points, including Bubble.
* `below`&mdash;The label is positioned at the bottom of the marker. Applicable for series that render points, including Bubble.
* `center`&mdash;The label is positioned at the point center. Applicable for the Bar, Column, Donut, Pie, Funnel, Radar Column, and Waterfall series.
* `insideBase`&mdash;The label is positioned inside, near the base of the bar. Applicable for Bar, Column, Waterfall series.
* `insideEnd`&mdash;The label is positioned inside, near the end of the point. Applicable for Bar, Column, Donut, Pie, Radar Column, and Waterfall series.
* `left`&mdash;The label is positioned to the left of the marker. Applicable for series that render points, including Bubble.
* `outsideEnd`&mdash;The label is positioned outside, near the end of the point. Applicable for Bar, Column, Donut, Pie, Radar Column, and Waterfall series. Not applicable for Stacked series.
* `right`&mdash;The label is positioned to the right of the marker. Applicable for series that render points, including Bubble.
* `top`&mdash;The label is positioned at the top of the segment. Applicable for the Funnel series.
* `bottom`&mdash;The label is positioned at the bottom of the segment. Applicable for the Funnel series.
* `auto`&mdash;The `from` and `to` labels area positioned at the top or bottom of the Range Area series or to the left or right in the Vertical Range Area series so that they are outside the filled area. Applicable for the Range Area and Vertical Range Area series.

### labels-rotation `String | Number`

The rotation angle of the labels. By default, the labels are not rotated.

### labels-template `String | Function`

The template which renders the chart series label.

The template supports the following fields:

* `category`&mdash;The category name. Available for the Area, Bar, Column, Bubble, Donut, Line, Pie, and Waterfall series.
* `dataItem`&mdash;The original data item used to construct the point. Will be `null` if binding to array.
* `percentage`&mdash;The point value which is represented as a percentage value. Available only for the Donut, Pie, and 100% Stacked charts.
* `series`&mdash;The data series.
* `stackValue`&mdash;The cumulative point value on the stack. Available only for the stackable series.
* `value`&mdash;The point value. Can be a number or object which contains each bound field.
* `runningTotal`&mdash;The sum of point values since the last `runningTotal` summary point. Available for the Waterfall series.
* `total`&mdash;The sum of all previous series values. Available for the Waterfall series.

### labels-visible `Boolean | Function`

If `labels-visible` is set to `true`, the Chart will display the series labels. By default, chart series labels are not displayed.

### labels-visual `Function`

A function that creates a custom visual for the labels.

The supported argument fields are:

* `text`&mdash;The label text.
* `rect`&mdash;The `kendo.geometry.Rect` that defines where the visual will be rendered.
* `options`&mdash;The label options.
* `createVisual`&mdash;A function that gets the default visual.
* `sender`&mdash;The Chart instance (may be undefined).
* `value`&mdash;The point value.
* `category`&mdash;The point category.
* `stackValue`&mdash;The cumulative point value on the stack. Available only for the stackable series.
* `dataItem`&mdash;The point data item.
* `series`&mdash;The point series.
* `percentage`&mdash;The point value which is represented as a percentage value. Available only for the Donut, Pie, and 100% Stacked charts.
* `runningTotal`&mdash;The sum of point values since the last `runningTotal` summary point. Available for the Waterfall series.
* `total`&mdash;The sum of all previous series values. Available for the Waterfall series.

### labels-from-background `String | Function`

The background color of the `from` labels. Accepts any valid CSS color string, including hex and rgb.

### labels-from-border-color `String | Function`

The color of the border. Accepts any valid CSS color string, including hex and rgb.

### labels-from-border-dash-type `String | Function`

The dash type of the border.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### labels-from-border-width `Number | Function`

The width (in pixels) of the border. By default, the border width is set to zero which means that the border will not appear.

### labels-from-color `String | Function`

The text color of the `from` labels. Accepts any valid CSS color string, including hex and rgb.

### labels-from-font `String | Function`

The font style of the `from` labels.

### labels-from-format `String | Function`

The format of the `from` labels. Uses `kendo.format`.

### labels-from-margin `Number`

The margin of the `from` labels. A numeric value will set all margins.

### labels-from-margin-bottom `Number`

The bottom margin of the `from` labels.

### labels-from-margin-left `Number`

The left margin of the `from` labels.

### labels-from-margin-right `Number`

The right margin of the `from` labels.

### labels-from-margin-top `Number`

The top margin of the `from` labels.

### labels-from-padding `Number`

The padding of the `from` labels. A numeric value will set all paddings.

### labels-from-padding-bottom `Number`

The bottom padding of the `from` labels.

### labels-from-padding-left `Number`

The left padding of the `from` labels.

### labels-from-padding-right `Number`

The right padding of the `from` labels.

### labels-from-padding-top `Number`

The top padding of the `from` labels.

### labels-from-position `String | Function`

The position of the `from` labels.

The supported values are:

* `center`&mdash;The label is positioned at the point center.
* `insideBase`&mdash;The label is positioned inside, near the base of the bar.
* `insideEnd`&mdash;The label is positioned inside, near the end of the point.
* `outsideEnd`&mdash;The label is positioned outside, near the end of the point.
* `above`&mdash;The label is positioned at the top of the marker. Applicable for `rangeArea` and `verticalRangeArea` series.
* `below`&mdash;The label is positioned at the bottom of the marker. Applicable for `rangeArea` and `verticalRangeArea` series.
* `left`&mdash;The label is positioned to the left of the marker. Applicable for `rangeArea` and `verticalRangeArea` series.
* `right`&mdash;The label is positioned to the right of the marker. Applicable for `rangeArea` and `verticalRangeArea` series..

### labels-from-template `String | Function`

The template which renders the chart series from label.

The template supports the following fields:

* `category`&mdash;The category name.
* `dataItem`&mdash;The original data item used to construct the point. Will be `null` if binding to array.
* `series`&mdash;The data series or value.
* `value`&mdash;The point value. Represents an object which contains the `from` and `to` values.

### labels-from-visible `Boolean | Function`

If set to true the chart will display the series from labels. By default, chart series from labels are not displayed.

### labels-to-background `String | Function`

The background color of the to labels. Accepts any valid CSS color string, including hex and rgb.


### labels-to-border-color `String | Function`

The color of the border. Accepts any valid CSS color string, including hex and rgb.

### labels-to-border-dash-type `String | Function`

The dash type of the border.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### labels-to-border-width `Number | Function`

The width (in pixels) of the border. By default, the border width is set to zero which means that the border will not appear.

### labels-to-color `String | Function`

The text color of the `to` labels. Accepts any valid CSS color string, including hex and rgb.

### labels-to-font `String | Function`

The font style of the `to` labels.

### labels-to-format `String | Function`

The format of the `to` labels. Uses `kendo.format`.

### labels-to-margin `Number`

The margin of the `to` labels. A numeric value will set all margins.

### labels-to-margin-bottom `Number`

The bottom margin of the `to` labels.

### labels-to-margin-left `Number`

The left margin of the `to` labels.

### labels-to-margin-right `Number`

The right margin of the `to` labels.

### labels-to-margin-top `Number`

The top margin of the `to` labels.

### labels-to-padding `Number`

The padding of the `to` labels. A numeric value will set all paddings.

### labels-to-padding-bottom `Number`

The bottom padding of the `to` labels.

### labels-to-padding-left `Number`

The left padding of the `to` labels.

### labels-to-padding-right `Number`

The right padding of the `to` labels.

### labels-to-padding-top `Number`

The top padding of the `to` labels.

### labels-to-position `String | Function`

The position of the `to` labels.

The supported values are:

* `center`&mdash;The label is positioned at the point center.
* `insideBase`&mdash;The label is positioned inside, near the base of the bar.
* `insideEnd`&mdash;The label is positioned inside, near the end of the point.
* `outsideEnd`&mdash;The label is positioned outside, near the end of the point.
* `above`&mdash;The label is positioned at the top of the marker. Applicable for `rangeArea` and `verticalRangeArea` series.
* `below`&mdash;The label is positioned at the bottom of the marker. Applicable for `rangeArea` and `verticalRangeArea` series.
* `left`&mdash;The label is positioned to the left of the marker. Applicable for `rangeArea` and `verticalRangeArea` series.
* `right`&mdash;The label is positioned to the right of the marker. Applicable for `rangeArea` and `verticalRangeArea` series.

### labels-to-template `String | Function`

The template which renders the chart series to label.

The template supports the following fields:

* `category`&mdash;The category name.
* `dataItem`&mdash;The original data item used to construct the point. Will be `null` if binding to array.
* `series`&mdash;The data series or value.
* `value`&mdash;The point value. Represents an object which contains the `from` and `to` values.

### labels-to-visible `Boolean | Function`

If `labels-to-visible` is set to `true`, the Chart will display the series to labels. By default, chart series `to` labels are not displayed.

### line `String`

The configuration options for the Chart line.

### line-color `String`

The line color. Accepts any valid CSS color string, including hex and rgb.

### line-opacity `Number`

The line opacity. By default, the line is opaque.

### line-width `Number`

The line width in pixels.

### line-style `String`

The supported values are:

* `normal`&mdash;The values will be connected by a straight line.
* `step`&mdash;The values will be connected by a line with a right angle.
* `smooth`&mdash;The values will be connected by a smooth line.

### low-field `String`

The data field which contains the `low` value.

### margin `Number | Object`

The margin around each Donut series (ring). A numeric value will set all margins.

### markers-background `String | Function`

The background color of the series markers.

### markers-border `Function`

The border of the markers.

### markers-border-color `String | Function`

The color of the border. Accepts any valid CSS color string, including hex and rgb.

### markers-border-width `Number | Function`

The width (in pixels) of the border. By default, the border width is set to zero which means that the border will not appear.

### markers-from-background `String | Function`

The background color of the markers.

### markers-from-border `Function`

The border of the markers.

### markers-from-border-color `String | Function`

The color of the border. Accepts any valid CSS color string, including hex and rgb.

### markers-from-border-width `Number | Function`

The width (in Pixels) of the border. By default, the border width is set to zero which means that the border will not appear.

### markers-from-size `Number | Function`

The marker size in pixels.

### markers-from-type `String | Function`

The markers shape.

The supported values are:

* `circle`&mdash;The markers shape is circular.
* `square`&mdash;The markers shape is square.
* `triangle`&mdash;The markers shape is triangular.
* `cross`&mdash;The markers shape is in the form of a cross.

### markers-from-visible `Boolean | Function`

If `markers-from-visible` is set to `true`, the Chart will display the series markers. By default, chart series markers are displayed.

### markers-from-visual `Function`

A function that can be used to create a custom visual for the markers.

The supported argument fields are:

* `rect`&mdash;The `kendo.geometry.Rect` that defines where the visual will be rendered.
* `options`&mdash;The marker options.
* `createVisual`&mdash;A function that gets the default visual.
* `category`&mdash;The category of the marker point.
* `dataItem`&mdash;The data item of the marker point.
* `value`&mdash;The value of the marker point.
* `sender`&mdash;The Chart instance.
* `series`&mdash;The series of ht emarker point.

### markers-from-rotation `Number | Function`

The rotation angle of the markers.

### markers-size `Number | Function`

The marker size in pixels.

### markers-to-background `String | Function`

The background color of the markers.

### markers-to-border `Function`

The border of the markers.

### markers-to-border-color `String | Function`

The color of the border. Accepts any valid CSS color string, including hex and rgb.

### markers-to-border-width `Number | Function`

The width (in pixels) of the border. By default, the border width is set to zero which means that the border will not appear.

### markers-to-size `Number | Function`

The marker size in pixels.

### markers-to-type `String | Function`

The markers shape.

The supported values are:

* `circle`&mdash;The markers shape is circular.
* `square`&mdash;The markers shape is square.
* `triangle`&mdash;The markers shape is triangular.
* `cross`&mdash;The markers shape is in the form of a cross.

### markers-to-visible `Boolean | Function`

If `markers-to-visible` is set to `true`, the Chart will display the series markers. By default, chart series markers are displayed.

### markers-to-visual `Function`

A function for creating a custom visual for the markers.

The supported argument fields are:

* `rect`&mdash;The `kendo.geometry.Rect` that defines where the visual will be rendered.
* `options`&mdash;The marker options.
* `createVisual`&mdash;A function that gets the default visual.
* `category`&mdash;The category of the marker point.
* `dataItem`&mdash;The data item of the marker point.
* `value`&mdash;The value of the marker point.
* `sender`&mdash;The Chart instance.
* `series`&mdash;The series of the marker point.

### markers-to-rotation `Number | Function`

The rotation angle of the markers.

### markers-type `String | Function`

The markers shape.

The supported values are:

* `circle`&mdash;The markers shape is circular.
* `square`&mdash;The markers shape is square.
* `triangle`&mdash;The markers shape is triangular.
* `cross`&mdash;The markers shape is in the form of a cross.

### markers-visible `Boolean | Function`

If `markers-visible` is set to `true`, the Chart will display the series markers. By default, chart series markers are displayed.

### markers-visual `Function`

A function that can be used to create a custom visual for the markers.

The supported argument fields are:

* `rect`&mdash;The `kendo.geometry.Rect` that defines where the visual will be rendered.
* `options`&mdash;The marker options.
* `createVisual`&mdash;A function that gets the default visual.
* `category`&mdash;The category of the marker point.
* `dataItem`&mdash;The data item of the marker point.
* `value`&mdash;The value of the marker point.
* `sender`&mdash;The Chart instance.
* `series`&mdash;The series of the marker point.

### markers-rotation `Number | Function`

The rotation angle of the markers.

### outliers-background `String | Function`

The background color of the series outliers.

### outliers-border `Function`

The border of the outliers.

### outliers-border-color `String | Function`

The color of the border. Accepts any valid CSS color string, including hex and rgb.

### outliers-border-width `Number | Function`

The width (in pixels) of the border. By default, the border width is set to zero which means that the border will not appear.

### outliers-size `Number | Function`

The marker size in pixels.

### outliers-type `String | Function`

The outliers shape.

The supported values are:

* `circle`&mdash;The shape is circular.
* `square`&mdash;The shape is square.
* `triangle`&mdash;The shape is triangular.
* `cross`&mdash;The shape is in the form of a cross.

### outliers-rotation `Number | Function`

The rotation angle of the outliers.

### extremes-background `String | Function`

The background color of the series outliers.

### extremes-border `Function`

The border of the extremes.

### extremes-border-color `String | Function`

The color of the border. Accepts any valid CSS color string, including hex and rgb.

### extremes-border-width `Number | Function`

The width (in pixels) of the border. By default, the border width is set to zero which means that the border will not appear.

### extremes-size `Number | Function`

The extremes size in pixels.

### extremes-type `String | Function`

The extremes shape.

The supported values are:

* `circle`&mdash;The marker shape is circular.
* `square`&mdash;The marker shape is square.
* `triangle`&mdash;The marker shape is triangular.
* `cross`&mdash;The marker is in the shape of a cross.

### extremes-rotation `Number | Function`

The rotation angle of the extremes.

### max-size `Number`

The maximum size of the Bubble Chart series marker.

### min-size `Number`

The minimum size of the Bubble Chart series marker.

### missing-values `String`

The behavior for handling missing values.

The supported values are:

* `gap`&mdash;The plot stops before the missing point and continues after it.
* `interpolate`&mdash;The value is interpolated from neighboring points.
* `zero`&mdash;The value is assumed to be zero.

### k-style `String`

The supported values are:

* `normal`&mdash;The values will be connected by a straight line.
* `step`&mdash;The values will be connected by a line with a right angle.
* `smooth`&mdash;The values will be connected by a smooth line.

### name `String`

The name of the Chart series which is visible in the legend.

### negative-color `String`

The color that will be used for the Bar, Column, or Waterfall series with negative values. Accepts any valid CSS color string, including hex and rgb.

### negative-values-color `String`

The color of the negative bubble values in the Chart.

### negative-values-visible `Boolean`

If `negative-values-visible` is set to `true`, the Chart will display the negative bubbles. By default, the negative bubbles are not displayed.

### opacity `Number`

The series opacity. By default, the series are opaque.

### open-field `String`

The data field which contains the `open` value.

### overlay-gradient `String`

The gradient of th eChart series.

The supported values are:

* `glass`&mdash;For the Bar, Column, and Candlestick series.
* `none`
* `roundedBevel`&mdash;For the Donut and Pie series.
* `sharpBevel`&mdash;For the Donut and Pie series.

### padding `Number`

The padding around the Chart (equal on all sides).

### size `Number`

The `or` radius (in pixels) of the Donut series. If `size` is not set, the available space is split evenly between the series.

### size-field `String`

The data field which contains the bubble size value.

### spacing `Number`

The distance between the series points within a category. Expressed as a percentage of the bar width. For more information, refer to the related `gap` setting.

### stack `Boolean | String`

A Boolean value which indicates if the series will be stacked. A string value is interpreted as `series.stack.group`.

### stack-type `String`

The type of stack that will be plotted.

The supported types are:

* `normal`&mdash;The value of the stack is the sum of all points in the category (or group).
* `100%`&mdash;The value of the stack is always 100% (1.00). Points within the category (or group) are represented as percentages.

### stack-group `String`

Indicates that the series will be stacked in a group with the specified name.

### start-angle `Number`

The start angle (in degrees) of the first donut or pie segment. Angles increase clockwise and zero is to the left. Negative values are acceptable.

### target-border `Function`

The border of the target.

### target-border-color `String | Function`

The color of the border.

### target-border-dash-type `String | Function`

The dash type of the target border.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### target-border-width `Number | Function`

The width (in pixels) of the border. By default, the border width is set to zero which means that the border will not appear.

### target-color `String | Function`

The target color.

### target-line-width `Number | Function`

The width of the line.

### target-field `String`

The data item field which contains the target value.

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

* Area, bar, column, line, pie, radarArea, radarColumn, and radarLine{0}&mdash;value
* Bubble{0}&mdash;x value{1}&mdash;y value{2}&mdash;size value{3}&mdash;category name
* Scatter, scatterLine{0}&mdash;x value{1}&mdash;y value
* PolarArea, polarLine and polarScatter{0}&mdash;x value (degrees){1}&mdash;y value
* Candlestick and OHLC{0}&mdash;open value{1}&mdash;high value{2}&mdash;low value{3}&mdash;close value{4}&mdash;category name or RangeArea, rangeBar, rangeColumn{0}&mdash;from value{1}&mdash;to value

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

### type `String`

The type of the series.

The supported types are:

* `area`
* `bar`
* `bubble`
* `bullet`
* `candlestick`
* `column`
* `donut`
* `funnel`
* `horizontalWaterfall`
* `line`
* `ohlc`
* `pie`
* `polarArea`
* `polarLine`
* `polarScatter`
* `radarArea`
* `radarColumn`
* `radarLine`
* `rangeArea`
* `rangeBar`
* `rangeColumn`
* `scatter`
* `scatterLine`
* `verticalArea`
* `verticalBoxPlot`
* `verticalBullet`
* `verticalLine`
* `verticalRangeArea`
* `waterfall`

### visible `Boolean`

Sets the `visible` property of a Chart series.

### visible-in-legend `Boolean`

A value which indicates whether to show in the legend the point category name in the Funnel, Donut, and Pie series, or the series name in other available series types.

### visible-in-legend-field `String`

The data item field which indicates whether to show the point category name in the legend.

### visual `Function`

A function that for creating a custom visual for the points. Applicable for the Bar, Column, Pie, Donut, Funnel, Line, Scatter Line, Range Bar, Range Column, and Waterfall series.

The supported argument fields are:

* `rect`&mdash;The `kendo.geometry.Rect` that defines where the visual will be rendered.
* `options`&mdash;The point options.
* `createVisual`&mdash;A function that gets the default visual.
* `category`&mdash;The point category.
* `dataItem`&mdash;The point data item.
* `value`&mdash;The point value.
* `stackValue`&mdash;The cumulative point value on the stack. Available only for Stackable series.
* `sender`&mdash;The Chart instance.
* `series`&mdash;The point series.
* `percentage`&mdash;The point value which is represented as a percentage value. Available only for the Donut, Pie, and 100% Stacked Charts.
* `runningTotal`&mdash;The sum of point values since the last `runningTotal` summary point. Available for the Waterfall series.
* `total`&mdash;The sum of all previous series values. Available for the Waterfall series.
* `radius`&mdash;The segment radius. Available for the Donut and Pie series.
* `innerRadius`&mdash;The segment inner radius. Available for the Donut series.
* `startAngle`&mdash;The segment start angle. Available for the Donut and Pie series.
* `endAngle`&mdash;The segment end angle. Available for the Donut and Pie series.
* `center`&mdash;The segment center point. Available for the Donut and Pie series.
* `points`&mdash;The segment points. Available for the Funnel, Line, and Scatter Line series.

### width `Number`

The line width.

### x-axis `String`

The name of the X axis that will be used. For the Polar series, the xAxis range is expressed in degrees.

### x-field `String`

The data item field which contains the X value.

### y-axis `String`

The name of the Y axis that will be used. Available for the Bubble, Scatter, Scatter Line, and Polar series.

### y-field `String`

The data item field which contains the Y value.

### notes-position `String`

The position of the series note.

The supported values are:

* `top`&mdash;The note is positioned on the top.
* `bottom`&mdash;The note is positioned in the bottom.
* `left`&mdash;The note is positioned on the left.
* `right`&mdash;The note is positioned on the right.

### notes-icon-background `String`

The background color of the notes icon.

### notes-icon-border-color `String`

The border color of the icon.

### notes-icon-border-width `Number`

The border width of the icon.

### notes-icon-size `Number`

The size of the icon.

### notes-icon-type `String`

The icon shape.

The supported values are:

* `circle`&mdash;The marker shape is circular.
* `square`&mdash;The marker shape is square.
* `triangle`&mdash;The marker shape is triangular.
* `cross`&mdash;The marker is in the shape of a cross.

### notes-icon-visible `Boolean`

The icon visibility.

### notes-label-background `String`

The background color of the label. Accepts any valid CSS color string, including hex and rgb.

### notes-label-border-color `String`

The color of the border. Accepts any valid CSS color string, including hex and rgb.

### notes-label-border-dash-type `String`

The dash type of the border.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### notes-label-border-width `Number`

The width (inn pixels) of the border. By default, the border width is set to zero which means that the border will not appear.

### notes-label-color `String`

The text color of the label. Accepts any valid CSS color string, including hex and rgb.

### notes-label-font `String`

The font style of the label.

### notes-label-template `String | Function`

The template which renders the labels. The template supports the `value` field which represents the point value.

### notes-label-visible `Boolean`

If `notes-label-visible` is set to `true`, the Chart will display the series notes label. By default, the series notes labels are visible.

### notes-label-rotation `Number`

The rotation angle of the label. By default, the labels are not rotated.

### notes-label-format `String`

The format for displaying the notes label. Uses `kendo.format`. Contains one placeholder (`{0}`) which represents the axis value.

### notes-label-position `String`

The position of the labels.

The supported values are:

* `inside`&mdash;The label is positioned inside the icon.
* `outside`&mdash;The label is positioned outside the icon.

### notes-line-dash-type `String`

The dash type of the note line.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### notes-line-width `Number`

The line width of the notes.

### notes-line-color `String`

The line color of the notes.

### notes-line-length `Number`

The length of the connecting lines in pixels.

### notes-visual `Function`

A function that for creating a custom visual for the notes.

The supported argument fields are:

* `rect`&mdash;The `kendo.geometry.Rect` that defines where the visual will be rendered.
* `options`&mdash;The note options.
* `createVisual`&mdash;A function that for getting the default visual.
* `category`&mdash;The category of the note point.
* `dataItem`&mdash;The data item of the note point.
* `value`&mdash;The value of the note point.
* `sender`&mdash;The Chart instance.
* `series`&mdash;The series of the note point.
* `text`&mdash;The note text.

### z-index `Number`

An optional Z-index for changing the default stacking order of series. The series with the highest Z-index will be placed on top. Series with no Z-index use the default stacking order based on the series type. For example, Line series are on top and followed by the Bar and Area series.

## Suggested Links

* [`Series` in Kendo UI Chart for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/configuration/series)
