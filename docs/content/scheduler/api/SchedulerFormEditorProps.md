---
title: SchedulerFormEditorProps
description: "Learn how to build custom functionality when working with the Vue Scheduler by Kendo UI with the help of the SchedulerFormEditorProps."
api_reference: true
type: inner_api
slug: api_scheduler_schedulerformeditorprops
---

# SchedulerFormEditorProps
Represents the props of the Kendo UI for Vue `SchedulerFormEditor` component.


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


#### allDayEditor?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `allDay` field editor.
The [Kendo UI for Vue Checkbox]({% slug overview_checkbox %}) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`]({% slug editing_scheduler_custom %}) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### allDayLabel?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `allDay` field label.
The [Kendo UI for Vue Label]({% slug label_labels %}) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`]({% slug editing_scheduler_custom %}) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### allowSubmit


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the Form is ready to be submitted.
* If `allowSubmit` is set to `true` and the Form is valid, the user will be able to submit the form.
* If `allowSubmit` is set to `true` and the Form is not valid, the user will be able to set all fields
`touched` and `visited` state to true.

Useful for toggling the disabled state of the **Submit** button.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### descriptionEditor?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `description` field editor.
The [Kendo UI for Vue TextArea]({% slug overview_textarea %}) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`]({% slug editing_scheduler_custom %}) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### descriptionError?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `description` field error.
The [Kendo UI for Vue Error]({% slug error_labels %}) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`]({% slug editing_scheduler_custom %}) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### descriptionLabel?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `description` field label.
The [Kendo UI for Vue Label]({% slug label_labels %}) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`]({% slug editing_scheduler_custom %}) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### endEditor?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `end` field editor.
The [Kendo UI for Vue DatePicker]({% slug overview_datepicker %}) or [Kendo UI for Vue DateTimePicker]({% slug overview_datetimepicker %}) component is used by default depending on the `allDay` field value.

For more information, please refer to the [`Scheduler Form Editor Customization`]({% slug editing_scheduler_custom %}) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### endError?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `end` field error.
The [Kendo UI for Vue Error]({% slug error_labels %}) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`]({% slug editing_scheduler_custom %}) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### endLabel?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `end` field label.
The [Kendo UI for Vue Label]({% slug label_labels %}) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`]({% slug editing_scheduler_custom %}) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### endTimezoneCheckedEditor?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `end timezone checked` editor.
The [Kendo UI for Vue Checkbox]({% slug overview_checkbox %}) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`]({% slug editing_scheduler_custom %}) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### endTimezoneCheckedLabel?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `start timezone checked` label.
The [Kendo UI for Vue Label]({% slug label_labels %}) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`]({% slug editing_scheduler_custom %}) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### endTimezoneEditor?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `end timezone` field editor.
An extended [Kendo UI for Vue ComboBox]({% slug overview_combobox %}) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`]({% slug editing_scheduler_custom %}) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### endTimezoneError?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `end timezone` field error.
The [Kendo UI for Vue Error]({% slug error_labels %}) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`]({% slug editing_scheduler_custom %}) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### endTimezoneLabel?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `end timezone` field label.
The [Kendo UI for Vue Label]({% slug label_labels %}) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`]({% slug editing_scheduler_custom %}) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### errors


</td>
<td type class="table-cell-type">


<code>


KeyValue&lt;string&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The key-value pair containing the current errors by field path,
 combined from both field and form level validators.


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


Specifies the `id` attribute of the root element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### modified


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the Form is modified.
If any field is modified, `modified` is set to `true`.
The modified state of field is set to `true` when the `onChange`
callback of the Field component is called for first time.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(name: string, options: { value: any; }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A callback for emiting changes to a specific field without using the Field component
([see example]({% slug common_scenarios_form %}#toc-changing-the-field-value)).

> Use `onChange` only if you cannot achieve the desired behavior through the Field component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFormreset?


</td>
<td type class="table-cell-type">


<code>


() => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A callback for resetting the Form.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSubmit?


</td>
<td type class="table-cell-type">


<code>


(event: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A callback for submitting the Form.
Can be passed to the `onClick` property of the **Submit** button.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### recurrenceEditor?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `recurrenceRule` field editor.
A custom made RecurrenceEditor component is used, by default.

> We're planing on releasing the `RecurrenceEditor` as a standalone component in the future.

For more information, please refer to the [`Scheduler Form Editor Customization`]({% slug editing_scheduler_custom %}) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### resourceEditor?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing each `resource` field editor.
An extended Kendo UI for Vue [MultiSelect]({% slug overview_multiselect %}) or [DropDownList]({% slug overview_dropdownlist %}) component is used by default, depending on the `multiple` field of each individual `resource`.

For more information, please refer to the [`Scheduler Form Editor Customization`]({% slug editing_scheduler_custom %}) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### resourceLabel?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `start timezone checked` field label.
The [Kendo UI for Vue Label]({% slug label_labels %}) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`]({% slug editing_scheduler_custom %}) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### resourcesError?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing each `resources` field error.
The [Kendo UI for Vue Error]({% slug error_labels %}) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`]({% slug editing_scheduler_custom %}) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### startEditor?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `start` field editor.
The [Kendo UI for Vue DatePicker]({% slug overview_datepicker %}) or [Kendo UI for Vue DateTimePicker]({% slug overview_datetimepicker %}) component is used by default depending on the `allDay` field value.

For more information, please refer to the [`Scheduler Form Editor Customization`]({% slug editing_scheduler_custom %}) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### startError?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `start` field error.
The [Kendo UI for Vue Error]({% slug error_labels %}) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`]({% slug editing_scheduler_custom %}) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### startLabel?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `start` field label.
The [Kendo UI for Vue Label]({% slug label_labels %}) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`]({% slug editing_scheduler_custom %}) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### startTimezoneCheckedEditor?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `start timezone checked` editor.
The [Kendo UI for Vue Checkbox]({% slug overview_checkbox %}) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`]({% slug editing_scheduler_custom %}) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### startTimezoneCheckedLabel?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `start timezone checked` label.
The [Kendo UI for Vue Label]({% slug label_labels %}) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`]({% slug editing_scheduler_custom %}) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### startTimezoneEditor?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `start timezone` field editor.
An extended [Kendo UI for Vue ComboBox]({% slug overview_combobox %}) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`]({% slug editing_scheduler_custom %}) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### startTimezoneError?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `start timezone` field error.
The [Kendo UI for Vue Error]({% slug error_labels %}) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`]({% slug editing_scheduler_custom %}) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### startTimezoneLabel?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `start timezone` field label.
The [Kendo UI for Vue Label]({% slug label_labels %}) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`]({% slug editing_scheduler_custom %}) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### submitted


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the Form is successfuly submitted.
Useful for detecting if user is leaving the form before saving changes.


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


Specifies the `tabIndex` attribute of the root element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### titleEditor?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `title` field editor.
The [Kendo UI for Vue Input]({% slug overview_textbox %}) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`]({% slug editing_scheduler_custom %}) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### titleError?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `title` field error.
The [Kendo UI for Vue Error]({% slug error_labels %}) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`]({% slug editing_scheduler_custom %}) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### titleLabel?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `title` field label.
The [Kendo UI for Vue Label]({% slug label_labels %}) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`]({% slug editing_scheduler_custom %}) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### touched


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the Form is touched.
If any field is touched, `touched` is set to `true`.
The touched state of field is set to `true` when the `onBlur`
callback of the Field component is called or when the user tries to submit the form.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### valid


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the Form is valid.
If any field is invalid, `valid` is set to `false`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### valueGetter


</td>
<td type class="table-cell-type">


<code>


(name: string) => any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A callback for getting the value of a field without using the Field component
([see example]({% slug common_scenarios_form %}#toc-reading-the-field-state)).
Useful for creating and modifying the UI based on the field values.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### visited


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the Form is visited.
If any field is visited, `visited` is set to `true`.
The visited state of field is set to `true` when the `onFocus`
callback of the Field component is called or when the user tries to submit the form.


</td>
</tr>
</tbody>
</table>



