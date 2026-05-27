---
title: Tools
description: 'Learn how to configure different tools for the Kendo UI for Vue PromptBox component.'
slug: tools_promptbox
position: 30
components: ['promptbox']
---

# PromptBox Tools

The PromptBox provides several built-in tools that enhance functionality and user experience.

These tools include the **Action** button for submitting prompts, the **Upload** button for attaching files, and the **Speech-to-Text** button for voice input. If you need additional tools, refer to the [PromptBox Adornments](slug:adornments_promptbox) article.

## Action Button

The **Action** button submits the prompt. Customize its [appearance](slug:appearance_promptbox) and behavior by setting the [`actionButtonConfig`](slug:api_conversational-ui_promptboxprops#actionbutton) property to an [`PromptBoxActionButton`](slug:api_conversational-ui_promptboxactionbuttonprops) object.

The button supports a loading state for better user feedback during prompt submission and icon customizations for each state.

The following example demonstrates how to configure the Action Button in the PromptBox.

{% meta height:300 %}
{% embed_file promptbox/tools/action-button/main.vue preview %}
{% embed_file promptbox/tools/action-button/main.js %}
{% endmeta %}

## Speech-to-Text Button

The **Speech-to-Text** button enables you to input prompts with voice commands. Customize its [appearance](slug:appearance_promptbox) and behavior by setting the [`speechToTextButtonConfig`](slug:api_conversational-ui_promptboxprops#speechToTextButtonConfig) property to `true` or [`PromptBoxSpeechToTextButton`](slug:api_conversational-ui_promptboxspeechtotextbuttonprops) object. The button provides visual feedback during the speech recognition process.

The following example demonstrates how to configure the Speech-to-Text Button in the PromptBox.

{% meta height:300 %}
{% embed_file promptbox/tools/speech-to-text-button/main.vue preview %}
{% embed_file promptbox/tools/speech-to-text-button/main.js %}
{% endmeta %}

## Upload Button

The **Upload** button allows you to attach files to prompts. You can customize its [appearance](slug:appearance_promptbox), behavior, and file restrictions by setting the [`uploadButtonConfig`](slug:api_conversational-ui_promptboxprops#uploadButtonConfig) property to a [`PromptBoxUploadButton`](slug:api_conversational-ui_promptboxuploadbuttonprops) object.

To enable file attachments in the PromptBox, set the [`uploadButtonConfig`](slug:api_conversational-ui_promptboxprops#uploadButtonConfig) property to `true` or use [`PromptBoxUploadButton`](slug:api_conversational-ui_promptboxuploadbuttonprops) for further customization.

{% meta height:400 %}
{% embed_file promptbox/tools/upload-button/main.vue preview %}
{% embed_file promptbox/tools/upload-button/main.js %}
{% endmeta %}

### Attaching Multiple Files

To allow users to attach multiple files, set the [`multiple`](slug:api_conversational-ui_promptboxuploadbuttonprops#multiple) property of the [`PromptBoxUploadButton`](slug:api_conversational-ui_promptboxuploadbuttonprops) to `true`.

```html
<PromptBox :upload-button-config="{ multiple: true }" />
```

### File Size Restrictions

To restrict the minimum and maximum file size for attachments, set the [`restrictions`](slug:api_conversational-ui_promptboxuploadbuttonprops#restrictions) property of the [`PromptBoxUploadButton`](slug:api_conversational-ui_PromptBoxUploadButton) to an object containing the `minFileSize` and `maxFileSize` properties.

```html
<PromptBox :upload-button-config="{ restrictions: { minFileSize: 1024, maxFileSize: 1048576 } }" />
```

### File Type Restrictions

To restrict the allowed file types for attachments, set the [`restrictions`](slug:api_conversational-ui_PromptBoxUploadButton#restrictions) property of the [`PromptBoxUploadButton`](slug:api_conversational-ui_PromptBoxUploadButton) to an object containing the `allowedExtensions` property.

Additionally, set the [`accept`](slug:api_conversational-ui_PromptBoxUploadButton#accept) property to enable the allowed file types in the file selection dialog.

This property accepts an array of strings representing the allowed file types or extensions.

```html
<PromptBox
    :upload-button-config="{
        accept: '.png,.jpg,.jpeg',
        restrictions: { allowedExtensions: ['.png', '.jpg', '.jpeg'] }
    }"
/>
```

## Suggested Links

-   [Reordering Built-in Controls](slug:adornments_promptbox#reordering-built-in-controls)
-   [PromptBox Adornments](slug:adornments_promptbox)
-   [API Reference of the PromptBox](slug:api_conversational-ui_promptboxprops)
-   [API Reference of PromptBoxUploadButton](slug:api_conversational-ui_promptboxuploadbuttonprops)
