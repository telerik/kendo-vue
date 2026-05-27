---
title: GridRowsSettings
description: "Learn how to build custom functionality when working with the Vue Grid by Kendo UI with the help of the GridRowsSettings."
api_reference: true
type: inner_api
slug: api_grid_gridrowssettings
---

# GridRowsSettings
The settings of the rows prop options.


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


#### data?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom component for rendering data rows.
Falls back to the default when omitted.

```vue
<Grid :rows="{ data: 'MyRow' }" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### groupFooter?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom component for rendering group footer rows.
Falls back to `rows.groupFooter` (then default) when omitted.

```vue
<Grid :rows="{ groupFooter: 'MyGroupFooter' }" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### groupHeader?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom component for rendering group header rows.
Falls back to the default when omitted.

```vue
<Grid :rows="{ groupHeader: 'MyGroupHeader' }" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### pinnedData?


</td>
<td type class="table-cell-type">


<code>


string | Component&lt;[GridCustomRowProps]({% slug api_grid_gridcustomrowprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom component for rendering pinned data rows.
Falls back to `rows.data` (then default) when omitted.

```vue
<Grid :rows="{ pinnedData: 'MyPinnedRow' }" />
```



</td>
</tr>
</tbody>
</table>



