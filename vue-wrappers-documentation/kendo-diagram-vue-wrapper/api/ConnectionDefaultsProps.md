---
title: connectionDefaultsProps API
description: "API Index | connectionDefaultsProps"
api_reference: true
slug: api_diagram_connectiondefaultsprops
---

# ConnectionDefaultsProps

### connection-defaults-content-color `String`

The color of the connection content text.

### connection-defaults-content-font-family `String`

The font family of the connection content text.

### connection-defaults-content-font-size `Number`

The font size of the connection content text.

### connection-defaults-content-font-style `String`

The font style of the connection content text.

### connection-defaults-content-font-weight `String`

The font weight of the connection content text.

### connection-defaults-content-template `String | Function`

The template which renders the labels. The template supports the `dataItem` field which represents the data item.

### connection-defaults-content-text `String`

The static text which is displayed on the connection.

### connection-defaults-content-visual `Function`

A function which returns a visual element that will be rendered for the content of a connection.

### connection-defaults-editable `Boolean`

Defines the editing behavior of the connections.

### connection-defaults-editable-drag `Boolean`

Specifies if the connections can be dragged.

### connection-defaults-editable-remove `Boolean`

Specifies if the connections can be removed.

### connection-defaults-editable-tools `Array`

Specifies the tools of the toolbar. Supports all supported `toolbar.items` options.

The predefined tools are:

* `edit`&mdash;The selected item can be edited.
* `delete`&mdash;The selected items can be deleted.

### connection-defaults-end-cap `String`

The end cap configuration of the connections. Can be set to a configuration object or a string that represents the `endCap.type` value.

### connection-defaults-end-cap-fill `String`

The end cap fill options or color of the connections.

### connection-defaults-end-cap-fill-color `String`

The end cap fill color of the connections.

### connection-defaults-end-cap-stroke `String`

The end cap stroke options or color of the connections.

### connection-defaults-end-cap-stroke-color `String`

The end cap stroke color of the connections.

### connection-defaults-end-cap-stroke-dash-type `String`

The stroke dash type of the end cap of the connections.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### connection-defaults-end-cap-stroke-width `Number`

The end cap stroke width of the connections.

### connection-defaults-end-cap-type `String`

The end cap type which is used in the connections.

The supported values are:

* `none`&mdash;Renders no cap.
* `ArrowEnd`&mdash;renders a filled arrow.
* `FilledCircle`&mdash;Renders a filled circle.

### connection-defaults-from-connector `String`

Specifies the name of the source shape connector that will be used by default.

The supported values are:

* `top`
* `right`
* `bottom`
* `left`
* `auto`

### connection-defaults-hover-stroke-color `String`

Defines the highlight color when the mouse pointer hovers over a connection.

### connection-defaults-selectable `Boolean`

Specifies if a connection can be selected.

### connection-defaults-selection-handles-fill `String`

The handles fill options when a connection is selected.

### connection-defaults-selection-handles-fill-color `String`

The handles fill color when a connection is selected.

### connection-defaults-selection-handles-stroke-color `String`

The handles stroke color when a connection is selected.

### connection-defaults-selection-handles-width `Number`

The width of the handle elements when a connection is selected.

### connection-defaults-selection-handles-height `Number`

The height of the handle elements when a connection is selected.

### connection-defaults-start-cap `String`

The start cap configuration or type name of the connection.

### connection-defaults-start-cap-fill `String`

The start cap fill options or color of the connection.

### connection-defaults-start-cap-fill-color `String`

The start cap fill color of the connection.

### connection-defaults-start-cap-stroke `String`

The start cap stroke options or color of the connection.

### connection-defaults-start-cap-stroke-color `String`

The start cap stroke color of the connection.

### connection-defaults-start-cap-stroke-dash-type `String`

The stroke dash type of the start cap of the connection.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### connection-defaults-start-cap-stroke-width `Number`

The start cap stroke width of a connection.

### connection-defaults-start-cap-type `String`

The start cap type of a connection.

The supported values are:

* `none`&mdash;Renders no cap.
* `ArrowEnd`&mdash;renders a filled arrow.
* `FilledCircle`&mdash;Renders a filled circle.

### connection-defaults-stroke-color `String`

The stroke or line color of the connection.

### connection-defaults-stroke-width `Number`

The stroke width of the connection.

### connection-defaults-to-connector `String`

The name of the target shape connector that will be used by default.

The supported values are:

* `top`
* `right`
* `bottom`
* `left`
* `auto`

### connection-defaults-type `String`

Specifies the connection type.

The supported values are:

* `Polyline`&mdash;Connects the defined intermediate points.
* `Cascading`&mdash;Discards given points and defines a cascading path between the endpoints.

## Suggested Links

* [`ConnectionDefaults` in Kendo UI Diagram for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/configuration/connectiondefaults)
