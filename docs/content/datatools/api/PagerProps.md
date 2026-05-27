---
title: PagerProps
description: "Learn how to build custom functionality when working with the Vue Datatools by Kendo UI with the help of the PagerProps."
api_reference: true
type: inner_api
slug: api_data-tools_pagerprops
---

# PagerProps
The pager settings of the Grid ([see example]({% slug paging_grid %})).

```tsx-no-run

<Grid :pageable="{buttonCount: 2,info: false}">
</Grid>
```



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


#### ariaControls?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the `id` of the element that is being controlled by the pager - for example a Grid.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### buttonCount?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the maximum numeric buttons count before the buttons are collapsed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### info?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Toggles the information about the current page and the total number of records.


</td>
</tr>
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


#### onPagechange?


</td>
<td type class="table-cell-type">


<code>


(event: any) => any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event that is emited when the page is changed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onPagesizechange?


</td>
<td type class="table-cell-type">


<code>


(event: any) => any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event that is emited when the page size is changed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### pagerRender?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">





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





</td>
</tr>
<tr>
<td class="table-cell-name">


#### pageSizes?


</td>
<td type class="table-cell-type">


<code>


boolean | number[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Shows a menu for selecting the page size.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### pageSizeValue?


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the selected value of the page size Dropdownlist. It is useful when the selected value could also be a string not only a number.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### previousNext?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Toggles the **Previous** and **Next** buttons.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### responsive?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines if the pager will be responsive. Defaults to `true`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### settings?


</td>
<td type class="table-cell-type">


<code>


boolean | [GridPagerSettings]({% slug api_data-tools_gridpagersettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">





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


`medium`


</code>


</td>
<td class="table-cell-comment">


Configures the `size` of the Pager.

The available options are:
- small
- medium
- large
- null&mdash;Does not set a size `class`.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### skip


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


#### take


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


#### total


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


Defines the type of the Grid pager.


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





</td>
</tr>
</tbody>
</table>



