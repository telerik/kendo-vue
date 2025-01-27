---
title: Upload API
description: "API Index | Upload"
api_reference: true
slug: api_uploadcomponent_wrapper
---

# Upload

## Directive

`kendo-upload`

## Props

### async `Object`

Configures the asynchronous upload of files ([`async` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/upload/configuration/async)). The supported composite props are available in [`AsyncProps`]({% slug api_upload_asyncprops_wrapper %}).

### directory `Boolean`

Enables the selection of folders instead of files ([`directory` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/upload/configuration/directory)). When the user selects a directory, its entire content hierarchy of files is included in the set of selected items. The `directory` setting is available only in browsers which support `webkitdirectory`.

### directory-drop `Boolean`

Enables the dropping of folders to the Upload and its drop zone ([`directoryDrop` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/upload/configuration/directorydrop)). When the user drops a directory, its entire content hierarchy of files is included in the set of selected items. The `directoryDrop` setting is available only in browsers which support `DataTransferItem` and `webkitGetAsEntry`.

### drop-zone `String`

Based on a specific selector, initializes a `drop-zone` element which provides for the drag-and-drop file upload ([`dropZone` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/upload/configuration/dropzone)).

### enabled `Boolean`

If `enabled` id set to `true`, the Upload is enabled ([`enabled` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/upload/configuration/enabled)). To re-enable a disabled Upload, use `enable()`.

### files `Array`

The list of files that will be initially rendered in the file list of the Upload ([`files` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/upload/configuration/files)). The supported composite props are available in [`FilesProps`]({% slug api_upload_filesprops_wrapper %}).

Each `file` object in the array has to contain the following properties:

* `name`
* `size`
* `extension`

### localization `Object`

Sets the strings that are rendered by the Upload ([`localization` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/upload/configuration/localization)). The supported composite props are available in [`LocalizationProps`]({% slug api_upload_localizationprops_wrapper %}).

### multiple `Boolean`

* If `multiple` is set to `true`, the selection of multiple files is enabled ([`multiple` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/upload/configuration/multiple)).
* If `multiple` is set to `false`, the user can select only one file at a time.

### show-file-list `Boolean`

If `show-file-list` is set to `true`, the display of a file listing for the file upload is enabled ([`showFileList` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/upload/configuration/showfilelist)). The disabling of a file listing might be useful if you want to customize the UI. To build your own UI, use the client-side events.

### template `String | Function`

Sets a template for rendering the files in the file list ([`template` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/upload/configuration/template)).

The template data array consists of the following properties:

* `name`&mdash;The name of the file. If used in the batch upload mode, `name` represents a comma-separated string combination of all file names.
* `size`&mdash;The file size (in bytes). If used in the batch upload mode, `size` represents the total file size. If not available, the value is `null`.
* `files`&mdash;An array which contains information about all selected files (name, size, and extension).

### validation `Object`

The validation options for the uploaded files ([`validation` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/upload/configuration/validation)). The supported composite props are available in [`ValidationProps`]({% slug api_upload_validationprops_wrapper %}).

## Events

### cancel: `Function`

Fires when the upload was cancelled while in progress ([`cancel` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/upload/events/cancel)).

### clear: `Function`

Fires when the files are cleared through the **Clear** button ([`clear` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/upload/events/clear)).

### complete: `Function`

Fires when all active uploads complete&mdash;either successfully or with errors ([`complete` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/upload/events/complete)).

### error: `Function`

Fires when an upload or a `remove` operation fails ([`error` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/upload/events/error)).

### pause: `Function`

Fires when the files are cleared through the **Pause** button ([`pause` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/upload/events/pause)). The button is visible if `chunksize` is set.

### progress: `Function`

Fires when the data about the progress of the upload is available ([`progress` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/upload/events/progress)).

### resume: `Function`

Fires when the files are resumed through the **Resume** button ([`resume` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/upload/events/resume)). The button is visible if `chunksize` is set and the file upload is paused.

### remove: `Function`

Fires when an uploaded file is about to be removed ([`remove` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/upload/events/remove)). If `remove` is canceled, the `remove` operation is prevented.

### select: `Function`

Fires when a file is selected ([`select` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/upload/events/select)).

### success: `Function`

Fires when an upload or a `remove` operation is successfully completed ([`success` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/upload/events/success)).

### upload: `Function`

Fires when one or more files are about to be uploaded ([`upload` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/upload/events/upload)). The canceling of the `upload` event prevents the upload.

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/upload#methods). 

### kendoWidget

##### returns

Returns the Kendo UI Upload instance.
