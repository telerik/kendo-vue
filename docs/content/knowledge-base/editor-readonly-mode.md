---
title: Make Editor Read-Only
description: Learn how to make the Kendo UI for Vue Editor read-only by disabling the toolbar and content area using CSS.
type: how-to
page_title: How to Make Editor Read-Only - Kendo UI for Vue Native Editor
slug: editor-readonly-mode
tags: editor, read-only, css, disabled, toolbar, contenteditable
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>7.0.2</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® Kendo UI for Vue Native</td>
	    </tr>
    </tbody>
</table>

## Description

How can I make the Editor component read-only so users can view the content but cannot edit it?

While the Editor component doesn't have a built-in `readonly` property, you can achieve a read-only state by using CSS to disable user interactions with both the toolbar and the editable content area.

## Solution

You can make the Editor read-only by applying CSS that prevents pointer events on the entire Editor component:

```css
.k-editor {
  pointer-events: none;
  opacity: 0.6;
}
```

This CSS approach disables all interactions with the Editor (both toolbar and content area) and reduces opacity to visually indicate the read-only state.

The example below demonstrates an Editor in read-only mode with these CSS rules applied:

{% meta height: 500 %}
{% embed_file editor-readonly-mode/main.vue preview %}
{% embed_file editor-readonly-mode/main.js %}
{% embed_file editor-readonly-mode/content.js %}
{% endmeta %}

## See Also

* [Editor Overview](slug://overview_editor)
* [Editor API](slug://api_editor)
