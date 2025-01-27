---
title: PDF Export
page_title: PDF Export - Scheduler - Kendo UI for Vue
description: "PDF Export of the content of the Kendo UI Scheduler wrapper for Vue."
slug: pdf_export_scheduler_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/scheduler/"
position: 7
---

<div><WrapperBanner link="/kendo-vue-ui/components/scheduler"></WrapperBanner></div> 

# PDF Export

The Scheduler enables you to export its content to PDF.

## Basics

To export the content of the Scheduler to PDF:
1. Include the `pdf` option to the toolbar of the Scheduler.
1. Configure the export settings through the `pdf` attribute.

You can specify the file name and whether to export all pages, margins, paper size, font, and so on.

{% meta height:665 %}
{% embed_file pdf/main.vue preview %}
{% embed_file pdf/main.js %}
{% endmeta %}

### Customization

To modify the content of the exported PDF file, use CSS rules. When the user clicks the **Export** button, the page creates an individual element. Then it applies the CSS rules to that element and the files and the styling settings are exported.

```css-no-run
/* Hide toolbar, navigation and footer during export */
.k-pdf-export .k-scheduler-toolbar,
.k-pdf-export .k-scheduler-navigation .k-nav-today,
.k-pdf-export .k-scheduler-navigation .k-nav-prev,
.k-pdf-export .k-scheduler-navigation .k-nav-next,
.k-pdf-export .k-scheduler-footer
{
	display: none;
}
```

If you load the Kendo UI stylesheets from an external source&mdash;for example, from CDN&mdash;import the fonts in the same manner as the following snippet imports the DejaVu Sans font.

```js-no-run
kendo.pdf.defineFont({
	"DejaVu Sans"             : "https://kendo.cdn.telerik.com/2016.2.607/styles/fonts/DejaVu/DejaVuSans.ttf",
	"DejaVu Sans|Bold"        : "https://kendo.cdn.telerik.com/2016.2.607/styles/fonts/DejaVu/DejaVuSans-Bold.ttf",
	"DejaVu Sans|Bold|Italic" : "https://kendo.cdn.telerik.com/2016.2.607/styles/fonts/DejaVu/DejaVuSans-Oblique.ttf",
	"DejaVu Sans|Italic"      : "https://kendo.cdn.telerik.com/2016.2.607/styles/fonts/DejaVu/DejaVuSans-Oblique.ttf",
	"WebComponentsIcons"      : "https://kendo.cdn.telerik.com/2017.1.223/styles/fonts/glyphs/WebComponentsIcons.ttf"
});

```

To enable compression in the PDF output, load the [pako zip library](https://github.com/nodeca/pako) (`pako_deflate.min.js`) from CDN. This approach improves the performance of the Scheduler and increases the size of the content that can be exported.

```js-no-run
<script src="https://kendo.cdn.telerik.com/2018.2.620/js/pako_deflate.min.js"></script>
```

For more information on how to implement the **PDF Export** button, customize the Scheduler by hiding its toolbar with CSS, and using the Pako library, refer to the [runnable StackBlitz example](https://stackblitz.com/edit/hpqpwb-f6yyyd?file=index.html).

## Suggested Links

* [Kendo UI Scheduler for jQuery](https://docs.telerik.com/kendo-ui/controls/scheduling/scheduler/overview)
* [API Reference of the Scheduler Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler)
