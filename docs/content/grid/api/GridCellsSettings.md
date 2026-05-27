---
title: GridCellsSettings
description: "Learn how to build custom functionality when working with the Vue Grid by Kendo UI with the help of the GridCellsSettings."
api_reference: true
type: inner_api
slug: api_grid_gridcellssettings
---

# GridCellsSettings
The settings of the cells prop options.


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


string | Component&lt;[GridCustomCellProps]({% slug api_grid_gridcustomcellprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom component for rendering the data cell in table layout mode.

```vue
<Grid :cells="{ data: MyDataCell }" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### edit?


</td>
<td type class="table-cell-type">


<code>


{ boolean?: string | Component&lt;[GridCustomCellProps]({% slug api_grid_gridcustomcellprops %})&gt;; date?: string | Component&lt;[GridCustomCellProps]({% slug api_grid_gridcustomcellprops %})&gt;; numeric?: string | Component&lt;[GridCustomCellProps]({% slug api_grid_gridcustomcellprops %})&gt;; text?: string | Component&lt;[GridCustomCellProps]({% slug api_grid_gridcustomcellprops %})&gt;; }


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom cell components for edit columns.

```vue
<Grid :cells="{ edit: { text: MyTextEditCell } }" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### filterCell?


</td>
<td type class="table-cell-type">


<code>


string | Component&lt;[GridCustomFilterCellProps]({% slug api_grid_gridcustomfiltercellprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom component for rendering the filter cell.

```vue
<Grid :cells="{ filterCell: MyFilterCell }" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### footerCell?


</td>
<td type class="table-cell-type">


<code>


string | Component&lt;[GridCustomFooterCellProps]({% slug api_grid_gridcustomfootercellprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom component for rendering the footer cell.

```vue
<Grid :cells="{ footerCell: MyFooterCell }" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### group?


</td>
<td type class="table-cell-type">


<code>


{ data?: string | Component&lt;[GridCustomCellProps]({% slug api_grid_gridcustomcellprops %})&gt;; groupFooter?: string | Component&lt;[GridCustomCellProps]({% slug api_grid_gridcustomcellprops %})&gt;; groupHeader?: string | Component&lt;[GridCustomCellProps]({% slug api_grid_gridcustomcellprops %})&gt;; }


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom cell components for group columns.

```vue
<Grid :cells="{ group: { data: MyGroupDataCell } }" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### groupFooter?


</td>
<td type class="table-cell-type">


<code>


string | Component&lt;[GridCustomCellProps]({% slug api_grid_gridcustomcellprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom component for rendering the group footer cell.

```vue
<Grid :cells="{ groupFooter: MyGroupFooterCell }" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### groupHeader?


</td>
<td type class="table-cell-type">


<code>


string | Component&lt;[GridCustomCellProps]({% slug api_grid_gridcustomcellprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom component for rendering the group header cell.

```vue
<Grid :cells="{ groupHeader: MyGroupHeaderCell }" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### headerCell?


</td>
<td type class="table-cell-type">


<code>


string | Component&lt;[GridCustomHeaderCellProps]({% slug api_grid_gridcustomheadercellprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom component for rendering the header cell.

```vue
<Grid :cells="{ headerCell: MyHeaderCell }" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### hierarchy?


</td>
<td type class="table-cell-type">


<code>


{ data?: string | Component&lt;[GridCustomCellProps]({% slug api_grid_gridcustomcellprops %})&gt;; groupFooter?: string | Component&lt;[GridCustomCellProps]({% slug api_grid_gridcustomcellprops %})&gt;; groupHeader?: string | Component&lt;[GridCustomCellProps]({% slug api_grid_gridcustomcellprops %})&gt;; }


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom cell components for hierarchy columns.

```vue
<Grid :cells="{ hierarchy: { data: MyHierarchyDataCell } }" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### pin?


</td>
<td type class="table-cell-type">


<code>


{ data?: string | Component&lt;[GridCustomCellProps]({% slug api_grid_gridcustomcellprops %})&gt;; groupFooter?: string | Component&lt;[GridCustomCellProps]({% slug api_grid_gridcustomcellprops %})&gt;; groupHeader?: string | Component&lt;[GridCustomCellProps]({% slug api_grid_gridcustomcellprops %})&gt;; }


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom cell components for pin columns.

```tsx
import { MyPinDataCell } from './MyPinDataCell';
<Grid cells={{ pin: { data: MyPinDataCell } }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### select?


</td>
<td type class="table-cell-type">


<code>


{ data?: string | Component&lt;[GridCustomCellProps]({% slug api_grid_gridcustomcellprops %})&gt;; groupFooter?: string | Component&lt;[GridCustomCellProps]({% slug api_grid_gridcustomcellprops %})&gt;; groupHeader?: string | Component&lt;[GridCustomCellProps]({% slug api_grid_gridcustomcellprops %})&gt;; }


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom cell components for selection columns.

```vue
<Grid :cells="{ select: { data: MySelectDataCell } }" />
```



</td>
</tr>
</tbody>
</table>



