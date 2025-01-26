---
title: Grid API
description: "API Index | Grid"
api_reference: true
slug: api_gridcomponent_wrapper
---

# Grid

## Directive

`kendo-grid`

## Child Components

* [GridColumn]({% slug api_gridcolumncomponent_wrapper %})

## Props

### allow-copy `Boolean | Object`

If `allow-copy` is set to `true` and the selection of the Grid is enabled, the user can copy the selection into the clipboard and paste it in Excel or other programs that read TSV and CSV formats ([`allowCopy` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/configuration/allowcopy)). By default, `allow-copy` is disabled and the default format is TSV. Can be set to a JavaScript object which represents the `allow-copy` configuration. The supported composite props are available in [`AllowCopyProps`]({% slug api_grid_allowcopyprops_wrapper %}).

### alt-row-template `String | Function`

The template for rendering the alternating table rows ([`altRowTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/configuration/altrowtemplate)). Be default, the Grid renders a table row (`<tr>`) for every data source item.

### auto-bind `Boolean`

If `auto-bind` is set to `false`, the Grid will not bind to the data source during initialization, that is, it will not call the `fetch` method of the `dataSource` instance ([`autoBind` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/configuration/autobind)). In such scenarios data binding will occur when the `change` event of the `dataSource` instance is fired. By default, `auto-bind` is set to `true` and the Grid will bind to the data source that is specified in the configuration.

### column-resize-handle-width `Number`

Defines the width (in pixels) of the resize handle for the column ([`columnResizeHandleWidth` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/configuration/columnresizehandlewidth)). For an easier grasping, apply a larger value.

### columns `Array`

The configuration of the Grid columns ([`columns` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/configuration/columns)).

The supported values are:

* An array of JavaScript objects&mdash;JavaScript objects are interpreted as column configurations.
* Strings&mdash;Strings are interpreted as the field to which the column is bound.

The Grid creates a column for every item of the array.

### column-menu `Boolean | Object`

If `column-menu` is set to `true`, the Grid displays the column menu when the user clicks the **Chevron** icon in the column headers ([`columnMenu` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/configuration/columnmenu)). The column menu allows the user to show and hide columns and, if sorting and filtering are enabled, to filter and sort columns. By default, the column menu is disabled. Accepts a JavaScript object which represents the column menu configuration. The supported composite props are available in [`ColumnMenuProps`]({% slug api_grid_columnmenuprops_wrapper %}).

### data-source `Object | Array`

The data source of the Grid which is used for rendering the table rows ([`dataSource` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/configuration/datasource)).

You can set `data-source` to:

* A JavaScript object which represents any valid data source configuration.
* A JavaScript array.
* An existing `kendo.data.DataSource` instance.

If the `dataSource` option is set to a JavaScript object or an array, the Grid will initialize a new `kendo.data.DataSource` instance by using that value as a data source configuration. If the `dataSource` option is an existing `kendo.data.DataSource` instance, the Grid will use that instance and will not initialize a new one.

### detail-template `String | Function`

The template for rendering the detail rows ([`detailTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/configuration/detailtemplate)).

### editable `Boolean | String | Object`

If `editable` is set to `true`, the user will be able to edit the data to which the Grid is bound ([`editable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/configuration/editable)). By default, editing is disabled. Accepts a JavaScript object which represents the edit mode.

The supported edit modes are:

* `inline`
* (Default) `incell`
* `popup`

The supported composite props are available in [E`ditableProps`]({% slug api_grid_editableprops_wrapper %}).

### excel `Object`

Configures the Excel-export settings of the Grid ([`excel` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/configuration/excel)). The supported composite props are available in [`ExcelProps`]({% slug api_grid_excelprops_wrapper %}).

### filterable `Boolean | Object`

If `filterable` is set to `true`, the user can filter the data source by using the filter menu of the Grid ([`filterable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/configuration/filterable)). By default, filtering is disabled. Accepts a JavaScript object which represents the filter menu configuration. The supported composite props are available in [`FilterableProps`]({% slug api_grid_filterableprops_wrapper %}).

### groupable `Boolean | Object`

If `groupable` is set to `true`, the user can group the Grid by dragging the column header cells ([`groupable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/configuration/groupable)). By default, grouping is disabled. Accepts a JavaScript object which represents the grouping configuration. The supported composite props are available in [`GroupableProps`]({% slug api_grid_groupableprops_wrapper %})

### height `Number | String`

The height of the Grid ([`height` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/configuration/height)). Numeric values are treated as pixels.

### messages `Object`

The text of the command buttons that are displayed within the Grid ([`messages` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/configuration/messages)). Primarily used for localization. The supported composite props are available in [`MessagesProps`]({% slug api_grid_messagesprops_wrapper %}).

### mobile `Boolean | String`

If `mobile` is set to `true` and the Grid is viewed in a mobile browser, the Grid will use adaptive rendering ([`mobile` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/configuration/mobile)).

The supported values are:

* `phone`
* `tablet`

Both strings will force the Grid to use adaptive rendering regardless of the browser type. The Grid uses same layout for both `phone` and `tablet`.

### navigatable `Boolean`

If `navigatable` is set to `true`, the user can navigate the Grid by using its keyboard navigation ([`navigatable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/configuration/navigatable)). By default, the keyboard navigation is disabled.

### no-records `Boolean | Object`

If `no-records` is set to `true` and the current view contains no records, a message similar to **No records available** will be displayed ([`noRecords` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/configuration/norecords)). By default, `no-records` is disabled. The supported composite props are available in [`NoRecordsProps`]({% slug api_grid_norecordsprops_wrapper %}).

### pageable `Boolean | Object`

If `pageable` is set to `true`, the Grid will display a pager ([`pageable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/configuration/pageable)). By default, paging is disabled. Accepts a JavaScript object which represents the pager configuration. The supported composite props are available in [`PageableProps`]({% slug api_grid_pageableprops_wrapper %}).

### pdf `Object`

Configures the PDF-export settings of the Grid ([`pdf` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/configuration/pdf)). The supported composite props are available in [`PdfProps`]({% slug api_grid_pdfprops_wrapper %}).

### persist-selection `Boolean`

Sets a value which indicates whether the selection will be persisted when sorting, paging, filtering and other data operations are performed ([`persistSelection` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/configuration/persistselection)).

### reorderable `Boolean`

If `reorderable` is set to `true`, the user can reorder the columns by dragging their header cells ([`reorderable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/configuration/reorderable)). By default, reordering is disabled. Multi-level headers allow reordering only for the same level.

### resizable `Boolean`

If `resizable` is set to `true`, users can resize columns by dragging the edges (resize handles) of their header cells ([`resizable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/configuration/resizable)). As of Kendo UI Q1 2015, users can also auto-fit a column by double-clicking its resize handle&mdash;the column will assume the smallest possible width which allows the column content to fit without the need to be wrapped. By default, column-resizing is disabled.

### row-template `String | Function`

The template for rendering rows ([`rowTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/configuration/rowtemplate)). Be default, `row-template` renders a table row (`<tr>`) for every data source item.

### scrollable `Boolean | Object`

If `scrollable` is set to `true`, the Grid will display a scrollbar when the total height or width of the rows exceeds the height or width of the Grid ([`scrollable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/configuration/scrollable)). By default, scrolling is enabled. Accepts a JavaScript object which represents the scrolling configuration. The supported composite props are available in [`ScrollableProps`]({% slug api_grid_scrollableprops_wrapper %}).

### selectable `Boolean | String`

If `selectable` is set to `true`, the user can select Grid rows ([`selectable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/configuration/selectable)). By default, selection is disabled.

The supported values are:

* `row`&mdash;The user can select a single row.
* `cell`&mdash;The user can select a single cell.
* `multiple, row`&mdash;The user can select multiple rows.
* `multiple, cell`&mdash;The user can select multiple cells.

### sortable `Boolean | Object`

If `sortable` is set to `true`, the user can sort the Grid by clicking the column header cells ([`sortable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/configuration/sortable)). By default, sorting is disabled. Accepts a JavaScript object which represents the sorting configuration. The supported composite props are available in [`SortableProps`]({% slug api_grid_sortableprops_wrapper %}).

### toolbar `Array`

* If a string value is assigned to the toolbar configuration option, it will be treated as a single string template for the whole Grid toolbar and the string value will be passed as an argument to a `kendo.template()` function ([`toolbar` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/configuration/toolbar)).
* If a `kendo.template()` function call or a generic function reference value is assigned, then the return value of the function will be used to render the content of the Grid toolbar.
* If an array value is assigned, it will be treated as the list of commands that is displayed in the toolbar of the Grid.

Accepts the following commands:

* `cancel`&mdash;A built-in command that reverts the data changes which were made by the user.
* `create`&mdash;A built-in command that adds an empty data item to the Grid.
* `save`&mdash;A built-in command that persists the data changes which were made by the user.
* `excel`&mdash;A built-in command that exports the Grid in the MS Excel format.
* `pdf`&mdash;A built-in command that exports the Grid to PDF.
* Custom

## Events

### beforeedit: `Function`

Fires when the user tries to edit or creates a new data item before the editor is created ([`beforeEdit` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/events/beforeedit)). Can be used for preventing the editing by using custom logic. The event handler function context (available through the `this` keyword) will be set to the Grid instance. The event will be fired only if selection is enabled.

### cancel: `Function`

Fires when the user clicks the **Cancel** button when the Grid is in the inline or popup edit mode, or when the user closes the popup window ([`cancel` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/events/cancel)). The event handler function context (available through the `this` keyword) will be set to the Grid instance.

### cellclose: `Function`

Fires when the Grid is in the in-cell edit mode and the cell is about to be closed ([`cellClose` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/events/cellclose)). The event is triggered after the user saved or canceled the changes and before the cell is closed. The event handler function context (available through the `this` keyword) will be set to the Grid instance.

### change: `Function`

Fires when the user selects a table row or cell in the Grid ([`change` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/events/change)). The event handler function context (available through the `this` keyword) will be set to the Grid instance.

### columnhide: `Function`

Fires when the user hides a column ([`columnHide` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/events/columnhide)). The event handler function context (available through the `this` keyword) will be set to the Grid instance.

### columnlock: `Function`

Fires when the user locks a column ([`columnLock` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/events/columnlock)). The event handler function context (available through the `this` keyword) will be set to the Grid instance.

### columnmenuinit: `Function`

Fires when the column menu is initialized ([`columnMenuInit` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/events/columnmenuinit)). The event handler function context (available through the `this` keyword) will be set to the Grid instance.

### columnmenuopen: `Function`

Fires when the Grid column menu is opened and after the animations complete ([`columnMenuOpen` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/events/columnmenuopen)). The event handler function context (available through the `this` keyword) will be set to the Grid instance.

### columnreorder: `Function`

Fires when the user changes the order of a column ([`columnReorder` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/events/columnreorder)). The event handler function context (available through the `this` keyword) will be set to the Grid instance.

### columnresize: `Function`

Fires when the user resizes a column ([`columnResize` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/events/columnresize)). The event handler function context (available through the `this` keyword) will be set to the Grid instance.

### columnshow: `Function`

Fires when the user shows a column ([`columnShow` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/events/columnshow)). The event handler function context (available through the `this` keyword) will be set to the Grid instance.

### columnunlock: `Function`

Fires when the user unlocks a column ([`columnUnlock` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/events/columnunlock)). The event handler function context (available through the `this` keyword) will be set to the Grid instance.

### databinding: `Function`

Fires before the Grid binds to its data source ([`dataBinding` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/events/databinding)). The event handler function context (available through the `this` keyword) will be set to the Grid instance.

### databound: `Function`

Fires when the Grid is bound to data from its data source ([`dataBound` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/events/databound)). The event handler function context (available through the `this` keyword) will be set to the Grid instance.

### detailcollapse: `Function`

Fires when the user collapses a detail table row ([`detailCollapse` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/events/detailcollapse)). The event handler function context (available through the `this` keyword) will be set to the Grid instance.

### detailexpand: `Function`

Fires when the user expands a detail table row ([`detailExpand` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/events/detailexpand)). The event handler function context (available through the `this` keyword) will be set to the Grid instance.

### detailinit: `Function`

Fires when a detail table row is initialized ([`detailInit` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/events/detailinit)). The event handler function context (available through the `this` keyword) will be set to the Grid instance.

### edit: `Function`

Fires when the user edits or creates a data item ([`edit` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/events/edit)). The event handler function context (available through the `this` keyword) will be set to the Grid instance.

### excelexport: `Function`

Fires when the user clicks the **Export to Excel** toolbar button ([`excelExport` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/events/excelexport)).

### filter: `Function`

Fires when the user is about to filter the data source by using the filter UI ([`filter` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/events/filter)). The event handler function context (available through the `this` keyword) will be set to the Grid instance. Available as of the Kendo UI 2016 R3 (2016.3.914) release.

### filtermenuinit: `Function`

Fires when the Grid filter menu is initialized and opened for the first time ([`filterMenuInit` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/events/filtermenuinit)). The event handler function context (available through the `this` keyword) will be set to the Grid instance.

### filtermenuopen: `Function`

Fires when the Grid filter menu is opened and after the animations complete ([`filterMenuOpen` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/events/filtermenuopen)). The event handler function context (available through the `this` keyword) will be set to the Grid instance.

### group: `Function`

Fires when the user is about to group the data source or modify the state of the group descriptors by using the Grid group panel ([`group` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/events/group)). The event handler function context (available through the `this` keyword) will be set to the Grid instance. Available as of the Kendo UI 2016 R3 (2016.3.914) release.

### groupcollapse: `Function`

Fires when the user collapses a group row ([`groupCollapse` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/events/groupcollapse)). The event handler function context (available through the `this` keyword) will be set to the Grid instance. Available as of the Kendo UI 2017 R3 (2017.3.913) release.

### groupexpand: `Function`

Fires when the user expands a group row ([`groupExpand` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/events/groupexpand)). The event handler function context (available through the `this` keyword) will be set to the Grid instance. Available as of the Kendo UI 2017 R3 (2017.3.913) release.

### navigate: `Function`

Fires when `navigatable` is enabled and the user changes the current item by either using the mouse or interacting with the keyboard ([`navigate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/events/navigate)). The event handler function context (available through the `this` keyword) will be set to the Grid instance.

### page: `Function`

Fires when the user is about change the current page index of data source through the pager UI ([`page` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/events/page)). The event handler function context (available through the `this` keyword) will be set to the Grid instance. Available as of the Kendo UI 2016 R3 (2016.3.914) release.

### pdfexport: `Function`

Fires when the user clicks the **Export to PDF** toolbar button ([`pdfExport` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/events/pdfexport)).

### remove: `Function`

Fires when the user clicks the **Destroy** command button and the `delete` operation is confirmed in the confirmation window ([`remove` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/events/remove)). If the user clicks the **Cancel** button in the window, the event will not be fired. The event handler function context (available through the `this` keyword) will be set to the Grid instance.

### save: `Function`

Fires when a data item is saved ([`save` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/events/save)). The event handler function context (available through the `this` keyword) will be set to the Grid instance.

### savechanges: `Function`

Fires when the user clicks the **Save** command button ([`saveChanges` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/events/savechanges)). The event handler function context (available through the `this` keyword) will be set to the Grid instance.

### sort: `Function`

Fires when the user is about to modify the current state of the data-source sort descriptors through the sort UI ([`sort` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/events/sort)). The event handler function context (available through the `this` keyword) will be set to the Grid instance. Available as of the Kendo UI 2016 R3 (2016.3.914) release.

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid#methods). 

### kendoWidget

##### returns

Returns the Kendo UI Grid instance.
