---
title: GridLayoutProps
description: "Learn how to build custom functionality when working with the Vue Layout by Kendo UI with the help of the GridLayoutProps."
api_reference: true
type: inner_api
slug: api_layout_gridlayoutprops
---

# GridLayoutProps
Represents the props of the [Kendo UI for Vue GridLayout component]({% slug overview_gridlayout %}).


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


#### align?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the horizontal and vertical alignment of the inner GridLayout elements (see demos
[here]({% slug layout_gridlayout_alignment %}#toc-horizontal-alignment) and [here]({% slug layout_gridlayout_alignment %}#toc-vertical-alignment)).

The possible keys are:
* `horizontal`&mdash;Defines the possible horizontal alignment of the inner GridLayout elements.
  * `start`&mdash;Uses the start point of the container.
  * `center`&mdash;Uses the central point of the container.
  * `end`&mdash;Uses the end point of the container.
  * (Default)`stretch`&mdash;Stretches the items to fill the width of the container.
* `vertical`&mdash; Defines the possible vertical alignment of the inner GridLayout elements.
  * `top`&mdash;Uses the top point of the container.
  * `middle`&mdash;Uses the middle point of the container.
  * `bottom`&mdash;Uses the bottom point of the container.
  * (Default)`stretch`&mdash;Stretches the items to fill the height of the container.


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


Sets additional CSS classes to the GridLayout.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### cols?


</td>
<td type class="table-cell-type">


<code>


[GridLayoutColumnProps]({% slug api_layout_gridlayoutcolumnprops %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the default number of columns and their widths ([see example]({% slug layout_gridlayout_rowscolumns %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### gap?


</td>
<td type class="table-cell-type">


<code>


[GridLayoutGap]({% slug api_layout_gridlayoutgap %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the gaps between the elements ([see example]({% slug layout_gridlayout_gaps %})).

* The possible keys are:
* `rows`
* `columns`


</td>
</tr>
<tr>
<td class="table-cell-name">


#### id?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `id` property of the root GridLayout element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### items?


</td>
<td type class="table-cell-type">


<code>


[GridLayoutItemProps]({% slug api_layout_gridlayoutitemprops %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The collection of GridLayoutItemProps.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rows?


</td>
<td type class="table-cell-type">


<code>


[GridLayoutRowProps]({% slug api_layout_gridlayoutrowprops %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the default number of rows and their height ([see example]({% slug layout_gridlayout_rowscolumns %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### style?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets additional CSS styles to the GridLayout.


</td>
</tr>
</tbody>
</table>



