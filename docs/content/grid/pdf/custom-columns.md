---
title: Customizing Exported Columns
description: "Get started with the Kendo UI for Vue Native Grid which supports the customization of columns that will be exported."
slug: customcolumns_pdfexport_grid
position: 3
---

# Customizing Exported Columns

The [`GridPDFExport`]({% slug api_pdf_gridpdfexportprops %}) component enables you to specify the columns of the Kendo UI for Vue Native Grid that will be exported.

To configure the columns that will be exported, change the value of the [`columns`]({% slug api_grid_gridprops %}#toc-columns) prop just before executing the [`save`]({% slug api_pdf_gridpdfexportprops %}#toc-save) method. The new value should have the definitions of the columns that you want to be exported.

The `save` method exports the data that is passed to it. If you pass want to export all records from the Grid, you should pass the method an array holding this data.

{% meta height:700 %}
{% embed_file pdf/custom-columns/main.vue preview %}
{% embed_file pdf/custom-columns/main.js %}
{% endmeta %}

## Suggested Links

* [PDF Export Known Limitations]({% slug limitations_pdfexport_grid %})
* [API Reference of the Grid]({% slug api_grid_gridprops %})
* [API Index of the Grid]({% slug api_grid %})
* [Get Started with the PDFExport]({% slug overview_pdfexport_grid %})
