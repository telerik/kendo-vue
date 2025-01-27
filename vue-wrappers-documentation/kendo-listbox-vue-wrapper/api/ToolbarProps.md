---
title: toolbarProps API
description: "API Index | toolbarProps"
api_reference: true
slug: api_listbox_toolbarprops_wrapper
---

# ToolbarProps

### toolbar-position `String`

The relative position of the ListBox element at which the toolbar will be displayed.

The supported values are:

* `left`
* `right`
* `top`
* `bottom`

### toolbar-tools `Array`

A collection of tools that are used to interact with the ListBox.

The supported built-in tools are:

* `moveUp`&mdash;Moves up the selected ListBox items.
* `moveDown`&mdash;Moves down the selected ListBox items.
* `remove`&mdash;Removes the selected ListBox items.
* `transferTo`&mdash;Moves the selected items from the current ListBox to the target that is defined in the `connectWith` option.
* `transferFrom`&mdash;Moves the selected items from the ListBox that is defined in the `connectWith` option to the current ListBox.
* `transferAllTo`&mdash;Moves all items from the current ListBox to the target that is defined in the `connectWith` option.
* `transferAllFrom`&mdash;Moves all items from the ListBox that is defined in the `connectWith` option to the current ListBox.

## Suggested Links

* [`Toolbar` in Kendo UI ListBox for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/listbox/configuration/toolbar)
