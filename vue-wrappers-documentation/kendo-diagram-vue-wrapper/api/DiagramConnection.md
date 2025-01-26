---
title: connectionsProps API
description: "API Index | connectionsProps"
api_reference: true
slug: api_diagramconnectioncomponent
---

# DiagramConnection

## Directive

`kendo-diagram-connection`

## Props

### content-color `String`

The color of the connection content text.

### content-font-family `String`

The font family of the connection content text.

### content-font-size `Number`

The font size of the connection content text.

### content-font-style `String`

The font style of the connection content text.

### content-font-weight `String`

The font weight of the connection content text.

### content-template `String | Function`

The template which renders the labels.

### content-text `String`

The text which is displayed for the connection.

### content-visual `Function`

A function which returns a visual element that will be rendered for the content of the connection.

### editable `Boolean`

Defines the editable options of the shape.

### editable-tools `Array`

Specifies the tools of the toolbar. Supports all supported `toolbar.items` options.

The predefined tools are:

* `edit`&mdash;The selected item can be edited.
* `delete`&mdash;The selected items can be deleted.

### end-cap `String`

The end cap configuration or type name of the connection.

### end-cap-fill `String`

The end cap fill options or color of the connection.

### end-cap-fill-color `String`

The end cap fill color of the connection.

### end-cap-stroke `String`

The end cap stroke options or color of the connection.

### end-cap-stroke-color `String`

The end cap stroke color of the connection.

### end-cap-stroke-dash-type `String`

The stroke dash type of the end cap of the connection.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### end-cap-stroke-width `Number`

The end cap stroke width of the connection.

### end-cap-type `String`

The end cap type of the connection.

The supported values are:

* `none`&mdash;Renders no cap.
* `ArrowEnd`&mdash;Renders a filled arrow.
* `FilledCircle`&mdash;Renders a filled circle. You can also use `ArrowStart` for the `endCap` but its direction will be inversed.

### from `String | Number`

Defines the source of the connection. You can set the `from` property to a value which matches a shape id or to an object with XY-coordinates.

### from-x `Number`

Defines the x-coordinate of the connection source.

### from-y `Number`

Defines the y-coordinate of the connection source.

### from-connector `String`

Specifies the name of the source shape connector that will be used by the connection.

### hover-stroke-color `String`

Defines the highlight color when the pointer is hovering over the connection.

### points `Array`

Sets the intermediate points (in global coordinates) of the connection. These points cannot be manipulated by the user actions.

### selection-handles-fill `String`

The handles fill options.

### selection-handles-fill-color `String`

The handles fill color.

### selection-handles-stroke-color `String`

The handles stroke color.

### selection-handles-width `Number`

The width of the handle elements.

### selection-handles-height `Number`

The height of the handle elements.

### start-cap `String`

The start cap configuration or type name of the connection.

### start-cap-fill `String`

The start cap fill options or color of the connection.

### start-cap-fill-color `String`

The start cap fill color of the connection.

### start-cap-stroke `String`

The start cap stroke options or color of the connection.

### start-cap-stroke-color `String`

The start cap stroke color of the connection.

### start-cap-stroke-dash-type `String`

The stroke dash type of the start cap of the connection.

The supported dash types are:

* `dash`&mdash;A line that consists of dashes.
* `dashDot`&mdash;A line that consists of a repeating dash-dot pattern.
* `dot`&mdash;A line that consists of dots.
* `longDash`&mdash;A line that consists of a repeating long-dash pattern.
* `longDashDot`&mdash;A line that consists of a repeating long-dash-dot pattern.
* `longDashDotDot`&mdash;A line that consists of a repeating long-dash-dot-dot.
* `solid`&mdash;A solid line.

### start-cap-stroke-width `Number`

The start cap stroke width of the connection.

### start-cap-type `String`

The start cap type of the connection.

The supported values are:

* `none`&mdash;Renders no cap.
* `ArrowEnd`&mdash;Renders a filled arrow.
* `FilledCircle`&mdash;Renders a filled circle. 

### stroke-color `String`

The stroke or line color of the connection.

### stroke-width `Number`

The stroke width of the connection.

### to `String | Number`

Defines the target of the connection. You can set the `to` property to a value which matches a shape id or to an object with XY-coordinates.

### to-x `Number`

Defines the x value of the point.

### to-y `Number`

Defines the y value of the point.

### to-connector `String`

Specifies the name of the target shape connector that will be used by the connection.

### type `String`

Specifies the connection type which defines the way it routes. The routing of a connection is the way intermediate points of a connection define a route. A route is usually defined on the basis of constraints or behaviors.

Currently, two routing mechanisms for Diagram connections exist:

* Polyline route&mdash;Connects the defined intermediate points. For more information, refer to `connections.points`.
* Cascading route&mdash;Represents a rectangular route that creates a cascading path between the two ends of a connection and ignoring given connection points. The cascading type is useful when you use tree layout and hierarchies. The routed connection in this case will enhance the representation of the hierarchy and reproduce a classic organization diagram.

The supported values for the `type` property are:

* `polyline`&mdash;Connects the defined intermediate points. For more information, refer to `connections.points`.
* `cascading`&mdash;Discards given points and defines a cascading path between the endpoints.

## Suggested Links

* [`Connections` in Kendo UI Diagram for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/configuration/connections)
