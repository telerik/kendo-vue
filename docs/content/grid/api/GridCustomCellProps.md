---
title: GridCustomCellProps
description: "Learn how to build custom functionality when working with the Vue Grid by Kendo UI with the help of the GridCustomCellProps."
api_reference: true
type: inner_api
slug: api_grid_gridcustomcellprops
---

# GridCustomCellProps
The properties of the default Grid Cell.


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


#### ariaColumnIndex


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The index to be applied to the `aria-colindex` attribute.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### cells?


</td>
<td type class="table-cell-type">


<code>


[GridCellsSettings]({% slug api_grid_gridcellssettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines a set of custom cell components that the Grid will render instead of the default cell.


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


The custom CSS classes of the cells.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### colSpan?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The column span of the cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnIndex?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The index of all rendered columns.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnsCount?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The number of rendered columns in the Grid.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnType?


</td>
<td type class="table-cell-type">


<code>


[GridColumnType]({% slug api_grid_gridcolumntype %})


</code>


</td>
<td class="table-cell-default">


<code>


"data"


</code>


</td>
<td class="table-cell-comment">


Sets the type of the column and renders a dedicated column for interaction.

```jsx
{ columnType: "checkbox" }
```






</td>
</tr>
<tr>
<td class="table-cell-name">


#### dataIndex?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">





</td>
</tr>
<tr>
<td class="table-cell-name">


#### dataItem


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data object that represents the current row.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### editor?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The type of the editor which will be used when the cell is in edit mode.
Could be one of the following values 'text' | 'numeric' | 'boolean' | 'date'.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### expanded?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The expanded value of the cell when hierarchy or grouping are used.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### field


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The field to which the cell is bound ([see example]({% slug sorting_grid %})).


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


The format that is applied to the value before the value is displayed. Takes the `{0:format}`
form where `format` is any of the following:
* A standard number format
* A custom number format
* A standard date format
* A custom date format

For more information on the supported date and number formats,
refer to the [kendo-intl](https://github.com/telerik/kendo-intl/blob/develop/docs/index.md) documentation.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isHighlighted


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the cell is highlighted.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isRtl


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the cell is in rtl direction.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isSelected


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the cell is selected.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### key?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The field to which the cell is bound ([see example]({% slug sorting_grid %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onAdd?


</td>
<td type class="table-cell-type">


<code>


(event: { dataItem: any; }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event that is fired when the cell is about to be added.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onCancel?


</td>
<td type class="table-cell-type">


<code>


(event: { dataItem: any; }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event that is fired when the cell is about to be canceled.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onCellclick?


</td>
<td type class="table-cell-type">


<code>


(event: { dataItem: any; field: string; }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event that is fired when the cell is clicked.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onCellkeydown?


</td>
<td type class="table-cell-type">


<code>


(event: { dataItem: any; event: any; field: string; }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event that is fired when the keydown event of the cell is triggered.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: { dataItem: any; event: any; field?: string; value?: any; }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event that is fired when the cell value is changed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onEdit?


</td>
<td type class="table-cell-type">


<code>


(event: { dataItem: any; }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event that is fired when the cell is about to be edited.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### readFormat?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data Item read format.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### remove?


</td>
<td type class="table-cell-type">


<code>


(event: { dataItem: any; }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event that is fired when the cell is about to be removed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### render?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The method for rendering the cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rowType?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The type of the row.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### save?


</td>
<td type class="table-cell-type">


<code>


(event: { dataItem: any; }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event that is fired when the cell is about to be saved.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### selectionchange?


</td>
<td type class="table-cell-type">


<code>


(event: any, dataItem: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event that is fired when the cell is selected.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### td2Props?


</td>
<td type class="table-cell-type">


<code>


TdHTMLAttributes


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props and attributes that are applied to the second td. Such element is
rendered in very rare cases when we have grouping and sticky columns.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### tdProps?


</td>
<td type class="table-cell-type">


<code>


TdHTMLAttributes


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props and attributes that are applied to the td element by default.


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


The type of the data which will be used when formatting the cell data.
Could be one of the following values 'text' | 'numeric' | 'boolean' | 'date'.


</td>
</tr>
</tbody>
</table>



