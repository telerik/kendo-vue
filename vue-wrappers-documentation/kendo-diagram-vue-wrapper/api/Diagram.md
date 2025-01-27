---
title: Diagram API
description: "API Index | Diagram"
api_reference: true
slug: api_diagramcomponent
---

# Diagram

## Directive

`kendo-diagram`

## Child Components

* [`kendo-diagram-connection`]({% slug api_diagramconnectioncomponent %})
* [`kendo-diagram-shape`]({% slug api_diagramshapecomponent %})

## Props

### auto-bind `Boolean`

If `auto-bind` is set to `false`, the Diagram will not bind to the data source during initialization ([`autoBind` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/configuration/autobind)). In this case, data binding will occur when the `change` event of the data source is fired. By default, the Diagram will bind to the data source that is specified in the configuration.

### connection-defaults `Object`

Defines the defaults of the connections ([`connectionDefaults` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/configuration/connectiondefaults)). Whenever a connection is created, the specified `connectionDefaults` value will be used and merged with the (optional) configuration which is passed through the connection creation method. The supported composite props are available in [`ConnectionDefaultsProps`]({% slug api_diagram_connectiondefaultsprops %}).

### connections `Array`

Defines the configuration for the connections ([`connections` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/configuration/connections)).

### connections-data-source `Object | Array`

Defines the data source of the connections ([`connectionsDataSource` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/configuration/connectionsdatasource)).

### data-source `Object | Array`

Defines the data source of the Diagram ([`dataSource` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/configuration/datasource)).

### editable `Boolean | Object`

A group of settings which configure the behavior of the Diagram when the user attempts to edit, delete, or create connections as well as edit, delete, create, drag, resize, or rotate shapes. ([`editable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/configuration/editable)). The supported composite props are available in [`EditableProps`]({% slug api_diagram_editableprops %}).

### layout `Object`

Composing the layout of the Diagram consists of arranging the shapes and connections in a certain fashion to achieve an aesthetically pleasing experience to the user ([`layout` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/configuration/layout)). The layout aims at giving a more direct insight in the information which is contained within the Diagram and its relational structure.

On a technical level, the layout consists of a algorithms and optimizations:

* Analysis of the relational structure (loops, multi-edge occurrence).
* Connectedness of the Diagram and the splitting into disconnected components.
* Crossings of connections or bends and length of links.
* Ad-hoc calculations which depend on the type of layout.

The criteria on which an algorithm is based vary but the common denominator is:

* A clean separation of connected components (subgraphs).
* An orderly organization of the shapes in such a way that siblings are close to another, that is, a tight packing of shapes which belong together (parent of child relationship) or a minimum of connection crossings.

The Kendo UI Diagram includes three of the most used layout algorithms which cover most of the layout needs:

* Tree layout
* Force-directed layout
* Layered layout

 For more information, refer to the `type` property.

 The generic way to apply a layout is by calling the `layout()` method on the Diagram which has a single-parameter option. The option is an object which can contain parameters that are specific to the layout as well as parameters that customize the global grid layout. The parameters which apply to other layout algorithms can be included but are overlooked if not applicable to the chosen layout type&mdash;this means that you can define a set of parameters which covers all possible layout types and pass it in the method whatever the layout that is defined in the first parameter.

 The supported composite props are available in [`LayoutProps`]({% slug api_diagram_layoutprops %}).

### pannable `Boolean | Object`

Defines the pannable options. Used for disabling the panning of the Diagram or for changing the key that activates the pan behavior ([`pannable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/configuration/pannable)). The supported composite props are available in [`PannableProps`]({% slug api_diagram_pannableprops %}).

### pdf `Object`

Configures the export settings for the `saveAsPDF` method ([`pdf` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/configuration/pdf)). The supported composite props are available in [`PdfProps`]({% slug api_diagram_pdfprops %}).

### selectable `Boolean | Object`

Defines the selection options of the Diagram ([`selectable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/configuration/selectable)).

By default, you can select shapes in the Diagram in the following ways:

* By clicking a single shape to select it and deselect any previously selected shapes.
* By holding the `Ctrl` key while clicking multiple shapes to select them and any other shapes between them.

By using the `selectable` configuration, you can:

* Enable single selection only.
* Enable selection by drawing a rectangular area with the mouse around shapes in the canvas.
* Disable selection altogether.

The supported composite props are available in [`SelectableProps`]({% slug api_diagram_selectableprops %}).

### shape-defaults `Object`

Defines the default options that will be applied to all shapes in the Diagram ([`shapeDefaults` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/configuration/shapedefaults)). The supported composite props are available in [`ShapeDefaultsProps`]({% slug api_diagram_shapedefaultsprops %}).

### shapes `Array`

Defines the shape options ([`shapes` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/configuration/shapes)).

### template `String | Function`

The template which renders the content of the shape when bound to a dataSource ([`template` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/configuration/template)). The names you can use in the template correspond to the properties that are used in the dataSource.

### theme `String`

The theme of the Diagram ([`theme` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/configuration/theme)).

`theme` can be either a built-in theme or a `sass` theme. When `theme` is set to `sass`, the Diagram will read the variables from the SASS-based themes.

The supported values are:

* `sass`&mdash;A special value.
* `black`
* `blueopal`
* `bootstrap`
* `default`
* `highcontrast`
* `metro`
* `metroblack`
* `moonlight`
* `silver`
* `uniform`

### zoom `Number`

The default zoom level of the Diagram in percentages ([`zoom` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/configuration/autobind)).

### zoom-max `Number`

The maximum zoom level in percentages. The user will not be allowed to zoom in past this level ([`zoomMax` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/configuration/zoommax)).

### zoom-min `Number`

The minimum zoom level in percentages ([`zoomMin` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/configuration/zoommin)). The user will not be allowed to zoom out past this level.

### zoom-rate `Number`

The zoom step when the user uses the mousewheel to zoom in or out ([`zoomRate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/configuration/zoomrate)).

## Events

### add: `Function`

Fires when the user adds a new shape or connection ([`add` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/events/add)). The event handler function context (available through the this keyword) will be set to the Diagram instance.

### cancel: `Function`

Fires when the user clicks the **Cancel**" button in the popup window if the item was added over a toolbar ([`cancel` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/events/cancel)).

### change: `Function`

Fires when an item is added or removed to or from the Diagram ([`change` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/events/change)).

### click: `Function`

Fires when the user clicks on a shape or a connection ([`click` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/events/click)).

### databound: `Function`

Fires when the Diagram is bound to data from `dataDource` and `connectionsDataSource` ([`dataBound` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/events/databound)). The event handler function context (available through the this keyword) will be set to the Diagram instance.

### drag: `Function`

Fires when the user drags shapes or a connection ([`drag` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/events/drag)).

### dragend: `Function`

Fires after the user finishes dragging shapes or a connection ([`dragEnd` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/events/dragend)).

### dragstart: `Function`

Fires before the user starts to drag shapes or a connection ([`dragStart` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/events/dragstart)).

### edit: `Function`

Fires when the user edits a shape or a connection ([`edit` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/events/edit)).

### itemboundschange: `Function`

Fires when the location or the size of a shape changes ([`itemBoundsChange` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/events/itemboundschange)).

### itemrotate: `Function`

Fires when a shape is rotated ([`itemRotate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/events/itemrotate)).

### mouseenter: `Function`

Fires when the mouse enters a shape or a connection ([`mouseEnter` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/events/mouseenter)). Does not fire for disabled items.

### mouseleave: `Function`

Fires when the mouse leaves a shape or a connection ([`mouseLeave` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/events/mouseleave)). Does not fire for disabled items.

### pan: `Function`

Fires when the user pans the Diagram ([`pan` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/events/pan)).

### remove: `Function`

Fires when the user removes a shape or a connection ([`remove` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/events/remove)).

### save: `Function`

Fires when the user saved a shape or a connection ([`save` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/events/save)).

### select: `Function`

Fires when the user selects one or more items ([`select` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/events/select)).

### toolbarclick: `Function`

Fires when the user clicks an item in the toolbar ([`toolBarClick` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/events/toolbarclick)).

### zoomend: `Function`

Fires when the user changes the zoom level of the Diagram ([`zoomEnd` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/events/zoomend)).

### zoomstart: `Function`

Fires when the user starts changing the zoom level of the Diagram ([`zoomStart` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/events/zoomstart)).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram#methods). 

### kendoWidget

##### returns

Returns the Kendo UI Diagram instance.
