---
title: checkboxesProps API
description: "API Index | checkboxesProps"
api_reference: true
slug: api_treeview_checkboxesprops_wrapper
---

# CheckboxesProps

### checkboxes-check-children `Boolean`

Indicates whether the checkboxes of the child items will be checked when the user checks the checkbox of a parent item. Also enables the tri-state checkboxes of an indeterminate state.

### checkboxes-name `String`

The `name` attribute of the checkbox inputs which will be posted to the server.

### checkboxes-template `String | Function`

The template for rendering the checkboxes. Allows the posting of additional information next to the TreeView checkboxes.

The template supports the following fields:

* `item`&mdash;The data item of the specific node.
* `treeview`&mdash;The options of the TreeView.

## Suggested Links

* [`Checkboxes` in Kendo UI TreeView for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treeview/configuration/checkboxes)
