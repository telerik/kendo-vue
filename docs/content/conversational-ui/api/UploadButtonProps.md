---
title: UploadButtonProps
description: "Learn how to build custom functionality when working with the Vue ConversationalUi by Kendo UI with the help of the UploadButtonProps."
api_reference: true
type: inner_api
slug: api_conversational-ui_uploadbuttonprops
---

# UploadButtonProps
Represents the configuration options for the Upload button.
Combines button styling props, upload behavior props, and event callbacks.


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


The file types that can be selected.


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


Specifies if the Button is disabled ([see example]({% slug disabled_button %})). Defaults to `false`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### fillMode?


</td>
<td type class="table-cell-type">


<code>


"flat" | "link" | "solid" | "outline"


</code>


</td>
<td class="table-cell-default">


<code>


`undefined`


</code>


</td>
<td class="table-cell-comment">


Configures the `fillMode` of the Button.

The available options are:
- solid
- outline
- flat
- link





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


Whether multiple files can be selected.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRemoveAttachment?


</td>
<td type class="table-cell-type">


<code>


(fileName: string) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user removes an attachment by clicking the remove button.
In controlled mode (when `attachments` prop is provided), use this to update your state.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSelectAttachments?


</td>
<td type class="table-cell-type">


<code>


(event: [PromptBoxSelectAttachmentsEvent]({% slug api_conversational-ui_promptboxselectattachmentsevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user selects files via the upload button.
Provides both the newly selected files and the complete file state.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### restrictions?


</td>
<td type class="table-cell-type">


<code>


UploadFileRestrictions


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Upload file restrictions.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rounded?


</td>
<td type class="table-cell-type">


<code>


"small" | "medium" | "large" | "full" | "none"


</code>


</td>
<td class="table-cell-default">


<code>


`undefined`


</code>


</td>
<td class="table-cell-comment">


Configures the `roundness` of the Button.

The available options are:
- none
- small
- medium
- large
- circle
- full





</td>
</tr>
<tr>
<td class="table-cell-name">


#### size?


</td>
<td type class="table-cell-type">


<code>


"small" | "medium" | "xs" | "large"


</code>


</td>
<td class="table-cell-default">


<code>


`undefined`


</code>


</td>
<td class="table-cell-comment">


Configures the `size` of the Button.

The available options are:
- xs
- small
- medium
- large





</td>
</tr>
<tr>
<td class="table-cell-name">


#### svgIcon?


</td>
<td type class="table-cell-type">


<code>


SVGIcon


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines an SVGIcon to be rendered within the button.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### themeColor?


</td>
<td type class="table-cell-type">


<code>


"base" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "error" | "inverse"


</code>


</td>
<td class="table-cell-default">


<code>


`undefined`


</code>


</td>
<td class="table-cell-comment">


Configures the `themeColor` of the Button.

The available options are:
- base
- primary
- secondary
- tertiary
- info
- success
- warning
- error
- inverse





</td>
</tr>
</tbody>
</table>



