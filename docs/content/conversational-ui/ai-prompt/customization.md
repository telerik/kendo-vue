---
title: Custom Templates
description: 'Discover how to make customizations of the Kendo UI for Vue AIPrompt component and learn how to use it in Vue projects.'
slug: customization_aiprompt
position: 40
---

# Custom Templates

The Kendo UI for Vue AIPrompt enables you to customize its toolbar and be able to use tailor made views that fit the requirements of your project. In this article you can see how to define:

-   Custom tools inside the AIPrompt's toolbar
-   Custom PromptContent view based on specific design or requirement
-   Advanced input customization including custom input prompts and generate buttons

## Custom Toolbar Button

The following example showcases how we can add a custom Button to the toolbar of the AIPrompt component. In the specific demo, once the custom button is clicked, the FloatingActionButton closes.

{% meta height:570 %}
{% embed_file ai-prompt/custom-toolbar/main.vue preview %}
{% embed_file ai-prompt/custom-toolbar/main.js %}
{% embed_file ai-prompt/custom-toolbar/ai-data.js %}
{% endmeta %}

## Custom PromptContent

Based on the above example, the following one demonstrates how we can render two separate PromptContent views that are activated when one of the two custom toolbar buttons is clicked. There is no restriction in the number of custom views we can define.

Using the demonstrated approach, you can customize the way your responses are displayed.

{% meta height:470 %}
{% embed_file ai-prompt/custom-template/main.vue preview %}
{% embed_file ai-prompt/custom-template/main.js %}
{% endmeta %}

## Custom Generate Button and Prompt Input

You can customize the generate button and prompt input by passing custom components to the `generateButton` and `promptInput` props. This approach allows you to modify styling, behavior, and functionality to match your application's design.

{% meta height:470 %}
{% embed_file ai-prompt/input-customization/main.vue preview %}
{% embed_file ai-prompt/input-customization/main.js %}
{% embed_file ai-prompt/input-customization/ai-data.js %}
{% endmeta %}

## Suggested Links

-   [API Reference of the AIPromptProps]({% slug api_conversational-ui_aipromptprops %})
