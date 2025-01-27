---
title: selectableProps API
description: "API Index | selectableProps"
api_reference: true
slug: api_diagram_selectableprops
---

# SelectableProps

### selectable-key `String`

Defines the meta key when doing a visual selection through drawing a rectangular area around shapes in the canvas. The `selectable-key` option does not change the way a single shape is selected through clicking or tapping. To avoid clashes, verify that the `selectable.key` and `pannable.key` values are different.

The supported values are:

* `none`&mdash;Renders no activation key. The visual selection is disabled.
* `ctrl`&mdash;The activation key will be `Ctrl`.
* `shift`&mdash;The activation key will be `Shift`.
* `alt`&mdash;The activation key will be `Alt`.

### selectable-multiple `Boolean`

Specifies if the multiple selection will be enabled.

### selectable-stroke-color `String`

Defines the selection stroke color. Accepts valid CSS colors.

### selectable-stroke-dash-type `String`

Defines the selection dash type.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### selectable-stroke-width `Number`

Defines the selection stroke width.

## Suggested Links

* [`Selectable` in Kendo UI Diagram for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/configuration/selectable)
