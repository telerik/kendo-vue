---
title: Custom Rendering
description: "Enable the rendering customization of the Kendo UI for Vue Native Upload in Vue projects."
slug: rendering_upload
position: 8
---

# Custom Rendering

The Kendo UI for Vue Native Upload enables you to customize the user interface of its file-list items.

To customize the appearance of the files selected for upload, pass a custom slot template to the `list` property of the Upload component. The [`UploadListItemProps`]({% slug api_upload_uploadlistitemprops %}) properties will be available inside the slot template.

## Basic Usage

The following example is a demonstration of a basic Upload list customization.

{% meta height:280 %}
{% embed_file custom/main.vue preview %}
{% embed_file custom/CustomList.vue %}
{% embed_file custom/main.js %}
{% endmeta %}

## Using the UploadListSingleItem and UploadListMultiItem Components

The following example demonstrates how we can use the `UploadListSingleItem` and `UploadListMultiItem` components available in the **@progress/kendo-vue-upload** package giving you the option to add additional elements in the list and keeping the original list rendering.

{% meta height:280 %}
{% embed_file custom-complex/main.vue preview %}
{% embed_file custom-complex/CustomList.vue %}
{% embed_file custom-complex/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Upload]({% slug api_upload %})
