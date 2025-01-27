---
title: Window API
description: "API Index | Window"
api_reference: true
slug: api_windowcomponent_wrapper
---

# Window

## Directive

`kendo-window`

## Props

### actions `Array`

The buttons for interacting with the window ([`actions` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/window/configuration/actions)).

The supported predefined array values are:

* `Close`
* `Refresh`
* `Minimize`
* `Maximize`

### animation `Boolean | Object`

A collection of `Animation` objects for changing the default animations ([`animation` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/window/configuration/animation)). If `animation` is set to `false`, the Window animations are disabled. The supported composite props are available in [`AnimationProps`]({% slug api_window_animationprops_wrapper %}).

### append-to `Object | String`

The element to which the Window will be appended ([`appendTo` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/window/configuration/appendto)). Useful if the Window is used together with a form. `append-to` does not constrain the dragging of the Window within the specific element&mdash;to constrain the dragging, use the `draggable.containment` setting.

### auto-focus `Boolean`

Determines whether the Window will be automatically focused when it is opened ([`autoFocus` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/window/configuration/autofocus)). `auto-focus` also influences the focus behavior when the Window is clicked when it is already opened.

### content `String | Object`

Specifies a URL or request options from which the Window will load its content ([`content` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/window/configuration/content)). For URLs which start with a protocol (for example, `http://`), an `iframe` container element is automatically created. This behavior may change in future versions, so it is advisable to always use the `iframe` configuration option. The supported composite props are available in [`ContentProps`]({% slug api_window_contentprops_wrapper %}).

### draggable `Boolean | Object`

If `draggable` is set to `true`, the user will be able to drag the Window ([`content` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/window/configuration/content)). The supported composite props are available in [`DraggableProps`]({% slug api_window_draggableprops_wrapper %}).

### iframe `Boolean`

Explicitly states whether a content `iframe` will be created ([`iframe` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/window/configuration/iframe)).

### height `Number | String`

Specifies the height of the Window ([`height` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/window/configuration/height)).

### max-height `Number`

The maximum height (in pixels) the Window can reach when resized ([`maxHeight` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/window/configuration/maxheight)).

### max-width `Number`

The maximum width (in pixels) the Window can reach when resized ([`maxWidth` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/window/configuration/maxwidth)).

### min-height `Number`

The minimum height (in pixels) the Window can reach when resized ([`minHeight` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/window/configuration/minheight)).

### min-width `Number`

The minimum width (in pixels) the Window can reach when resized ([`minWidth` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/window/configuration/minwidth)).

### modal `Boolean | Object`

Specifies whether the Window will display a modal overlay over the page ([`modal` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/window/configuration/modal)).

### pinned `Boolean`

Specifies whether the Window will be pinned, that is, will not move together with the page content during scrolling ([`pinned` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/window/configuration/pinned)).

### position `Object`

A collection of one or two members which define the initial top and left position of the Window on the page or in the containment element ([`position` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/window/configuration/position)). The supported composite props are available in [`PositionProps`]({% slug api_window_positionprops_wrapper %}).

### resizable `Boolean`

If `resizable` is set to `true`, the user is able to resize the Window ([`resizable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/window/configuration/resizable)).

### scrollable `Boolean`

If `scrollable` is set to `true`, the user is able to scroll the content if the Window ([`scrollable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/window/configuration/scrollable)).

### title `String | Boolean | Object`

The text in the title bar of the Window ([`title` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/window/configuration/title)). If `title` is set to `false`, the Window will be displayed without a title bar. The Window will not render its title-bar buttons which will prevent the dragging of the Window unless `dragHandle` is configured. The supported composite props are available in [`TitleProps`]({% slug api_window_titleprops_wrapper %}).

### visible `Boolean`

Specifies whether the Window will be initially visible ([`visible` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/window/configuration/visible)).

### width `Number | String`

Specifies the width of the Window ([`width` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/window/configuration/width)).

### size `String`

Specifies the size of the Window ([`size` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/window/configuration/size)).

## Events

### activate: `Function`

Fires when a Window finished its opening animation ([`activate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/window/events/activate)).

### close: `Function`

Fires when a Window is closed either through user interaction or over the `close()` method ([`close` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/window/events/close)).

### deactivate: `Function`

Fires when a Window finished its closing animation ([`deactivate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/window/events/deactivate)).

### dragend: `Function`

Fires when a Window was moved by a user ([`dragEnd` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/window/events/dragend)).

### dragstart: `Function`

Fires when the user starts to move the Window ([`dragStart` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/window/events/dragstart)).

### error: `Function`

Fires when an AJAX request for content fails ([`error` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/window/events/error)).

### maximize: `Function`

(Available as of 2016.Q1.SP1) Fires when the Window was maximized by the user ([`activate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/window/events/activate)).

### minimize: `Function`

(Available as of 2016.Q1.SP1) Fires when the Window was minimized by the user ([`minimize` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/window/events/minimize)).

### open: `Function`

Fires when a Window is opened, that is, when the `open()` method is called ([`open` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/window/events/open)).

### refresh: `Function`

The `refresh` event ([`refresh` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/window/events/refresh)) fires when any of the following occurs:

* The content of the Window finished loading through AJAX.
* The iframe of the Window finished loading.
* The **Refresh** button of a Window with static content was clicked.

### resize: `Function`

Fires when the Window was resized by the user ([`resize` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/window/events/resize)).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/window#methods). 

### kendoWidget

##### returns

Returns the Kendo UI Window instance.
