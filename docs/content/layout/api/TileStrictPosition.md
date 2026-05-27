---
title: TileStrictPosition
description: "Learn how to build custom functionality when working with the Vue Layout by Kendo UI with the help of the TileStrictPosition."
api_reference: true
type: inner_api
slug: api_layout_tilestrictposition
---

# TileStrictPosition
Specifies the strict position of each tile.
Used in the [TileLayoutRepositionEvent]({% slug api_layout_tilelayoutrepositionevent %}).


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


(Required) Defines on which column-line the TileLayoutItem will start.
It is required in order reordering and resizing functionalities to work as expected as they rely on it.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### colSpan


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies how many columns will the TileLayoutItem spans.
Defaults to `1`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### order


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the order index of the TileLayoutItem.
If not set, items will receive a sequential order.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### row?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines on which row-line the TileLayoutItem will start.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rowSpan


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies how many rows will the TileLayoutItem spans.
Defaults to `1`.


</td>
</tr>
</tbody>
</table>



