---
title: yAxisProps Chart API
description: "API Index | yAxisProps"
api_reference: true
slug: api_chart_yaxisprops_wrapper
---

# YAxisProps

### y-axis-y-axis-item-axis-crossing-value `Object | Date | Array`

* (For objects) The value at which the Y axis crosses this axis.
* (For arrays) The value indices at which the Y axes cross the value axis.
* (For dates) The date at which the Y axis crosses this axis.

### y-axis-y-axis-item-background `String`

The background color of the axis.

### y-axis-y-axis-item-base-unit `String`

The base time interval for the axis labels. The default `baseUnit` is determined automatically from the value range.

The supported options are:

* milliseconds
* seconds
* minutes
* hours
* days
* weeks
* months
* years

### y-axis-y-axis-item-color `String`

The color of the axis. Accepts any valid CSS color string, including hex and rgb.

### y-axis-y-axis-item-crosshair-color `String`

The color of the crosshair. Accepts any valid CSS color string, including hex and rgb.

### y-axis-y-axis-item-crosshair-dash-type `String`

The dash type of the crosshair.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### y-axis-y-axis-item-crosshair-opacity `Number`

The opacity of the crosshair. By default, the crosshair is opaque.

### y-axis-y-axis-item-crosshair-tooltip-background `String`

The background color of the tooltip. Accepts any valid CSS color string, including hex and rgb.

### y-axis-y-axis-item-crosshair-tooltip-border-color `String`

The color of the border. Accepts any valid CSS color string, including hex and rgb.

### y-axis-y-axis-item-crosshair-tooltip-border-dash-type `String`

The dash type of the crosshair.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### y-axis-y-axis-item-crosshair-tooltip-border-width `Number`

The width (in pixels) of the border. By default, the border width is set to zero which means that the border will not appear.

### y-axis-y-axis-item-crosshair-tooltip-color `String`

The text color of the tooltip. Accepts any valid CSS color string, including hex and rgb.

### y-axis-y-axis-item-crosshair-tooltip-font `String`

The tooltip font.

### y-axis-y-axis-item-crosshair-tooltip-format `String`

The format used to display the tooltip. Uses `kendo.format`. Contains one placeholder (`{0}`) which represents the `value` value.

### y-axis-y-axis-item-crosshair-tooltip-padding `Number`

The padding of the crosshair tooltip. A numeric value will set all paddings.

### y-axis-y-axis-item-crosshair-tooltip-padding-bottom `Number`

The bottom padding of the crosshair tooltip.

### y-axis-y-axis-item-crosshair-tooltip-padding-left `Number`

The left padding of the crosshair tooltip.

### y-axis-y-axis-item-crosshair-tooltip-padding-right `Number`

The right padding of the crosshair tooltip.

### y-axis-y-axis-item-crosshair-tooltip-padding-top `Number`

The top padding of the crosshair tooltip.

### y-axis-y-axis-item-crosshair-tooltip-template `String | Function`

The template which renders the tooltip. The template supports the `value` field which represents the `value` value.

### y-axis-y-axis-item-crosshair-tooltip-visible `Boolean`

If set to `true`, the Chart will display the crosshair tooltip of the Y axis for the Scatter Chart. By default, the Scatter Chart Y axis crosshair tooltip is not visible.

### y-axis-y-axis-item-crosshair-visible `Boolean`

If set to `true`, the Chart will display the crosshair of the Y axis for the Scatter Chart. By default, the Scatter Chart y axis crosshair is not visible.

### y-axis-y-axis-item-crosshair-width `Number`

The width (in pixels) of the crosshair.

### y-axis-y-axis-item-labels-background `String`

The background color of the labels. Accepts any valid CSS color string, including hex and rgb.

### y-axis-y-axis-item-labels-border-color `String`

The color of the border. Accepts any valid CSS color string, including hex and rgb.

### y-axis-y-axis-item-labels-border-dash-type `String`

The dash type of the crosshair.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### y-axis-y-axis-item-labels-border-width `Number`

The width (in pixels) of the border. By default, the border width is set to zero which means that the border will not appear.

### y-axis-y-axis-item-labels-color `String`

The text color of the labels. Accepts any valid CSS color string, including hex and rgb.

### y-axis-y-axis-item-labels-culture `String`

The culture that will be used when formatting date values. For more information, refer to the article on [globalization](https://docs.telerik.com/kendo-ui/framework/globalization/overview).

### y-axis-y-axis-item-labels-date-formats-days `String`

The format that is used when `yAxis.baseUnit` is set to `days`.

### y-axis-y-axis-item-labels-date-formats-hours `String`

The format that is used when `yAxis.baseUnit` is set to `hours`.

### y-axis-y-axis-item-labels-date-formats-months `String`

The format that is used when `yAxis.baseUnit` is set to `months`.

### y-axis-y-axis-item-labels-date-formats-weeks `String`

The format that is used when `yAxis.baseUnit` is set to `weeks`.

### y-axis-y-axis-item-labels-date-formats-years `String`

The format that is used when `yAxis.baseUnit` is set to `years`.

### y-axis-y-axis-item-labels-font `String`

The font style of the labels.

### y-axis-y-axis-item-labels-format `String`

The format that is used to display the labels. Uses `kendo.format`. Contains one placeholder (`{0}`) which represents the category value.

### y-axis-y-axis-item-labels-margin `Number`

The margin of the labels. A numeric value will set all margins.

### y-axis-y-axis-item-labels-margin-bottom `Number`

The bottom margin of the labels.

### y-axis-y-axis-item-labels-margin-left `Number`

The left margin of the labels.

### y-axis-y-axis-item-labels-margin-right `Number`

The right margin of the labels.

### y-axis-y-axis-item-labels-margin-top `Number`

The top margin of the labels.

### y-axis-y-axis-item-labels-mirror `Boolean`

If set to `true`, the Chart will mirror the axis labels and ticks. If the labels are normally on the left side of the axis, mirroring the axis will render them to the right.

### y-axis-y-axis-item-labels-padding `Number`

The padding of the labels. A numeric value will set all paddings.

### y-axis-y-axis-item-labels-padding-bottom `Number`

The bottom padding of the labels.

### y-axis-y-axis-item-labels-padding-left `Number`

The left padding of the labels.

### y-axis-y-axis-item-labels-padding-right `Number`

The right padding of the labels.

### y-axis-y-axis-item-labels-padding-top `Number`

The top padding of the labels.

### y-axis-y-axis-item-labels-position `String`

The position of the axis labels. By default, labels are positioned next to the axis.

* When the position is set to `end`, the labels are placed at the end of the crossing axis&mdash;typically, at the top or right end of the Chart unless the crossing axis was reversed.
* When the position is set to `start`, the labels are placed at the start of the crossing axis&mdash;typically, at the left or bottom end of the Chart unless the crossing axis was reversed.

### y-axis-y-axis-item-labels-rotation `Number`

The rotation angle of the labels. By default, the labels are not rotated.

### y-axis-y-axis-item-labels-rotation-align `String`

The alignment of the rotated labels that is relative to the slot center.

The supported values are:

* `end`
* `center`

By default, the closest end of the label will be aligned to the center. If set to `center`, the center of the rotated label will be aligned instead.

### y-axis-y-axis-item-labels-rotation-angle `Number`

The rotation angle of the labels. By default, the labels are not rotated.

### y-axis-y-axis-item-labels-skip `Number`

The number of labels to skip.

### y-axis-y-axis-item-labels-step `Number`

The label rendering step&mdash;render every n-th label. By default, every label is rendered.

### y-axis-y-axis-item-labels-template `String | Function`

The step for rendering the label. Renders every n<sup>th</sup> label. By default, every label is rendered.

### y-axis-y-axis-item-labels-visible `Boolean`

If set to `true`, the Chart will display the y axis labels. By default, the y axis labels are visible.

### y-axis-y-axis-item-labels-visual `Function`

A function for creating a custom visual for the labels.

The supported argument fields are:

* `createVisual`&mdash;A function that can be used to get the default visual.
* `culture`&mdash;The default culture (if set) on the label.
* `format`&mdash;The default format of the label.
* `options`&mdash;The label options.
* `rect`&mdash;The `kendo.geometry.Rect` that defines where the visual will be rendered.
* `sender`&mdash;The Chart instance (may be undefined).
* `text`&mdash;The label text.
* `value`&mdash;The category value.

### y-axis-y-axis-item-line-color `String`

The color of the lines. Accepts any valid CSS color string, including hex and rgb.

### y-axis-y-axis-item-line-dash-type `String`

The dash type of the crosshair.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line0

### y-axis-y-axis-item-line-visible `Boolean`

If set to `true`, the Chart will display the Y axis lines. By default, the Y axis lines are visible.

### y-axis-y-axis-item-line-width `Number`

The width (in pixels) of the line. Also affects the major and minor ticks, but not the grid lines. #### Example&mdash;set the Scatter Chart Y axis line width

### y-axis-y-axis-item-major-grid-lines-color `String`

The color of the lines. Accepts any valid CSS color string, including hex and rgb.

### y-axis-y-axis-item-major-grid-lines-dash-type `String`

The dash type of the crosshair.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### y-axis-y-axis-item-major-grid-lines-visible `Boolean`

If set to `false` the chart will not display the y major grid lines. By default, the y major grid lines are visible.

### y-axis-y-axis-item-major-grid-lines-width `Number`

The width (in pixels) of the line. Also affects the major and minor ticks, but not the grid lines. #### Example&mdash;set the Scatter Chart x major grid lines width

### y-axis-y-axis-item-major-grid-lines-step `Number`

The step of the Y axis major grid lines.

### y-axis-y-axis-item-major-grid-lines-skip `Number`

The skip of the Y axis major grid lines.

### y-axis-y-axis-item-minor-grid-lines-color `String`

The color of the minor grid lines. Accepts any valid CSS color string, including hex and rgb.

### y-axis-y-axis-item-minor-grid-lines-dash-type `String`

The dash type of the crosshair.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### y-axis-y-axis-item-minor-grid-lines-visible `Boolean`

If set to `true`, the Chart will display the minor grid lines. By default, the minor grid lines are visible.

### y-axis-y-axis-item-minor-grid-lines-width `Number`

The width (in pixels) of the category axis minor grid lines.

### y-axis-y-axis-item-minor-grid-lines-step `Number`

The step of the Y axis minor grid lines.

### y-axis-y-axis-item-minor-grid-lines-skip `Number`

The skip of the Y axis minor grid lines.

### y-axis-y-axis-item-minor-ticks-color `String`

The color of the Y axis minor ticks lines. Accepts any valid CSS color string, including hex and rgb.

### y-axis-y-axis-item-minor-ticks-size `Number`

The length (in pixels) of the tick line.

### y-axis-y-axis-item-minor-ticks-visible `Boolean`

If set to `true`, the Chart will display the Y axis minor ticks. By default, the Y axis minor ticks are not visible.

### y-axis-y-axis-item-minor-ticks-width `Number`

The width (in pixels) of the minor ticks.

### y-axis-y-axis-item-minor-ticks-step `Number`

The step of the Y axis minor ticks.

### y-axis-y-axis-item-minor-ticks-skip `Number`

The skip of the Y axis minor ticks.

### y-axis-y-axis-item-major-ticks-color `String`

The color of the Scatter Chart Y axis major ticks lines. Accepts any valid CSS color string, including hex and rgb.

### y-axis-y-axis-item-major-ticks-size `Number`

The length (in pixels) of the tick line.

### y-axis-y-axis-item-major-ticks-visible `Boolean`

If set to `true`, the Chart will display the Scatter Chart Y axis major ticks. By default, the category axis major ticks are visible.

### y-axis-y-axis-item-major-ticks-width `Number`

The width (in pixels) of the major ticks.

### y-axis-y-axis-item-major-ticks-step `Number`

The step of the Y axis major ticks.

### y-axis-y-axis-item-major-ticks-skip `Number`

The skip of the Y axis major ticks.

### y-axis-y-axis-item-major-unit `Number`

The interval between major divisions. If this is a date axis, the value represents the number of `xAxis.baseUnits` between major divisions. If `xAxis.type` is set to `log`, the `majorUnit` value will be used for the base of the logarithm.

### y-axis-y-axis-item-max `Object`

The maximum value of the axis.

### y-axis-y-axis-item-min `Object`

The minimum value of the axis.

### y-axis-y-axis-item-minor-unit `Number`

The interval between minor divisions. Defaults to 1/5 of `xAxis.majorUnit`. If `xAxis.type` is set to `log`, the `minorUnit` value represents the number of divisions between two major units and defaults to the major unit minus one.

### y-axis-y-axis-item-name `String`

The unique axis name. Associates a series with an X axis which uses the `series.xAxis` option.

### y-axis-y-axis-item-narrow-range `Boolean`

If set to `true`, the Chart will prevent the automatic axis range from snapping to 0. Setting it to `false` will force the automatic axis range to snap to 0.

### y-axis-y-axis-item-pane `String`

The name of the pane in which the axis will be rendered. If `y-axis-y-axis-item-pane` is not set, the axis will be rendered in the first (default) pane.

### y-axis-y-axis-item-plot-bands `Array`

The plot bands of the Y axis.

### y-axis-y-axis-item-reverse `Boolean`

If set to `true`, the value axis direction will be reversed. By default, values increase from left to right and from bottom to top.

### y-axis-y-axis-item-title-background `String`

The background color of the title. Accepts any valid CSS color string, including hex and rgb.

### y-axis-y-axis-item-title-border-color `String`

The color of the border. Accepts any valid CSS color string, including hex and rgb.

### y-axis-y-axis-item-title-border-dash-type `String`

The dash type of the crosshair.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### y-axis-y-axis-item-title-border-width `Number`

The width (in pixels) of the border. By default, the border width is set to zero which means that the border will not appear.

### y-axis-y-axis-item-title-color `String`

The text color of the title. Accepts any valid CSS color string, including hex and rgb.

### y-axis-y-axis-item-title-font `String`

The font style of the title.

### y-axis-y-axis-item-title-margin `Number`

The margin of the title. A numeric value will set all margins.

### y-axis-y-axis-item-title-margin-bottom `Number`

The bottom margin of the title.

### y-axis-y-axis-item-title-margin-left `Number`

The left margin of the title.

### y-axis-y-axis-item-title-margin-right `Number`

The right margin of the title.

### y-axis-y-axis-item-title-margin-top `Number`

The top margin of the title.

### y-axis-y-axis-item-title-padding `Number`

The padding of the title. A numeric value will set all paddings.

### y-axis-y-axis-item-title-padding-bottom `Number`

The bottom padding of the title.

### y-axis-y-axis-item-title-padding-left `Number`

The left padding of the title.

### y-axis-y-axis-item-title-padding-right `Number`

The right padding of the title.

### y-axis-y-axis-item-title-padding-top `Number`

The top padding of the title.

### y-axis-y-axis-item-title-position `String`

The position of the title.

The supported values are:

* `top`&mdash;(Applicable to vertical axes) The axis title is positioned on the top.
* `bottom`&mdash;(Applicable to vertical axes) The axis title is positioned on the bottom.
* `left`&mdash;(Applicable to horizontal axes) The axis title is positioned on the left.
* `right`&mdash;(Applicable to horizontal axes) The axis title is positioned on the right.
* `center`&mdash;The axis title is positioned in the center.

### y-axis-y-axis-item-title-rotation `Number`

The rotation angle of the title. By default, the title is not rotated.

### y-axis-y-axis-item-title-text `String`

The text of the title.

### y-axis-y-axis-item-title-visible `Boolean`

If set to `true`, the Chart will display the Scatter Chart Y axis title. By default, the Scatter Chart Y axis title is visible.

### y-axis-y-axis-item-title-visual `Function`

A function for creating a custom visual for the title.

The supported argument fields are:

* `text`&mdash;The label text.
* `rect`&mdash;The `kendo.geometry.Rect` that defines where the visual will be rendered.
* `sender`&mdash;The Chart instance (may be undefined).
* `options`&mdash;The label options.
* `createVisual`&mdash;A function that can be used to get the default visual.

### y-axis-y-axis-item-type `String`

The axis type. The supported values are: `numeric`&mdash;numeric axis.; `date`&mdash;specialized axis for displaying chronological data. or `log`&mdash;logarithmic axis..

### y-axis-y-axis-item-visible `Boolean`

If set to `true`, the Chart will display the Y axis. By default, the Y axis is visible.


### y-axis-y-axis-item-notes-position `String`

The axis type.

The supported values are:

* `numeric`&mdash;A umeric axis.
* `date`&mdash;A specialized axis for displaying chronological data.
* `log`&mdash;A logarithmic axis.

### y-axis-y-axis-item-notes-icon-background `String`

The background color of the notes icon.

### y-axis-y-axis-item-notes-icon-border-color `String`

The border color of the icon.

### y-axis-y-axis-item-notes-icon-border-width `Number`

The border width of the icon.

### y-axis-y-axis-item-notes-icon-size `Number`

The size of the icon.

### y-axis-y-axis-item-notes-icon-type `String`

The icon shape.

The supported values are:

* `circle`&mdash;The marker shape is circular.
* `square`&mdash;The marker shape is square.
* `triangle`&mdash;The marker shape is triangular.
* `cross`&mdash;The marker is in the shape of a cross.

### y-axis-y-axis-item-notes-icon-visible `Boolean`

The icon visibility.

### y-axis-y-axis-item-notes-label-background `String`

The background color of the label. Accepts any valid CSS color string, including hex and rgb.

### y-axis-y-axis-item-notes-label-border-color `String`

The color of the border. Accepts any valid CSS color string, including hex and rgb.

### y-axis-y-axis-item-notes-label-border-dash-type `String`

The dash type of the crosshair.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### y-axis-y-axis-item-notes-label-border-width `Number`

The width (in pixels) of the border. By default, the border width is set to zero which means that the border will not appear.

### y-axis-y-axis-item-notes-label-color `String`

The text color of the label. Accepts any valid CSS color string, including hex and rgb.

### y-axis-y-axis-item-notes-label-font `String`

The font style of the label.

### y-axis-y-axis-item-notes-label-template `String | Function`

The template which renders the labels. The template supports the `value` field which represents the axis value.

### y-axis-y-axis-item-notes-label-visible `Boolean`

If set to `true`, the Chart will display the Y axis notes label. By default, the Y axis notes label are visible.

### y-axis-y-axis-item-notes-label-rotation `Number`

The rotation angle of the label. By default, the label are not rotated.

### y-axis-y-axis-item-notes-label-format `String`

The format for displaying the notes label. Uses `kendo.format`. Contains one placeholder (`{0}`) which represents the axis value.

### y-axis-y-axis-item-notes-label-position `String`

The position of the labels.

The supported values are:

* `inside`&mdash;The label is positioned inside the icon.
* `outside`&mdash;The label is positioned outside the icon.

### y-axis-y-axis-item-notes-line-dash-type `String`

The dash type of the crosshair.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### y-axis-y-axis-item-notes-line-width `Number`

The line width of the notes.

### y-axis-y-axis-item-notes-line-color `String`

The line color of the notes.

### y-axis-y-axis-item-notes-line-length `Number`

The length of the connecting lines.

### y-axis-y-axis-item-notes-data `Array`

The items of the notes.

### y-axis-y-axis-item-notes-visual `Function`

A function for creating a custom visual for the notes.

The supported argument fields are:

* `rect`&mdash;The `kendo.geometry.Rect` that defines where the visual will be rendered.
* `sender`&mdash;The Chart instance (may be undefined).
* `options`&mdash;The note options.
* `createVisual`&mdash;A function that can be used to get the default visual.
* `value`&mdash;The note value.

## Suggested Links

* [`YAxis` in Kendo UI Chart for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/configuration/yaxis)
