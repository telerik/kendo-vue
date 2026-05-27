---
title: Events
description: "Learn how to use the Kendo UI for Vue Native Editor events"
slug: editor_events
position: 79
---

# Events

This article provides details about the event available in the Native Editor API.

## List of available Editor events
* [EditorBlurEvent]({% slug api_editor_editorprops %}#toc-onblur) - Triggered when the Editor is blurred.
* [EditorChangeEvent]({% slug api_editor_editorprops %}#toc-onchange) - Triggered when the text inside the Editor is changed.
* [EditorExecuteEvent]({% slug api_editor_editorprops %}#toc-onexecute) - Triggered when an operation is executed in the Editor - e.g. text selection.
* [EditorFocusEvent]({% slug api_editor_editorprops %}#toc-onfocus) - Triggered when the Editor is focused.
* [EditorLoadedEvent]({% slug api_editor_editorprops %}#toc-onloaded) - Triggered when the component is initially loaded.
* [onPasteHtml]({% slug api_editor_editorprops %}#toc-onpastehtml) - Triggered when data is pasted in the Editor.

## Editor event demo

The below example demonstrates the usage of the different Editor events.

{% meta height:800 %}
{% embed_file events/main.vue preview %}
{% embed_file events/main.js %}
{% embed_file shared/content.js %}
{% embed_file events/Logger.vue %}
{% endmeta %}


## Suggested Links

* [API Reference of the Editor]({% slug api_editor %})
