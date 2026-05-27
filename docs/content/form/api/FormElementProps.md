---
title: FormElementProps
description: "Learn how to build custom functionality when working with the Vue Form by Kendo UI with the help of the FormElementProps."
api_reference: true
type: inner_api
slug: api_form_formelementprops
---

# FormElementProps
Represents the props of the Kendo U for Vue FormElement component.


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


#### cols?


</td>
<td type class="table-cell-type">


<code>


number | [ResponsiveFormBreakPoint]({% slug api_form_responsiveformbreakpoint %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the number of columns in the form. Can be a number or an array of responsive breakpoints.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### gutters?


</td>
<td type class="table-cell-type">


<code>


string | number | [ResponsiveFormBreakPoint]({% slug api_form_responsiveformbreakpoint %})[] | [Gutters]({% slug api_form_gutters %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the gutters for the form layout. You can specify gutters for rows and columns.
Accepts a number (treated as px), a CSS string, a `Gutters` object with `cols`/`rows` keys,
or an array of responsive breakpoints.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### horizontal?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true` enable the horizontal layout of the form editors.


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


Configures the `size` of the Form.

The available options are:
- small
- medium
- large
- null&mdash;Does not set a size `class`.





</td>
</tr>
</tbody>
</table>



