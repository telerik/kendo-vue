---
title: Button API
description: "API Index | Button"
api_reference: true
slug: api_buttoncomponent_wrapper
---

# Button

## Directive

`kendo-button`

## Props

### enable `Boolean`

Indicates whether the Button will be enabled or disabled ([`enable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/button/configuration/enable)). By default, the Button is enabled unless a `disabled="disabled"` attribute is detected.

### icon `String`

Defines a name of an existing icon in the Kendo UI theme sprite ([`icon` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/button/configuration/icon)). The icon will be applied as a background image of a `span` element inside the Button. The Button can add a `span` element automatically or, if you set a `k-icon` CSS class, use an existing element. 

### icon-class `String`

Defines one or more CSS classes which are separated by spaces and which are applied to a `span` element inside the Button ([`iconClass` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/button/configuration/iconclass)). Allows the usage of custom icons.

### image-url `String`

Defines a URL which will be used for an `img` element inside the Button ([`imageUrl` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/button/configuration/imageurl)). The URL can be relative or absolute. If the URL is relative, it will be evaluated with relation to the URL of the web page. The Button can add the `img` element automatically or, if you set a `k-icon` CSS class, use an existing element.

### sprite-css-class `String`

Defines one or more CSS classes which are separated by spaces and which apply a background image to a `span` element inside the Button ([`spriteCssClass` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/button/configuration/spritecssclass)). To use an icon from the Kendo UI theme sprite background image, set the `icon` property. The Button can add the `span` element automatically or, if you set a `k-icon` CSS class, use an existing element.

## Events

### click: `Function`

Fires when the user clicks or taps the Button, or presses `Enter` or `Space` while the Button is focused ([`click` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/button/events/click)).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/button#methods). 

### kendoWidget

##### returns

Returns the Kendo UI Button instance.
