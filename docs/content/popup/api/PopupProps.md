---
title: PopupProps
description: "Learn how to build custom functionality when working with the Vue Popup by Kendo UI with the help of the PopupProps."
api_reference: true
type: inner_api
slug: api_popup_popupprops
---

# PopupProps
Represents the props of the [KendoVue Popup component]({% slug overview_popup %}).


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


#### anchor


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the element which will be used as an anchor ([see example]({% slug alignmentpositioning_popup %})). The Popup opens next to that element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### anchorAlign?


</td>
<td type class="table-cell-type">


<code>


object


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the pivot point of the anchor ([see example]({% slug alignmentpositioning_popup %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### animate?


</td>
<td type class="table-cell-type">


<code>


boolean | [PopupAnimation]({% slug api_popup_popupanimation %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Controls the Popup animation ([see example]({% slug animations_popup %})). By default, the opening and closing animations are enabled.


</td>
</tr>
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


Defines the 'id' or 'ref' of the container to which the Popup will be appended. Defaults to [`body`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### className?


</td>
<td type class="table-cell-type">


<code>


string | string[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies a list of CSS classes that will be added to the Popup element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### collision?


</td>
<td type class="table-cell-type">


<code>


object


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the collision behavior of the Popup ([see example]({% slug viewportboundarydetection_popup %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### direction?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the direction of the Expand Animation. Defaults to `down`.


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


Specifies the id that will be added to the Popup element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### offset?


</td>
<td type class="table-cell-type">


<code>


[Offset]({% slug api_popup_offset %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the absolute position of the element ([see example]({% slug alignmentpositioning_popup %})). The Popup opens next to that point. The pivot point of the Popup is defined by the `popupAlign` configuration option. The boundary detection is applied by using the window viewport.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClose?


</td>
<td type class="table-cell-type">


<code>


(event: [CloseEvent]({% slug api_popup_closeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires after the Popup is closed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMousedownoutside?


</td>
<td type class="table-cell-type">


<code>


(event: [MouseDownOutsideEvent]({% slug api_popup_mousedownoutsideevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the mousedown event is triggered outside the Popup.

```jsx
<Popup onMousedownoutside={(event) => console.log('onMousedownoutside')} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onOpen?


</td>
<td type class="table-cell-type">


<code>


(event: [OpenEvent]({% slug api_popup_openevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires after the Popup is opened and the opening animation ends.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### popupAlign?


</td>
<td type class="table-cell-type">


<code>


object


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the pivot point of the Popup ([see example]({% slug alignmentpositioning_popup %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### popupClass?


</td>
<td type class="table-cell-type">


<code>


string | string[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies a list of CSS classes that will be added to the internal animated element ([see example]({% slug appearance_popup %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### show?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Controls the Popup visibility ([see example]({% slug hidden_popup %})). Defaults to `false`.


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


Represents the styles that are applied to the Popup.


</td>
</tr>
</tbody>
</table>



