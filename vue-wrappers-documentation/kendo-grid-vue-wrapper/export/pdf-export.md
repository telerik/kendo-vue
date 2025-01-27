---
title: PDF Export
page_title: Vue Grid Wrapper - PDF Export - Kendo UI for Vue
description: "Get started with the Vue Grid by Kendo UI and learn how to output its content to a PDF file."
slug: pdf_export_grid_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/grid/pdf/"
position: 2
---

<div><WrapperBanner link="/kendo-vue-ui/components/grid/pdf"></WrapperBanner></div>

# PDF Export

The Kendo UI Grid wrapper for Vue enables you to export its content to PDF.

> To configure the PDF export functionality of the native Vue Grid by Kendo UI, refer to the [native Vue Grid by Kendo UI documentation]({% slug overview_pdfexport_grid %}).

## Basics

You can export Kendo UI Data Grid wrapper for Vue data to PDF and use the client PDF-export functionality which is server-agnostic and which relies on the Kendo UI Drawing library. To enable the export to PDF, include the corresponding command to the toolbar of the Grid and configure the settings accordingly. For example, you can choose to export all pages, margins, paper size, font, and so on. To initiate the PDF export programmatically, call the [`saveAsPdf`](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/methods/saveaspdf) method from the client API of the Grid.

{% meta height:660 %}
{% embed_file grid/export/pdf/main.vue preview %}
{% embed_file grid/export/pdf/main.js %}
{% endmeta %}

## Customization

To modify the content of the exported PDF file, use CSS rules. When the user clicks the **Export** button, the page creates an individual element. Then it applies the CSS rules to that element and the files and the styling settings are exported.

```css-no-run
.k-pdf-export .k-grid {
    font-family: "DejaVu Sans", "Arial", sans-serif;
}
```

To enable compression in the PDF output, load the [pako zip library](https://github.com/nodeca/pako) (`pako_deflate.min.js`) from CDN. This approach improves the performance of the Grid and increases the size of the content that can be exported.

```html-no-run
<script src="https://kendo.cdn.telerik.com/2018.2.620/js/pako_deflate.min.js"></script>
```

The Standard PDF fonts do not support Unicode characters. That is why, when you use one of the [Kendo UI LESS-based themes](https://docs.telerik.com/kendo-ui/styles-and-layout/appearance-styling) which are referenced from CDN, provide the source files for embedding them in order for the output to use TrueType fonts.

```js-no-run
kendo.pdf.defineFont({
    "DejaVu Sans": "https://kendo.cdn.telerik.com/2016.2.607/styles/fonts/DejaVu/DejaVuSans.ttf",
    "DejaVu Sans|Bold": "https://kendo.cdn.telerik.com/2016.2.607/styles/fonts/DejaVu/DejaVuSans-Bold.ttf",
    "DejaVu Sans|Bold|Italic": "https://kendo.cdn.telerik.com/2016.2.607/styles/fonts/DejaVu/DejaVuSans-Oblique.ttf",
    "DejaVu Sans|Italic": "https://kendo.cdn.telerik.com/2016.2.607/styles/fonts/DejaVu/DejaVuSans-Oblique.ttf",
    "WebComponentsIcons": "https://kendo.cdn.telerik.com/2017.1.223/styles/fonts/glyphs/WebComponentsIcons.ttf"
});
```

For more information, refer to the [runnable StackBlitz example](https://stackblitz.com/edit/dpnnt5-hnr1ec) which uses the Pako library from CDN, the Default LESS theme, and external fonts.

## Suggested Links

* [Kendo UI Grid for jQuery](https://docs.telerik.com/kendo-ui/controls/data-management/grid/overview)
* [API Reference of the Grid Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid)
* [PDF Export in the Native Vue Grid by Kendo UI]({% slug overview_pdfexport_grid %})
