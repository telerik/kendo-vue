---
title: ScrollViewProps
description: "Learn how to build custom functionality when working with the Vue Scrollview by Kendo UI with the help of the ScrollViewProps."
api_reference: true
type: inner_api
slug: api_scrollview_scrollviewprops
---

# ScrollViewProps
Represents the props of the [Kendo UI for Vue ScrollView component]({% slug overview_scrollview %}).


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


#### activeView?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the current active view ([see example]({% slug activeview_scrollview %})). Defaults to `1`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### arrows?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables or disables the built-in navigation arrows ([see example]({% slug arrows_scrollview %})). Defaults to `true`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### automaticViewChange?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Allows the ScrollView to switch the next page automatically after a short delay ([see example]({% slug automatic_scrolling_scrollview %})).
Defaults to `true`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### automaticViewChangeInterval?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the automatic page change delay in milliseconds ([see example]({% slug automatic_scrolling_scrollview %})).
Defaults to `5000`.


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


Content Template for the ScrollView items.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dataItems?


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An array of the items that are passed to the ScrollView component.


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


Represents the `dir` HTML attribute. This is used to switch from LTR to RTL.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### endless?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Toggles the endless scrolling mode in which the data items are endlessly looped
([see example]({% slug endlessscrolling_scrollview %})). Defaults to `false`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### pageable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Toggles the built-in pager ([see example]({% slug paging_scrollview %})). Defaults to `true`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### pagerOverlay?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the pager overlay ([see example]({% slug paging_scrollview %})).

 * The possible values are:
* `none`(Default) &mdash; No overlay is set.
* `dark` &mdash; Dark overlay is set.
* `light` &mdash; Light overlay is set.


</td>
</tr>
</tbody>
</table>



