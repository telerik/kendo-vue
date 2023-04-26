---
title: Add confirmation Dialog when removing a file inside the Upload's list.
description: A project that shows how you can add a confirmation Dialog when removing an uploaded file.
type: how-to
page_title: Learn how to add a confirmation Dialog when removing an uploaded file in the Upload component.
slug: upload-add-confirmation-dialog-on-remove
tags: upload, list, remove file, confirmation, dialog, custom, template, kendovue, native
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>3.10.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® Kendo UI for Vue Native Upload</td>
	    </tr>
    </tbody>
</table>


## Description

This Knowledge base(KB) article demonstrates how we can add a confirmation Dialog when removing a file inside the list of the Upload component.


**KB sections**

* [Solution description](#toc-solution-description)
* [Runnable example](#toc-runnable-example)

## Solution description

To achieve the demonstrated behavior, we need to use the [list]({% slug api_upload_uploadprops %}#toc-list) prop of the Upload component and pass a custom template to it. More details about the usage of the list property can be found on our [Upload customization demo]({% slug rendering_upload %}).


### Runnable example

To test the following example, select files for Upload and click on one of the "X" buttons inside the Upload's list.

{% meta id:index height:480 %}
{% embed_file upload-add-confirmation-dialog-on-remove/main.vue preview %}
{% embed_file upload-add-confirmation-dialog-on-remove/CustomList.vue %}
{% embed_file upload-add-confirmation-dialog-on-remove/main.js %}
{% endmeta %}
