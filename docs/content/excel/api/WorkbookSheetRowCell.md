---
title: WorkbookSheetRowCell
description: "Learn how to build custom functionality when working with the Vue Excel by Kendo UI with the help of the WorkbookSheetRowCell."
api_reference: true
type: inner_api
slug: api_excel-export_workbooksheetrowcell
---

# WorkbookSheetRowCell
The sheets cell configuration.


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


#### background?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the background color of the cell. Supports hex CSS-like values that start with "#" e.g. "#ff00ff".


</td>
</tr>
<tr>
<td class="table-cell-name">


#### bold?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Setting it to true makes the cell value bold.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### borderBottom?


</td>
<td type class="table-cell-type">


<code>


[WorkbookSheetRowCellBorderBottom]({% slug api_excel-export_workbooksheetrowcellborderbottom %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The style information for the bottom border of the cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### borderLeft?


</td>
<td type class="table-cell-type">


<code>


[WorkbookSheetRowCellBorderLeft]({% slug api_excel-export_workbooksheetrowcellborderleft %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The style information for the left border of the cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### borderRight?


</td>
<td type class="table-cell-type">


<code>


[WorkbookSheetRowCellBorderRight]({% slug api_excel-export_workbooksheetrowcellborderright %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The style information for the right border of the cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### borderTop?


</td>
<td type class="table-cell-type">


<code>


[WorkbookSheetRowCellBorderTop]({% slug api_excel-export_workbooksheetrowcellbordertop %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The style information for the top border of the cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### color?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The text color of the cell. Supports hex CSS-like values that start with "#" e.g. "#ff00ff".


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


Sets the number of columns that a cell occupies.


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


Specifies if the cell is disabled.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### fontFamily?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the font used to display the cell value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### fontSize?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the font size in pixels.


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


Sets the format that Excel uses to display the cell value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### formula?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the formula that Excel uses to compute and display the cell value


</td>
</tr>
<tr>
<td class="table-cell-name">


#### index?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The zero-based index of the cell in the row. Records missing an index will be placed in the first available cell on the row.
> Mixing indexed with non-indexed cells might yield invalid results. If you want to use both, place the indexed cells at the end of the array.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### italic?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Setting it to true italicizes the cell value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rowSpan?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the number of rows that a cell occupies.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### textAlign?


</td>
<td type class="table-cell-type">


<code>


"left" | "center" | "right"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the horizontal alignment of the cell value. Supported values are `"left"`, `"center"` and `"right"`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### underline?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Setting it to true underlines the cell value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### value?


</td>
<td type class="table-cell-type">


<code>


string | number | boolean | Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The value of the cell. Numbers and dates will be formatted as strings. String values are HTML encoded.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### verticalAlign?


</td>
<td type class="table-cell-type">


<code>


"center" | "top" | "bottom"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the vertical alignment of the cell value. Supported values are `"top"`, `"center"` and `"bottom"`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### wrap?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Setting it to true wraps the cell value.


</td>
</tr>
</tbody>
</table>



