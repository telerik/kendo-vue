---
title: Spreadsheet API
description: "API Index | Spreadsheet"
api_reference: true
slug: api_spreadsheetcomponent
---

# Spreadsheet

## Directive

`kendo-spreadsheet`

## Child Components

* [`kendo-spreadsheet-sheet`]({% slug api_spreadsheetsheetcomponent %})

## Props

### active-sheet `String`

The name of the currently active sheet ([`activeSheet` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/configuration/activesheet)). Has to exactly match one of the sheet names.

### column-width `Number`

The default width (in pixels) of the column ([`columnWidth` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/configuration/columnwidth)).

### columns `Number`

The number of columns in the document ([`columns` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/configuration/columns)).

### default-cell-style `Object`

The default cell styles that will be applied to the sheet cells ([`defaultCellStyle` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/configuration/defaultcellstyle)). The supported composite props are available in [`DefaultCellStyleProps`]({% slug api_spreadsheet_defaultcellstyleprops %}).

### header-height `Number`

The height (in pixels) of the header row ([`headerHeight` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/configuration/headerheight)).

### header-width `Number`

The width (in pixels) of the header column ([`headerWidth` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/configuration/headerwidth)).

### excel `Object`

Configures the Excel export settings of the Spreadsheet ([`excel` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/configuration/excel)). The supported composite props are available in [`ExcelProps`]({% slug api_spreadsheet_excelprops %}).

### pdf `Object`

Configures the PDF export settings of the Spreadsheet ([`pdf` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/configuration/pdf)). The supported composite props are available in [`PdfProps`]({% slug api_spreadsheet_pdfprops %}).

### row-height `Number`

The default height (in pixels) of the row ([`rowHeight` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/configuration/rowheight)).

### rows `Number`

The number of rows in the document ([`rows` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/configuration/rows)).

### sheets `Array`

An array which defines the document sheets and their content ([`sheets` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/configuration/sheets)).

### sheetsbar `Boolean`

A Boolean value which indicates if the sheets bar will be displayed ([`sheetsbar` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/configuration/sheetsbar)).

### toolbar `Boolean | Object`

A Boolean value which indicates if the toolbar will be displayed ([`toolbar` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/configuration/toolbar)). The supported composite props are available in [`ToolbarProps`]({% slug api_spreadsheet_toolbarprops %}).

### use-culture-decimals `Boolean`

By default, `use-culture-decimals` is set to `false` which means that the decimal separator in formulas is the dot. If set to `true`, the Spreadsheet formula parser will obey the decimal separator of the current culture.

This flag has implications on the way formulas are entered. If `use-culture-decimals` is set to `true` in cultures where the decimal separator is a comma (`,`), the Spreadsheet performs the following behavior upon entering which is similar to Excel:
* The semicolon (`;`) will become a function argument separator. For example, `=SUM(A1;A2)` instead of `=SUM(A1,A2)`.
* The backslash (`\`) will become an element separator in an array formula. For example, `={1\2;3\4}` instead of `={1,2;3,4}`.

The `use-culture-decimals` flag affects only the presentation&mdash;the way formulas are entered by the end user or the way they are displayed on screen. Serialization to JSON or XLSX as well as the public API functions will continue to use a dot as a decimal separator and a comma as an argument separator (canonical form). For example, to apply a formula by using the API, even if `use-culture-decimals` is in effect, you still need to use the canonical form. For more information, refer to [`useCultureDecima` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/configuration/useculturedecimals).

## Events

### insertsheet: `Function`

Fires when the user inserts a sheet ([`insertSheet` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/insertsheet)).

### removesheet: `Function`

Fires when the user removes a sheet ([`removeSheet` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/removesheet)).

### renamesheet: `Function`

Fires when the user renames a sheet ([`renameSheet` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/renamesheet)).

### selectsheet: `Function`

Fires when the user activates a sheet ([`selectSheet` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/selectsheet)).

### unhidecolumn: `Function`

Fires when the user displays (unhides) a column ([`unhideColumn` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/unhidecolumn)).

### unhiderow: `Function`

Fires when the user displays (unhides) a row ([`unhideRow` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/unhiderow)).

### hidecolumn: `Function`

Fires when the user hides a column ([`hideColumn` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/hidecolumn)).

### hiderow: `Function`

Fires when the user hides a row ([`hideRow` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/hiderow)).

### deletecolumn: `Function`

Fires when the user deletes a column ([`deleteColumn` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/deletecolumn)).

### deleterow: `Function`

Fires when the user deletes a row ([`deleteRow` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/deleterow)).

### insertcolumn: `Function`

Fires when the user inserts a column ([`insertColumn` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/insertcolumn)).

### insertrow: `Function`

Fires when the user inserts a row ([`insertRow` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/insertrow)).

### select: `Function`

Fires when the user change a Spreadsheet selection ([`select` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/select)).

### changeformat: `Function`

Fires when the user changes a range format from the UI ([`changeFormat` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/changeformat)).

### changing: `Function`

Fires when a value or validation in the Spreadsheet is about to be changed upon user interaction ([`changing` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/changing)).

### change: `Function`

Fires when the user changed a value in the Spreadsheet ([`change` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/change)).

### render: `Function`

Fires after the Spreadsheet completes its rendering ([`render` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/render)).

### excelexport: `Function`

Fires when the user clicks the **Export to Excel** toolbar button ([`excelExport` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/excelexport)).

### excelimport: `Function`

Fires when the user clicks the **Open** toolbar button ([`excelImport` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/excelimport)).

### pdfexport: `Function`

Fires when the user initiates the PDF export ([`pdfExport` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/pdfexport)).

### copy: `Function`

Fires when the user is about to copy a range of a sheet ([`copy` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/copy)).

### cut: `Function`

Fires when the user is about to cut a range of a sheet ([`cut` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/cut)).

### paste: `Function`

Fires when the user is about to paste data in a sheet ([`paste` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/paste)).

### databinding: `Function`

Fires when the data that is retrieved from a DataSource is about to be bound to a sheet. Available only if the DataSource was defined for at least one sheet ([`dataBinding` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/databinding)).

### databound: `Function`

Fires when the data from a DataSource is already populated in a sheet. Available only if the DataSource was defined for at least one sheet ([`dataBound` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/databound)).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet#methods). 

### kendoWidget

##### returns

Returns the Kendo UI Spreadsheet instance.
