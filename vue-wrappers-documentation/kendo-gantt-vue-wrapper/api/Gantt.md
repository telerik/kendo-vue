---
title: Gantt API
description: "API Index | Gantt"
api_reference: true
slug: api_ganttcomponent
---

# Gantt

## Directive

`kendo-gantt`

## Child Components

* [`kendo-gantt-column`]({% slug api_ganttcolumncomponent %})
* [`kendo-gantt-toolbar-item`]({% slug api_gantttoolbarcomponent %})
* [`kendo-gantt-view`]({% slug api_ganttviewcomponent %})

## Props

### assignments `Object`

The configuration of the assignments for the Gantt resources ([`assignments` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/configuration/assignments)). An assignment is a one-to-one mapping between a Gantt task and a Gantt resource and contains the number of units for which a resource is assigned to a task. The supported composite props are available in [`AssignmentsProps`]({% slug api_gantt_assignmentsprops %}).

### auto-bind `Boolean`

If `auto-bind` is set to `false`, the widget will not bind to the data source during initialization ([`auto-bind` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/configuration/autobind)). In this case data binding will occur when the `change` event of the data source fires. By default, the Gantt binds to the data source that is specified in the configuration.

### column-resize-handle-width `Number`

Defines the width of the column resize handle in pixels ([`columnResizeHandleWidth` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/configuration/columnresizehandlewidth)). Apply a larger value for easier grasping.

### columns `Array`

The configuration of the Gantt columns ([`columns` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/configuration/columns)).

Accepts the following values:

* Arrays of JavaScript objects&mdash;JavaScript objects are interpreted as column configurations. The Gantt creates a column for every item of the array.
* Strings&mdash;Strings are interpreted as the field to which the column is bound.

### current-time-marker `Boolean | Object`

If `current-time-marker` is set to `false`, the `current- time` marker of the Gantt will not be displayed ([`currentTimeMarker` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/configuration/currenttimemarker)). The supported composite props are available in [`CurrentTimeMarkerProps`]({% slug api_gantt_currenttimemarkerprops %}).

### data-source `Object | Array`

The data source of the Gantt which contains the tasks ([`dataSource` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/configuration/datasource)).

The supported values are:

* A JavaScript object which represents any valid data source configuration.
* A JavaScript array.
* An existing `kendo.data.GanttDataSource` instance.

If the `dataSource` option is set to a JavaScript object or an array, the Gantt initializes a new `kendo.data.GanttDataSource` instance by using that value as the data source configuration. If the `dataSource` option is an existing `kendo.data.GanttDataSource` instance, the Gantt uses that instance and will not initialize a new one.

### date `Date`

If `date` is set to a date and the date is within the start-end range of the selected view, the timeline of the currently selected view is scrolled to the start from this date ([`date` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/configuration/date)).

### dependencies `Object | Array`

The data source of the Gantt which contains the dependencies ([`dependencies` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/configuration/dependencies)).

The supported values are:

* A JavaScript object which represents any valid data source configuration.
* A JavaScript array.
* An existing `kendo.data.GanttDependencyDataSource` instance.

If the `dataSource` option is set to a JavaScript object or an array, the Gantt initializes a new `kendo.data.GanttDependencyDataSource` instance by using that value as the data source configuration. If the `dataSource` option is an existing `kendo.data.GanttDependencyDataSource` instance, the Gantt uses that instance and will not initialize a new one.

### editable `Boolean | Object`

If `editable` is set to `false`, the user will not be able to create, modify, or delete tasks and dependencies ([`editable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/configuration/editable)). The supported composite props are available in [`EditableProps`]({% slug api_gantt_editableprops %}).

### navigatable `Boolean`

If `navigatable` is set to `true`, the user will be able to navigate the Gantt through the keyboard ([`navigatable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/configuration/navigatable)). By default, the keyboard navigation is disabled.

### work-day-start `Date`

Sets the start of the work day ([`workDayStart` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/configuration/workdaystart)).

### work-day-end `Date`

Sets the end of the work day ([`workDayEnd` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/configuration/workdayend)).

### work-week-start `Number`

The index-based start of working week ([`workWeekStart` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/configuration/workweekstart)).

### work-week-end `Number`

The index-based end of working week ([`workWeekEnd` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/configuration/workweekend)).

### hour-span `Number`

The span of an hour slot ([`hourSpan` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/configuration/hourspan)).

### snap `Boolean`

If `snap` is set to `true`, the Gantt will snap tasks to the nearest slot during dragging while resizing or moving ([`snap` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/configuration/snap)). To allow free moving and resizing of tasks, set `snap` to `false`.

### height `Number | String`

The height of the Gantt. Numeric values are treated as pixels ([`height` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/configuration/height)).

### list-width `String | Number`

The width of the task list. Numeric values are treated as pixels ([`listWidth` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/configuration/listwidth)).

### messages `Object`

The configuration of the Gantt messages ([`messages` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/configuration/messages)). Use the `messages` option to customize or localize the Gantt messages. The supported composite props are available in [`MessagesProps`]({% slug api_gantt_messagesprops %}).

### pdf `Object`

Configures the PDF export settings of the Gantt ([`pdf` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/configuration/pdf)). The supported composite props are available in [`PdfProps`]({% slug api_gantt_pdfprops %}).

### range `Object`

Configures the range settings of the Gantt ([`range` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/configuration/range)). The supported composite props are available in [`RangeProps`]({% slug api_gantt_rangeprops %}).

### resizable `Boolean`

If `resizable` is set to `true`, the user can resize columns by dragging their header borders ([`resizable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/configuration/resizable)). By default, resizing is disabled.

### selectable `Boolean`

If `selectable` is set to `false`, the user will not be able to select tasks in the Gantt ([`assignments` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/configuration/assignments)). By default, selection is enabled and triggers the `change` event.

### show-work-days `Boolean`

If `show-work-days` is set to `false`, the Gantt views will show all days of the week ([`showWorkDays` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/configuration/showworkdays)). By default, the views display only business days.

### show-work-hours `Boolean`

If `show-work-hours` is set to `false`, the **Day** view will show all hours of the day ([`showWorkHours` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/configuration/showworkhours)). By default, the view displays only business hours.

### task-template `String | Function`

The template for rendering the Gantt tasks ([`taskTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/configuration/tasktemplate)). The template supports the `task` fields.

### toolbar `Array`

If a string value is assigned to the toolbar configuration option, it will be treated as a single string template for the whole Gantt toolbar and the string value will be passed as an argument to a `kendo.template()` function ([`toolbar` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/configuration/toolbar)).

If a `kendo.template()` function call or a generic function reference value is assigned, then the return value of the function will be used to render the content of the Gantt toolbar.

If an array value is assigned, it will be treated as the list of commands that is displayed in the toolbar of the Gantt.

Accepts the following commands:

* `append`&mdash;A built-in command that adds a new task to the Gantt.
* `pdf`&mdash;A built-in command that exports the Gantt to PDF.
* Custom

### tooltip `Object`

The configuration options for the task tooltip ([`tooltip` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/configuration/tooltip)). The supported composite props are available in [`TooltipProps`]({% slug api_gantt_tooltipprops %}).

### views `Array`

The views that are displayed by the Gantt and their configuration ([`views` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/configuration/views)).

The supported values for the array items are:

* Objects&mdash;Specify the view configuration.
* Strings&mdash;Represent the view types (assuming default configuration).

By default, the Gantt displays **Day**, **Week**, and **Month** views.

### resources `Object`

The configuration of the Gantt resources ([`resources` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/configuration/resources)). A Gantt resource is optional metadata that can be associated with a Gantt task. The supported composite props are available in [`ResourcesProps`]({% slug api_gantt_resourcesprops %}).

### row-height `Number | String`

The height of the table rows ([`rowHeight` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/configuration/rowheight)). Numeric values are treated as pixels.

## Events

### databinding: `Function`

Fires before the Gantt binds to its data source ([`databinding` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/events/databinding)). The event handler function context (available through the this keyword) will be set to the Gantt instance.

### databound: `Function`

Fires when the widget is bound to data from its data source [`dataBound` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/events/databound)). The event handler function context (available through the this keyword) will be set to the Gantt instance.

### add: `Function`

Fires when a new task or a new dependency is about to be added [`add` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/events/add)). The event handler function context (available through the this keyword) will be set to the Gantt instance.

### edit: `Function`

Fires when the user starts editing a task by double-clicking a cell [`edit` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/events/edit)). The event handler function context (available through the this keyword) will be set to the Gantt instance.

### remove: `Function`

Fires when a task or a dependency is about to be removed [`remove` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/events/remove)). The event handler function context (available through the this keyword) will be set to the Gantt instance.

### cancel: `Function`

Fires when the user cancels the editing of a task cell by pressing the `Esc` key [`cancel` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/events/cancel)). The event handler function context (available through the this keyword) will be set to the Gantt instance.

### save: `Function`

Fires when a task field is updated upon user interaction [`save` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/events/save)). The event handler function context (available through the this keyword) will be set to the Gantt instance.

### change: `Function`

Fires when the user selects a task in the Gantt [`change` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/events/change)). The event handler function context (available through the this keyword) will be set to the Gantt instance.

### columnresize: `Function`

Fires when the user resizes a column [`resize` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/events/resize)). The event handler function context (available through the this keyword) will be set to the Gantt instance.

### navigate: `Function`

Fires when the user changes the selected view of the Gantt [`navigate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/events/navigate)). The event handler function context (available through the this keyword) will be set to the Gantt instance.

### movestart: `Function`

Fires when the user starts to drag a task [`moveStart` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/events/movestart)). The event handler function context (available through the this keyword) will be set to the Gantt instance.

### move: `Function`

Fires when the user is moving a task [`move` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/events/move)). The event handler function context (available through the this keyword) will be set to the Gantt instance.

### moveend: `Function`

Fires when the user stops moving a task [`moveEnd` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/events/moveend)). The event handler function context (available through the this keyword) will be set to the Gantt instance.

### pdfexport: `Function`

Fires when the user clicks the **Export to PDF** toolbar button [`pdfExport` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/events/pdfexport)).

### resizestart: `Function`

Fires when the user starts to resize a task [`resizeStart` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/events/resizestart)). The event handler function context (available through the this keyword) will be set to the Gantt instance.

### resize: `Function`

Fires when the user is resizing a task [`resize` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/events/resize)). The event handler function context (available through the this keyword) will be set to the Gantt instance.

### resizeend: `Function`

Fires when the user releases the mouse after resizing a task [`resizeEnd` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/events/resizeend)). The event handler function context (available through the this keyword) will be set to the Gantt instance.

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt#methods). 

### kendoWidget

##### returns

Returns the Kendo UI Gantt instance.
