---
title: fileBrowserProps API
description: "API Index | fileBrowserProps"
api_reference: true
slug: api_editor_filebrowserprops_wrapper
---

# FileBrowserProps

### file-browser-file-types `String`

Defines the allowed file extensions.

### file-browser-path `String`

Defines the initial folder that will be displayed in relation to the root.

### file-browser-transport-read `String | Function`

Options or URL for remote file retrieval.

### file-browser-transport-read-content-type `String`

The content-type HTTP header that is sent to the server. If the content is JSON, use `application/json`. For more information, refer to the documentation on `jQuery.ajax`.

### file-browser-transport-read-data `Object | String | Function`

The data that will be send to the server. For more information, refer to the documentation on `jQuery.ajax`.

### file-browser-transport-read-data-type `String`

The type of data that is expected by the server to return. For more information, refer to the documentation on `jQuery.ajax`.

The commonly used values are:

* `json`
* `jsonp`

### file-browser-transport-read-type `String`

The type of request that will be made (`POST`, `GET`, `PUT`, or `DELETE`). Defaults to `POST`. For more information, refer to the documentation on `jQuery.ajax`.

### file-browser-transport-read-url `String | Function`

The remote URL that will be called when the list of items is fetched.

### file-browser-transport-upload-url `String`

The URL which will handle the upload of the new files. If `file-browser-transport-upload-url` is not specified, the **Upload** button will not be displayed.

### file-browser-transport-file-url `String | Function`

The URL that is responsible for serving the original file. If you use a file-name placeholder, you are required to specify it. By default, the placeholder value is URL-encoded&mdash;to change this behavior, use a function.

### file-browser-transport-destroy `String`

The options or URL which will handle the deletion of files and directories. If `file-browser-transport-destroy` is not specified, the **Delete** button will not be displayed.

### file-browser-transport-destroy-content-type `String`

The content-type HTTP header that is sent to the server. Defaults to `application/x-www-form-urlencoded`. If the content is JSON, use `application/json`. For more information, refer to the documentation on `jQuery.ajax`.

### file-browser-transport-destroy-data `Object | String | Function`

The data that will be sent to the server. For more information, refer to the documentation on `jQuery.ajax`.

### file-browser-transport-destroy-data-type `String`

The type of data that is expected by the server to return. For more information, refer to the documentation on `jQuery.ajax`.

The commonly used values are:

* `json`
* `jsonp`

### file-browser-transport-destroy-type `String`

The type of request that will be made (`POST`, `GET`, `PUT`, or `DELETE`). Defaults to `POST`. For more information, refer to the documentation on `jQuery.ajax`.

### file-browser-transport-destroy-url `String | Function`

The remote URL that will be called when a new record is created.

### file-browser-transport-create `String`

The options or URL which will handle the creation of the directory. If `file-browser-transport-create` is not specified, the **Create new folder** button will not be displayed.

### file-browser-transport-create-content-type `String`

The content-type HTTP header that is sent to the server. Defaults to `application/x-www-form-urlencoded`. If the content is JSON, use `application/json`. For more information, refer to the documentation on `jQuery.ajax`.

### file-browser-transport-create-data `Object | String | Function`

The data that will be sent to the server. For more information, refer to the documentation on `jQuery.ajax`.

### file-browser-transport-create-data-type `String`

The type of data that is expected by the server to return. For more information, refer to the documentation on `jQuery.ajax`.

The commonly used values are:

* `json`
* `jsonp`

### file-browser-transport-create-type `String`

The type of request that will be made (`POST`, `GET`, `PUT`, or `DELETE`). Defaults to `POST`. For more information, refer to the documentation on `jQuery.ajax`.

### file-browser-transport-create-url `String | Function`

The remote URL that will be called when a new record is created.

### file-browser-schema-model-id `String`

The name of the field which acts as an identifier.

### file-browser-schema-model-fields-name `String`

The field which contains the name of the file or directory.

### file-browser-schema-model-fields-name-field `String`

The name of the field.

### file-browser-schema-model-fields-name-parse `Function`

Specifies the function which will parse the field value. If `file-browser-schema-model-fields-name-parse` is not set, the default parsers will be used.

### file-browser-schema-model-fields-type `String`

The field which contains the type of the entry.

The supported values are:

* `f`&mdash;Specifies a file.
* `d`&mdash;Specifies a directory.

### file-browser-schema-model-fields-type-parse `Function`

Specifies the function which will parse the field value. If `file-browser-schema-model-fields-type-parse` is not set, the default parsers will be used.

### file-browser-schema-model-fields-type-field `String`

The name of the field.

### file-browser-schema-model-fields-size `String`

The field which contains the size of file.

### file-browser-schema-model-fields-size-field `String`

The name of the field.

### file-browser-schema-model-fields-size-parse `Function`

Specifies the function which will parse the field value. If `file-browser-schema-model-fields-size-parse` is not set, the default parsers will be used.

### file-browser-messages-upload-file `String`

Defines the text for the **Upload** button.

### file-browser-messages-order-by `String`

Defines the text for **Order by label**.

### file-browser-messages-order-by-name `String`

Defines the text for **Name item of order by drop-down list**.

### file-browser-messages-order-by-size `String`

Defines the text for **Size item of order by drop-down list**.

### file-browser-messages-directory-not-found `String`

Defines the text for the error that occurs when the dialog for not finding a directory is displayed.

### file-browser-messages-empty-folder `String`

Defines the text that is displayed when a folder does not contain items.

### file-browser-messages-delete-file `String`

Defines the text for the that is displayed when a file or directory is deleted.

### file-browser-messages-invalid-file-type `String`

Defines the text for the dialog that is displayed when an invalid file is set for upload.

### file-browser-messages-overwrite-file `String`

Defines the text for the dialog that is displayed when an already existing file is set for upload.

### file-browser-messages-search `String`

Defines the text for the search-box placeholder.

## Suggested Links

* [`FileBrowser` in Kendo UI Editor for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/editor/configuration/filebrowser)
