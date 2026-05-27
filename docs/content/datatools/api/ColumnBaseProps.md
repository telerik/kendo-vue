---
title: ColumnBaseProps
description: "Learn how to build custom functionality when working with the Vue Datatools by Kendo UI with the help of the ColumnBaseProps."
api_reference: true
type: inner_api
slug: api_data-tools_columnbaseprops
---

# ColumnBaseProps
Base interface for column props


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


Defines the component that will be rendered as a cell.
If not set, a `Cell` will be rendered by default.


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


[ColumnSortSettings]({% slug api_data-tools_columnsortsettings %})


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



