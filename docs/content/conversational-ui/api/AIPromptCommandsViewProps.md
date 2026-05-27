---
title: AIPromptCommandsViewProps
description: "Learn how to build custom functionality when working with the Vue ConversationalUi by Kendo UI with the help of the AIPromptCommandsViewProps."
api_reference: true
type: inner_api
slug: api_conversational-ui_aipromptcommandsviewprops
---

# AIPromptCommandsViewProps
The props of the AIPromptCommandsView component.


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


#### commands?


</td>
<td type class="table-cell-type">


<code>


[AIPromptCommandInterface]({% slug api_conversational-ui_aipromptcommandinterface %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The collection of commands that will be rendered in the Command view.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onCommandexecute?


</td>
<td type class="table-cell-type">


<code>


(command: CommandItemInterface) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the user clicks over a Command view command. Exposes the selected command as event data.


</td>
</tr>
</tbody>
</table>



