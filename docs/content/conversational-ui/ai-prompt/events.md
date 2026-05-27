---
title: Events
description: 'Using the Kendo UI for Vue AIPrompts events in Vue projects.'
slug: events_aiprompt
position: 80
---

# Kendo UI for Vue AIPrompt Events

This article provides details about the different events available in the AIPrompt API. Using these events you can tailor the AIPrompt's behavior to your specific requirements.

## List of available AIPrompt events

-   [onActiveviewchange]({% slug api_conversational-ui_aipromptprops %}#toc-onactiveviewchange) - Fires when active view is changed. Exposes the name of the new active view as event data.
-   [onCommandexecute]({% slug api_conversational-ui_aipromptprops %}#toc-oncommandexecute) - Fires each time the user clicks a command in the Command view. Exposes the selected command as event data.
-   [onPromptrequest]({% slug api_conversational-ui_aipromptprops %}#toc-onpromptrequest) - Fires when user clicks the `Generate` button in the Prompt view.
-   [onCancel]({% slug api_conversational-ui_aipromptprops %}#toc-oncancel) - Fires when user cancels an ongoing operation, such as streaming responses or loading states.

### AIPromptOutputView events

In addition to the events available in the AIPrompt component, the `AIPromptOutputView` implements the following events helping you handle different scenarios:

-   [onCopy]({% slug api_conversational-ui_aipromptoutputviewprops %}#toc-oncopy) - Fires each time the user clicks `Copy` button in the card.
-   [onRating]({% slug api_conversational-ui_aipromptoutputviewprops %}#toc-onrating) - Fires each time the user clicks a rating button in the card.
-   [onRetry]({% slug api_conversational-ui_aipromptoutputviewprops %}#toc-onretry) - Fires each time the user clicks `Retry` button in the card.

## AIPrompt events demo

The following example demonstrates the AIPrompt events.

{% meta height:700 %}
{% embed_file ai-prompt/events/main.vue preview %}
{% embed_file ai-prompt/events/main.js %}
{% embed_file ai-prompt/events/Logger.vue %}
{% endmeta %}

## Suggested Links

-   [API Reference of the AIPrompt]({% slug api_conversational-ui_aipromptprops %})
