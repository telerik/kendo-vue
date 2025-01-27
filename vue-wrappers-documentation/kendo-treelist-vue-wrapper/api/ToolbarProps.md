---
title: toolbarProps API
description: "API Index | toolbarProps"
api_reference: true
slug: api_treelist_toolbarprops_wrapper
---

# ToolbarProps

### toolbar-toolbar-item-click `Function`

The click handler of the toolbar command which is used for custom toolbar commands.

### toolbar-toolbar-item-image-class `String`

A class name that will be rendered inside the **Toolbar** button. If `toolbar-toolbar-item-image-class` is set, the TreeList renders an additional `span` element inside the **Toolbar** button having its `class` name set to the `option` value. This setting enables you to display an icon inside your custom toolbar commands.

### toolbar-toolbar-item-name `String`

The name of the toolbar command. The TreeList outputs the `name` in the HTML as a value of the `data`-command attribute of the button.

The supported values are:

* (Built-in) `create`
* (Built-in) `excel`
* (Built-in) `pdf`
* A custom string

### toolbar-toolbar-item-text `String`

The text that is displayed by the command button. If `toolbar-toolbar-item-text` is not set, the TreeList will use the `name` option as the button text instead.

## Suggested Links

* [`Toolbar` in Kendo UI TreeList for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/configuration/toolbar)
