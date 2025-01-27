---
title: pageableProps API
description: "API Index | pageableProps"
api_reference: true
slug: api_grid_pageableprops_wrapper
---

# PageableProps

### pageable-always-visible `Boolean`

(Available as of 2017 R3) By default, the Grid displays a pager even when the total amount of items in the DataSource is less than the `pageSize` value.

If `pageable-always-visible` is set to `false`, the Grid will toggle the pager visibility in the following ways:

* When the total amount of items which is initially set in the DataSource is less than the `pageSize` value, the pager will be hidden.
* When the total amount of items which is initially set in the DataSource is greater than or equal to the `pageSize` value, the pager will be displayed.
* When the total amount of items in the DataSource becomes less than the `pageSize` value (after a delete or filter operation, or on changing the `pageSize` value), the pager will be hidden.
* When the total amount of items in the DataSource becomes greater than or equal to the `pageSize` value (after an insert or filter operation, or on changing the `pageSize` value), the pager will be displayed.

### pageable-page-size `Number`

The number of data items which will be displayed in the Grid. `pageable-page-size` will not work if an already existing Kendo UI DataSource instance is assigned to the Grid.

### pageable-previous-next `Boolean`

If `pageable-previous-next` is set to `true`, the pager will display buttons for navigating to the first, previous, next, and last pages. By default, the Grid displays the navigation buttons.

### pageable-numeric `Boolean`

If `pageable-numeric` is set to `true`, the pager will display buttons for navigating to specific pages. By default, the Grid displays the navigation buttons. Avoid using `pageable.numeric` and `pageable.input` at the same time.

### pageable-button-count `Number`

The maximum number of buttons that are displayed in the numeric pager. If more pages than the specified number are available, the pager will display **...** (ellipsis).

### pageable-input `Boolean`

If `pageable-input` is set to `true`, the pager will display an input element which allows the user to type in a specific page number. By default, the Grid does not display the page input. Avoid using `pageable.input` and `pageable.numeric` at the same time.

### pageable-page-sizes `Boolean | Array`

If `pageable-page-sizes` is set to `true`, the pager will display a drop-down list which allows the user to pick a page size. By default, the Grid does not display the page size drop-down list.

To override the default list, set `pageable-page-sizes` to an array of predefined page sizes. The Grid supports the `all` value which sets the page size to the total number of records. If you provide a `pageSize` setting for the data source, then the Grid will initially select that value.

### pageable-refresh `Boolean`

If `pageable-refresh` is set to `true`, the pager will display the **Refresh** button. Clicking the **Refresh** button refreshes the Grid. By default, the Grid does not display the **Refresh** button.

### pageable-responsive `Boolean`

If set to `false` the pager will not be responsive. By default the pager is responsive.

### pageable-info `Boolean`

If `pageable-info` is set to `true`, the pager will display information about the current page and the total number of data items. By default, the Grid displays the paging information.

### pageable-messages-display `String`

The text of the pager. Uses `kendo.format`.

The supported placeholders are:

* `{0}`&mdash;Represents the index of the first data item.
* `{1}`&mdash;Represents the index of the last data item.
* `{2}`&mdash;Represents the total number of data items.

### pageable-messages-empty `String`

The text that is displayed when the Grid is empty.

### pageable-messages-page `String`

The label that is displayed before the pager input.

### pageable-messages-of `String`

The label that is displayed before the pager input. Uses `kendo.format`. Supports the optional `{0}` placeholder which represents the total number of pages.

### pageable-messages-items-per-page `String`

The label that is displayed after the drop-down list of the page sizes.

### pageable-messages-first `String`

The tooltip of the button which goes to the first page.

### pageable-messages-last `String`

The tooltip of the button which goes to the last page.

### pageable-messages-next `String`

The tooltip of the button which goes to the next page.

### pageable-messages-previous `String`

The tooltip of the button which goes to the previous page.

### pageable-messages-refresh `String`

The tooltip of the **Refresh** button.

### pageable-messages-more-pages `String`

The tooltip of the **...** (ellipsis) button which appears when the number of pages is greater than the `buttonCount` value.

## Suggested Links

* [`Pageable` in Kendo UI Grid for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/configuration/pageable)
