---
title: Implement Multifunctional Native Grid with Grouping, Detail Template, Localization, Sorting, PDF and Excel Export
description: An example of how to implement a complex Native Grid scenario that covers most of the widely used options of the Kendo UI for Vue Native Grid component.
type: how-to
page_title: Implement a Multifunctional Native Grid - Kendo UI for Vue Native Grid
slug: grid-grouping-detail-template-localization-sortable-reorderable
tags: grid, grouping, detail template, localization, sorting, column lock, pdf export, excel export,  kendovue, native
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>3.0.1</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® Kendo UI for Vue Native</td>
	    </tr>
    </tbody>
</table>


## Description

This Knowledge base article shows how we can implement some of the most widely used Native Grid functionalities:
* Data Grouping
* Detail Template for each row
* Localization & Globalization of the component
* Data sorting
* Column reordering
* Column locking
* Excel export
* PDF export

**KB sections**

* [Solution description](#toc-solution-description)
* [Runnable example](#toc-runnable-example)

## Solution description

**Data grouping configuration**

To make the Grid data groupable:
1. First thing that should be done is to set the [groupable property](slug:api_grid_gridprops#toc-groupable) to `true`. 
2. To have a grouped data, by default, set a value for the [group property](slug:api_grid_gridprops#toc-group). In the below example the value of the `group` property is:
```js
group: [
   { field: 'customerID' }
],
```
The above will initially group Grid's data by the `customerID` column. 

**Detail Template configuration**

To define a detail template use the [detail property](slug:api_grid_gridprops#toc-detail). Pass a slot template to this property. Inside the slot template, you can use a custom template that formats the detail row data. The detail slot template used in the below example is defined as follows.
```js
<template v-slot:myTemplate="{props}">
	<custom :data-item="props.dataItem" />
</template>
```
**Localization & Globalization**

The Localization & Globalization of the component are achieved with the `IntlProvider`, `load`, `LocalizationProvider`, `loadMessages`, `IntlService` components and methods that are part of the `@progress/kendo-vue-intl` package.
More details you can find on [Grid's Globalization page](slug:globalization_grid). 

**Data Sorting**

To make the Grid data sortable:
1. Set the [sortable property](slug:api_grid_gridprops#toc-sortable) to `true`. 
2. To have a sorted data, by default, set a value for the [sort property](slug:api_grid_gridprops#toc-sort). In the below example the value of the `sort` property is:
```js
sort: [
   { field: 'orderDate', dir: 'desc' }
]
```
The above will initially sort Grid's data by the `orderDate` column, in descending order. 

**Column reordering**

To make Grid columns reorderable, set the [reorderable property](slug:api_grid_gridprops#toc-reorderable) to true.

**Column locking**

To lock a given column in the Grid, add the [locked column prop](slug:api_grid_gridcolumnprops#toc-locked) to its definition and set its value to `true`. 

**Excel export**

The Excel export functionality of the data Grid is based on the `saveExcel` method that is part of the `@progress/kendo-vue-excel-export` package. 
More about the Export excel functionality shipped with the Kendo UI for Vue suite, you can find in our [Excel Export documentation](slug:overview_excelexport_vue). 

**PDF export**
The PDF export in the below example is implemented with the `GridPdfExport` component that is part of the `@progress/kendo-vue-pdf` package.
The content that is exported to a PDF file is wrapped in the `pdfexport` tag inside the template section of the `main.vue` file. Using the below code, the content wrapped in the `pdfexport` tag will be exported in the PDF file. More details about the [Grid PDF Export documentation](slug:overview_pdfexport_grid).

```js
exportPDF () {
	const tempSort = this.sort; 
	this.sort = null;
	this.$nextTick(()=>{
		(this.$refs.gridPdfExport).save(process(orders,
		{ skip: this.skip, take: this.take }));
		this.sort = tempSort;
	})
}
```

### Runnable example
{% meta id:index height:760 %}
{% embed_file grid-grouping-detail-template-localization-sortable-reorderable/main.vue preview %}
{% embed_file grid-grouping-detail-template-localization-sortable-reorderable/DetailComponent.vue %}
{% embed_file grid-grouping-detail-template-localization-sortable-reorderable/main.js %}
{% embed_file grid-grouping-detail-template-localization-sortable-reorderable/orders.json %}
{% embed_file grid-grouping-detail-template-localization-sortable-reorderable/es.json %}
{% endmeta %}
