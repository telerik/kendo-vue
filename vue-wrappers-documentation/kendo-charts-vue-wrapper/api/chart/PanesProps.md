---
title: panesProps Chart API
description: "API Index | panesProps"
api_reference: true
slug: api_chart_panesprops_wrapper
---

# PanesProps

### panes-pane-background `String`

The background color of the Chart pane. Accepts any valid CSS color string, including hex and rgb.

### panes-pane-border-color `String`

The color of the border. Accepts any valid CSS color string, including hex and rgb.

### panes-pane-border-dash-type `String`

The dash type of the border.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### panes-pane-border-width `Number`

The width (in pixels) of the border. By default, the border width is set to zero which means that the border will not appear.

### panes-pane-clip `Boolean`

Specifies whether the cCarts in the pane will be clipped. By default, all Charts except Radar, Polar, and 100% Stacked charts are clipped.

### panes-pane-height `Number`

The height (in pixels) of the Chart pane.

### panes-pane-margin `Number`

The margin of the pane. A numeric value will set all margins.

### panes-pane-margin-bottom `Number`

The bottom margin of the Chart panes.

### panes-pane-margin-left `Number`

The left margin of the Chart panes.

### panes-pane-margin-right `Number`

The right margin of the Chart panes.

### panes-pane-margin-top `Number`

The top margin of the Chart panes.

### panes-pane-name `String`

The unique name of the Chart pane.

### panes-pane-padding `Number`

The padding of the pane. A numeric value will set all paddings.

### panes-pane-padding-bottom `Number`

The bottom padding of the Chart panes.

### panes-pane-padding-left `Number`

The left padding of the Chart panes.

### panes-pane-padding-right `Number`

The right padding of the Chart panes.

### panes-pane-padding-top `Number`

The top padding of the Chart panes.

### panes-pane-title `String`

The title configuration of the Chart pane.

### panes-pane-title-background `String`

The background color of the title. Accepts any valid CSS color string, including hex and rgb.

### panes-pane-title-border-color `String`

The color of the border. Accepts any valid CSS color string, including hex and rgb.

### panes-pane-title-border-dash-type `String`

The dash type of the border.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### panes-pane-title-border-width `Number`

The width (in pixels) of the border. By default, the border width is set to zero which means that the border will not appear.

### panes-pane-title-color `String`

The text color of the title. Accepts any valid CSS color string, including hex and rgb.

### panes-pane-title-font `String`

The font style of the title.

### panes-pane-title-margin `Number`

The margin of the title. A numeric value will set all margins.

### panes-pane-title-margin-bottom `Number`

The bottom margin of the title.

### panes-pane-title-margin-left `Number`

The left margin of the title.

### panes-pane-title-margin-right `Number`

The right margin of the title.

### panes-pane-title-margin-top `Number`

The top margin of the title.

### panes-pane-title-position `String`

The position of the title.

The supported values are:

* `left`&mdash;(Applicable to horizontal axes) The axis title is positioned on the left.
* `right`&mdash;(Applicable to horizontal axes) The axis title is positioned on the right.
* `center`&mdash;The axis title is positioned in the center.

### panes-pane-title-text `String`

The text of the title.

### panes-pane-title-visible `Boolean`

If `panes-pane-title-visible` is set to `true`, the Chart will display the pane title. By default, the pane title is visible.

### panes-pane-title-visual `Function`

A function for creating a custom visual for the title.

The supported argument fields are:

* `text`&mdash;The label text.
* `rect`&mdash;The `kendo.geometry.Rect` that defines where the visual will be rendered.
* `sender`&mdash;The Chart instance (may be undefined).
* `options`&mdash;The label options.
* `createVisual`&mdash;A function that can be used to get the default visual.

## Suggested Links

* [`Panes` in Kendo UI Chart for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/configuration/panes)
