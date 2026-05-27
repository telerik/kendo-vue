---
title: PagerPageSizesProps
description: "Learn how to build custom functionality when working with the Vue Datatools by Kendo UI with the help of the PagerPageSizesProps."
api_reference: true
type: inner_api
slug: api_data-tools_pagerpagesizesprops
---

# PagerPageSizesProps



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


#### messagesMap?


</td>
<td type class="table-cell-type">


<code>


(messageKey: string) => { defaultMessage: string; messageKey: string; }


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A map with the messages.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onPagechange


</td>
<td type class="table-cell-type">


<code>


(event: { skip: number; take: number; }, e: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The method that will be called when the page size is changed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### pageSize


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The page size.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### pageSizes


</td>
<td type class="table-cell-type">


<code>


boolean | number[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The page sizes.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### size?


</td>
<td type class="table-cell-type">


<code>


"small" | "medium" | "large"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">





</td>
</tr>
<tr>
<td class="table-cell-name">


#### value?


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The page size selected value.


</td>
</tr>
</tbody>
</table>



