---
title: asyncProps API
description: "API Index | asyncProps"
api_reference: true
slug: api_upload_asyncprops_wrapper
---

# AsyncProps

### async-auto-upload `Boolean`

By default, the selected files are uploaded immediately. To avoid the automatic upload of selected files, set `async-auto-upload` to `false`.

### async-batch `Boolean`

By default and if supported by the browser, the selected files are uploaded in separate requests. To avoid the upload of selected files in separate requests, set `async-batch` to `true`. As a result, all selected files are uploaded in one request. The batch mode applies to multiple files which are selected simultaneously. Files that are selected one after the other are uploaded in separate requests.

### async-chunk-size `Number`

When `async-chunk-size` is set, the selected files are uploaded chunk by chunk with the declared size. Each request sends a separate file blob and additional string metadata to the server.

The string metadata that is sent to the server is in a stringified JSON format and contains the following properties:

* `fileName`
* `relativePath`
* `chunkIndex`
* `contentType`
* `totalFileSize`
* `totalChunks`
* `uploadUid`

These properties enable the validation and combination of the file on the server side. The response also returns a JSON object with the uploaded and `fileUid` properties and notifies the client what the next chunk is.

### async-concurrent `Boolean`

By default, the selected files are uploaded one after the other. When `async-concurrent` is set to `true`, all selected files start to upload simultaneously.

### async-auto-retry-after `Number`

If `async-auto-retry-after` is set, the failed upload request is repeated after the declared amount of time (in milliseconds).

### async-max-auto-retries `Number`

The maximum number of attempts that are performed if an upload fails.

### async-remove-field `String`

The name of the `form` field that is submitted to `removeUrl`.

### async-remove-url `String`

The URL of the handler which is responsible for the removal of the uploaded files (if any). The handler must accept `POST` requests with one or more `fileNames` fields which specify the files that will be deleted.

### async-remove-verb `String`

The HTTP verb that will be used by the `remove` action.

### async-save-field `String`

The name of the `form` field which is submitted to `saveUrl`. Defaults to the input name.

### async-save-url `String`

The URL of the handler that will receive the submitted files. The handler must accept `POST` requests which contain one or more fields with the same name as the original input name.

### async-use-array-buffer `Boolean`

By default, the files are uploaded as file data. When `async-use-array-buffer` is set to `true`, the files are read as a file buffer by using `FileReader`. This buffer is sent in the request body.

### async-with-credentials `Boolean`

Controls whether to send credentials (cookies, headers) for cross-site requests.

## Suggested Links

* [`Async` in Kendo UI Upload for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/upload/configuration/async)
