---
title: ToolBar API
description: "API Index | ToolBar"
api_reference: true
slug: api_toolbarcomponent_wrapper
---

# ToolBar

## Directive

`kendo-toolbar`

## Child Components

* [`kendo-toolbar-item`]({% slug api_toolbaritemcomponent_wrapper %})

## Props

### resizable `Boolean`

If `resizable` is set to `true`, the ToolBar will detect changes in the viewport width and will hide the overflowing controls in the overflow popup of the command ([`resizable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/toolbar/configuration/resizable)).

### items `Array`

A JavaScript array that contains the configuration of the ToolBar commands ([`items` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/toolbar/configuration/items)).

## Events

### click: `Function`

Fires when the user clicks a command button ([`click` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/toolbar/events/click)).

### kendoclick: `Function`

Specially provided for Vue 3 scenarios. Fires when the user clicks a command button ([`click` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/toolbar/events/click)).

### close: `Function`

Fires when the SplitButton's popup closes ([`close` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/toolbar/events/close)).

### open: `Function`

Fires when the Split Button's popup opens ([`open` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/toolbar/events/open)).

### toggle: `Function`

Fires when the user changes the checked state of a toggle button ([`toggle` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/toolbar/events/toggle)).

### overflowclose: `Function`

Fires when the overflow popup container is about to close ([`overflowClose` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/toolbar/events/overflowclose)).

### overflowopen: `Function`

Fires when the overflow popup container is about to open ([`overflowOpen` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/toolbar/events/overflowopen)).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/toolbar#methods). 

### kendoWidget

##### returns

Returns the Kendo UI ToolBar instance.
