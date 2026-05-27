---
title: GridCustomFilterCellProps
description: "Learn how to build custom functionality when working with the Vue Grid by Kendo UI with the help of the GridCustomFilterCellProps."
api_reference: true
type: inner_api
slug: api_grid_gridcustomfiltercellprops
---

# GridCustomFilterCellProps
The properties of the filter Grid Cell.


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


The ariaLabel of the filter editor.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### booleanValues


</td>
<td type class="table-cell-type">


<code>


[GridFilterOperator]({% slug api_grid_gridfilteroperator %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The list of values for the Boolean filter.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### colSpan?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The column span of the cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### field?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The column field in which the cell is located.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### filterType


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The type of the filter. Determines which editor will be rendered for filtering.
The supported values are the following 0 'text' | 'numeric' | 'boolean' | 'date;


</td>
</tr>
<tr>
<td class="table-cell-name">


#### grid?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The instance of the Grid component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### index?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The index of the column.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: { event: any; operator: string | Function; value: any; }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The method that will be called if the cell needs to inform its parent Grid about a change.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### operator


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The operator that will be used for the cell filtering.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### operators


</td>
<td type class="table-cell-type">


<code>


[GridFilterOperators]({% slug api_grid_gridfilteroperators %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The list of the default operators for the current filter type.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### render?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The method for rendering the filter cell.


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


`undefined`


</code>


</td>
<td class="table-cell-comment">


Configures the `size` of the cell.

The available options are:
- small
- medium
- large





</td>
</tr>
<tr>
<td class="table-cell-name">


#### tdProps?


</td>
<td type class="table-cell-type">


<code>


GridTdAttributes


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props and attributes that are applied to the td element by default.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### thProps?


</td>
<td type class="table-cell-type">


<code>


GridThAttributes


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props and attributes that are applied to the th element by default.


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


The title of the filter editor.


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


The value of the cell.


</td>
</tr>
</tbody>
</table>



