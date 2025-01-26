---
title: checkboxesProps API
description: "API Index | checkboxesProps"
api_reference: true
slug: api_dropdowntree_checkboxesprops_wrapper
---

# CheckboxesProps

### checkboxes-check-children `Boolean`

Indicates whether the checkboxes of child items will be also checked when the checkbox of a parent item is checked. This also enables tri-state checkboxes with an indeterminate state.

### checkboxes-name `String`

Sets the `name` attribute of the checkbox inputs. The name will be posted to the server.

### checkboxes-template `String | Function`

The template for rendering the checkboxes. Can be used to allow the posting of additional information next to the TreeView checkboxes.

The template supports the following fields:

* `item`&mdash;The data item of the given node.
* `treeview`&mdash;The TreeView options.

## Suggested Links

* [`Checkboxes` in Kendo UI DropDownTree for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/configuration/checkboxes)
