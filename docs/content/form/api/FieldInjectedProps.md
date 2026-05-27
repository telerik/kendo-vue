---
title: FieldInjectedProps
description: "Learn how to build custom functionality when working with the Vue Form by Kendo UI with the help of the FieldInjectedProps."
api_reference: true
type: inner_api
slug: api_form_fieldinjectedprops
---

# FieldInjectedProps
Represents the props that are passed from the Form component to the components nested inside it.
 To use the [KendoFrom Injected Property]({% slug api_form_fieldinjectedprops %}) it should be
 [injected](https://v3.vuejs.org/guide/component-provide-inject.html) it in the component that defines the Form content using the below code.

```js-no-run
  ...........
  inject: {
      kendoForm: { default: {} },
  }
  ...........
```


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


#### allowSubmit?


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
If `allowSubmit` is set to `true` and the Form is valid, the user will be able to submit the form.
If `allowSubmit` is set to `true` and the Form is not valid, the user will be able to set all fields
`touched` and `visited` state to true.
Useful for toggling the disabled state of the **Submit** button.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### errors?


</td>
<td type class="table-cell-type">


<code>


object


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The key-value pair containing the current errors by field path, combined from both field and form level validators.


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


Indicates if the Form is modified. If any field is modified, `modified` is set to `true`.
 The modified state of field is set to `true` when the `onChange`
 callback of the Field component is called for first time.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### modifiedByField


</td>
<td type class="table-cell-type">


<code>


object


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An object that holds the `modified` fields.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onBlur


</td>
<td type class="table-cell-type">


<code>


() => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A callback you have to call when the rendered component is blurred.
Responsible for setting the touched state of the Field.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange


</td>
<td type class="table-cell-type">


<code>


(fieldName: string, event: { target?: any; value?: any; }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A callback you have to call when the value of the rendered component is changed
([see example]({% slug common_scenarios_form %}#toc-changing-the-field-value)).
The `value` property of the event takes precedence over `target.value`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFocus


</td>
<td type class="table-cell-type">


<code>


() => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A callback you have to call when the rendered component is focused.
Responsible for setting the visited state of the Field.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFormReset


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


#### onInsert


</td>
<td type class="table-cell-type">


<code>


(options: { index: number; value: any; }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A callback to insert value at given index of the array.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMove


</td>
<td type class="table-cell-type">


<code>


(options: { nextIndex: number; prevIndex: number; }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A callback to move a value from one index to another. Useful for drag and drop reordering.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onPop


</td>
<td type class="table-cell-type">


<code>


() => any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A callback to remove a value from the end of the array. The value is returned.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onPush


</td>
<td type class="table-cell-type">


<code>


(options: { value: any; }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A callback to add a value to the end of the array.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRemove


</td>
<td type class="table-cell-type">


<code>


(options: { index: number; }) => any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A callback to remove a value from given index of the array.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onReplace


</td>
<td type class="table-cell-type">


<code>


(options: { index: number; value: any; }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A callback to replace value at given index of the array.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSubmit


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


#### onUnshift


</td>
<td type class="table-cell-type">


<code>


(options: { value: any; }) => number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A callback to add a value to the beginning of the array.


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


Indicates if the Form is successfully submitted.
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


#### touchedByField


</td>
<td type class="table-cell-type">


<code>


object


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An object that holds the `touched` fields.


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


#### validate


</td>
<td type class="table-cell-type">


<code>


(options?: {[key: string]: any}) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


When called without parameters it validates all the fields in the Form.
If called with object parameter with keys names - the names of the fields, only these fields are validated.


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
<tr>
<td class="table-cell-name">


#### visitedByField


</td>
<td type class="table-cell-type">


<code>


object


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An object that holds the `visited` fields.


</td>
</tr>
</tbody>
</table>



