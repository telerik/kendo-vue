---
title: SchedulerEditTaskProps
description: "Learn how to build custom functionality when working with the Vue Scheduler by Kendo UI with the help of the SchedulerEditTaskProps."
api_reference: true
type: inner_api
slug: api_scheduler_scheduleredittaskprops
---

# SchedulerEditTaskProps
Represents the props of the Kendo UI for Vue [SchedulerEditTask]({% slug api_scheduler_scheduleredittaskprops %}) component.


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


Specifies the `id` of the wrapping element of the SchedulerTask.


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


Overrides the default component responsible for the selection between `occurrence` and `series` delete.

The default Component is: [SchedulerOccurrenceDialog]({% slug api_scheduler_scheduleroccurrencedialogprops %}).


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


Called when the item has been removed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRemoveClick?


</td>
<td type class="table-cell-type">


<code>


(event: [SchedulerTaskMouseEvent]({% slug api_scheduler_schedulertaskmouseevent %})) => void


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


#### onRemoveItemChange?


</td>
<td type class="table-cell-type">


<code>


(event: any) => void


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


#### onShowOccurrenceDialogChange?


</td>
<td type class="table-cell-type">


<code>


(event: any) => void


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


(event: any) => void


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
The `removeItem` is passed as property to the `removeDialog` component;


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


Specifies the `tabIndex` attribute of the wrapping element of the SchedulerTask.


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


#### task?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default component responsible for visualizing a single task.

The default Component is: [SchedulerTask]({% slug api_scheduler_schedulertaskprops %}).


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


#### viewTask?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default component responsible for positioning the task inside the view.

The default Component is: [SchedulerViewTask]({% slug api_scheduler_schedulerviewtaskprops %}).


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



