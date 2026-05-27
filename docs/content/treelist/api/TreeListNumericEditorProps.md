---
title: TreeListNumericEditorProps
description: "Learn how to build custom functionality when working with the Vue Treelist by Kendo UI with the help of the TreeListNumericEditorProps."
api_reference: true
type: inner_api
slug: api_treelist_treelistnumericeditorprops
---

# TreeListNumericEditorProps
Represents the props of the TreeListCell component.


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


#### ariaColumnIndex


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The index to be applied to the `aria-colindex` attribute.


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


The custom CSS classes of the cells.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### colIndex


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The index of the column. Useful for applying `aria-colindex` accessibility attribute.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### colSpan?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The column span of the cell.


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


The dataItem of the cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### expandable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true`, the cell will render indentation based on its level prop and
the icons that are used for expanding and collapsing child rows.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### expanded?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The expanded state of the cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### field


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The field of the cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### focusInputOnMount?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to true will focus the first input inside the cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### format?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The format of the cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### hasChildren?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates that the data item of the cell has subitems.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isSelected


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the cell is selected.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### level


</td>
<td type class="table-cell-type">


<code>


number[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An array of indexes of each parent and current item in the data tree.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: { dataItem: any; event: any; field?: string; value?: any; }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event that is fired when the cell value is changed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onExpandchange?


</td>
<td type class="table-cell-type">


<code>


(event: any, dataItem: any, level: number[]) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event that is fired when the expand or collapse icon of the cell is clicked.


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


A function for overriding the default rendering of the cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### selectionChange?


</td>
<td type class="table-cell-type">


<code>


(event: { event: any; }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event that is fired when the cell is selected.


</td>
</tr>
</tbody>
</table>



