---
title: Tooltip API
description: "API Index | Tooltip"
api_reference: true
slug: api_tooltipcomponent_wrapper
---

# Tooltip

## Directive

`kendo-tooltip`

## Props

### auto-hide `Boolean`

Specifies if the Tooltip will be hidden when the mouse leaves the target element ([`autoHide` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/tooltip/configuration/autohide)).

* If `autoHide` is set to `false`, the Tooltip will display a **Close** button.
* If `autoHide` is set to `false`, `showAfter` is specified, and `showOn` is set to `mouseenter`, the Tooltip will be displayed after the specific timeout even if the element is no longer hovered over.

### animation `Boolean | Object`

A collection of `Animation` objects for changing the default animations ([`animation` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/tooltip/configuration/animation)). If `animation` is set to `false`, the animations will be disabled. The supported composite props are available in [`AnimationProps`]({% slug api_tooltip_animationprops_wrapper %}).

### content `String | Function | Object`

The text or the function whose results will be displayed within the tooltip ([`content` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/tooltip/configuration/content)). By default, the tooltip will display the content of the `title` attribute of the target element. To retrieve the `title` attribute of the target from inside the content function, then use `target.data("title")`. The supported composite props are available in [`ContentProps`]({% slug api_tooltip_contentprops_wrapper %}).

### callout `Boolean`

Specifies if the Tooltip callout will be displayed ([`callout` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/tooltip/configuration/callout)).

### filter `String`

A selector for elements within the container for which the Tooltip will be displayed ([`filter` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/tooltip/configuration/filter)).

### iframe `Boolean`

Explicitly states whether content iframe will be created ([`iframe` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/tooltip/configuration/iframe)).

### height `Number`

The height (in pixels) of the Tooltip ([`height` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/tooltip/configuration/height)).

### width `Number`

The width (in pixels) of the Tooltip ([`width` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/tooltip/configuration/width)).

### position `String`

The position that is relative to the target element at which the Tooltip will be displayed ([`position` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/tooltip/configuration/position)).

The supported predefined values are:

* `bottom`
* `top`
* `left`
* `right`
* `center`

### show-after `Number`

The delay (in milliseconds) before the Tooltip is displayed ([`showAfter` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/tooltip/configuration/showafter)). If `showOn` is set to `click` or `focus`, `show-after` is ignored.

### show-on `String`

The event on which the Tooltip will be displayed ([`showOn` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/tooltip/configuration/showon)).

The supported predefined values are:

* `mouseenter`
* `click`
* `focus`

### hide-after `Number`

The delay (in milliseconds) before the Tooltip is hidden ([`hideAfter` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/tooltip/configuration/hideafter)). If `showOn` is set to `click` or `focus`, `hide-after` is ignored.

### offset `Number`

Specifies the offset (in pixels) between the Tooltip and the anchor ([`offset` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/tooltip/configuration/offset)). If the `callout` property is set to `true`, the offset is rendered from the callout arrow. If the `callout` property is set to `false`, the offset is rendered from the content of the Tooltip.

## Events

### contentload: `Function`

Fires when an AJAX request for content completes ([`contentLoad` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/tooltip/events/contentload)).

### show: `Function`

Fires when a Tooltip is displayed ([`show` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/tooltip/events/show)).

### hide: `Function`

Fires when a Tooltip is hidden ([`hide` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/tooltip/events/hide)).

### requeststart: `Function`

(Applies for AJAX requests only) Fires before an AJAX request starts ([`requestStart` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/tooltip/events/requeststart)).

### error: `Function`

Fires when an AJAX request for content fails ([`error` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/tooltip/events/error)).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/tooltip#methods). 

### kendoWidget

##### returns

Returns the Kendo UI Tooltip instance.
