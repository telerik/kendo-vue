---
title: TreeMap API
description: "API Index | TreeMap"
api_reference: true
slug: api_treemapcomponent
---

# TreeMap

## Directive

`kendo-treemap`

## Props

### data-source `Object | Array`

The data source of the TreeMap for rendering the titles and tiles ([`dataSource` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/treemap/configuration/datasource)).

You can set `data-source` to:

* A JavaScript object which represents any valid data source configuration.
* A JavaScript array.
* An existing `kendo.data.HierarchicalDataSource` instance.

If the `dataSource` option is set to a JavaScript object or an array, the TreeMap will initialize a new `kendo.data.HierarchicalDataSource` instance by using that value as a data source configuration. If the `dataSource` option is an existing `kendo.data.HierarchicalDataSource` instance, the TreeMap will use that instance and will not initialize a new one.

### auto-bind `Boolean`

If `auto-bind` is set to `false`, the TreeMap will not bind to the data source during initialization ([`autoBind` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/treemap/configuration/autobind)). In such scenarios data binding will occur when the `change` event of the `dataSource` instance is fired. By default, `auto-bind` is set to `true` and the TreeMap will bind to the data source that is specified in the configuration.

### type `String`

The layout type for the TreeMap ([`type` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/treemap/configuration/type)).

The supported values are:

* `squarified`
* `horizontal`
* `vertical`

### theme `String`

The theme of the TreeMap ([`theme` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/treemap/configuration/theme)).

### value-field `String`

The data item field which contains the tile value ([`valueField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/treemap/configuration/valuefield)).

### color-field `String`

The data item field which contains the tile color ([`colorField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/treemap/configuration/colorfield)).

### text-field `String`

The data item field which contains the tile title ([`textField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/treemap/configuration/textfield))

### template `String | Function`

The template for rendering the tile content of the TreeMap ([`template` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/treemap/configuration/template)).

The template supports the following fields:

* `dataItem`&mdash;The original data item for constructing the point.
* `text`&mdash;The original text of the tile.

### colors `Array`

The default colors for the tiles of the TreeMap ([`colors` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/treemap/configuration/colors)). Accepts an array of specific colors or an array of color ranges.

## Events

### itemcreated: `Function`

Fired when a tile has been created ([`itemCreated` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/treemap/events/itemcreated).

### databound: `Function`

Fired when the widget is bound to data from its dataSource ([`dataBound` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/treemap/events/databound).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/treemap). 

### kendoWidget

##### returns

Returns the Kendo UI TreeMap instance.
