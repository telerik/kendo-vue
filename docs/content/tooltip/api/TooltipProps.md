---
title: TooltipProps
description: "Learn how to build custom functionality when working with the Vue Tooltip by Kendo UI with the help of the TooltipProps."
api_reference: true
type: inner_api
slug: api_tooltip_tooltipprops
---

# TooltipProps
Represents the props of the [Kendo UI for Vue Tooltip component]({% slug overview_tooltip %}).


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


#### anchorElement?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the anchor element of the Tooltip.

The available options are:
- (Default) `pointer`&mdash;Shows a Tooltip where the cursor is located.
- `target`&mdash;Positions the Tooltip based on the anchor element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### appendTo?


</td>
<td type class="table-cell-type">


<code>


HTMLElement


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the container to which the Tooltip will be appended. Defaults to [`body`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body).


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


Sets a class of the Tooltip animation container.


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


Sets the content of the Tooltip ([see example]({% slug templates_tooltip %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### filter?


</td>
<td type class="table-cell-type">


<code>


(target: HTMLElement) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents a callback function which determines if a Tooltip will be displayed ([see example]({% slug filter_elements_tooltip %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClose?


</td>
<td type class="table-cell-type">


<code>


(event: [TooltipEvent]({% slug api_tooltip_tooltipevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the Tooltip is hidden.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onOpen?


</td>
<td type class="table-cell-type">


<code>


(event: [TooltipEvent]({% slug api_tooltip_tooltipevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the Tooltip is shown.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### open?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the Tooltip will be open.
Sets the Tooltip in its controlled mode ([see example]({% slug controlledmode_tooltip %})).
Requires you to set the `targetElement` property.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### openDelay?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets a delay in milliseconds.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### parentTitle?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If any of the parent elements has a title, displays a Tooltip.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### position?


</td>
<td type class="table-cell-type">


<code>


String | TooltipPosition


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the position of the Tooltip ([see example]({% slug positioning_tooltip %})).

The available options are:
- (Default) `auto`&mdash;Positions the Tooltip depending on the available space.
- `right`&mdash;Positions the Tooltip to the right side of the element.
- `left`&mdash;Positions the Tooltip to the left side of the element.
- `bottom`&mdash;Positions the Tooltip at the bottom of the element.
- `top`&mdash;Positions the Tooltip at the top of the element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### setCalloutOnPositionAuto?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


When the position is set to `auto`, sets the start point of the Tooltip callout (in pixels).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### showCallout?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the Tooltip callout will be displayed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### targetElement?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the Tooltip target element. You have to use it with the `open` property.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### tooltipClassName?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the CSS class names which are set to the Tooltip DOM element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### tooltipStyle?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the styles which are set to the Tooltip DOM element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### updateInterval?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The milliseconds interval on which the Tooltip will check for title change. By default the Tooltip does not track for title updates.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### updatePosition?


</td>
<td type class="table-cell-type">


<code>


(event: [TooltipPositionEvent]({% slug api_tooltip_tooltippositionevent %})) => { left: number; top: number; }


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Callback called when the Tooltip calculates it's position. Useful to modify the default position behavior.
Require to return the `top` and `left` position of the Tooltip.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### wrapperStyle?


</td>
<td type class="table-cell-type">


<code>


object


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets a class of the Tooltip animation container.


</td>
</tr>
</tbody>
</table>



