---
title: AnimationInterface
description: "Learn how to build custom functionality when working with the Vue Animation by Kendo UI with the help of the AnimationInterface."
api_reference: true
type: inner_api
slug: api_animation_animationinterface
---

# AnimationInterface
Inherited by all Animations. Represents the properties which can be set to an Animation.


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


#### appear?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines whether a transition should happen on the first mount. Defaults to `false`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### componentChildClassName?


</td>
<td type class="table-cell-type">


<code>


string | string[][]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the CSS class names which are set to each of the animated children elements.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### componentChildStyle?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the styles which are set to each of the animated children elements.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### enter?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies whether to animate the entering (showing) element ([see example]({% slug disabledstate_animation %})). Defaults to `true`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### exit?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies whether to animate a leaving (disappearing) element ([see example]({% slug disabledstate_animation %})). Defaults to `true`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### mountOnEnter?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the Animation will use lazy-mounting on the first `in={true}`. Defaults to `false`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onEnter?


</td>
<td type class="table-cell-type">


<code>


(event: [AnimationEventArguments]({% slug api_animation_animationeventarguments %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called when a component is added to an existing Animation component and the Animation has not started yet .


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onEntered?


</td>
<td type class="table-cell-type">


<code>


(event: [AnimationEventArguments]({% slug api_animation_animationeventarguments %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called when a component is added to an existing Animation component and the Animation is now finished.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onEntering?


</td>
<td type class="table-cell-type">


<code>


(event: [AnimationEventArguments]({% slug api_animation_animationeventarguments %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called when a component is added to an existing Animation component and the Animation is now happening.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onExit?


</td>
<td type class="table-cell-type">


<code>


(event: [AnimationEventArguments]({% slug api_animation_animationeventarguments %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An event that is called after the Animation has reached its exit state.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onExited?


</td>
<td type class="table-cell-type">


<code>


(event: [AnimationEventArguments]({% slug api_animation_animationeventarguments %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An event that is called after the Animation has reached its exited state.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onExiting?


</td>
<td type class="table-cell-type">


<code>


(event: [AnimationEventArguments]({% slug api_animation_animationeventarguments %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An event that is called after the Animation has reached its exiting state.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### transitionEnterDuration?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the duration of the transition for the entering (`animation in`) Animation ([see example]({% slug duration_animation %})). After the time runs out, the Animation is terminated. Defaults to `300ms`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### transitionExitDuration?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the duration of the transition for the exiting (`animation out`) Animation ([see example]({% slug duration_animation %})). After the time runs out, the Animation is terminated. Defaults to `300ms`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### unmountOnExit?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the Animation will unmount after it reaches its exited state. Defaults to `false`.


</td>
</tr>
</tbody>
</table>



