---
title: WorkbookOptions
description: "Learn how to build custom functionality when working with the Vue Excel by Kendo UI with the help of the WorkbookOptions."
api_reference: true
type: inner_api
slug: api_excel-export_workbookoptions
---

# WorkbookOptions
The workbook options.


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


#### creator?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The creator of the workbook.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### date?


</td>
<td type class="table-cell-type">


<code>


Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The date when the workbook is created. The default value is new Date().


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rtl?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the workbook sheets should use right to left direction.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### sheets?


</td>
<td type class="table-cell-type">


<code>


[WorkbookSheet]({% slug api_excel-export_workbooksheet %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The sheets of the workbook. Every sheet represents a page from the final Excel file.


</td>
</tr>
</tbody>
</table>



