---
title: StepperProps
description: "Learn how to build custom functionality when working with the Vue Layout by Kendo UI with the help of the StepperProps."
api_reference: true
type: inner_api
slug: api_layout_stepperprops
---

# StepperProps
Represents the props of the [Kendo UI for Vue Stepper component]({% slug overview_stepper %}).


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


#### animationDuration?


</td>
<td type class="table-cell-type">


<code>


number | boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the duration of the Stepper animation. Defaults to `400ms`.


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


Specifies a list of CSS classes that will be added to the Stepper.


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


Disables the whole Stepper.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### errorIcon?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies a custom icon that will be rendered inside the step for invalid steps.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### item?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default component responsible for visualizing a single item ([see example]({% slug custom_rendering_stepper %})).

The default Component is: [Step]({% slug api_layout_step %}).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### items


</td>
<td type class="table-cell-type">


<code>


[StepProps]({% slug api_layout_stepprops %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The collection of steps that will be rendered in the Stepper ([see example]({% slug overview_stepper %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### linear?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the linear flow of the Stepper.
([see example]({% slug linear_mode_stepper %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### mode?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the display mode of the Stepper
([see example]({% slug display_modes_stepper %})).
* The possible values are:
* (Default) `steps`. Render step indicator and optional label.
* `labels`. Render labels only.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: [StepperChangeEvent]({% slug api_layout_stepperchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event handler that will be fired when the value is changed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFocus?


</td>
<td type class="table-cell-type">


<code>


(event: [StepperFocusEvent]({% slug api_layout_stepperfocusevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event handler that will be fired when a Step is focused.


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


Specifies the orientation of the Stepper
([see example]({% slug orientation_stepper %})).

The possible values are:
* (Default) `horizontal`
* `vertical`


</td>
</tr>
<tr>
<td class="table-cell-name">


#### progress?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the current progress of the ProgressBar inside the Stepper. If not defined it is equal to the current value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### progressTotal?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The maximum value of the ProgressBar inside the Stepper. If not defined it is equal to the number of steps defined.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### successIcon?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies a custom icon that will be rendered inside the step for valid steps.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### value


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the index of the selected Step.


</td>
</tr>
</tbody>
</table>



