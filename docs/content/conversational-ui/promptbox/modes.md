---
title: Modes
description: 'Learn how to configure different modes for the Kendo UI for Vue PromptBox component.'
slug: modes_promptbox
position: 20
components: ['promptbox']
---

# PromptBox Modes

The PromptBox supports three modes that determine the number of lines displayed in the input area&mdash;single-line, multi-line, and auto.

These PromptBox modes control the layout and behavior of the input area to suit various use cases and user preferences. You can set the desired mode using the [`mode`](slug:api_conversational-ui_promptboxprops#mode) property of the PromptBox component.

{% meta height:300 %}
{% embed_file promptbox/modes/overview/main.vue preview %}
{% embed_file promptbox/modes/overview/main.js %}
{% embed_file promptbox/modes/overview/styles.css %}
{% endmeta %}

## Auto Mode

To enable auto mode, set the [`mode`](slug:api_conversational-ui_promptboxprops#mode) property to `"auto"`. This automatically transforms the PromptBox from single-line to multi-line mode based on the content. Set a maximum height for the input area using the [`maxTextAreaHeight`](slug:api_conversational-ui_promptboxprops#maxTextAreaHeight) property to prevent it from growing indefinitely.

The following example demonstrates the auto mode in action.

{% meta height:400 %}
{% embed_file promptbox/modes/auto/main.vue preview %}
{% embed_file promptbox/modes/auto/main.js %}
{% endmeta %}

## Single-Line Mode

To enable single-line mode, set the [`mode`](slug:api_conversational-ui_promptboxprops#mode) property to `"single"`. When the text exceeds the width of the input area, horizontal scrolling is enabled to allow users to view and edit their entire prompt.

The following example demonstrates the single-line mode in action.

{% meta height:200 %}
{% embed_file promptbox/modes/single-line/main.vue preview %}
{% embed_file promptbox/modes/single-line/main.js %}
{% endmeta %}

## Multi-Line Mode

To enable multi-line mode, set the [`mode`](slug:api_conversational-ui_promptboxprops#mode) property to `"multi"`. Set the minimum number of visible text lines using the [`rows`](slug:api_conversational-ui_promptboxprops#rows) property or use [`maxTextAreaHeight`](slug:api_conversational-ui_promptboxprops#maxTextAreaHeight) to limit the maximum height of the input area.

The following example demonstrates the multi-line mode in action.

{% meta height:450 %}
{% embed_file promptbox/modes/multi-line/main.vue preview %}
{% embed_file promptbox/modes/multi-line/main.js %}
{% endmeta %}

## Suggested Links

-   [PromptBox Appearance](slug:appearance_promptbox)
-   [API Reference of the PromptBox](slug:api_conversational-ui_promptboxprops)
