---
title: TreeViewProps
description: "Learn how to build custom functionality when working with the Vue Treeview by Kendo UI with the help of the TreeViewProps."
api_reference: true
type: inner_api
slug: api_treeview_treeviewprops
---

# TreeViewProps
Represents the props of the [Kendo UI for Vue TreeView component]({% slug overview_treeview %}).


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


#### animate?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Controls the animation. By default, the expand and collapse animations are enabled.


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


Defines a string value that labels the TreeView ([more on accessibility by the TreeView]({% slug accessibility_treeview %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### ariaLabelledby?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Identifies the element or elements which will label the TreeView ([more on accessibility by the TreeView]({% slug accessibility_treeview %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### ariaMultiSelectable?


</td>
<td type class="table-cell-type">


<code>


string | boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates that the user can select more than one TreeView items. If the TreeView is in a multiple selection mode, set the `aria-multiselectable` prop to `true` ([more on accessibility by the TreeView]({% slug accessibility_treeview %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### checkboxes?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Controls the rendering of checkboxes. By default, the checkboxes are not rendered ([see example]({% slug checkboxes_treeview %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### checkField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the name of the field which will provide a Boolean representation for the checked state of the item. Defaults to `checked`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### checkIndeterminateField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the name of the field which will provide a Boolean representation for the check indeterminate state of the item. Defaults to `checkIndeterminate`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### childrenField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the name of the field which will provide an array representation of the item children.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dataItems?


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the data of the TreeView ([more information and examples]({% slug databinding_treeview %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### disableField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the name of the field which will provide a Boolean representation for the disabled state of the item. Defaults to `disabled`.


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


Controls the dispatching of the `drag` events. By default, the `drag` events are not dispatched ([see example]({% slug dragdrop_treeview %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### expandField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the name of the field which will provide a Boolean representation for the expanded state of the item. Defaults to `expanded`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### expandIcons?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Controls the rendering of the expand (collapse) icons. By default, the icons are not rendered ([see example]({% slug expansion_ways_treeview %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### focusIdField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The TreeView has a built-in implementation of focusing and keyboard navigation. By default, the component uses hierarchical indices to uniquely match the focused item. You can use the `focusIdField` prop for specifying the name of the field which will uniquely describe an item as an alternative to its hierarchical index.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### getFocusHierarchicalIndex?


</td>
<td type class="table-cell-type">


<code>


(itemId: any) => string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


When `focusIdField` is set, the TreeView executes a depth-first search on the data to find the currently focused item. The `getFocusHierarchicalIndex` prop specifies the function that will be used as an alternative to the default search algorithm.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### hasChildrenField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the name of the field which indicates to the TreeView that an item has children even if the children are not initially passed. Used for implementing the load-on-demand feature ([see example]({% slug databinding_treeview %}#toc-loading-data-on-demand)). Defaults to `hasChildren`.


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


Controls the unique id of the TreeView component.


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


Defines the component that will be used for rendering each of the TreeView items ([see example]({% slug rendering_treeview %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onCheckChange?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeViewCheckChangeEvent]({% slug api_treeview_treeviewcheckchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a checkbox is clicked or when `Space` is pressed on a focused item ([see example]({% slug checkboxes_treeview %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onExpandChange?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeViewExpandChangeEvent]({% slug api_treeview_treeviewexpandchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the expanding or collapsing of an item is requested ([see example]({% slug expansion_ways_treeview %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onItemClick?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeViewItemClickEvent]({% slug api_treeview_treeviewitemclickevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when an item is clicked or when `Enter` is pressed on a focused item ([see example]({% slug selection_ways_treeview %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onItemDragEnd?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeViewItemDragEndEvent]({% slug api_treeview_treeviewitemdragendevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a dragged item is dropped ([see example]({% slug dragdrop_treeview %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onItemDragOver?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeViewItemDragOverEvent]({% slug api_treeview_treeviewitemdragoverevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a dragged item changes its position ([see example]({% slug dragdrop_treeview %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onItemDragStart?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeViewItemDragStartEvent]({% slug api_treeview_treeviewitemdragstartevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the dragging of an item has started.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### selectField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the name of the field which will provide a Boolean representation for the selected state of the item. Defaults to `selected`.


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


Configures the `size` of the TreeView.

The available options are:
- small
- medium
- large
- undefined&mdash;Does not set a size `className`.





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


Sets a tabIndex of the TreeView DOM element.


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


Specifies the name of the field which will provide a text representation for the item. Defaults to `text`.


</td>
</tr>
</tbody>
</table>



