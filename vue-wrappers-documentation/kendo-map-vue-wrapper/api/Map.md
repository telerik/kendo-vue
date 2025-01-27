---
title: Map API
description: "API Index | Map"
api_reference: true
slug: api_mapcomponent
---


# Map

## Directive

`kendo-map`

## Child Components

* [`kendo-map-layer`]({% slug api_maplayercomponent %})
* [`kendo-map-marker`]({% slug api_mapmarkercomponent %})

## Props

### center `Array`

The center of the Map. Accepts coordinates in the `[Latitude, Longitude]` format ([`center` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/map/configuration/center)).

### controls `Object`

The configuration of the built-in Map controls ([`controls` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/map/configuration/controls)). The supported composite props are available in [`ControlsProps`]({% slug api_map_controlsprops %}).

### layer-defaults `Object`

The default configuration for the Map layers by type ([`layerDefaults` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/map/configuration/layerdefaults)). The supported composite props are available in [`LayerDefaultsProps`]({% slug api_map_layerdefaultsprops %}).

### layers `Array`

The configuration of the Map layers. The layer type is determined by the value of the `type` field ([`layers` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/map/configuration/layers)).

### marker-defaults `Object`

The default options for all markers ([`markerDefaults` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/map/configuration/markerdefaults)). The supported composite props are available in [`MarkerDefaultsProps`]({% slug api_map_markerdefaultsprops %}).

### markers `Array`

The static markers that will be displayed on the Map ([`markers` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/map/configuration/markers)).

### min-zoom `Number`

The minimum zoom level ([`minZoom` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/map/configuration/minzoom)). Typical web maps use zoom levels from 0 (whole world) to 19 (sub-meter features).

### max-zoom `Number`

The maximum zoom level ([`maxZoom` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/map/configuration/maxzoom)). Typical web maps use zoom levels from 0 (whole world) to 19 (sub-meter features).

### min-size `Number`

The size (in pixels) of the Map at zoom level 0 ([`minSize` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/map/configuration/minsize)).

### pannable `Boolean`

Indicates whether the Map can be panned ([`pannable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/map/configuration/pannable)).

### wraparound `Boolean`

Specifies whether the Map will wrap around the East-West edges ([`wraparound` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/map/configuration/wraparound)).

### zoom `Number`

The initial zoom level ([`zoom` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/map/configuration/zoom)). Typical web maps use zoom levels from 0 (whole world) to 19 (sub-meter features). The Map size is derived from the zoom level and `minScale` options&mdash;`size = (2 ^ zoom) * minSize`.

### zoomable `Boolean`

Indicates whether the zoom level of the Map can be changed by the user ([`zoomable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/map/configuration/zoomable)).

## Events

### beforereset: `Function`

Fires immediately before the Map is reset ([`beforeReset` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/map/events/beforereset)). This event is typically used for cleanup by layer implementers.

### click: `Function`

Fires when the user clicks on the Map ([`click` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/map/events/click)).

### markeractivate: `Function`

Fires when a marker is displayed and has a DOM element assigned ([`markerActivate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/map/events/markeractivate)).

### markercreated: `Function`

Fires when a marker is created and is about to be displayed ([`markerCreated` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/map/events/markercreated)). Cancelling the event will prevent the marker from being displayed. To access the `marker` DOM element, use `markerActivate`.

### markerclick: `Function`

Fires when a marker is clicked or tapped ([`markerClick` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/map/events/markerclick)).

### pan: `Function`

Fires while the Map viewport is moved ([`pan` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/map/events/pan)).

### panend: `Function`

Fires after the Map viewport was moved ([`panEnd` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/map/events/panend)).

### reset: `Function`

Fires when the Map is reset ([`reset` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/map/events/reset)). Typically, the Map resets on initial load and after a zoom or center change was made.

### shapeclick: `Function`

Fires when a shape is clicked or tapped ([`shapeClick` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/map/events/shapeclick)).

### shapecreated: `Function`

Fires when a shape is created but is not rendered yet ([`shapeCreated` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/map/events/shapecreated)).

### shapefeaturecreated: `Function`

Fires when a GeoJSON Feature is created on a shape layer ([`shapeFeatureCreated` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/map/events/shapefeaturecreated)).

### shapemouseenter: `Function`

Fires when the mouse enters a shape ([`shapeMouseEnter` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/map/events/shapemouseenter)).

### shapemouseleave: `Function`

Fires when the mouse leaves a shape ([`shapeMouseLeave` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/map/events/shapemouseleave)).

### zoomstart: `Function`

Fires when the zoom level of the Map is about to change ([`zoomStart` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/map/events/zoomstart)). Cancelling the event will prevent the user action.

### zoomend: `Function`

Fires when the zoom level of the Map is changed ([`zoomEnd` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/map/events/zoomend)).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/map). 

### kendoWidget

##### returns

Returns the Kendo UI Map instance.
