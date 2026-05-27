---
title: TileLayoutRepositionEvent
description: "Learn how to build custom functionality when working with the Vue Layout by Kendo UI with the help of the TileLayoutRepositionEvent."
api_reference: true
type: inner_api
slug: api_layout_tilelayoutrepositionevent
---

# TileLayoutRepositionEvent
The arguments for the `onReposition` TileLayout event.


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


#### col


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Returns 0 if the column is not changed, 1 if the item is dragged to the next column
and -1 if the item is drag to the previous column.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### index


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The index of the currently moved tile.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### row


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Returns 0 if the row is not changed, 1 if the item is dragged to the next row
and -1 if the item is drag to the previous row.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### value


</td>
<td type class="table-cell-type">


<code>


[TileStrictPosition]({% slug api_layout_tilestrictposition %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The new positions of the TileLayout tiles.


</td>
</tr>
</tbody>
</table>



