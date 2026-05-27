---
title: ListBoxToolbarProps
description: "Learn how to build custom functionality when working with the Vue Listbox by Kendo UI with the help of the ListBoxToolbarProps."
api_reference: true
type: inner_api
slug: api_listbox_listboxtoolbarprops
---

# ListBoxToolbarProps



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


#### dataConnected


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data of the connected ListBox.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dataItems


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data of the main ListBox.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onToolclick?


</td>
<td type class="table-cell-type">


<code>


(event: [ListBoxToolbarClickEvent]({% slug api_listbox_listboxtoolbarclickevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when one of the ListBoxToolbar tools is clicked.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### selectedField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Set the selected field of the ListBoxToolbar.
Based on that value of that field the ListBoxToolbar will determine which actions are allowed and which disabled.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### tools?


</td>
<td type class="table-cell-type">


<code>


string[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the tools of the ListBoxToolbar. By default, the ListBoxToolbar renders no tools.
The built-in tools are:
* `moveUp`
* `moveDown`
* `transferTo`
* `transferFrom`
* `transferAllTo`
* `transferAllFrom`
* `remove`


</td>
</tr>
</tbody>
</table>



