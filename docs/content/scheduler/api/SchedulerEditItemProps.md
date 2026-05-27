---
title: SchedulerEditItemProps
description: "Learn how to build custom functionality when working with the Vue Scheduler by Kendo UI with the help of the SchedulerEditItemProps."
api_reference: true
type: inner_api
slug: api_scheduler_scheduleredititemprops
---

# SchedulerEditItemProps
Represents the props of the Kendo UI for Vue [SchedulerEditItem]() component.


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


Specifies the `className` attribute of the wrapping element of the SchedulerItem.

The SchedulerItem applies the following default className:
- `k-event`
- `k-selected` - if `props.selected` is set to `true`
- `k-event-drag-hint` - if `props.dragHint` is set to `true`
- `k-scheduler-marquee` - if `props.resizeHint` is set to `true`
- `k-marquee`: if `props.resizeHint` is set to `true`
- `k-first`: if `props.resizeHint` is set to `true` and `props.tail` is set to `false`
- `k-last`: if `props.resizeHint` is set to `true` and `props.head` is set to `false`


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dataItem


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the original `DataItem` from which the item was created.

For more information about the `data` collection, refer to the [Scheduler Data Binding]({% slug data_binding_scheduler %}) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### description


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `description` of the item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### drag?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default component responsible for visualizing the `dragItem`.

The default Component is: [SchedulerDrag]({% slug api_scheduler_schedulerdragprops %}).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dragHint?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the current SchedulerItem is used as a DragHint.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dragItem?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Setting this property will force the `dragItem` to be in controlled state, allowing further customization.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### editable?


</td>
<td type class="table-cell-type">


<code>


boolean | [EditableProp]({% slug api_scheduler_editableprop %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the `editable` prop of the `Scheduler` and the active view.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### end


</td>
<td type class="table-cell-type">


<code>


Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `end` date of the item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### endTimezone


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The timezone name for the `end` date.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### form?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default component responsible for visualizing the `formItem`.

The default Component is: [SchedulerForm]({% slug api_scheduler_schedulerformprops %}).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### format?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the `format` in which the `zonedStart` and `zonedEnd` properties are displayed.

For more information, refer to the [formatDate]({% slug api_intl_intlservice %}#toc-formatdate) method of the [IntlService]({% slug overview_globalization %}).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### formItem?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Setting this property will force the `formItem` to be in controlled state, allowing further customization.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### group


</td>
<td type class="table-cell-type">


<code>


[Group]({% slug api_scheduler_group %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the current group in which the item is rendered.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### head


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents if the `end` of the item is outside the current visual range.


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


Specifies the `id` of the wrapping element of the SchedulerItem.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isAllDay


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents if the item durations is through the whole day.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isException


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents if the item is an exception to a recurrence rule.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isRecurring


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents if the item is a single occurrence of a recurring `DataItem`.


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


Overrides the default component responsible for visualizing a single item.

The default Component is: [SchedulerItem]({% slug api_scheduler_scheduleritemprops %}).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### itemRef?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the `ref` of the actual `item`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### itemStyle?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the `style` object of the wrapping element of the SchedulerItem.

The SchedulerItem applies the following default styles:
 - `cursor`: `pointer`
 - `userSelect`: `none`
 - `borderColor`: `props.color`
 - `borderColor`: `props.color`
 - `pointerEvents`: `none` - if `props.dragHint` or `props.resizeHint` is set to `true`


</td>
</tr>
<tr>
<td class="table-cell-name">


#### occurrenceDialog?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default component responsible for the selection between `occurrence` and `series` edit.

The default Component is: [SchedulerOccurrenceDialog]({% slug api_scheduler_scheduleroccurrencedialogprops %}).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onBlur?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerItemFocusEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called each time the element, or any of its child elements, lose focus.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onBlurAction?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerItemFocusEvent, props: [SchedulerEditItemProps]({% slug api_scheduler_scheduleredititemprops %}), state: SchedulerEditItemState) => [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %}) | [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An action callback. Used to define the component behavior on blur.

Internal state change will be triggered depending on the specific action types.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onCancel?


</td>
<td type class="table-cell-type">


<code>


(event: [SchedulerFormStateChangeEvent]({% slug api_scheduler_schedulerformstatechangeevent %})&lt;null&gt; | [SchedulerOccurrenceDialogStateChangeEvent]({% slug api_scheduler_scheduleroccurrencedialogstatechangeevent %})&lt;null&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called whenever the current edit is canceled.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onCancelAction?


</td>
<td type class="table-cell-type">


<code>


(event: [SchedulerFormStateChangeEvent]({% slug api_scheduler_schedulerformstatechangeevent %})&lt;null&gt; | [SchedulerOccurrenceDialogStateChangeEvent]({% slug api_scheduler_scheduleroccurrencedialogstatechangeevent %})&lt;null&gt;, props: [SchedulerEditItemProps]({% slug api_scheduler_scheduleredititemprops %}), state: SchedulerEditItemState) => [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %}) | [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An action callback. Used to define the component behavior on cancel.

Internal state change will be triggered depending on the specific action types.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClickAction?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerItemMouseEvent, props: [SchedulerEditItemProps]({% slug api_scheduler_scheduleredititemprops %}), state: SchedulerEditItemState) => [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %}) | [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An action callback. Used to define the component behavior on click.

Internal state change will be triggered depending on the specific action types.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDataaction?


</td>
<td type class="table-cell-type">


<code>


(action: [DataAction]({% slug api_scheduler_dataaction %}), event?: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called when the item has been removed or manipulated though dragging, resizing or an external form.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDoubleClick?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerItemMouseEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called each time the element, or any of its child elements, is double-clicked.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDoubleClickAction?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerItemMouseEvent, props: [SchedulerEditItemProps]({% slug api_scheduler_scheduleredititemprops %}), state: SchedulerEditItemState) => [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %}) | [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An action callback. Used to define the component behavior on double click.

Internal state change will be triggered depending on the specific action types.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDragAction?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerItemDragEvent, props: [SchedulerEditItemProps]({% slug api_scheduler_scheduleredititemprops %}), state: SchedulerEditItemState) => [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %}) | [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An action callback. Used to define the component behavior on drag.

Internal state change will be triggered depending on the specific action types.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDragItemChange?


</td>
<td type class="table-cell-type">


<code>


(event: [SchedulerEditItemStateChangeEvent]({% slug api_scheduler_scheduleredititemstatechangeevent %})&lt;any&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called every time the `dragItem` changes.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFocusAction?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerItemFocusEvent, props: [SchedulerEditItemProps]({% slug api_scheduler_scheduleredititemprops %}), state: SchedulerEditItemState) => [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %}) | [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An action callback. Used to define the component behavior on focus.

Internal state change will be triggered depending on the specific action types.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFormItemChange?


</td>
<td type class="table-cell-type">


<code>


(event: [SchedulerEditItemStateChangeEvent]({% slug api_scheduler_scheduleredititemstatechangeevent %})&lt;any&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called every time the `formItem` changes.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFormSubmit?


</td>
<td type class="table-cell-type">


<code>


(event: [SchedulerFormStateChangeEvent]({% slug api_scheduler_schedulerformstatechangeevent %})&lt;any&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called whenever the `form` is submitted.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFormSubmitAction?


</td>
<td type class="table-cell-type">


<code>


(event: [SchedulerFormStateChangeEvent]({% slug api_scheduler_schedulerformstatechangeevent %})&lt;any&gt;, props: [SchedulerEditItemProps]({% slug api_scheduler_scheduleredititemprops %}), state: SchedulerEditItemState) => [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %}) | [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An action callback. Used to define the component behavior on form submit.

Internal state change will be triggered depending on the specific action types.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onKeyDown?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerItemKeyboardEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called each time a `keydown` event propagates to the wrapping element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onKeyDownAction?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerItemKeyboardEvent, props: [SchedulerEditItemProps]({% slug api_scheduler_scheduleredititemprops %}), state: SchedulerEditItemState) => [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %}) | [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An action callback. Used to define the component behavior on key down.

Internal state change will be triggered depending on the specific action types.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onKeyPress?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerItemKeyboardEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called each time a `keypress` event propagates to the wrapping element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onKeyUp?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerItemKeyboardEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called each time a `keyup` event propagates to the wrapping element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onKeyUpAction?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerItemKeyboardEvent, props: [SchedulerEditItemProps]({% slug api_scheduler_scheduleredititemprops %}), state: SchedulerEditItemState) => [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %}) | [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An action callback. Used to define the component behavior on key up.

Internal state change will be triggered depending on the specific action types.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseDown?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerItemMouseEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called each time the element, or any of its child elements resceives `mousedown` event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseDownAction?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerItemMouseEvent, props: [SchedulerEditItemProps]({% slug api_scheduler_scheduleredititemprops %}), state: SchedulerEditItemState) => [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %}) | [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An action callback. Used to define the component behavior on mouse down.

Internal state change will be triggered depending on the specific action types.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseEnter?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerItemMouseEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called each time the element, or any of its child elements receives `mouseenter` event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseLeave?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerItemMouseEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called each time the element, or any of its child elements receives `mouseleave` event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseOut?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerItemMouseEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called each time the element, or any of its child elements receives `mouseout` event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseOver?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerItemMouseEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called each time the element, or any of its child elements receives `mouseover` event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseUp?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerItemMouseEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called each time the element, or any of its child elements resceives `mouseup` event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseUpAction?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerItemMouseEvent, props: [SchedulerEditItemProps]({% slug api_scheduler_scheduleredititemprops %}), state: SchedulerEditItemState) => [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %}) | [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An action callback. Used to define the component behavior on mouse up.

Internal state change will be triggered depending on the specific action types.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onOccurrenceClick?


</td>
<td type class="table-cell-type">


<code>


(event: [SchedulerOccurrenceDialogStateChangeEvent]({% slug api_scheduler_scheduleroccurrencedialogstatechangeevent %})&lt;any&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called whenever the `occurence` option is selected from the `OccurrenceDialog`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onOccurrenceClickAction?


</td>
<td type class="table-cell-type">


<code>


(event: [SchedulerOccurrenceDialogStateChangeEvent]({% slug api_scheduler_scheduleroccurrencedialogstatechangeevent %})&lt;any&gt;, props: [SchedulerEditItemProps]({% slug api_scheduler_scheduleredititemprops %}), state: SchedulerEditItemState) => [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %}) | [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An action callback. Used to define the component behavior on occurrence click.

Internal state change will be triggered depending on the specific action types.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onPressAction?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerItemDragEvent, props: [SchedulerEditItemProps]({% slug api_scheduler_scheduleredititemprops %}), state: SchedulerEditItemState) => [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %}) | [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An action callback. Used to define the component behavior on press.

Internal state change will be triggered depending on the specific action types.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onReleaseAction?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerItemDragEvent, props: [SchedulerEditItemProps]({% slug api_scheduler_scheduleredititemprops %}), state: SchedulerEditItemState) => [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %}) | [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An action callback. Used to define the component behavior on release.

Internal state change will be triggered depending on the specific action types.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRemoveClick?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerItemMouseEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called when the `delete` icon is clicked.

The `delete` icon is rendered only when `props.editable` or `props.editable.remove` is `true`


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRemoveClickAction?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerItemMouseEvent, props: [SchedulerEditItemProps]({% slug api_scheduler_scheduleredititemprops %}), state: SchedulerEditItemState) => [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %}) | [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An action callback. Used to define the component behavior on remove click.

Internal state change will be triggered depending on the specific action types.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRemoveConfirm?


</td>
<td type class="table-cell-type">


<code>


(event: [SchedulerRemoveDialogStateChangeEvent]({% slug api_scheduler_schedulerremovedialogstatechangeevent %})&lt;any&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called whenever the `confirm` option is selected from the `RemoveDialog`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRemoveConfirmAction?


</td>
<td type class="table-cell-type">


<code>


(event: [SchedulerRemoveDialogStateChangeEvent]({% slug api_scheduler_schedulerremovedialogstatechangeevent %})&lt;any&gt;, props: [SchedulerEditItemProps]({% slug api_scheduler_scheduleredititemprops %}), state: SchedulerEditItemState) => [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %}) | [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An action callback. Used to define the component behavior on remove confirm click.

Internal state change will be triggered depending on the specific action types.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRemoveItemChange?


</td>
<td type class="table-cell-type">


<code>


(event: [SchedulerEditItemStateChangeEvent]({% slug api_scheduler_scheduleredititemstatechangeevent %})&lt;any&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called every time the `removeItem` changes.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onResizeEndDrag?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerItemDragEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called each time the the resize handler responsible for the item `end` is being dragged.

This event is used by the [`Resize`]({% slug editing_scheduler %}) functionality of the SchedulerItem.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onResizeEndDragAction?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerItemDragEvent, props: [SchedulerEditItemProps]({% slug api_scheduler_scheduleredititemprops %}), state: SchedulerEditItemState) => [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %}) | [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An action callback. Used to define the component behavior on resize end drag.

Internal state change will be triggered depending on the specific action types.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onResizeItemChange?


</td>
<td type class="table-cell-type">


<code>


(event: [SchedulerEditItemStateChangeEvent]({% slug api_scheduler_scheduleredititemstatechangeevent %})&lt;any&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called every time the `resize` changes.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onResizePress?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerItemDragEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called each time the any of the resize handlers receives a `press` event.

This event is used by the [`Resize`]({% slug editing_scheduler %}) functionality of the SchedulerItem.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onResizePressAction?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerItemDragEvent, props: [SchedulerEditItemProps]({% slug api_scheduler_scheduleredititemprops %}), state: SchedulerEditItemState) => [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %}) | [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An action callback. Used to define the component behavior on resize press.

Internal state change will be triggered depending on the specific action types.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onResizeRelease?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerItemDragEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called when the dragged resize handler is being `released`

This event is used by the [`Resize`]({% slug editing_scheduler %}) functionality of the SchedulerItem.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onResizeReleaseAction?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerItemDragEvent, props: [SchedulerEditItemProps]({% slug api_scheduler_scheduleredititemprops %}), state: SchedulerEditItemState) => [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %}) | [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An action callback. Used to define the component behavior on resize release.

Internal state change will be triggered depending on the specific action types.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onResizeStartDrag?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerItemDragEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called each time the the resize handler responsible for the item `start` is being dragged.

This event is used by the [`Resize`]({% slug editing_scheduler %}) functionality of the SchedulerItem.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onResizeStartDragAction?


</td>
<td type class="table-cell-type">


<code>


(event: SchedulerItemDragEvent, props: [SchedulerEditItemProps]({% slug api_scheduler_scheduleredititemprops %}), state: SchedulerEditItemState) => [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %}) | [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An action callback. Used to define the component behavior on resize start drag.

Internal state change will be triggered depending on the specific action types.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSeriesChange?


</td>
<td type class="table-cell-type">


<code>


(event: [SchedulerEditItemStateChangeEvent]({% slug api_scheduler_scheduleredititemstatechangeevent %})&lt;boolean&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called every time the `series` changes.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSeriesClick?


</td>
<td type class="table-cell-type">


<code>


(event: [SchedulerOccurrenceDialogStateChangeEvent]({% slug api_scheduler_scheduleroccurrencedialogstatechangeevent %})&lt;any&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called whenever the `series` option is selected from the `OccurrenceDialog`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSeriesClickAction?


</td>
<td type class="table-cell-type">


<code>


(event: [SchedulerOccurrenceDialogStateChangeEvent]({% slug api_scheduler_scheduleroccurrencedialogstatechangeevent %})&lt;any&gt;, props: [SchedulerEditItemProps]({% slug api_scheduler_scheduleredititemprops %}), state: SchedulerEditItemState) => [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %}) | [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An action callback. Used to define the component behavior on series click.

Internal state change will be triggered depending on the specific action types.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onShowOccurrenceDialogChange?


</td>
<td type class="table-cell-type">


<code>


(event: [SchedulerEditItemStateChangeEvent]({% slug api_scheduler_scheduleredititemstatechangeevent %})&lt;boolean&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called every time the `showOccurrenceDialog` changes.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onShowRemoveDialogChange?


</td>
<td type class="table-cell-type">


<code>


(event: [SchedulerEditItemStateChangeEvent]({% slug api_scheduler_scheduleredititemstatechangeevent %})&lt;boolean&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called every time the `showRemoveDialog` changes.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### order


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the order of the item among its siblings.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### originalStart


</td>
<td type class="table-cell-type">


<code>


Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the original start of the item.

This property is being used when only a single occurrence of a recurring item is being edited.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### range


</td>
<td type class="table-cell-type">


<code>


Range


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the current range in which the item is rendered.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### removeDialog?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default component responsible for visualizing the `removeItem` and confirming the `remove` action.

The default Component is: [SchedulerRemoveDialog]({% slug api_scheduler_schedulerremovedialogprops %}).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### removeItem?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Setting this property will force the `removeItem` to be in controlled state, allowing further customization.

Specifies the DataItem which should be removed from the `data` set.
The `removeItem` is passed as property to the `removeDialog` and `occurrenceDialog` component;


</td>
</tr>
<tr>
<td class="table-cell-name">


#### resize?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default component responsible for visualizing the `resizeItem`.

The default Component is: [SchedulerResize]({% slug api_scheduler_schedulerresizeprops %}).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### resizeHint?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the current SchedulerItem is used as a ResizeHint.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### resizeItem?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Setting this property will force the `resizeItem` to be in controlled state, allowing further customization.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### selected?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the selected state of the SchedulerSlot. By default the `k-selected` className is added if `props.selected` is `true`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### series?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the editing should be applied to the whole `series` or to a single `occurrence` when the item is recurring.

By default, the `series` prop is set to `null` and additional selection is done through the `occurrence` dialog.
If set ot either `true` or `false`:
- `true` &mdash; indicates that the editing should always be applied to the whole `series`
- `false` &mdash; indicates that the editing should always be applied to a single `occurrence`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### showOccurrenceDialog?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Setting this property will force the `showOccurrenceDialog` to be in controlled state, allowing further control over the display of the `occurrenceDialog` component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### showRemoveDialog?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Setting this property will force the `showRemoveDialog` to be in controlled state, allowing further control over the display of the `removeDialog` component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### slots


</td>
<td type class="table-cell-type">


<code>


Slot[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A collection of all `slots` in which the current item fits.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### start


</td>
<td type class="table-cell-type">


<code>


Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `start` date of the item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### startTimezone


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The timezone name for the `start` date.


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


Specifies the `tabIndex` attribute of the wrapping element of the SchedulerItem.

Providing `null` will not apply any `tabIndex` to the element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### tail


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents if the `start` of the item is outside the current visual range.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### title


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `title` of the item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### vertical?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the orientation of the SchedulerItem.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### viewItem?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default component responsible for positioning the item inside the view.

The default Component is: [SchedulerViewItem]({% slug api_scheduler_schedulerviewitemprops %}).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### zonedEnd


</td>
<td type class="table-cell-type">


<code>


ZonedDate


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the `end` Date in the provided timezone.

For more information about timezones, refer to the [Scheduler TImezones]({% slug timezones_scheduler %}) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### zonedStart


</td>
<td type class="table-cell-type">


<code>


ZonedDate


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the `start` Date in the provided timezone.

For more information about timezones, refer to the [Scheduler TImezones]({% slug timezones_scheduler %}) article.


</td>
</tr>
</tbody>
</table>



