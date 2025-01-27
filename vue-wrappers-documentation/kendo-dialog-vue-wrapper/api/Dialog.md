---
title: Dialog API
description: "API Index | Dialog"
api_reference: true
slug: api_dialogcomponent_wrapper
---

# Dialog

## Directive

`kendo-dialog`

## Child Directives

* [`kendo-dialog-action`]({% slug api_dialogactioncomponent_wrapper %})

## Props

### actions `Array`

A collection of objects which contain some text, an action, and primary attributes for specifying the Dialog buttons ([`actions` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dialog/configuration/actions)).

### animation `Boolean | Object`

A collection of `{Animation}` objects for changing the default animations ([`animation` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dialog/configuration/animation)). If `animation` is set to `false`, the animations will be disabled. The supported composite props are available in [`AnimationProps`]({% slug api_dialog_animationprops_wrapper %}).

### button-layout `String`

Specifies the possible layout of the action buttons in the Dialog ([`buttonLayout` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dialog/configuration/buttonlayout)).

The supported values are:

* `normal`
* `stretched`

### closable `Boolean`

Specifies whether a **Close** button will be rendered at the top corner of the Dialog ([`closable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dialog/configuration/closable)).

### content `String`

The content of a Dialog ([`content` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dialog/configuration/content)).

### height `Number | String`

The height of the Dialog ([`height` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dialog/configuration/height)).

### max-height `Number`

The maximum height (in pixels) that may be achieved by resizing the Dialog ([`maxHeight` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dialog/configuration/maxheight)).

### max-width `Number`

The maximum width (in pixels) that may be achieved by resizing the Dialog ([`maxWidth` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dialog/configuration/maxwidth)).

### messages `Object`

The text of the labels that are shown within the Dialog ([`messages` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dialog/configuration/messages)). Primarily used for localization. The supported composite props are available in [`MessagesProps`]({% slug api_dialog_messagesprops_wrapper %}).

### min-height `Number`

The minimum height (in pixels) that may be achieved by resizing the dialog ([`minHeight` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dialog/configuration/minheight)).

### min-width `Number`

The minimum width (in pixels) that may be achieved by resizing the Dialog ([`minWidth` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dialog/configuration/minwidth)).

### modal `Boolean | Object`

Specifies whether the Dialog will show a modal overlay over the page ([`modal` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dialog/configuration/modal)).

### title `String | Boolean`

The text in the title bar of the Dialog ([`title` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dialog/configuration/title)). If `modal` is set to `false`, the Dialog will be displayed without a title bar.

### visible `Boolean`

Specifies whether the Dialog will be initially visible ([`visible` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dialog/configuration/visible)).

### width `Number | String`

Specifies the width of the Dialog ([`width` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dialog/configuration/width)).


### size `String`

Specifies a predefined size of the Dialog ([`size` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dialog/configuration/size)).

## Events

### close: `Function`

Fires when a Dialog is closed by the user or through the `close()` method ([`close` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dialog/events/close)).

### hide: `Function`

Fires when the Dialog finishes its closing animation ([`hide` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dialog/events/hide)).

### initopen: `Function`

Fires when the Dialog is opened for the first time&mdash;that is, when the `open()` method is called ([`initOpen` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dialog/events/initopen)).

### open: `Function`

Fires when the Dialog is opened&mdash;that is, when the `open()` method is called ([`open` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dialog/events/open)).

### show: `Function`

Fires when the Dialog finishes its opening animation ([`show` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dialog/events/show)).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/dialog#methods). 

### kendoWidget

##### returns

Returns the Kendo UI Dialog instance.
