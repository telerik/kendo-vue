---
title: GridExpandChangeEvent
description: "Learn how to build custom functionality when working with the Vue Grid by Kendo UI with the help of the GridExpandChangeEvent."
api_reference: true
type: inner_api
slug: api_grid_gridexpandchangeevent
---

# GridExpandChangeEvent
Represents the object of the `onExpandChange` event.


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


#### collapsedGroups?


</td>
<td type class="table-cell-type">


<code>


any[][]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The array with collapsed groups.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dataItem


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data item that is expanded or collapsed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### event


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A specific native DOM event which is fetched by Vue.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### target?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An event target.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### value


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The available values are:
- `true`&mdash;If the data item is expanded.
- `false`&mdash;If the data item is collapsed.


</td>
</tr>
</tbody>
</table>



