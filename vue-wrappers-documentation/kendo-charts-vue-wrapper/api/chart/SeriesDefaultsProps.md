---
title: seriesDefaultsProps Chart API
description: "API Index | seriesDefaultsProps"
api_reference: true
slug: api_chart_seriesdefaultsprops_wrapper
---

# SeriesDefaultsProps

### series-defaults-area `Object`

The series options of the Area Charts. Accepts all values the `series` options supports.

### series-defaults-bar `Object`

The series options of the Bar Charts. Accepts all values the `series` options supports.

### series-defaults-border-color `String`

The color of the border. Accepts any valid CSS color string, including hex and rgb.

### series-defaults-border-dash-type `String`

The dash type of the series Chart border.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### series-defaults-border-width `Number`

The width (in pixels) of the border. By default, the border width is set to zero which means that the border will not appear.

### series-defaults-bubble `Object`

The series options of the Bubble Charts. Accepts all values the `series` options supports.

### series-defaults-candlestick `Object`

The series options of the Candlestick Charts. Accepts all values the `series` options supports.

### series-defaults-column `Object`

The series options of the Column Charts. Accepts all values the `series` options supports.

### series-defaults-donut `Object`

The series options of the Donut Charts. Accepts all values the `series` options supports.

### series-defaults-gap `Number`

The distance between the category clusters.

### series-defaults-labels-background `String`

The background color of the labels. Accepts any valid CSS color string, including hex and rgb.

### series-defaults-labels-border-color `String`

The color of the border. Accepts any valid CSS color string, including hex and rgb.

### series-defaults-labels-border-dash-type `String`

The dash type of the border.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### series-defaults-labels-border-width `Number`

The width (in pixels) of the border. By default, the border width is set to zero which means that the border will not appear.

### series-defaults-labels-color `String`

The text color of the labels. Accepts any valid CSS color string, including hex and rgb.

### series-defaults-labels-font `String`

The font style of the labels.

### series-defaults-labels-format `String`

The format of the labels. Uses `kendo.format`.

### series-defaults-labels-margin `Number`

The margin of the labels. A numeric value will set all margins.

### series-defaults-labels-margin-bottom `Number`

The bottom margin of the labels.

### series-defaults-labels-margin-left `Number`

The left margin of the labels.

### series-defaults-labels-margin-right `Number`

The right margin of the labels.

### series-defaults-labels-margin-top `Number`

The top margin of the labels.

### series-defaults-labels-padding `Number`

The padding of the labels. A numeric value will set all margins.

### series-defaults-labels-padding-bottom `Number`

The bottom padding of the labels.

### series-defaults-labels-padding-left `Number`

The left padding of the labels.

### series-defaults-labels-padding-right `Number`

The right padding of the labels.

### series-defaults-labels-padding-top `Number`

The top padding of the labels.

### series-defaults-labels-rotation `String | Number`

The rotation angle of the labels. By default, the labels are not rotated.

### series-defaults-labels-template `String | Function`

The template which renders the chart series label.

The template supports the following fields:

* `category`&mdash;The category name. Available for the Area, Bar, Column, Bubble, Donut, Line, Pie, and Waterfall series.
* `dataItem`&mdash;The original data item used to construct the point. Will be `null` if binding to array.
* `percentage`&mdash;The point value which is represented as a percentage value. Available only for the Donut, Funnel, Pie series.
* `series`&mdash;The data series.
* `value`&mdash;The point value. Can be a number or an object which contains each bound field.
* `runningTotal`&mdash;The sum of point values since the last `runningTotal` summary point. Available for the Waterfall series.
* `total`&mdash;The sum of all previous series values. Available for the Waterfall series.

### series-defaults-labels-visible `Boolean`

If `series-defaults-labels-visible` is set to `true`, the Chart will display the series labels. By default, chart series labels are not displayed.

### series-defaults-labels-visual `Function`

A function that can be used to create a custom visual for the labels.

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

### series-defaults-labels-from-background `String`

The background color of the from labels. Accepts any valid CSS color string, including hex and rgb.

### series-defaults-labels-from-border-color `String`

The color of the border. Accepts any valid CSS color string, including hex and rgb.

### series-defaults-labels-from-border-dash-type `String`

The dash type of the border.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### series-defaults-labels-from-border-width `Number`

The width (in pixels) of the border. By default, the border width is set to zero which means that the border will not appear.

### series-defaults-labels-from-color `String`

The text color of the `from` labels. Accepts any valid CSS color string, including hex and rgb.

### series-defaults-labels-from-font `String`

The font style of the `from` labels.

### series-defaults-labels-from-format `String`

The format of the `from` labels. Uses `kendo.format`.

### series-defaults-labels-from-margin `Number`

The margin of the `from` labels. A numeric value will set all margins.

### series-defaults-labels-from-margin-bottom `Number`

The bottom margin of the `from` labels.

### series-defaults-labels-from-margin-left `Number`

The left margin of the `from` labels.

### series-defaults-labels-from-margin-right `Number`

The right margin of the `from` labels.

### series-defaults-labels-from-margin-top `Number`

The top margin of the `from` labels.

### series-defaults-labels-from-padding `Number`

The padding of the `from` labels. A numeric value will set all paddings.

### series-defaults-labels-from-padding-bottom `Number`

The bottom padding of the `from` labels.

### series-defaults-labels-from-padding-left `Number`

The left padding of the `from` labels.

### series-defaults-labels-from-padding-right `Number`

The right padding of the `from` labels.

### series-defaults-labels-from-padding-top `Number`

The top padding of the `from` labels.

### series-defaults-labels-from-template `String | Function`

The template which renders the chart series from label.

The template supports the following fields:

* `category`&mdash;The category name. Available for the Area, Bar, Column, Bubble, Donut, Funnel, Line, and Pie series.
* `dataItem`&mdash;The original data item used to construct the point. Will be `null` if binding to array.
* `percentage`&mdash;The point value which is represented as a percentage value. Available only for the Donut, Funnel, and Pie series.
* `value`&mdash;The point value. Can be a number or object which contains each bound field.
* `runningTotal`&mdash;The sum of point values since the last `runningTotal` summary point. Available for the Waterfall series.
* `total`&mdash;The sum of all previous series values. Available for the Waterfall series.

### series-defaults-labels-from-visible `Boolean`

If `series-defaults-labels-from-visible` is set to `true`, the Chart will display the series from labels. By default, chart series `from` labels are not displayed.

### series-defaults-labels-to-background `String`

The background color of the `to` labels. Accepts any valid CSS color string, including hex and rgb.

### series-defaults-labels-to-border-color `String`

The color of the border. Accepts any valid CSS color string, including hex and rgb.

### series-defaults-labels-to-border-dash-type `String`

The dash type of the border.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### series-defaults-labels-to-border-width `Number`

The width (in pixels) of the border. By default, the border width is set to zero which means that the border will not appear.

### series-defaults-labels-to-color `String`

The text color of the `to` labels. Accepts any valid CSS color string, including hex and rgb.

### series-defaults-labels-to-font `String`

The font style of the `to` labels.

### series-defaults-labels-to-format `String`

The format of the `to` labels. Uses `kendo.format`.

### series-defaults-labels-to-margin `Number`

The margin of the `to` labels. A numeric value will set all margins.

### series-defaults-labels-to-margin-bottom `Number`

The bottom margin of the `to` labels.

### series-defaults-labels-to-margin-left `Number`

The left margin of the `to` labels.

### series-defaults-labels-to-margin-right `Number`

The right margin of the `to` labels.

### series-defaults-labels-to-margin-top `Number`

The top margin of the `to` labels.

### series-defaults-labels-to-padding `Number`

The padding of the `to` labels. A numeric value will set all paddings.

### series-defaults-labels-to-padding-bottom `Number`

The bottom padding of the `to` labels.

### series-defaults-labels-to-padding-left `Number`

The left padding of the `to` labels.

### series-defaults-labels-to-padding-right `Number`

The right padding of the `to` labels.

### series-defaults-labels-to-padding-top `Number`

The top padding of the `to` labels.

### series-defaults-labels-to-template `String | Function`

The template which renders the chart series to label.

The template supports the following fields:

* `category`&mdash;The category name. Available for the Area, Bar, Column, Bubble, Donut, Funnel, Line, and Pie series.
* `dataItem`&mdash;The original data item used to construct the point. Will be `null` if binding to array.
* `percentage`&mdash;The point value which is represented as a percentage value. Available only for the Donut, Funnel, Pie series.
* `series`&mdash;The data series.
* `value`&mdash;The point value. Can be a number or an object which contains each bound field.
* `runningTotal`&mdash;The sum of point values since the last `runningTotal` summary point. Available for the Waterfall series.
* `total`&mdash;The sum of all previous series values. Available for the Waterfall series.

### series-defaults-labels-to-visible `Boolean`

If `series-defaults-labels-to-visible` is set to `true`, the Chart will display the series `to` labels. By default, the `to` labels are not displayed.

### series-defaults-line `Object`

The series options of the Line Charts. Accepts all values the `series` options supports.

### series-defaults-ohlc `Object`

The series options of the OHLC Chart. Accepts all values the `series` options supports.

### series-defaults-overlay-gradient `String`

The gradient of the Chart series.

The supported values are:

* `glass`&mdash;For the Bar, Column, and Candlestick series.
* `none`
* `roundedBevel`&mdash;For the Donut and Pie series.
* `sharpBevel`&mdash;For the Donut and Pie series.

### series-defaults-pie `Object`

The series options of the Pie Charts. Accepts all values the `series` options supports.

### series-defaults-range-area `Object`

The series options of the Range Area Chart. Accepts all values the `series` options supports.

### series-defaults-scatter `Object`

The series options of the Scatter Chart. Accepts all values the `series` options supports.

### series-defaults-scatter-line `Object`

The series options of the Scatter Line Chart. Accepts all values the `series` options supports.

### series-defaults-spacing `Number`

The space between the chart series as a proportion of the series width.

### series-defaults-stack `Boolean`

A Boolean value which indicates if the series will be stacked.

### series-defaults-stack-type `String`

The type of stack that will be plotted.

The following types are supported:

* `normal`&mdash;The value of the stack is the sum of all points in the category (or group).
* `100%`&mdash;The value of the stack is always 100% (1.00). Points within the category (or group) are represented in percentage.

### series-defaults-type `String`

The default type of the series.

The supported types are:

* `area`
* `bar`
* `bubble`
* `bullet`
* `candlestick`
* `column`
* `donut`
* `funnel`
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
* `verticalBullet`
* `verticalLine`
* `verticalRangeArea`
* `waterfall`

### series-defaults-tooltip-background `String`

The background color of the tooltip. Accepts any valid CSS color string, including hex and rgb.

### series-defaults-tooltip-border-color `String`

The color of the border.

### series-defaults-tooltip-border-width `Number`

The width (in pixels) of the border. By default, the border width is set to zero which means that the border will not appear.

### series-defaults-tooltip-color `String`

The text color of the tooltip. Accepts any valid CSS color string, including hex and rgb.

### series-defaults-tooltip-font `String`

The tooltip font.

### series-defaults-tooltip-format `String`

The format of the labels. Uses `kendo.format`.

The supported format placeholders are:

* Area, bar, column, funnel, line and pie{0}&mdash;value
* Bubble{0}&mdash;x value{1}&mdash;y value{2}&mdash;size value{3}&mdash;category name
* Scatter and scatterLine{0}&mdash;x value{1}&mdash;y value
* Candlestick and OHLC{0}&mdash;open value{1}&mdash;high value{2}&mdash;low value{3}&mdash;close value{4}&mdash;category name or RangeArea, rangeBar, rangeColumn{0}&mdash;from value{1}&mdash;to value

### series-defaults-tooltip-padding `Number`

The padding of the tooltip. A numeric value will set all paddings.

### series-defaults-tooltip-padding-bottom `Number`

The bottom padding of the tooltip.

### series-defaults-tooltip-padding-left `Number`

The left padding of the tooltip.

### series-defaults-tooltip-padding-right `Number`

The right padding of the tooltip.

### series-defaults-tooltip-padding-top `Number`

The top padding of the tooltip.

### series-defaults-tooltip-template `String | Function`

The template which renders the tooltip.

The template supports the following fields:

* `category`&mdash;The category name.
* `dataItem`&mdash;The original data item used to construct the point. Will be `null` if binding to array.
* `series`&mdash;The data series.
* `value`&mdash;The point value. Can be a number or an object which contains each bound field.
* `runningTotal`&mdash;The sum of point values since the last `runningTotal` summary point. Available for the Waterfall series.
* `total`&mdash;The sum of all previous series values. Available for the Waterfall series.

### series-defaults-tooltip-visible `Boolean`

If `series-defaults-tooltip-visible` is set to `true`, the Chart will display the series tooltip. By default, the series tooltip is not displayed.

### series-defaults-vertical-area `Object`

The series options for the Vertical Area Chart. Accepts all values the `series` options supports.

### series-defaults-vertical-line `Object`

The series options for the Vertical Line Chart. Accepts all values the `series` options supports.

### series-defaults-vertical-range-area `Object`

The series options for the Vertical Range Area Charts. Accepts all values the `series` options supports.

### series-defaults-visual `Function`

A function for creating a custom visual for the points. Applicable for the Bar, Column, Pie, Donut, Funnel, Line, Scatter Line, Range Bar, Range Column, and Waterfall series.

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

### series-defaults-notes-icon-background `String`

The background color of the notes icon.

### series-defaults-notes-icon-border-color `String`

The border color of the icon.

### series-defaults-notes-icon-border-width `Number`

The border width of the icon.

### series-defaults-notes-icon-size `Number`

The size of the icon.

### series-defaults-notes-icon-type `String`

The icon shape.

The supported values are:

* `circle`&mdash;The marker shape is circular.
* `square`&mdash;The marker shape is square.
* `triangle`&mdash;The marker shape is triangular.
* `cross`&mdash;The marker is in the shape of a cross.

### series-defaults-notes-icon-visible `Boolean`

The icon visibility.

### series-defaults-notes-label-background `String`

The background color of the label. Accepts any valid CSS color string, including hex and rgb.

### series-defaults-notes-label-border-color `String`

The color of the border. Accepts any valid CSS color string, including hex and rgb.

### series-defaults-notes-label-border-dash-type `String`

The dash type of the border.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### series-defaults-notes-label-border-width `Number`

The width (in pixels) of the border. By default, the border width is set to zero which means that the border will not appear.

### series-defaults-notes-label-color `String`

The text color of the label. Accepts any valid CSS color string, including hex and rgb.

### series-defaults-notes-label-font `String`

The font style of the label.

### series-defaults-notes-label-template `String | Function`

The template which renders the labels. The template supports the `value` field which represents the point value.

### series-defaults-notes-label-visible `Boolean`

If `series-defaults-notes-label-visible` is set to `true`, the Chart will display the `seriesDefaults` notes label. By default, the `seriesDefaults` notes labels are visible.

### series-defaults-notes-label-rotation `Number`

The rotation angle of the label. By default, the labels are not rotated.

### series-defaults-notes-label-format `String`

The format for displaying the notes label. Uses `kendo.format`. Contains one placeholder (`{0}`) which represents the axis value.

### series-defaults-notes-label-position `String`

The position of the labels.

The supported values are:

* `inside`&mdash;The label is positioned inside the icon.
* `outside`&mdash;The label is positioned outside the icon.

### series-defaults-notes-line-dash-type `String`

The dash type of the note line.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### series-defaults-notes-line-width `Number`

The line width of the notes.

### series-defaults-notes-line-color `String`

The line color of the notes.

### series-defaults-notes-line-length `Number`

The length (in pixels) of the connecting lines.

### series-defaults-notes-visual `Function`

A function for creating a custom visual for the notes.

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

## Suggested Links

* [`SeriesDefaults` in Kendo UI Chart for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/configuration/seriesdefaults)
