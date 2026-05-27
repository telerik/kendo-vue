---
title: FieldArrayProps
description: "Learn how to build custom functionality when working with the Vue Form by Kendo UI with the help of the FieldArrayProps."
api_reference: true
type: inner_api
slug: api_form_fieldarrayprops
---

# FieldArrayProps
Represents the props of the FieldArray component that is used inside the Kendo U for Vue Form component.


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


Can be set to a Vue component.
[`FieldArrayRenderProps`]({% slug api_form_fieldarrayprops %}).


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


The validation functions for the FieldArray level.
Currently, `validator` supports only synchronous functions.


</td>
</tr>
</tbody>
</table>



