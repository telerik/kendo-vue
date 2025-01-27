---
title: editableProps API
description: "API Index | editableProps"
api_reference: true
slug: api_treelist_editableprops_wrapper
---

# EditableProps

### editable-mode `String`

The edit mode that will be used.

The supported edit modes are:

* `inline`
* `popup`
* `incell`

### editable-move `Boolean`

Enables the UI for dragging and dropping of rows between parents.

### editable-template `String | Function`

The template for rendering the popup editor. To indicate to the TreeList which fields have to be updated, the template has to contain elements whose `name` HTML attributes are set as the editable fields. Alternatively, use MVVM bindings to bind HTML elements to the data item fields.

### editable-window `Object`

Configures the Kendo UI Window instance which is used when the TreeList is in the popup edit mode.

## Suggested Links

* [`Editable` in Kendo UI TreeList for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/configuration/editable)
