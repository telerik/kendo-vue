---
title: Credentials and Additional Data
description: "Instruct the Kendo UI for Vue Upload whether to send or not credentials for cross-site requests in Vue projects."
slug: credentials_upload
position: 3
---

# Credentials and Additional Data

During file upload or removal, you can control whether or not to send cookies and headers for cross-site requests, or additional data.

## Attaching Credentials to Requests

You can control whether or not the request will use credentials by setting the [`withCredentials`]({% slug api_upload_uploadprops %}#toc-withcredentials) option. By default, `withCredentials` is set to `true`.

{% meta height:280 %}
{% embed_file credentials/main.vue preview %}
{% embed_file credentials/main.js %}
{% endmeta %}

## Attaching Additional Data to Requests

You can also send additional data in the form of key/value pairs and modify the request headers.

Depending on when the data will be sent:
* In the `onBeforeUpload` event handler, update the `additionalData` or `headers` property of the event
* In the `onBeforeRemove` event handler, update the `additionalData` or `headers` property of the event

{% meta height:280 %}
{% embed_file additional-data/main.vue preview %}
{% embed_file additional-data/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Upload]({% slug api_upload_uploadprops %})
