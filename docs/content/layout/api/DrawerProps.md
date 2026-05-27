---
title: DrawerProps
description: "Learn how to build custom functionality when working with the Vue Layout by Kendo UI with the help of the DrawerProps."
api_reference: true
type: inner_api
slug: api_layout_drawerprops
---

# DrawerProps
The properties of the [Kendo UI for Vue Drawer component]({% slug overview_drawer %}).


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


boolean | [DrawerAnimation]({% slug api_layout_draweranimation %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the animation settings of the Drawer.
If boolean enables or disables the default animation.
Use DrawerAnimation to set slide animation with customizable duration option. Accepts a number in milliseconds.


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


#### expanded?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the state of the Drawer. Defaults to `false` ([see example]({% slug expanded_state_drawer %})).


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


Overrides the default component responsible for visualizing a single item ([see example]({% slug custom_rendering %})).

The default Component is: [DrawerItem]({% slug api_layout_draweritemprops %}).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### items?


</td>
<td type class="table-cell-type">


<code>


[DrawerItemProps]({% slug api_layout_draweritemprops %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The collection of items that will be rendered in the Drawer ([see example]({% slug overview_drawer %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### mini?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the mini (compact) view of the Drawer which is displayed when the component is collapsed
([see example]({% slug display_modes_drawer %}#toc-mini-view))).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### miniWidth?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the width of the Drawer when the mini view is enabled and the component is collapsed. Defaults to `50`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### mode?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the mode in which the Drawer will be displayed.
The possible values are `overlay` and `push`.
Defaults to `overlay` ([see example]({% slug display_modes_drawer %}#toc-expand-modes)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### navigationContent?


</td>
<td type class="table-cell-type">


<code>


Object | Function | String


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Provides the option to define a custom template inside the navigational section of the Drawer component ([see example]({% slug custom_rendering %})).
When defined, the custom template will override the default [DrawerItem]({% slug api_layout_draweritemprops %}) rendering.
By default, the property is not defined.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### navigationFooter?


</td>
<td type class="table-cell-type">


<code>


Object | Function | String


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Provides the option to define a `footer` in the Drawer component ([see example]({% slug custom_rendering %})).
The footer is rendered below the Drawer Items. By default, the property is not defined.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### navigationHeader?


</td>
<td type class="table-cell-type">


<code>


Object | Function | String


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Provides the option to define a `header` in the Drawer component ([see example]({% slug custom_rendering %})).
The header is rendered above the Drawer Items. By default, the property is not defined.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onOverlayclick?


</td>
<td type class="table-cell-type">


<code>


(event: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event handler that will be fired when the overlay is clicked.
Used in overlay mode only.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSelect?


</td>
<td type class="table-cell-type">


<code>


(event: [DrawerSelectEvent]({% slug api_layout_drawerselectevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a Drawer item is selected.


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




</td>
<td class="table-cell-comment">


Specifies the position of the Drawer.
The possible values are `start` and `end` ([see example]({% slug positioning_drawer %})).


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


Sets the `tabIndex` property of the Drawer.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### width?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the width of the Drawer when it is expanded. Defaults to `240`.


</td>
</tr>
</tbody>
</table>



