---
title: Export Options
description: "Export the Kendo UI for Vue Chart component to PDF, image or svg in vue project."
slug: export_chart_charts
position: 6
---

# Export Options

The Chart provides support for Image, PDF, and SVG export using the [Drawing]({% slug overview_drawing %}) package.

As a result, you can send a Base64-encoded file to a service or save it on the client machine by using the [File Saver]({% slug overview_filesaver %}) package.

The Chart supports the following options:

* [Exporting to an image](#toc-exporting-to-images)
* [Exporting to the Portable Document Format (PDF)](#toc-exporting-to-pdf)
* [Exporting to the Scalable Vector Graphics (SVG) image format](#toc-exporting-to-svg)

## Exporting to Drawing Visuals

In order to export a Chart component as a Drawing scene use the `exportVisual` method and pass a Chart instance and export options.

The following example demonstrates how to export the Chart as a Drawing visual scene by using the `exportVisual` method. All examples in this article use a definition similar to the below to generate the Drawing scene of the Chart.

```jsx-no-run
exportChartVisual(callback) {
  const chartVisual = exportVisual(this.$refs.chart, {});
  if (chartVisual) {
    callback(chartVisual);
  }
}
```

## Exporting to Images

Once the Chart is exported as Drawing scene, the following example demonstrates how to save this visual as PNG image using the [`exportImage`]({% slug api_kendo-drawing_exportimage %}) method of the [Drawing]({% slug overview_drawing %}) package.

{% meta height:500 %}
{% embed_file export-options/image/main.vue previews %}
{% embed_file export-options/image/main.js %}
{% endmeta %}

By default, the exported image is of the same size as the Chart DOM element. If required, you can export the file to a different resolution. If you change the image size, the image quality will not be affected because the rendering of the Chart is based on vector graphics.

{% meta height:500 %}
{% embed_file export-options/image-size/main.vue previews %}
{% embed_file export-options/image-size/main.js %}
{% endmeta %}

## Exporting to PDF

The [`exportPDF`]({% slug api_kendo-drawing_pdf_exportpdf %}) method from the [Drawing]({% slug overview_drawing %}) library takes a visual element and produces a PDF file out of it.

### Saving Charts in PDF

The following example demonstrates how to save the Chart as a PDF file by using the `exportPDF` method.

{% meta height:500 %}
{% embed_file export-options/pdf/main.vue previews %}
{% embed_file export-options/pdf/main.js %}
{% endmeta %}

### Fitting Charts to Paper Size

If the rendered Chart is bigger than the exported PDF paper size, then the Chart is clipped. To avoid this behavior, either:

* Set the `exportVisual` size, or
* Scale the drawing element which is returned by the `exportVisual` method.

The following example demonstrates how to fit the exported Chart to the paper size of the PDF file.

{% meta height:500 %}
{% embed_file export-options/pdf-size/main.vue previews %}
{% embed_file export-options/pdf-size/main.js %}
{% endmeta %}

## Exporting to SVG

Once the Chart is exported as Drawing scene, the following example demonstrates how to save this visual as an SVG using the [`exportSVG`]({% slug api_kendo-drawing_exportsvg %}) method of the [Drawing]({% slug overview_drawing %}) package.

{% meta height:500 %}
{% embed_file export-options/svg/main.vue previews %}
{% embed_file export-options/svg/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Chart]({% slug api_charts %})
* [Glossary]({% slug glossary_charts %})
