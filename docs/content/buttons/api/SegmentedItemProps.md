---
title: SegmentedItemProps
description: "Learn how to build custom functionality when working with the Vue Buttons by Kendo UI with the help of the SegmentedItemProps."
api_reference: true
type: inner_api
slug: api_buttons_segmenteditemprops
---

# SegmentedItemProps
Represents the properties of a single item within the SegmentedControl component.


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


#### aria-label?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `aria-label` HTML attribute of the item button.


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


Represents the `dir` HTML attribute of the item button, controlling text directionality.


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


Specifies whether the item is disabled.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### iconClassName?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


CSS class name applied to the icon element only when the item is selected.
Has no effect when `itemTemplate` is provided.

```vue
<SegmentedControl :items="[{ value: 'opt1', text: 'Bold', svgIcon: boldIcon, iconClassName: 'active-icon' }]" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onBlur?


</td>
<td type class="table-cell-type">


<code>


(e: FocusEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Event handler fired when the item button loses focus.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClick?


</td>
<td type class="table-cell-type">


<code>


(e: MouseEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Event handler fired when the item button is clicked.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFocus?


</td>
<td type class="table-cell-type">


<code>


(e: FocusEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Event handler fired when the item button receives focus.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseEnter?


</td>
<td type class="table-cell-type">


<code>


(e: MouseEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Event handler fired when the mouse pointer enters the item button.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseLeave?


</td>
<td type class="table-cell-type">


<code>


(e: MouseEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Event handler fired when the mouse pointer leaves the item button.


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


Sets an SVG icon to render inside the item using an `Icon` element.
Only rendered when `itemTemplate` is not provided.

```vue
<SegmentedControl :items="[{ value: 'opt1', text: 'Bold', svgIcon: boldIcon }]" />
```



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


Specifies the text label of the SegmentedItem.
Rendered inside a `<span>` element. Only rendered when `itemTemplate` is not provided.

```vue
<SegmentedControl :items="[{ value: 'opt1', text: 'Option 1' }]" />
```



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


Sets the `title` HTML attribute of the item button.

```vue
<SegmentedControl :items="[{ value: 'opt1', title: 'Option 1 tooltip' }]" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### type?


</td>
<td type class="table-cell-type">


<code>


"button" | "reset" | "submit"


</code>


</td>
<td class="table-cell-default">


<code>


"button"


</code>


</td>
<td class="table-cell-comment">


Specifies the `type` HTML attribute of the item button.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### value


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The unique identifier for the SegmentedItem. Used to match against the SegmentedControl's `value` to determine selection.

```vue
<SegmentedControl :items="[{ value: 'option1', text: 'Option 1' }]" />
```



</td>
</tr>
</tbody>
</table>



