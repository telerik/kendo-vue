---
title: TileLayoutItem
description: "Learn how to build custom functionality when working with the Vue Layout by Kendo UI with the help of the TileLayoutItem."
api_reference: true
type: inner_api
slug: api_layout_tilelayoutitem
---

# TileLayoutItem
The interface for describing items that can be passed to the `items` property of the TileLayout component.


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


#### body?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the content in TileLayoutItem's body content
([see example]({% slug tiles_position_dimensions_tilelayout %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### bodyText?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the content in TileLayoutItem's body text
([see example]({% slug tiles_position_dimensions_tilelayout %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### class?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets additional classes to the TileLayoutItem.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultPosition?


</td>
<td type class="table-cell-type">


<code>


[TilePosition]({% slug api_layout_tileposition %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The position which is used when the TileLayout is in uncontrolled mode
([see example]({% slug tiles_position_dimensions_tilelayout %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### header?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the title in the TileLayoutItem's header content
([see example]({% slug tiles_position_dimensions_tilelayout %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### headerText?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the title in the TileLayoutItem's header text
([see example]({% slug tiles_position_dimensions_tilelayout %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### hintClass?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets additional classes to the TileLayoutItem hint element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### hintStyle?


</td>
<td type class="table-cell-type">


<code>


object


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets additional CSS styles to the TileLayoutItem hint element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### id?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the id of each Tile if needed to be user-defined. By default the id is automatically generated.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### item?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default rendering of the TileLayoutItem
([see example]({% slug tiles_custom_rendering_tilelayout %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### reorderable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the user is allowed to reorder the TileLayoutItem by dragging and dropping it
([see example]({% slug tiles_reordering_tilelayout %})).
If `reorderable` is not specified, the dragging functionality of the TileLayoutItem will be enabled.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### resizable?


</td>
<td type class="table-cell-type">


<code>


string | boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the user is allowed to resize the TileLayoutItem and in which direction
([see example]({% slug tiles_resizing_tilelayout %})).
If `resizable` is not specified, the resizing of the TileLayoutItem will be enabled for both directions.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### style?


</td>
<td type class="table-cell-type">


<code>


object


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets additional styles to the TileLayoutItem.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### tabIndex?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the tabIndex of each TileLayout tile if the scenario requires it. Defaults to `0`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### tile?


</td>
<td type class="table-cell-type">


<code>


object


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The tile object.


</td>
</tr>
</tbody>
</table>



