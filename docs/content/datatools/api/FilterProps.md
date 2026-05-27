---
title: FilterProps
description: "Learn how to build custom functionality when working with the Vue Datatools by Kendo UI with the help of the FilterProps."
api_reference: true
type: inner_api
slug: api_data-tools_filterprops
---

# FilterProps
The props of the Filter component.


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


#### defaultGroupFilter?


</td>
<td type class="table-cell-type">


<code>


CompositeFilterDescriptor


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The initial composite filter descriptor which will be used when a new group is created.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### fields


</td>
<td type class="table-cell-type">


<code>


[FieldSettings]({% slug api_data-tools_fieldsettings %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The fields settings of the Filter.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: [FilterChangeEvent]({% slug api_data-tools_filterchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The Filter onChange event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### upperToolbarAriaLabel?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the `aria-label` attribute of the upper-most Toolbar that is part of the Filter component .


</td>
</tr>
<tr>
<td class="table-cell-name">


#### value


</td>
<td type class="table-cell-type">


<code>


CompositeFilterDescriptor


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The composite filter descriptor value.


</td>
</tr>
</tbody>
</table>



