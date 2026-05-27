---
title: FieldProps
description: "Learn how to build custom functionality when working with the Vue Form by Kendo UI with the help of the FieldProps."
api_reference: true
type: inner_api
slug: api_form_fieldprops
---

# FieldProps
Represents the props of the Field component that is used inside the Kendo U for Vue Form component.


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


#### colSpan?


</td>
<td type class="table-cell-type">


<code>


number | [ResponsiveFormBreakPoint]({% slug api_form_responsiveformbreakpoint %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets how many columns the field spans in the form layout.
Requires the parent `FormElement` to have the `cols` prop set.
Accepts a number or an array of responsive breakpoints.

```vue
<Field name="fullName" :component="Input" :col-span="2" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### component


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Can be set to a Vue component or to the name of an HTML element,
for example, `input`, `select`, and `textarea`.
The props that are passed to component are the
[`FieldRenderProps`]({% slug api_form_fieldrenderprops %}).


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


The id of the field.


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
Supports nested fields in the `user.age` and `users[index].name` formats.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called when underlying editor triggers it's onChange event and the Form update it's internal state.
Useful for updating related fields.
> Keep in mind that Form listens to this editor event and automatically keeps it's internal state up to date.
That why this event should be used only for executing custom logic.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### validator?


</td>
<td type class="table-cell-type">


<code>


[FieldValidatorType]({% slug api_form_fieldvalidatortype %}) | [FieldValidatorType]({% slug api_form_fieldvalidatortype %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The validation functions for the Field level.
Currently, `validator` supports only synchronous functions.
Using the array overload with inline array will cause infinite
 loop - in this case use `useMemo` hook to memoize the array.


</td>
</tr>
</tbody>
</table>



