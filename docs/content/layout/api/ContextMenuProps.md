---
title: ContextMenuProps
description: "Learn how to build custom functionality when working with the Vue Layout by Kendo UI with the help of the ContextMenuProps."
api_reference: true
type: inner_api
slug: api_layout_contextmenuprops
---

# ContextMenuProps
Represents the props of the ContextMenu component.


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


#### className?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Adds a custom className to the Menu top element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### customCloseItemIds?


</td>
<td type class="table-cell-type">


<code>


string[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the ids of the Menu items that will not be closed on mouse-leave. The ids are hierarchical and zero-based. The first root item has a `0` id. If the first root item has children, the first child item acquires a `0_0` id and the second acquires a `0_1` id.


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


Sets the direction of the Menu.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### itemRender?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A Vue functional or class component which is used for rendering the innermost part of the Menu item ([see example]({% slug rendering_menu %}#toc-items)). By default, the innermost item part includes only the text for the item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### items?


</td>
<td type class="table-cell-type">


<code>


[MenuItemModel]({% slug api_layout_menuitemmodel %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the Menu items.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### linkRender?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A Vue functional or class component which is used for rendering the link of the item ([see example]({% slug rendering_menu %}#toc-links)). The item link is a part of the visual representation of the item which, by default, includes an arrow, icon, and text.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### offset?


</td>
<td type class="table-cell-type">


<code>


Offset


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the absolute position of the ContextMenu popup.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClose?


</td>
<td type class="table-cell-type">


<code>


() => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the ContextMenu should close.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSelect?


</td>
<td type class="table-cell-type">


<code>


(event: [MenuSelectEvent]({% slug api_layout_menuselectevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a Menu item is selected.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### show?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Controls the visibility of the ContextMenu.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### vertical?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies whether the Menu will be vertical ([see example]({% slug vertical_menu %})).


</td>
</tr>
</tbody>
</table>



