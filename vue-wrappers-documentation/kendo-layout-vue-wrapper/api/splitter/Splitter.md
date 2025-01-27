---
title: Splitter API
description: "API Index | Splitter"
api_reference: true
slug: api_splittercomponent_wrapper
---

# Splitter

## Directive

`kendo-splitter`

## Child Components

* [`kendo-splitter-pane`]({% slug api_splitterpanecomponent_wrapper %})

## Props

### orientation `String`

Specifies the orientation of the widget ([`orientation` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/splitter/configuration/orientation).

The supported values are:

* `horizontal`
* `vertical`

### panes `Array`

An array of pane definitions ([`panes` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/splitter/configuration/panes).

## Events

### collapse: `Function`

Fires when a Splitter pane is collapsed ([`collapse` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/splitter/events/collapse).

### contentload: `Function`

Fires when the content of a pane finished loading ([`contentLoad` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/splitter/events/contentload).

### error: `Function`

Fires when the AJAX request that fetches the content of a pane failed ([`error` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/splitter/events/error).

### expand: `Function`

Fires when a Splitter pane is expanded ([`expand` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/splitter/events/expand).

### layoutchange: `Function`

(Deprecated. Use the `resize` event instead.) Fires when the layout of the Splitter changes ([`layoutChange` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/splitter/events/layoutchange).

### resize: `Function`

Fires when a PanelBar pane is resized ([`resize` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/splitter/events/resize).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/splitter#methods). 

### kendoWidget

##### returns

Returns the Kendo UI Splitter instance.
