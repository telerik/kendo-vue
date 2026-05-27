---
title: PromptBoxUploadButtonProps
description: "Learn how to build custom functionality when working with the Vue ConversationalUi by Kendo UI with the help of the PromptBoxUploadButtonProps."
api_reference: true
type: inner_api
slug: api_conversational-ui_promptboxuploadbuttonprops
---

# PromptBoxUploadButtonProps
Represents the props of the PromptBoxUploadButton component.


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


Restrictions on the files that can be uploaded.


</td>
</tr>
</tbody>
</table>



