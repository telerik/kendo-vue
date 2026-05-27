---
title: ChunkProgressBarProps
description: "Learn how to build custom functionality when working with the Vue Progressbars by Kendo UI with the help of the ChunkProgressBarProps."
api_reference: true
type: inner_api
slug: api_progressbars_chunkprogressbarprops
---

# ChunkProgressBarProps
Represents the props of the [Kendo UI for Vue ChunkProgressBar component]({% slug overview_chunkprogressbar %}).


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


The accessible label of the component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### chunkCount?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the number of chunks into which the ChunkProgressBar will be split. Defaults to `5`.


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


Specifies a list of CSS classes that will be added to the progress bar element.


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


Represents the `dir` HTML attribute. This is used to switch from LTR to RTL.


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


Sets the disabled state of the progress bar.
See examples ([here]({% slug progressbar_disabled %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### emptyClassName?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets additional classes to the inner element which represents the empty portion of the progress bar.
See examples ([here]({% slug progressbar_appearance %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### emptyStyle?


</td>
<td type class="table-cell-type">


<code>


object


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The styles that are applied to the inner element which represents the empty portion of the progress bar.
See examples ([here]({% slug progressbar_appearance %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### max?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The maximum value of the progress bar. Defaults to `100`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### min?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The minimum value of the progress bar. Defaults to `0`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### orientation?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the orientation of the progress bar.
See examples ([here]({% slug progressbar_orientation %})) .
Defaults to `horizontal`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### progressClassName?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets additional classes to the inner element which represents the full portion of the progress bar.
See examples ([here]({% slug progressbar_appearance %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### progressStyle?


</td>
<td type class="table-cell-type">


<code>


object


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The styles that are applied to the inner element which represents the full portion of the progress bar.
See examples ([here]({% slug progressbar_appearance %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### reverse?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true`, the progress bar will be reversed.
See examples ([here]({% slug progressbar_direction %})).
Defaults to `false`.


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


Sets the `tabIndex` property of the progress bar.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### value?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the value of the progress bar. Has to be between `min` and `max` values. Defaults to `0`.
Set `null` to enable the indeterminate state of the progress bar.
See examples ([here]({% slug overview_progressbar %})).


</td>
</tr>
</tbody>
</table>



