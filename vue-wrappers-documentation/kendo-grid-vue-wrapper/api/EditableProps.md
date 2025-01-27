---
title: editableProps API
description: "API Index | editableProps"
api_reference: true
slug: api_grid_editableprops_wrapper
---

# EditableProps

### editable-confirmation `Boolean | String | Function`

If `editable-confirmation` is set to `true`, the Grid will display a confirmation dialog when the user clicks the **Destroy** command button.

The supported values are:

* A string&mdash;Will be used as the confirmation text.
* A function&mdash;Will be called, passing the model instance, to return the confirmation text.

### editable-cancel-delete `String`

If confirmation is enabled and when the user clicks the **Destroy** command button, the Grid will display a confirmation dialog. If the Grid is in mobile mode, this text will be used for the **Cancel** button.

### editable-confirm-delete `String`

If confirmation is enabled and when the user clicks the **Destroy** command button, the Grid will display a confirmation dialog. If the Grid is in mobile mode, this text will be used for the **Confirm** button.

### editable-create-at `String`

The position at which new data items are inserted in the Grid.

The supported values are:

* (Default) `top`&mdash;New data items are inserted at the top.
* `bottom`&mdash;New data items are inserted at the bottom.

### editable-destroy `Boolean`

If `editable-destroy` is set to `true`, the user can delete data items from the Grid by clicking the **Destroy** command button. By default, deletion is enabled.

### editable-mode `String`

The editing mode that will be used.

The supported editing modes are:

* `incell`
* `inline`
* `popup`

### editable-template `String | Function`

The template for rendering the popup editor. To indicate to the Grid which fields have to be updated, the template has to contain elements whose `name` HTML attributes are set as the editable fields. Alternatively, use MVVM bindings to bind HTML elements to the data item fields.

### editable-update `Boolean`

If `editable-update` is set to `true` and editing is enabled, the user will be able to edit the data items.

### editable-window `Object`

(Optional) Configures the Kendo UI Window instance which is used when the edit mode of the Grid is set to `popup`. For more information, refer to the API of the Window.

## Suggested Links

* [`Editable` in Kendo UI Grid for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/configuration/editable)
