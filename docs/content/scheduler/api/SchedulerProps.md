---
title: SchedulerProps
description: "Learn how to build custom functionality when working with the Vue Scheduler by Kendo UI with the help of the SchedulerProps."
api_reference: true
type: inner_api
slug: api_scheduler_schedulerprops
---

# SchedulerProps
Represents the props of the [Kendo UI for Vue Scheduler component]({% slug overview_scheduler %}).


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


#### adaptive?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the adaptive (mobile) rendering of the Scheduler.
When set to `true`, the Scheduler renders mobile-specific classes and layout on small screens (below 1024px).


</td>
</tr>
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


The `aria-label` attribute to be applied to the Scheduler component.

For more information, refer to the [Scheduler Accessibility Compliance]({% slug accessibility_scheduler %}) article


</td>
</tr>
<tr>
<td class="table-cell-name">


#### ariaLabelledby?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `aria-labelledby` attribute to be applied to the Scheduler component.

For more information, refer to the [Scheduler Accessibility Compliance]({% slug accessibility_scheduler %}) article


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


Specifies the `className` attribute of the wrapping element of the Scheduler.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dataItems?


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the data of the Scheduler component. The data is then parsed and rendered as a visual Scheduler items.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### date?


</td>
<td type class="table-cell-type">


<code>


Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the current selected `Date`. The current selected date is passed to the selected view and transformed in to a range.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dateHeaderCell?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents component based on the DateHeaderCellProps.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultDate?


</td>
<td type class="table-cell-type">


<code>


Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets a default selected `Date`. The `defaultDate` property is used to specify the initial rendered date, while still remaining in an uncontrolled mode.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultView?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the initially selected view.

For more information refer to the [Scheduler Views]({% slug views_scheduler %}) article.

Sets the initially selected view. The available values are:
* `day`
* `week`
* `month`
* `agenda`
* `timeline`


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


Sets if the Scheduler component is editable. The value can be either a `boolean` or an Object to specify different types of editing.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### editItem?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default editItem. Specifying the `editItem` property of a specific view will override this property.

The default component is: [SchedulerEditItem]({% slug api_scheduler_scheduleredititemprops %})

For more information on customizing the scheduler items, refer to the [Item Customization]({% slug scheduler_custom_event %}) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### editSlot?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default editSlot component. Specifying the `editSlot` property of a specific view will override this property.

The default component is: [SchedulerEditSlot]({% slug api_scheduler_schedulereditslotprops %})

For more information on customizing the scheduler slots, refer to the [Slot Customization]({% slug scheduler_custom_slot %}) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### editTask?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default editTask. Specifying the `editTask` property of a specific view will override this property.
Currently, the `viewTask` is being used in the [AgendaView]({% slug agenda_view_scheduler %}) only.

The default component is: [SchedulerEditTask]({% slug api_scheduler_scheduleredittaskprops %})

For more information on customizing the scheduler tasks, refer to the [Task Customization]({% slug overview_agenda_view_scheduler %}) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### footer?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default footer component of the Scheduler.

The default component is: [Scheduler]({% slug api_scheduler_schedulerfooterprops %})

For more information on customizing the scheduler footer, refer to the [Footer Customization]({% slug overview_header_footer_scheduler %}) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### group?


</td>
<td type class="table-cell-type">


<code>


[SchedulerGroup]({% slug api_scheduler_schedulergroup %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the groups of the Scheduler.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### header?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default header component of the Scheduler.

The default component is: [SchedulerHeader]({% slug api_scheduler_schedulerheaderprops %})

For more information on customizing the scheduler header, refer to the [Header Customization]({% slug overview_header_footer_scheduler %}) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### height?


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `height` of the Scheduler.


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


Specifies the `id` of the wrapping element of the Scheduler.


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


Overrides the default item. Specifying the `item` property of a specific view will override this property.

The default component is: [SchedulerItem]({% slug api_scheduler_scheduleritemprops %})

For more information on customizing the scheduler items, refer to the [Item Customization]({% slug scheduler_custom_event %}) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### modelFields?


</td>
<td type class="table-cell-type">


<code>


[SchedulerModelFields]({% slug api_scheduler_schedulermodelfields %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The names of the model fields from which the Scheduler will read its data
([see example]({% slug data_binding_scheduler %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### modifyInitialFormValues?


</td>
<td type class="table-cell-type">


<code>


Function


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Function that returns custom initial values for the fields of the form.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDataChange?


</td>
<td type class="table-cell-type">


<code>


(event: [SchedulerDataChangeEvent]({% slug api_scheduler_schedulerdatachangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called each time when editing occurs.
To enable editing set the `editable` property to `true` or an [`EditableProp`]({% slug api_scheduler_editableprop %})

For more information refer to the [Scheduler Editing]({% slug editing_scheduler %}) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDateChange?


</td>
<td type class="table-cell-type">


<code>


(args: [SchedulerDateChangeEvent]({% slug api_scheduler_schedulerdatechangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called when new `date` is selected.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onViewChange?


</td>
<td type class="table-cell-type">


<code>


(args: [SchedulerViewChangeEvent]({% slug api_scheduler_schedulerviewchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called when new `view` is selected. [(see example)]({% slug views_scheduler %}#toc-controlling-the-selected-view)


</td>
</tr>
<tr>
<td class="table-cell-name">


#### resources?


</td>
<td type class="table-cell-type">


<code>


[SchedulerResource]({% slug api_scheduler_schedulerresource %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the resources of the Scheduler.


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


Specifies the `role` attribute of the Scheduler wrapping element.

For more information, refer to the [Scheduler Accessibility Compliance]({% slug accessibility_scheduler %}) article


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rtl?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Force a `rtl` mode. For more information refer to [RTL Support]({% slug globalization_scheduler %}#toc-right-to-left-support)


</td>
</tr>
<tr>
<td class="table-cell-name">


#### slotRender?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default slot component. Specifying the `slot` property of a specific view will override this property.

The default component is: [SchedulerSlot]({% slug api_scheduler_schedulerslotprops %})

For more information on customizing the scheduler slots, refer to the [Slot Customization]({% slug scheduler_custom_slot %}) article.


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


Specifies the `tabIndex` attribute of the wrapping element of the Scheduler.


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


Overrides the default task. Specifying the `task` property of a specific view will override this property.
Currently, the `task` is being used in the [AgendaView]({% slug agenda_view_scheduler %}) only.

The default component is: [SchedulerTask]({% slug api_scheduler_schedulertaskprops %})

For more information on customizing the scheduler tasks, refer to the [Task Customization]({% slug overview_agenda_view_scheduler %}) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### timeHeaderCell?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents component based on the TimeHeaderCellProps.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### timezone?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the id of the timezone that will be displayed in the Scheduler.
For example, `Europe/Sofia`.

Defaults to `Etc/UTC`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### validator?


</td>
<td type class="table-cell-type">


<code>


Function


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Function that returns custom validator for the form.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### view?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the currently selected view. The value is matched with the `name` property of the view.


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


Overrides the default viewItem. Specifying the `viewItem` property of a specific view will override this property.

The default component is: [SchedulerViewItem]({% slug api_scheduler_schedulerviewitemprops %})

For more information on customizing the scheduler items, refer to the [Item Customization]({% slug scheduler_custom_event %}) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### views?


</td>
<td type class="table-cell-type">


<code>


[SchedulerViewProps]({% slug api_scheduler_schedulerviewprops %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the currently visible views.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### viewSlot?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default viewSlot component. Specifying the `viewSlot` property of a specific view will override this property.

The default component is: [SchedulerViewSlot]({% slug api_scheduler_schedulerviewslotprops %})

For more information on customizing the scheduler slots, refer to the [Slot Customization]({% slug scheduler_custom_slot %}) article.


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


Overrides the default viewTask. Specifying the `viewTask` property of a specific view will override this property.
Currently, the `viewTask` is being used in the [AgendaView]({% slug agenda_view_scheduler %}) only.

The default component is: [SchedulerViewTask]({% slug api_scheduler_schedulerviewtaskprops %})

For more information on customizing the scheduler tasks, refer to the [Task Customization]({% slug overview_agenda_view_scheduler %}) article.


</td>
</tr>
</tbody>
</table>



