---
title: Hide Cancel and Upload Buttons in Upload Component
description: Learn how to hide the Clear Selected and Upload Selected buttons when using autoUpload false and control file uploads via form submission.
type: how-to
page_title: How to Hide Upload Action Buttons - Kendo UI for Vue Native Upload
slug: upload-hide-cancel-upload-buttons
tags: upload, buttons, css, auto-upload, form submission, custom styling
res_type: kb
category: knowledge-base
ticketid: 1676097
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

How can I hide the Cancel and Upload buttons when using the Upload component with `autoUpload` set to `false`?

When the Upload component has automatic upload disabled, the Clear Selected and Upload Selected buttons appear by default. In scenarios where you want to control all uploads through a separate form submission (for example, a Submit button that handles both form data and file uploads), these buttons may not be needed.

## Solution

You can hide the Clear Selected and Upload Selected buttons using CSS to target their specific classes:

```css
.k-clear-selected,
.k-upload-selected {
  display: none;
}
```

The example below demonstrates a complete form where file uploads are controlled via the main Submit button, and the Upload component's action buttons are hidden:

{% meta height: 420 %}
{% embed_file upload-hide-cancel-upload-buttons/main.vue preview %}
{% embed_file upload-hide-cancel-upload-buttons/main.js %}
{% endmeta %}

## See Also

* [Upload Overview](slug://overview_upload)
* [Upload API](slug://api_upload)
