---
title: Grid API
description: "API Index | Grid"
api_reference: true
slug: api_gridcolumncomponent_wrapper
---

# GridColumn

## Directive

`kendo-grid-column`

## Parent Components

* [`kendo-grid`]({% slug api_gridcomponent_wrapper %})

## Props

### aggregates `Array`

The aggregates which are calculated when the Grid is grouped by a column field.

The supported aggregates are:

* `average`
* `count`
* `max`
* `min`
* `sum`

### attributes `Object`

The HTML attributes of the table cell (`<td>`) that are rendered for the column.

### columns `Array`

The columns which will be rendered as child columns under this group column header. The group column cannot be data-bound and supports a limited number of bound-column settings such as `title`, `headerTemplate`, and `locked`.

### command `String|Array`

The configuration of the column commands. If `command` is set, the column will display a button for every command.

The supported commands are:

* (Built-in) `edit`&mdash;Switches the current table row to edit mode.
* (Built-in) `destroy`&mdash;Removes the data item to which the current table row is bound.
* Custom&mdash;Supported by specifying the `click`  option.

### command-command-item-class-name `String`

The CSS class which is applied to the command button.

### command-command-item-click `Function`

The JavaScript function which is executed when the user clicks the command button. The function receives a jQuery Event as an argument. The function context (available through the this keyword) will be set to the Grid instance.

### command-command-item-icon-class `String`

The class for the web font icon of the button&mdash;when defined as an object, `command-command-item-icon-class` enables you to customize the web font icon for the **Edit**, **Update**, and **Cancel** command buttons.

### command-command-item-icon-class-cancel `String`

The class for the web font icon of the **Cancel** command button.

### command-command-item-icon-class-edit `String`

The class for the web font icon of the **Edit** command button.

### command-command-item-icon-class-update `String`

The class for the web font icon of the **Update** command button.

### command-command-item-name `String`

The name of the command. Can be set to a custom value.

The built-in commands are:

* `edit`
* `destroy`

### command-command-item-template `String`

The template of the command column.

### command-command-item-text `String`

The text which is displayed by the command button and the `cancel`, `edit`, and `update` text of the **Edit** command. If `command-command-item-text` is not set, the `name` option will be used as the button text.

### command-command-item-text-edit `String`

The `edit` text of the **Edit** command.

### command-command-item-text-cancel `String`

The `cancel` text of the **Edit** command.

### command-command-item-text-update `String`

The `update` text of the **Edit** command.

### command-command-item-visible `Function`

The JavaScript function which is executed on initializing the row which determines whether the command button will be visible. The function receives the data item object for the row as an argument.

### editable `Function`

The JavaScript function which is executed when the cell or row is about to be opened for edit. The result that is returned determines whether an editor for the column will be created.

### editor `Function`

Specifies a custom editing UI for the column. The container parameter is used to create the editing UI.

### encoded `Boolean`

* If `encoded` is set to `true`, the column value will be HTML-encoded before it is displayed.
* If `encoded` is set to `false`, the column value will be displayed as is.

By default, the column value is HTML-encoded.

### field `String`

The field to which the column is bound. The value of this field is displayed in the cells of the column during the data binding. Only columns that are bound to a field can be sortable or filterable. The field name has to be any valid JavaScript identifier, has to contain only alphanumeric characters, `$`, or `_` characters, and must not start with a digit.

### filterable `Boolean`

* If `filterable` is set to `true` and filtering is enabled, a filter menu will be displayed for this column.
* If `filterable` is set to `false`, the filter menu will not be displayed.

By default, a filter menu is displayed for all columns when filtering is enabled over the `filterable` option. Can be set to a JavaScript object which represents the configuration of the filter menu.

### filterable-cell-data-source `Object`

Specifies a custom data source for the AutoComplete when the type of the column is a string.

The supported values are:

* A JavaScript object which represents any valid data source configuration.
* A JavaScript array.
* An existing `kendo.data.DataSource` instance.

> Avoid using the same data source instance for the Grid and the AutoComplete.

If the `dataSource` options is missing, a new, cloned instance of the Grid data source will be used. If the `dataSource` option is an existing `kendo.data.DataSource` instance, the Grid will use that instance and will not initialize a new one.

### filterable-cell-data-text-field `String`

Specifies the name of the field which, when using a string-type column and when a `CustomDataSource` is provided, will provide the text representation for the AutoComplete suggestion. By default, the name of the field which is bound to the column will be used.

### filterable-cell-delay `Number`

Specifies the delay of the AutoComplete which will provide the suggest functionality if using a string-type column.

### filterable-cell-input-width `Number`

Specifies the width of the input before it is initialized or turned into a widget. Provides a convenient way to set the width according to the column width.

### filterable-cell-suggestion-operator `String`

Specifies the filter option of the AutoComplete.

The supported values correspond to the values which are supported for the `filter` option of the AutoComplete:

* `startswith`
* `endswith`
* `contains`&mdash;Performs a case-insensitive search. To perform a case-sensitive filtering, set a custom filtering function through the `dataSource.filter.operator` option.

### filterable-cell-min-length `Number`

Specifies the `minLength` option of the AutoComplete widget when the column is of the string type.

### filterable-cell-enabled `Boolean`

If `filterable-cell-enabled` is set to `false`, the Grid will not render the cell-filtering widget for that specific column.

### filterable-cell-operator `String`

Specifies the default operator that will be used for the cell filtering.

### filterable-cell-show-operators `Boolean`

Specifies whether to show or hide the drop-down list with the operators.

### filterable-cell-template `Function`

A JavaScript function which will customize the way the input for the filter value is rendered.

The function receives an `object` argument with the following fields:

* `element`&mdash;The default input inside the filter cell.
* `dataSource`&mdash;A Kendo UI DataSource instance which has the same settings as the Grid dataSource but will only contain data items with unique values for the current column. This instance is also used by the default AutoComplete widget, which is used inside the filter cell if no template is set. If the Grid uses remote binding, the passed dataSource instance may still not be populated at the time the template function is called.

### filterable-extra `Boolean`

If `filterable-extra` is set to `true`, the filter menu of the column will allow the user to input a second criterion.

### filterable-multi `Boolean`

Enables the multi-check filtering support for a specific column.

### filterable-data-source `Object | Array`

The dataSource configuration for the items that will be used when `columns.filterable.multi` is enabled.

### filterable-check-all `Boolean`

When the Grid uses checkbox filtering, `filterable-check-all` controls whether to show or not the **Check all** checkbox before the other checkboxes.

### filterable-item-template `Function`

When the Grid uses checkbox filtering, `filterable-item-template` allows the customization of the logic that renders the checkboxes.

### filterable-operators `Object`

Identical to `filterable.operators` but applied to a specific column.

### filterable-search `Boolean`

When the Grid uses checkbox filtering, `filterable-search` controls whether to show a search box when checkbox filtering is enabled.

### filterable-ignore-case `Boolean`

Toggles between case-insensitive (default) and case-sensitive searching.

### filterable-ui `String | Function`

The role `data` attribute of the widget that is used in the filter menu or a JavaScript function which initializes that widget.

### footer-attributes `Object`

The HTML attributes of the column footer. The `footerAttributes` option can be used to set the HTML attributes of that cell.

### footer-template `String | Function`

The template for rendering the footer table cell for the column.

The template supports the following fields:

* `average`&mdash;The value of the `average` aggregate (if specified).
* `count`&mdash;The value of the `count` aggregate (if specified).
* `max`&mdash;The value of the `max` aggregate (if specified).
* `min`&mdash;The value of the `min` aggregate (if specified).
* `sum`&mdash;The value of the `sum` aggregate (if specified).
* `data`&mdash;Provides access to all available aggregates, for example, `data.fieldName1.sum` or `data.fieldName2.average`.

### format `String`

The format that is applied to the value before it is displayed.

Takes the `{0:format}` form where `format` is:

* A standard number format.
* A custom number format.
* A standard date format.
* A custom date format.

### groupable `Boolean`

If `groupable` is set to `false`, the column will not be groupable (requires the `groupable` property of the Grid to be enabled). By default, all columns are groupable.

### groupable-sort-compare `Function`

A JavaScript function for comparing the groups&mdash;for more information on comparing the items of the groups, refer to `sortable.compare`. Has the same signature as the `compare` function that is accepted by `Array.sort`.

### groupable-sort-dir `String`

The sort order of the groups according to the group field.

The supported values are:

* `asc`&mdashh;Ascending order.
* `desc`&mdash;Descending order.

### group-header-column-template `String | Function`

Introduced by the Kendo UI 2018 R3 release. The template for rendering the content for a specific column in the group header when the Grid is grouped by the column field.

The template supports the following fields:

* `average`&mdash;The value of the `average` aggregate (if specified).
* `count`&mdash;The value of the `count` aggregate (if specified).
* `max`&mdash;The value of the `max` aggregate (if specified).
* `min`&mdash;The value of the `min` aggregate (if specified).
* `sum`&mdash;The value of the `sum` aggregate (if specified).
* `data`&mdash;Provides access to all available aggregates, for example, `data.fieldName1.sum` or `data.fieldName2.average`.
* `group`&mdash;Provides information for the current group and represents an object with the `field`, `value`, and `items` fields. The `items` field contains the data items for the current group. If the data items are grouped (if child groups are present), returns groups.

### group-header-template `String | Function`

The template for rendering the group header when the Grid is grouped by the column field. By default, the name of the field and the current group value are displayed.

The template supports the following fields:

* `value`&mdash;The current group value.
* `field`&mdash;The current group field.
* `average`&mdash;The value of the `average` aggregate (if specified).
* `count`&mdash;The value of the `count` aggregate (if specified).
* `max`&mdash;The value of the `max` aggregate (if specified).
* `min`&mdash;The value of the `min` aggregate (if specified).
* `sum`&mdash;The value of the `sum` aggregate (if specified).
* `aggregates`&mdash;Provides access to all available aggregates, for example, `data.fieldName1.sum` or `data.fieldName2.average`.
* `items`&mdash;The data items for the current group. If the data items are grouped (if child groups are present), returns groups.

### group-footer-template `String | Function`

The template for rendering the group footer when the Grid is grouped by the column field. By default, the group footer is not displayed.

The template supports the following fields:

* `average`&mdash;The value of the `average` aggregate (if specified).
* `count`&mdash;The value of the `count` aggregate (if specified).
* `max`&mdash;The value of the `max` aggregate (if specified).
* `min`&mdash;The value of the `min` aggregate (if specified).
* `sum`&mdash;The value of the `sum` aggregate (if specified).
* `data`&mdash;Provides access to all available aggregates, for example, `data.fieldName1.sum` or `data.fieldName2.average`.
* `group`&mdash;Provides information for the current group and represents an object with the `field`, `value`, and `items` fields. The `items` field contains the data items for the current group. If the data items are grouped (if child groups are present), returns groups.

### header-attributes `Object`

The HTML attributes of the column header. The Grid renders a table header cell (`<th>`) for every column. The `headerAttributes` option can be used to set the HTML attributes of that `<th>` element.

### header-template `String | Function`

The template which renders the column header content. By default, the value of the `title` column option is displayed in the column header cell.

### hidden `Boolean`

If `hidden` is set to `true`, the column will not be displayed in the Grid. By default, all columns are displayed.

### locked `Boolean`

If `locked` is set to `true`, the Grid column will be displayed as locked (frozen). For more information, refer to the article about hte appearance of the Grid.

### lockable `Boolean`

If `lockable` is set to `false`, the column will remain on that side of the Grid where its own `locked` configuration placed it.

### media `String`

Sets the condition that needs to be satisfied for a column to remain visible. The `hidden` option takes precedence over `media`.

The `media` property:

* Accepts valid strings for the `matchMedia` browser API (if supported by the browser) and toggles the visibility of the columns based on the media queries.
* Cannot be used with `minScreenWidth` at the same time.
* Accepts the device identifiers that are available in Bootstrap 4:

  * `xs` is equivalent to `(max-width: 576px)`.
  * `sm` is equivalent to `(min-width: 576px)`.
  * `md` is equivalent to `(min-width: 768px)`.
  * `lg` is equivalent to `(min-width: 992px)`.
  * `xl` is equivalent to `(min-width: 1200px)`.

### min-resizable-width `Number`

The pixel screen width below which the user will not be able to resize the column through the UI.

### min-screen-width `Number`

The pixel screen width below which the column will be hidden. The `min-screen-width` setting takes precedence over the `hidden` setting and the two cannot be used at the same time.

### selectable `Boolean`

If `selectable` is set to `true`, the Grid will render a select column with checkboxes in each cell enabling in this way the multi-row selection. The header checkbox allows users to select and deselect all the rows on the current page.

### sortable `Boolean`

* If `sortable` is set to `true`, the user can click the column header and sort the Grid by the column field when sorting is enabled.
* If `sortable` is set to `false`, sorting will be disabled for this column.

By default, if sorting is enabled over the `sortable` option, all columns are sortable.

### sortable-allow-unsort `Boolean`

* If `sortable-allow-unsort` is set to `true`, the user can get the Grid in an unsorted state by clicking the sorted column header.
* If `sortable-allow-unsort` is set to `false`, the user will not be able to unsort the column once it was sorted.

### sortable-compare `Function`

A JavaScript function for comparing the values. It has the same signature as the `compare` function that is accepted by `Array.sort`.

The basic implementation of the function is (pseudo-code):

```
    pseudo
      function compare(a, b, descending) {
        if (a is less than b by some ordering criterion) {
      return -1;       
    }
```

A notable exception is that the Kendo UI suite also supplies a third parameter that indicates the sort direction (`true` for descending).

### sortable-initial-direction `String`

Determines the initial (from unsorted to sorted state) sort direction.

The supported values are:

* `asc`
* `desc`

### template `String | Function`

The template for rendering the column content. The Grid renders table rows (`<tr>`) which represent the data source items. Each table row consists of table cells (`<td>`) which represent the Grid columns. By default, the HTML-encoded value of the field is displayed in the column.

### title `String`

The text that is displayed in the column header cell. If `title` is not set, the `field` value is used.

### width `String | Number`

The width of the column. Numeric values are treated as pixels. For more information, refer to the article on column widths.

### values `Array`

An array of values that will be displayed instead of the bound value. Each item in the array must have a `text` and `value` fields.

### menu `Boolean`

If `menu` is set to `true`, the column will be visible in the Grid column menu. By default, the column menu includes all data-bound columns, that is, the columns which have their `field` set.

## Suggested Links

* [`Columns` in Kendo UI Grid for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/configuration/columns)
