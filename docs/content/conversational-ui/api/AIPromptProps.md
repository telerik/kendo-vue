---
title: AIPromptProps
description: "Learn how to build custom functionality when working with the Vue ConversationalUi by Kendo UI with the help of the AIPromptProps."
api_reference: true
type: inner_api
slug: api_conversational-ui_aipromptprops
---

# AIPromptProps
The props of the AIPrompt component.


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


#### activeView


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Name of the active view.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dir?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The direction of the Prompt.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### loading?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If true, the prompt is in a loading state.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onActiveviewchange?


</td>
<td type class="table-cell-type">


<code>


(name: string) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The onActiveViewChange event handler of the Kendo UI for Vue AIPrompt component.
Fires when active view is changed. Exposes the name of the new active view as event data.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onCancel?


</td>
<td type class="table-cell-type">


<code>


() => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called when the prompt is cancelled.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onCommandexecute?


</td>
<td type class="table-cell-type">


<code>


(command: [AIPromptCommandInterface]({% slug api_conversational-ui_aipromptcommandinterface %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The onCommandExecute event handler of the Kendo UI for Vue AIPrompt component.
Fires each time the user clicks a command in the Command view. Exposes the selected command as event data.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onPromptrequest?


</td>
<td type class="table-cell-type">


<code>


(prompt?: string, outputItem?: [AIPromptOutputInterface]({% slug api_conversational-ui_aipromptoutputinterface %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The onPromptRequest event handler of the Kendo UI for Vue AIPrompt component.
Fires when user clicks the `Generate` button in the Prompt view.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### outputs?


</td>
<td type class="table-cell-type">


<code>


[AIPromptOutputInterface]({% slug api_conversational-ui_aipromptoutputinterface %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The collection of generated prompt outputs that will be rendered in the Output view.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### promptPlaceholder?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The placeholder text for the Prompt view textarea.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### streaming?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If true, the prompt is in a streaming state.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### suggestionsView?


</td>
<td type class="table-cell-type">


<code>


[SuggestionsView]({% slug api_conversational-ui_suggestionsview %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Optionally specifies the rendering for the suggestions displayed in the AI Prompt component.
'suggestionsView' can be either 'classic' or 'modern'.
- 'classic': Uses a rectangular styling for suggestions.
- 'modern': Uses a chip-like styling for suggestions.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### toolbarItems?


</td>
<td type class="table-cell-type">


<code>


[AIPromptToolbarItemInterface]({% slug api_conversational-ui_aiprompttoolbariteminterface %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Collection with items that will override the default Toolbar items.


</td>
</tr>
</tbody>
</table>



