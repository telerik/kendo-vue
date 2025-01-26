---
title: TreeListColumn API
description: "API Index | TreeListColumn"
api_reference: true
slug: api_treelistcolumncomponent_wrapper
---

# TreeListColumn

## Directive

`kendo-treelist-column`

## Props

### attributes `Object`

The HTML attributes of the table cell (`<td>`) that are rendered for the column.

### columns `Array`

The columns which will be rendered as child columns under the column header of this group. Group columns cannot be data-bound and support a limited number of bound column settings, such as `title` and `locked`.

### command `Array`

The configuration of the column commands. If `command` is set, the column will display a button for every command.

The supported commands are:

* (Built-in) `edit`&mdash;Switches the current table row to edit mode.
* (Built-in) `createChild`&mdash;Adds a new child item to the current table row and switches to edit mode.
* (Built-in) `destroy`&mdash;Removes the data item to which the current table row is bound.
* Custom&mdash;Supported by specifying the `click` option.

### editable `Function`

The JavaScript function which is executed when a cell or a row is about to be opened for editing. The returned result determines whether the TreeList will create an editor for the column.

### editor `Function`

Specifies a UI for custom editing of the column. To create the editing UI, use the `container` parameter.

### encoded `Boolean`

* If `encoded` is set to `true`, the column value will be HTML-encoded before it is displayed.
* If `encoded` is set to `false`, the column value will be displayed as is.

By default, the column value is HTML-encoded.

### expandable `Boolean`

If `expandable` is set to `true`, the column displays the icons that are used for expanding and collapsing child rows. By default, the first column of the TreeList is expandable.

### field `String`

The field to which the column is bound. The value of this field is displayed by the column during data binding. The field name has to be any valid Javascript identifier, has to contain alphanumeric, `$`, or `_` characters, and must not start with a digit.

### filterable `Boolean`

* If `filterable` is set to `true` and filtering is enabled, the TreeList will display a filter menu for this column.
* If `filterable` is set to `false`, the TreeList will not display the filter menu.

By default, a filter menu is displayed for all columns when filtering is enabled over the `filterable` option. `filterable` can be set to a JavaScript object which represents the filter menu configuration.

### filterable-ui `String | Function`

The `role` data attribute of the TreeList that is used in the filter menu or a JavaScript function which initializes the TreeList.

### footer-template `String | Function`

The template for rendering the footer table cell of the column.

The template supports the following fields:

* `average`&mdash;The value of the `average` aggregate (if specified).
* `count`&mdash;The value of the `count` aggregate (if specified).
* `max`&mdash;The value of the `max` aggregate (if specified).
* `min`&mdash;The value of the `min` aggregate (if specified).
* `sum`&mdash;The value of the `sum` aggregate (if specified).

### format `String`

The format that is applied to the value before it is displayed.

The supported format is `{0:format}` where `format` is any of the following values:

* A standard number format.
* A custom number format.
* A standard date format.
* A custom date format.

### header-attributes `Object`

The HTML attributes of the table header cell (`<th>`) that is rendered for the column.

### header-template `String | Function`

The template for rendering the content of the column header. By default, the TreeList displays the value of the `title` column option in the column header cell.

### min-screen-width `Number`

The pixel screen width below which the column will be hidden. Avoid using `min-screen-width` and `hidden` at the same time because `min-screen-width` takes precedence over `hidden`.

### sortable `Boolean`

* If `sortable` is set to `true` and sorting is enabled, the user can click the column header and sort the TreeList by the column field.
* If `sortable` is set to `false`, sorting will be disabled for this column.

By default, all columns are sortable if sorting is enabled over the `sortable` option.

### sortable-compare `Function`

A JavaScript function which for comparing the values.

The functions returns the following values:

* If the first argument is less than the second one, the function returns `-1` (minus one).
* If both arguments are the same, the function returns `0` (zero).
* If the first argument is greater than the second one, the function returns `+1` (plus one).

### template `String | Function`

The template for rendering the column content. The TreeList renders table rows (`<tr>`) which represent the data source items. Each table row consists of table cells (`<td>`) which represent the columns of the TreeList. By default, the TreeList displays the HTML-encoded value of the field in the column.

### title `String`

The text that is displayed in the column header cell. If `title` is not set, the TreeList uses the `field` value.

### width `String | Number`

The width of the column. Numeric values are treated as pixels.

### hidden `Boolean`

If `hidden` is set to `true`, the TreeList will not display a column. By default, the TreeList displays all columns.

### menu `Boolean`

If `menu` is set to `true`, the column in the column menu of the TreeList will be visible. By default, the column menu includes all data-bound columns&mdash;the ones that have their `field` set.

### locked `Boolean`

If `locked` is set to `true`, the TreeList will display the column as locked (frozen).

### lockable `Boolean`

If `lockable` is set to `false`, the column will remain to the side of the TreeList where its own `locked` configuration placed it.

## Suggested Links

* [`Columns` in Kendo UI TreeList for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/configuration/columns)
