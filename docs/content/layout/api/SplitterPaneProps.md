---
title: SplitterPaneProps
description: "Learn how to build custom functionality when working with the Vue Layout by Kendo UI with the help of the SplitterPaneProps."
api_reference: true
type: inner_api
slug: api_layout_splitterpaneprops
---

# SplitterPaneProps
Represents the pane options of the Splitter.


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


#### collapsed?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the pane collapsed state ([see example]({% slug panes_splitter %}#toc-collapsing)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### collapsible?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the user is allowed to hide the pane and provide space for other panes ([see example]({% slug panes_splitter %}#toc-collapsing)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### containsSplitter


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the content of the pane contains Splitter.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### content?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The slot template for the content of the splitter


</td>
</tr>
<tr>
<td class="table-cell-name">


#### keepMounted?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the children of the pane should be mounted when it's in collapsed state.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### max?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the maximum possible size of the pane ([see example]({% slug panes_splitter %}#toc-dimensions)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### min?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the minimum possible size of the pane ([see example]({% slug panes_splitter %}#toc-dimensions)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### resizable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the user is allowed to resize the pane and provide space for other panes ([see example]({% slug panes_splitter %}#toc-resizing)). If `resizable` is not specified, the resizing of the pane will be enabled.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### scrollable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if overflowing content is scrollable or hidden ([see example]({% slug panes_splitter %}#toc-scrolling)). If `scrollable` is not specified, the content will be scrollable.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### size?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the size of the pane ([see example]({% slug panes_splitter %}#toc-dimensions)). Has to be between the `min` and `max` properties.


</td>
</tr>
</tbody>
</table>



