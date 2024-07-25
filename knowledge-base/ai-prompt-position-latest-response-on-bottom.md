---
title: How to position the latest response on the the bottom in the AIPrompt
description: An example that showcases how to position the latest response on the bottom in the AIPrompt
type: how-to
page_title: Learn how to position the latest response on the bottom in the AIPrompt - Kendo UI for Vue AIPrompt
slug: ai-prompt-position-latest-response-on-bottom
tags: ai, aiprompt, position, response, bottom, chatgpt
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>5.1.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® Kendo UI for Vue Native</td>
	    </tr>
    </tbody>
</table>

## Description

How can I position the latest response on the bottom of the UI similar to Chat GPT?

## Solution 

You can achieve this by using the [push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) method to append the new entries to the end of the [outputs](slug:api_conversational-ui_aipromptprops#toc_outputs) array.

### Runnable example

To test the following example, type a couple of inputs and notice that the latest response will be shown on the bottom similar to Chat GPT:

{% meta id:index height:480 %}
{% embed_file ai-prompt-position-latest-response-on-bottom/main.vue preview %}
{% embed_file ai-prompt-position-latest-response-on-bottom/main.js %}
{% endmeta %}