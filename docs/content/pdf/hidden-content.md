---
title: Hidden Content
page_title: Vue PDF Processing Component & Hidden Content | Kendo UI for Vue Native Docs & Demos
description: "Export hidden content by using the Kendo UI for Vue PDF Processing in Vue projects."
slug: hidden_content_pdf_processing
position: 9
---

# Hidden Content

You can generate content in PDF which is otherwise not visible to the user during the PDF export itself.

To export company logos, contact details, or other types of information to PDF that is not visible to the user, utilize the [`PDFExport`]({% slug api_pdf_pdfexportprops %}) component or the [`savePDF`]({% slug api_pdf_savepdf %}) method.

To prevent such extra content from displaying during the PDF export:

1. Create a container that holds all the information you want to hide from the user.
1. Make sure that the container is fully rendered.

The following example demonstrates how to use absolute positioning to move the container off the screen.

{% meta height:320 %}
{% embed_file hidden-content/main.vue preview %}
{% embed_file hidden-content/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the PDF Processing Component]({% slug api_pdf_pdfexportprops %})



