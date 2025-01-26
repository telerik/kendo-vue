---
title: TreeList API
description: "API Index | TreeList"
api_reference: true
slug: api_treelistcomponent_wrapper
---

# TreeList

## Directive

`kendo-treelist`

## Child Components

* [`kendo-treelist-column`]({% slug api_treelistcolumncomponent_wrapper %})

## Props

### auto-bind `Boolean`

If `auto-bind` is set to `false`, the TreeList will not bind to the data source during initialization ([`autoBind` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/configuration/autobind)). In such scenarios data binding will occur when the `change` event of the `dataSource` instance is fired. By default, `auto-bind` is set to `true` and the TreeList will bind to the data source that is specified in the configuration.

### columns `Array`

The configuration of the TreeList columns ([`columns` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/configuration/columns)).

The supported values are:

* An array of JavaScript objects&mdash;JavaScript objects are interpreted as column configurations.
* Strings&mdash;Strings are interpreted as the field to which the column is bound.

The TreeList creates a column for every item of the array.

### resizable `Boolean`

If `resizable` is set to `true`, users can resize columns by dragging their header borders ([`resizable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/configuration/resizable)). By default, column-resizing is disabled.

### reorderable `Boolean`

If `reorderable` is set to `true`, the user can reorder the columns by dragging their header cells ([`reorderable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/configuration/reorderable)). By default, column-reordering is disabled.

### column-menu `Boolean | Object`

If `column-menu` is set to `true`, the TreeList displays the column menu when the user clicks the **Chevron** icon in the column headers ([`columnMenu` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/configuration/columnmenu)). The column menu allows the user to show and hide columns and, if sorting and filtering are enabled, to filter and sort columns. By default, the column menu is disabled. Accepts a JavaScript object which represents the column menu configuration. The supported composite props are available in [`ColumnMenuProps`]({% slug api_treelist_columnmenuprops_wrapper %}).

### data-source `Object | Array`

The data source of the TreeList for rendering the table rows ([`dataSource` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/configuration/datasource)).

You can set `data-source` to:

* A JavaScript object which represents any valid data source configuration.
* A JavaScript array.
* An existing `kendo.data.DataSource` instance.

If the `dataSource` option is set to a JavaScript object or an array, the TreeList will initialize a new `kendo.data.DataSource` instance by using that value as a data source configuration. If the `dataSource` option is an existing `kendo.data.DataSource` instance, the TreeList will use that instance and will not initialize a new one.

### editable `Boolean | Object`

If `editable` is set to `true`, the user will be able to edit the data to which the TreeList is bound ([`editable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/configuration/editable)). By default, editing is disabled. Accepts a JavaScript object which represents the edit mode.

The supported edit modes are:

* `inline`
* (Default) `incell`
* `popup`

The supported composite props are available in [`EditableProps`]({% slug api_treelist_editableprops_wrapper %}).

### excel `Object`

Configures the Excel-export settings of the TreeList ([`excel` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/configuration/excel)). The supported composite props are available in [`ExcelProps`]({% slug api_treelist_excelprops_wrapper %}).

### filterable `Boolean | Object`

If `filterable` is set to `true`, the user can filter the data source by using the filter menu of the TreeList ([`filterable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/configuration/filterable)). By default, filtering is disabled. Accepts a JavaScript object which represents the filter menu configuration. The supported composite props are available in [`FilterableProps`]({% slug api_treelist_filterableprops_wrapper %}).

### height `Number | String`

The height of the TreeList ([`height` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/configuration/height)). Numeric values are treated as pixels.

### messages `Object`

The text of the command buttons that are displayed within the TreeList ([`messages` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/configuration/messages)). Primarily used for localization. The supported composite props are available in [`MessagesProps`]({% slug api_treelist_messagesprops_wrapper %}).

### navigatable `Boolean`

If `navigatable` is set to `true`, the user can navigate the TreeList by using its keyboard navigation ([`navigatable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/configuration/navigatable)). By default, the keyboard navigation is disabled.

### pageable `Boolean | Object`

If `pageable` is set to `true`, the TreeList will display a pager ([`pageable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/configuration/pageable)). By default, only client-side paging is enabled which means that all data items are expected to be available upon the initialization of the TreeList. Accepts a JavaScript object which represents the pager configuration. The supported composite props are available in [`PageableProps`]({% slug api_treelist_pageableprops_wrapper %}).

### pdf `Object`

Configures the PDF-export settings of the TreeList ([`pdf` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/configuration/pdf)). The supported composite props are available in [`PdfProps`]({% slug api_treelist_pdfprops_wrapper %}).

### scrollable `Boolean | Object`

If `scrollable` is set to `true`, the TreeList will display a scrollbar when the total height or width of the rows exceeds the height or width of the TreeList ([`scrollable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/configuration/scrollable)). Scrolling renders separate tables for the header and data area of the TreeList. By default, scrolling is enabled. Disable scrolling for accessibility applications.

### selectable `Boolean | String`

If `selectable` is set to `true`, the user can select TreeList rows ([`selectable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/configuration/selectable)). By default, selection is disabled.

The supported values are:

* `row`&mdash;The user can select a single row.
* `cell`&mdash;The user can select a single cell.
* `multiple, row`&mdash;The user can select multiple rows.
* `multiple, cell`&mdash;The user can select multiple cells.

### sortable `Boolean | Object`

If `sortable` is set to `true`, the user can sort the TreeList by clicking the column header cells ([`sortable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/configuration/sortable)). By default, sorting is disabled. Accepts a JavaScript object which represents the sorting configuration. The supported composite props are available in [`SortableProps`]({% slug api_treelist_sortableprops_wrapper %}).

### toolbar `Array`

* If a string value is assigned to the toolbar configuration option, it will be treated as a single string template for the whole TreeList toolbar and the string value will be passed as an argument to a `kendo.template()` function ([`toolbar` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/configuration/toolbar)).
* If a `kendo.template()` function call or a generic function reference value is assigned, then the return value of the function will be used to render the content of the TreeList toolbar.
* If an array value is assigned, it will be treated as the list of commands that is displayed in the toolbar of the TreeList.

Accepts the following commands:

* `cancel`&mdash;A built-in command that reverts the data changes which were made by the user.
* `create`&mdash;A built-in command that adds an empty data item to the TreeList.
* `save`&mdash;A built-in command that persists the data changes which were made by the user.
* `excel`&mdash;A built-in command that exports the TreeList in the MS Excel format.
* `pdf`&mdash;A built-in command that exports the TreeList to PDF.
* Custom

The supported composite props are available in [`ToolbarProps`]({% slug api_treelist_toolbarprops_wrapper %}).

## Events

### beforeedit: `Function`

Fires when the user tries to edit or to create a data item and before the editor is created ([`beforeEdit` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/events/beforeedit)). Used for preventing custom editing. The event handler function context (available through the `this` keyword) will be set to the TreeList instance. The event will be fired only when the TreeList is editable.

### cancel: `Function`

Fires when the user clicks the **Cancel** button in the inline or popup edit mode, or closes the popup window ([`cancel` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/events/cancel)). The event handler function context (available through the `this` keyword) will be set to the TreeList instance.

### cellclose: `Function`

Fires when the TreeList is in the incell edit mode and the cell is going to be closed ([`cellClose` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/events/cellclose)). The event is triggered after saving or canceling the changes but before the cell is closed. The event handler function context (available through the `this` keyword) will be set to the TreeList instance.

### change: `Function`

Fires when the user selects a table row or cell in the TreeList ([`change` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/events/change)). The event handler function context (available through the `this` keyword) will be set to the TreeList instance.

### collapse: `Function`

Fires when an item is about to be collapsed ([`collapse` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/events/collapse)). The event handler function context (available through the `this` keyword) will be set to the TreeList instance.

### databinding: `Function`

Fires before the TreeList binds to its data source ([`dataBinding` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/events/databinding)). The event handler function context (available through the `this` keyword) will be set to the TreeList instance.

### databound: `Function`

Fires when the TreeList is bound to data from its data source ([`dataBound` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/events/databound)).The event handler function context (available through the `this` keyword) will be set to the TreeList instance.

### dragstart: `Function`

Fires when the user attempts to drag an item ([`dragStart` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/events/dragstart)). If `dragstart` is prevented, the item is unmovable. The event handler function context (available through the `this` keyword) will be set to the TreeList instance.Available in builds 2015.3.1014 and later.

### drag: `Function`

Fires while the user is dragging an item ([`drag` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/events/drag)). This event is triggered on every mouse move. The event handler function context (available through the `this` keyword) will be set to the TreeList instance.Available in builds 2015.3.1014 and later.

### dragend: `Function`

(Available as of 2015.3.1014) Fires when the user finished dragging an item and the model was updated ([`dragEnd` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/events/dragend)). The event handler function context (available through the `this` keyword) will be set to the TreeList instance.

### drop: `Function`

Fires when the user drops an item ([`drop` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/events/drop)). If `drop` is prevented, the source row will be unmovable. The event handler function context (available through the `this` keyword) will be set to the TreeList instance.Available in builds 2015.3.1014 and later.

### edit: `Function`

Fires when the user edits or creates a data item ([`edit` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/events/edit)). The event handler function context (available through the `this` keyword) will be set to the TreeList instance.

### excelexport: `Function`

Fires when the user clicks the **Export to Excel** toolbar button ([`excelExport` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/events/excelexport)).

### expand: `Function`

Fires when an item is about to be expanded ([`expand` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/events/expand)). The event handler function context (available through the `this` keyword) will be set to the TreeList instance.

### filtermenuinit: `Function`

Fires when the TreeList filter menu is initialized ([`filterMenuInit` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/events/filtermenuinit)). The event handler function context (available through the `this` keyword) will be set to the TreeList instance.

### filtermenuopen: `Function`

Fires when the TreeList filter menu is opened ([`filterMenuOpen` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/events/filtermenuopen)). The event handler function context (available through the `this` keyword) will be set to the TreeList instance.

### pdfexport: `Function`

Fires when the user clicks the **Export to PDF** toolbar button ([`pdfExport` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/events/pdfexport)).

### remove: `Function`

Fires when the user clicks the **Destroy** command button ([`remove` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/events/remove)). The event handler function context (available through the `this` keyword) will be set to the TreeList instance.

### save: `Function`

Fires when a data item is saved ([`save` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/events/save)). The event handler function context (available through the `this` keyword) will be set to the TreeList instance.

### savechanges: `Function`

Fires when the user clicks the "save" command button ([`saveChanges` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/events/savechanges)). The event handler function context (available through the `this` keyword) will be set to the TreeList instance.

### columnshow: `Function`

Fires when the user shows a column ([`columnShow` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/events/columnshow)).The event handler function context (available through the `this` keyword) will be set to the TreeList instance.

### columnhide: `Function`

Fires when the user hides a column ([`columnHide` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/events/columnhide)). The event handler function context (available through the `this` keyword) will be set to the TreeList instance.

### columnreorder: `Function`

Fires when the user changes the order of a column ([`columnReorder` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/events/columnreorder)). The event handler function context (available through the `this` keyword) will be set to the TreeList instance.

### columnresize: `Function`

Fires when the user resizes a column ([`columnResize` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/events/columnresize)). The event handler function context (available through the `this` keyword) will be set to the TreeList instance.

### columnmenuinit: `Function`

Fires when the column menu is initialized ([`columnMenuInit` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/events/columnmenuinit)). The event handler function context (available through the `this` keyword) will be set to the TreeList instance.

### columnmenuopen: `Function`

Fires when the column menu is opened ([`columnMenuOpen` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/events/columnmenuopen)). The event handler function context (available through the `this` keyword) will be set to the TreeList instance.

### columnlock: `Function`

Fires when the user locks a column ([`columnLock` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/events/columnlock)).The event handler function context (available through the `this` keyword) will be set to the TreeList instance.

### columnunlock: `Function`

Fires when the user unlocks a column ([`columnUnlock` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/events/columnunlock)). The event handler function context (available through the `this` keyword) will be set to the TreeList instance.

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist#methods). 

### kendoWidget

##### returns

Returns the Kendo UI TreeList instance.
