---
title: editableProps API
description: "API Index | editableProps"
api_reference: true
slug: api_scheduler_editableprops_wrapper
---

# EditableProps

### editable-confirmation `Boolean | String`

If `editable-confirmation` is set to `true`, the Scheduler will display a confirmation dialog when the user clicks the **Destroy** button. Can be set to a string which will be used as the confirmation text.

### editable-create `Boolean`

If `editable-create` is set to `true`, the user can create new events. By default, `editable-create` is enabled.

### editable-destroy `Boolean`

If `editable-destroy` is set to `true`, the user can delete events from the view by clicking the **Destroy** button. By default, `editable-destroy` is enabled.

### editable-edit-recurring-mode `String`

The edit mode of recurring events.

The supported modes are:

* (Default) `dialog`
* `series`
* `occurrence`

### editable-move `Boolean`

If `editable-move` is set to `true`, the Scheduler allows the moving of events. Dragging an event changes its start and end time.

### editable-resize `Boolean`

If `editable-resize` is set to `true`, the Scheduler enables event resizing. Dragging the resize handles changes the start or end time of the event.

### editable-template `String | Function`

The template for rendering the editor. To indicate to the Scheduler which fields have to be updated, the template has to contain elements whose `name` HTML attributes are set as the editable fields. Alternatively, use MVVM bindings to bind HTML elements to the data item fields.

### editable-update `Boolean`

If `editable-update` is set to `true`, the user can update events. By default, `editable-update` is enabled.

### editable-window `Object`

(Optional) Configures the Kendo UI Window instance which is used when the Grid is in the popup edit mode.

## Suggested Links

* [`Editable` in Kendo UI Scheduler for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/configuration/editable)
