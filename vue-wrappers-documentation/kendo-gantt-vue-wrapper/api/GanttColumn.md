---
title: GanttColumn API
description: "API Index | GanttColumn"
api_reference: true
slug: api_ganttcolumncomponent
---

# GanttColumn

## Directive

`kendo-gantt-column`

## Parent Components

* [`kendo-gantt`]({% slug api_ganttcomponent %})

## Props

### field `String`

The field to which the column is bound. The value of this field is displayed by the column during data binding.

The field name:

* Has to be a valid Javascript identifier.
* Has to contain only alphanumeric, `$`, or `_` characters.
* Must not start with a digit.

### title `String`

The text that is displayed in the column header cell. If `tile` is not set, the `field` value will be used.

### format `String`

The format that is applied to the value before the value is displayed.

Takes the `{0:format}` form where `format` is any of the following:

* A standard number format.
* A custom number format.
* A standard date format.
* A custom date format.

### width `String | Number`

The width of the column. Numeric values are treated as pixels.

### editable `Boolean`

Specifies whether this column can be edited by the user.

### sortable `Boolean`

If `sortable` is set to `true`, the user can sort this column by clicking its header cells. By default, sorting is disabled.

## Suggested Links

* [`Columns` in Kendo UI Gantt for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/configuration/columns)
