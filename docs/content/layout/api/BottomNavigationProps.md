---
title: BottomNavigationProps
description: "Learn how to build custom functionality when working with the Vue Layout by Kendo UI with the help of the BottomNavigationProps."
api_reference: true
type: inner_api
slug: api_layout_bottomnavigationprops
---

# BottomNavigationProps
Represents the props of the [Kendo UI for Vue BottomNavigation component]({% slug overview_bottomnavigation %}).


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


#### border?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets a border to the BottomNavigation.


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


#### disabled?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Disables the whole BottomNavigation.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### fillMode?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The fill style of the BottomNavigation
([see example]({% slug appearance_bottomnavigation %}#toc-fill)).

The possible values are:
* `flat`(Default) &mdash; Sets the theme color as the text color. The background will be white.
* `solid` &mdash; Sets the theme color as a background color.


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


Sets the `id` property of the root BottomNavigation element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### item?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default component's content responsible for visualizing a single item
([see example]({% slug custom_rendering_bottomnavigation %}#toc-custom-rendering)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### itemFlow?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies how the icon and text label are positioned in each item of the BottomNavigation
([see example]({% slug content_types_bottomnavigation %}#toc-item-flow)).

The possible values are:
* `vertical`(Default) &mdash; Renders the text below the icon.
* `horizontal` &mdash; Renders the text and the icon on the same line.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### itemRender?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a BottomNavigation item is about to be rendered
([see example]({% slug custom_rendering_bottomnavigation %}#toc-item-render-property)).
Used to override the default appearance of the items.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### items?


</td>
<td type class="table-cell-type">


<code>


[BottomNavigationItemProps]({% slug api_layout_bottomnavigationitemprops %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The collection of items that will be rendered in the BottomNavigation ([see example]({% slug overview_bottomnavigation %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onKeyDown?


</td>
<td type class="table-cell-type">


<code>


(event: [BottomNavigationEvent]({% slug api_layout_bottomnavigationevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered on `onKeyDown` event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSelect?


</td>
<td type class="table-cell-type">


<code>


(event: [BottomNavigationSelectEvent]({% slug api_layout_bottomnavigationselectevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a BottomNavigation item is selected.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### positionMode?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the position and behavior of the BottomNavigation when the page is scrolled
([see example]({% slug positioning_bottomnavigation %}#toc-position-mode)).

The possible values are:
* `fixed`(Default) &mdash; The BottomNavigation always stays at the bottom of the viewport, regardless of the page scroll position.
* `sticky` &mdash; Positions the BottomNavigation based on the user's scroll position. A sticky element toggles between static
and fixed CSS [`position`](https://developer.mozilla.org/en-US/docs/Web/CSS/position) property, depending on the scroll position.
It is positioned static until a given offset position is met in the viewport - then it "sticks" in place like `fixed` positionMode.


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


The index of the selected BottomNavigationItem.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### themeColor?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the theme color of the BottomNavigation
([see example]({% slug appearance_bottomnavigation %}#toc-theme-color)).

The possible values are:
* `base` (Default) &mdash; Applies base coloring.
* `primary` &mdash; Applies coloring based on the primary theme color.
* `secondary` &mdash; Applies coloring based on the secondary theme color.
* `tertiary` &mdash; Applies coloring based on the tertiary theme color.
* `inverse` &mdash; Applies coloring based on the inverted theme color.


</td>
</tr>
</tbody>
</table>



