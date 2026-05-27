---
title: InsertTablePopupProps
description: "Learn how to build custom functionality when working with the Vue Editor by Kendo UI with the help of the InsertTablePopupProps."
api_reference: true
type: inner_api
slug: api_editor_inserttablepopupprops
---

# InsertTablePopupProps



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


#### anchor


</td>
<td type class="table-cell-type">


<code>


string | HTMLButtonElement


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The element which will be used as an anchor.


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


The number of columns.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### createTableHintMessage


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `Create a {0} x {1} table` message.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### createTableMessage


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `Create a table` message.


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


The `dir` HTML attribute.


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


The `close` event which will be triggered when the `InsertTablePopup` is about to be closed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onTableinsert?


</td>
<td type class="table-cell-type">


<code>


(row: number, col: number) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `onTableInsert` event which will be triggered when a cell in `InsertTablePopup` is clicked.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rows?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The number of rows.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### show


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Controls the visibility of the Popup.


</td>
</tr>
</tbody>
</table>



