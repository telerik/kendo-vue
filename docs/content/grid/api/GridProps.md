---
title: GridProps
description: "Learn how to build custom functionality when working with the Vue Grid by Kendo UI with the help of the GridProps."
api_reference: true
type: inner_api
slug: api_grid_gridprops
---

# GridProps
Represents the props of the [native Vue Grid component by Kendo UI]({% slug overview_grid %}).


<table class="api-table api-table-properties">
<thead>
<tr>
<th class="th-name">Name</th>
<th class="th-type">Type</th>
<th class="th-default">Default</th>
<th class="th-desc">Description</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td class="table-cell-name">


#### allGroupedItems?


</td>
<td type class="table-cell-type">


<code>


DataResult


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Deprecated. Not needed any more.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### alternatePerGroup?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


When set to `true` it sets the alternating of the rows per groups so each group could start
with the same color row. There is a known limitation when virtual scrolling with groups and
alternatePerGroup set to `true`- there may be a slight flicker of the alternating rows in
groups with larger amount of items - in this case we would rather recommend
using rowTemplates and set the row alternating based on the data or dataItems.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### autoProcessData?


</td>
<td type class="table-cell-type">


<code>


boolean | AutoProcessDataConfig


</code>


</td>
<td class="table-cell-default">


<code>


false


</code>


</td>
<td class="table-cell-comment">


Enables data-processing inside the GridComponent based on its state.
Provides an easy, built-in way to handle data operations like sorting, filtering, grouping, and paging.




```vue
<Grid
  :auto-process-data="{
    filter: true,
    search: true,
    sort: true,
    group: true,
    page: true
  }"
/>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### cellRender?


</td>
<td type class="table-cell-type">


<code>


string | boolean | (h: any, defaultRendering: any, props: GridCellProps, listeners: any) => any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


`obsolete` Will be removed in the next major release. Use 'cells' prop instead.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### cells?


</td>
<td type class="table-cell-type">


<code>


[GridCellsSettings]({% slug api_grid_gridcellssettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines a set of custom cell components that the Grid will render instead of the default cells.

```vue
<Grid
  :cells="{
    data: CustomCell
  }"
/>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### clipboard?


</td>
<td type class="table-cell-type">


<code>


boolean | ClipboardSettings


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables clipboard copy, cut, and paste manipulations. Accepts `ClipboardSettings` or a boolean value.

```vue
<Grid :clipboard="true" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### collapsedGroups?


</td>
<td type class="table-cell-type">


<code>


any[][]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


`Deprecated` Use 'groupExpand' instead.

Passes the collection of all collapsed groups for every grouped level.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnMenu?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines if the column menu will be shown for the column.
Accepts Boolean, a Vue component, a `render` function, or a slot name


</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnMenuAnimate?


</td>
<td type class="table-cell-type">


<code>


boolean | PopupAnimation


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Controls the ColumnMenu animation. By default, the opening and closing animations are enabled.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnMenuIcon?


</td>
<td type class="table-cell-type">


<code>


SVGIcon


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Globally overrides the default(three vertical dots) column menu icon for the whole Grid. If set, the prop can be overridden on column level using the ([menuIcon]({% slug api_grid_gridcolumnprops %}#toc-menuicon)) property.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### columns?


</td>
<td type class="table-cell-type">


<code>


[GridColumnProps]({% slug api_grid_gridcolumnprops %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the properties of the columns that are used by the Grid.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnsState?


</td>
<td type class="table-cell-type">


<code>


[GridColumnState]({% slug api_grid_gridcolumnstate %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The collection of column states of the grid.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnVirtualization?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables virtualization of the columns. If virtualization is
 enabled, the columns outside the view are not rendered.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### contextMenu?


</td>
<td type class="table-cell-type">


<code>


boolean | [GridContextMenuOptions]({% slug api_grid_gridcontextmenuoptions %}) | (options: [GridCellBaseOptions]({% slug api_grid_gridcellbaseoptions %})) => boolean | [GridContextMenuOptions]({% slug api_grid_gridcontextmenuoptions %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the context menu of the Grid. If set to `true`, the default context menu is rendered.
Can be a `GridContextMenuOptions` object to configure head/body items separately,
or a function that returns the configuration based on cell options.

```vue
<Grid :context-menu="true" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### csv?


</td>
<td type class="table-cell-type">


<code>


boolean | [GridCSVExportOptions]({% slug api_grid_gridcsvexportoptions %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables CSV export functionality when set to `true` or provides CSV export configuration options.

```vue
<Grid :csv="true" />
```


```vue
<Grid :csv="{ delimiter: ';', includeUTF8BOM: true, preventFormulaInjection: true }" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### dataItemKey?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the Grid row key prop to the value of this field in the dataItem.
If not set, the dataItem index will be used for the row key, which
might lead to row not updated during paging or scrolling.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dataItems?


</td>
<td type class="table-cell-type">


<code>


any[] | DataResult


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the data of the Grid ([see example]({% slug paging_grid %})). If you use paging,
the `data` option has to contain only the items for the current page.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultColumnsState?


</td>
<td type class="table-cell-type">


<code>


[GridColumnState]({% slug api_grid_gridcolumnstate %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default collection of column states of the grid.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultDetailExpand?


</td>
<td type class="table-cell-type">


<code>


DetailExpandDescriptor


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default `detailExpand` state applied to the Grid when using uncontrolled mode.

```vue
<Grid :default-detail-expand="{ 2: true, 4: true }" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultFilter?


</td>
<td type class="table-cell-type">


<code>


CompositeFilterDescriptor


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default descriptor by which the data is filtered
([more information and examples]({% slug filtering_grid %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultGroup?


</td>
<td type class="table-cell-type">


<code>


GroupDescriptor[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default `group` state applied to the Grid when using uncontrolled mode.

```vue
<Grid :default-group="[{ field: 'CategoryName' }]" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultGroupExpand?


</td>
<td type class="table-cell-type">


<code>


GroupExpandDescriptor[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default `groupExpand` state applied to the Grid when using uncontrolled mode.

```vue
<Grid :default-group-expand="[{ field: 'CategoryName', expanded: true }]" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultPinnedBottomRows?


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default `pinnedBottomRows` state applied to the Grid when using uncontrolled mode.
Requires `pinnable={true}`.

```vue
<Grid :pinnable="true" :default-pinned-bottom-rows="[products[9]]" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultPinnedTopRows?


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default `pinnedTopRows` state applied to the Grid when using uncontrolled mode.
Requires `pinnable={true}`.

```vue
<Grid :pinnable="true" :default-pinned-top-rows="[products[0]]" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultSearch?


</td>
<td type class="table-cell-type">


<code>


CompositeFilterDescriptor


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The descriptor by which the data is searched by default. Its first FilterDescriptor populates the GridSearchBox.

```vue
<Grid :default-search="{ logic: 'or', filters: [{ field: 'category', operator: 'eq', value: 'electronics' }] }" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultSelect?


</td>
<td type class="table-cell-type">


<code>


SelectDescriptor


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default `select` state applied to the Grid when using uncontrolled mode.

```vue
<Grid :default-select="{ ['item-data-key-id']: true }" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultSkip?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default `skip` state applied to the Grid when using uncontrolled mode.

```vue
<Grid :default-skip="10" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultSort?


</td>
<td type class="table-cell-type">


<code>


SortDescriptor[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The descriptors by which the data is sorted.
Applies the sorting styles and buttons to the affected columns.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultTake?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default `take` state applied to the Grid when using uncontrolled mode.

```vue
<Grid :default-take="20" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### detail?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies a custom rendering that will be cloned and rendered inside the detail rows
of the currently expanded items ([see example]({% slug master_detail_grid %}).
Accepts a Vue component, a `render` function, or a slot name.
The expand will be active if the `dataItemKey` is set.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### detailExpand?


</td>
<td type class="table-cell-type">


<code>


DetailExpandDescriptor


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The descriptor by which the detail rows are expanded.

```vue
<Grid :detail-expand="{ 1: true, 3: true }" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### detailRowHeight?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the height of the detail row and forces an equal height to all detail rows


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dir?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `dir` HTML attribute of the Grid wrapper element.
Use `'rtl'` to enable right-to-left rendering.

```vue
<Grid :dir="'rtl'" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### editField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the name of the field which will provide a Boolean representation of the edit state of the current
item ([more information and examples]({% slug editing_inline_grid %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### expandColumn?


</td>
<td type class="table-cell-type">


<code>


[GridColumnProps]({% slug api_grid_gridcolumnprops %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the GridColumnProps of the expand column.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### expandField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


`obsolete` Will be removed in the next major release. Set `dataItemKey` property instead.

Specifies the name of the field which will provide a Boolean representation
of the expanded state of the item ([see example]({% slug detailrow_grid %}).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### filter?


</td>
<td type class="table-cell-type">


<code>


CompositeFilterDescriptor


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The descriptor by which the data is filtered
([more information and examples]({% slug filtering_grid %})).
Affects the values and buttons in the `FilterRow` of the Grid.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### filterable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the filtering of the columns with their `field` option set
([more information and examples]({% slug filtering_grid %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### filterCellRender?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


`obsolete` Will be removed in the next major release. Use 'cells.filterCell' prop instead.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### filterOperators?


</td>
<td type class="table-cell-type">


<code>


[GridFilterOperators]({% slug api_grid_gridfilteroperators %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The filter operators for the Grid filters.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### fixedScroll?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines if the scroll position will be updated after a data change.
If set to `true`, the scroll will remain in the same position.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### group?


</td>
<td type class="table-cell-type">


<code>


GroupDescriptor[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The descriptors by which the data will be grouped
([more information and examples]({% slug groupingbasics_grid %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### groupable?


</td>
<td type class="table-cell-type">


<code>


boolean | [GridGroupableSettings]({% slug api_grid_gridgroupablesettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines if grouping by dragging and dropping the column headers is allowed
([more information and examples]({% slug groupingbasics_grid %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### groupExpand?


</td>
<td type class="table-cell-type">


<code>


GroupExpandDescriptor[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The descriptor by which the group is expanded.

```vue
<Grid :group-expand="[{ field: 'CategoryName', expanded: true }]" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### headerCellRender?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


`obsolete` Will be removed in the next major release. Use 'cells.headerCell' prop instead.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### highlight?


</td>
<td type class="table-cell-type">


<code>


{[id: string]: boolean | {[id: string]: boolean}}


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The descriptor by which the highlight state of an item is defined.
Passing a boolean value will highlight the whole row, while passing an object will highlight individual cells by their field.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### id?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `id` property of the top div element of the component.

```vue
<Grid :id="'custom-grid-id'" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### loader?


</td>
<td type class="table-cell-type">


<code>


string | Object | Function


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The boolean option is `Deprecated`. Use 'showLoader' instead.

Defines if the loader will be shown. Accepts a slot name, a `render` function, or a Vue component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### lockGroups?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines if the group descriptor columns are locked (frozen or sticky).
Locked columns are the columns that are visible at all times while the user scrolls the component horizontally.
Defaults to `false`.

```vue
<Grid :lock-groups="true" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### navigatable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true`, the user can use dedicated shortcuts to interact with the Grid.
By default, navigation is disabled and the Grid content is accessible in the normal tab sequence.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onCancel?


</td>
<td type class="table-cell-type">


<code>


(event: [GridCancelEvent]({% slug api_grid_gridcancelevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user triggers a canceling operation from a cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onCellclick?


</td>
<td type class="table-cell-type">


<code>


(event: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user clicks a cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClipboard?


</td>
<td type class="table-cell-type">


<code>


(event: GridClipboardEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when clipboard support is enabled, and one of the actions (e.g., copy) is triggered.
Accepts a `GridClipboardEvent` object.

```vue
<Grid
  :clipboard="true"
  @clipboard="handleClipboard"
/>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onColumnreorder?


</td>
<td type class="table-cell-type">


<code>


(event: [GridColumnReorderEvent]({% slug api_grid_gridcolumnreorderevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when columns are reordered.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onColumnresize?


</td>
<td type class="table-cell-type">


<code>


(event: [GridColumnResizeEvent]({% slug api_grid_gridcolumnresizeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a column is resized


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onContextmenu?


</td>
<td type class="table-cell-type">


<code>


(event: [GridContextMenuEvent]({% slug api_grid_gridcontextmenuevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the context menu is activated on a cell.

```vue
<Grid @contextmenu="handleContextMenu" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onContextmenuitemclick?


</td>
<td type class="table-cell-type">


<code>


(event: [GridContextMenuItemClickEvent]({% slug api_grid_gridcontextmenuitemclickevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a context menu item is clicked.

```vue
<Grid @contextmenuitemclick="handleItemClick" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onCsvexport?


</td>
<td type class="table-cell-type">


<code>


(data: any[]) => any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A callback that receives the **raw source data** (before sort, filter, and group operations)
and returns a transformed array. Use it to filter out rows or modify values before CSV generation.
The returned array is then processed through the Grid's data operations (sort, filter, group)
before being exported.

```vue
<Grid :on-csvexport="(data) => data.filter(item => item.active)" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDatastatechange?


</td>
<td type class="table-cell-type">


<code>


(event: [GridDataStateChangeEvent]({% slug api_grid_griddatastatechangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the data state of the Grid is changed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDetailexpandchange?


</td>
<td type class="table-cell-type">


<code>


(event: [GridDetailExpandChangeEvent]({% slug api_grid_griddetailexpandchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user expands or collapses a detail row.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onEdit?


</td>
<td type class="table-cell-type">


<code>


(event: [GridEditEvent]({% slug api_grid_grideditevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user triggers an edit operation from a cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onExpandchange?


</td>
<td type class="table-cell-type">


<code>


(event: [GridExpandChangeEvent]({% slug api_grid_gridexpandchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Deprecated. Use 'onDetailexpandchange' or 'onGroupexpandchange' instead.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFilterchange?


</td>
<td type class="table-cell-type">


<code>


(event: [GridFilterChangeEvent]({% slug api_grid_gridfilterchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the Grid filter is modified through the UI
([more information and examples]({% slug filtering_grid %})).
You have to handle the event yourself and filter the data.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onGroupchange?


</td>
<td type class="table-cell-type">


<code>


(event: [GridGroupChangeEvent]({% slug api_grid_gridgroupchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the grouping of the Grid is changed. You have to handle the event yourself and group the data
([more information and examples]({% slug groupingbasics_grid %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onGroupexpandchange?


</td>
<td type class="table-cell-type">


<code>


(event: [GridGroupExpandChangeEvent]({% slug api_grid_gridgroupexpandchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user expands or collapses a group.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onHeaderselectionchange?


</td>
<td type class="table-cell-type">


<code>


(event: [GridHeaderSelectionChangeEvent]({% slug api_grid_gridheaderselectionchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user clicks the checkbox of a column header whose `field` matches `selectedField`.
([see example]({% slug selection_grid %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onItemchange?


</td>
<td type class="table-cell-type">


<code>


(event: [GridItemChangeEvent]({% slug api_grid_griditemchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user changes the values of the item.
The event is not debounced and fires on every `onChange` event of the input in the current `EditCell`.
([more information and examples]({% slug editing_inline_grid %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onKeydown?


</td>
<td type class="table-cell-type">


<code>


(event: [GridKeyDownEvent]({% slug api_grid_gridkeydownevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user press keyboard key.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onNavigationaction?


</td>
<td type class="table-cell-type">


<code>


(event: [GridNavigationActionEvent]({% slug api_grid_gridnavigationactionevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when Grid keyboard navigation position is changed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onPagechange?


</td>
<td type class="table-cell-type">


<code>


(event: [GridPageChangeEvent]({% slug api_grid_gridpagechangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the page of the Grid is changed ([see example]({% slug paging_grid %})).
You have to handle the event yourself and page the data.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRemove?


</td>
<td type class="table-cell-type">


<code>


(event: [GridRemoveEvent]({% slug api_grid_gridremoveevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user triggers a removal operation from a cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRowclick?


</td>
<td type class="table-cell-type">


<code>


(event: [GridRowClickEvent]({% slug api_grid_gridrowclickevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user clicks a row.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRowdblclick?


</td>
<td type class="table-cell-type">


<code>


(event: [GridRowClickEvent]({% slug api_grid_gridrowclickevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user double clicks a row.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRowpinchange?


</td>
<td type class="table-cell-type">


<code>


(event: [GridRowPinChangeEvent]({% slug api_grid_gridrowpinchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a row is pinned, unpinned, or moved between pinned zones.
Requires `pinnable={true}`.

```vue
<Grid :pinnable="true" @rowpinchange="(e) => {
  pinnedTop = e.pinnedTopRows;
  pinnedBottom = e.pinnedBottomRows;
}" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSave?


</td>
<td type class="table-cell-type">


<code>


(event: [GridSaveEvent]({% slug api_grid_gridsaveevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user triggers a saving operation from a cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onScroll?


</td>
<td type class="table-cell-type">


<code>


(event: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when Grid is scrolled.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSearchchange?


</td>
<td type class="table-cell-type">


<code>


(event: [GridSearchChangeEvent]({% slug api_grid_gridsearchchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the search descriptor of the Grid is changed.
You have to handle the event yourself and search the data.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSelectionchange?


</td>
<td type class="table-cell-type">


<code>


(event: [GridSelectionChangeEvent]({% slug api_grid_gridselectionchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user tries to select or deselect a row
([see example]({% slug selection_grid %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSortchange?


</td>
<td type class="table-cell-type">


<code>


(event: [GridSortChangeEvent]({% slug api_grid_gridsortchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the sorting of the Grid is changed ([see example]({% slug sorting_grid %})).
You have to handle the event yourself and sort the data.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### pageable?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the pager of the Grid ([see example]({% slug paging_grid %})).

The available options are:
- `buttonCount: Number`&mdash;Sets the maximum numeric buttons count before the buttons are collapsed.
- `info: Boolean`&mdash;Toggles the information about the current page and the total number of records.
- `type: PagerType`&mdash;Accepts the `numeric` (buttons with numbers)
and `input` (input for typing the page number) values.
- `pageSizes: Boolean` or `Array<number>`&mdash;Shows a menu for selecting the page size.
- `previousNext: Boolean`&mdash;Toggles the **Previous** and **Next** buttons.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### pager?


</td>
<td type class="table-cell-type">


<code>


string | boolean | Object | Function


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the custom rendering of the pager. Accepts  a slot name, a `render` function, or a Vue component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### pageSize?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the page size that is used by the Grid pager
([see example]({% slug paging_grid %})). Required by the paging functionality.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### pinnable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the row pinning feature.
When `false` or omitted, the row pinning feature is inactive.

```vue
<Grid :pinnable="true" :pinned-top-rows="pinnedTop" @rowpinchange="handlePinChange" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### pinnedBottomRows?


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The array of data items pinned to the bottom of the Grid.
Pinned rows remain visible while the body scrolls and are immune to filtering and pagination.
Requires `pinnable={true}`.

```vue
<Grid :pinnable="true" :pinned-bottom-rows="[products[9]]" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### pinnedTopRows?


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The array of data items pinned to the top of the Grid.
Pinned rows remain visible while the body scrolls and are immune to filtering and pagination.
Requires `pinnable={true}`.

```vue
<Grid :pinnable="true" :pinned-top-rows="[products[0], products[1]]" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### reorderable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true`, the user can reorder columns by dragging their
header cells ([see example]({% slug reordering_columns_grid %}).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### resizable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true`, the user can resize columns by dragging the edges (resize handles) of their
header cells ([see example]({% slug resizing_columns_grid %}).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rowClass?


</td>
<td type class="table-cell-type">


<code>


Function


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A function that returns a custom class applied to the row.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### rowHeight?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the row height and forces an equal height to all rows
([see example]({% slug scrollmmodes_grid %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rowRender?


</td>
<td type class="table-cell-type">


<code>


string | boolean | (h: any, defaultRendering: any, defaultSlots: any, props: any, listeners: any) => any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


`obsolete` Will be removed in the next major release. Use 'rows' prop instead.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rows?


</td>
<td type class="table-cell-type">


<code>


[GridRowsSettings]({% slug api_grid_gridrowssettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines a set of custom row components that the Grid will render instead of the default rows.

```vue
<Grid
  :rows="{
    pinnedData: CustomPinnedRow
  }"
/>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### rowSpannable?


</td>
<td type class="table-cell-type">


<code>


boolean | [GridRowSpannableSettings]({% slug api_grid_gridrowspannablesettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the built-in row span feature of the Grid.

```vue
<Grid :row-spannable="true" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### scrollable?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the scroll mode that is used by the Grid ([see example]({% slug scrollmmodes_grid %}).

The available options are:
 - `none`&mdash;Renders no scrollbar.
 - `scrollable`&mdash;This is the default scroll mode. It requires the setting of the `height` option.
 - `virtual`&mdash;Displays no pager and renders a portion of the data (optimized rendering)
while the user is scrolling the content.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### search?


</td>
<td type class="table-cell-type">


<code>


CompositeFilterDescriptor


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The descriptor by which the data is searched. Its first FilterDescriptor populates the GridSearchBox.

```vue
<Grid :search="{ logic: 'and', filters: [{ field: 'name', operator: 'contains', value: 'test' }] }" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### searchFields?


</td>
<td type class="table-cell-type">


<code>


string | SearchField[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the fields of the data that are filtered by the GridSearchBox.

```vue
<Grid :search-fields="['name', 'category']" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### select?


</td>
<td type class="table-cell-type">


<code>


SelectDescriptor


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The [descriptor](https://www.telerik.com/kendo-vue-ui/components/datatools/api/selectdescriptor) by which the selected state of an item is defined.
Passing a boolean value will select the whole row, while passing an array of strings will select individual.

```vue
<Grid :select="{ ['item-data-key-id']: true }" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### selectable?


</td>
<td type class="table-cell-type">


<code>


boolean | [GridSelectableSettings]({% slug api_grid_gridselectablesettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The Grid selectable settings.

```vue
<Grid :selectable="{ enabled: true, mode: 'single' }}" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### selectedField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


`obsolete` Will be removed in the next major release. Use `selectable` instead.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### showLoader?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies whether the loader of the Grid will be displayed.
Defaults to `false`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### size?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


`undefined`


</code>


</td>
<td class="table-cell-comment">


Configures the `size` of the Grid.

The available options are:
- small
- medium





</td>
</tr>
<tr>
<td class="table-cell-name">


#### skip?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the number of records that will be skipped by the pager
([see example]({% slug paging_grid %})). Required by the paging functionality.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### sort?


</td>
<td type class="table-cell-type">


<code>


SortDescriptor[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The descriptors by which the data is sorted.
Applies the sorting styles and buttons to the affected columns.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### sortable?


</td>
<td type class="table-cell-type">


<code>


[GridSortSettings]({% slug api_grid_gridsortsettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the sorting for the columns with their `field` option set
([see example]({% slug sorting_grid %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### style?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the `style` HTML attribute.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### take?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Alias of the `pageSize` property. If `take` is set, `pageSize` will be ignored.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### topCacheCount?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Deprecated. Not needed any more.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### total?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the total number of data items in all pages
([see example]({% slug paging_grid %})). Required by the paging functionality.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### totalGroupedHeight?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Deprecated. Not needed any more.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### uniqueField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Deprecated. Not needed any more. Use 'dataItemKey' instead.


</td>
</tr>
</tbody>
</table>



