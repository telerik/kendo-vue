---
title: Export Options
page_title: Export Options - Diagram - Kendo UI for Vue
description: "Export the Kendo UI Diagram wrapper for Vue to PDF, PNG, and SVG formats directly in the browser."
slug: export_options_diagram
position: 3
---

<div><WrapperBanner></WrapperBanner></div>

# Export Options

The Kendo UI Diagram allows you to export it to PDF, PNG, and SVG formats and to save it in PDF directly in the browser.

## Exporting to Available File Formats

To implement the desired export options, use the `exportPDF`, `exportImage`, or `exportSVG` methods respectively.

{% meta height:730 %}
{% embed_file export-options/main.vue preview %}
{% embed_file export-options/main.js %}
{% endmeta %}

## Saving in PDF

To save the Diagram in PDF directly in the browser, use the [`saveAsPDF`](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/methods/saveaspdf) method.

{% meta height:730 %}
{% embed_file export-pdf/main.vue preview %}
{% embed_file export-pdf/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Diagram for jQuery](https://docs.telerik.com/kendo-ui/controls/diagrams-and-maps/diagram/overview)
* [API Reference of the Diagram Widget](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram)
