---
title: TileLayoutProps
description: "Learn how to build custom functionality when working with the Vue Layout by Kendo UI with the help of the TileLayoutProps."
api_reference: true
type: inner_api
slug: api_layout_tilelayoutprops
---

# TileLayoutProps
Represents the properties of [TileLayout](% slug overview_tilelayout %) component.


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


#### autoFlow?


</td>
<td type class="table-cell-type">


<code>


String | [TileLayoutAutoFlow]({% slug api_layout_tilelayoutautoflow %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the TileLayout.
For further reference, check [grid-auto-flow CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow) article.
Defaults to `column`
([see example]({% slug autoflows_tilelayout %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### columns?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the default number of columns ([see example]({% slug overview_tilelayout %}#toc-tilelayout-configuration-options)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnWidth?


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the default width of the columns ([see example]({% slug overview_tilelayout %}#toc-tilelayout-configuration-options)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dataItemKey?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the `key` field of the TileLayout item. Used for setting unique keys to the TileLayout items.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dir?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the `dir` HTML attribute. This is used to switch from LTR to RTL.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### gap?


</td>
<td type class="table-cell-type">


<code>


[TileLayoutGap]({% slug api_layout_tilelayoutgap %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the gaps between the tiles ([see example]({% slug overview_tilelayout %}#toc-tilelayout-configuration-options)).

* The possible keys are:
* `rows`
* `columns`


</td>
</tr>
<tr>
<td class="table-cell-name">


#### id?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `id` property of the root element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### ignoreDrag?


</td>
<td type class="table-cell-type">


<code>


(event: any) => boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Use this callback to prevent or allow dragging of the tiles based on specific dom event.
Setting `:ignoreDrag="$event => !$event.target.closest('.k-card-title')"` will make only the headers draggable.
Setting `:ignoreDrag="$event => $event.target.nodeName == 'INPUT'"` will ignore dragging input elements.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### items?


</td>
<td type class="table-cell-type">


<code>


[TileLayoutItem]({% slug api_layout_tilelayoutitem %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The collection of items that will be rendered in the TileLayout
([see example]({% slug overview_tilelayout %}#toc-tilelayout-configuration-options)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onReposition?


</td>
<td type class="table-cell-type">


<code>


(event: [TileLayoutRepositionEvent]({% slug api_layout_tilelayoutrepositionevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user repositions the tile by either dragging or resizing
([see example]({% slug tiles_position_dimensions_tilelayout %}#toc-controlling-the-position)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### positions?


</td>
<td type class="table-cell-type">


<code>


[TilePosition]({% slug api_layout_tileposition %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The list of tiles' positions which are used when the TileLayout is in controlled mode
([see example]({% slug tiles_position_dimensions_tilelayout %}#toc-controlling-the-position)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rowHeight?


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the default height of the rows ([see example]({% slug overview_tilelayout %}#toc-tilelayout-configuration-options)).


</td>
</tr>
</tbody>
</table>



