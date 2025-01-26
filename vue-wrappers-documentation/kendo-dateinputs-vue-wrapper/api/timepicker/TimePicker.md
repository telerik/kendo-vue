---
title: TimePicker API
description: "API Index | TimePicker"
api_reference: true
slug: api_timepickercomponent_wrapper
---


# TimePicker

## Directive

`kendo-timepicker`

## Props

### animation `Boolean | Object`

Configures the opening and closing animations of the calendar popup ([`animation` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/timepicker/configuration/animation)). The supported composite props are available in [`AnimationProps`]({% slug api_timepicker_animationprops_wrapper %}).

Setting the `animation` option to `false` disables the opening and closing animations. As a result, the Calendar popup will open and close instantly.

### culture `String`

Specifies the culture information that is used by the TimePicker ([`culture` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/timepicker/configuration/culture)).

### date-input `Boolean`

Specifies if the TimePicker will use a DateInput as an editor for its value ([`dateInput` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/timepicker/configuration/dateinput)).

### dates `Array`

Specifies a list of dates which will be passed to the month template ([`dates` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/timepicker/configuration/dates)). If `dates` is not set, the TimePicker will automatically generate the available times.

### format `String`

Specifies the format for formatting the value which is displayed by the TimePicker ([`format` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/timepicker/configuration/format)). The TimePicker will also use the `format` option for parsing the input.

### interval `Number`

Specifies the interval (in minutes) between the values in the popup list ([`interval` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/timepicker/configuration/interval)).

### max `Date`

Specifies the maximum date which the Calendar will show ([`max` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/timepicker/configuration/max)).

### min `Date`

Specifies the minimum date which the Calendar will show ([`min` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/timepicker/configuration/min)).

### parse-formats `Array`

Specifies a list of date formats for parsing the value which is set with the `value()` method or by a direct user input ([`parseFormats` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/timepicker/configuration/parseformats)). If `parse-formats` is not set, the DateTimePicker will use `options.format`. The value of the `format` option is always used during parsing.

### value `Date`

Specifies the selected value ([`value` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/timepicker/configuration/value)).

## Events

### change: `Function`

Fires when the selected date is changed ([`change` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/timepicker/events/change)).

### close: `Function`

Fires when the time drop-down list is closed ([`close` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/timepicker/events/close)).

### open: `Function`

Fires when the time drop-down list is opened ([`open` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/timepicker/events/open)).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/timepicker#methods). 

### kendoWidget

##### returns

Returns the Kendo UI TimePicker instance.
