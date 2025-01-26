---
title: SparklineSeriesItem Sparkline API
description: "API Index | SparklineSeriesItem"
api_reference: true
slug: api_sparklineseriesitemcomponent_wrapper
---

# SparklineSeriesItem

## Directive

`kendo-sparkline-series-item`

## Components

* [`kendo-sparkline`]({% slug api_chartcomponent_wrapper %})

## Props

### type `String`

The type of the series.

The supported types:

* area
* column (synonym: bar)
* line
* pie
* bullet

### dash-type `String`

The dash type of the series line. Applicable only for the Line series.

### data `Array`

An array of data items.

The supported data item types are:

* An array of objects&mdash;Each point is bound to the specified series fields.
* An array of numbers&mdash;Available for Area, Bar, Column, Pie, and Line series.

### explode-field `String`

The data field which contains a Boolean value that indicates if the sector is exploded. Available for Pie series.

### current-field `String`

The data field which contains the current value. Available for Bullet and Vertical Bullet series.

### target-field `String`

The data field which contains the target value. Available for Bullet, Pie, and Vertical Bullet series.

### field `String`

The data field which contains the series value.

### name `String`

The series name. The name can also be a template which sets the name of the series when bound to grouped data source.

The template supports the following fields:

* `series`&mdash;The series options.
* `group`&mdash;The data group.
* `group.field`&mdash;The name of the field that is used for grouping.
* `group.value`&mdash;The field value for this group.

### highlight-border-width `Number`

The width of the border.

### highlight-border-color `String`

The border color.

### highlight-border-opacity `Number`

The border opacity.

### highlight-color `String`

The highlight color. Available only for Pie series.

### highlight-opacity `Number`

The opacity of the highlighted points. Applicable for Pie series.

### highlight-visible `Boolean`

A value which indicates if the series points will be highlighted.

### aggregate `String | Function`

The aggregate function that will apply to date series. The `aggregate` function is used when a category (an year, month, or others) contains two or more points. The return value of the function is displayed instead of the individual points.

The supported values are:

* `avg`&mdash;The average of all values for the date period.
* `count`&mdash;The number of values for the date period.
* `max`&mdash;The highest value for the date period.
* `min`&mdash;The lowest value for the date period.
* `sum`&mdash;The sum of all values for the date period. Defaults to `0` if no data points are defined.
* `sumOrNull`&mdash;The sum of all values for the date period. Defaults to `null` if no data points are defined.
* `first`&mdash;The first value.
* function (values, series, dataItems, category)&mdash;A user-defined aggregate function. Returns a single value or a data item.
* object (compound aggregate)&mdash;Applicable for the Candlestick and OHLC series. Specifies the aggregate for each data item field.

### axis `String`

The name of the value axis that will be used. Applicable for Area, Bar, Column, and Line series.

### border-color `String | Function`

The color of the border. Defaults to the color of the current series.

### border-dash-type `String | Function`

The dash type of the border.

### border-opacity `Number | Function`

The border opacity.

### border-width `Number | Function`

The width of the border.

### category-field `String`

The data field which contains the point category name. Applicable for Pie series.

### color `String | Function`

The base color of the series.

The supported values are:

* CSS color strings including hex and rgb.
* Function (point)&mdash;A user-defined function that will be evaluated for each point. Returning `undefined` assumes the default series color.

### color-field `String`

The data field which contains the point color. Applicable for Bar, Column, and Pie series.

### connectors-color `String`

The color of the connector line.

### connectors-padding `Number`

The padding between the connector line and the label, and the connector line and the Pie chart.

### connectors-width `Number`

The width of the connector line.

### gap `Number`

The distance between category clusters. Applicable for Bar and Column series.

### labels-align `String`

Defines the alignment of the labels. Available for Pie series.

### labels-background `String | Function`

The background color of the labels.

### labels-border-color `String | Function`

The color of the border.

### labels-border-dash-type `String | Function`

The dash type of the border.

### labels-border-width `Number | Function`

The width of the border.

### labels-color `String | Function`

The text color of the labels.

### labels-distance `Number`

The distance of the labels. Available for Pie series.

### labels-font `String | Function`

The font style of the labels.

### labels-format `String | Function`

The format of the labels.

### labels-margin `Number | Object`

The margin of the labels.

### labels-padding `Number | Object`

The padding of the labels.

### labels-position `String | Function`

Defines the position of the labels.

### labels-template `String | Function`

The template which renders the label of the chart series.

The template supports the following fields:
* `category`&mdash;The category name. Available for Area, Bar, Column, Bubble, Donut, Line, and Pie series.
* `dataItem`&mdash;The original data item that is used to construct the point. Will be `null` if binding to an array.
* `percentage`&mdash;The point value represented as a percentage value. Available only for Donut, Pie, and 100% Stacked charts.
* `series`&mdash;The data series.
* `value`&mdash;The point value. Can be a number or an object which contains each bound field.

### labels-visible `Boolean | Function`

The visibility of the labels.

### line `String`

The line options. Applicable for Area series.

### line-color `String`

The line color.

### line-opacity `Number`

The line opacity.

### line-width `String`

The line width.

### line-style `String`

The supported values are:

* `normal`&mdash;The values will be connected by a straight line.
* `step`&mdash;The values will be connected by a line with a right angle.
* `smooth`&mdash;The values will be connected by a smooth line.

### markers-background `String | Function`

The background color of the current series markers.

### markers-border `Function`

The border of the markers.

### markers-border-color `String | Function`

The color of the border.

### markers-border-width `Number | Function`

The width of the border.

### markers-size `Number | Function`

The marker size.

### markers-type `String | Function`

Configures the markers shape type.

### markers-visible `Boolean | Function`

The markers visibility.

### markers-rotation `Number | Function`

The rotation angle of the markers.

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

### negative-color `String`

Color to use for bars with negative values. Applicable only for Bar and Column series.

### opacity `Number`

The series opacity.

### overlay-gradient `String`

The gradient name.

The supported options are:

* `glass`&mdash;In Bar and Column series.
* `roundedBevel`&mdash;In Pie series.
* `sharpBevel`&mdash;In Pie series.
* none

### padding `Number`

The padding around the chart (equal on all sides). Available in Pie series.

### size `Number`

The size (or radius) of the series in pixels. If not specified, the available space is split evenly between the series.

### start-angle `Number`

The start angle of the first segment. Available in Pie series.

### spacing `Number`

The space between points as a proportion of the point width. Available in Bar and Column series.

### stack `Boolean | String`

A Boolean value which indicates if the series will be stacked. A string value is interpreted as `series.stack.group`.

### stack-type `String`

The type of stack that will be plotted.

The supported types are:

* `normal`&mdash;The value of the stack is the sum of all points in the category (or group).
* `100%`&mdash;The value of the stack is always 100% (1.00). Points within the category (or group) are represented in percentage.

### stack-group `String`

Indicates that the series will be stacked in a group with the specified name.

### tooltip-background `String`

The background color of the tooltip. The default value is determined by the series color.

### tooltip-border-color `String`

The color of the border.

### tooltip-border-width `Number`

The width of the border.

### tooltip-color `String`

The text color of the tooltip. The default is the same as the color for the series labels.

### tooltip-font `String`

The tooltip font.

### tooltip-format `String`

The tooltip format. Format variables depend on the series type&mdash;Area, Bar, Column, Line, and Pie value.

### tooltip-padding `Number | Object`

The padding of the tooltip.

### tooltip-template `String | Function`

The tooltip template.

The template supports the following variables:

* `value`&mdash;The point value (either a number or an object).
* `category`&mdash;The category name.
* `series`&mdash;The data series.
* `dataItem`&mdash;The original data item that is used to construct the point. Will be `null` if binding to array.

### tooltip-visible `Boolean`

A value which indicates if the tooltip will be displayed.

### width `Number`

The line width. Available in Line series.

### target-line-width `Object | Function`

The width of the line.

### target-color `String | Function`

The target color.

### target-border `Function`

The border of the target.

### target-border-color `String | Function`

The color of the border.

### target-border-dash-type `String | Function`

The dash type of the border.

### target-border-width `Number`

The width of the border.

### notes-position `String`

The position of the series note.

The supported values are:

* `top`&mdash;The note is positioned on the top.
* `bottom`&mdash;The note is positioned on the bottom.
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

The background color of the label. Accepts any valid CSS color strings including hex and rgb.

### notes-label-border-color `String`

The color of the border. Accepts any valid CSS color strings including hex and rgb.

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

The width (in pixels) of the border. By default, the border width is set to zero which means that the border will not appear.

### notes-label-color `String`

The text color of the label. Accepts any valid CSS color strings including hex and rgb.

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

### notes-line-width `Number`

The line width of the notes.

### notes-line-color `String`

The line color of the notes.

### notes-line-length `Number`

The length (in pixels) of the connecting lines.

### z-index `Number`

An optional Z-index for changing the default stacking order of series. The series with the highest Z-index will be placed on top. Series with no Z-index will use the default stacking order based on the series type. For example, Line series will be on top followed by Bar and Area.

## Suggested Links

* [`Series` in Kendo UI Sparkline for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/sparkline/configuration/series)
