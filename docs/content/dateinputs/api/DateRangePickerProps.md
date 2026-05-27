---
title: DateRangePickerProps
description: "Learn how to build custom functionality when working with the Vue Dateinputs by Kendo UI with the help of the DateRangePickerProps."
api_reference: true
type: inner_api
slug: api_dateinputs_daterangepickerprops
---

# DateRangePickerProps
Represents the props of the [Kendo UI for Vue DateRangePicker component]({% slug overview_daterangepicker %}).


<table class="api-table api-table-properties">
<thead>
<tr>
<th class="th-name">Name</th>
<th class="th-type">Type</th>
<th class="th-default">Default</th>
<th class="th-desc">Description</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td class="table-cell-name">


#### allowReverse?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If `allowReverse` is set to `true`, the component skips the validation of whether the `from` value is after the `to` value ([see example]({% slug reverse_daterangepicker %})).

> If the [`calendarSettings`](#toc-calendarsettings) property is set, its `allowReverse` will take precedence.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### ariaDescribedBy?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Identifies the element(s) which will describe the component, similar to [HTML aria-describedby attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute).
For example these elements could contain error or hint message.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### ariaLabelledBy?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Identifies the element(s) which will label the component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### calendar?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the customization or the override of the default Calendar which is rendered by the DateRangePicker.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### calendarSettings?


</td>
<td type class="table-cell-type">


<code>


[DateRangePickerCalendarSettings]({% slug api_dateinputs_daterangepickercalendarsettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the additional props that can be passed to the [MultiViewCalendar]({% slug multipleviews_calendar %}) inside the DateRangePicker ([see example]({% slug child_settings_daterangepicker %}#toc-configuring-the-calendar)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultShow?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the default state of the DateRangePicker upon render ([see example]({% slug default_value_daterangepicker %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultValue?


</td>
<td type class="table-cell-type">


<code>


[SelectionRange]({% slug api_dateinputs_selectionrange %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the default value of the DateRangePicker ([see example]({% slug default_value_daterangepicker %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### disabled?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines whether the DateRangePicker is disabled ([see example]({% slug disabled_daterangepicker %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### endDateInput?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the customization or the override of the default end DateInput which is rendered by the DateRangePicker
([see example]({% slug custom_rendering_daterangepicker %}#toc-customizing-the-calendar)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### endDateInputSettings?


</td>
<td type class="table-cell-type">


<code>


[DateRangePickerDateInputSettings]({% slug api_dateinputs_daterangepickerdateinputsettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the additional props that can be passed to the end-date [DateInput]({% slug overview_dateinput %}) inside the DateRangePicker ([see example]({% slug child_settings_daterangepicker %}#toc-configuring-dateinputs)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### fillMode?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


`solid`


</code>


</td>
<td class="table-cell-comment">


Configures the `fillMode` of the DateRangePicker.

The available options are:
- solid
- outline
- flat
- link
- null&mdash;Does not set a fillMode `class`.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### focusedDate?


</td>
<td type class="table-cell-type">


<code>


Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the focused date of the DateRangePicker ([see example]({% slug focused_daterangepicker %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### format?


</td>
<td type class="table-cell-type">


<code>


string | DateFormatOptions


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the `date` format which is used for formatting the value of the DateInput ([see example]({% slug formats_dateinput %})).

> If [`startDateInputSettings`](#toc-startdateinputsettings) or [`endDateInputSettings`](#toc-enddateinputsettings) are set, their `format` will take precedence.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### id?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the `id` of the DateRangePicker.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### inputAttributes?


</td>
<td type class="table-cell-type">


<code>


Object


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the built-in HTML attributes of the inner focusable input element.
Attributes which are essential for certain component functionalities cannot be changed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### max?


</td>
<td type class="table-cell-type">


<code>


Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the greatest valid date ([see example]({% slug dateranges_daterangepicker %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### min?


</td>
<td type class="table-cell-type">


<code>


Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the smallest valid date ([see example]({% slug dateranges_daterangepicker %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onBlur?


</td>
<td type class="table-cell-type">


<code>


(event: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time any of the DateRangePicker elements gets blurred.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: [DateRangePickerChangeEvent]({% slug api_dateinputs_daterangepickerchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the user selects a part of a date range ([see example]({% slug controlled_daterangepicker %}#toc-controlling-the-value)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFocus?


</td>
<td type class="table-cell-type">


<code>


(event: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the user focuses any of the DateRangePicker elements.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### popup?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the customization or the override of the default Popup which is rendered by the DateRangePicker
([see example]({% slug custom_rendering_daterangepicker %}#toc-customizing-the-popup)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### popupSettings?


</td>
<td type class="table-cell-type">


<code>


[DateRangePickerPopupSettings]({% slug api_dateinputs_daterangepickerpopupsettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the additional props that will be passed to the [Popup]({% slug overview_popup %}) inside the DateRangePicker ([see example]({% slug child_settings_daterangepicker %}#toc-configuring-the-popup)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rounded?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


`medium`


</code>


</td>
<td class="table-cell-comment">


Configures the `roundness` of the DateRangePicker.

The available options are:
- small
- medium
- large
- circle
- full
- null&mdash;Does not set a rounded `class`.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### show?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the calendar will be displayed ([see example]({% slug controlled_daterangepicker %}#toc-controlling-the-popup-state)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### size?


</td>
<td type class="table-cell-type">


<code>


"small" | "medium" | "large"


</code>


</td>
<td class="table-cell-default">


<code>


`medium`


</code>


</td>
<td class="table-cell-comment">


Configures the `size` of the DateRangePicker.

The available options are:
- small
- medium
- large
- null&mdash;Does not set a size `class`.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### startDateInput?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the customization or the override of the default start DateInput which is rendered by the DateRangePicker
([see example]({% slug custom_rendering_daterangepicker %}#toc-customizing-the-date-inputs)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### startDateInputSettings?


</td>
<td type class="table-cell-type">


<code>


[DateRangePickerDateInputSettings]({% slug api_dateinputs_daterangepickerdateinputsettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the additional props that will be passed to the start-date [DateInput]({% slug overview_dateinput %}) inside the DateRangePicker ([see example]({% slug child_settings_daterangepicker %}#toc-configuring-dateinputs)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### swapButton?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines whether the DateRangePicker will display a **Swap Value** button ([see example]({% slug reverse_daterangepicker %}#toc-swapping-start-and-end-dates-in-ranges)).

> The DateRangePicker will display the swap button only if the [`allowReverse`](#toc-allowreverse) property is also set to `true`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### tabIndex?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `tabIndex` property of the DatePicker.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### valid?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the validity state of the component.
If `valid` is set, the `required` property will be ignored.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### value?


</td>
<td type class="table-cell-type">


<code>


[SelectionRange]({% slug api_dateinputs_selectionrange %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the selected date range of the DateRangePicker ([see example]({% slug controlled_daterangepicker %}#toc-controlling-the-value)).

> The `value` has to be an object with `start` and `end` valid JavaScript [`Date`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date) instances or `null`.


</td>
</tr>
</tbody>
</table>



