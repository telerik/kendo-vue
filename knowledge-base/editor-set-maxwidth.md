---
title: Setting maxWidth for the Editor
description: An example on how to set maxWidth for the Editor
type: how-to
page_title: Set maxWidth for the Editor - Kendo UI for Vue Editor
slug: editor-set-maxwidth
tags: editor, maxwidth, margins, kendovue
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>5.3.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® Kendo UI for Vue Native</td>
	    </tr>
    </tbody>
</table>

## Description

I want to set margins/maxWidth inside of the Kendo UI for Vue Native Editor.

## Solution

This can be achieved by adding a `style` element to the iframe content element.

{% meta height: 420 %}
{% embed_file editor-set-maxwidth/main.vue preview %}
{% embed_file editor-set-maxwidth/main.js %}
{% embed_file editor-set-maxwidth/content.js %}
{% endmeta %}

