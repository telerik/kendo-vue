---
title: Excel Export
description: "Learn how to export the Kendo UI for Vue Native TreeList data to an Excel file."
slug: overview_excelexport_treelist
position: 90
---

# Native TreeList Excel Export

The Kendo UI for Vue Native TreeList provides options for exporting its data to Excel in a hierarchical tree format.

<div data-component="StartFreeTrialSection"></div>

## Getting Started

To export the Native TreeList data to an Excel file you need to apply the following configurations:

1. Install `kendo-vue-excel-export` package.

    ```sh
    npm install @progress/kendo-vue-excel-export @progress/kendo-licensing @progress/kendo-svg-icons
    ```
2. Import the `saveExcel` method from the **@progress/kendo-vue-excel-export** package.
    
    ```jsx
    import { saveExcel } from '@progress/kendo-vue-excel-export';   
    ```
3. Import the `treeToFlat` method from the **@progress/kendo-vue-treelist** package.
    
    ```jsx
    import {
        TreeList,
        treeToFlat,
        mapTree,
        extendDataItem,
    } from '@progress/kendo-vue-treelist';
    ```

4. Use the saveExcel method as in the following snippet. Define a `fileName` for the exported file. Use the `treeToFlat` method to convert the hierarchical data to flat one. Pass the `columns` structure and set the `hierarchy` prop to true.

```jsx
  saveExcel({
    fileName: 'myFile',
    data: treeToFlat(
      this.processedData,
      this.expandField,
      this.subItemsField
    ),
    columns: this.columns,
    hierarchy: true,
  });
```

The following example demonstrates the basic implementation of the Excel export functionality that uses the of the TreeList.

{% meta height:590 %}
{% embed_file excel/basic/main.vue preview %}
{% embed_file excel/basic/main.js %}
{% embed_file shared/data.js %}
{% endmeta %}

## Exporting Specific Data

To export specific TreeList data, pass only the data chunk that should be exported to the `data` property of the `saveExcel` function. In the below example,the TreeList has its paging enabled. If you need to export only the current visible page use the following definition.

```jsx
  saveExcel({
    fileName: 'myFile',
    data: treeToFlat(
      this.processedData,
      this.expandField,
      this.subItemsField
    ).slice(this.skip, this.skip + this.take),
    columns: this.columns,
    hierarchy: true,
  });
```

{% meta height:640 %}
{% embed_file excel/single-page/main.vue preview %}
{% embed_file excel/single-page/main.js %}
{% embed_file shared/data.js %}
{% endmeta %}

## Customizing Exported Workbook

When exporting an Excel file, the generated workbook can be customized. The customization can be used to modify values, appearance, or sheets in the exported document.
The following example demonstrates how to add a different background color to the alt rows of the exported Excel file.

{% meta height:590 %}
{% embed_file excel/customization/main.vue preview %}
{% embed_file excel/customization/main.js %}
{% embed_file shared/data.js %}
{% endmeta %}

## Known Limitations

* During the export to Excel, the TreeList does not use column formats. Column formats are incompatible with Excel. For more information, refer to the page on the [Excel-supported formats](https://support.office.com/en-us/article/Create-or-delete-a-custom-number-format-78f2a361-936b-4c03-8772-09fab54be7f4?ui=en-US&rs=en-US&ad=US).
* The maximum size of the exported file to Excel has a system-specific limit. For large data sets, it is highly recommended that you use a server-side solution.

## Suggested Links

* [ExcelExport Overview]({% slug overview_excelexport_vue %})