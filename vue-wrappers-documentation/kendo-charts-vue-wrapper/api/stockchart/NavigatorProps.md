---
title: navigatorProps StockChart API
description: "API Index | navigatorProps"
api_reference: true
slug: api_stockchart_navigatorprops_wrapper
---

# NavigatorProps

### navigator-category-axis-auto-base-unit-steps-seconds `Array`

The seconds unit steps.

### navigator-category-axis-auto-base-unit-steps-minutes `Array`

The minutes unit steps.

### navigator-category-axis-auto-base-unit-steps-hours `Array`

The hours unit steps.

### navigator-category-axis-auto-base-unit-steps-days `Array`

The days unit steps.

### navigator-category-axis-auto-base-unit-steps-weeks `Array`

The weeks unit steps.

### navigator-category-axis-auto-base-unit-steps-months `Array`

The months unit steps.

### navigator-category-axis-auto-base-unit-steps-years `Array`

The years unit steps.

### navigator-category-axis-axis-crossing-value `Object | Date | Array`

* (For objects) The category index at which the first value axis crosses this axis.
* (For arrays) The category indices at which the value axes cross the category axis.

### navigator-category-axis-background `String`

The background color of the axis.

### navigator-category-axis-base-unit `String`

The base time interval for the date axis. The default base unit is determined automatically from the minimum difference between subsequent categories.

The supported values are:

* `fit`&mdash;Setting `baseUnit` to `fit` will set such base unit and `categoryAxis.baseUnitStep` values that the total number of categories will not exceed `categoryAxis.maxDateGroups`. Series data is aggregated for the specified base unit by using the `series.aggregate` function.
* `seconds`
* `minutes`
* `hours`
* `days`
* `weeks`
* `months`
* `years`

### navigator-category-axis-base-unit-step `Object`

The step (in intervals) between the categories in base units. Setting `navigator-category-axis-base-unit-step` to `auto` sets the step to a value which provides a total number of categories that does not exceed `categoryAxis.maxDateGroups`. If `categoryAxis.baseUnit` is set to `fit`, `navigator-category-axis-base-unit-step` is ignored.

### navigator-category-axis-categories `Array`

The category names. The chart will create a category for every item of the array.

### navigator-category-axis-color `String`

The color that will apply to all axis elements. Accepts any valid CSS color string, including hex and rgb. Can be overridden by `categoryAxis.labels.color` and `categoryAxis.line.color`.

### navigator-category-axis-crosshair-color `String`

The color of the crosshair. Accepts any valid CSS color string, including hex and rgb.

### navigator-category-axis-crosshair-opacity `Number`

The opacity of the crosshair. By default, the crosshair is opaque.

### navigator-category-axis-crosshair-tooltip-background `String`

The background color of the tooltip. Accepts any valid CSS color string, including hex and rgb.

### navigator-category-axis-crosshair-tooltip-border-color `String`

The color of the border. Accepts any valid CSS color string, including hex and rgb.

### navigator-category-axis-crosshair-tooltip-border-dash-type `String`

The dash type of the border.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### navigator-category-axis-crosshair-tooltip-border-width `Number`

The width (in pixels) of the border. By default, the border width is set to zero which means that the border will not appear.

### navigator-category-axis-crosshair-tooltip-color `String`

The text color of the tooltip. Accepts any valid CSS color string, including hex and rgb.

### navigator-category-axis-crosshair-tooltip-font `String`

The tooltip font.

### navigator-category-axis-crosshair-tooltip-format `String`

The format for displaying the tooltip. Uses `kendo.format`. Contains one placeholder (`{0}`) which represents the category value.

### navigator-category-axis-crosshair-tooltip-padding `Number`

The padding of the crosshair tooltip. A numeric value will set all paddings.

### navigator-category-axis-crosshair-tooltip-padding-bottom `Number`

The bottom padding of the crosshair tooltip.

### navigator-category-axis-crosshair-tooltip-padding-left `Number`

The left padding of the crosshair tooltip.

### navigator-category-axis-crosshair-tooltip-padding-right `Number`

The right padding of the crosshair tooltip.

### navigator-category-axis-crosshair-tooltip-padding-top `Number`

The top padding of the crosshair tooltip.

### navigator-category-axis-crosshair-tooltip-template `String | Function`

The template which renders the tooltip. The template supports the `value` filed which represents the category value.

### navigator-category-axis-crosshair-tooltip-visible `Boolean`

If `navigator-category-axis-crosshair-tooltip-visible` is set to `true`, the Chart will display the category axis crosshair tooltip. By default, the category axis crosshair tooltip is not visible.

### navigator-category-axis-crosshair-visible `Boolean`

If `navigator-category-axis-crosshair-visible` is set to `true`, the Chart will display the category axis crosshair. By default, the category axis crosshair is not visible.

### navigator-category-axis-crosshair-width `Number`

The width (in pixels) of the crosshair.

### navigator-category-axis-field `String`

The data item field which contains the category name. Requires you to set the `dataSource` option.

### navigator-category-axis-justified `Boolean`

If `navigator-category-axis-justified` is set to `true`, the Chart will position categories and series points on major ticks, which removes the empty space before and after the series. Except for Area and Vertical Area series, defaults to `false`.

### navigator-category-axis-labels-background `String`

The background color of the labels. Accepts any valid CSS color string, including hex and rgb.

### navigator-category-axis-labels-border-color `String`

The color of the border. Accepts any valid CSS color string, including hex and rgb.

### navigator-category-axis-labels-border-dash-type `String`

The dash type of the border.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### navigator-category-axis-labels-border-width `Number`

The width (in pixels) of the border. By default, the border width is set to zero which means that the border will not appear.

### navigator-category-axis-labels-color `String`

The text color of the labels. Accepts any valid CSS color string, including hex and rgb.

### navigator-category-axis-labels-culture `String`

The culture that will be used when formatting date values. For more information, refer to the article on [globalization](https://docs.telerik.com/kendo-ui/framework/globalization/overview).

### navigator-category-axis-labels-date-formats-days `String`

The format that is used when `categoryAxis.baseUnit` is set to `days`.

### navigator-category-axis-labels-date-formats-hours `String`

The format that is used when `categoryAxis.baseUnit` is set to `hours`.

### navigator-category-axis-labels-date-formats-months `String`

The format that is used when `categoryAxis.baseUnit` is set to `months`.

### navigator-category-axis-labels-date-formats-weeks `String`

The format that is used when `categoryAxis.baseUnit` is set to `weeks`.

### navigator-category-axis-labels-date-formats-years `String`

The format that is used when `categoryAxis.baseUnit` is set to `years`.

### navigator-category-axis-labels-font `String`

The font style of the labels.

### navigator-category-axis-labels-format `String`

The format for displaying the labels. Uses `kendo.format`. Contains one placeholder (`{0}`) which represents the category value.

### navigator-category-axis-labels-margin `Number`

The margin of the labels. A numeric value will set all margins.

### navigator-category-axis-labels-margin-bottom `Number`

The bottom margin of the labels.

### navigator-category-axis-labels-margin-left `Number`

The left margin of the labels.

### navigator-category-axis-labels-margin-right `Number`

The right margin of the labels.

### navigator-category-axis-labels-margin-top `Number`

The top margin of the labels.

### navigator-category-axis-labels-mirror `Boolean`

If `navigator-category-axis-labels-mirror` is set to `true`, the Chart will mirror the axis labels and ticks. If the labels are normally on the left side of the axis, mirroring the axis will render them to the right.

### navigator-category-axis-labels-padding `Number`

The padding of the labels. A numeric value will set all paddings.

### navigator-category-axis-labels-padding-bottom `Number`

The bottom padding of the labels.

### navigator-category-axis-labels-padding-left `Number`

The left padding of the labels.

### navigator-category-axis-labels-padding-right `Number`

The right padding of the labels.

### navigator-category-axis-labels-padding-top `Number`

The top padding of the labels.

### navigator-category-axis-labels-rotation `Number`

The rotation angle of the labels. By default, the labels are not rotated.

### navigator-category-axis-labels-skip `Number`

The number of labels to skip. By default, no labels are skipped.

### navigator-category-axis-labels-step `Number`

The step for rendering the label. By default, every label is rendered.

### navigator-category-axis-labels-template `String | Function`

The template which renders the labels. The template supports the `value` filed which represents the category value.

### navigator-category-axis-labels-visible `Boolean`

If `navigator-category-axis-labels-visible` is set to `true`, the Chart will display the category axis labels. By default, the category axis labels are visible.

### navigator-category-axis-line-color `String`

The color of the lines. Accepts any valid CSS color string, including hex and rgb.

### navigator-category-axis-line-dash-type `String`

The dash type of the line.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### navigator-category-axis-line-visible `Boolean`

If `navigator-category-axis-line-visible` is set to `true`, the Chart will display the category axis lines. By default, the category axis lines are visible.

### navigator-category-axis-line-width `Number`

The width (in pixels) of the line. Affects also the major and minor ticks but not the grid lines.

### navigator-category-axis-major-grid-lines-color `String`

The color of the major grid lines. Accepts any valid CSS color string, including hex and rgb.

### navigator-category-axis-major-grid-lines-dash-type `String`

The dash type of the major grid lines.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### navigator-category-axis-major-grid-lines-visible `Boolean`

If `navigator-category-axis-major-grid-lines-visible` is set to `true`, the Chart will display the major grid lines. By default, the major grid lines are visible.

### navigator-category-axis-major-grid-lines-width `Number`

The width (in pixels) of the category axis major grid lines.

### navigator-category-axis-major-grid-lines-step `Number`

The step of the category axis major grid lines.

### navigator-category-axis-major-grid-lines-skip `Number`

The skip of the category axis major grid lines.

### navigator-category-axis-major-ticks-color `String`

The color of the category axis major ticks lines. Accepts any valid CSS color string, including hex and rgb.

### navigator-category-axis-major-ticks-size `Number`

The length (in pixels) of the tick line.

### navigator-category-axis-major-ticks-visible `Boolean`

If `navigator-category-axis-major-ticks-visible` is set to `true`, the Chart will display the category axis major ticks. By default, the category axis major ticks are visible.

### navigator-category-axis-major-ticks-width `Number`

The width of the major ticks in pixels.

### navigator-category-axis-major-ticks-step `Number`

The step of the category axis major ticks.

### navigator-category-axis-major-ticks-skip `Number`

The skip of the category axis major ticks.

### navigator-category-axis-max `Object`

The last date that is displayed on the category date axis. By default, the minimum date is the same as the last category. Often used in combination with the `categoryAxis.min` and `categoryAxis.roundToBaseUnit` options to set up a fixed date range.

### navigator-category-axis-max-date-groups `Number`

The maximum number of groups (categories) to display when `categoryAxis.baseUnit` is set to `fit` or when `categoryAxis.baseUnitStep` is set to `auto`.

### navigator-category-axis-min `Object`

The first date that is displayed on the category date axis. By default, the minimum date is the same as the first category. Often used in combination with the `categoryAxis.min` and `categoryAxis.roundToBaseUnit` options to set up a fixed date range.

### navigator-category-axis-minor-grid-lines-color `String`

The color of the minor grid lines. Accepts any valid CSS color string, including hex and rgb.

### navigator-category-axis-minor-grid-lines-dash-type `String`

The dash type of the minor grid lines.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### navigator-category-axis-minor-grid-lines-visible `Boolean`

If `navigator-category-axis-minor-grid-lines-visible` is set to `true`, the Chart will display the minor grid lines. By default, the minor grid lines are visible.

### navigator-category-axis-minor-grid-lines-width `Number`

The width (in pixels) of the category axis minor grid lines.

### navigator-category-axis-minor-grid-lines-step `Number`

The step of the category axis minor grid lines.

### navigator-category-axis-minor-grid-lines-skip `Number`

The skip of the category axis minor grid lines.

### navigator-category-axis-minor-ticks-color `String`

The color of the category axis minor ticks lines. Accepts any valid CSS color string, including hex and rgb.

### navigator-category-axis-minor-ticks-size `Number`

The length (in pixels) of the tick line.

### navigator-category-axis-minor-ticks-visible `Boolean`

If `navigator-category-axis-minor-ticks-visible` is set to `true`, the Chart will display the category axis minor ticks. By default, the category axis minor ticks are visible.

### navigator-category-axis-minor-ticks-width `Number`

The width (in pixels) of the minor ticks.

### navigator-category-axis-minor-ticks-step `Number`

The step of the category axis minor ticks.

### navigator-category-axis-minor-ticks-skip `Number`

The skip of the category axis minor ticks.

### navigator-category-axis-plot-bands `Array`

The plot bands of the category axis.

### navigator-category-axis-reverse `Boolean`

If `navigator-category-axis-reverse` is set to `true`, the category axis direction will be reversed. By default, categories are listed from left to right and from bottom to top.

### navigator-category-axis-round-to-base-unit `Boolean`

If `navigator-category-axis-round-to-base-unit` is set to `true`, the Chart will round the first and last date to the nearest base unit. If `series.type` is set to `bar`, `column`, `ohlc`, or `candlestick`, the `roundToBaseUnit` option will be ignored.

### navigator-category-axis-title-background `String`

The background color of the title. Accepts any valid CSS color string, including hex and rgb.

### navigator-category-axis-title-border-color `String`

The color of the border. Accepts any valid CSS color string, including hex and rgb.

### navigator-category-axis-title-border-dash-type `String`

The dash type of the border.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### navigator-category-axis-title-border-width `Number`

The width (in pixels) of the border. By default, the border width is set to zero which means that the border will not appear.

### navigator-category-axis-title-color `String`

The text color of the title. Accepts any valid CSS color string, including hex and rgb.

### navigator-category-axis-title-font `String`

The font style of the title.

### navigator-category-axis-title-margin `Number`

The margin of the title. A numeric value will set all margins.

### navigator-category-axis-title-margin-bottom `Number`

The bottom margin of the title.

### navigator-category-axis-title-margin-left `Number`

The left margin of the title.

### navigator-category-axis-title-margin-right `Number`

The right margin of the title.

### navigator-category-axis-title-margin-top `Number`

The top margin of the title.

### navigator-category-axis-title-padding `Number`

The padding of the title. A numeric value will set all paddings.

### navigator-category-axis-title-padding-bottom `Number`

The bottom padding of the title.

### navigator-category-axis-title-padding-left `Number`

The left padding of the title.

### navigator-category-axis-title-padding-right `Number`

The right padding of the title.

### navigator-category-axis-title-padding-top `Number`

The top padding of the title.

### navigator-category-axis-title-position `String`

The position of the title.

The supported values are:

* `top`&mdash;(Applicable to vertical axes) The axis title is positioned on the top.
* `bottom`&mdash;(Applicable to vertical axes) The axis title is positioned on the bottom.
* `left`&mdash;(Applicable to horizontal axes) The axis title is positioned on the left.
* `right`&mdash;(Applicable to horizontal axes) The axis title is positioned on the right.
* `center`&mdash;The axis title is positioned in the center.

### navigator-category-axis-title-rotation `Number`

The rotation angle of the title. By default, the title is not rotated.

### navigator-category-axis-title-text `String`

The text of the title.

### navigator-category-axis-title-visible `Boolean`

If `navigator-category-axis-title-visible` is set to `true`, the Chart will display the category axis title. By default, the category axis title is visible.

### navigator-category-axis-visible `Boolean`

If `navigator-category-axis-visible` is set to `true`, the Chart will display the category axis. By default, the category axis is visible.

### navigator-category-axis-week-start-day `Number`

The start weekday when `categoryAxis.baseUnit` is set to `weeks`.

The supported settings are:

* `kendo.days`.Sunday (0)
* `kendo.days`.Monday (1)
* `kendo.days`.Tuesday (2)
* `kendo.days`.Wednesday (3)
* `kendo.days`.Thursday (4)
* `kendo.days`.Friday (5)
* `kendo.days`.Saturday (6)

### navigator-category-axis-notes-position `String`

The position of the category axis note.

The supported values are:

* `top`&mdash;The note is positioned on the top.
* `bottom`&mdash;The note is positioned on the bottom.
* `left`&mdash;The note is positioned on the left.
* `right`&mdash;The note is positioned on the right.

### navigator-category-axis-notes-icon-background `String`

The background color of the notes icon.

### navigator-category-axis-notes-icon-border-color `String`

The border color of the icon.

### navigator-category-axis-notes-icon-border-width `Number`

The border width of the icon.

### navigator-category-axis-notes-icon-size `Number`

The size of the icon.

### navigator-category-axis-notes-icon-type `String`

The icon shape.

The supported values are:

* `circle`&mdash;The marker shape is circular.
* `square`&mdash;The marker shape is square.
* `triangle`&mdash;The marker shape is triangular.
* `cross`&mdash;The marker is in the shape of a cross.

### navigator-category-axis-notes-icon-visible `Boolean`

The icon visibility.

### navigator-category-axis-notes-label-background `String`

The background color of the label. Accepts any valid CSS color string, including hex and rgb.

### navigator-category-axis-notes-label-border-color `String`

The color of the border. Accepts any valid CSS color string, including hex and rgb.

### navigator-category-axis-notes-label-border-dash-type `String`

The dash type of the border.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### navigator-category-axis-notes-label-border-width `Number`

The width (in pixels) of the border in pixels. By default, the border width is set to zero which means that the border will not appear.

### navigator-category-axis-notes-label-color `String`

The text color of the label. Accepts any valid CSS color string, including hex and rgb.

### navigator-category-axis-notes-label-font `String`

The font style of the label.

### navigator-category-axis-notes-label-template `String | Function`

The template which renders the labels. The template supports the `value` field which represents the category value.

### navigator-category-axis-notes-label-visible `Boolean`

If `navigator-category-axis-notes-label-visible` is set to `true`, the Chart will display the category notes label. By default, the category notes label are visible.

### navigator-category-axis-notes-label-rotation `Number`

The rotation angle of the label. By default, the label are not rotated.

### navigator-category-axis-notes-label-format `String`

The format for displaying the notes label. Uses `kendo.format`. Contains one placeholder (`{0}`) which represents the category value.

### navigator-category-axis-notes-label-position `String`

The position of the labels.

The supported values are:

* `inside`&mdash;The label is positioned inside the icon.
* `outside`&mdash;Te label is positioned outside the icon.

### navigator-category-axis-notes-line-width `Number`

The line width of the notes.

### navigator-category-axis-notes-line-color `String`

The line color of the notes.

### navigator-category-axis-notes-line-length `Number`

The length (in pixels) of the connecting lines.

### navigator-category-axis-notes-data `Array`

The items of the notes.

### navigator-data-source `Object`

The configuration or instance of the Navigator DataSource. When the Navigator is bound through its own data source, it automatically sets the `from` and `to` filters on the main data source which, together with the server filtering, allows you to visualize large data sets without loading them at once.

### navigator-auto-bind `Boolean`

Indicates whether the navigator will initially call `read` on the data source. Applicable only when a dedicated navigator data source is used.

### navigator-date-field `String`

The field which contains the point date. Used as a default field for the navigator axis.

### navigator-pane-background `String`

The background color of the pane. Accepts any valid CSS color string, including hex and rgb.

### navigator-pane-border-color `String`

The color of the border. Accepts any valid CSS color string, including hex and rgb.

### navigator-pane-border-dash-type `String`

The dash type of the border.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### navigator-pane-border-width `Number`

The width (in pixels) of the border. By default, the border width is set to zero which means that the border will not appear.

### navigator-pane-height `Number`

The navigator pane height in pixels.

### navigator-pane-margin `Number`

The margin of the pane. A numeric value will set all margins.

### navigator-pane-margin-bottom `Number`

The bottom margin of the navigator pane.

### navigator-pane-margin-left `Number`

The left margin of the navigator pane.

### navigator-pane-margin-right `Number`

The right margin of the navigator pane.

### navigator-pane-margin-top `Number`

The top margin of the navigator pane.

### navigator-pane-name `String`

The unique name of the navigator pane.

### navigator-pane-padding `Number`

The padding of the pane. A numeric value will set all paddings.

### navigator-pane-padding-bottom `Number`

The bottom padding of the navigator pane.

### navigator-pane-padding-left `Number`

The left padding of the navigator pane.

### navigator-pane-padding-right `Number`

The right padding of the navigator pane.

### navigator-pane-padding-top `Number`

The top padding of the navigator pane.

### navigator-pane-title `String`

The title configuration of the navigator pane.

### navigator-pane-title-background `String`

The background color of the title. Accepts any valid CSS color string, including hex and rgb.

### navigator-pane-title-border-color `String`

The color of the border. Accepts any valid CSS color string, including hex and rgb.

### navigator-pane-title-border-dash-type `String`

The dash type of the border.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### navigator-pane-title-border-width `Number`

The width (in pixels) of the border. By default, the border width is set to zero which means that the border will not appear.

### navigator-pane-title-color `String`

The text color of the title. Accepts any valid CSS color string, including hex and rgb.

### navigator-pane-title-font `String`

The font style of the title.

### navigator-pane-title-margin `Number`

The margin of the title. A numeric value will set all margins.

### navigator-pane-title-margin-bottom `Number`

The bottom margin of the title.

### navigator-pane-title-margin-left `Number`

The left margin of the title.

### navigator-pane-title-margin-right `Number`

The right margin of the title.

### navigator-pane-title-margin-top `Number`

The top margin of the title.

### navigator-pane-title-position `String`

The position of the title.

The supported values are:

* `left`&mdash;(Applicable to horizontal axes) The axis title is positioned on the left.
* `right`&mdash;(Applicable to horizontal axes) The axis title is positioned on the right.
* `center`&mdash;The axis title is positioned in the center.

### navigator-pane-title-text `String`

The text of the title.

### navigator-pane-title-visible `Boolean`

If `navigator-pane-title-visible` is set to `true`, the Chart will display the pane title. By default, the pane title is visible.

### navigator-series `Array`

An array of series definitions. Accepts the same options as the root series collection. Omitting the array and specifying a single series is also acceptable.

### navigator-select-from `Date`

The lower boundary of the selected range.

### navigator-select-mousewheel `Boolean`

The mousewheel configuration of the selection. If `navigator-select-mousewheel` is set to `false`, the mousewheel will not update the selection.

### navigator-select-mousewheel-reverse `Boolean`

If `navigator-select-mousewheel-reverse` is set to `true`, the mouse wheel direction will be reversed. The default direction for zooming out is down and for zooming in is up.

### navigator-select-mousewheel-zoom `String`

The zoom direction.

The supported values are:

* `both`&mdash;Zooming expands and contracts the selection on both sides.
* `left`&mdash;Zooming expands and contracts the selection on the left side only.
* `right`&mdash;Zooming expands and contracts the selection on right side only.

### navigator-select-to `Date`

The upper boundary of the selected range.

### navigator-hint-visible `Boolean`

The visibility of the hint.

### navigator-hint-template `String | Function`

The hint template. Template variables: from&mdash;The lower boundary of the selected range or to&mdash;Theupper boundary of the selected range.

### navigator-hint-format `String`

The format of the hint.

### navigator-visible `Boolean`

The visibility of the navigator.

## Suggested Links

* [`Navigator` in Kendo UI StockChart for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/configuration/navigator)
