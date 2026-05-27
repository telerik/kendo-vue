---
title: BreadcrumbProps
description: "Learn how to build custom functionality when working with the Vue Layout by Kendo UI with the help of the BreadcrumbProps."
api_reference: true
type: inner_api
slug: api_layout_breadcrumbprops
---

# BreadcrumbProps



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


#### ariaLabel?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the label of the Breadcrumb component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### breadcrumbDelimiter?


</td>
<td type class="table-cell-type">


<code>


Component&lt;[BreadcrumbDelimiterProps]({% slug api_layout_breadcrumbdelimiterprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the Breadcrumb delimiter component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### breadcrumbLink?


</td>
<td type class="table-cell-type">


<code>


Component&lt;[BreadcrumbLinkProps]({% slug api_layout_breadcrumblinkprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the Breadcrumb link component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### breadcrumbListItem?


</td>
<td type class="table-cell-type">


<code>


Component&lt;BreadcrumbListItemProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the Breadcrumb list item component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### breadcrumbOrderedList?


</td>
<td type class="table-cell-type">


<code>


Component&lt;BreadcrumbOrderedListProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the Breadcrumb ordered list component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### collapseMode?


</td>
<td type class="table-cell-type">


<code>


"none" | "wrap" | "auto"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the Collapse mode of the Breadcrumb.
The available values are:
- `auto`(default)&mdash;Items are automatically collapsed based on the width of the Breadcrumb. First and last item always remain visible.
- `wrap`&mdash;Items are wrapped on multiple rows when their total width is bigger than the width of the BreadCrumb.
- `none`&mdash;All items are expanded on the same row. This scenario is useful when the Breadcrumb needs to be scrolled.

For more information and example refer to the [Collapse Modes]({% slug collapse_modes_breadcrumb %}) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dataItems


</td>
<td type class="table-cell-type">


<code>


[BreadcrumbDataModel]({% slug api_layout_breadcrumbdatamodel %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the dataItems of the Breadcrumb from type BreadcrumbDataModel.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dir?


</td>
<td type class="table-cell-type">


<code>


"rtl" | "ltr"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The Breadcrumb direction `ltr` or `rtl`.


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


Determines the `disabled` mode of the Breadcrumb. If `true`, the component is disabled.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### iconField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the `icon` field. Used for setting the `icon` inside the BreadcrumbLink component.


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


Sets the `id` property of the top `div` element of the Breadcrumb.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onKeydown?


</td>
<td type class="table-cell-type">


<code>


(event: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered on onKeydown event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSelect?


</td>
<td type class="table-cell-type">


<code>


(event: [BreadcrumbLinkMouseEvent]({% slug api_layout_breadcrumblinkmouseevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the `onSelect` event. Triggered after click on the Breadcrumb.


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


<code>


`undefined`


</code>


</td>
<td class="table-cell-comment">


Specifies the padding of all Breadcrumb elements.

The possible values are:
* `small`
* `medium`
* `large`





</td>
</tr>
<tr>
<td class="table-cell-name">


#### svgIconField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the `svgIcon` field. Used for setting the `svgIcon` inside the BreadcrumbLink component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### tabIndex?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `tabIndex` attribute to the Breadcrumb.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### textField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the `text` field. Used for setting the `text` inside the BreadcrumbLink component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### valueField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the `value` field. Used for setting the key of the BreadcrumbListItem component and the `id` of the BreadcrumbLink component.


</td>
</tr>
</tbody>
</table>



