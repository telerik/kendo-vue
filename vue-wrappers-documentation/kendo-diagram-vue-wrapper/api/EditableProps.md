---
title: editableProps API
description: "API Index | editableProps"
api_reference: true
slug: api_diagram_editableprops
---

# EditableProps

### editable-connection-template `String | Function`

Specifies the connection editor template which shows up when the connection is in the process of editing. To change the default editors for the connection fields or to prevent some fields from being edited by not rendering an editor input for them, you can use a template.

### editable-drag `Boolean`

Specifies if the shapes and connections can be dragged.

### editable-drag-snap `Boolean`

Specifies the `drag-snap` options of the shape. By default, during dragging, the shapes move by a given number of pixels at once. You can disable this behavior to make the movement of the shapes smooth or you can specify a different number for the `drag-snap` size to simulate a snap-to-grid functionality.

### editable-drag-snap-size `Number`

Specifies the `drag-snap` size of the shape.

### editable-remove `Boolean`

Specifies if the shapes and connections can be removed.

### editable-resize `Boolean`

Defines the look and feel of the shape resizing handles.

### editable-resize-handles-fill `String`

Specifies the fill settings of the resizing handles.

### editable-resize-handles-fill-color `String`

Specifies the fill color of the resizing handles.

### editable-resize-handles-fill-opacity `Number`

Specifies the fill opacity of the resizing handles.

### editable-resize-handles-height `Number`

Specifies the height of the resizing handles.

### editable-resize-handles-hover-fill `String`

Specifies the fill settings on hovering over the resizing handles.

### editable-resize-handles-hover-fill-color `String`

Specifies the fill color on hovering over the resizing handles.

### editable-resize-handles-hover-fill-opacity `Number`

Specifies the fill opacity on hovering over the resizing handles.

### editable-resize-handles-hover-stroke-color `String`

Specifies the stroke color on hovering over the resizing handles.

### editable-resize-handles-hover-stroke-dash-type `String`

Specifies the stroke dash type on hovering over the resizing handles.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### editable-resize-handles-hover-stroke-width `Number`

Specifies the stroke color on hovering over the resizing handles.

### editable-resize-handles-stroke-color `String`

Specifies the stroke color of the resizing handles.

### editable-resize-handles-stroke-dash-type `String`

Specifies the stroke dash type of the resizing handles.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### editable-resize-handles-stroke-width `Number`

Specifies the stroke thickness of the resizing handles.

### editable-resize-handles-width `Number`

Specifies the width of the resizing handles.

### editable-rotate `Boolean`

Specifies whether the shapes can be rotated. Changing `editable-rotate` after you create the Diagram will be ignored.

### editable-rotate-fill-color `String`

Specifies the fill color of the rotation thumb.

### editable-rotate-fill-opacity `Number`

Specifies the fill opacity of the rotation thumb.

### editable-rotate-stroke-color `String`

Specifies the stroke color of the rotation thumb.

### editable-rotate-stroke-width `Number`

Specifies the stroke thickness of the rotation thumb.

### editable-shape-template `String | Function`

Specifies the shape editor template. You can use `editable-shape-template` to customize the editing UI of the shape or to display editor controls only for certain fields of the shape data item.

### editable-tools-tool-name `String`

The name of the tool.

The built-in tools are:

* `edit`
* `createShape`
* `createConnection`
* `undo`
* `redo`
* `rotateClockwise`
* `rotateAnticlockwise`

### editable-tools-tool-step `Number`

The step of the `rotateClockwise` and `rotateAnticlockwise` tools.

## Suggested Links

* [`Editable` in Kendo UI Diagram for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/configuration/editable)
