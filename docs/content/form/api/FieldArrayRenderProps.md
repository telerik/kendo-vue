---
title: FieldArrayRenderProps
description: "Learn how to build custom functionality when working with the Vue Form by Kendo UI with the help of the FieldArrayRenderProps."
api_reference: true
type: inner_api
slug: api_form_fieldarrayrenderprops
---

# FieldArrayRenderProps
Represents the props that are passed to the component which is rendered by FieldArray.


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


Indicates if the field is modified.
The modified state is set to `true` when the `onChange` callback for the current field is called for first time.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### name


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The name of the field in the Form state.


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


Indicates if the field is touched.
The touched state is set to `true` when the `onBlur` callback is called.


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


A calculated property based on whether `validationMessage` is present and the `touched` state is set to `true`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### validationMessage


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the error message that is returned by the validator.
The FieldArray is considered valid if the `validationMessage` field is empty.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### value


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the current value of the FieldArray
([see example]({% slug custom_components_form %}#toc-using-basic-properties)).


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


Indicates if the field is visited.
The visited state is set to `true` when the `onFocus` callback is called.


</td>
</tr>
</tbody>
</table>



