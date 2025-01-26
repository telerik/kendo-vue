---
title: shapesProps API
description: "API Index | shapesProps"
api_reference: true
slug: api_diagramshapecomponent
---

# ShapesProps

## Directive

`kendo-diagram-shape`

## Props

### connectors `Array`

Defines the connectors that are available in the shape. A connector is the point in the shape where a connection between this shape and another one can originate from or end.

### connector-defaults-width `Number`

Defines the width of the shape connectors.

### connector-defaults-height `Number`

Defines the height of the shape connectors.

### connector-defaults-hover-fill `String`

Defines the hover fill options of the shape connectors.

### connector-defaults-hover-fill-color `String`

Defines the hover fill color of the shape connectors.

### connector-defaults-hover-fill-opacity `Number`

Defines the hover fill opacity of the shape connectors.

### connector-defaults-hover-stroke `String`

Defines the hover stroke options of the shape connectors.

### connector-defaults-hover-stroke-color `String`

Defines the hover stroke color.

### connector-defaults-hover-stroke-dash-type `String`

The dash type of the hover stroke.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### connector-defaults-hover-stroke-width `Number`

Defines the thickness or width of the shape connectors stroke on hover.

### connector-defaults-fill `String`

Defines the fill options of the shape connectors.

### connector-defaults-fill-color `String`

Defines the fill color of the shape connectors.

### connector-defaults-fill-opacity `Number`

Defines the fill opacity of the shape connectors.

### connector-defaults-stroke `String`

Defines the stroke options of the shape connectors.

### connector-defaults-stroke-color `String`

Defines the stroke color.

### connector-defaults-stroke-dash-type `String`

The dash type of the stroke.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### connector-defaults-stroke-width `Number`

Defines the thickness or width of the shape connectors stroke.

### content-align `String`

The alignment of the text inside the shape.

The supported values are:

* (Vertical alignment) `top`, `middle`, and `bottom`.
* (Horizontal alignment) `right`, `center`, and `left`.

You can also combine the vertical and horizontal values&mdash;for example, `top right`, `middle left`, `bottom center`, and so on.

### content-color `String`

The color of the shape content text.

### content-font-family `String`

The font family of the shape content text.

### content-font-size `Number`

The font size of the shape content text.

### content-font-style `String`

The font style of the shape content text.

### content-font-weight `String`

The font weight of the shape content text.

### content-template `String | Function`

The template which renders the labels.

### content-text `String`

The text displayed in the shape.

### editable `Boolean`

Defines the shape editable options.

### editable-connect `Boolean`

Specifies whether the connectors will appear on hover. If `editable-connect` is set to `false`, the user will not be able to create new connections from this shape to other shapes. Also, it will not be possible to change the connector of an existing connection between this and another shape.

### editable-tools `Array`

Specifies the tools of the toolbar. Supports all supported `toolbar.items` options.

The predefined tools are:

* `edit`&mdash;The selected item can be edited.
* `delete`&mdash;The selected items can be deleted.
* `rotateClockwise`&mdash;The selected items can be rotated clockwise. The default rotation value is 90 degrees.
* `rotateAnticlockwise`&mdash;The selected items can be rotated anticlockwise. The default rotation value is 90 degrees.

### fill `String`

Defines the background fill options of the shape.

### fill-color `String`

Defines the fill color of the shape.

### fill-opacity `Number`

Defines the fill opacity of the shape.

### fill-gradient-type `String`

The type of the gradient.

The supported values are:

* `linear`
* `radial`

### fill-gradient-center `Array`

The center of the radial gradient. The coordinates are relative to the shape-bounding box&mdash;for example, `[0, 0]` is top left and `[1, 1]` is bottom right.

### fill-gradient-radius `Number`

The radius of the radial gradient that is relative to the shape-bounding box.

### fill-gradient-start `Array`

The start point of the linear gradient. The coordinates are relative to the shape-bounding box&mdash;for example, `[0, 0]` is top left and `[1, 1]` is bottom right.

### fill-gradient-end `Array`

The end point of the linear gradient. The coordinates are relative to the shape-bounding box&mdash;for example, `[0, 0]` is top left and `[1, 1]` is bottom right.

### fill-gradient-stops `Array`

The array of the gradient color stops.

### height `Number`

Defines the height of the shape when the shape is added to the Diagram.

### hover-fill `String`

Defines the hover fill options.

### hover-fill-color `String`

Defines the hover fill color.

### hover-fill-opacity `Number`

Defines the hover fill opacity.

### id `String`

The unique identifier for a shape. The `id` value identifies shapes in connection configurations. The `to` and `from` properties of the connections usually point to the `id` values of the shapes.

### min-height `Number`

Defines the minimum height the shape needs to have, that is, the shape cannot be resized to a value which is smaller than the given one.

### min-width `Number`

Defines the minimum width the shape needs have, that is, the shape cannot be resized to a value which is smaller than the given one.

### path `String`

The `path` option of a shape is a description of a custom geometry. The format follows the [standard SVG format](https://www.w3.org/TR/SVG/paths.html#PathData).

### rotation-angle `Number`

The rotation angle.

### source `String`

The source of the shape image. Applicable when `type` is set to `image`.

### stroke-color `String`

Defines the color of the shape stroke.

### stroke-dash-type `String`

The dash type of the shape.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### stroke-width `Number`

Defines the thickness or width of the shape stroke.

### type `String`

Specifies the type of the shape by using any of the following built-in shape types:

* (Default) `rectangle`
* `circle`&mdash;A circle or an ellipse.
* `image`&mdash;An image.

### visual `Function`

A function which returns a visual element that will be rendered for this shape. For more information, refer to `visual`.

### width `Number`

The width of the shape when the shape is added to the Diagram.

### x `Number`

The x-coordinate of the shape when the shape is added to the Diagram. Does not take effect if the Diagram is using a pre-defined layout.

### y `Number`

The y-coordinate of the shape when the shape is added to the Diagram. Does not take effect if the Diagram is using a pre-defined layout.

## Suggested Links

* [`Shapes` in Kendo UI Diagram for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/configuration/shapes)
