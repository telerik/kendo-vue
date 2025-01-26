---
title: categoryAxisProps Chart API
description: "API Index | categoryAxisProps"
api_reference: true
slug: api_chart_categoryaxisprops_wrapper
---

# CategoryAxisProps

### category-axis-category-axis-item-auto-base-unit-steps-milliseconds `Array`

The milliseconds unit steps.

### category-axis-category-axis-item-auto-base-unit-steps-seconds `Array`

The seconds unit steps.

### category-axis-category-axis-item-auto-base-unit-steps-minutes `Array`

The minutes unit steps.

### category-axis-category-axis-item-auto-base-unit-steps-hours `Array`

The hours unit steps.

### category-axis-category-axis-item-auto-base-unit-steps-days `Array`

The days unit steps.

### category-axis-category-axis-item-auto-base-unit-steps-weeks `Array`

The weeks unit steps.

### category-axis-category-axis-item-auto-base-unit-steps-months `Array`

The months unit steps.

### category-axis-category-axis-item-auto-base-unit-steps-years `Array`

The years unit steps.

### category-axis-category-axis-item-axis-crossing-value `Object | Date | Array`

* The category index at which the first value axis crosses this axis (when set as an object).
* The category indices at which the value axes cross the category axis (when set as an array).

### category-axis-category-axis-item-background `String`

The background color of the axis.

### category-axis-category-axis-item-base-unit `String`

The base time interval for the date axis. The default base unit is determined automatically from the minimum difference between subsequent categories.

The supported values are:

* `fit`
* `milliseconds`
* `seconds`
* `minutes`
* `hours`
* `days`
* `weeks`
* `months`
* `years`

Setting `baseUnit` to `fit` sets a base unit and a `categoryAxis.baseUnitStep` which provide a total number of categories that does not exceed `categoryAxis.maxDateGroups`. The series data is aggregated for the specified base unit through the `series.aggregate` function.

### category-axis-category-axis-item-base-unit-step `Object`

The step (in intervals) between the categories in base units. Setting `category-axis-category-axis-item-base-unit-step` to `auto` sets the step to a value which provides a total number of categories that does not exceed `categoryAxis.maxDateGroups`. If `categoryAxis.baseUnit` is set to `fit`, `category-axis-category-axis-item-base-unit-step` is ignored.

### category-axis-category-axis-item-categories `Array`

The category names. The Chart creates a category for every item of the array.

### category-axis-category-axis-item-color `String`

The color that will apply to all axis elements. Accepts any valid CSS color string, including hex and rgb. Can be overridden by `categoryAxis.labels.color` and `categoryAxis.line.color`.

### category-axis-category-axis-item-crosshair-color `String`

The color of the crosshair. Accepts any valid CSS color string, including hex and rgb.

### category-axis-category-axis-item-crosshair-dash-type `String`

The dash type of the crosshair.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### category-axis-category-axis-item-crosshair-opacity `Number`

The opacity of the crosshair. By default, the crosshair is opaque.

### category-axis-category-axis-item-crosshair-tooltip-background `String`

The background color of the tooltip. Accepts any valid CSS color string, including hex and rgb.

### category-axis-category-axis-item-crosshair-tooltip-border-color `String`

The color of the border. Accepts any valid CSS color string, including hex and rgb.

### category-axis-category-axis-item-crosshair-tooltip-border-dash-type `String`

The dash type of the border.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### category-axis-category-axis-item-crosshair-tooltip-border-width `Number`

The width (in pixels) of the border. By default, the border width is set to zero which means that the border will not appear.

### category-axis-category-axis-item-crosshair-tooltip-color `String`

The text color of the tooltip. Accepts any valid CSS color string, including hex and rgb.

### category-axis-category-axis-item-crosshair-tooltip-font `String`

The tooltip font.

### category-axis-category-axis-item-crosshair-tooltip-format `String`

The format used to display the tooltip. Uses kendo.format. Contains one placeholder (`{0}`) which represents the category value.

### category-axis-category-axis-item-crosshair-tooltip-padding `Number`

The padding of the crosshair tooltip. A numeric value will set all paddings.

### category-axis-category-axis-item-crosshair-tooltip-padding-bottom `Number`

The bottom padding of the crosshair tooltip.

### category-axis-category-axis-item-crosshair-tooltip-padding-left `Number`

The left padding of the crosshair tooltip.

### category-axis-category-axis-item-crosshair-tooltip-padding-right `Number`

The right padding of the crosshair tooltip.

### category-axis-category-axis-item-crosshair-tooltip-padding-top `Number`

The top padding of the crosshair tooltip.

### category-axis-category-axis-item-crosshair-tooltip-template `String | Function`

The template which renders the tooltip. The template supports the `value` field which represents the category value.

### category-axis-category-axis-item-crosshair-tooltip-visible `Boolean`

If `category-axis-category-axis-item-crosshair-tooltip-visible` is set to `true`, the Chart will display the category axis crosshair tooltip. By default, the category axis crosshair tooltip is not visible.

### category-axis-category-axis-item-crosshair-visible `Boolean`

If `category-axis-category-axis-item-crosshair-visible` is set to `true`, the Chart will display the category axis crosshair. By default, the category axis crosshair is not visible.

### category-axis-category-axis-item-crosshair-width `Number`

The width (in pixels) of the crosshair.

### category-axis-category-axis-item-field `String`

The data item field which contains the category name. Requires you to set the `dataSource` option. The field name has to be any valid JavaScript identifier, has to contain only alphanumeric or `$` and `_` characters, and must not start with a digit.

### category-axis-category-axis-item-justified `Boolean`

If `category-axis-category-axis-item-justified` is set to `true`, the Chart will position categories and series points on major ticks. This removes the empty space before and after the series. The default value is `false` except for `area`, `verticalArea`, `rangeArea`, and `verticalRangeArea`.

### category-axis-category-axis-item-labels-background `String`

The background color of the labels. Accepts any valid CSS color string, including hex and rgb.

### category-axis-category-axis-item-labels-border-color `String`

The color of the border. Accepts any valid CSS color string, including hex and rgb.

### category-axis-category-axis-item-labels-border-dash-type `String`

The dash type of the border.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### category-axis-category-axis-item-labels-border-width `Number`

The width (in pixels) of the border. By default, the border width is set to zero which means that the border will not appear.

### category-axis-category-axis-item-labels-color `String`

The text color of the labels. Accepts any valid CSS color string, including hex and rgb.

### category-axis-category-axis-item-labels-culture `String`

The culture that will be used when date values are formatted ([globalization](https://docs.telerik.com/kendo-ui/framework/globalization/overview)).

### category-axis-category-axis-item-labels-date-formats-days `String`

The format that is used when `categoryAxis.baseUnit` is set to `days`.

### category-axis-category-axis-item-labels-date-formats-hours `String`

The format used when categoryAxis.baseUnit is set to `hours`.

### category-axis-category-axis-item-labels-date-formats-months `String`

The format tat is used when `categoryAxis.baseUnit` is set to `months`.

### category-axis-category-axis-item-labels-date-formats-weeks `String`

The format that is used when `categoryAxis.baseUnit` is set to `weeks`.

### category-axis-category-axis-item-labels-date-formats-years `String`

The format that is used when `categoryAxis.baseUnit` is set to `years`.

### category-axis-category-axis-item-labels-font `String`

The font style of the labels.

### category-axis-category-axis-item-labels-format `String`

The format that is used to display the labels. Uses `kendo.format`. Contains one placeholder (`{0}`) which represents the category value.

### category-axis-category-axis-item-labels-margin `Number`

The margin of the labels. A numeric value will set all margins.

### category-axis-category-axis-item-labels-margin-bottom `Number`

The bottom margin of the labels.

### category-axis-category-axis-item-labels-margin-left `Number`

The left margin of the labels.

### category-axis-category-axis-item-labels-margin-right `Number`

The right margin of the labels.

### category-axis-category-axis-item-labels-margin-top `Number`

The top margin of the labels.

### category-axis-category-axis-item-labels-mirror `Boolean`

If `category-axis-category-axis-item-labels-mirror` is set to `true`, the Chart will mirror the axis labels and ticks. If the labels are normally on the left side of the axis, mirroring the axis will render them to the right.

### category-axis-category-axis-item-labels-padding `Number`

The padding of the labels. A numeric value will set all paddings.

### category-axis-category-axis-item-labels-padding-bottom `Number`

The bottom padding of the labels.

### category-axis-category-axis-item-labels-padding-left `Number`

The left padding of the labels.

### category-axis-category-axis-item-labels-padding-right `Number`

The right padding of the labels.

### category-axis-category-axis-item-labels-padding-top `Number`

The top padding of the labels.

### category-axis-category-axis-item-labels-position `String`

The position of the axis labels. By default, labels are positioned next to the axis.

* When the position is set to `end`, the labels are placed at the end of the crossing axis&mdash;typically, at the top or right end of the Chart unless the crossing axis was reversed.
* When the position is set to `start`, the labels are placed at the start of the crossing axis&mdash;typically, at the left or bottom end of the Chart unless the crossing axis was reversed.

### category-axis-category-axis-item-labels-rotation `Number | String`

The rotation angle of the labels. By default, the labels are not rotated. If the axis is horizontal, `category-axis-category-axis-item-labels-rotation` can be set to `auto` and, as a result, the labels will be rotated only if the slot size is not sufficient to accommodate the entire labels.

### category-axis-category-axis-item-labels-rotation-align `String`

The alignment of the rotated labels that is relative to the slot center.

The supported values are:

* `end`
* `center`

By default, the closest end of the label will be aligned to the center. If `category-axis-category-axis-item-labels-rotation-align` is set to `center`, the center of the rotated label will be aligned instead.

### category-axis-category-axis-item-labels-rotation-angle `Number | String`

The rotation angle of the labels. By default, the labels are not rotated. If the axis is horizontal, `category-axis-category-axis-item-labels-rotation-angle` can be set to `auto` and, as a result, the labels will be rotated only if the slot size is not sufficient to accommodate the entire labels.

### category-axis-category-axis-item-labels-skip `Number`

The number of labels to skip. By default, no labels are skipped.

### category-axis-category-axis-item-labels-step `Number`

The step for rendering the label. Renders every n<sup>th</sup> label. By default, every label is rendered.

### category-axis-category-axis-item-labels-template `String | Function`

The template which renders the labels.

The template supports the following fields:

* `value`&mdash;The category value.
* `dataItem`&mdash;The data item if a field was specified. If the category does not have a corresponding item in the data, then an empty object will be passed.
* `format`&mdash;The default format of the label.
* `culture`&mdash;The default culture (if set) on the label.

### category-axis-category-axis-item-labels-visible `Boolean`

If `category-axis-category-axis-item-labels-visible` is set to `true`, the Chart will display the category axis labels. By default, the category axis labels are visible.

### category-axis-category-axis-item-labels-visual `Function`

A function that can be used to create a custom visual for the labels.

The supported argument fields are:

* `createVisual`&mdash;A function that gets the default visual.
* `culture`&mdash;The default culture (if set) on the label.
* `dataItem`&mdash;The data item is a field was specified.
* `format`&mdash;The default format of the label.
* `options`&mdash;The label options.
* `rect`&mdash;The `kendo.geometry.Rect` that defines where the visual will be rendered.
* `sender`&mdash;The Chart instance (may be undefined).
* `text`&mdash;The label text.
* `value`&mdash;The category value.

### category-axis-category-axis-item-line-color `String`

The color of the lines. Accepts any valid CSS color string, including hex and rgb.

### category-axis-category-axis-item-line-dash-type `String`

The dash type of the line.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### category-axis-category-axis-item-line-visible `Boolean`

If `category-axis-category-axis-item-line-visible` is set to `true`, the Chart will display the category axis lines. By default, the category axis lines are visible.

### category-axis-category-axis-item-line-width `Number`

The width (in pixels) of the line. Affects also the major and minor ticks but not the grid lines.

### category-axis-category-axis-item-major-grid-lines-color `String`

The color of the major grid lines. Accepts any valid CSS color string, including hex and rgb.

### category-axis-category-axis-item-major-grid-lines-dash-type `String`

The dash type of the major grid lines.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### category-axis-category-axis-item-major-grid-lines-visible `Boolean`

If `category-axis-category-axis-item-major-grid-lines-visible` is set to `false`, the Chart will not display the major grid lines. By default, the major grid lines are visible.

### category-axis-category-axis-item-major-grid-lines-width `Number`

The width (in pixels) of the category axis major grid lines.

### category-axis-category-axis-item-major-grid-lines-step `Number`

The step of the category axis major grid lines.

### category-axis-category-axis-item-major-grid-lines-skip `Number`

The skip of the category axis major grid lines.

### category-axis-category-axis-item-major-ticks-color `String`

The color of the category axis major ticks lines. Accepts any valid CSS color string, including hex and rgb.

### category-axis-category-axis-item-major-ticks-size `Number`

The length (in pixels) of the tick line.

### category-axis-category-axis-item-major-ticks-visible `Boolean`

If `category-axis-category-axis-item-major-ticks-visible` is set to `true`, the Chart will display the major ticks of the category axis. By default, the category axis major ticks are visible.

### category-axis-category-axis-item-major-ticks-width `Number`

The width (in pixels) of the major ticks.

### category-axis-category-axis-item-major-ticks-step `Number`

The step of the category axis major ticks.

### category-axis-category-axis-item-major-ticks-skip `Number`

The skip of the category axis major ticks.

### category-axis-category-axis-item-max `Object`

The last date which is displayed on the category date axis. By default, the minimum date is the same as the last category. `category-axis-category-axis-item-max` is often used in combination with the `categoryAxis.min` and `categoryAxis.roundToBaseUnit` options to set up a fixed date range.

### category-axis-category-axis-item-max-date-groups `Number`

The maximum number of groups (categories) that will be displayed when `categoryAxis.baseUnit` is set to `fit` or when `categoryAxis.baseUnitStep` is set to `auto`.

### category-axis-category-axis-item-max-divisions `Number`

The maximum number of ticks and labels that will be displayed. Applicable for the date category axis.

### category-axis-category-axis-item-min `Object`

The first date which is displayed on the category date axis. By default, the minimum date is the same as the first category. `category-axis-category-axis-item-min` is often used in combination with the `categoryAxis.min` and `categoryAxis.roundToBaseUnit` options to set up a fixed date range.

### category-axis-category-axis-item-minor-grid-lines-color `String`

The color of the minor grid lines. Accepts any valid CSS color string, including hex and rgb.

### category-axis-category-axis-item-minor-grid-lines-dash-type `String`

The dash type of the minor grid lines.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### category-axis-category-axis-item-minor-grid-lines-visible `Boolean`

If `category-axis-category-axis-item-minor-grid-lines-visible` is set to `true`, the Chart will display the minor grid lines. By default, the minor grid lines are visible.

### category-axis-category-axis-item-minor-grid-lines-width `Number`

The width (in pixels) of the category axis minor grid lines.

### category-axis-category-axis-item-minor-grid-lines-step `Number`

The step of the category axis minor grid lines.

### category-axis-category-axis-item-minor-grid-lines-skip `Number`

The skip of the category axis minor grid lines.

### category-axis-category-axis-item-minor-ticks-color `String`

The color of the category axis minor ticks lines. Accepts any valid CSS color string, including hex and rgb.

### category-axis-category-axis-item-minor-ticks-size `Number`

The length (in pixels) of the tick line.

### category-axis-category-axis-item-minor-ticks-visible `Boolean`

If `category-axis-category-axis-item-minor-ticks-visible` is set to `true`, the Chart will display the minor ticks of the category axis. By default, the category axis minor ticks are visible.

### category-axis-category-axis-item-minor-ticks-width `Number`

The width (in pixels) of the minor ticks.

### category-axis-category-axis-item-minor-ticks-step `Number`

The step of the category axis minor ticks.

### category-axis-category-axis-item-minor-ticks-skip `Number`

The skip of the category axis minor ticks.

### category-axis-category-axis-item-name `String`

The unique axis name. Used to associate a series with a category axis that uses the `series.categoryAxis` option.

### category-axis-category-axis-item-pane `String`

The name of the pane that in which the category axis will be rendered. If `category-axis-category-axis-item-pane` is not set, the axis will be rendered in the first (default) pane.

### category-axis-category-axis-item-plot-bands `Array`

The plot bands of the category axis.

### category-axis-category-axis-item-reverse `Boolean`

If `category-axis-category-axis-item-reverse` is set to `true`, the category axis direction will be reversed. By default, categories are listed from left to right and from bottom to top.

### category-axis-category-axis-item-round-to-base-unit `Boolean`

If `category-axis-category-axis-item-round-to-base-unit` is set to `true`, the Chart will round the first and last date to the nearest base unit. If `series.type` is set to `bar`, `column`, `boxPlot`, `ohlc`, `candlestick`, or `waterfall`, the `roundToBaseUnit` option will be ignored.

### category-axis-category-axis-item-select-from `Object`

The lower boundary of the selected range.

### category-axis-category-axis-item-select-max `Object`

The maximum value which the user can select.

### category-axis-category-axis-item-select-min `Object`

The minimum value which the user can select.

### category-axis-category-axis-item-select-mousewheel-reverse `Boolean`

If `category-axis-category-axis-item-select-mousewheel-reverse` is set to `true`, the mouse wheel direction will be reversed. The default direction for zooming out is down and for zooming in is up.

### category-axis-category-axis-item-select-mousewheel-zoom `String`

The zoom direction.

The supported values are:

* `both`&mdash;Zooming expands and contracts the selection on both sides.
* `left`&mdash;Zooming expands and contracts the selection on the left side only.
* `right`&mdash;Zooming expands and contracts the selection on right side only.

### category-axis-category-axis-item-select-to `Object`

The upper boundary of the selected range.

### category-axis-category-axis-item-start-angle `Number`

The angle (in degrees) of the first category on the axis. Angles increase clockwise and zero is to the left. Negative values are acceptable.

### category-axis-category-axis-item-title-background `String`

The background color of the title. Accepts any valid CSS color string, including hex and rgb.

### category-axis-category-axis-item-title-border-color `String`

The color of the border. Accepts any valid CSS color string, including hex and rgb.

### category-axis-category-axis-item-title-border-dash-type `String`

The dash type of the border.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### category-axis-category-axis-item-title-border-width `Number`

The width (in pixels) of the border. By default, the border width is set to zero which means that the border will not appear.

### category-axis-category-axis-item-title-color `String`

The text color of the title. Accepts any valid CSS color string, including hex and rgb.

### category-axis-category-axis-item-title-font `String`

The font style of the title.

### category-axis-category-axis-item-title-margin `Number`

The margin of the title. A numeric value will set all margins.

### category-axis-category-axis-item-title-margin-bottom `Number`

The bottom margin of the title.

### category-axis-category-axis-item-title-margin-left `Number`

The left margin of the title.

### category-axis-category-axis-item-title-margin-right `Number`

The right margin of the title.

### category-axis-category-axis-item-title-margin-top `Number`

The top margin of the title.

### category-axis-category-axis-item-title-padding `Number`

The padding of the title. A numeric value will set all paddings.

### category-axis-category-axis-item-title-padding-bottom `Number`

The bottom padding of the title.

### category-axis-category-axis-item-title-padding-left `Number`

The left padding of the title.

### category-axis-category-axis-item-title-padding-right `Number`

The right padding of the title.

### category-axis-category-axis-item-title-padding-top `Number`

The top padding of the title.

### category-axis-category-axis-item-title-position `String`

The position of the title.

The supported values are:

* `top`&mdash;(Applicable to vertical axes) The axis title is positioned on the top.
* `bottom`&mdash;(Applicable to vertical axes) The axis title is positioned on the bottom.
* `left`&mdash;(Applicable to horizontal axes) The axis title is positioned on the left.
* `right`&mdash;(Applicable to horizontal axes) The axis title is positioned on the right.
* `center`&mdash;The axis title is positioned in the center.

### category-axis-category-axis-item-title-rotation `Number`

The rotation angle of the title. By default, the title is not rotated.

### category-axis-category-axis-item-title-text `String`

The text of the title.

### category-axis-category-axis-item-title-visible `Boolean`

If `category-axis-category-axis-item-title-visible` is set to `true`, the Chart will display the category axis title. By default, the category axis title is visible.

### category-axis-category-axis-item-title-visual `Function`

A function that can be used to create a custom visual for the title.

The supported argument fields are:

* `text`&mdash;The label text.
* `rect`&mdash;The `kendo.geometry.Rect` that defines where the visual will be rendered.
* `sender`&mdash;The Chart instance (may be undefined).
* `options`&mdash;The label options.
* `createVisual`&mdash;A function that gets the default visual.

### category-axis-category-axis-item-type `String`

The category axis type.

The supported values are:

* `category`&mdash;A discrete category axis.
* `date`&mdash;A specialized axis for displaying chronological data..

### category-axis-category-axis-item-visible `Boolean`

If `category-axis-category-axis-item-visible` set to `true`, the Chart will display the category axis. By default, the category axis is visible.

### category-axis-category-axis-item-week-start-day `Number`

The starting weekday when `categoryAxis.baseUnit` is set to `weeks`.

The supported values are:

* `kendo.days.Sunday`&mdash;Equals to 0.
* `kendo.days.Monday`&mdash;Equals to 1.
* `kendo.days.Tuesday`&mdash;Euals to 2.
* `kendo.days.Wednesday`&mdash;Equals to 3.
* `kendo.days.Thursday`&mdash;Equals to 4.
* `kendo.days.Friday`&mdash;Equals to 5.
* `kendo.days.Saturday`&mdash;Equals to 6.

### category-axis-category-axis-item-notes-position `String`

The position of the category axis note.

The supported values are:

* `top`&mdash;The note is positioned on the top.
* `bottom`&mdash;The note is positioned on the bottom.
* `left`&mdash;The note is positioned on the left.
* `right`&mdash;The note is positioned on the right.

### category-axis-category-axis-item-notes-icon-background `String`

The background color of the notes icon.

### category-axis-category-axis-item-notes-icon-border-color `String`

The border color of the icon.

### category-axis-category-axis-item-notes-icon-border-width `Number`

The border width (in pixels) of the icon.

### category-axis-category-axis-item-notes-icon-size `Number`

The size of the icon.

### category-axis-category-axis-item-notes-icon-type `String`

The icon shape.

The supported values are:

* `circle`&mdash;The marker shape is circular.
* `square`&mdash;The marker shape is square.
* `triangle`&mdash;The marker shape is triangular.
* `cross`&mdash;The marker is in the shape of a cross.

### category-axis-category-axis-item-notes-icon-visible `Boolean`

The icon visibility.

### category-axis-category-axis-item-notes-label-background `String`

The background color of the label. Accepts any valid CSS color string, including hex and rgb.

### category-axis-category-axis-item-notes-label-border-color `String`

The color of the border. Accepts any valid CSS color string, including hex and rgb.

### category-axis-category-axis-item-notes-label-border-dash-type `String`

The dash type of the border.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### category-axis-category-axis-item-notes-label-border-width `Number`

The width (in pixels) of the border. By default, the border width is set to zero which means that the border will not appear.

### category-axis-category-axis-item-notes-label-color `String`

The text color of the label. Accepts any valid CSS color string, including hex and rgb.

### category-axis-category-axis-item-notes-label-font `String`

The font style of the label.

### category-axis-category-axis-item-notes-label-template `String | Function`

The template which renders the labels. The template supports the `value` field which represents the category value.

### category-axis-category-axis-item-notes-label-visible `Boolean`

If `category-axis-category-axis-item-notes-label-visible` is set to `true`, the Chart will display the category notes label. By default, the category notes labels are visible.

### category-axis-category-axis-item-notes-label-rotation `Number`

The rotation angle of the label. By default, the labels are not rotated.

### category-axis-category-axis-item-notes-label-format `String`

The format that is used to display the label of the notes. Uses `kendo.format`. Contains one placeholder (`{0}`) which represents the category value.

### category-axis-category-axis-item-notes-label-position `String`

The position of the labels.

The supported values are:

* `inside`&mdash;The label is positioned inside the icon.
* `outside`&mdash;Te label is positioned outside the icon.

### category-axis-category-axis-item-notes-line-dash-type `String`

The dash type of the note line.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### category-axis-category-axis-item-notes-line-width `Number`

The line width (in pixels) of the notes.

### category-axis-category-axis-item-notes-line-color `String`

The line color of the notes.

### category-axis-category-axis-item-notes-line-length `Number`

The length (in pixels) of the connecting lines.

### category-axis-category-axis-item-notes-data `Array`

The items of the notes.

### category-axis-category-axis-item-notes-visual `Function`

A function that can be used to create a custom visual for the notes.

The supported argument fields are:

* `text`&mdash;The label text.
* `rect`&mdash;The `kendo.geometry.Rect` that defines where the visual will be rendered.
* `sender`&mdash;The Chart instance (may be undefined).
* `options`&mdash;The label options.
* `createVisual`&mdash;A function that gets the default visual.

## Suggested Links

* [`CategoryAxis` in Kendo UI Chart for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/configuration/categoryaxis)
