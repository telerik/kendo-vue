---
title: FormFieldSetProps
description: "Learn how to build custom functionality when working with the Vue Form by Kendo UI with the help of the FormFieldSetProps."
api_reference: true
type: inner_api
slug: api_form_formfieldsetprops
---

# FormFieldSetProps
Represents the props of the Kendo UI for Vue FormFieldSet component.


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


Defines the number of columns of the fieldset.
Can be a number or an array of responsive breakpoints.

```vue
<FormFieldSet :cols="2" legend="Address" />
```



</td>
</tr>
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


Defines the colspan for the fieldset related to the parent `FormElement` columns.
Can be a number or an array of responsive breakpoints.

```vue
<FormFieldSet :col-span="2" legend="Address" />
```



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


Defines the gutters for the fieldset layout.
Accepts a number (px), a CSS string, a `Gutters` object with `cols`/`rows` keys,
or an array of responsive breakpoints.
Defaults to `{ rows: '0px', cols: '16px' }`.

```vue
<FormFieldSet :gutters="{ rows: '8px', cols: '24px' }" legend="Address" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### legend?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the legend text for the fieldset.

```vue
<FormFieldSet legend="Personal Information" />
```



</td>
</tr>
</tbody>
</table>



