---
title: valueAxisProps StockChart API
description: "API Index | valueAxisProps"
api_reference: true
slug: api_stockchart_valueaxisprops_wrapper
---

# ValueAxisProps

### value-axis-value-axis-item-axis-crossing-value `Object | Date | Array`

* (For objects) The value at which the category axis crosses this axis.
* (For arrays) The value indices at which the category axes cross the value axis.
* (For dates) The date at which the category axis crosses this axis.

### value-axis-value-axis-item-background `String`

The background color of the axis.

### value-axis-value-axis-item-color `String`

The color that will apply to all axis elements. Individual color settings for line and labels take priority. Accepts any valid CSS color string, including hex and rgb.

### value-axis-value-axis-item-labels-background `String`

The background color of the labels. Any valid CSS color string will work here, including hex and rgb

### value-axis-value-axis-item-labels-border-color `String`

The color of the border. Accepts any valid CSS color string, including hex and rgb.

### value-axis-value-axis-item-labels-border-dash-type `String`

The dash type of the border.

### value-axis-value-axis-item-labels-border-width `Number`

The width of the border.

### value-axis-value-axis-item-labels-color `String`

The text color of the labels. Accepts any valid CSS color string, including hex and rgb.

### value-axis-value-axis-item-labels-font `String`

The font style of the labels.

### value-axis-value-axis-item-labels-format `String`

The format of the labels.

### value-axis-value-axis-item-labels-margin `Number | Object`

The margin of the labels.

### value-axis-value-axis-item-labels-mirror `Boolean`

Mirrors the axis labels and ticks. If the labels are normally on the left side of the axis, mirroring the axis will render them to the right.

### value-axis-value-axis-item-labels-padding `Number | Object`

The padding of the labels.

### value-axis-value-axis-item-labels-rotation `Number`

The rotation angle of the labels.

### value-axis-value-axis-item-labels-skip `Number`

Number of labels to skip. Skips rendering the first n labels.

### value-axis-value-axis-item-labels-step `Number`

Label rendering step. Every n-th label is rendered where n is the step

### value-axis-value-axis-item-labels-template `String | Function`

The label template. Template variables: value&mdash;the value.

### value-axis-value-axis-item-labels-visible `Boolean`

The visibility of the labels.

### value-axis-value-axis-item-line-color `String`

The color of the line. This will also effect the major and minor ticks, but not the grid lines.

### value-axis-value-axis-item-line-dash-type `String`

The dash type of the line.

### value-axis-value-axis-item-line-visible `Boolean`

The visibility of the line.

### value-axis-value-axis-item-line-width `Number`

The width of the line. This will also effect the major and minor ticks, but not the grid lines.

### value-axis-value-axis-item-major-grid-lines-color `String`

The color of the lines.

### value-axis-value-axis-item-major-grid-lines-visible `Boolean`

The visibility of the lines.

### value-axis-value-axis-item-major-grid-lines-width `Number`

The width of the lines.

### value-axis-value-axis-item-major-grid-lines-step `Number`

The step of the value axis major grid lines.

### value-axis-value-axis-item-major-grid-lines-skip `Number`

The skip of the value axis major grid lines.

### value-axis-value-axis-item-major-ticks-size `Number`

The axis major tick size. This is the length of the line in pixels that is drawn to indicate the tick on the chart.

### value-axis-value-axis-item-major-ticks-visible `Boolean`

The visibility of the major ticks.

### value-axis-value-axis-item-major-ticks-color `String`

The color of the value axis major ticks lines. Accepts any valid CSS color string, including hex and rgb.

### value-axis-value-axis-item-major-ticks-width `Number`

The width of the major ticks in pixels.

### value-axis-value-axis-item-major-ticks-step `Number`

The step of the value axis major ticks.

### value-axis-value-axis-item-major-ticks-skip `Number`

The skip of the value axis major ticks.

### value-axis-value-axis-item-major-unit `Number`

The interval between major divisions.

### value-axis-value-axis-item-max `Number`

The maximum value of the axis. This is often used in combination with the min configuration option.

### value-axis-value-axis-item-min `Number`

The minimum value of the axis. This is often used in combination with the max configuration option.

### value-axis-value-axis-item-minor-grid-lines-color `String`

The color of the lines. Takes effect only when the visibility of the minor grid lines is set to `true`.

### value-axis-value-axis-item-minor-grid-lines-dash-type `String`

The dash type of the minor grid lines.

### value-axis-value-axis-item-minor-grid-lines-visible `Boolean`

The visibility of the lines.

### value-axis-value-axis-item-minor-grid-lines-width `Number`

The width of the lines. Takes effect only when the visibility of the minor grid lines is set to `true`.

### value-axis-value-axis-item-minor-grid-lines-step `Number`

The step of the value axis minor grid lines.

### value-axis-value-axis-item-minor-grid-lines-skip `Number`

The skip of the value axis minor grid lines.

### value-axis-value-axis-item-minor-ticks-size `Number`

The axis minor tick size. Represents the length of the line in pixels that is drawn to indicate the tick on the chart.

### value-axis-value-axis-item-minor-ticks-color `String`

The color of the value axis minor ticks lines. Accepts any valid CSS color string, including hex and rgb.

### value-axis-value-axis-item-minor-ticks-width `Number`

The width of the minor ticks in pixels.

### value-axis-value-axis-item-minor-ticks-visible `Boolean`

The visibility of the minor ticks.

### value-axis-value-axis-item-minor-ticks-step `Number`

The step of the value axis minor ticks.

### value-axis-value-axis-item-minor-ticks-skip `Number`

The skip of the value axis minor ticks.

### value-axis-value-axis-item-minor-unit `Number`

The interval between minor divisions. It defaults to 1/5th of the majorUnit.

### value-axis-value-axis-item-name `Object`

The unique axis name.

### value-axis-value-axis-item-narrow-range `Boolean`

Prevents the automatic axis range from snapping to 0.

### value-axis-value-axis-item-pane `String`

The name of the pane in which the axis will be rendered. The axis will be rendered in the first (default) pane if not set.

### value-axis-value-axis-item-plot-bands `Array`

The plot bands of the value axis.

### value-axis-value-axis-item-reverse `Boolean`

Reverses the axis direction&mdash;values increase from right to left and from top to bottom.

### value-axis-value-axis-item-title-background `String`

The background color of the title. Accepts any valid CSS color string, including hex and rgb.

### value-axis-value-axis-item-title-border-color `String`

The color of the border.

### value-axis-value-axis-item-title-border-dash-type `String`

The dash type of the border.

### value-axis-value-axis-item-title-border-width `Number`

The width of the border.

### value-axis-value-axis-item-title-color `String`

The text color of the title. Accepts any valid CSS color string, including hex and rgb.

### value-axis-value-axis-item-title-font `String`

The font style of the title.

### value-axis-value-axis-item-title-margin `Number | Object`

The margin of the title.

### value-axis-value-axis-item-title-padding `Number | Object`

The padding of the title.

### value-axis-value-axis-item-title-position `String`

The position of the title.

### value-axis-value-axis-item-title-rotation `Number`

The rotation angle of the title.

### value-axis-value-axis-item-title-text `String`

The text of the title.

### value-axis-value-axis-item-title-visible `Boolean`

The visibility of the title.

### value-axis-value-axis-item-visible `Boolean`

The visibility of the axis.

### value-axis-value-axis-item-crosshair-color `String`

The color of the crosshair.

### value-axis-value-axis-item-crosshair-width `Number`

The width of the crosshair.

### value-axis-value-axis-item-crosshair-opacity `Number`

The opacity of the crosshair.

### value-axis-value-axis-item-crosshair-dash-type `Number`

The dash type of the crosshair.

### value-axis-value-axis-item-crosshair-visible `Boolean`

The dash type of the crosshair.

### value-axis-value-axis-item-crosshair-tooltip-background `String`

The background color of the tooltip.

### value-axis-value-axis-item-crosshair-tooltip-border-color `String`

The color of the border.

### value-axis-value-axis-item-crosshair-tooltip-border-width `Number`

The width of the border.

### value-axis-value-axis-item-crosshair-tooltip-color `String`

The text color of the tooltip.

### value-axis-value-axis-item-crosshair-tooltip-font `String`

The tooltip font.

### value-axis-value-axis-item-crosshair-tooltip-format `String`

The tooltip format.

### value-axis-value-axis-item-crosshair-tooltip-padding `Number | Object`

The padding of the tooltip.

### value-axis-value-axis-item-crosshair-tooltip-template `String | Function`

The tooltip template. The template supports the `value` variable which represents the point value (either a number or an object).

### value-axis-value-axis-item-crosshair-tooltip-visible `Boolean`

A value which indicates if the tooltip will be displayed.

### value-axis-value-axis-item-notes-position `String`

The position of the value axis note.

The supported values are:

* `top`&mdash;The note is positioned on the top.
* `bottom`&mdash;The note is positioned on the bottom.
* `left`&mdash;The note is positioned on the left.
* `right`&mdash;The note is positioned on the right.

### value-axis-value-axis-item-notes-icon-background `String`

The background color of the notes icon.

### value-axis-value-axis-item-notes-icon-border-color `String`

The border color of the icon.

### value-axis-value-axis-item-notes-icon-border-width `Number`

The border width of the icon.

### value-axis-value-axis-item-notes-icon-size `Number`

The size of the icon.

### value-axis-value-axis-item-notes-icon-type `String`

The icon shape.

The supported values are:

* `circle`&mdash;The marker shape is circular.
* `square`&mdash;The marker shape is square.
* `triangle`&mdash;The marker shape is triangular.
* `cross`&mdash;The marker is in the shape of a cross.

### value-axis-value-axis-item-notes-icon-visible `Boolean`

The icon visibility.

### value-axis-value-axis-item-notes-label-background `String`

The background color of the label. Accepts any valid CSS color string, including hex and rgb.

### value-axis-value-axis-item-notes-label-border-color `String`

The color of the border. Accepts any valid CSS color string, including hex and rgb.

### value-axis-value-axis-item-notes-label-border-dash-type `String`

The dash type of the border.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### value-axis-value-axis-item-notes-label-border-width `Number`

The width (in pixels) of the border. By default, the border width is set to zero which means that the border will not appear.

### value-axis-value-axis-item-notes-label-color `String`

The text color of the label. Accepts any valid CSS color string, including hex and rgb.

### value-axis-value-axis-item-notes-label-font `String`

The font style of the label.

### value-axis-value-axis-item-notes-label-template `String | Function`

The template which renders the labels. The template supports the `value` field which represents the `value` value.

### value-axis-value-axis-item-notes-label-visible `Boolean`

If `value-axis-value-axis-item-notes-label-visible` is set to `true`, the Chart will display the value axis notes label. By default, the value axis notes labels are visible.

### value-axis-value-axis-item-notes-label-rotation `Number`

The rotation angle of the label. By default, the labels are not rotated.

### value-axis-value-axis-item-notes-label-format `String`

The format that is used to display the notes label. Uses `kendo.format`. Contains one placeholder (`{0}`) which represents the axis value.

### value-axis-value-axis-item-notes-label-position `String`

The position of the labels.

The supported values are:

* `inside`&mdash;The label is positioned inside the icon.
* `outside`&mdash;Te label is positioned outside the icon.

### value-axis-value-axis-item-notes-line-width `Number`

The line width of the notes.

### value-axis-value-axis-item-notes-line-color `String`

The line color of the notes.

### value-axis-value-axis-item-notes-line-length `Number`

The length of the connecting lines in pixels.

### value-axis-value-axis-item-notes-data `Array`

The items of the notes.

## Suggested Links

* [`ValueAxis` in Kendo UI StockChart for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/configuration/valueaxis)
