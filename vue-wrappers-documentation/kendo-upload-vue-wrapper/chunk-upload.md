---
title: Chunk Upload
page_title: Chunk Upload - Upload - Kendo UI for Vue
description: "Upload files in chunks when working with the Kendo UI Upload wrapper in Vue projects."
slug: chunk_upload_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/upload/file-processing/"
position: 4
---

<div><WrapperBanner link="/kendo-vue-ui/components/upload/file-processing"></WrapperBanner></div>    

# Chunk Upload

The Upload enables you to upload chunks of files from local file systems to dedicated server handlers which are configured to receive them.

To enable chunk upload, set the `async-chunk-side` property to `true`. Each request sends a separate file blob and additional string metadata to the server. This metadata is in a `stringified` JSON format and contains the `chunkIndex`, `contentType`, `totalFileSize`, `totalChunks`, and `uploadUid` properties. These properties enable the validation and combination of the files on the server. The response also returns a JSON object with the `uploaded` and `fileUid` properties which notify the client what the next chunk is.

{% meta height:250 %}
{% embed_file chunk-upload/main.vue preview %}
{% embed_file chunk-upload/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Upload for jQuery](https://docs.telerik.com/kendo-ui/controls/editors/upload/overview)
* [API Reference of the Upload Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/upload)
