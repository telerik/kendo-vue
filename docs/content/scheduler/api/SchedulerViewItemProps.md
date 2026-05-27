---
title: SchedulerViewItemProps
description: "Learn how to build custom functionality when working with the Vue Scheduler by Kendo UI with the help of the SchedulerViewItemProps."
api_reference: true
type: inner_api
slug: api_scheduler_schedulerviewitemprops
---

# SchedulerViewItemProps
Represents the props of the Kendo UI for Vue [SchedulerViewItem]({% slug api_scheduler_schedulerviewitemprops %}) component.


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



