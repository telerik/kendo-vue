---
title: UploadProps
description: "Learn how to build custom functionality when working with the Vue Upload by Kendo UI with the help of the UploadProps."
api_reference: true
type: inner_api
slug: api_upload_uploadprops
---

# UploadProps
Represents the props of the [Kendo Ui for Vue Upload component]({% slug overview_upload %}).


<table class="api-table api-table-properties">
<thead>
<tr>
<th class="th-name">Name</th>
<th class="th-type">Type</th>
<th class="th-default">Default</th>
<th class="th-desc">Description</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td class="table-cell-name">


#### accept?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `accept` attribute of the `input` element of the Upload.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### actionsLayout?


</td>
<td type class="table-cell-type">


<code>


[UploadActionsLayout]({% slug api_upload_uploadactionslayout %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the possible layouts of the action buttons
 ([see example]({% slug actionbuttons_upload %})). Defaults to `end`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### ariaDescribedBy?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Identifies the element(s) which will describe the component, similar
 to HTML aria-describedby attribute For example these elements
could contain error or hint message.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### ariaLabelledBy?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Identifies the element(s) which will label the component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### autoUpload?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


By default, the selected files are immediately uploaded.
To change this behavior, set `autoUpload` to `false`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### batch?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


When enabled, all files in the selection are uploaded in one request.
Any files that are selected one after the other are uploaded in separate requests.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### className?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets a class of the Upload DOM element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultFiles?


</td>
<td type class="table-cell-type">


<code>


[UploadFileInfo]({% slug api_upload_uploadfileinfo %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The initial list of files which are displayed when the Upload is in
uncontrolled mode ([see example]({% slug controleduncontroled_upload %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### disabled?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Disables the Upload ([see example]({% slug disabledstate_upload %})). Defaults to `false`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### files?


</td>
<td type class="table-cell-type">


<code>


[UploadFileInfo]({% slug api_upload_uploadfileinfo %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The list of files which are displayed when the Upload is in controlled mode
([see example]({% slug controleduncontroled_upload %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### id?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the id of the component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### list?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The component that will be rendered as a list item inside the Upload.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### multiple?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the selection of multiple files
([see example]({% slug fileprocessing_upload %}#toc-upload-of-single-or-multiple-files)).
If set to `false`, only one file can be selected at a time.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onAdd?


</td>
<td type class="table-cell-type">


<code>


(event: [UploadOnAddEvent]({% slug api_upload_uploadonaddevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when new files are selected for upload.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onBeforeremove?


</td>
<td type class="table-cell-type">


<code>


(event: [UploadOnBeforeRemoveEvent]({% slug api_upload_uploadonbeforeremoveevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires before a request for a file removal is made. Can be used to add extra data to the request.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onBeforeupload?


</td>
<td type class="table-cell-type">


<code>


(event: [UploadOnBeforeUploadEvent]({% slug api_upload_uploadonbeforeuploadevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires before a request for a file upload is made. Can be used to add extra data to the request.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onCancel?


</td>
<td type class="table-cell-type">


<code>


(event: [UploadOnCancelEvent]({% slug api_upload_uploadoncancelevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when user clicks on the **Remove** button while the file upload is in progress.
Can be used when the `saveUrl` option is set to a function that cancels custom requests.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onProgress?


</td>
<td type class="table-cell-type">


<code>


(event: [UploadOnProgressEvent]({% slug api_upload_uploadonprogressevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the progress of the file upload is changed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRemove?


</td>
<td type class="table-cell-type">


<code>


(event: [UploadOnRemoveEvent]({% slug api_upload_uploadonremoveevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when files are removed. Optionally, if a request is made, can contain a server response.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onStatuschange?


</td>
<td type class="table-cell-type">


<code>


(event: [UploadOnStatusChangeEvent]({% slug api_upload_uploadonstatuschangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the status of the files is changed. Optionally, if a request is made, can contain a server response.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### removeField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) key
which contains the list of file names that are submitted to `removeUrl`.
Defaults to `fileNames`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### removeHeaders?


</td>
<td type class="table-cell-type">


<code>


[UploadHttpHeaders]({% slug api_upload_uploadhttpheaders %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the `HttpHeaders` that are attached to each `remove` request.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### removeMethod?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the [request method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) of the `remove` request.
Defaults to `POST`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### removeUrl?


</td>
<td type class="table-cell-type">


<code>


string | (files: [UploadFileInfo]({% slug api_upload_uploadfileinfo %})[], options: { formData: FormData; requestOptions: any; }) => Promise&lt;{ uid: string; }&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the URL of the endpoint for the `remove` request.
The [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) request
key is named after the `removeField` property.
It contains the list of file names which will be removed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### responseType?


</td>
<td type class="table-cell-type">


<code>


"text" | "arraybuffer" | "blob" | "json"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the expected [response type](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType)
of the server.
Used to parse the response appropriately.
Defaults to `json`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### restrictions?


</td>
<td type class="table-cell-type">


<code>


[UploadFileRestrictions]({% slug api_upload_uploadfilerestrictions %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the restrictions for the selected files ([see example]({% slug filerestrictions_upload %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### saveField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) key which
contains the files submitted to `saveUrl`. Defaults to `files`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### saveHeaders?


</td>
<td type class="table-cell-type">


<code>


[UploadHttpHeaders]({% slug api_upload_uploadhttpheaders %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the `HttpHeaders` that are attached to each upload request.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### saveMethod?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the [`request`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) method of the upload request.
Defaults to `POST`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### saveUrl?


</td>
<td type class="table-cell-type">


<code>


string | (files: [UploadFileInfo]({% slug api_upload_uploadfileinfo %})[], options: { formData: FormData; requestOptions: any; }, onProgress: (uid: string, event: ProgressEvent&lt;EventTarget&gt;) => void) => Promise&lt;{ uid: string; }&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the URL of the endpoint for the upload request.
The requested [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) key is named after
the `saveField` property and contains the list of files that will be uploaded.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### showActionButtons?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


When the `autoUpload` option is set to `false`,
`showActionButtons` toggles the visibility of the action buttons which are rendered.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### showFileList?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Toggles the visibility of the file list.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### tabIndex?


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)
of the Upload.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### validateFile?


</td>
<td type class="table-cell-type">


<code>


(file: [UploadFileInfo]({% slug api_upload_uploadfileinfo %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the custom restrictions for the selected files ([see example]({% slug filerestrictions_upload %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### withCredentials?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures whether credentials (cookies, headers) will be sent for cross-site requests.
Defaults to `true`. Setting `withCredentials` has no effect on same-site requests.
To add credentials to the request, use the `saveHeaders` or `removeHeaders` property.


</td>
</tr>
</tbody>
</table>



