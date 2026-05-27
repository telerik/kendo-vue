---
title: Workbook
description: "Learn how to build custom functionality when working with the Vue Excel by Kendo UI with the help of the Workbook."
api_reference: true
type: inner_api
slug: api_excel-export_workbook
---

# Workbook
An ooxml workbook.


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


#### options


</td>
<td type class="table-cell-type">


<code>


[WorkbookOptions]({% slug api_excel-export_workbookoptions %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The workbook options.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### sheets


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



## Constructors

### Workbook
<code>


(options?: [WorkbookOptions]({% slug api_excel-export_workbookoptions %}))


</code>


#### Parameters
##### options?
<code>


[WorkbookOptions]({% slug api_excel-export_workbookoptions %})


</code>




## Methods

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### toDataURL


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Creates an Excel file that represents the current workbook and returns a Promise which will be resolved with a data URL.





</td>
</tr>

<tr class="nested-table">
<td>
<table class="api-table api-table-returns">
<thead class="api-table-returns-head">
<tr>
<th class="th-type">Returns</th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td type>


<code>


Promise&lt;string&gt;


</code>


</td>
<td>


- The Promise which will be resolve with the file data URI.


</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>



