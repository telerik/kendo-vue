---
title: Customization
page_title: Customization - DatePicker - Kendo UI for Vue
description: "Customize the Vue DatePicker with Kendo: override DateInput, Calendar, Popup, ToggleButton & more—total control over rendering and behavior."
slug: custom_rendering_datepicker
position: 10
---

# Customization

The DatePicker enables the user to render custom components instead of the default ones and, in this way, to customize most of the child DatePicker components which are otherwise inaccessible.

The user can replace the following DatePicker components with custom ones:

- [`DateInput`](#toc-customizing-the-dateinput)&mdash;Renders the input field in the DatePicker.
- [`Calendar`](#toc-customizing-the-calendar)&mdash;Renders the Calendar inside the popup week column of the DatePicker.
- [`Popup`](#toc-customizing-the-popup)&mdash;Renders the popup which contains the Calendar.
- [`ToggleButton`](#toc-customizing-the-toggle-button)&mdash;Render the button which toggles the `show` state of the DatePicker.
- [`PickerWrap`](#toc-customizing-the-picker-wrap)&mdash;Render the wrapping element around the `dateInput` and `toggleButton`.

## Customizing the DateInput

The DatePicker and the [DateInput]({% slug api_dateinputs_dateinputprops %}) components communicate through the [`DateInputChangeEvent`]({% slug api_dateinputs_dateinputchangeevent %}). For the DatePicker to work correctly with any form of date selection, provide a working `input` which calls the `change` property.

The following example demonstrates how to replace the default DateInput component with three native `<input />` elements. To enable the user only to change a property and not have full control over the rendered content, pass a modified DateInput.

{% meta height:450 %}
{% embed_file datepicker/custom/dateinput/main.vue preview %}
{% embed_file datepicker/custom/dateinput/main.js %}
{% embed_file datepicker/custom/dateinput/CustomDateInput.vue %}
{% endmeta %}

## Customizing the Calendar

Similar to the custom rendering of the DateInput, the DatePicker and the [Calendar]({% slug overview_calendar %}) communicate through the [`CalendarChangeEvent`]({% slug api_dateinputs_calendarchangeevent %}). You can replace the Calendar with any custom component that provides a date selection and calls [`change`]({% slug api_dateinputs_calendarprops %}#toc-onchange) with a `Date` value, a vue `event` and an event target.

The following example demonstrates how to replace the default Calendar with a Calendar from the `@progress/kendo-vue-dateinputs` package.

{% meta height:450 %}
{% embed_file datepicker/custom/calendar/main.vue preview %}
{% embed_file datepicker/custom/calendar/main.js %}
{% embed_file datepicker/custom/calendar/CustomCalendar.vue %}
{% endmeta %}

## Customizing the Popup

The [Popup]({% slug overview_popup %}) component inside the DatePicker serves as a container element with an absolute position. The DatePicker changes the [`show`]({% slug api_popup_popupprops %}#toc-show) property on clicking the **Toggle** button or on `blur`. You can control `show` through the DatePicker.

The following example demonstrates how to further customize the Popup&mdash;the complete overriding of the Popup is also possible.

{% meta height:450 %}
{% embed_file datepicker/custom/popup/main.vue %}
{% embed_file datepicker/custom/popup/main.js %}
{% embed_file datepicker/custom/popup/CustomPopup.vue %}
{% endmeta %}

## Customizing the Toggle Button

The [ToggleButton]({% slug api_dateinputs_datepickerprops %}#toc-togglebutton) component inside the DatePicker serves as an initial toggle `button` for opening the calendar, or closing it without `Date` selection.

The following example demonstrates how to further customize the ToggleButton by passing another `icon` as a child.&mdash;the complete overriding of the ToggleButton is also possible.

{% meta height:450 %}
{% embed_file datepicker/custom/toggle/main.vue %}
{% embed_file datepicker/custom/toggle/main.js %}
{% embed_file datepicker/custom/toggle/CustomToggleButton.vue %}
{% endmeta %}


## Suggested Links

* [Customize the Color Inside the DatePicker Popup]({% slug change-datepicker-popup-color %})
* [Customizing the Calendar]({% slug custom_rendering_calendar %})
* [API Reference of the DateInput]({% slug api_dateinputs_dateinputprops %})
* [API Reference of the Calendar]({% slug api_dateinputs_calendarprops %})
* [API Reference of the Popup]({% slug api_popup_popupprops %})
