---
title: Export Options
description: "Learn how to export the Kendo UI for Vue Sankey Chart to either an Image, SVG, or a PDF and customize the export."
slug: export_sankey
position: 30
---

# Export Options

The Kendo UI for Vue Sankey diagram allows you to export its contents as an Image, SVG, or PDF file.

Regardless of the required export format, you can use the [`exportVisual`]({% slug api_charts_exportvisual %}) method to export the visuals of the Sankey component. The component exports the visuals as an Image, SVG, or PDF by using the [Drawing]({% slug overview_drawing %}) library and saves them using the [File Saver]({% slug overview_filesaver %}) component's [`saveAs`]({% slug api_filesaver %}#toc-saveAs) method.

## Export to Image

Export the Sankey visual as an Image by using the [`exportImage`]({% slug api_kendo-drawing_exportimage %}) method and save it using the [`saveAs`]({% slug api_filesaver %}#toc-saveAs) method.

{% meta height:400 %}
{% embed_file sankey/export/image/main.vue preview %}
{% embed_file sankey/export/image/main.js %}
{% endmeta %}

By default, the exported image is of the same size as the Sankey DOM element. If required, you can export the file to a different resolution. If you change the image size, the image quality will not be affected because the rendering of the Sankey chart is based on vector graphics.

{% meta height:400 %}
{% embed_file sankey/export/image-size/main.tsx preview %}
{% embed_file sankey/export/image-size/data.ts %}
{% endmeta %}

## Export to SVG

Export the Sankey visual as an SVG by using the [`exportSVG`]({% slug api_kendo-drawing_exportsvg %}) method and save it using the [`saveAs`]({% slug api_filesaver %}#toc-saveAs) method.

{% meta height:370 %}
{% embed_file sankey/export/svg/main.vue preview %}
{% embed_file sankey/export/svg/main.js %}
{% endmeta %}

## Export to PDF

Export the Sankey visual as a PDF by using the [`exportPDF`]({% slug api_kendo-drawing_pdf_exportpdf %}) method and save it using the [`saveAs`]({% slug api_filesaver %}#toc-saveAs) method.

{% meta height:370 %}
{% embed_file sankey/export/pdf/main.vue preview %}
{% embed_file sankey/export/pdf/main.js %}
{% endmeta %}

### Fitting to Paper Size

If the rendered Sankey Chart is bigger than the exported PDF paper size, then the chart is clipped. To avoid this behavior, either:

* Set the `exportVisual` size, or
* Scale the drawing element, which is returned by the `exportVisual` method.

The following example demonstrates how to fit the exported Sankey Chart to the paper size of the PDF file.

{% meta height:400 %}
{% embed_file sankey/export/pdf-paper-size/main.vue preview %}
{% embed_file sankey/export/pdf-paper-size/main.js %}
{% endmeta %}

## Customize the Export

You can customize the export in the [`exportVisual`]({% slug api_charts_exportvisual %}) method using the `SankeyExportVisualOptions`. The following options are available:
- `width`&mdash;Set the width of the exported visual.
- `height`&mdash;Set the height of the exported visual.
- `options`&mdash;Set the [`SankeyOptions`]({% slug api_charts_sankeyoptions %}).

{% meta height:400 %}
{% embed_file sankey/export/custom/main.vue preview %}
{% embed_file sankey/export/custom/main.js %}
{% endmeta %}

## Suggested Links

* [Drawing]({% slug overview_drawing %})
* [File Saver]({% slug overview_filesaver %})
* [API Reference of the Sankey chart]({% slug api_charts_sankeyprops %})
