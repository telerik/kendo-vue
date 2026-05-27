---
title: Excel Export
page_title: Vue Grid - Excel Export - Kendo UI Native DataGrid
description: "Get started with the native Vue Grid by Kendo UI which supports the export of data to Excel."
slug: exporting_grid
position: 70
---

# Excel Export

The Kendo UI for Vue Native Grid provides inbuilt options for exporting its data to Excel.

## Getting Started

To enable the Excel export:

1. Install the `kendo-vue-excel-export` package.

    ```jsx-no-run
     npm install @progress/kendo-vue-excel-export
    ```

1. Import the ExcelExport component in your Vue Application.

    ```jsx-no-run
     import { saveExcel } from '@progress/kendo-vue-excel-export';
    ```

The following example demonstrates the basic implementation of the Excel export functionality of the Grid. The Grid uses a button `click` handler to trigger the `saveExcel` method. Note how the exported columns and the file name are defined to customize the exported file.
{% meta height:400 %}
{% embed_file excel/main.vue preview %}
{% embed_file excel/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Grid]({% slug api_grid_gridprops %})
* [API Index of the Grid]({% slug api_grid %})
