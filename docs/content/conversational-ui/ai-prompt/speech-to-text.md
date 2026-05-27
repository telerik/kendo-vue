---
title: Speech-to-Text Integration
description: 'Learn how to enable voice input in the Kendo UI for Vue AIPrompt component and configure speech recognition settings.'
slug: speech-to-text_aiprompt
position: 25
---

# Speech-to-Text Integration

The Kendo UI for Vue AIPrompt supports speech-to-text functionality, allowing users to input prompts using voice commands. This feature enhances accessibility and provides a more natural interaction experience.

## Speech-to-Text Configuration

You can enable speech-to-text functionality using the `enableSpeechToText` property of the `AIPromptView` componen. You can set `enableSpeechToText` to `true` to utilize the default configuration, or provide a `SpeechToTextButtonProps` object to customize button settings and recognition parameters.

{% meta height:470 %}
{% embed_file ai-prompt/speech-to-text/main.vue preview %}
{% embed_file ai-prompt/speech-to-text/main.js %}
{% embed_file ai-prompt/speech-to-text/ai-data.js %}
{% endmeta %}

## Suggested Links

-   [SpeechToText Button Documentation]({% slug overview_speechtotext %})
