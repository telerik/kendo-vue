---
title: Export
description: "Export the Kendo UI for Vue Native Gauge components to images, PDF, or SVG in Vue projects."
slug: export_gauges
position: 5
---

# Export

The Gauges supports image, PDF, and SVG export by utilizing the [Kendo UI for Vue Drawing]({% slug overview_drawing %}) library.

As a result, you can send a Base64-encoded file to a service or save it on the client machine by using the [File Saver]({% slug overview_filesaver %}) package.

The Gauges support the following export options:
* [Exporting to an image](#toc-exporting-to-images)
* [Exporting to the Portable Document Format (PDF)](#toc-exporting-to-pdf)
* [Exporting to the Scalable Vector Graphics (SVG) image format](#toc-exporting-to-svg)

## Exporting to Images

The [`exportImage`]({% slug api_kendo-drawing_exportimage %}) method from the [Drawing]({% slug overview_drawing %}) library takes a visual element and produces an image file. To get the Gauge visual, use the `exportVisual` method which returns a Promise that is resolved with the Gauge visual.

The following example demonstrates how to save the Gauges as a PNG image by using the `exportImage` method.

{% meta height:400 %}
{% embed_file export-options/to-image/main.vue preview %}
{% embed_file export-options/to-image/main.js %}
{% endmeta %}

## Exporting to PDF

The [`exportPDF`]({% slug api_kendo-drawing_pdf_exportpdf %}) method from the [Drawing]({% slug overview_drawing %}) library takes a visual element and produces a PDF file. To get the Gauge visual, use the `exportVisual` method which returns a Promise that is resolved with the Gauge visual.

The following example demonstrates how to save the Gauges as a PDF file by using the `exportPDF` method.

{% meta height:400 %}
{% embed_file export-options/to-pdf/main.vue preview %}
{% embed_file export-options/to-pdf/main.js %}
{% endmeta %}

## Exporting to SVG

The [`exportSVG`]({% slug api_kendo-drawing_exportsvg %}) method from the [Drawing]({% slug overview_drawing %}) library takes a visual element and produces an image file. To get the Gauge visual, use the `exportVisual` method which returns a Promise that is resolved with the Gauge visual.

The following example demonstrates how to save the Gauges as an SVG file by using the `exportSVG` method.

{% meta height:400 %}
{% embed_file export-options/to-svg/main.vue preview %}
{% embed_file export-options/to-svg/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Gauges]({% slug api_gauges %})
