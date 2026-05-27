---
title: WindowProps
description: "Learn how to build custom functionality when working with the Vue Dialogs by Kendo UI with the help of the WindowProps."
api_reference: true
type: inner_api
slug: api_dialogs_windowprops
---

# WindowProps
Represents the props of the [Window component]({% slug overview_window %}).


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


#### appendTo?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the string selector to the element to which the Window will be appended. Defaults to its parent element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### closeButton?


</td>
<td type class="table-cell-type">


<code>


string | boolean | object | Function


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Acccepts a named slot `string`, functional or class component for the close button. If set to `false` the button is not rendered.





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


Specifies the direction of the Window content.

The supported values are:
* `"ltr"`
* `"rtl"`


</td>
</tr>
<tr>
<td class="table-cell-name">


#### doubleClickStageChange?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the Window stage will change on title double click. The this is on by default.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### draggable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the Window will be draggable ([see example]({% slug positioningdragging_window %}#toc-dragging)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### height?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the height of the Window ([see example]({% slug dimensionsresizing_window %}#toc-dimensions)).


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


The id of the window.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### initialHeight?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the initial height of the Window ([see example]({% slug dimensionsresizing_window %}#toc-dimensions)). The component will be in an uncontrolled mode.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### initialLeft?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the initial `left` value ([see example]({% slug positioningdragging_window %}#toc-positioning)). The Window will be in an uncontrolled mode.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### initialTop?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the initial `top` value ([see example]({% slug positioningdragging_window %}#toc-positioning)). The component will be in an uncontrolled mode.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### initialWidth?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the initial width of the Window ([see example]({% slug dimensionsresizing_window %}#toc-dimensions)). The component will be in an uncontrolled mode.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### left?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the left coordinates of the Window.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### maximizeButton?


</td>
<td type class="table-cell-type">


<code>


string | boolean | object | Function


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Acccepts a named slot `string`, functional or class component for the maximize button. If set to `false` the button is not rendered.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### minHeight?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the minimum height of the Window ([see example]({% slug dimensionsresizing_window %}#toc-resizing)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### minimizeButton?


</td>
<td type class="table-cell-type">


<code>


string | boolean | object | Function


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Acccepts a named slot `string`, functional or class component for the minimize button. If set to `false` the button is not rendered.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### minWidth?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the minimum width of the Window ([see example]({% slug dimensionsresizing_window %}#toc-resizing)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### modal?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the Window will be modal by rendering an overlay under the component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClose?


</td>
<td type class="table-cell-type">


<code>


(event: [WindowActionsEvent]({% slug api_dialogs_windowactionsevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the **Close** button in the title is clicked or when the `Esc` button is pressed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMove?


</td>
<td type class="table-cell-type">


<code>


(event: [WindowMoveEvent]({% slug api_dialogs_windowmoveevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the Window is dragged.


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


Fires when modal overlay of the Window is clicked.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onResize?


</td>
<td type class="table-cell-type">


<code>


(event: [WindowMoveEvent]({% slug api_dialogs_windowmoveevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the Window resizes.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onStagechange?


</td>
<td type class="table-cell-type">


<code>


(event: [WindowActionsEvent]({% slug api_dialogs_windowactionsevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the `DEFAULT`, `FULLSCREEN`, or `MINIMIZED` state of the Window is changed.


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


Specifies if the Window will be resizable ([see example]({% slug dimensionsresizing_window %}#toc-resizing)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### restoreButton?


</td>
<td type class="table-cell-type">


<code>


string | boolean | object | Function


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Acccepts a named slot `string`, functional or class component for the restore button. If set to `false` the button is not rendered.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### shouldUpdateOnDrag?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the Window content will update during resizing.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### stage?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Controls the state of the Window ([see example]({% slug windowstage_window %})).

The supported values are:
* `DEFAULT`
* `MINIMIZED`
* `FULLSCREEN`


</td>
</tr>
<tr>
<td class="table-cell-name">


#### title?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the title of the Window ([see example]({% slug title_window %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### titleRender?


</td>
<td type class="table-cell-type">


<code>


string | object | Function


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Acccepts a named slot `string`, functional or class component for the title render.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### top?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the top coordinates of the Window.


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


Specifies the width of the Window.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### windowClass?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">





</td>
</tr>
<tr>
<td class="table-cell-name">


#### windowStyle?


</td>
<td type class="table-cell-type">


<code>


object


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">





</td>
</tr>
</tbody>
</table>



