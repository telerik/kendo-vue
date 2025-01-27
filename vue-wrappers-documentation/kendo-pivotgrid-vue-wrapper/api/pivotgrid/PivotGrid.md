---
title: PivotGrid API
description: "API Index | PivotGrid"
api_reference: true
slug: api_pivotgridcomponent
---


# PivotGrid

## Directive

`kendo-pivotgrid`

## Props

### data-source `Object`

The data source of the PivotGrid which is used to display values ([`dataSource` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pivotgrid/configuration/datasource)).

You can set `data-source` to:

* A JavaScript object which represents any valid data source configuration.
* A JavaScript array.
* An existing `kendo.data.DataSource` instance.

If the `dataSource` option is set to a JavaScript object or an array, the PivotGrid will initialize a new `kendo.data.DataSource` instance by using that value as a data source configuration. If the `dataSource` option is an existing `kendo.data.DataSource` instance, the PivotGrid will use that instance and will not initialize a new one.

### auto-bind `Boolean`

If `auto-bind` is set to `false`, the PivotGrid will not bind to the data source during initialization ([`autoBind` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pivotgrid/configuration/autobind)). In this case, data binding will occur when the `change` event of the data source is fired. By default, the PivotGrid will bind to the data source which is specified in the configuration.

### reorderable `Boolean`

If `columnReorder` is set to `false`, the user will not be able to add, close, or reorder the current fields for the columns, rows, or measures ([`reorderable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pivotgrid/configuration/reorderable)).

### excel `Object`

Configures the Excel export settings of the PivotGrid ([`excel` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pivotgrid/configuration/excel)). The supported composite props are available in [`ExcelProps`]({% slug api_pivotgrid_excelprops %}).

### pdf `Object`

Configures the PDF export settings of the PivotGrid ([`pdf` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pivotgrid/configuration/pdf)). The supported composite props are available in [`PdfProps`]({% slug api_pivotgrid_pdfprops %}).

### filterable `Boolean`

If `filterable` is set to `true`, the user will be able to filter the PivotGrid by using the field menu ([`filterable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pivotgrid/configuration/filterable)).

### sortable `Boolean | Object`

If `sortable` is set to `true`, the user will be able to sort the PivotGrid by clicking the **Dimension** fields ([`sortable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pivotgrid/configuration/sortable)). By default, sorting is disabled. Can be set to a JavaScript object which represents the sorting configuration. The supported composite props are available in [`SortableProps`]({% slug api_pivotgrid_sortableprops %}).

### column-width `Number`

The width (in pixels) of the table columns ([`columnWidth` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pivotgrid/configuration/columnwidth)).

### height `Number | String`

The height of the PivotGrid ([`height` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pivotgrid/configuration/height)). Numeric values are treated as pixels.

### column-header-template `String | Function`

The template for rendering the content of the column header cell ([`columnHeaderTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pivotgrid/configuration/columnheadertemplate)). By default, `column-header-template` renders the caption of the tuple member.

The template supports the following fields:

* `member`&mdash;The member of the corresponding column header cell.
* `tuple`&mdash;The tuple of the corresponding column header cell.

### data-cell-template `String | Function`

The template for rendering the content of the data cell ([`dataCellTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pivotgrid/configuration/datacelltemplate)). By default, the template renders the formatted value (`fmtValue`) of the data item.

The template supports the following fields:

* `columnTuple`&mdash;The tuple of the corresponding column header cell.
* `rowTuple`&mdash;The tuple of the corresponding row header cell.
* `measure`&mdash;The value of the data cell measure.
* `dataItem`&mdash;The data item itself.

### kpi-status-template `String | Function`

The template for rendering the content of the **KPI Status** value ([`kpiStatusTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pivotgrid/configuration/kpistatustemplate)).

The default status icons are:

* `open`
* `hold`
* `denied`

The template supports the following fields:

* `columnTuple`&mdash;The tuple of the corresponding column header cell.
* `rowTuple`&mdash;The tuple of the corresponding row header cell.
* `measure`&mdash;The value of the data cell measure.
* `dataItem`&mdash;The data item itself.

### kpi-trend-template `String | Function`

The template for rendering the content of the KPI Trend value ([`kpiTrendTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pivotgrid/configuration/kpitrendtemplate)).

The default status icons are:

* `increase`
* `decrease`
* `equal`

The template supports the following fields:

* `columnTuple`&mdash;The tuple of the corresponding column header cell.
* `rowTuple`&mdash;The tuple of the corresponding row header cell.
* `measure`&mdash;The value of the data cell measure.
* `dataItem`&mdash;The data item itself.

### row-header-template `String | Function`

The template for rendering the content of the row header cell ([`rowHeaderTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pivotgrid/configuration/rowheadertemplate)). By default, `row-header-template` renders the caption of the tuple member.

The template supports the following fields:

* `member`&mdash;The member of the corresponding row header cell.
* `tuple`&mdash;The tuple of the corresponding row header cell.

### messages `Object`

The text messages that are displayed in the **Fields** sections ([`messages` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pivotgrid/configuration/messages)). The supported composite props are available in [`MessagesProps`]({% slug api_pivotgrid_messagesprops %}).

## Events

### databinding: `Function`

Fires before the PivotGrid binds to its data source ([`dataBinding` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pivotgrid/events/databinding)). The event handler function context (available through the `this` keyword) will be set to the PivotGrid instance.

### databound: `Function`

Fires after the PivotGrid is bound to the data from its data source ([`dataBound` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pivotgrid/events/databound)). The event handler function context (available through the `this` keyword) will be set to the PivotGrid instance.

### expandmember: `Function`

Fires before the column or row field is expanded ([`expandMember` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pivotgrid/events/expandmember)).  The event handler function context (available through the `this` keyword) will be set to the PivotGrid instance.

### collapsemember: `Function`

Fires before the column or row field is collapsed ([`collapseMember` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pivotgrid/events/collapsemember)).  The event handler function context (available through the `this` keyword) will be set to the PivotGrid instance.

### excelexport: `Function`

Fires when the `saveAsExcel` method is called ([`excelExport` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pivotgrid/events/excelexport)).

### pdfexport: `Function`

Fires when the user clicks the **Export to PDF** toolbar button ([`pdfExport` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pivotgrid/events/pdfexport)).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/pivotgrid#methods). 

### kendoWidget

##### returns

Returns the Kendo UI PivotGrid instance.
