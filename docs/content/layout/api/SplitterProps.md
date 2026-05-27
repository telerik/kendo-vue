---
title: SplitterProps
description: "Learn how to build custom functionality when working with the Vue Layout by Kendo UI with the help of the SplitterProps."
api_reference: true
type: inner_api
slug: api_layout_splitterprops
---

# SplitterProps
Represents the options of the Splitter.


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


#### defaultPanes?


</td>
<td type class="table-cell-type">


<code>


[SplitterPaneProps]({% slug api_layout_splitterpaneprops %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the initial options of the Splitter panes ([more information and examples]({% slug panes_splitter %})). Can be used for uncontrolled state.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: [SplitterOnChangeEvent]({% slug api_layout_splitteronchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires after a Splitter pane is resized or collapsed. Useful for updating the pane options and triggering layout calculations on components which are positioned inside the panes.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### orientation?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the orientation of the panes within the Splitter ([more information and examples]({% slug orientation_splitter %})). Panes in a horizontal Splitter are placed horizontally. Panes in a vertical Splitter are placed vertically.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### panes?


</td>
<td type class="table-cell-type">


<code>


[SplitterPaneProps]({% slug api_layout_splitterpaneprops %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the options of the Splitter panes ([more information and examples]({% slug panes_splitter %})). Can be used for controlled state.


</td>
</tr>
</tbody>
</table>



