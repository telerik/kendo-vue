---
title: PanelBar API
description: "API Index | PanelBar"
api_reference: true
slug: api_panelbarcomponent_wrapper
---

# PanelBar

## Directive

`kendo-panelbar`

## Child Components

* [`kendo-panelbar-item`]({% slug api_panelbaritemcomponent_wrapper %})

## Props

### animation `Boolean | Object`

A collection of visual animations for the PanelBar items which are expanded or collapsed by the user ([`animation` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/panelbar/configuration/animation)). If `animation` is set to `false`, all animations of the PanelBar will be disabled. The supported composite props are available in [`AnimationProps`]({% slug api_panelbar_animationprops_wrapper %}).

### auto-bind `Boolean`

If `auto-bind` is set to `false`, the PanelBar will not bind to the data source during initialization ([`autoBind` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/panelbar/configuration/autobind)). In this case data binding will occur when the `change` event of the data source fires. By default, the PanelBar will bind to the data source that is specified in the configuration.

### content-urls `Array`

An array with the URLs from which the content of the PanelBar items will be loaded ([`contentUrls` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/panelbar/configuration/contenturls)). To load only specific items with Ajax, set the URLs to the corresponding positions in the array and the other elements to `null`.

### data-image-url-field `String`

The field of the data item that provides the image URL of the PanelBar nodes ([`dataImageUrlField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/panelbar/configuration/dataimageurlfield)).

### data-source `Object | Array`

The data source of the PanelBar for rendering the nodes ([`dataSource` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/panelbar/configuration/datasource)).

You can set `data-source` to:

* A JavaScript object which represents any valid data source configuration.
* A JavaScript array.
* An existing `kendo.data.HierarchicalDataSource` instance.

If the `dataSource` option is set to a JavaScript object or an array, the Chart will initialize a new `kendo.data.HierarchicalDataSource` instance by using that value as a data source configuration. If the `dataSource` option is an existing `kendo.data.HierarchicalDataSource` instance, the Chart will use that instance and will not initialize a new one.

### data-sprite-css-class-field `String`

The field of the data item that provides the sprite CSS class of the nodes ([`dataSpriteCssClassField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/panelbar/configuration/dataspritecssclassfield)). If an array, each level uses the field that is at the same index in the array, or the last item in the array.

### data-text-field `String | Array`

The field of the data item that provides the text content of the nodes ([`dataTextField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/panelbar/configuration/datatextfield)). If an array, each level uses the field that is at the same index in the array, or the last item in the array.

### data-url-field `String`

The field of the data item that provides the link URL of the nodes ([`dataUrlField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/panelbar/configuration/dataurlfield)).

### expand-mode `String`

Specifies the way the PanelBar items are displayed when the user opens and closes them ([`expandMode` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/panelbar/configuration/expandmode)).

### load-on-demand `Boolean`

Indicates whether the child DataSources will be fetched lazily when the parent groups are expanded ([`loadOnDemand` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/panelbar/configuration/loadondemand)). Setting `load-on-demand` to `false` causes all child DataSources that will be loaded during initialization.

### messages `Object`

The text messages that are displayed in the PanelBar ([`messages` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/panelbar/configuration/messages)). The `messages` property is used to customize and localize the messages. The supported composite props are available in [`MessagesProps`]({% slug api_panelbar_messagesprops_wrapper %}).

### template `String | Function`

The template for rendering each node ([`template` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/panelbar/configuration/template)).

## Events

### activate: `Function`

Fires when a PanelBar item is activated ([`activate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/panelbar/events/activate).

### collapse: `Function`

Fires when a PanelBar item is collapsed ([`collapse` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/panelbar/events/collapse).

### contentload: `Function`

Fires when content is fetched from an AJAX request ([`contentLoad` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/panelbar/events/contentload).

### databound: `Function`

Fires after the `change` event of the data source was processed due to adding or removing an item ([`dataBound` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/panelbar/events/databound).

### error: `Function`

Fires when AJAX request results in an error ([`error` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/panelbar/events/error).

### expand: `Function`

Fires when a PanelBar item is expanded ([`expand` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/panelbar/events/expand).

### select: `Function`

Fires when a PanelBar item is selected by the user ([`select` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/panelbar/events/select).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/panelbar#methods). 

### kendoWidget

##### returns

Returns the Kendo UI PanelBar instance.
