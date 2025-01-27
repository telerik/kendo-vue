---
title: shapeDefaultsProps API
description: "API Index | shapeDefaultsProps"
api_reference: true
slug: api_diagram_shapedefaultsprops
---

# ShapeDefaultsProps

### shape-defaults-connectors `Array`

Defines the connectors the shape owns. A connector is the point in the shape where a connection between this shape and another one can originate from or end.

The supported values are:

* `top`&mdash;A top connector.
* `right`&mdash;A right connector.
* `bottom`&mdash;A bottom connector.
* `bottomRight`&mdash;A bottom right connector.
* `left`&mdash;A left connector.
* `auto`&mdash;An auto connector.

You can define your own custom connectors or use the predefined types.

### shape-defaults-connector-defaults-width `Number`

Defines the width of the shape connectors.

### shape-defaults-connector-defaults-height `Number`

Defines the height of the shape connectors.

### shape-defaults-connector-defaults-hover-fill `String`

Defines the hover fill options of the shape connectors.

### shape-defaults-connector-defaults-hover-fill-color `String`

Defines the hover fill color of the shape connectors.

### shape-defaults-connector-defaults-hover-fill-opacity `Number`

Defines the hover fill opacity of the shape connectors.

### shape-defaults-connector-defaults-hover-stroke `String`

Defines the hover stroke options of the shape connectors.

### shape-defaults-connector-defaults-hover-stroke-color `String`

Defines the hover stroke color.

### shape-defaults-connector-defaults-hover-stroke-dash-type `String`

The dash type of the hover stroke.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### shape-defaults-connector-defaults-hover-stroke-width `Number`

Defines the thickness or width of the shape connectors stroke on hover.

### shape-defaults-connector-defaults-fill `String`

Defines the fill options of the shape connectors.

### shape-defaults-connector-defaults-fill-color `String`

Defines the fill color of the shape connectors.

### shape-defaults-connector-defaults-fill-opacity `Number`

Defines the fill opacity of the shape connectors.

### shape-defaults-connector-defaults-stroke `String`

Defines the stroke options of the shape connectors.

### shape-defaults-connector-defaults-stroke-color `String`

Defines the stroke color.

### shape-defaults-connector-defaults-stroke-dash-type `String`

Defines the stroke dash type.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### shape-defaults-connector-defaults-stroke-width `Number`

Defines the thickness or width of the shape connectors stroke.

### shape-defaults-content-align `String`

The alignment of the text inside the shape.

The supported values are:

* (Vertical alignment) `top`, `middle`, and `bottom`.
* (Horizontal alignment) `right`, `center`, and `left`.

You can also combine the vertical and horizontal values&mdash;for example, `top right`, `middle left`, `bottom center`, and so on.

### shape-defaults-content-color `String`

The color of the shape content text.

### shape-defaults-content-font-family `String`

The font family of the shape content text.

### shape-defaults-content-font-size `Number`

The font size of the shape content text.

### shape-defaults-content-font-style `String`

The font style of the shape content text.

### shape-defaults-content-font-weight `String`

The font weight of the shape content text.

### shape-defaults-content-template `String | Function`

The template which renders the labels. The template supports the `dataItem` field which represents the data item if a field was specified.

### shape-defaults-content-text `String`

The text that is displayed in the shape.

## shape-defaults-editable `Boolean`

Defines the editable options of the shape.

### shape-defaults-editable-connect `Boolean`

Specifies if new connections can be added by using the shapes connectors.

### shape-defaults-editable-drag `Boolean`

Specifies if the shapes can be dragged.

### shape-defaults-editable-remove `Boolean`

Specifies if the shapes can be removed.

### shape-defaults-editable-tools `Array`

Specifies the tools of the toolbar. Supports all supported `toolbar.items` options.

The predefined tools are:

* `edit`&mdash;The selected item can be edited.
* `delete`&mdash;The selected items can be deleted.
* `rotateClockwise`&mdash;The selected items can be rotated clockwise. The default rotation value is 90 degrees.
* `rotateAnticlockwise`&mdash;The selected items can be rotated anticlockwise. The default rotation value is 90 degrees.

### shape-defaults-fill `String`

Defines the fill options of the shape. Use these settings to apply a single-color or a gradient background to all shapes in the Diagram.

### shape-defaults-fill-color `String`

Defines the fill color of the shape.

### shape-defaults-fill-opacity `Number`

Defines the fill opacity of the shape.

### shape-defaults-fill-gradient-type `String`

The type of the gradient. The supported values are: linear or radial.

### shape-defaults-fill-gradient-center `Array`

The center of the radial gradient. The coordinates are relative to the shape-bounding box&mdash;for example, `[0, 0]` is top left and `[1, 1]` is bottom right.

### shape-defaults-fill-gradient-radius `Number`

The radius of the radial gradient relative to the shape bounding box.

### shape-defaults-fill-gradient-start `Array`

The start point of the linear gradient. The coordinates are relative to the shape-bounding box&mdash;for example, `[0, 0]` is top left and `[1, 1]` is bottom right.

### shape-defaults-fill-gradient-end `Array`

The end point of the linear gradient. The coordinates are relative to the shape-bounding box&mdash;for example, `[0, 0]` is top left and `[1, 1]` is bottom right.

### shape-defaults-fill-gradient-stops `Array`

The array of gradient color stops.

### shape-defaults-height `Number`

Defines the default height of shapes in the Diagram.

### shape-defaults-hover-fill `String`

Defines the hover fill options.

### shape-defaults-hover-fill-color `String`

Defines the hover fill color.

### shape-defaults-hover-fill-opacity `Number`

Defines the hover fill opacity.

### shape-defaults-min-height `Number`

Defines the minimum height the shape can have. Used for applying a lower limit to the height of shapes when the user resizes them.

### shape-defaults-min-width `Number`

Defines the minimum width the shape can have. Used for applying a lower limit to the width of shapes when the user resizes them.

### shape-defaults-path `String`

The `path` option of a shape is a description of a custom geometry. The format follows the [standard SVG format](https://www.w3.org/TR/SVG/paths.html#PathData).

### shape-defaults-rotation-angle `Number`

The rotational angle of the shape.

### shape-defaults-selectable `Boolean`

Specifies if Diagram shapes can be selected.

### shape-defaults-source `String`

The path or URL to the shape image. Applicable when the type is set to `image`.

### shape-defaults-stroke-color `String`

The color of the shape stroke.

### shape-defaults-stroke-dash-type `String`

The dash type of the shape.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### shape-defaults-stroke-width `Number`

Defines the thickness or width of the shape stroke.

### shape-defaults-type `String`

Specifies the type of the shape by using any of the following built-in shape types:

* (Default) `rectangle`
* `circle`&mdash;A circle or an ellipse.
* `image`&mdash;An image.
* `text`&mdash;Some text.

### shape-defaults-visual `Function`

A function which returns a visual element that will be rendered for a given shape.

The supported primitives for constructing composite visuals are:

* `Circle`
* `Rectangle`
* `Path`
* `Line`
* `Polyline`
* `TextBlock`
* `Image`
* `Layout`

### shape-defaults-width `Number`

The default width of the shapes in the Diagram.

### shape-defaults-x `Number`

The x-coordinate of the shape when the shape is added to the Diagram.

### shape-defaults-y `Number`

The y-coordinate of the shape when the shape is added to the Diagram.

## Suggested Links

* [`ShapeDefaults` in Kendo UI Diagram for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/configuration/shapedefaults)
