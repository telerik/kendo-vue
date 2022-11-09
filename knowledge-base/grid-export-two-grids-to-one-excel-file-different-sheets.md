---
title: Export to Excel the Data from two separate Native Grids and save it in two separate sheets of the exported file. 
description: A a sample project that shows how to export to Excel the data from two Kendo UI for Vue Native Grids and put this data in two separate sheets. 
type: how-to
page_title: Export to Excel two Data Grids and put this data in two separate sheets | Kendo UI for Vue Native Grid
slug: grid-export-two-grids-to-one-excel-file-different-sheets
tags: grid, export, excel, two sheets, separate, sheets two grids, two, grids, kendovue, native
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>3.6.3</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® Kendo UI for Vue Native</td>
	    </tr>
    </tbody>
</table>


## Description

This Knowledge base(KB) article shows how you can export the data from two Kendo UI for Vue Native Data Grids to Excel. The data in the current KB is saved in two separate sheets of the exported file. 

If you need to export the two Grids' data to one sheet, you can check this [Export to Excel the Data from two separate Native Grids and save it in one sheet of the exported file]({% slug grid-export-two-grids-to-one-excel-file-same-sheet %}).

**KB sections**

* [Solution description](#toc-solution-description)
* [Runnable example](#toc-runnable-example)

## Solution description

To export the Grids' data we need the following imports:
* `saveAs` method available in the **@progress/kendo-file-saver** package
* `workbookOptions` and `toDataURL` methods available in the **@progress/kendo-vue-excel-export** package

To export the data of the Grids we call the following method and pass to it the `data` and the `columns` definitions of the first Grid:

```js-no-run
exportExcel() {
  this.customSaveExcel({
    data: this.categories,
    fileName: 'myFile',
    columns: this.columns,
  });
},
```

The above calls the the `customSaveExcel` method in which we have these lines:
```js-no-run
const options = workbookOptions(exportOptions);
const headerOptions = options.sheets[0].rows[0].cells[0];
options.sheets.push({ rows: [] });
const rows = options.sheets[1].rows;
```
The third line above adds a new sheet to the exported Excel file. The `rows` variable is and empty array in which we will add data of the second Grid. To add the records of the second Grid to the second sheet of the exported Excel we use the following code. The first `push` below adds the header of the second Grid and the `forEach` loop adds its data.

```js-no-run
rows.push({
  cells: [
    Object.assign({}, headerOptions, { value: 'ID' }),
    Object.assign({}, headerOptions, { value: 'Name' }),
    Object.assign({}, headerOptions, { value: 'First Ordered' }),
    Object.assign({}, headerOptions, { value: 'Units' }),
    Object.assign({}, headerOptions, { value: 'Discontinued' }),
  ],
});
this.grid2Data.forEach((category) => {
  rows.push({
    cells: [
      { value: category.ProductID },
      { value: category.ProductName },
      { value: category.FirstOrderedOn },
      { value: category.UnitsInStock },
      { value: category.Discontinued },
    ],
  });
});
```

The actual export of the Grids' data is done by this line:

```js-no-run
toDataURL(options).then(saveFn);
```

### Runnable example
{% meta id:index height:950 %}
{% embed_file grid-export-two-grids-to-one-excel-file-different-sheets/main.vue preview %}
{% embed_file grid-export-two-grids-to-one-excel-file-different-sheets/main.js %}
{% endmeta %}
