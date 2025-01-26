---
title: categoryAxisProps StockChart API
description: "API Index | categoryAxisProps"
api_reference: true
slug: api_stockchart_categoryaxisprops_wrapper
---

# CategoryAxisProps

### category-axis-category-axis-item-axis-crossing-value `Object | Date | Array`

* (For objects) The category index at which the first value axis crosses this axis.
* (For arrays) The category indices at which the value axes cross the value axis.

> To denote the far end of the axis, specify an index that is greater than or equal to the number of categories.

### category-axis-category-axis-item-categories `Array`

An array of category names.

### category-axis-category-axis-item-color `String`

The color that will apply to all axis elements. Accepts any valid CSS color string, including hex and rgb. Individual color settings for line and labels take priority.

### category-axis-category-axis-item-field `String`

The data field which contains the category name.

### category-axis-category-axis-item-justified `Boolean`

The positions of categories and series points on major ticks. Setting `category-axis-category-axis-item-justified` removes the empty space before and after the series. `category-axis-category-axis-item-justified` is ignored if either OHLC or Candlestick series are plotted on the axis.

### category-axis-category-axis-item-labels-background `String`

The background color of the labels. Accepts any valid CSS color string, including hex and rgb.

### category-axis-category-axis-item-labels-border-color `String`

The color of the border. Accepts any valid CSS color string, including hex and rgb.

### category-axis-category-axis-item-labels-border-dash-type `String`

The dash type of the border.

### category-axis-category-axis-item-labels-border-width `Number`

The width of the border.

### category-axis-category-axis-item-labels-color `String`

The text color of the labels. Accepts any valid CSS color string, including hex and rgb.

### category-axis-category-axis-item-labels-font `String`

The font style of the labels.

### category-axis-category-axis-item-labels-format `String`

The format of the labels.

### category-axis-category-axis-item-labels-margin `Number | Object`

The margin of the labels.

### category-axis-category-axis-item-labels-mirror `Boolean`

Mirrors the axis labels and ticks. If the labels are normally on the left side of the axis, mirroring the axis will render them to the right.

### category-axis-category-axis-item-labels-padding `Number | Object`

The padding of the labels.

### category-axis-category-axis-item-labels-rotation `Number`

The rotation angle of the labels.

### category-axis-category-axis-item-labels-skip `Number`

The number of labels that will be skipped. Skips the rendering of the first `n` labels.

### category-axis-category-axis-item-labels-step `Number`

The step for rendering the label. Renders every n<sup>th</sup> label where `n` is the step.

### category-axis-category-axis-item-labels-template `String | Function`

The template which renders the labels.

The template supports the following fields:

* `value`&mdash;The category value.
* `dataItem`&mdash;The data item if a field was specified.

### category-axis-category-axis-item-labels-visible `Boolean`

The visibility of the labels.

### category-axis-category-axis-item-labels-culture `String`

The culture that will be used for formatting the dates. By default, uses the global culture. For more information, refer to the article on [globalization](https://docs.telerik.com/kendo-ui/framework/globalization/overview).

### category-axis-category-axis-item-labels-date-formats `Object`

The strings for date formatting.

### category-axis-category-axis-item-line-color `String`

The color of the lines. Accepts any valid CSS color string, including hex and rgb. Affects also the major and minor ticks but not the grid lines.

### category-axis-category-axis-item-line-dash-type `String`

The dash type of the line.

### category-axis-category-axis-item-line-visible `Boolean`

The visibility of the lines.

### category-axis-category-axis-item-line-width `Number`

The width of the line. Affects also the major and minor ticks but not the grid lines.

### category-axis-category-axis-item-major-grid-lines-color `String`

The color of the lines. Accepts any valid CSS color string, including hex and rgb.

### category-axis-category-axis-item-major-grid-lines-dash-type `String`

The dash type of the grid lines.

### category-axis-category-axis-item-major-grid-lines-visible `Boolean`

The visibility of the lines.

### category-axis-category-axis-item-major-grid-lines-width `Number`

The width of the lines.

### category-axis-category-axis-item-major-grid-lines-step `Number`

The step of the category axis major grid lines.

### category-axis-category-axis-item-major-grid-lines-skip `Number`

The skip of the category axis major grid lines.

### category-axis-category-axis-item-major-ticks-color `String`

The color of the category axis major ticks lines. Accepts a valid CSS color string, including hex and rgb.

### category-axis-category-axis-item-major-ticks-size `Number`

The axis major tick size. This is the length of the line in pixels that is drawn to indicate the tick on the chart.

### category-axis-category-axis-item-major-ticks-width `Number`

The width of the major ticks in pixels.

### category-axis-category-axis-item-major-ticks-visible `Boolean`

The visibility of the major ticks.

### category-axis-category-axis-item-major-ticks-step `Number`

The step of the category axis major ticks.

### category-axis-category-axis-item-major-ticks-skip `Number`

The skip of the category axis major ticks.

### category-axis-category-axis-item-minor-grid-lines-color `String`

The color of the lines. Accepts any valid CSS color string, including hex and rgb. Setting `category-axis-category-axis-item-minor-grid-lines-color` takes effect only if the visibility of the minor grid lines is set to `true`.

### category-axis-category-axis-item-minor-grid-lines-dash-type `String`

The dash type of the grid lines.

### category-axis-category-axis-item-minor-grid-lines-visible `Boolean`

The visibility of the lines.

### category-axis-category-axis-item-minor-grid-lines-width `Number`

The width of the lines. Setting `category-axis-category-axis-item-minor-grid-lines-width` takes effect only if the visibility of the minor grid lines is set to `true`.

### category-axis-category-axis-item-minor-grid-lines-step `Number`

The step of the category axis minor grid lines.

### category-axis-category-axis-item-minor-grid-lines-skip `Number`

The skip of the category axis minor grid lines.

### category-axis-category-axis-item-minor-ticks-size `Number`

The axis minor tick size. Represents the length of the line in pixels that is drawn to indicate the tick on the chart.

### category-axis-category-axis-item-minor-ticks-visible `Boolean`

The visibility of the minor ticks.

### category-axis-category-axis-item-minor-ticks-color `String`

The color of the category axis minor ticks lines. Accepts a valid CSS color string, including hex and rgb.

### category-axis-category-axis-item-minor-ticks-width `Number`

The width of the minor ticks in pixels.

### category-axis-category-axis-item-minor-ticks-step `Number`

The step of the category axis minor ticks.

### category-axis-category-axis-item-minor-ticks-skip `Number`

The skip of the category axis minor ticks.

### category-axis-category-axis-item-name `String`

The unique axis name.

### category-axis-category-axis-item-pane `String`

The name of the pane that the axis should be rendered in. The axis will be rendered in the first (default) pane if not set.

### category-axis-category-axis-item-plot-bands `Array`

The plot bands of the category axis.

### category-axis-category-axis-item-reverse `Boolean`

Reverses the axis direction&mdash;categories are listed from right to left and from top to bottom.

### category-axis-category-axis-item-select-from `String | Date`

The lower boundary of the selected range.

### category-axis-category-axis-item-select-to `String | Date`

The upper boundary of the selected range. The category with the specified date is included in the selected range only is the axis is justified. To select all categories, specify a value that is larger than the last category date.

### category-axis-category-axis-item-select-min `Object`

The minimum value that is selectable by the user.

### category-axis-category-axis-item-select-max `Object`

The maximum selectable value. The category with the specified index (date) is included in the selected range only if the axis is justified. To select all categories, specify a value that is larger than the last category index (date).

### category-axis-category-axis-item-select-mousewheel-reverse `Boolean`

Reverses the zoom direction on mouse wheel. The default direction for zooming out is down and for zooming in is up.

### category-axis-category-axis-item-select-mousewheel-zoom `String`

The zoom direction.

The supported values are:

* `both`&mdash;Zooming expands and contracts the selection on both sides.
* `left`&mdash;Zooming expands and contracts the selection on the left side only.
* `right`&mdash;Zooming expands and contracts the selection on right side only.

### category-axis-category-axis-item-title-background `String`

The background color of the title. Accepts any valid CSS color string, including hex and rgb.

### category-axis-category-axis-item-title-border-color `String`

The color of the border. Accepts any valid CSS color string, including hex and rgb.

### category-axis-category-axis-item-title-border-dash-type `String`

The dash type of the border.

### category-axis-category-axis-item-title-border-width `Number`

The width of the border.

### category-axis-category-axis-item-title-color `String`

The text color of the title. Accepts any valid CSS color string, including hex and rgb.

### category-axis-category-axis-item-title-font `String`

The font style of the title.

### category-axis-category-axis-item-title-margin `Number | Object`

The margin of the title.

### category-axis-category-axis-item-title-position `String`

The position of the title.

### category-axis-category-axis-item-title-rotation `Number`

The rotation angle of the title.

### category-axis-category-axis-item-title-text `String`

The text of the title.

### category-axis-category-axis-item-title-visible `Boolean`

The visibility of the title.

### category-axis-category-axis-item-type `String`

The axis type.

### category-axis-category-axis-item-auto-base-unit-steps-days `Array`

The days unit steps.

### category-axis-category-axis-item-auto-base-unit-steps-hours `Array`

The hours unit steps.

### category-axis-category-axis-item-auto-base-unit-steps-minutes `Array`

The minutes unit steps.

### category-axis-category-axis-item-auto-base-unit-steps-months `Array`

The months unit steps.

### category-axis-category-axis-item-auto-base-unit-steps-weeks `Array`

The weeks unit steps.

### category-axis-category-axis-item-auto-base-unit-steps-years `Array`

The years unit steps.

### category-axis-category-axis-item-background `String`

The background color of the axis.

### category-axis-category-axis-item-base-unit `String`

The base time interval for the axis. The default `baseUnit` is determined automatically from the minimum difference between subsequent categories.

The supported options are:

* minutes
* hours
* days
* weeks
* months
* years
* `fit`&mdash;Setting `baseUnitto` to `fit` will set such `baseUnit` and `categoryAxis.baseUnitStep` values that the total number of categories does not exceed `categoryAxis.maxDateGroups`. The series data will be aggregated for the specified base unit by using the `series.aggregate` function.

### category-axis-category-axis-item-base-unit-step `Object`

The step (in intervals) between the categories in base units. Setting `category-axis-category-axis-item-base-unit-step` to `auto` sets the step to a value which provides a total number of categories that does not exceed `categoryAxis.maxDateGroups`. If `categoryAxis.baseUnit` is set to `fit`, `category-axis-category-axis-item-base-unit-step` is ignored.

### category-axis-category-axis-item-max `Object`

The last date that is displayed on the axis. By default, the minimum date is the same as the last category. `category-axis-category-axis-item-max` is often used in combination with the `min` and `roundToBaseUnit` configuration options to set up a fixed date range.

### category-axis-category-axis-item-min `Object`

The first date that is displayed on the axis. By default, the minimum date is the same as the first category. `category-axis-category-axis-item-min` is often used in combination with the `max` and `roundToBaseUnit` configuration options to set up a fixed date range.

### category-axis-category-axis-item-round-to-base-unit `Boolean`

By default, the first and last dates will be rounded off to the nearest base unit. Specifying `false` for `category-axis-category-axis-item-round-to-base-unit` will disable this behavior. `category-axis-category-axis-item-round-to-base-unit` is useful in combination with explicit `min` and `max` dates. If either Column, OHLC, or Candlestick series are plotted on the axis, `category-axis-category-axis-item-round-to-base-unit` will be ignnored.

### category-axis-category-axis-item-week-start-day `Number`

Specifies the start weekday when `baseUnit` is set to `weeks`. Uses the `kendo.days` constants to specify the day by name.

The supported settings are:

* `kendo.days`.Sunday (0)
* `kendo.days`.Monday (1)
* `kendo.days`.Tuesday (2)
* `kendo.days`.Wednesday (3)
* `kendo.days`.Thursday (4)
* `kendo.days`.Friday (5)
* `kendo.days`.Saturday (6)

### category-axis-category-axis-item-max-date-groups `Number`

Specifies the maximum number of groups (categories) to produce when either `baseUnit` is set to `fit` or `baseUnitStep` is set to `auto`. In all other cases  `category-axis-category-axis-item-max-date-groups` is ignored. The default value is approximately equal to [widget width, px] / 30.

### category-axis-category-axis-item-max-divisions `Number`

The maximum number of ticks and labels to display.

### category-axis-category-axis-item-visible `Boolean`

The visibility of the axis.

### category-axis-category-axis-item-crosshair-color `String`

The color of the crosshair.

### category-axis-category-axis-item-crosshair-width `Number`

The width of the crosshair.

### category-axis-category-axis-item-crosshair-opacity `Number`

The opacity of the crosshair.

### category-axis-category-axis-item-crosshair-dash-type `Number`

The dash type of the crosshair.

### category-axis-category-axis-item-crosshair-visible `Boolean`

The dash type of the crosshair.

### category-axis-category-axis-item-crosshair-tooltip-background `String`

The background color of the tooltip.

### category-axis-category-axis-item-crosshair-tooltip-border-color `String`

The color of the border.

### category-axis-category-axis-item-crosshair-tooltip-border-width `Number`

The width of the border.

### category-axis-category-axis-item-crosshair-tooltip-color `String`

The text color of the tooltip.

### category-axis-category-axis-item-crosshair-tooltip-font `String`

The tooltip font.

### category-axis-category-axis-item-crosshair-tooltip-format `String`

The tooltip format.

### category-axis-category-axis-item-crosshair-tooltip-padding `Number | Object`

The padding of the tooltip.

### category-axis-category-axis-item-crosshair-tooltip-template `String | Function`

The tooltip template. Template variables: value - the point value (either a number or an object).

### category-axis-category-axis-item-crosshair-tooltip-visible `Boolean`

A value that indicates if the tooltip will be displayed.

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

The border width of the icon.

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

The background color of the label. Accepts a valid CSS color string, including hex and rgb.

### category-axis-category-axis-item-notes-label-border-color `String`

The color of the border. Accepts a valid CSS color string, including hex and rgb.

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

The text color of the label. Accepts a valid CSS color string, including hex and rgb.

### category-axis-category-axis-item-notes-label-font `String`

The font style of the label.

### category-axis-category-axis-item-notes-label-template `String | Function`

The template which renders the labels. The template supports the `value` field which represents the category value.

### category-axis-category-axis-item-notes-label-visible `Boolean`

If `category-axis-category-axis-item-notes-label-visible` is set to `true`, the Chart will display the category notes label. By default, the category notes labels are visible.

### category-axis-category-axis-item-notes-label-rotation `Number`

The rotation angle of the label. By default, the labels are not rotated.

### category-axis-category-axis-item-notes-label-format `String`

The format for displaying the notes label. Uses `kendo.format`. Contains one placeholder (`{0}`) which represents the category value.

### category-axis-category-axis-item-notes-label-position `String`

The position of the labels.

The supported values are:

* `inside`&mdash;The label is positioned inside the icon.
* `outside`&mdash;Te label is positioned outside the icon.

### category-axis-category-axis-item-notes-line-width `Number`

The line width of the notes.

### category-axis-category-axis-item-notes-line-color `String`

The line color of the notes.

### category-axis-category-axis-item-notes-line-length `Number`

The length of the connecting lines in pixels.

### category-axis-category-axis-item-notes-data `Array`

The items of the notes.

## Suggested Links

* [`CategoryAxis` in Kendo UI StockChart for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/configuration/categoryaxis)
