---
title: TileLayoutTileResizeEvent
description: "Learn how to build custom functionality when working with the Vue Layout by Kendo UI with the help of the TileLayoutTileResizeEvent."
api_reference: true
type: inner_api
slug: api_layout_tilelayouttileresizeevent
---

# TileLayoutTileResizeEvent
The arguments for the `onTileresize` TileLayout event.


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


Returns 0 if the columnSpan is not changed, 1 if the columnSpan is increased
and -1 if the columnSpan is decreased.


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


The index of the currently resized tile.


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


Returns 0 if the rowSpan is not changed, 1 if the rowSpan is increased
and -1 if the rowSpan is decreased.


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


The new resized positions of the TileLayout tiles.


</td>
</tr>
</tbody>
</table>



