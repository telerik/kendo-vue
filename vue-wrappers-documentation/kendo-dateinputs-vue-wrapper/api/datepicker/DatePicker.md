---
title: DatePicker API
description: "API Index | DatePicker"
api_reference: true
slug: api_datepickercomponent_wrapper
---

# DatePicker

## Directive

`kendo-datepicker`

## Props

### animation `Boolean | Object`

Configures the opening and closing animations of the calendar popup ([`animation` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datepicker/configuration/animation)). The supported composite props are available in [`AnimationProps`]({% slug api_datepicker_animationprops_wrapper %}).

Setting the `animation` option to `false` disables the opening and closing animations. As a result, the Calendar popup will open and close instantly.

### aria-template `String`

Specifies a template for populating the value of the `aria-label` attribute ([`ARIATemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datepicker/configuration/ariatemplate)).

### culture `String`

Specifies the culture information that is used by the DatePicker ([`culture` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datepicker/configuration/culture)).

### date-input `Boolean`

Specifies if the DatePicker will use a DateInput as an editor for its value ([`dateInput` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datepicker/configuration/dateinput)).

### dates `Array`

Specifies a list of dates which will be passed to the month template ([`dates` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datepicker/configuration/dates)).

### depth `String`

Specifies the navigation depth ([`depth` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datepicker/configuration/depth)).

The supported settings are:

* `month`&mdash;Shows the days of the month.
* `year`&mdash;Shows the months of the year.
* `decade`&mdash;Shows the years of the decade.
* `century`&mdash;Shows the decades from the century.

### disable-dates `Array | Function`

An array or a function for determining which dates in the Calendar will be disabled ([`disableDates` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datepicker/configuration/disabledates)).

### footer `String | Function`

The template which renders the footer of the Calendar ([`footer` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datepicker/configuration/footer)). If `footer` is set to `false`, the footer will not be rendered.

### format `String`

Specifies the format for formatting the value which is displayed by the DatePicker ([`format` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datepicker/configuration/format)).

### max `Date`

Specifies the maximum date which the Calendar will show ([`max` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datepicker/configuration/max)).

### min `Date`

Specifies the minimum date which the Calendar will show ([`min` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datepicker/configuration/min)).

### month `Object`

Defines the templates for the cells that are rendered in the `month` view ([`month` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datepicker/configuration/month))). The supported composite props are available in [`MonthProps`]({% slug api_datepicker_monthprops_wrapper %}).

### week-number `Boolean`

If `week-number` is set to `true`, a week of the year will be shown on the left side of the Calendar ([`weekNumber` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datepicker/configuration/weeknumber)).

### parse-formats `Array`

Specifies a list of date formats for parsing the value which is set with the `value()` method or by a direct user input ([`parseFormats` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datepicker/configuration/parseformats)). If `parse-formats` is not set, the DatePicker will use the `format` value. The `format` option is always used during parsing.

### start `String`

Specifies the start view ([`start` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datepicker/configuration/start)).

The supported settings are:

* `month`&mdash;Shows the days of the month.
* `year`&mdash;Shows the months of the year.
* `decade`&mdash;Shows the years of the decade.
* `century`&mdash;Shows the decades from the century.

### value `Date`

Specifies the selected date ([`value` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datepicker/configuration/value)).

## Events

### change: `Function`

Fires when the selected date is changed ([`change` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datepicker/events/change)).

### close: `Function`

Fires when the Calendar is closed ([`close` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datepicker/events/close)).

### open: `Function`

Fires when the Calendar is opened ([`open` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/datepicker/events/open)).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/datepicker#methods). 

### kendoWidget

##### returns

Returns the Kendo UI DatePicker instance.
