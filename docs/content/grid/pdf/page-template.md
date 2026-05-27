---
title: Page Template
page_title: Vue Grid - Page Template in PDF - Kendo UI Native DataGrid
description: "Get started with the native Vue Grid by Kendo UI enabling you to specify a page template to be additionally inserted into each page when exporting to PDF."
slug: pagetemplate_pdfexport_grid
position: 6
---

# Page Template

The `GridPDFExport` component enables you to specify a page template that will be additionally inserted into each PDF page of the native Vue Grid by Kendo UI.

Specifying a page template helps you position the content and add headers, footers, and other elements. To style the exported document, use CSS. During the PDF export, the template is positioned in a container with the specified paper size. To define a page template, specify the `page-template` prop of the `GridPDFExport` component.

> When you use a page template, you are required to set the `paper-size` prop.

{% meta height:720 %}
{% embed_file pdf/page-template/main.vue preview %}
{% embed_file pdf/page-template/main.js %}
{% endmeta %}

## Suggested Links

* [PDF Export Known Limitations]({% slug limitations_pdfexport_grid %})
* [API Reference of the Grid]({% slug api_grid_gridprops %})
* [API Index of the Grid]({% slug api_grid %})
