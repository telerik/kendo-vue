---
title: Streaming Responses
description: 'Learn how to handle streaming responses and cancellation in the Kendo UI for Vue AIPrompt component.'
slug: streaming_aiprompt
position: 50
---

# Streaming AI Responses

The Kendo UI for Vue AIPrompt supports streaming AI responses, which display content progressively as it's generated rather than waiting for the complete response.

## Configuration

To implement streaming AI responses, you need to configure the following properties and event handlers:

1. **Enable streaming mode** - Set the [`streaming`](slug:api_conversational-ui_aipromptprops#streaming) property to `true` when content is being generated.
2. **Handle generation requests** - Use the [`onPromptrequest`](slug:api_conversational-ui_aipromptprops#onpromptrequest) event to start streaming when users submit prompts.
3. **Handle cancellation** - Use the [`onCancel`](slug:api_conversational-ui_aipromptprops#oncancel) event to stop streaming when users click the Stop Generation button.
4. **Manage outputs** - Update the `outputs` array progressively as streamed content arrives.

{% meta height:470 %}
{% embed_file ai-prompt/streaming/main.vue preview %}
{% embed_file ai-prompt/streaming/main.js %}
{% embed_file ai-prompt/streaming/ai-data.js %}
{% endmeta %}

## When to Use Streaming

Streaming is ideal when you need to provide immediate feedback and maintain user engagement during AI response generation. Consider using streaming in the following scenarios:

-   **Working with long-form AI responses** that take several seconds to generate, such as detailed explanations, code implementations, or comprehensive analysis.
-   **Creating chat-like interfaces** where users expect real-time feedback and natural conversation flow.
-   **Integrating with AI services** that support chunked responses, such as OpenAI's streaming API or similar services.
-   **Enhancing user engagement** in conversational applications where waiting for complete responses would disrupt the interaction flow.

## Suggested Links

-   [Customization](slug:customization_aiprompt)
-   [Events Documentation](slug:events_aiprompt)
-   [API Reference of the AIPromptProps](slug:api_conversational-ui_aipromptprops)
