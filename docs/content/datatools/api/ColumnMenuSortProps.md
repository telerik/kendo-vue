---
title: ColumnMenuSortProps
description: "Learn how to build custom functionality when working with the Vue Datatools by Kendo UI with the help of the ColumnMenuSortProps."
api_reference: true
type: inner_api
slug: api_data-tools_columnmenusortprops
---

# ColumnMenuSortProps
The props of the ColumnMenuSort component.


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


#### column


</td>
<td type class="table-cell-type">


<code>


[ColumnMenuColumnProps]({% slug api_data-tools_columnmenucolumnprops %})


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


#### onSortchange?


</td>
<td type class="table-cell-type">


<code>


(descriptors: SortDescriptor[], e: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The method that will be called to notify the parent  about a sort change.


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


The current sort state of the .


</td>
</tr>
<tr>
<td class="table-cell-name">


#### sortable?


</td>
<td type class="table-cell-type">


<code>


[SortSettings]({% slug api_data-tools_sortsettings %})


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



