---
title: AIPromptOutputInterface
description: "Learn how to build custom functionality when working with the Vue ConversationalUi by Kendo UI with the help of the AIPromptOutputInterface."
api_reference: true
type: inner_api
slug: api_conversational-ui_aipromptoutputinterface
---

# AIPromptOutputInterface



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


#### class?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The class of the prompt that is rendered on the output card.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### command?


</td>
<td type class="table-cell-type">


<code>


[AIPromptCommandInterface]({% slug api_conversational-ui_aipromptcommandinterface %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Optionally specifies a command, if the prompt generation was triggered via a command.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### id


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The unique identifier of the command.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isRetry?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the prompt generation was initiated via the retry button.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### prompt?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The prompt that initiated the output generation.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### ratingType?


</td>
<td type class="table-cell-type">


<code>


[AIPromptOutputRating]({% slug api_conversational-ui_aipromptoutputrating %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The prompt output rating.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### responseContent


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The text content of the prompt output.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### subTitle?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An optional custom sub title for the prompt output.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### title?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An optional custom title for the prompt output.


</td>
</tr>
</tbody>
</table>



