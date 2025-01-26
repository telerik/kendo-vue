---
title: toolbarProps API
description: "API Index | toolbarProps"
api_reference: true
slug: api_spreadsheet_toolbarprops
---

# ToolbarProps

### toolbar-home `Boolean | Array`

A Boolean value which indicates if the Spreadsheet will display a **Home** tab or a collection of tools that will be shown in the **Home** tab.

The supported tools are:

* `open`
* `exportAs`
* `[cut, copy, paste]`
* `[bold, italic, underline]`
* `backgroundColor`
* `textColor`
* `borders`
* `fontSize`
* `fontFamily`
* `alignment`
* `textWrap`
* `[formatDecreaseDecimal, formatIncreaseDecimal]`
* `format`
* `merge`
* `freeze`
* `filter`

Those tools which are part of a tool group are defined in an array&mdash;for example, `["bold", "italic", "underline"]`.

### toolbar-insert `Boolean | Array`

A Boolean value which indicates if the Spreadsheet will display the **Insert** tab or a collection of tools that will be shown in the **Insert** tab.

The supported tools are:

* `[ addColumnLeft, addColumnRight, addRowBelow, addRowAbove ]`
* `[ deleteColumn, deleteRow ]`

Those tools which are part of a tool group are defined in an array&mdash;for example, `["deleteColumn", "deleteRow"]`.

### toolbar-data `Boolean | Array`

A Boolean value which indicates if the Spreadsheet will display the **Insert** tab or a collection of tools that will be shown in the **Insert** tab.

The supported tools are:

* `sort`
* `filter`
* `validation`

## Suggested Links

* [`Toolbar` in Kendo UI Spreadsheet for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/configuration/toolbar)
