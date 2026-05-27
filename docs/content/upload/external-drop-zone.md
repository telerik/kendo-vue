---
title: External Drop Zone
description: "Learn about the Kendo UI for Vue component which is delivered by the Upload package."
slug: external_drop_zone
position: 8
---

# External Drop Zone

The ExternalDropZone helps users to drag and drop files from their file systems to a dedicated user interface. The files are then sent to the specified server handlers, which are configured to receive them.

The ExternalDropZone component is a drag and drop tool. To link the external DropZone to the Upload, provide a reference to the Upload using the [`uploadRef`]({% slug api_upload_externaldropzoneprops %}#toc-uploadRef) property.

{% meta height:500 %}
{% embed_file external-drop-zone/main.vue preview %}
{% embed_file external-drop-zone/main.js %}
{% endmeta %}

# Customization

The ExternalDropZone can be customized using the [`customHint`]({% slug api_upload_externaldropzoneprops %}#toc-customHint) and [`customNote`]({% slug api_upload_externaldropzoneprops %}#toc-customNote) properties.

{% meta height:400 %}
{% embed_file custom-external-drop-zone/main.vue preview %}
{% embed_file custom-external-drop-zone/CustomHint.vue %}
{% embed_file custom-external-drop-zone/CustomNote.vue %}
{% embed_file custom-external-drop-zone/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Upload]({% slug api_upload_uploadprops %})
* [API Reference of the ExternalDropZoneProps]({% slug api_upload_externaldropzoneprops %})
