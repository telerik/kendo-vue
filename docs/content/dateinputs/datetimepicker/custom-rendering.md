---
title: Customization
page_title: Customization - DateTimePicker - Kendo UI for Vue
description: "Customize Kendo Vue’s DateTimePicker: override internal parts for custom rendering of input, calendar, popup, toggle and wrapping components."
slug: custom_rendering_datetimepicker
position: 10
---

# Customization

The DateTimePicker enables the user to render custom components instead of the default ones and, in this way, to customize most of the child DateTimePicker components which are otherwise inaccessible.

The user can replace the following DateTimePicker components with custom ones:

- [`DateInput`](#toc-customizing-the-dateinput)&mdash;Renders the input field in the DateTimePicker.
- [`Calendar`](#toc-customizing-the-calendar)&mdash;Renders the Calendar inside the popup week column of the DateTimePicker.
- [`Popup`](#toc-customizing-the-popup)&mdash;Renders the popup which contains the Calendar.

## Customizing the DateInput

The DateTimePicker and the [DateInput]({% slug api_dateinputs_dateinputprops %}) components communicate through the [`DateInputChangeEvent`]({% slug api_dateinputs_dateinputchangeevent %}). In order for the DateTimePicker to work correctly with any form of date selection, provide a fully working `input` which calls the `change` property coming from the props.

The following example demonstrates how to replace the default DateInput component with three native `<input />` elements.

{% meta height:580 %}
{% embed_file datetimepicker/custom/dateinput/main.vue preview %}
{% embed_file datetimepicker/custom/dateinput/main.js %}
{% embed_file datetimepicker/custom/dateinput/customDateInput.vue %}
{% endmeta %}

## Customizing the Calendar

Similar to the custom rendering of the DateInput, the DateTimePicker and the [Calendar]({% slug overview_calendar %}) communicate through the [`CalendarChangeEvent`]({% slug api_dateinputs_calendarchangeevent %}). You can replace the Calendar with any custom component that provides a date selection and calls [`change`]({% slug api_dateinputs_calendarprops %}#toc-onchange) with a `Date` value, a vue `event` and an event target.

The following example demonstrates how to replace the default Calendar with a custom Calendar which renders the weekdays with different styles.

{% meta height:550 %}
{% embed_file datetimepicker/custom/calendar/main.vue preview %}
{% embed_file datetimepicker/custom/calendar/main.js %}
{% embed_file datetimepicker/custom/calendar/customCalendar.vue %}
{% endmeta %}

## Customizing the Popup

The [Popup]({% slug overview_popup %}) component inside the DateTimePicker acts as a container element with an absolute position. The DateTimePicker changes the [`show`]({% slug api_popup_popupprops %}#toc-show) property on clicking the **Toggle** button or on `blur`. You can control `show` through the DateTimePicker.

The following example demonstrates how to customize the alignment of the Popup.

{% meta height:580 %}
{% embed_file datetimepicker/custom/popup/main.vue %}
{% embed_file datetimepicker/custom/popup/main.js %}
{% embed_file datetimepicker/custom/popup/customPopup.vue %}
{% endmeta %}

## Suggested Links

* [API Reference of the DateInput]({% slug api_dateinputs_dateinputprops %})
* [API Reference of the Calendar]({% slug api_dateinputs_calendarprops %})
* [API Reference of the Popup]({% slug api_popup_popupprops %})
