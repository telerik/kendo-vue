---
title: pdfProps Chart API
description: "API Index | pdfProps"
api_reference: true
slug: api_chart_pdfprops_wrapper
---

# PdfProps

### pdf-author `String`

The author of the PDF document.

### pdf-creator `String`

The creator of the PDF document.

### pdf-date `Date`

The date when the PDF document is created. Defaults to `new Date()`.

### pdf-force-proxy `Boolean`

If `pdf-force-proxy` is set to `true`, the content will be forwarded to proxyURL even if the browser supports saving files locally.

### pdf-file-name `String`

Specifies the file name of the exported PDF file.

### pdf-keywords `String`

Specifies the keywords of the exported PDF file.

### pdf-landscape `Boolean`

If  `pdf-landscape` is set to `true`, the paper dimensions are reversed.

### pdf-margin-bottom `Number | String`

The bottom margin. Numbers are considered as `pt` units.

### pdf-margin-left `Number | String`

The left margin. Numbers are considered as `pt` units.

### pdf-margin-right `Number | String`

The right margin. Numbers are considered as `pt` units.

### pdf-margin-top `Number | String`

The top margin. Numbers are considered as `pt` units.

### pdf-paper-size `String | Array`

Specifies the paper size of the PDF document. The default `auto` means that the paper size is determined by the content.

The supported values are:

* A predefined size&mdash;`A4`, `A3`, and others.
* An array of two numbers which specify the width and height in points (1pt = 1/72in).
* An array of two strings which specify the width and height in units. The supported units are `mm`, `cm`, `in`, and `pt`.

### pdf-proxy-url `String`

The URL of the server-side proxy which will stream the file to the end user.

A proxy will be used when the browser is not capable of saving files locally. Such browsers are IE version 9 and lower, and Safari. The implementation of the server-side proxy has to be done by you.

The proxy will receive a `POST` request with the following parameters in the request body:

* `contentType`&mdash;The MIME type of the file.
* `base64`&mdash;The base-64 encoded file content.
* `fileName`&mdash;The file name as requested by the caller.

The proxy has to return the decoded file with a set `Content-Disposition` header.

### pdf-proxy-target `String`

A name or keyword which indicates where to display the document that was returned by the proxy. To display the document in a new window or iframe, the proxy has to have the `Content-Disposition` header set to `inline`; filename=`<fileName.pdf>`.

### pdf-subject `String`

Sets the subject of the PDF file.

### pdf-title `String`

Sets the title of the PDF file.

## Suggested Links

* [`Pdf` in Kendo UI Chart for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/configuration/pdf)
