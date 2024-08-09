---
title: Export to Excel the Data from two separate Native Grids and save it in one sheet of the exported file. 
description: A a sample project that shows how to export to Excel the data from two Kendo UI for Vue Native Grids and put this data in one sheet. 
type: how-to
page_title: Export to Excel two Data Grids and put this data in one sheet | Kendo UI for Vue Native Grid
slug: grid-export-two-grids-to-one-excel-file-same-sheet
tags: grid, export, excel, one sheet, two grids, two, grids, kendovue, native
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

This Knowledge base(KB) article shows how you can export the data from two Kendo UI for Vue Native Data Grids to Excel. The data in the current KB is saved in one sheet of the exported file. 

If you need to export the two Grids' data to separate sheets, you can check this [Export to Excel the Data from two separate Native Grids and save it to different sheets of the exported file]({% slug grid-export-two-grids-to-one-excel-file-different-sheets %}).

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

The above calls the `customSaveExcel` method in which we have these lines:
```js-no-run
const options = workbookOptions(exportOptions);
const rows = options.sheets[0].rows;
```
The `rows` variable is an array that holds the data of the first Grid in a format that can be exported to Excel. To add the records of the second Grid to the exported Excel, we need to manually insert its data in the `rows` array. The first `push` below adds the header of the second Grid and the `forEach` loop adds its data.

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

This line exports the Grids' data:

```js-no-run
toDataURL(options).then(saveFn);
```

### Runnable example
{% meta id:index height:950 %}
{% embed_file grid-export-two-grids-to-one-excel-file-same-sheet/main.vue preview %}
{% embed_file grid-export-two-grids-to-one-excel-file-same-sheet/main.js %}
{% endmeta %}
