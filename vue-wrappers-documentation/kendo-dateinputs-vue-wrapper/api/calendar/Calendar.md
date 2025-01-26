---
title: Calendar API
description: "API Index | Calendar"
api_reference: true
slug: api_calendarcomponent_wrapper
---

# Calendar

## Directive

`kendo-calendar`

## Props

### culture `String`

Specifies the information about the culture that  the Calendar uses ([`culture` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/calendar/configuration/culture)).

### dates `Array`

Specifies a list of dates which will be passed to the month template ([`dates` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/calendar/configuration/dates)).

### depth `String`

Specifies the navigation depth ([`depth` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/calendar/configuration/depth)).

The supported settings are:

* `month`&mdash;Shows the days of the month.
* `year`&mdash;Shows the months of the year.
* `decade`&mdash;Shows the years of the decade.
* `century`&mdash;Shows the decades from the century.

### disable-dates `Array | Function`

An array or a function for determining which dates in the Calendar will be disabled ([`disableDates` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/calendar/configuration/disabledates)).

### footer `String | Function`

The template which renders the footer ([`footer` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/calendar/configuration/footer)). If `footer` is set to `false`, the footer will not be rendered.

### format `String`

Specifies the format for parsing the value which is set with the `value()` method ([`format` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/calendar/configuration/format)).

### max `Date`

Specifies the maximum date which the Calendar will show ([`max` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/calendar/configuration/max)).

### messages `Object`

Allows the localization of the strings that are used in the Calendar ([`messages` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/calendar/configuration/messages)). The supported composite props are available in [`MessagesProps`]({% slug api_calendar_messagesprops_wrapper %}).

### min `Date`

Specifies the minimum date which the Calendar will show ([`min` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/calendar/configuration/min)).

### month `Object`

Defines the templates for the cells that are rendered in the `month` view ([`month` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/calendar/configuration/month)). The supported composite props are available in [`MonthProps`]({% slug api_calendar_monthprops_wrapper %}).

### selectable `String`

By default, the user can select a single date ([`selectable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/calendar/configuration/selectable)). To enable multiple selection, set the `selectable` property to `multiple`. For more information on multiple selection, refer to the overview article about selection.

### select-dates `Array`

Specifies which dates will be selected when the Calendar is initialized ([`selectDates` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/calendar/configuration/selectdates)).

### week-number `Boolean`

If `week-number` is set to `true`, a week of the year will be shown on the left side of the Calendar ([`weekNumber` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/calendar/configuration/weeknumber)).

### start `String`

Specifies the start view ([`start` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/calendar/configuration/start)).

The supported settings are:

* `month`&mdash;Shows the days of the month.
* `year`&mdash;Shows the months of the year.
* `decade`&mdash;Shows the years of the decade.
* `century`&mdash;Shows the decades from the century.

### value `Date`

Specifies the selected date ([`value` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/calendar/configuration/value)).

## Events

### change: `Function`

Fires when the selected date is changed ([`change` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/calendar/events/change)).

### navigate: `Function`

Fires when the Calendar navigation is used ([`navigate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/calendar/events/navigate)).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/calendar#methods). 

### kendoWidget

##### returns

Returns the Kendo UI Calendar instance.
