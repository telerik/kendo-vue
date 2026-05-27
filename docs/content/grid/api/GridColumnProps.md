---
title: GridColumnProps
description: "Learn how to build custom functionality when working with the Vue Grid by Kendo UI with the help of the GridColumnProps."
api_reference: true
type: inner_api
slug: api_grid_gridcolumnprops
---

# GridColumnProps
The props that can be assigned to the Grid column.


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


`obsolete` Will be removed in the next major release. Use 'cells' prop instead.


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


Specifies a set of cell components that the Grid will render instead of the built-in cell.

```jsx
<GridColumn :cells="{ data: CustomDataCell }" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### children?


</td>
<td type class="table-cell-type">


<code>


any[] | [GridColumnProps]({% slug api_grid_gridcolumnprops %})[]


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


#### colSpan?


</td>
<td type class="table-cell-type">


<code>


number | (colSpanProps: [GridColSpanProps]({% slug api_grid_gridcolspanprops %})) => number


</code>


</td>
<td class="table-cell-default">


<code>


1


</code>


</td>
<td class="table-cell-comment">


Sets the colSpan of the column which will make the row content span over multiple cells.
As arguments, it takes either a number or a function that returns a number.





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


Defines if the column menu will be shown for the column.
Accepts Boolean, a Vue component, a `render` function, or a slot name


</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnMenuOpened?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines if the column menu is opened.


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


#### editable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines whether the column is editable
([more information and examples]({% slug editing_inline_grid %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### editor?


</td>
<td type class="table-cell-type">


<code>


[GridDataType]({% slug api_grid_griddatatype %})


</code>


</td>
<td class="table-cell-default">


<code>


'text'


</code>


</td>
<td class="table-cell-comment">


Defines the editor type. Used when the column enters the edit mode ([more information and examples]({% slug editing_inline_grid %})).





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


[GridDataType]({% slug api_grid_griddatatype %})


</code>


</td>
<td class="table-cell-default">


<code>


'text'


</code>


</td>
<td class="table-cell-comment">


Defines the filter type that will be rendered inside the filter row.





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


<code>


true


</code>


</td>
<td class="table-cell-comment">


Defines if a filter UI will be rendered for this column.





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


`obsolete` Will be removed in the next major release. Use 'cells.filterCell' prop instead.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### filterTitle?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the title which will be set to the input element in the filter cell.


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


`obsolete` Will be removed in the next major release. Use 'cells.footerCell' prop instead.


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


Sets the custom CSS classes to the column footer cell if there is footer.


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


The format that is applied to the value before it is displayed. Takes the `{0:format}`
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


#### groupable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines if the column can be dragged to the group panel. Defaults to `true`.


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


`obsolete` Will be removed in the next major release. Use 'cells.headerCell' prop instead.


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


#### hidden?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


false


</code>


</td>
<td class="table-cell-comment">


Controls the visibility of the Grid's column.





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


Defines if the column is locked. Locked columns are fixed in place and do not scroll horizontally.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### media?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the screen size condition that needs to be satisfied for a column to remain visible. If you set the hidden property, the behavior of media is overridden.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### menuIcon?


</td>
<td type class="table-cell-type">


<code>


SVGIcon


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default(three vertical dots) column menu icon or the icon set through the ([`columnMenuIcon`]({% slug api_grid_gridprops %}#toc-columnmenuicon)) property.


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


The width of the column (in pixels) below which the user is not able to resize the column through the UI.
Defaults to `10`. It is responsible only for the minimal width that is observed after the manual drag and it is
not responsible for the width of the columns when the browser is resized


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


Determinates the position of the column. Columns with smaller `orderIndex` will appear
before columns with bigger `orderIndex`. Defaults to `0`.


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


#### rowSpannable?


</td>
<td type class="table-cell-type">


<code>


boolean | [GridRowSpannableSettings]({% slug api_grid_gridrowspannablesettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines if the cells of the column should be spanned when their values are the same.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### sortable?


</td>
<td type class="table-cell-type">


<code>


[GridColumnSortSettings]({% slug api_grid_gridcolumnsortsettings %})


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Allows the column headers to be clicked and the `sortChange` event emitted.
You have to handle the `sortChange` event yourself and sort the data.





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


#### type?


</td>
<td type class="table-cell-type">


<code>


"string" | "number" | "boolean" | "date"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The type of the data which will be used when formatting the cell data.
Could be one of the following values 'string' | 'number' | 'boolean' | 'date'.
Defaults to `string`.


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



