---
title: CalendarProps
description: "Learn how to build custom functionality when working with the Vue Dateinputs by Kendo UI with the help of the CalendarProps."
api_reference: true
type: inner_api
slug: api_dateinputs_calendarprops
---

# CalendarProps
Represents the props of the [Kendo UI for Vue Calendar component]({% slug overview_calendar %}). The generic argument is passed to the `change` property and is used as a target in the [`CalendarChangeEvent`]({% slug api_dateinputs_calendarchangeevent %}) interface.


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


#### activeRangeEnd?


</td>
<td type class="table-cell-type">


<code>


[SelectionRangeEnd]({% slug api_dateinputs_selectionrangeend %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies which end of the defined selection range will be marked as active.

> If the selection range is undefined, the value is ignored.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### allowReverse?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true`, the component skips the validation of whether the `from` value is after the `to` value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### bottomView?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the bottommost view to which the user can navigate.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### cell?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the customization or the override of the default Calendar cell
([see example]({% slug custom_rendering_calendar %}#toc-cells-inside-the-view)).


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


Sets the `className` of the Calendar.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultActiveView?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the default active view of the Calendar.
If not set, the Calendar will display the month view.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultValue?


</td>
<td type class="table-cell-type">


<code>


Date | [SelectionRange]({% slug api_dateinputs_selectionrange %}) | Date[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the default value of the Calendar.


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


Determines whether the Calendar is disabled.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### focusedDate?


</td>
<td type class="table-cell-type">


<code>


Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the initial focused date of the Calendar.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### headerTitle?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the customization or the override of the default header title in the Calendar
([see example]({% slug custom_rendering_calendar %}#toc-titles-of-current-views)).


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


Sets the `id` of the Calendar.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### max?


</td>
<td type class="table-cell-type">


<code>


Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the maximum allowed date of the Calendar. Defaults to `2099-12-31`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### min?


</td>
<td type class="table-cell-type">


<code>


Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the minimum allowed date of the Calendar. Defaults to `1900-1-1`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### mode?


</td>
<td type class="table-cell-type">


<code>


[CalendarMode]({% slug api_dateinputs_calendarmode %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the selection mode of the Calendar.

The available modes are:
* (Default) `single`&mdash;Renders a single-date selection.
* `multiple`&mdash;Renders a multiple-date selection.
* `range`&mdash;Renders a date-range selection.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### navigation?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines if the navigation sidebar will be displayed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onBlur?


</td>
<td type class="table-cell-type">


<code>


(event: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the Calendar is blurred.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: [CalendarChangeEvent]({% slug api_dateinputs_calendarchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An event that is called after the value of the Calendar has changed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFocus?


</td>
<td type class="table-cell-type">


<code>


(event: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the Calendar is focused.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onWeekcellclick?


</td>
<td type class="table-cell-type">


<code>


(event: [CalendarWeekCellClickEvent]({% slug api_dateinputs_calendarweekcellclickevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An event called when the week number cell is clicked.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onWeeknameclick?


</td>
<td type class="table-cell-type">


<code>


(event: [CalendarWeekNameClickEvent]({% slug api_dateinputs_calendarweeknameclickevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An event called when the week name cell is clicked.


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


Sets the `tabIndex` property of the Calendar.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### topView?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the topmost view to which the user can navigate.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### value?


</td>
<td type class="table-cell-type">


<code>


Date | [SelectionRange]({% slug api_dateinputs_selectionrange %}) | Date[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the value of the Calendar.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### views


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the value of the Calendar.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### weekCell?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the customization or the override of the default week-column cell in the Calendar
([see example]({% slug custom_rendering_calendar %}#toc-cells-inside-the-week-column)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### weekNumber?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines if the week number column will be displayed.


</td>
</tr>
</tbody>
</table>



