---
title: excelProps API
description: "API Index | excelProps"
api_reference: true
slug: api_treelist_excelprops_wrapper
---

# ExcelProps

### excel-file-name `String`

The file name of the exported Excel file.

### excel-filterable `Boolean`

Enables or disables column filtering in the Excel file. Different from the filtering feature of the TreeList.

### excel-force-proxy `Boolean`

If `excel-force-proxy` is set to `true`, the content will be forwarded to `proxyURL` even if the browser supports the saving of files locally.

### excel-proxy-url `String`

The URL of the server side proxy which will stream the file to the end user. When the browser is not capable of saving files locally, a proxy will be used. Such browsers are Internet Explorer version 9 (and older) and Safari. You are responsible for implementing the server-side proxy.

The proxy receives a `POST` request with the following parameters in the request body:

* `contentType`&mdash;The MIME type of the file.
* `base64`&mdash;The base-64 encoded file content.
* `fileName`&mdash;The file name as requested by the caller.

The proxy is expected to return the decoded file with a set `Content-Disposition` header set to `toattachment; filename="<fileName.xslx>"`.

## Suggested Links

* [`Excel` in Kendo UI TreeList for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist/configuration/excel)
