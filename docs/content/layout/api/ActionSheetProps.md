---
title: ActionSheetProps
description: "Learn how to build custom functionality when working with the Vue Layout by Kendo UI with the help of the ActionSheetProps."
api_reference: true
type: inner_api
slug: api_layout_actionsheetprops
---

# ActionSheetProps
The props of the ActionSheet component.


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


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Controls the popup animation. By default, the animation is enabled.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### animationDuration?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the duration of the transition for the entering and closing Animation. Defaults to `300ms`.


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


The CSS classes that will be rendered on the inner ActionSheet element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### content?


</td>
<td type class="table-cell-type">


<code>


string | Function


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the content content of the ActionSheet either as string that is pointing to a slot template of as render function.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### contentClassName?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The CSS classes that will be rendered on the DOM element that wraps the content section of the ActionSheet element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### expand?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the state of the ActionSheet.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### footer?


</td>
<td type class="table-cell-type">


<code>


string | Function


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the footer content of the ActionSheet either as string that is pointing to a slot template of as render function.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### footerClassName?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The CSS classes that will be rendered on the DOM element that wraps the footer section of the ActionSheet element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### header?


</td>
<td type class="table-cell-type">


<code>


string | Function


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the header content of the ActionSheet either as string that is pointing to a slot template of as render function.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### headerClassName?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The CSS classes that will be rendered on the DOM element that wraps the header section of the ActionSheet element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### headerStyle?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The custom Styles that will be applied on the DOM element that wraps the header section of the ActionSheet element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### item?


</td>
<td type class="table-cell-type">


<code>


string | Function


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the item content of the ActionSheet either as string that is pointing to a slot template of as render function.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### items?


</td>
<td type class="table-cell-type">


<code>


[ActionSheetItemProps]({% slug api_layout_actionsheetitemprops %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The collection of items that will be rendered in the ActionSheet.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### navigatable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the ActionSheet can be navigatable with keyboard.
Defaults to `true`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### navigatableElements?


</td>
<td type class="table-cell-type">


<code>


string[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the selectors of the navigatable elements inside the templates of the ActionSheet.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClose?


</td>
<td type class="table-cell-type">


<code>


(event: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the modal overlay is clicked.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onItemselect?


</td>
<td type class="table-cell-type">


<code>


(event: { item?: any; syntheticEvent: any; title?: string; }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when an ActionSheet item is clicked.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### subTitle?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the text that is rendered under the title.


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


Specifies the `tabIndex` of the ActionSheet.


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


Specifies the text that is rendered as title.


</td>
</tr>
</tbody>
</table>



