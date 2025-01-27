---
title: Notification API
description: "API Index | Notification"
api_reference: true
slug: api_notificationcomponent_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/notification/api/"
---

# Notification

## Directive

`kendo-notification`

## Props

### allow-hide-after `Number`

The period (in milliseconds) after which the user can dismiss (hide) a Notification ([`allowhideafter` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/notification/configuration/allowhideafter)).

### animation `Object | Boolean`

Defines the custom showing and hiding animations through a Kendo UI `Animation` object ([`animation` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/notification/configuration/animation)). Setting `animation` to `false` disables the animations.

### append-to `String | jQuery`

The element to which the Notification will be appended or prepended depending on the stacking direction ([`appendTo` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/notification/configuration/appendto)).

### auto-hide-after `Number`

The period (in milliseconds) after which a Notification disappears automatically ([`autoHideAfter` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/notification/configuration/autohideafter)). Setting a zero value disables this behavior.

### button `Boolean`

(Works with the built-in templates only) Determines whether the Notification will render a **Hide** button ([`button` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/notification/configuration/button)).

### height `Number | String`

The height of the Notifications ([`height` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/notification/configuration/height)). Numbers are treated as pixels.

### hide-on-click `Boolean`

Determines whether the Notification will hide when the user randomly clicks their content ([`hideOnClick` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/notification/configuration/hideonclick)).

### position `Object`

Applies to popup Notifications only when `appendTo` is not set ([`position` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/notification/configuration/position)). Determines the position of the first Notification on the screen and whether the Notifications will move together with the page content during scrolling. `top` takes precedence over `bottom` and `left` takes precedence over `right`. The supported composite props are available in [`PositionProps`]({% slug api_notification_positionprops_wrapper %}).

### stacking `String`

The direction in which multiple Notifications will stack (arrange) in relation to the first one ([`stacking` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/notification/configuration/stacking)).

The supported values are:

* `up`
* `right`
* `down`
* `left`
* `default`&mdash;Takes into consideration the applied position settings. Evaluated to `up` or `down`.

### templates `Array`

Describes the HTML markup of the different Notification types as Kendo UI template strings ([`templates` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/notification/configuration/templates)).

The supported built-in types are:

* `info`
* `success`
* `warning`
* `error`

The supported composite props are available in [`TemplatesProps`]({% slug api_notification_templatesprops_wrapper %}).

### width `Number | String`

The width of the Notifications ([`width` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/notification/configuration/width)). Numbers are treated as pixels.

## Events

### hide: `Function`

Fires when the hiding animation of a Notification starts ([`hide` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/notification/events/hide)).

### show: `Function`

Fires when the showing animation of a Notification starts ([`show` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/notification/events/show)).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/notification#methods). 

### kendoWidget

##### returns

Returns the Kendo UI Notification instance.
