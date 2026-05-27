---
title: GridColumnMenuProps
description: "Learn how to build custom functionality when working with the Vue Grid by Kendo UI with the help of the GridColumnMenuProps."
api_reference: true
type: inner_api
slug: api_grid_gridcolumnmenuprops
---

# GridColumnMenuProps
The props which the ColumnMenu passes to its children.


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


#### animate?


</td>
<td type class="table-cell-type">


<code>


boolean | PopupAnimation


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Controls the ColumnMenu animation. By default, the opening and closing animations are enabled.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### checkAllItem?


</td>
<td type class="table-cell-type">


<code>


string | boolean | object | Function


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The template that can customize the check all checkbox item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### column


</td>
<td type class="table-cell-type">


<code>


[GridColumnMenuColumnProps]({% slug api_grid_gridcolumnmenucolumnprops %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The current column options.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnMenuIcon?


</td>
<td type class="table-cell-type">


<code>


SVGIcon


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The icon that overrides the default(three vertical dots) icon displayed in the column menu of each column.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### filter?


</td>
<td type class="table-cell-type">


<code>


CompositeFilterDescriptor


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The current filter state of the Grid.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### filterable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The filterable option of the column.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### filterOperators


</td>
<td type class="table-cell-type">


<code>


[GridFilterOperators]({% slug api_grid_gridfilteroperators %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The filter operators for the Grid filters.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### item?


</td>
<td type class="table-cell-type">


<code>


string | boolean | object | Function


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The template that can customize the checkbox item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### key?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The key of the column menu.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClose?


</td>
<td type class="table-cell-type">


<code>


(event: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event that is fired when the column menu is closed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClosemenu?


</td>
<td type class="table-cell-type">


<code>


Function


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The method that will be called to close the column menu.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onContentfocus?


</td>
<td type class="table-cell-type">


<code>


(event: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event that is fired when the column menu is focused.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onExpandchange?


</td>
<td type class="table-cell-type">


<code>


(event: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event that is fired when the column menu is expanded or collapsed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFilterchange?


</td>
<td type class="table-cell-type">


<code>


(filter: CompositeFilterDescriptor, syntheticEvent: any) => any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The method that will be called to notify the parent Grid about a filter change.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFocus?


</td>
<td type class="table-cell-type">


<code>


(e: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The trigger focus event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSortchange?


</td>
<td type class="table-cell-type">


<code>


(event: any, sort: SortDescriptor[]) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event that is fired when the column menu is about to be sorted.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### opened?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The opened column menu.


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


The method for rendering the column menu.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### sort?


</td>
<td type class="table-cell-type">


<code>


SortDescriptor[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The current sort state of the Grid.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### sortable?


</td>
<td type class="table-cell-type">


<code>


[GridSortSettings]({% slug api_grid_gridsortsettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The sortable option of the column.


</td>
</tr>
</tbody>
</table>



