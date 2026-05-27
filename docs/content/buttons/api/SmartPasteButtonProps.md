---
title: SmartPasteButtonProps
description: "Learn how to build custom functionality when working with the Vue Buttons by Kendo UI with the help of the SmartPasteButtonProps."
api_reference: true
type: inner_api
slug: api_buttons_smartpastebuttonprops
---

# SmartPasteButtonProps
Represents the props of the SmartPasteButton component.


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


Sets the `accessKey` property of the Button.


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


Sets the aria-label of the Button.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### ariaPressed?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `aria-pressed` attribute of the Button.


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


Sets the direction of the Button.


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


Specifies if the Button is disabled ([see example]({% slug disabled_button %})). Defaults to `false`.


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


#### formFields?


</td>
<td type class="table-cell-type">


<code>


[SmartPasteFormField]({% slug api_buttons_smartpasteformfield %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the form fields for smart paste.
When provided, the extracted form configuration is merged with these custom fields.


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


Defines the name for an existing icon in a Kendo UI for Vue theme ([see example]({% slug icons_button %})). The icon is rendered inside the Button by a `span.k-icon` element.


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


Defines a CSS class&mdash;or multiple classes separated by spaces&mdash;which are applied to a `span` element inside the Button ([see example]({% slug icons_button %})). Allows the usage of custom icons.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### iconSize?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


defines the size of the SVG icon displayed inside the Button.


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


Sets the `id` property of the Button.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### imageAlt?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the alternative text of the image rendered inside the Button component.


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


Defines a URL which is used as an `img` element inside the Button ([see example]({% slug icons_button %})). The URL can be relative or absolute. If relative, it is evaluated with relation to the URL of the web page.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### role?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `role` attribute of the Button.


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


#### selected?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the selected state of the Button. Can be used for controlled mode.


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


Defines an SVGIcon to be rendered within the button.


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


Sets the `tabIndex` property of the Button.


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
<tr>
<td class="table-cell-name">


#### title?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `title` HTML attribute of the Button.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### togglable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Provides visual styling that indicates if the Button is selected ([see example]({% slug toggleable_button %})). Defaults to `false`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### type?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `type` property of the Button.


</td>
</tr>
</tbody>
</table>



