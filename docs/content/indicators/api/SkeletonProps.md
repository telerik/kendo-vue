---
title: SkeletonProps
description: "Learn how to build custom functionality when working with the Vue Indicators by Kendo UI with the help of the SkeletonProps."
api_reference: true
type: inner_api
slug: api_indicators_skeletonprops
---

# SkeletonProps
Represents the props of the [Kendo Ui for Vue Skeleton component]({% slug overview_skeleton %}).


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


#### animation?


</td>
<td type class="table-cell-type">


<code>


boolean | [SkeletonAnimation]({% slug api_indicators_skeletonanimation %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the animation settings of the Skeleton.

The possible keys are:
* `type`&mdash;Defines the type of the Skeleton animation.
  * `wave`&mdash;Shows wave animation effect.
  * `pulse`(Default)&mdash;Shows pulse animation effect.

To disable the animation, set the property to `false`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### ariaBusy?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the ariaBusy attribute of the Skeleton.

The Skeleton component does not have accessibility on its own as it is only a visual indicator.
It should be integrated within an element that refers to the loading state. 
When integrating the Skeleton on a page, you might want to define an `ariaBusy` attribute and
this property gives you this option. 

By default the `ariaBusy` attribute is not rendered.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### role?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the role attribute of the Skeleton.

The Skeleton component does not have accessibility on its own as it is only a visual indicator.
It should be integrated within an element that refers to the loading state. 
When integrating the Skeleton on a page, you might want to define a `role` attribute and
this property gives you this option. 

By default the `role` attribute is not rendered. 

The recommended value of the attribute is `alert`


</td>
</tr>
<tr>
<td class="table-cell-name">


#### shape?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the shape of the Skeleton.

The possible values are:
* `circle`&mdash;Renders a circular Skeleton.
* `text`(Default)&mdash;Renders a line Skeleton.
* `rectangle`&mdash;Renders a rectangular Skeleton.


</td>
</tr>
</tbody>
</table>



