---
title: SchedulerViewProps
description: "Learn how to build custom functionality when working with the Vue Scheduler by Kendo UI with the help of the SchedulerViewProps."
api_reference: true
type: inner_api
slug: api_scheduler_schedulerviewprops
---

# SchedulerViewProps
Represents the required props which every [SchedulerView]({% slug api_scheduler_schedulerviewprops %}) must accept.


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


#### dateRange?


</td>
<td type class="table-cell-type">


<code>


DateRange | (args: [SchedulerViewDateRangeArgs]({% slug api_scheduler_schedulerviewdaterangeargs %})) => DateRange


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the `dateRange` calculated by the `Scheduler` component.

If a function is passed, an object of type [SchedulerViewDateRangeArgs]({% slug api_scheduler_schedulerviewdaterangeargs %}) will be passed.


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


Overrides the `dragItem` prop of the Scheduler for the specified view only.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### name?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The name property is used by the Scheduler to match which view is selected. Every view has a default name.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### numberOfDays?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the number of days to be shown in the current view.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDataaction?


</td>
<td type class="table-cell-type">


<code>


(action: [DataAction]({% slug api_scheduler_dataaction %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called every time any of the SchedulerView Slots or Items trigger a data action, through editing, deleting or creating new `DataItem`.


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


Overrides the `resizeItem` prop of the Scheduler for the specified view only.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### selectedDateFormat?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The long-date format for displaying the
selected date in the Scheduler toolbar.
Defaults to `{0:Y}`
([more information](https://www.github.com/telerik/kendo-intl/blob/develop/docs/date-formatting/index.md))


</td>
</tr>
<tr>
<td class="table-cell-name">


#### selectedShortDateFormat?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The short-date format for displaying the
selected date in the Scheduler toolbar.
Defaults to `{0:Y}`
([more information](https://www.github.com/telerik/kendo-intl/blob/develop/docs/date-formatting/index.md))


</td>
</tr>
<tr>
<td class="table-cell-name">


#### title?


</td>
<td type class="table-cell-type">


<code>


string | (localization: LocalizationService) => string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The title to be displayed in the view selection list in the Toolbar.
If a function is passed, it will receive a [LocalizationService]({ slug api_intl_localizationservice }) as an argument


</td>
</tr>
</tbody>
</table>



