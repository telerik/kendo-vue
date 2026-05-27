---
title: ListBoxProps
description: "Learn how to build custom functionality when working with the Vue Listbox by Kendo UI with the help of the ListBoxProps."
api_reference: true
type: inner_api
slug: api_listbox_listboxprops
---

# ListBoxProps
Represents the props of the [Kendo UI for Vue ListBox component]({% slug overview_listbox %}).


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


#### dataItems


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Set the data of the ListBox.


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


Makes the items of the ListBox draggable.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### item?


</td>
<td type class="table-cell-type">


<code>


string | object | Function


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the component that will be rendered for each item of the data collection.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### keyField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The field that is used for rendering key of the items.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDragleave?


</td>
<td type class="table-cell-type">


<code>


(event: [ListBoxDragLeaveEvent]({% slug api_listbox_listboxdragleaveevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a dragged element or text selection leaves the ListBox element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDragover?


</td>
<td type class="table-cell-type">


<code>


(event: [ListBoxDragEvent]({% slug api_listbox_listboxdragevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when an the user drags over an item from the ListBox. The event contains information for the item that is dragged over.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDragstart?


</td>
<td type class="table-cell-type">


<code>


(event: [ListBoxDragEvent]({% slug api_listbox_listboxdragevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when an the user start to drag an item from the ListBox. The event contains information for the item that is being dragged.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDrop?


</td>
<td type class="table-cell-type">


<code>


(event: [ListBoxDragEvent]({% slug api_listbox_listboxdragevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when an the user drops an item. The event contains information for the drop target item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onItemclick?


</td>
<td type class="table-cell-type">


<code>


(event: [ListBoxItemClickEvent]({% slug api_listbox_listboxitemclickevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when an item from the ListBox is clicked. Contains the clicked item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onKeydown?


</td>
<td type class="table-cell-type">


<code>


(event: [ListBoxKeyDownEvent]({% slug api_listbox_listboxkeydownevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires on keydown over the ListBox list items. It can be use to add keyboard extra keyboard navigation option.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### selectedField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Set the selected field of the ListBox. Based on that value of that field, an item will be selected or not.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### size?


</td>
<td type class="table-cell-type">


<code>


"small" | "medium" | "large"


</code>


</td>
<td class="table-cell-default">


<code>


`undefined`


</code>


</td>
<td class="table-cell-comment">


Configures the `size` of the ListBox.

The available options are:
- small
- medium
- large





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


Sets the `tabIndex` attribute of the ListBox.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### textField


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the data item field that represents the item text. If the data contains only primitive values, do not define it.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### toolbar?


</td>
<td type class="table-cell-type">


<code>


string | object | Function


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Renders a toolbar component next to the ListBox.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### toolbarPosition?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the position of the toolbar of the ListBox if one is set. The ListBox may have no toolbar.
* The possible values are:
* `top`
* `bottom`
* `left`
* `right` (Default)
* `none`


</td>
</tr>
<tr>
<td class="table-cell-name">


#### valueField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The field that be used during form submit. Defaults to the textField if not set.


</td>
</tr>
</tbody>
</table>



