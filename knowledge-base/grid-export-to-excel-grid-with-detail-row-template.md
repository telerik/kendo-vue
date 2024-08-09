---
title: Export to Excel the data of a Grid that has a defined detail-row template. 
description: A a sample project that shows how to export to Excel the data of a Kendo UI for Vue Native Grid with a detail-row template. 
type: how-to
page_title: Export to Excel the data of a Grid with a defined detail-row template
slug: grid-export-to-excel-grid-with-detail-row-template
tags: grid, export, excel, detail template, detail-row, row, template, kendovue, native
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

This Knowledge base(KB) article shows how you can export to Excel the data from a Kendo UI for Vue Native Data Grid that has a defined detail-row template. 


**KB sections**

* [Solution description](#toc-solution-description)
* [Runnable example](#toc-runnable-example)

## Solution description

To export the Grids' data we need the following imports:
* `saveAs` method available in the **@progress/kendo-file-saver** package
* `workbookOptions` and `toDataURL` methods available in the **@progress/kendo-vue-excel-export** package

To export the data of the Grid we call the following method and pass to it the `data` and the `columns` definition:

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
const rows = options.sheets[0].rows;
```
The `rows` variable is an array that holds the rows data of the main Grid that has a retail-row template definition. To export the data of the sub-Grids below each detail row, we have to manually get the data and insert it in the `rows` array. 

To add the data of the Grids in the detailed rows of the main Grid we use the following code. 

```js-no-run
this.categories.forEach((category) => {
  currentCategoryProducts = this.products.filter(
    (item) => item.CategoryID === category.CategoryID
  );
  rows.find((el, index) => {
    if (el.cells[0].value === currentCategoryProducts[0].CategoryID) {
      currentRowIndex = index;
    }
  });

  // Add the Detail tables' data
  for (
    let productIdx = currentCategoryProducts.length - 1;
    productIdx >= 0;
    productIdx--
  ) {
    const product = currentCategoryProducts[productIdx];
    rows.splice(currentRowIndex + 1, 0, {
      cells: [
        {},
        { value: product.ProductID },
        { value: product.ProductName },
        { value: product.UnitPrice },
        { value: product.UnitsInStock },
      ],
    }); // Add all products of the current category
  }

  // Apply color to the headers of the Detail tables
  rows.splice(currentRowIndex + 1, 0, {
    cells: [
      {},
      Object.assign({}, headerOptions, { value: 'Product ID' }),
      Object.assign({}, headerOptions, { value: 'Product Name' }),
      Object.assign({}, headerOptions, { value: 'Unit Price' }),
      Object.assign({}, headerOptions, { value: 'Units In Stock' }),
    ],
  });
});
```

This line exports the Grids' data:

```js-no-run
toDataURL(options).then(saveFn);
```

### Runnable example
{% meta id:index height:620 %}
{% embed_file grid-export-to-excel-grid-with-detail-row-template/main.vue preview %}
{% embed_file grid-export-to-excel-grid-with-detail-row-template/DetailComponent.vue preview %}
{% embed_file grid-export-to-excel-grid-with-detail-row-template/main.js %}
{% embed_file grid-export-to-excel-grid-with-detail-row-template/products.js %}
{% endmeta %}
