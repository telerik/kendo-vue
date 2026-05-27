---
title: Disable the left part of a SplitButton
description: An example on how to disable the left part of a SplitButton
type: how-to
page_title: Learn how to disable the left part of a SplitButton - Kendo UI for Vue SplitButton
slug: splitbutton-disable-left-part
tags: splitbutton, disable, button, left
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>4.3.1</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® Kendo UI for Vue Native</td>
	    </tr>
    </tbody>
</table>

## Description

I want to disable only the left part of the SplitButton.

## Solution

You can achieve this by setting [pointer-events](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events) to `none:

```css
.k-button-group > .k-button:first-child:not(:only-child) {
    pointer-events: none;
 }
```

### Runnable example

To test the following example, click on the left part of the SplitButton

{% meta height:350 %}
{% embed_file splitbutton-disable-left-part/main.vue preview %}
{% embed_file splitbutton-disable-left-part/main.js %}
{% endmeta %}