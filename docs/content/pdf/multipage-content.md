---
title: Multi-Page Content
page_title: Vue PDF Processing Component & Multi-Page Content | Kendo UI for Vue Native Docs & Demos
description: "Render multi-page content when you export files to PDF by using the Kendo Vue PDF Processing export components in Vue projects."
slug: multipage_content_pdf_processing
position: 8
---

# Multi-Page Content

The PDF Processing component provides options for generating multi-page content in PDF, preventing the page-split, and rendering page templates.  

* [Manual page breaking](#toc-manual-page-breaking)
* [Automatic page breaking](#toc-automatic-page-breaking)
* [Page templates](#toc-page-templates)
* [Preventing page breaking in elements](#toc-preventing-page-breaking-in-elements)

For more information on how to render multi-page content with the Drawing library, refer to its [PDF output documentation]({% slug multipagecontent_drawing %}).

## Manual Page Breaking

To manually specify the page breaks, use the [`forcePageBreak`]({% slug api_pdf_pdfexportprops %}#forcepagebreak) property. As a result, a page break, which matches the `forcePageBreak` CSS selector, occurs before each element.

The following example demonstrates how to split the content into multiple pages.

{% meta height:512 %}
{% embed_file multipage-content/manual-page-breaking/main.vue preview %}
{% embed_file multipage-content/manual-page-breaking/main.js %}
{% endmeta %}

## Automatic Page Breaking

The PDF Processing component supports automatic page breaking. To automatically insert page breaks, set the [`paperSize`]({% slug api_pdf_pdfexportprops %}#toc-papersize) option. You will still be able to apply the [`forcePageBreak`]({% slug api_pdf_pdfexportprops %}#toc-forcepagebreak) configuration to manually specify the break points.

For more information, refer to the [known limitations of the Drawing library and the PDF Export component]({% slug limitationsbrowsersupport_drawing %}).

{% meta height:870 %}
{% embed_file multipage-content/automatic-page-breaking/main.vue preview %}
{% embed_file multipage-content/automatic-page-breaking/main.js %}
{% endmeta %}

## Page Templates

When you request multi-page output through the [`forcePageBreak`]({% slug api_pdf_pdfexportprops %}#toc-forcepagebreak) or [`paperSize`]({% slug api_pdf_pdfexportprops %}#toc-papersize) options, you can additionally specify a [`pageTemplate`]({% slug api_pdf_pdfexportprops %}#toc-pagetemplate). The page template is inserted into each page before the output is produced and you can position it relatively to the page by using CSS.

{% meta height:870 %}
{% embed_file multipage-content/page-templates/main.vue preview %}
{% embed_file multipage-content/page-templates/main.js %}
{% embed_file multipage-content/page-templates/Components/Content.vue %}
{% endmeta %}

## Preventing Page Breaking in Elements

To prevent specific elements from being split across pages, use the [`keepTogether`]({% slug api_pdf_pdfexportprops %}#toc-keeptogether) option. `keepTogether` accepts CSS selectors that are passable to [`querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector).

All elements from the following example which have the `"prevent-split"` CSS class are kept within the boundaries of the pages and their content is not split. If they fall on a margin, they will be moved to the next page.

For more information on existing issues in element behavior during page breaking, refer to the article about [known limitations and browser support]({% slug multipagecontent_drawing %}).

{% meta height:870 %}
{% embed_file multipage-content/multi-page-content-keep-together/main.vue preview %}
{% embed_file multipage-content/multi-page-content-keep-together/main.js %}
{% embed_file multipage-content/multi-page-content-keep-together/Components/Content.vue %}
{% endmeta %}

## Suggested Links

* [API Reference of the PDF Processing Component]({% slug api_pdf_pdfexportprops %})
* [Rendering Multi-Page Content with the Drawing Library]({% slug multipagecontent_drawing %})


