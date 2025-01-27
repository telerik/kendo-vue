---
title: Scheduler API
description: "API Index | Scheduler"
api_reference: true
slug: api_schedulercomponent_wrapper
---

# Scheduler

## Directive

`kendo-scheduler`

## Child Components

* [`kendo-scheduler-resource`]({% slug api_schedulerresourcecomponent_wrapper %})
* [`kendo-scheduler-view`]({% slug api_schedulerviewcomponent_wrapper %})

## Props

### all-day-event-template `String | Function`

The template for render the **All day** Scheduler events ([`allDayEventTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/configuration/alldayeventtemplate)).

The template supports the following fields:

* `description` (String)&mdash;The description of the event.
* `end` (Date)&mdash;The date of the event.
* `isAllDay` (Boolean)&mdash;If set to `true`, the event is an all-day event.
* `resources` (Array)&mdash;The resources of the event.
* `start` (Date)&mdash;The start date of the event.
* `title` (String)&mdash;The title of the event.

### all-day-slot `Boolean`

If `all-day-slot` is set to `true`, the Scheduler will display a slot for the **All day** events ([`allDaySlot` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/configuration/alldayslot)).

### auto-bind `Boolean`

If `auto-bind` is set to `false`, the Scheduler will not bind to the data source during initialization ([`autoBind` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/configuration/autobind)). In this case, data binding will occur when the change event of the data source is fired. By default, the widget will bind to the data source specified in the configuration.

### current-time-marker `Boolean | Object`

If `current-time-marker` is set to `false`, the `current time` marker of the Scheduler would not be displayed ([`currentTimeMarker` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/configuration/currenttimemarker)). The supported composite props are available in [`CurrentTimeMarkerProps`]({% slug api_scheduler_currenttimemarkerprops_wrapper %}).

### data-source `Object | Array`

The data source of the Scheduler which contains the Scheduler events ([`dataSource` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/configuration/datasource)).

You can set `data-source` to:

* A JavaScript object which represents any valid data source configuration.
* A JavaScript array.
* An existing `kendo.data.SchedulerDataSource` instance.

If the `dataSource` option is set to a JavaScript object or an array, the Scheduler will initialize a new `kendo.data.SchedulerDataSource` instance by using that value as a data source configuration. If the `dataSource` option is an existing `kendo.data.SchedulerDataSource` instance, the Scheduler will use that instance and will not initialize a new one.

### date `Date`

The current date of the Scheduler ([`date` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/configuration/date)). Used to determine the displayed period.

### date-header-template `String | Function`

The template for rendering the date header cells ([`dateHeaderTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/configuration/dateheadertemplate)). By default, the Scheduler renders the date by using a custom `ddd M/dd` format. The `ddd` specifier represents the abbreviated name of the week day and will be localized based on the current Kendo UI culture. To control the order of the days and months, define a custom template. The template supports the `date` field which represents the major tick date.

### editable `Boolean | Object`

If `editable` is set to `true`, the user will be able to create new Scheduler events and modify or delete existing ones ([`editable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/configuration/editable)). The supported composite props are available in [`EditableProps`]({% slug api_scheduler_editableprops_wrapper %}).

### end-time `Date`

The end time of the **Week** and **Day** views ([`endTime` in Kendo UI endtime jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/configuration/alldayeventtemplate)). The Scheduler will display events which end before the `endTime` value.

### event-template `String | Function`

The template for rendering the Scheduler events ([`eventTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/configuration/eventtemplate)).

The template supports the following fields:

* `description` (String)&mdash;The description of the event.
* `end` (Date)&mdash;The date of the event.
* `resources` (Array)&mdash;The resources of the event.
* `start` (Date)&mdash;The start date of the event.
* `title` (String)&mdash;The title of the event.

### footer `Boolean | Object`

If `footer` is set to `false`, the footer of the Scheduler will not be displayed ([`footer` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/configuration/footer)). The supported composite props are available in [`FooterProps`]({% slug api_scheduler_footerprops_wrapper %}).

### group `Object`

The configuration for grouping the Scheduler resources ([`group` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/configuration/group)). The supported composite props are available in [`GroupProps`]({% slug api_scheduler_groupprops_wrapper %}).

### group-header-template `String | Function`

The template for rendering the group headers of the **Day**, **Week**, **Work week**, and **Timeline** views ([`groupHeaderTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/configuration/group#groupHeaderTemplate)).

The template supports the following fields:

* `text` (String)&mdash;The text for the group.
* `color` (String)&mdash;The color for the group.
* `value`&mdash;The value for the group.
* `field` (String)&mdash;The field of the Scheduler event which contains the resource `id`.
* `title` (String)&mdash;The `title`  option of the resource.
* `name` (String)&mdash;The `name`  option of the resource.

### height `Number | String`

The height of the Scheduler ([`height` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/configuration/height)). Numeric values are treated as pixels.

### major-tick `Number`

The number of minutes that are represented by a major tick ([`majorTick` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/configuration/majortick)).

### major-time-header-template `String | Function`

The template for rendering the major ticks ([`majorTimeHeaderTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/configuration/majortimeheadertemplate)). By default, the Scheduler renders the time based on the current culture time format. The template supports the `date` field which epresents the major tick date.

### max `Date`

Limits the maximum date which can be selected through the Scheduler navigation ([`max` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/configuration/max)).

### messages `Object`

The configuration of the Scheduler messages ([`messages` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/configuration/messages)). Used for customization and localization of the Scheduler messages. The supported composite props are available in [`MessagesProps`]({% slug api_scheduler_messagesprops_wrapper %}).

### min `Date`

Limits the minimum date which can be selected through the Scheduler navigation ([`min` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/configuration/min)).

### minor-tick-count `Number`

The number of time slots that will be displayed per major tick ([`minorTickCount` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/configuration/minortickcount)).

### minor-time-header-template `String | Function`

The template for rendering the minor ticks ([`minorTimeHeaderTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/configuration/minortimeheadertemplate)). By default, the Scheduler renders `&nbsp;`. The template supports `date` field which represents the major tick date.

### mobile `Boolean | String`

If `mobile` is set to `true` and the Scheduler is viewed in a mobile browser, it will use adaptive rendering ([`mobile` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/configuration/mobile)). Can be set to a `phone` or `tablet` string which will force the Scheduler to use adaptive rendering regardless of the browser type.

### pdf `Object`

Configures the PDF export settings of the Scheduler ([`pdf` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/configuration/pdf)). The supported composite props are available in [`PdfProps`]({% slug api_scheduler_pdfprops_wrapper %}).

### resources `Array`

The configuration of the Scheduler resources ([`resources` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/configuration/resources)). A Scheduler resource is optional metadata that can be associated with a Scheduler event.

### selectable `Boolean`

If `selectable` is set to `true`, the user will be able to select Scheduler cells and events ([`selectable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/configuration/selectable)). By default, `selectable` is disabled.

### show-work-hours `Boolean`

If `show-work-hours` is set to `true`, the view will be initially shown in the business-hour mode ([`showWorkHours` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/configuration/showworkhours)). By default, a view is displayed in the full-day mode.

### snap `Boolean`

If `snap` is set to `true`, the Scheduler will snap events to the nearest slot during dragging (resizing or moving) ([`snap` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/configuration/snap)). To allow the free moving and resizing of events, set `snap` to `false`.

### start-time `Date`

The start time of the **Day** and **Week** views. The Scheduler will display events which start after the `startTime` value ([`startTime` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/configuration/starttime)).

### timezone `String`

The timezone which the Scheduler will use to display the Scheduler appointment dates ([`timezone` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/configuration/timezone)). By default, the Scheduler uses the timezone of the current system. While this approach is useful when the Scheduler is bound to a local array of events, you need to specify a timezone if the Scheduler is bound to a remote service. In this way, all users will be able to see the same dates and times regardless of the configured timezones on their systems. The complete list of the supported timezones is available in the List of IANA time zones Wikipedia page.

### toolbar `Array`

The list of commands that the Scheduler will display as buttons in its toolbar ([`toolbar` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/configuration/toolbar)). Currently, the Scheduler supports the `pdf` command which exports the Scheduler in PDF format. The supported composite props are available in [`ToolbarProps`]({% slug api_scheduler_toolbarprops_wrapper %}).

### views `Array`

The views that are displayed by the Scheduler and their configuration ([`views` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/configuration/views)).

The supported array items are:

* Objects&mdash;Specify the view configuration.
* Strings&mdash;Represent the view types (assuming the default configuration).

By default, the Scheduler displays the **Day** and **Week** views.

### width `Number | String`

The width of the Scheduler ([`width` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/configuration/width)). Numeric values are treated as pixels.

### work-day-start `Date`

The start of the work day when the user clicks the **Show business hours** button ([`workDayStart` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/configuration/workdaystart)).

### work-day-end `Date`

The end of the work day when the user clicks the **Show business hours** button ([`workDayEnd` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/configuration/workdayend)).

### work-week-start `Number`

The start of the working week (index-based) ([`workWeekStart` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/configuration/workweekstart)).

### work-week-end `Number`

The end of the working week (index-based) ([`workWeekEnd` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/configuration/workweekend)).

## Events

### add: `Function`

Fires when a new event is about to be added ([`add` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/events/add)). The event handler function context (available through the `this` keyword) will be set to the Scheduler instance.

### cancel: `Function`

Fires when the user cancels editing by clicking the **Cancel** button ([`cancel` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/events/cancel)). The event handler function context (available through the `this` keyword) will be set to the Scheduler instance.

### change: `Function`

Fires when the user selects a cell or event in the Scheduler ([`change` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/events/change)). The event handler function context (available through the `this` keyword) will be set to the Scheduler instance.

### databinding: `Function`

Fires before the Scheduler binds to its data source ([`dataBinding` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/events/databinding)). The event handler function context (available through the `this` keyword) will be set to the Scheduler instance.

### databound: `Function`

Fires when the Scheduler is bound to data from its data source ([`dataBound` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/events/databound)). The event handler function context (available through the `this` keyword) will be set to the Scheduler instance.

### edit: `Function`

Fires when the user opens a Scheduler event in the edit mode or creates a new event ([`edit` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/events/edit)). The event handler function context (available through the `this` keyword) will be set to the Scheduler instance.

### movestart: `Function`

Fires when the user starts to drag an event ([`moveStart` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/events/movestart)). The event handler function context (available through the `this` keyword) will be set to the Scheduler instance.

### move: `Function`

Fires when the user is moving an event ([`move` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/events/move)). The event handler function context (available through the `this` keyword) will be set to the Scheduler instance.

### moveend: `Function`

Fires when the user stops moving an event ([`moveEnd` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/events/moveend)).The event handler function context (available through the `this` keyword) will be set to the Scheduler instance.

### navigate: `Function`

Fires when the user changes the selected date or view ([`navigate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/events/navigate)). The event handler function context (available through the `this` keyword) will be set to the Scheduler instance.

### pdfexport: `Function`

Fires when the user clicks the **Export to PDF** toolbar button ([`pdfExport` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/events/pdfexport)).

### remove: `Function`

Fires when the user performs the `destroy` action ([`remove` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/events/remove)). The event handler function context (available through the `this` keyword) will be set to the Scheduler instance.

### resizestart: `Function`

Fires when the user starts to resize an event ([`resizeStart` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/events/resizestart)). The event handler function context (available through the `this` keyword) will be set to the Scheduler instance.

### resize: `Function`

Fires when the user is resizing an event ([`resize` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/events/resize)). The event handler function context (available through the `this` keyword) will be set to the Scheduler instance.

### resizeend: `Function`

Fires when the user releases the mouse after resizing an event ([`resizeEnd` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/events/resizeend)). The event handler function context (available through the `this` keyword) will be set to the Scheduler instance.

### save: `Function`

Fires when the user saves a Scheduler event by clicking the **Save** button ([`save` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/events/save)). The event handler function context (available through the `this` keyword) will be set to the Scheduler instance.

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler#methods). 

### kendoWidget

##### returns

Returns the Kendo UI Scheduler instance.
