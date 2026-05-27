---
title: TreeListColumnProps
description: "Learn how to build custom functionality when working with the Vue Treelist by Kendo UI with the help of the TreeListColumnProps."
api_reference: true
type: inner_api
slug: api_treelist_treelistcolumnprops
---

# TreeListColumnProps
The props of the columns of the TreeList component.


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


#### cell?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the component that will be rendered as a cell. If not set, a `TreeListCell` will be rendered by default.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### children?


</td>
<td type class="table-cell-type">


<code>


[TreeListColumnProps]({% slug api_treelist_treelistcolumnprops %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A collection of child columns.


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


Sets the custom CSS classes to the column cells.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnMenu?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The column menu component. If set to `true`, the column menu will be rendered.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### editCell?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the component that will be rendered as an edit cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### expandable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true`, the column will render the icons that are used for expanding and collapsing child rows.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### field?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The field to which the column is bound.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### filter?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


**Deprecated**. Use `filterCell` prop instead.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### filterCell?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the component that will be rendered as a filter cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### footerCell?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the component that will be rendered as a footer cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### format?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The format that is applied to the value before it is displayed.
Takes the `{0:format}` form where `format` is a standard number format, a custom number format,
a standard date format, or a custom date format. For more information on the supported date and number formats,
refer to the [kendo-intl](https://github.com/telerik/kendo-intl/blob/develop/docs/index.md) documentation.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### headerCell?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the component that will be rendered as a header cell.
If not set, a `TreeListHeaderCell` will be rendered by default.


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


Sets the custom CSS classes to the column header cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### headerSelectionValue?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines if the header selection checkbox is checked.


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


The column identifier used to distinguish columns for example in multi column header scenarios with resize and keyboard navigation.
Also used for unique key for rendering the component cells.
If not set, the component will generate unique `id` automatically.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### locked?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines if the column is locked (frozen or sticky).
Locked columns are the columns that are visible at all times while the user scrolls the component horizontally.
Defaults to `false`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### minResizableWidth?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The width of the column (in pixels) below which the user is not able to resize the column through the UI. Defaults to `10`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### orderIndex?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determinates the position of the column.
Columns with smaller `orderIndex` will appear before columns with bigger `orderIndex`.
Defaults to `0`.


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


Indicates whether the column is reorderable.


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


Indicates whether the column is resizable.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### sortable?


</td>
<td type class="table-cell-type">


<code>


ColumnSortSettings


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Allows the column headers to be clicked and the `sortChange` event emitted.
You have to handle the `sortChange` event yourself and sort the data.
Defaults to `true`.


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


The title of the column.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### width?


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The width of the column (in pixels).


</td>
</tr>
</tbody>
</table>



