---
title: FlatColorPicker API
description: "API Index | FlatColorPicker"
api_reference: true
slug: api_flatcolorpickercomponent_wrapper
---

# FlatColorPicker

## Directive

`kendo-flatcolorpicker`

## Props

### opacity `Boolean`

Specifies whether the FlatColorPicker will display the **Opacity** slider that allows the selection of transparency ([`opacity` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/flatcolorpicker/configuration/opacity).

### buttons `Boolean`

Specifies whether the FlatColorPicker will display the **Apply** and **Cancel** buttons ([`buttons` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/flatcolorpicker/configuration/buttons).

### value `String`

Specifies the initially selected color ([`value` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/flatcolorpicker/configuration/value).

### preview `Boolean`

Specifies whether the FlatColorPicker will display the **Preview** bar which shows the current color and the input field ([`preview` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/flatcolorpicker/configuration/preview).

### autoupdate `Boolean`

Specifies whether the UI will be updated while the user is typing in the input field whenever a valid color can be parsed ([`autoupdate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/flatcolorpicker/configuration/autoupdate). If you pass `false` to `autoupdate`, the FlatColorPicker will update only when the user presses the `Enter` key.

### messages `Object`

Allows the customization of the **Apply** and **Cancel** labels ([`messages` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/flatcolorpicker/configuration/messages). The supported composite props are available in [`MessagesProps`]({% slug api_flatcolorpicker_messagesprops_wrapper %}).

## Events

### change: `Function`

Fires when a new color was selected ([`change` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/flatcolorpicker/events/change)).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/flatcolorpicker#methods). 

### kendoWidget

##### returns

Returns the Kendo UI FlatColorPicker instance.
