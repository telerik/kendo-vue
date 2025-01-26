---
title: pdfProps API
description: "API Index | pdfProps"
api_reference: true
slug: api_scheduler_pdfprops_wrapper
---

# PdfProps

### pdf-author `String`

The author of the PDF document.

### pdf-avoid-links `Boolean | String`

A flag which indicates whether to produce actual hyperlinks in the exported PDF file. It is also possible to pass a CSS selector as an argument. All matching links will be ignored.

### pdf-creator `String`

The creator of the PDF document.

### pdf-date `Date`

The date when the PDF document was created. Defaults to `new Date()`.

### pdf-file-name `String`

Specifies the file name of the exported PDF file.

### pdf-force-proxy `Boolean`

If `pdf-force-proxy` is set to `true`, the content will be forwarded to `proxyURL` even if the browser supports the saving of files locally.

### pdf-keywords `String`

Specifies the keywords of the exported PDF file.

### pdf-landscape `Boolean`

If `pdf-landscape` is set to `true`, the document orientation changes to landscape.

### pdf-margin-bottom `Number | String`

The bottom margin. Numbers are considered as `pt` units.

### pdf-margin-left `Number | String`

The left margin. Numbers are considered as `pt` units.

### pdf-margin-right `Number | String`

The right margin. Numbers are considered as `pt` units.

### pdf-margin-top `Number | String`

The top margin. Numbers are considered as `pt` units.

### pdf-paper-size `String | Array`

Specifies the paper size of the PDF document. The default setting is `auto` and determines the paper size by content.

The supported values are:

* A predefined size&mdash;A0-A10, B0-B10, C0-C10, Executive, Folio, Legal, Letter, Tabloid.
* An array of two numbers which specify the width and height in points (1pt = 1/72in).
* An array of two strings which specify the width and height in units.

  The supported units are:
  * `mm`
  * `cm`
  * `in`
  * `pt`

### pdf-proxy-url `String`

The URL of the server side proxy which will stream the file to the end user. When the browser is not capable of saving files locally, a proxy will be used. Such browsers are Internet Explorer version 9 (and older) and Safari. You are responsible for implementing the server-side proxy.

The proxy receives a `POST` request with the following parameters in the request body:

* `contentType`&mdash;The MIME type of the file.
* `base64`&mdash;The base-64 encoded file content.
* `fileName`&mdash;The file name as requested by the caller.

The proxy is expected to return the decoded file with a set `Content-Disposition` header set to `attachment; filename="<fileName.pdf>"`.

### pdf-proxy-target `String`

A name or keyword which indicates where to display the document that is returned from the proxy. To display the document in a new window or an iframe, the proxy method has to set the `Content-Disposition` header of the response to `inline; filename="<fileName.pdf>"`.

### pdf-subject `String`

Sets the subject of the PDF file.

### pdf-title `String`

Sets the title of the PDF file.

## Suggested Links

* [`Pdf` in Kendo UI Scheduler for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler/configuration/pdf)
