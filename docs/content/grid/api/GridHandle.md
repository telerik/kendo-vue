---
title: GridHandle
description: "Learn how to build custom functionality when working with the Vue Grid by Kendo UI with the help of the GridHandle."
api_reference: true
type: inner_api
slug: api_grid_gridhandle
---

# GridHandle
Represent the `ref` of the Grid component.


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


#### columns


</td>
<td type class="table-cell-type">


<code>


[GridColumnProps]({% slug api_grid_gridcolumnprops %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A getter of the current columns. Gets the current column width or current columns, or any other [`GridColumnProps`]({% slug api_grid_gridcolumnprops %}) for each defined column. Can be used on each Grid instance. To obtain the instance of the rendered Grid, use the `ref` callback. The following example demonstrates how to reorder the columns by dragging their handlers and check the properties afterwards. You can check the result in the browser console.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### element


</td>
<td type class="table-cell-type">


<code>


HTMLDivElement


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Returns the HTML element of the Grid component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### exportAsPdf


</td>
<td type class="table-cell-type">


<code>


() => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Method to trigger a PDF export of the Grid.
The 'pdf' prop of the Grid should be set to true or object of setting that will be applied the exported Grid.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### fitColumns


</td>
<td type class="table-cell-type">


<code>


(columnIds: string[]) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Method to fit columns according to their content.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### props


</td>
<td type class="table-cell-type">


<code>


[GridProps]({% slug api_grid_gridprops %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props values of the Grid.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### scrollIntoView


</td>
<td type class="table-cell-type">


<code>


(options: { rowIndex: number; }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Method to allow the scroll to be set to a specific row index when the Grid is scrollable. It is zero based.


</td>
</tr>
</tbody>
</table>



