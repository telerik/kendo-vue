---
title: TabStripProps
description: "Learn how to build custom functionality when working with the Vue Layout by Kendo UI with the help of the TabStripProps."
api_reference: true
type: inner_api
slug: api_layout_tabstripprops
---

# TabStripProps
Represents the props of the [Kendo UI for Vue TabStrip component]({% slug overview_tabstrip %}).


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


Enables the tab animation.


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


Sets the direction of the TabStrip component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSelect?


</td>
<td type class="table-cell-type">


<code>


(e: [TabStripSelectEventArguments]({% slug api_layout_tabstripselecteventarguments %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the user makes a selection.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### selected?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the index of the selected TabStripTab component
([see example]({% slug tabs_tabstrip %}#toc-tabs-on-initial-loading)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### size?


</td>
<td type class="table-cell-type">


<code>


[TabStripSize]({% slug api_layout_tabstripsize %})


</code>


</td>
<td class="table-cell-default">


<code>


`medium`


</code>


</td>
<td class="table-cell-comment">


Specifies the possible sizes of the TabStrip.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### tabAlignment?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


'start'.


</code>


</td>
<td class="table-cell-comment">


Sets the alignment of the tabs.


The available options are:
- `"start"`&mdash;Aligns the tabs at the start of the `TabStripNavigation`.
- `"center"`&mdash;Aligns the tabs in the center of the `TabStripNavigation`.
- `"end"`&mdash;Aligns the tabs at the end of the `TabStripNavigation`.
- `"justify"`&mdash;Justifies the tabs inside the `TabStripNavigation`.
- `"stretched"`&mdash;Stretches the tabs inside the `TabStripNavigation`.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### tabIndex?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `tabIndex` of the TabStripNavigation.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### tabPosition?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


'top'.


</code>


</td>
<td class="table-cell-comment">


The position in which the TabStripNavigation components will be rendered.

The available options are:
- `"top"`&mdash;Renders the `TabStripNavigation` components to the top of the TabStrip.
- `"bottom"`&mdash;Renders the `TabStripNavigation` components to the bottom of the TabStrip.
- `"left"`&mdash;Renders the `TabStripNavigation` components to the left of the TabStrip.
- `"right"`&mdash;Renders the `TabStripNavigation` components to the right of the TabStrip.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### tabs?


</td>
<td type class="table-cell-type">


<code>


[TabStripTabProperties]({% slug api_layout_tabstriptabproperties %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the array of tabs.


</td>
</tr>
</tbody>
</table>



