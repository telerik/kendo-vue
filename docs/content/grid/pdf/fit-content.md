---
title: Fitting Content to Paper Size
page_title: Vue Grid - Fitting Content to Paper Size in PDF - Kendo UI Native DataGrid
description: "Get started with the native Vue Grid by Kendo UI enabling you to fit the content to paper size when exporting to PDF."
slug: fitcontent_pdfexport_grid
position: 4
---

# Fitting Content to Paper Size

The `GridPDFExport` component enables you to scale the content of the native Vue Grid by Kendo UI when you export it to PDF.

By default, the paper size of the exported document is determined by the size of the Grid on the screen. However, you can define a specific paper size that will apply to the whole document. As a result, the content is scaled to fit the specified paper size. It is possible to override the automatic scale factor&mdash;for example, to make room for additional page elements.

The following example demonstrates how the Grid fits its content to the available paper size by:
- Adjusting the column widths to fill the page.
- Adapting the number of rows for each page and places page breaks where appropriate.
- Omitting the toolbar and pager.

{% meta height:720 %}
{% embed_file pdf/fit-content/main.vue preview %}
{% embed_file pdf/fit-content/main.js %}
{% endmeta %}

## Suggested Links

* [PDF Export Known Limitations]({% slug limitations_pdfexport_grid %})
* [API Reference of the Grid]({% slug api_grid_gridprops %})
* [API Index of the Grid]({% slug api_grid %})
