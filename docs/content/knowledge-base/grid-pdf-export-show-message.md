---
title: Show a Message While Exporting Grid to PDF
page_title: Show a Message While Exporting Grid to PDF - Kendo UI for Vue Data Grid
slug: grid-pdf-export-show-message
description: Learn how to display a message while exporting the Kendo UI for Vue Data Grid to PDF.
tags: grid, pdf, export, message, kendovue
res_type: kb
category: knowledge-base
---

## Environment

<table>
  <tbody>
    <tr>
      <td>Product Version</td>
      <td>7.0.0</td>
    </tr>
    <tr>
      <td>Product</td>
      <td>Progress® Kendo UI for Vue Data Grid</td>
    </tr>
  </tbody>
</table>

## Description

I want to show a message to the user while the Kendo UI for Vue Grid is being exported to PDF, and hide the message once the export is complete.

## Solution

To display a message during the PDF export process, use a reactive variable to control the visibility of the message. Set this variable to `true` before starting the export, and reset it to `false` after the export is finished. You can use the `ref` to the `GridPdfExport` component to trigger the export programmatically. The example below demonstrates this approach.

{% meta height:350 %}
{% embed_file grid-pdf-export-show-message/main.vue preview %}
{% embed_file grid-pdf-export-show-message/main.js %}
{% endmeta %}
