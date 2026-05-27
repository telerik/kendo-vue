---
title: TreeListProps
description: "Learn how to build custom functionality when working with the Vue Treelist by Kendo UI with the help of the TreeListProps."
api_reference: true
type: inner_api
slug: api_treelist_treelistprops
---

# TreeListProps
Represents the props of the [Kendo UI for Vue TreeList component]({% slug get_started_treelist %}).


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


#### cellRender?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a cell is about to be rendered. Useful for overriding the default rendering of the cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### columns?


</td>
<td type class="table-cell-type">


<code>


[TreeListColumnProps]({% slug api_treelist_treelistcolumnprops %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A collection of `TreeListColumnProps` for creating columns.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnVirtualization?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the virtualization of the columns
([see example]({% slug virtual_columns_treelist %})).
If enabled, the columns outside the viewport are not rendered.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dataItemKey?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the TreeList row key prop to the value of this field in the dataItem.
If not set, the dataItem index will be used for the row key, which might lead to row not updated during paging or scrolling.


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


Sets the data of the TreeList.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### editField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the name of the field which will provide a Boolean representation of the edit state of the current item
([more information and examples]({% slug editing_inline_treelist %})).


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


Specifies the name of the field which will provide a Boolean representation of the expanded state of the item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### filter?


</td>
<td type class="table-cell-type">


<code>


FilterDescriptor[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The descriptors by which the data is filtered ([more information and examples]({% slug filtering_treelist %})).
This affects the values and buttons in the `FilterRow` of the TreeList.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### filterable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the filtering of the columns with their `field` option set


</td>
</tr>
<tr>
<td class="table-cell-name">


#### filterOperators?


</td>
<td type class="table-cell-type">


<code>


FilterOperators


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The filter operators for the filters.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### filterRow?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set, it will be rendered instead of the default `FilterRow` TreeList component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### headerCellRender?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a header cell is about to be rendered. Useful for overriding the default rendering of the header cell.


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


If set to `true`, the user can use dedicated shortcuts to interact with the TreeList.
By default, navigation is disabled and the TreeList content is accessible in the normal tab sequence.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### noRecords?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the component that will be rendered when the `data` property of the TreeList is empty or undefined.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onColumnreorder?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeListColumnReorderEvent]({% slug api_treelist_treelistcolumnreorderevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the columns are reordered.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDatastatechange?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeListDataStateChangeEvent]({% slug api_treelist_treelistdatastatechangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the data state of the TreeList is changed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onExpandchange?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeListExpandChangeEvent]({% slug api_treelist_treelistexpandchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user clicks on the expand or collapse icon of a row.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFilterchange?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeListFilterChangeEvent]({% slug api_treelist_treelistfilterchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the TreeList filter is modified through the UI
([more information and examples]({% slug filtering_treelist %})).
You have to handle the event yourself and filter the data.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onItemchange?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeListItemChangeEvent]({% slug api_treelist_treelistitemchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user changes the values of the item.
The event is not debounced and fires on every `onChange` event of the input in the current `EditCell`
([more information and examples]({% slug editing_inline_treelist %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onKeyDown?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeListKeyDownEvent]({% slug api_treelist_treelistkeydownevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user press keyboard key.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onPagechange?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeListPageChangeEvent]({% slug api_treelist_treelistpagechangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the page of the TreeList is changed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRowblur?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeListRowEvent]({% slug api_treelist_treelistrowevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when blur event is triggered on a row.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRowclick?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeListRowClickEvent]({% slug api_treelist_treelistrowclickevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user clicks a row.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRowcontextmenu?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeListRowContextMenuEvent]({% slug api_treelist_treelistrowcontextmenuevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user trigger the context menu of row.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRowfocus?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeListRowEvent]({% slug api_treelist_treelistrowevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when focus event is triggered on a row.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSelectionchange?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeListSelectionChangeEvent]({% slug api_treelist_treelistselectionchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user tries to select or deselect a row or cell.
([more information and example]({% slug selection_treelist %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSortchange?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeListSortChangeEvent]({% slug api_treelist_treelistsortchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the sorting of the TreeList is changed ([see example]({% slug sorting_treelist %})).
You have to handle the event yourself and sort the data.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### pageable?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the pager of the TreeList.

The available options are:
- `buttonCount: Number`&mdash;Sets the maximum numeric buttons count before the buttons are collapsed.
- `info: Boolean`&mdash;Toggles the information about the current page and the total number of records.
- `type: PagerType`&mdash;Accepts the `numeric` (buttons with numbers)
and `input` (input for typing the page number) values.
- `pageSizes: Boolean` or `Array<number>`&mdash;Shows a menu for selecting the page size.
- `previousNext: Boolean`&mdash;Toggles the **Previous** and **Next** buttons.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### pager?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The pager component that the TreeList will render.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### reordableRows?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true`, the rows of the TreeList can be reordered.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### reorderable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true`, the user can reorder columns by dragging their header cells.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rowClass?


</td>
<td type class="table-cell-type">


<code>


Function


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A function that returns a custom class applied to the row.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### rowHeight?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the row height and implements equal heights for all rows.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rowRender?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a row is about to be rendered. Useful for overriding the default rendering of the row.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### scrollable?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the scroll mode of the TreeList.

The available options are:
- `none`&mdash;Renders no scrollbar.
- `scrollable`&mdash;Represents the default scroll mode of the TreeList.
Requires you to set the `overflow` and `height` (for vertical scrolling),
or `width` (for horizontal scrolling) styles.
- `virtual`&mdash;Enables the vertical virtual scrolling of the TreeList.
Requires you to set the `overflow` and `height` styles and `rowHeight` prop of the TreeList.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### selectable?


</td>
<td type class="table-cell-type">


<code>


[TreeListSelectableSettings]({% slug api_treelist_treelistselectablesettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The TreeList selectable settings.


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


Specifies the name of the field which will provide a Boolean representation of the selected state of the item
([see example]({% slug selection_treelist %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### size?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


`undefined`


</code>


</td>
<td class="table-cell-comment">


Configures the `size` of the TreeList.

The available options are:
- small
- medium





</td>
</tr>
<tr>
<td class="table-cell-name">


#### skip?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The number of records that will be skipped.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### sort?


</td>
<td type class="table-cell-type">


<code>


SortDescriptor[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The descriptors by which the data is sorted. Applies the sorting styles and buttons to the affected columns.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### sortable?


</td>
<td type class="table-cell-type">


<code>


SortSettings


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables sorting ([see example]({% slug sorting_treelist %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### subItemsField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the name of the field which will provide an array representation of the item subitems.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### tableProps?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A props object that will be passed to the underlying HTML table.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### take?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The number of records that will be taken.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### toolbar?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the TreeList toolbar component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### wrapperStyle?


</td>
<td type class="table-cell-type">


<code>


Object


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The styles of the wrapper component.


</td>
</tr>
</tbody>
</table>



