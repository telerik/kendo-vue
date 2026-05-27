---
title: SchedulerFooterProps
description: "Learn how to build custom functionality when working with the Vue Scheduler by Kendo UI with the help of the SchedulerFooterProps."
api_reference: true
type: inner_api
slug: api_scheduler_schedulerfooterprops
---

# SchedulerFooterProps



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


Defines the `aria-label` HTML attribute of the Toolbar.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### buttonScrollSpeed?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


100


</code>


</td>
<td class="table-cell-comment">


Sets the Toolbar scroll speed in pixels when scrolling via clicking the previous or next button.
Applicable when the overflow property is set to `scroll`.





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


Sets additional classes to the Toolbar.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dir?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the `dir` HTML attribute.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### fillMode?


</td>
<td type class="table-cell-type">


<code>


"flat" | "solid" | "outline"


</code>


</td>
<td class="table-cell-default">


<code>


`undefined`


</code>


</td>
<td class="table-cell-comment">


Configures the `fillMode` of the Toolbar.

The available options are:
- solid&mdash;Applies a `background` color and `solid borders`.
- flat&mdash;Sets a `transparent background` and `solid bottom border`.
- outline&mdash;Sets a `transparent background` and `solid borders`.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### keyboardNavigation?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `false`, it will turn off the built-in keyboard navigation.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### nextButton?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the custom component that will be rendered as a next button.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onResize?


</td>
<td type class="table-cell-type">


<code>


(event: ToolbarResizeEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `resize` event of the Toolbar.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### overflow?


</td>
<td type class="table-cell-type">


<code>


"section" | "none" | "scroll"


</code>


</td>
<td class="table-cell-default">


<code>


`section`


</code>


</td>
<td class="table-cell-comment">


Represents the possible overflow mode options of the Toolbar.
Applicable when there is not enough space to render all tools.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### prevButton?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the custom component that will be rendered as a previous button.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### scrollButtons?


</td>
<td type class="table-cell-type">


<code>


"hidden" | "auto" | "visible"


</code>


</td>
<td class="table-cell-default">


<code>


`auto`


</code>


</td>
<td class="table-cell-comment">


Determines the Toolbar scroll buttons visibility.
Applicable when the overflow property is set to `scroll`.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### scrollButtonsPosition?


</td>
<td type class="table-cell-type">


<code>


"split" | "start" | "end"


</code>


</td>
<td class="table-cell-default">


<code>


`split`


</code>


</td>
<td class="table-cell-comment">


Determines the Toolbar scroll buttons position.
Applicable when the overflow property is set to `scroll`.





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


Configures the `size` of the Toolbar.

The available options are:
- `small`&mdash;sets the padding of the component to 4px 4px
- `medium`&mdash;sets the padding of the component to 8px 8px
- `large`&mdash;sets the padding of the component to 10px 10px





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


Specifies the `tabIndex` of the Toolbar.


</td>
</tr>
</tbody>
</table>



