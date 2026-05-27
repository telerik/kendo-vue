---
title: AIPromptOutputViewProps
description: "Learn how to build custom functionality when working with the Vue ConversationalUi by Kendo UI with the help of the AIPromptOutputViewProps."
api_reference: true
type: inner_api
slug: api_conversational-ui_aipromptoutputviewprops
---

# AIPromptOutputViewProps
The props of the AIPromptOutputView component.


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


#### onCopy?


</td>
<td type class="table-cell-type">


<code>


(content: string) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the user clicks Copy button in the card.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRating?


</td>
<td type class="table-cell-type">


<code>


(output: [AIPromptOutputInterface]({% slug api_conversational-ui_aipromptoutputinterface %}), ratingType: [AIPromptOutputRating]({% slug api_conversational-ui_aipromptoutputrating %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the user clicks a rating button in the card.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRetry?


</td>
<td type class="table-cell-type">


<code>


(output: [AIPromptOutputInterface]({% slug api_conversational-ui_aipromptoutputinterface %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the user clicks Retry button in the card.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### outputCard?


</td>
<td type class="table-cell-type">


<code>


[AIPromptCardInterface]({% slug api_conversational-ui_aipromptcardinterface %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents a template that allows you to define custom Card fields for:
header
body
actions
The custom fields will override the default one.


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


#### showOutputRating?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


false


</code>


</td>
<td class="table-cell-comment">


Specifies if the rating buttons in each card will be rendered.
By default, rating buttons are not rendered.





</td>
</tr>
</tbody>
</table>



