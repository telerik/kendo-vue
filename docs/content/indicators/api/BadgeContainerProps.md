---
title: BadgeContainerProps
description: "Learn how to build custom functionality when working with the Vue Indicators by Kendo UI with the help of the BadgeContainerProps."
api_reference: true
type: inner_api
slug: api_indicators_badgecontainerprops
---

# BadgeContainerProps
Represents the props of the [Kendo UI for Vue Badge component]({% slug overview_badge %}).


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


{ horizontal: "start" | "end"; vertical: "top" | "bottom"; }


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the alignment of the Badge.

The possible keys are:
* `horizontal`&mdash; Defines the possible horizontal alignment of the Badge.
  * `start`&mdash;Uses the start point of the parent element.
  * `end`(Default)&mdash;Uses the end point of the parent element.
* `vertical`&mdash; Defines the possible vertical alignment of the Badge.
  * `top`(Default)&mdash;Uses the top point of the parent element.
  * `bottom`&mdash;Uses the bottom point of the parent element.


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


Defines the custom rendering of the Badge content. Accepts a slot name, a `render` function, or a Vue Component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### cutoutBorder?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies wether or not to render additional "cutout" border around the Badge.

The possible values are:
* `true`
* `false` (Default)


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


#### fillMode?


</td>
<td type class="table-cell-type">


<code>


"solid" | "outline"


</code>


</td>
<td class="table-cell-default">


<code>


`undefined`


</code>


</td>
<td class="table-cell-comment">


Specifies the appearance fill style of the Badge.

The possible values are:
* `solid`
* `outline`





</td>
</tr>
<tr>
<td class="table-cell-name">


#### position?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


`edge`


</code>


</td>
<td class="table-cell-comment">


Specifies the position of the Badge relative to the edge of the container element.

The possible values are:
* `edge` (Default)&mdash;The center of the Badge is positioned on the edge of the container element.
* `outside`&mdash;The Badge is entirely positioned outside the edge of the container element.
* `inside`&mdash;The Badge is entirely positioned inside the edge of the the container element.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### rounded?


</td>
<td type class="table-cell-type">


<code>


"small" | "medium" | "large" | "none" | "full"


</code>


</td>
<td class="table-cell-default">


<code>


`undefined`


</code>


</td>
<td class="table-cell-comment">


Specifies the roundness of the Badge.

The possible values are:
- none
- small
- medium
- large
- full





</td>
</tr>
<tr>
<td class="table-cell-name">


#### size?


</td>
<td type class="table-cell-type">


<code>


"small" | "medium" | "large"


</code>


</td>
<td class="table-cell-default">


<code>


`undefined`


</code>


</td>
<td class="table-cell-comment">


Specifies the size of the Badge.

The possible values are:
* `small`
* `medium`
* `large`





</td>
</tr>
<tr>
<td class="table-cell-name">


#### themeColor?


</td>
<td type class="table-cell-type">


<code>


"primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "error" | "inverse" | "inherit"


</code>


</td>
<td class="table-cell-default">


<code>


`undefined`


</code>


</td>
<td class="table-cell-comment">


Specifies the theme color of the Badge.

The possible values are:
* `primary`&mdash;Applies coloring based on primary theme color.
* `secondary`&mdash;Applies coloring based on secondary theme color.
* `tertiary`&mdash; Applies coloring based on tertiary theme color.
* `inherit`&mdash; Applies inherited coloring value.
* `info`&mdash;Applies coloring based on info theme color.
* `success`&mdash; Applies coloring based on success theme color.
* `warning`&mdash; Applies coloring based on warning theme color.
* `error`&mdash; Applies coloring based on error theme color.
* `inverse`&mdash; Applies coloring based on inverse theme color.





</td>
</tr>
</tbody>
</table>



