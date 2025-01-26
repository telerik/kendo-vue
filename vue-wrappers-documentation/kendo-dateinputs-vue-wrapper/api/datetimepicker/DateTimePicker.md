---
title: DateTimePicker API
description: "API Index | DateTimePicker"
api_reference: true
slug: api_datetimepickercomponent_wrapper
---


# DateTimePicker

## Directive

`kendo-datetimepicker`

## Props

### animation `Boolean | Object`

Configures the opening and closing animations of the calendar popup ([`animation` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datetimepicker/configuration/animation)). The supported composite props are available in [`AnimationProps`]({% slug api_datetimepicker_animationprops_wrapper %}).

Setting the `animation` option to `false` disables the opening and closing animations. As a result, the Calendar popup will open and close instantly.

### aria-template `String`

Specifies a template for populating the value of the `aria-label` attribute ([`ARIATemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datetimepicker/configuration/ariatemplate)).

### culture `String`

Specifies the culture information that is used by the DateTimePicker ([`culture` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datetimepicker/configuration/culture)).

### date-input `Boolean`

Specifies if the DateTimePicker will use a DateInput as an editor for its value ([`dateInput` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datetimepicker/configuration/dateinput)).

### dates `Array`

Specifies a list of dates which will be passed to the month template ([`dates` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datetimepicker/configuration/dates)).

### depth `String`

Specifies the navigation depth ([`depth` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datetimepicker/configuration/depth)).

The supported settings are:

* `month`&mdash;Shows the days of the month.
* `year`&mdash;Shows the months of the year.
* `decade`&mdash;Shows the years of the decade.
* `century`&mdash;Shows the decades from the century.

### disable-dates `Array | Function`

An array or a function for determining which dates in the Calendar will be disabled ([`disableDates` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datetimepicker/configuration/disabledates)).

### footer `String`

The template which renders the footer of the Calendar ([`footer` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datetimepicker/configuration/footer)). If `footer` is set to `false`, the footer will not be rendered.

### format `String`

Specifies the format for formatting the value which is displayed by the DateTimePicker ([`format` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datetimepicker/configuration/format)).

### interval `Number`

Specifies the interval (in minutes) between the values in the popup list ([`interval` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datetimepicker/configuration/interval)).

### max `Date`

Specifies the maximum date which the Calendar will show ([`max` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datetimepicker/configuration/max)).

### min `Date`

Specifies the minimum date which the Calendar will show ([`min` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datetimepicker/configuration/min)).

### month `Object`

Defines the templates for the cells that are rendered in the `month` view ([`month` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datetimepicker/configuration/month))). The supported composite props are available in [`MonthProps`]({% slug api_datetimepicker_monthprops_wrapper %}).

### week-number `Boolean`

If `week-number` is set to `true`, a week of the year will be shown on the left side of the Calendar ([`weekNumber` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datetimepicker/configuration/weeknumber)). To customize what the DateTimePicker displays, define a template.

### parse-formats `Array`

Specifies a list of date formats for parsing the value which is set with the `value()` method or by a direct user input ([`parseFormats` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datetimepicker/configuration/parseformats)). If `parse-formats` is not set, the DateTimePicker will use `options.format` and `options.timeFormat`. The values of the `format` and the `timeFormat` (if set) options are always used during parsing. 

### start `String`

Specifies the start view ([`start` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datetimepicker/configuration/start)).

The supported settings are:

* `month`&mdash;Shows the days of the month.
* `year`&mdash;Shows the months of the year.
* `decade`&mdash;Shows the years of the decade.
* `century`&mdash;Shows the decades from the century.

### time-format `String`

Specifies the format which the DateTimePicker uses to format the values in the time drop-down list ([`timeFormat` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datetimepicker/configuration/timeformat)).

### value `Date`

Specifies the selected value ([`value` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datetimepicker/configuration/value)).

## Events

### change: `Function`

Fires when the underlying value of the DateTimePicker is changed ([`change` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datetimepicker/events/change)).

### close: `Function`

Fires when the Calendar or the time drop-down list is closed ([`close` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datetimepicker/events/close)).

### open: `Function`

Fires when the Calendar or the time drop-down list is opened ([`open` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datetimepicker/events/open)).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/datetimepicker#methods). 

### kendoWidget

##### returns

Returns the Kendo UI DateTimePicker instance.
