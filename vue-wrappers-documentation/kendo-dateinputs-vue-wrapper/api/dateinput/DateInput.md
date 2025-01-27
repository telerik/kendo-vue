---
title: DateInput API
description: "API Index | DateInput"
api_reference: true
slug: api_dateinputcomponent_wrapper
---

# DateInput

## Directive

`kendo-dateinput`

## Props

### format `String`

Specifies the format, which is used to format the value of the DateInput displayed in the input ([`enable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/button/configuration/enable)). The format also will be used to parse the input.

[Kendo API for format option](https://docs.telerik.com/kendo-ui/api/javascript/ui/dateinput/configuration/format)

### max `Date`

Specifies the maximum date which the user can enter in the input field ([`max` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dateinput/configuration/max)).

### min `Date`

Specifies the minimum date which the user can enter in the input field ([`min` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dateinput/configuration/min)).

### value `Date`

Specifies the selected date ([`value` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dateinput/configuration/value)).

### messages `Object`

The messages of the DateInput. Used for customizing or localizing the placeholders of each date or time part ([`messages` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dateinput/configuration/messages)). The supported composite props are available in [`MessagesProps`]({% slug api_dateinput_messagesprops_wrapper %}).

## Events

### change: `Function`

Fires when the selected date is changed ([`change` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dateinput/events/change)).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/dateinput#methods). 

### kendoWidget

##### returns

Returns the Kendo UI DateInput instance.
