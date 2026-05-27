---
title: Display the Kendo UI for Vue Native Editor toolbar at the bottom
description: Learn how to display the Kendo UI for Vue Native Editor toolbar at the bottom
type: how-to
page_title: Display the toolbar at the bottom - Kendo UI for Vue Native Editor
slug: editor-display-toolbar-at-bottom
tags: editor, kendovue, toolbar, bottom
res_type: kb
category: knowledge-base
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>6.1.0</td>
		</tr>
		<tr>
			<td>Product</td>
	    	<td>Progress® Kendo UI for Vue Native</td>
		</tr>
	</tbody>
</table>

## Description

How can I display the Editor's toolbar at the bottom?

## Solution

To achieve this, add the following CSS that will change the order of the toolbar and the content of the Editor:

```jsx
<style>
.k-editor .k-toolbar {
 order:2;
}
</style>
```
This example demonstrates the approach above:

{% meta height:460 %}
{% embed_file editor-display-toolbar-at-bottom/main.vue preview %}
{% embed_file editor-display-toolbar-at-bottom/main.js %}
{% embed_file editor-display-toolbar-at-bottom/content-overview.js %}
{% endmeta %}
