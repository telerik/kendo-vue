---
title: Suggestions
description: 'Discover the Suggestions feature of the Kendo UI for Vue AIPrompt component and learn how to use it in Vue projects.'
slug: suggestions_aiprompt
position: 20
---

# Predefined Prompt Suggestions

The AIPrompt enables you to provide sample prompt suggestions that can be submitted to the LLM with a single click. This can be achieved by creating a custom `suggestionsList` and passing it to the [`promptSuggestions`]({% slug api_conversational-ui_aipromptprops %}#toc-promptSuggestions) prop of the `AIPromptView` component.

Select one of the suggestions to see the generated response, if no suggestion is selected, the AIPrompt will display a `The request cannot be processed at this time.` message.

{% meta height:470 %}
{% embed_file ai-prompt/suggestions/main.vue preview %}
{% embed_file ai-prompt/suggestions/main.js %}
{% embed_file ai-prompt/suggestions/ai-data.js %}
{% endmeta %}

## Suggested Links

-   [API Reference of the AIPromptProps]({% slug api_conversational-ui_aipromptprops %})
