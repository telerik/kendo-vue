---
title: File Restrictions
description: "Restrict the content of a Kendo UI for Vue Upload for based on predefined rules for their size and extension."
slug: filerestrictions_upload
position: 5
---

# File Restrictions

You can restrict the selected files for upload based on predefined rules for their size and/or extension.

## Types of File Restrictions

The Upload supports three types of file restrictions:

* [File extension](#toc-file-extension)
* [Maximum file size](#toc-maximum-file-size)
* [Minimum file size](#toc-minimum-file-size)

### File Extension

You can define the file types that are eligible for upload by using the [`allowedExtensions`]({% slug api_upload_uploadfilerestrictions %}#toc-allowedextensions) property. The files with extensions which are not included in the list will not be uploaded and the Upload will display them as invalid. The `allowedExtensions` option recognizes entries of both `.type` (for example, `.docx`, `.png`, `.svg`, `.xls`, and others) and `type` (for example, `docx`, `png`, `svg`, `xls`, and others) values.

{% meta height:280 %}
{% embed_file restrictions/extension/main.vue preview %}
{% embed_file restrictions/extension/main.js %}
{% endmeta %}

### Maximum File Size

You can restrict the maximum allowed file size (in bytes) by using the [`maxFileSize`]({% slug api_upload_uploadfilerestrictions %}#toc-maxfilesize) property. If the selected file exceeds the maximum size, an error message will be displayed.

{% meta height:280 %}
{% embed_file restrictions/max-file-size/main.vue preview %}
{% embed_file restrictions/max-file-size/main.js %}
{% endmeta %}

### Minimum File Size

You can restrict the minimum allowed file size (in bytes) by using the [`minFileSize`]({% slug api_upload_uploadfilerestrictions %}#toc-minfilesize) property. If the selected file is less than the minimum size, an error message will be displayed.

{% meta height:280 %}
{% embed_file restrictions/min-file-size/main.vue preview %}
{% embed_file restrictions/min-file-size/main.js %}
{% endmeta %}

### Custom Restrictions

You can restrict the file with custom logic by using the [`validateFile`]({% slug api_upload_uploadprops %}#toc-validatefile) property. For example we can check if the file name contains letter `a` as in the code below.

{% meta height:280 %}
{% embed_file restrictions/custom/main.vue preview %}
{% embed_file restrictions/custom/main.js %}
{% endmeta %}

## Browser Limitations

Internet Explorer versions up to and including version 9 provide no information on the file size. As a result, the Upload restriction for the `minFileSize` and `maxFileSize` options does not work.

## Suggested Links

* [API Reference of the Upload]({% slug api_upload_uploadprops %})
