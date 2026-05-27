---
title: PanelBarProps
description: "Learn how to build custom functionality when working with the Vue Layout by Kendo UI with the help of the PanelBarProps."
api_reference: true
type: inner_api
slug: api_layout_panelbarprops
---

# PanelBarProps
Represents the props of the [Kendo UI for Vue PanelBar component]({% slug overview_panelbar %}).


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


#### animation?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the animation state of the PanelBar.


</td>
</tr>
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


The class name that is set to the PanelBar.


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


Sets the direction of the PanelBar component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### expanded?


</td>
<td type class="table-cell-type">


<code>


string[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the initial expanded state of the PanelBar.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### expandMode?


</td>
<td type class="table-cell-type">


<code>


[PanelBarExpandMode]({% slug api_layout_panelbarexpandmode %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the expand mode of the PanelBar ([see example]({% slug expandmodes_panelbar %})).

The available modes are:
- `"single"`&mdash;Allows you to expand only one item at a time. The expanding of an item collapses the item that was previously expanded.
- `"multiple"` (default)&mdash;Allows you to expand two or more items at a time. Items can also be toggled.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### focused?


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the initial focused state of the PanelBar.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isControlled?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines if the PanelBar is going to be used in controlled state.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### items?


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the items of the PanelBar.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### keepItemsMounted?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines if the PanelBar items will be mounted after expand collapse. Defaults to `false`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSelect?


</td>
<td type class="table-cell-type">


<code>


(event: [PanelBarSelectEventArguments]({% slug api_layout_panelbarselecteventarguments %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the user makes a selection ([see example]({% slug controlling_state_panelbar %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### selected?


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set, overrides the currently selected property in the PanelBar state.


</td>
</tr>
</tbody>
</table>



