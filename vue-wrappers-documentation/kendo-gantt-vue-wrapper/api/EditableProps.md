---
title: editableProps API
description: "API Index | editableProps"
api_reference: true
slug: api_gantt_editableprops
---

# EditableProps

### editable-confirmation `Boolean`

If `editable-confirmation` is set to `true`, the Gantt will display a confirmation dialog when the user deletes a task or a dependency.

### editable-create `Boolean`

If `editable-create` is set to `false`, the user will not be able to create tasks.

### editable-dependency-create `Boolean`

If `editable-dependency-create` is set to `false`, the user will not be able to create dependencies.

### editable-dependency-destroy `Boolean`

If `editable-dependency-destroy` is set to `false`, the user will not be able to delete dependencies.

### editable-drag-percent-complete `Boolean`

If `editable-drag-percent-complete` is set to `false`, the user will not be able to edit the `percentComplete` of the tasks.

### editable-destroy `Boolean`

If `editable-destroy` is set to `false`, the user will not be able to delete tasks.

### editable-move `Boolean`

If `editable-move` is set to `false`, the user will not be able to move tasks.

### editable-reorder `Boolean`

If `editable-reorder` is set to `false`, the user will not be able to reorder tasks in the task list.

### editable-resize `Boolean`

If `editable-resize` is set to `false`, the user will not be able to resize tasks.

### editable-template `String | Function`

The template for rendering the editor. To indicate to the Gantt which field has to be updated, the template has to contain elements whose `name` HTML attributes are set as editable fields. Alternatively, you can use MVVM bindings to bind HTML elements to data item fields.

### editable-update `Boolean`

If `editable-update` is set to `false`, the user will not be able to update tasks.

## Suggested Links

* [`Editable` in Kendo UI Gantt for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/configuration/editable)
