---
title: Exporting All Pages
page_title: Vue Grid - Exporting All Pages to PDF - Kendo UI Native DataGrid
description: "Get started with the native Vue Grid by Kendo UI which supports the export of all pages to PDF."
slug: allpages_pdfexport_grid
position: 2
---

# Exporting All Pages

The `GridPDFExport` component enables you to export all Grid pages to PDF.

To export all pages of the native Vue Grid by Kendo UI, pass them as the data argument of the `save` method.

> * The export of all Grid pages requires all records, including the off-screen ones, to be rendered at once.
> * The exact maximum number of exportable rows varies depending on the browser, system resources, template complexity, and other factors.
> * Verify your own worst-case scenarios in each browser you intend to support.

{% meta height:690 %}
{% embed_file pdf/all-pages/main.vue preview %}
{% embed_file pdf/all-pages/main.js %}
{% endmeta %}

## Suggested Links

* [PDF Export Known Limitations]({% slug limitations_pdfexport_grid %})
* [API Reference of the Grid]({% slug api_grid_gridprops %})
* [API Index of the Grid]({% slug api_grid %})
