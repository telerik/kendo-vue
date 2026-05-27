---
title: DatePickerProps
description: "Learn how to build custom functionality when working with the Vue Dateinputs by Kendo UI with the help of the DatePickerProps."
api_reference: true
type: inner_api
slug: api_dateinputs_datepickerprops
---

# DatePickerProps
Represents the props of the [Kendo UI for Vue DatePicker component]({% slug overview_datepicker %}).


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


#### ariaLabel?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the validate of the DatePicker.


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


Enables the customization or the override of the default Calendar which is rendered by the DatePicker
([see example]({% slug custom_rendering_datepicker %}#toc-customizing-the-calendar)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dateInput?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the customization or the override of the default DateInput which is rendered by the DatePicker
([see example]({% slug custom_rendering_datepicker %}#toc-customizing-the-dateinput)).


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


Sets the default state of the DatePicker upon render ([see example]({% slug default_value_datepicker %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultValue?


</td>
<td type class="table-cell-type">


<code>


Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the default value of the DatePicker ([see example]({% slug default_value_datepicker %})).


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


Determines whether the DatePicker is disabled ([see example]({% slug disabled_datepicker %})).


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


Configures the `fillMode` of the TimeInput.

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


Specifies the focused date of the DatePicker ([see example]({% slug dates_datepicker %})).


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


Specifies the date format that is used to display the input value ([see example]({% slug formats_datepicker %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### formatPlaceholder?


</td>
<td type class="table-cell-type">


<code>


[DateInputFormatPlaceholder]({% slug api_dateinputs_dateinputformatplaceholder %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the descriptions of the format sections in the input field ([more information and examples]({% slug placeholders_datepicker %})).


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


Specifies the `id` of the DatePicker.


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


#### label?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Renders a floating label for the DatePicker.


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


Specifies the greatest valid date ([see example]({% slug dateranges_datepicker %})).


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


Specifies the smallest valid date ([see example]({% slug dateranges_datepicker %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### name?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the `name` property of the `input` DOM element.


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


Fires each time any of the DatePicker elements gets blurred.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: [DatePickerChangeEvent]({% slug api_dateinputs_datepickerchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the user selects a new value ([see example]({% slug controlled_datepicker %}#toc-controlling-the-date-value)).


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


Fires each time the user focuses any of the DatePicker elements.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onIconclick?


</td>
<td type class="table-cell-type">


<code>


(event: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the icon element is clicked.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### pickerWrap?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the customization or the override of the default wrapping component around the `DateInput` and `ToggleButton` rendered by the DatePicker
([see example]({% slug custom_rendering_datepicker %}#toc-customizing-the-toggle-button)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### placeholder?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the value of the placeholder.


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


Enables the customization or the override of the default Popup which is rendered by the DatePicker
([see example]({% slug custom_rendering_datepicker %}#toc-customizing-the-popup)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### popupSettings?


</td>
<td type class="table-cell-type">


<code>


[DateInputsPopupSettings]({% slug api_dateinputs_dateinputspopupsettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the popup options of the DatePicker.

The available options are:
- `animate: Boolean`&mdash;Controls the popup animation. By default, the open and close animations are enabled.
- `appendTo`: &mdash; Defines the container to which the Popup will be appended. Defaults to [`body`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body).
- `popupClass: String`&mdash;Specifies a list of CSS classes that are used to style the popup.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### required?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if `null` is a valid value for the component.


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


Configures the `roundness` of the TimeInput.

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


Specifies if the calendar will be displayed ([see example]({% slug controlled_datepicker %}#toc-controlling-the-popup-state)).


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


Configures the `size` of the TimeInput.

The available options are:
- small
- medium
- large
- null&mdash;Does not set a size `class`.





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


#### title?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the title of the `input` element of the DatePicker.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### toggleButton?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the customization or the override of the default Toggle button which is rendered by the DatePicker
([see example]({% slug custom_rendering_datepicker %}#toc-customizing-the-toggle-button)).


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


#### validate?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the validate of the DatePicker.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### validationMessage?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Controls the form error message of the component. If set to an empty string, no error will be thrown.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### validityStyles?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `false`, no visual representation of the invalid state of the component will be applied.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### value?


</td>
<td type class="table-cell-type">


<code>


Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the value of the DatePicker ([see example]({% slug controlled_datepicker %}#toc-controlling-the-date-value)).

> The `value` has to be a valid [JavaScript `Date`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date) instance.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### weekNumber?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines whether to display a week number column in the `month` view of the Calendar ([see example]({% slug weeknumcolumn_datepicker %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### width?


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the width of the DatePicker.


</td>
</tr>
</tbody>
</table>



