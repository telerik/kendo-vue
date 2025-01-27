---
title: excelProps API
description: "API Index | excelProps"
api_reference: true
slug: api_pivotgrid_excelprops
---

# ExcelProps

### excel-file-name `String`

The file name of the exported Excel file.

### excel-filterable `Boolean`

Enables or disables column filtering in the Excel file. Different from the filtering features of the PivotGrid.

### excel-force-proxy `Boolean`

If `excel-force-proxy` is set to `true`, the content will be forwarded to `proxyURL` even if the browser supports the saving of files locally.

### excel-proxy-url `String`

The URL of the server-side proxy which will stream the file to the user. Such browsers are IE version 9 and lower and Safari. The developer is responsible for implementing the server-side proxy.

The proxy will receive a `POST` request with the following parameters in the request body:

* `contentType`&mdash;The MIME type of the file.
* `base64`&mdash;The base-64 encoded file content or the file name as requested by the caller.

The proxy will return the decoded file with the `Content-Disposition` header set to `attachment; filename="<fileName.xslx>"`.

## Suggested Links

* [`Excel` in Kendo UI PivotGrid for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pivotgrid/configuration/excel)
