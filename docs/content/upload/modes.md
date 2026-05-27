---
title: Modes of Operation
description: "Use controlled and uncontrolled modes of operation for managing which files for upload will be rendered when working with the Kendo UI for Vue Native Upload."
slug: controleduncontroled_upload
position: 2
---

# Modes of Operation

The Kendo UI for Vue Native Upload enables you to manage the files for upload that will be rendered by setting the Upload into its [controlled](#toc-controlled-mode) or [uncontrolled](#toc-uncontrolled-mode) mode.

* The controlled mode gives you manual control over all the actions through the [`files`]({% slug api_upload_uploadprops %}#toc-files) property along with the [`onAdd`]({% slug api_upload_uploadprops %}#toc-onadd) and [`onRemove`]({% slug api_upload_uploadprops %}#toc-onremove) events.

* In uncontrolled mode the [`defaultFiles`]({% slug api_upload_uploadprops %}#toc-defaultfiles) are passed and the component handles the rest.

## Controlled Mode

To enable the controlled mode of the files for upload:

1. Set the [`files`]({% slug api_upload_uploadprops %}#toc-files) property.
1. Subscribe to the following events for updates:
  *  [`onAdd`]({% slug api_upload_uploadprops %}#toc-onadd)
  *  [`onRemove`]({% slug api_upload_uploadprops %}#toc-onremove)
  *  [`onProgress`]({% slug api_upload_uploadprops %}#toc-onprogress)
  *  [`onStatusChange`]({% slug api_upload_uploadprops %}#toc-onstatuschange)

{% meta height:280 %}
{% embed_file modes/controlled/main.vue preview %}
{% embed_file modes/controlled/main.js %}
{% endmeta %}

## Uncontrolled Mode

To enable uncontrolled mode of the files for upload, set the initial list of files by using the [`defaultFiles`]({% slug api_upload_uploadprops %}#toc-defaultfiles) property.

{% meta height:280 %}
{% embed_file modes/uncontrolled/main.vue preview %}
{% embed_file modes/uncontrolled/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Upload]({% slug api_upload_uploadprops %})
