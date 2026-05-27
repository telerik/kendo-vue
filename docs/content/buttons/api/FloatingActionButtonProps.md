---
title: FloatingActionButtonProps
description: "Learn how to build custom functionality when working with the Vue Buttons by Kendo UI with the help of the FloatingActionButtonProps."
api_reference: true
type: inner_api
slug: api_buttons_floatingactionbuttonprops
---

# FloatingActionButtonProps
Represents the props of the [Kendo UI for Vue
 FloatingActionButton component]({% slug overview_floatingactionbutton %}).


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


#### accessKey?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the `accessKey` of the main button.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### align?


</td>
<td type class="table-cell-type">


<code>


[FloatingActionButtonAlign]({% slug api_buttons_floatingactionbuttonalign %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the horizontal and vertical alignment of the Floating Action Button in relation to the container
[see example]({% slug positioning_floatingactionbutton %}).

> Centering the Floating Action Button in both horizontal and vertical dimension is not a typical use case.
Still, it is possible to achieve such a layout with appropriate offsets.
Setting horizontal: "center" and vertical: "middle"
at the same time is not supported.

The possible keys are:
* `horizontal`&mdash; Defines the possible horizontal alignment of the Floating Action Button..
  * `start`&mdash;Uses the start point of the container.
  * `center`&mdash;Uses the center point of the container.
  * `end`(Default)&mdash;Uses the end point of the container
* `vertical`&mdash; Defines the possible vertical alignment of the Floating Action Button..
  * `top`&mdash;Uses the top point of the container.
  * `middle`&mdash;Uses the middle point of the container.
  * `bottom`(Default)&mdash;Uses the bottom point of the container.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### alignOffset?


</td>
<td type class="table-cell-type">


<code>


[FloatingActionButtonAlignOffset]({% slug api_buttons_floatingactionbuttonalignoffset %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the horizontal and vertical offset applied to the Floating Action Button
[see example]({% slug positioning_floatingactionbutton %}).

Normally, the floating button is positioned next to the boundaries of its container
 with a default offset of `16px`.

Positive offsets move floating buttons, which are in a corner, further from that corner. Buttons, which are
not in a corner, can be moved along the container's boundary or towards the center of the container.

A negative offset can be used to force a button to overflow the boundaries of its container.

The possible keys are:
* `x`&mdash;Sets the horizontal offset of the Floating Action Button.
* `y`&mdash;Sets the vertical offset of the Floating Action Button.


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


Specifies a list of CSS classes that will be added to the Floating Action Button.


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


Represents the `dir` HTML attribute. This is used to
 switch from LTR to RTL [see example]({% slug rtl_buttons %}).


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


Specifies if the Floating Action Button is
 disabled [see example]({% slug disabled_floatingactionbutton    %}). Defaults to `false`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### fillMode?


</td>
<td type class="table-cell-type">


<code>


"flat" | "link" | "solid" | "outline"


</code>


</td>
<td class="table-cell-default">


<code>


`undefined`


</code>


</td>
<td class="table-cell-comment">


Configures the `fillMode` of the Floating Action Button.

The available options are:
- solid
- outline
- flat
- link





</td>
</tr>
<tr>
<td class="table-cell-name">


#### icon?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the icon rendered in the Floating Action
 Button [see example]({% slug contenttypes_floatingactionbutton %}).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### iconClass?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines a CSS class or multiple classes separated by spaces which are applied
to a `span` element inside the Floating Action Button. Allows the usage of custom icons.


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


Sets the `id` property of the root HTML element.


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


Overrides the default component responsible for visualizing a single item
[see example]({% slug customization_floatingactionbutton %}#toc-items-rendering).

The default Component is: [FloatingActionButtonItem]({% slug api_buttons_floatingactionbuttonitemprops %}).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### items?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The collection of items that will be rendered in the Floating Action Button
[see example]({% slug databinding_floatingactionbutton %}).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onBlur?


</td>
<td type class="table-cell-type">


<code>


(event: [FloatingActionButtonEvent]({% slug api_buttons_floatingactionbuttonevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the Floating Action Button is blurred
[see example]({% slug overview_floatingactionbutton %}#toc-events).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClick?


</td>
<td type class="table-cell-type">


<code>


(event: [FloatingActionButtonEvent]({% slug api_buttons_floatingactionbuttonevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the Floating Action Button is clicked.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClose?


</td>
<td type class="table-cell-type">


<code>


(event: [FloatingActionButtonEvent]({% slug api_buttons_floatingactionbuttonevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the popup which contains the items is closed
[see example]({% slug overview_floatingactionbutton %}#toc-events).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFocus?


</td>
<td type class="table-cell-type">


<code>


(event: [FloatingActionButtonEvent]({% slug api_buttons_floatingactionbuttonevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the Floating Action Button is focused
[see example]({% slug overview_floatingactionbutton %}#toc-events).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onItemclick?


</td>
<td type class="table-cell-type">


<code>


(event: [FloatingActionButtonItemEvent]({% slug api_buttons_floatingactionbuttonitemevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the Floating Action Button Item is clicked
[see example]({% slug overview_floatingactionbutton %}#toc-events).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onKeydown?


</td>
<td type class="table-cell-type">


<code>


(event: [FloatingActionButtonEvent]({% slug api_buttons_floatingactionbuttonevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggers onKeyDown event
[see example]({% slug overview_floatingactionbutton %}#toc-events).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMousedown?


</td>
<td type class="table-cell-type">


<code>


(event: [FloatingActionButtonEvent]({% slug api_buttons_floatingactionbuttonevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggers onMousedown event
[see example]({% slug overview_floatingactionbutton %}#toc-events).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseup?


</td>
<td type class="table-cell-type">


<code>


(event: [FloatingActionButtonEvent]({% slug api_buttons_floatingactionbuttonevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggers onMouseup event
[see example]({% slug overview_floatingactionbutton %}#toc-events).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onOpen?


</td>
<td type class="table-cell-type">


<code>


(event: [FloatingActionButtonEvent]({% slug api_buttons_floatingactionbuttonevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the popup which contains the items is opened
[see example]({% slug overview_floatingactionbutton %}#toc-events).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### opened?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If defined it specifies if the Floating Action Button is opened.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### popupSettings?


</td>
<td type class="table-cell-type">


<code>


[FloatingActionButtonPopupSettings]({% slug api_buttons_floatingactionbuttonpopupsettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the additional props that will be passed to the Popup inside the Floating Action Button
[see example]({% slug customization_floatingactionbutton %}#toc-popup-behavior).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### positionMode?


</td>
<td type class="table-cell-type">


<code>


[FloatingActionButtonPositionMode]({% slug api_buttons_floatingactionbuttonpositionmode %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the position mode of the Floating Action Button
[see example]({% slug positioning_floatingactionbutton %}). It is based on the
[CSS position](https://developer.mozilla.org/en-US/docs/Web/CSS/position) rule.

* The possible values are:
* 'fixed' (Default)
* 'absolute'


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rounded?


</td>
<td type class="table-cell-type">


<code>


"small" | "medium" | "large" | "full" | "none"


</code>


</td>
<td class="table-cell-default">


<code>


`undefined`


</code>


</td>
<td class="table-cell-comment">


Configures the `roundness` of the Floating Action Button.

The available options are:
- none
- small
- medium
- large
- circle
- full





</td>
</tr>
<tr>
<td class="table-cell-name">


#### size?


</td>
<td type class="table-cell-type">


<code>


[FloatingActionButtonSize]({% slug api_buttons_floatingactionbuttonsize %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the size of the Floating Action Button
[see example]({% slug appearance_floatingactionbutton %}).

The possible values are:
* `small`&mdash;Applies half of the default padding, e.g. `8px`.
* `medium` (Default)&mdash;Applies the default padding, e.g. `16px`.
* `large`&mdash;Applies one and one half of the default padding, e.g. `24px`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### svgIcon?


</td>
<td type class="table-cell-type">


<code>


SVGIcon


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the svg icon in a Kendo UI for Vue theme.


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


Specifies the `tabIndex` of the main button.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### text?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the text of the Floating Action
 Button [see example]({% slug contenttypes_floatingactionbutton %}).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### themeColor?


</td>
<td type class="table-cell-type">


<code>


[FloatingActionButtonThemeColor]({% slug api_buttons_floatingactionbuttonthemecolor %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the theme color of the Floating Action Button
[see example]({% slug appearance_floatingactionbutton %}).

The possible values are:
   * * `base` (Default)&mdash;Applies base coloring.
   * * `primary`&mdash;Applies coloring based on the primary theme color.
* `secondary`&mdash;Applies coloring based on the secondary theme color.
* `tertiary`&mdash; Applies coloring based on the tertiary theme color.


</td>
</tr>
</tbody>
</table>



