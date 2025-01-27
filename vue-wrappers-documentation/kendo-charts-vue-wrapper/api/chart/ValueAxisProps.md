---
title: valueAxisProps Chart API
description: "API Index | valueAxisProps"
api_reference: true
slug: api_chart_valueaxisprops_wrapper
---

# ValueAxisProps

### value-axis-value-axis-item-axis-crossing-value `Object | Date | Array`

* (For objects) The value at which the category axis crosses this axis.
* (For arrays) The value indices at which the category axes cross the value axis.
* (For dates) The date at which the category axis crosses this axis.

### value-axis-value-axis-item-background `String`

The background color of the axis.

### value-axis-value-axis-item-color `String`

The color of the value axis. Accepts any valid CSS color string, including hex and rgb.

### value-axis-value-axis-item-crosshair-color `String`

The color of the crosshair. Accepts any valid CSS color string, including hex and rgb.

### value-axis-value-axis-item-crosshair-dash-type `String`

The dash type of the crosshair.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### value-axis-value-axis-item-crosshair-opacity `Number`

The opacity of the crosshair. By default, the crosshair is opaque.

### value-axis-value-axis-item-crosshair-tooltip-background `String`

The background color of the tooltip. Accepts any valid CSS color string, including hex and rgb.

### value-axis-value-axis-item-crosshair-tooltip-border-color `String`

The color of the border. Accepts any valid CSS color string, including hex and rgb.

### value-axis-value-axis-item-crosshair-tooltip-border-dash-type `String`

The dash type of the border.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### value-axis-value-axis-item-crosshair-tooltip-border-width `Number`

The width (in pixels) of the border. By default, the border width is set to zero which means that the border will not appear.

### value-axis-value-axis-item-crosshair-tooltip-color `String`

The text color of the tooltip. Accepts any valid CSS color string, including hex and rgb.

### value-axis-value-axis-item-crosshair-tooltip-font `String`

The tooltip font.

### value-axis-value-axis-item-crosshair-tooltip-format `String`

The format used to display the tooltip. Uses `kendo.format`. Contains one placeholder (`{0}`) which represents the `value` value.

### value-axis-value-axis-item-crosshair-tooltip-padding `Number`

The padding of the crosshair tooltip. A numeric value will set all paddings.

### value-axis-value-axis-item-crosshair-tooltip-padding-bottom `Number`

The bottom padding of the crosshair tooltip.

### value-axis-value-axis-item-crosshair-tooltip-padding-left `Number`

The left padding of the crosshair tooltip.

### value-axis-value-axis-item-crosshair-tooltip-padding-right `Number`

The right padding of the crosshair tooltip.

### value-axis-value-axis-item-crosshair-tooltip-padding-top `Number`

The top padding of the crosshair tooltip.

### value-axis-value-axis-item-crosshair-tooltip-template `String | Function`

The template which renders the tooltip. The template supports the `value` field which represents the `value` value.

### value-axis-value-axis-item-crosshair-tooltip-visible `Boolean`

If `value-axis-value-axis-item-crosshair-tooltip-visible` is set to `true`, the Chart will display the value axis crosshair tooltip. By default, the value axis crosshair tooltip is not visible.

### value-axis-value-axis-item-crosshair-visible `Boolean`

If `value-axis-value-axis-item-crosshair-visible` is set to `true`, the Chart will display the value axis crosshair. By default, the value axis crosshair is not visible.

### value-axis-value-axis-item-crosshair-width `Number`

The width (in pixels) of the crosshair.

### value-axis-value-axis-item-labels-background `String`

The background color of the labels. Accepts any valid CSS color string, including hex and rgb.

### value-axis-value-axis-item-labels-border-color `String`

The color of the border. Accepts any valid CSS color string, including hex and rgb.

### value-axis-value-axis-item-labels-border-dash-type `String`

The dash type of the border.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### value-axis-value-axis-item-labels-border-width `Number`

The width (in pixels) of the border. By default, the border width is set to zero which means that the border will not appear.

### value-axis-value-axis-item-labels-color `String`

The text color of the labels. Accepts any valid CSS color string, including hex and rgb.

### value-axis-value-axis-item-labels-font `String`

The font style of the labels.

### value-axis-value-axis-item-labels-format `String`

The format used to display the labels. Uses `kendo.format`. Contains one placeholder (`{0}`) which represents the category value.

### value-axis-value-axis-item-labels-margin `Number`

The margin of the labels. A numeric value will set all margins.

### value-axis-value-axis-item-labels-margin-bottom `Number`

The bottom margin of the labels.

### value-axis-value-axis-item-labels-margin-left `Number`

The left margin of the labels.

### value-axis-value-axis-item-labels-margin-right `Number`

The right margin of the labels.

### value-axis-value-axis-item-labels-margin-top `Number`

The top margin of the labels.

### value-axis-value-axis-item-labels-mirror `Boolean`

If `value-axis-value-axis-item-labels-mirror` is set to `true` the Chart will mirror the axis labels and ticks. If the labels are normally on the left side of the axis, mirroring the axis will render them to the right.

### value-axis-value-axis-item-labels-padding `Number`

The padding of the labels. A numeric value will set all margins.

### value-axis-value-axis-item-labels-padding-bottom `Number`

The bottom padding of the labels.

### value-axis-value-axis-item-labels-padding-left `Number`

The left padding of the labels.

### value-axis-value-axis-item-labels-padding-right `Number`

The right padding of the labels.

### value-axis-value-axis-item-labels-padding-top `Number`

The top padding of the labels.

### value-axis-value-axis-item-labels-position `String`

The position of the axis labels. By default, labels are positioned next to the axis.

* When the position is set to `end`, the labels are placed at the end of the crossing axis&mdash;typically, at the top or right end of the Chart unless the crossing axis was reversed.
* When the position is set to `start`, the labels are placed at the start of the crossing axis&mdash;typically, at the left or bottom end of the Chart unless the crossing axis was reversed.

### value-axis-value-axis-item-labels-rotation `Number | String`

The rotation angle (in degrees) of the labels. By default, the labels are not rotated. Angles increase clockwise and zero is to the left. Negative values are acceptable. If the axis is horizontal, `value-axis-value-axis-item-labels-rotation` can be set to `auto` and, as a result, the labels will be rotated only if the slot size is not sufficient to accommodate the entire labels.

### value-axis-value-axis-item-labels-rotation-align `String`

The alignment of the rotated labels relative to the slot center.

The supported values are:

* `end`
* `center`

By default, the closest end of the label will be aligned to the center. If set to `center`, the center of the rotated label will be aligned instead.

### value-axis-value-axis-item-labels-rotation-angle `Number | String`

The rotation angle of the labels. By default, the labels are not rotated. If the axis is horizontal, `value-axis-value-axis-item-labels-rotation-angle` can be set to `auto` and, as a result, the labels will be rotated only if the slot size is not sufficient to accommodate the entire labels.

### value-axis-value-axis-item-labels-skip `Number`

The number of labels that will be skipped. By default, no labels are skipped.

### value-axis-value-axis-item-labels-step `Number`

The step for rendering the label. Renders every n<sup>th</sup> label. By default, every label is rendered.

### value-axis-value-axis-item-labels-template `String | Function`

The template which renders the labels. The template supports the `value` field which represents the `value` value.

### value-axis-value-axis-item-labels-visible `Boolean`

If `value-axis-value-axis-item-labels-visible` is set to `true`, the Chart will display the value axis labels. By default, the category axis labels are visible.

### value-axis-value-axis-item-labels-visual `Function`

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

### value-axis-value-axis-item-line-color `String`

The color of the lines. Accepts any valid CSS color string, including hex and rgb.

### value-axis-value-axis-item-line-dash-type `String`

The dash type of the line.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### value-axis-value-axis-item-line-visible `Boolean`

If `value-axis-value-axis-item-line-visible` is set to `true`, the Chart will display the value axis lines. By default, the value axis lines are visible.

### value-axis-value-axis-item-line-width `Number`

The width (in pixels) of the line. Affects also the major and minor ticks, but not the grid lines.

### value-axis-value-axis-item-major-grid-lines-color `String`

The color of the major grid lines. Accepts any valid CSS color string, including hex and rgb.

### value-axis-value-axis-item-major-grid-lines-dash-type `String`

The dash type of the major grid lines.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### value-axis-value-axis-item-major-grid-lines-type `String`

The type of grid lines that will be drawn for Radar Charts.

The supported values are:

* `line`&mdash;Draws straight lines.
* `arc`&mdash;Draws arcs. Except for the Radar Column Charts, defaults to `line`.

### value-axis-value-axis-item-major-grid-lines-visible `Boolean`

If `value-axis-value-axis-item-major-grid-lines-visible` is set to `false`, the Chart will not display the major grid lines. By default, the major grid lines are visible.

### value-axis-value-axis-item-major-grid-lines-width `Number`

The width (in pixels) of the value axis major grid lines.

### value-axis-value-axis-item-major-grid-lines-step `Number`

The step of the value axis major grid lines.

### value-axis-value-axis-item-major-grid-lines-skip `Number`

The skip of the value axis major grid lines.

### value-axis-value-axis-item-major-unit `Number`

The interval between major divisions. If `valueAxis.type` is set to `log`, the `majorUnit` value will be used for the base of the logarithm.

### value-axis-value-axis-item-max `Number`

The maximum value of the axis.

### value-axis-value-axis-item-min `Number`

The minimum value of the axis.

### value-axis-value-axis-item-minor-grid-lines-color `String`

The color of the minor grid lines. Accepts any valid CSS color string, including hex and rgb.

### value-axis-value-axis-item-minor-grid-lines-dash-type `String`

The dash type of the minor grid lines.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### value-axis-value-axis-item-minor-grid-lines-type `String`

The type of grid lines that will be drawn for the Radar Charts.

The supported values are:

* `line`&mdash;Draws straight lines.
* `arc`&mdash;Draws arcs. Except for the Radar Column Charts, defaults to `line`.

### value-axis-value-axis-item-minor-grid-lines-visible `Boolean`

If `value-axis-value-axis-item-minor-grid-lines-visible` is set to `true`, the Chart will display the minor grid lines. By default, the minor grid lines are visible.

### value-axis-value-axis-item-minor-grid-lines-width `Number`

The width (in pixels) of the value axis minor grid lines.

### value-axis-value-axis-item-minor-grid-lines-step `Number`

The step of the value axis minor grid lines.

### value-axis-value-axis-item-minor-grid-lines-skip `Number`

The skip of the value axis minor grid lines.

### value-axis-value-axis-item-major-ticks-color `String`

The color of the value axis major ticks lines. Accepts any valid CSS color string, including hex and rgb.

### value-axis-value-axis-item-major-ticks-size `Number`

The length (in pixels) of the tick line.

### value-axis-value-axis-item-major-ticks-visible `Boolean`

If `value-axis-value-axis-item-major-ticks-visible` is set to `true`, the Chart will display the value axis major ticks. By default, the value axis major ticks are visible.

### value-axis-value-axis-item-major-ticks-step `Number`

The step of the value axis major ticks.

### value-axis-value-axis-item-major-ticks-skip `Number`

The skip of the value axis major ticks.

### value-axis-value-axis-item-minor-ticks-color `String`

The color of the value axis minor ticks lines. Accepts any valid CSS color string, including hex and rgb.

### value-axis-value-axis-item-minor-ticks-size `Number`

The length (in pixels) of the tick line.

### value-axis-value-axis-item-minor-ticks-visible `Boolean`

If `value-axis-value-axis-item-minor-ticks-visible` is set to `true`, the Chart will display the value axis minor ticks. By default, the value axis minor ticks are not visible.

### value-axis-value-axis-item-minor-ticks-width `Number`

The width (in pixels) of the minor ticks.

### value-axis-value-axis-item-minor-ticks-step `Number`

The step of the value axis minor ticks.

### value-axis-value-axis-item-minor-ticks-skip `Number`

The skip of the value axis minor ticks.

### value-axis-value-axis-item-minor-unit `Number`

The interval between minor divisions. Defaults to 1/5 of `valueAxis.majorUnit`. If `valueAxis.type` is set to `log`, the `minorUnit` value represents the number of divisions between two major units and defaults to the major unit minus one.

### value-axis-value-axis-item-name `String`

The unique axis name. Used to associate a series with a value axis using the `series.axis` option.

### value-axis-value-axis-item-narrow-range `Boolean`

If `value-axis-value-axis-item-narrow-range` is set to `true`, the Chart will prevent the automatic axis range from snapping to 0. Setting it to false will force the automatic axis range to snap to 0.

### value-axis-value-axis-item-pane `String`

The name of the pane that the value axis should be rendered in. The axis will be rendered in the first (default) pane if not set.

### value-axis-value-axis-item-plot-bands `Array`

The plot bands of the value axis.

### value-axis-value-axis-item-reverse `Boolean`

If `value-axis-value-axis-item-reverse` is set to `true`, the value axis direction will be reversed. By default, categories are listed from left to right and from bottom to top.

### value-axis-value-axis-item-title-background `String`

The background color of the title. Accepts any valid CSS color string, including hex and rgb.

### value-axis-value-axis-item-title-border-color `String`

The color of the border. Accepts any valid CSS color string, including hex and rgb.

### value-axis-value-axis-item-title-border-dash-type `String`

The dash type of the border.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### value-axis-value-axis-item-title-border-width `Number`

The width (in pixels) of the border. By default, the border width is set to zero which means that the border will not appear.

### value-axis-value-axis-item-title-color `String`

The text color of the title. Accepts any valid CSS color string, including hex and rgb.

### value-axis-value-axis-item-title-font `String`

The font style of the title.

### value-axis-value-axis-item-title-margin `Number`

The margin of the title. A numeric value will set all margins.

### value-axis-value-axis-item-title-margin-bottom `Number`

The bottom margin of the title.

### value-axis-value-axis-item-title-margin-left `Number`

The left margin of the title.

### value-axis-value-axis-item-title-margin-right `Number`

The right margin of the title.

### value-axis-value-axis-item-title-margin-top `Number`

The top margin of the title.

### value-axis-value-axis-item-title-padding `Number`

The padding of the title. A numeric value will set all paddings.

### value-axis-value-axis-item-title-padding-bottom `Number`

The bottom padding of the title.

### value-axis-value-axis-item-title-padding-left `Number`

The left padding of the title.

### value-axis-value-axis-item-title-padding-right `Number`

The right padding of the title.

### value-axis-value-axis-item-title-padding-top `Number`

The top padding of the title.

### value-axis-value-axis-item-title-position `String`

The position of the title.

The supported values are:

* `top`&mdash;(Applicable to vertical axes) The axis title is positioned on the top.
* `bottom`&mdash;(Applicable to vertical axes) The axis title is positioned on the bottom.
* `left`&mdash;(Applicable to horizontal axes) The axis title is positioned on the left.
* `right`&mdash;(Applicable to horizontal axes) The axis title is positioned on the right.
* `center`&mdash;The axis title is positioned in the center.

### value-axis-value-axis-item-title-rotation `Number`

The rotation angle of the title. By default, the title is not rotated.

### value-axis-value-axis-item-title-text `String`

The text of the title.

### value-axis-value-axis-item-title-visible `Boolean`

If set to `true`, the Chart will display the value axis title. By default, the value axis title is visible.

### value-axis-value-axis-item-title-visual `Function`

A function for creating a custom visual for the title.

The supported argument fields are:

* `text`&mdash;The label text.
* `rect`&mdash;The `kendo.geometry.Rect` that defines where the visual will be rendered.
* `sender`&mdash;The Chart instance (may be undefined).
* `options`&mdash;The label options.
* `createVisual`&mdash;A function that can be used to get the default visual.

### value-axis-value-axis-item-type `String`

The axis type.

The supported values are:

* `numeric`&mdash;A numeric axis.
* `log`&mdash;A logarithmic axis.

### value-axis-value-axis-item-visible `Boolean`

If `value-axis-value-axis-item-visible` is set to `true`, the Chart will display the value axis. By default, the value axis is visible.

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

If `value-axis-value-axis-item-notes-label-visible` is set to `true`, the Chart will display the value axis notes label. By default, the value axis notes label are visible.

### value-axis-value-axis-item-notes-label-rotation `Number`

The rotation angle of the label. By default, the label are not rotated.

### value-axis-value-axis-item-notes-label-format `String`

The format for diaplaying the notes label. Uses `kendo.format`. Contains one placeholder (`{0}`) which represents the axis value.

### value-axis-value-axis-item-notes-label-position `String`

The position of the labels.

The supported values are:

* `inside`&mdash;The label is positioned inside the icon.
* `outside`&mdash;The label is positioned outside the icon.

### value-axis-value-axis-item-notes-line-dash-type `String`

The dash type of the note line.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### value-axis-value-axis-item-notes-line-width `Number`

The line width of the notes.

### value-axis-value-axis-item-notes-line-color `String`

The line color of the notes.

### value-axis-value-axis-item-notes-line-length `Number`

The length (in pixels) of the connecting lines.

### value-axis-value-axis-item-notes-data `Array`

The items of the notes.

### value-axis-value-axis-item-notes-visual `Function`

A function for creating a custom visual for the notes.

The supported argument fields are:

* `rect`&mdash;The `kendo.geometry.Rect` that defines where the visual will be rendered.
* `options`&mdash;The note options.
* `createVisual`&mdash;A function that gets the default visual.
* `value`&mdash;The note value.

## Suggested Links

* [`ValueAxis` in Kendo UI Chart for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/configuration/valueaxis)
