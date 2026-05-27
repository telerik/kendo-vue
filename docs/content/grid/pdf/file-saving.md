---
title: Saving Files
description: "Get started with the Kendo UI for Vue Native Grid allowing you to save exported PDF files by implementing a server proxy."
slug: savingfiles_pdfexport_grid
position: 5
---

# Saving Files

Internet Explorer 9 and Safari do not support the saving of the exported PDF file and require the implementation of a [server proxy]({% slug overview_filesaver %}).

To specify the server proxy URL when you export the Kendo UI for Vue Data Grid to PDF, set the [`proxyURL`]({% slug api_pdf_pdfexportprops %}#toc-proxyurl) property.

Your project might require you to send the generated PDF file to a remote service. To achieve this behavior, specify the [`proxyURL`]({% slug api_pdf_pdfexportprops %}#toc-proxyurl) property and set the [`forceProxy`]({% slug api_pdf_pdfexportprops %}#toc-forceproxy) property to `true`. If the proxy returns `204 No Content`, the **Save As...** dialog will not appear on the client.

## Suggested Links

* [PDF Export Known Limitations]({% slug limitations_pdfexport_grid %})
* [API Reference of the GridPDFExport]({% slug api_pdf_gridpdfexportprops %})
* [API Reference of the Grid]({% slug api_grid_gridprops %})
* [API Index of the Grid]({% slug api_grid %})
* [Get Started with the PDFExport]({% slug overview_pdfexport_grid %})
