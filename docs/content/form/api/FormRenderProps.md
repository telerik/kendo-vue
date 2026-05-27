---
title: FormRenderProps
description: "Learn how to build custom functionality when working with the Vue Form by Kendo UI with the help of the FormRenderProps."
api_reference: true
type: inner_api
slug: api_form_formrenderprops
---

# FormRenderProps
Represents the props that are passed to the `render` option component of the Form.


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


#### errors


</td>
<td type class="table-cell-type">


<code>


[KeyValue]({% slug api_form_keyvalue %})&lt;string&gt;


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



