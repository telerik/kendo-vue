---
title: Getting Started
page_title: Vue PDF Processing Component Getting Started | Kendo UI for Vue Native Docs & Demos
description: "Get started with the Vue PDF Processing package by Kendo UI for Vue and learn more about how to export data to PDF in Vue projects."
slug: get_started_pdf_processing
position: 2
---

# Getting Started with Kendo UI for Vue PDF Processing

The Kendo UI for Vue PDF Processing enables you to export single- and multi-page content in PDF and provides options such as embedding images, exporting hidden content, setting the margins of the document and styling the output.

To export pages and page sections to PDF files, use either:

* The [`PDFExport`]({% slug api_pdf_pdfexportprops %}) component, or
* The [`savePDF`]({% slug api_pdf_savepdf %}) method.

To export content to PDF with the [`PDFExport`]({% slug api_pdf_pdfexportprops %}) component:

1. Place the content inside it.
1. Call the [`save`]({% slug api_pdf_pdfexportprops %}#toc-save) method of the component to save the generated file.

To export content to PDF with the [`savePDF`]({% slug api_pdf_savepdf %}) method:

1. Call the method.
1. Pass the content as its argument.

The PDF Processing feature is part of the Kendo UI for Vue library of Vue UI components. It is distributed through NPM under the [kendo-vue-pdf package](https://www.npmjs.com/package/@progress/kendo-vue-pdf).

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates the PDF Processing export components in action.

{% meta height:550 %}
{% embed_file get-started/main.vue preview %}
{% embed_file get-started/main.js %}
{% embed_file get-started/products.json %}
{% endmeta %}

## Functionality and Features

* [Embedding images]({% slug embedded_images_pdf_processing %})
* [Disabling hyperlinks]({% slug hyperlinks_pdf_processing %})
* [Scaling the exported content]({% slug content_scaling_pdf_processing %})
* [Configuring the margins of the exported content]({% slug setting_margin_pdf_processing %})
* [Rendering repeated table headers]({% slug table_headers_pdf_processing %})
* [Rendering multi-page content]({% slug multipage_content_pdf_processing %})
* [Hiding extra content]({% slug hidden_content_pdf_processing %})
* [Creating Base64 strings]({% slug base64strings_pdf_processing %})
* [Styling of the exported content]({% slug stylingofcontent_pdf_processing %})

Refer to the [Drawing library]({% slug overview_drawing %}) documentation for more information on:
* [Rendering dimensions and CSS units]({% slug dimensionscssunits_drawing %})
* [Embedding fonts]({% slug embeddedfonts_drawing %})
* [Exporting Unicode characters]({% slug embeddedfonts_drawing %})

## Installation

1. Download and install the package. Use Node.js v5.0.0 or later.

    ```sh
    npm install --save @progress/kendo-vue-pdf @progress/kendo-drawing @progress/kendo-licensing
    ```

1. Once installed, import the package module.

   ```jsx-no-run
    // ES2015 module syntax
    import { PDFExport, savePDF } from '@progress/kendo-vue-pdf';
    ```
    ```jsx-no-run
    // CommonJS format
    const { PDFExport, savePDF } = require('@progress/kendo-vue-pdf');
    ```

1. Follow the instructions on the Kendo UI for Vue [My License page]({% slug my_license %}) to activate your license. You can skip this step if your application already contains a Kendo UI for Vue license file.

## Suggested Links

* [API Reference of the PDF Processing Component]({% slug api_pdf_pdfexportprops %})
* [Limitations and Browser Support for the PDF Processing Component and the Drawing Library]({% slug limitationsbrowsersupport_drawing %})
