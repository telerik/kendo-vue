---
title: DropDownButtonProps
description: "Learn how to build custom functionality when working with the Vue Buttons by Kendo UI with the help of the DropDownButtonProps."
api_reference: true
type: inner_api
slug: api_buttons_dropdownbuttonprops
---

# DropDownButtonProps



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


#### ariaLabel?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the `ariaLabel` of the main button. By default it is set to the text of the DropDownButton and 'dropdownbutton'.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### buttonClass?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `className` of the main button.


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


Sets the direction of the component.


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


Determines whether the component is disabled ([see example]({% slug disabled_dropdownbutton %})).


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


Configures the `fillMode` of the Button.

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


Defines an icon that will be rendered next to the main button text ([see example]({% slug icons_dropdownbutton %})).


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


Defines an icon with a custom CSS class that will be rendered next to the main button text ([see example]({% slug icons_dropdownbutton %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### imageUrl?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the location of an image that will be displayed next to the main button text ([see example]({% slug icons_dropdownbutton %})).


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


Defines a named slot `string`, functional or class component which is used for rendering items ([see example]({% slug customization_dropdownbutton %}#toc-items-rendering)). The default rendering includes an icon, an image, and text.


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


Fires when a dropdown list button item is about to be rendered. Use it to override the default appearance of the list items.
if `item` prop is not declared, `itemRender` behaves like `item`, for backward compatibility with versions before 4.2.0


</td>
</tr>
<tr>
<td class="table-cell-name">


#### items?


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the list items ([see example]({% slug binding_dropdownbutton %}#toc-arrays-of-objects)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onBlur?


</td>
<td type class="table-cell-type">


<code>


(event: [DropDownButtonBlurEvent]({% slug api_buttons_dropdownbuttonblurevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the component is blurred ([see example]({% slug events_dropdownbutton %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClose?


</td>
<td type class="table-cell-type">


<code>


(event: [DropDownButtonCloseEvent]({% slug api_buttons_dropdownbuttoncloseevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the popup which contains the items is closed ([see example]({% slug events_dropdownbutton %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFocus?


</td>
<td type class="table-cell-type">


<code>


(event: [DropDownButtonFocusEvent]({% slug api_buttons_dropdownbuttonfocusevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the component is focused ([see example]({% slug events_dropdownbutton %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onItemclick?


</td>
<td type class="table-cell-type">


<code>


(event: [DropDownButtonItemClickEvent]({% slug api_buttons_dropdownbuttonitemclickevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when an item is clicked ([see example]({% slug events_dropdownbutton %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onOpen?


</td>
<td type class="table-cell-type">


<code>


(event: [DropDownButtonOpenEvent]({% slug api_buttons_dropdownbuttonopenevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the popup which contains the items is opened ([see example]({% slug events_dropdownbutton %})).


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


Opens the popup of the DropDownButton if set to `true`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### popupSettings?


</td>
<td type class="table-cell-type">


<code>


[ButtonsPopupSettings]({% slug api_buttons_buttonspopupsettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the popup
([see example]({% slug customization_dropdownbutton %}#toc-popup)).


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


Configures the `roundness` of the Button.

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


"small" | "medium" | "xs" | "large"


</code>


</td>
<td class="table-cell-default">


<code>


`undefined`


</code>


</td>
<td class="table-cell-comment">


Configures the `size` of the Button.

The available options are:
- xs
- small
- medium
- large





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


Defines an SVGIcon to be rendered within the DropDownButton.


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


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the text of the main button ([see example]({% slug overview_dropdownbutton %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### textField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the field that will be used for the text of the `items`. `textField` has to be used together with the `items` prop ([see example]({% slug binding_dropdownbutton %}#toc-arrays-of-objects)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### themeColor?


</td>
<td type class="table-cell-type">


<code>


"base" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "error" | "inverse"


</code>


</td>
<td class="table-cell-default">


<code>


`undefined`


</code>


</td>
<td class="table-cell-comment">


Configures the `themeColor` of the Button.

The available options are:
- base
- primary
- secondary
- tertiary
- info
- success
- warning
- error
- inverse





</td>
</tr>
</tbody>
</table>



