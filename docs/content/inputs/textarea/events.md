---
title: Events
description: "Learn how to use the Kendo UI for Vue Native TextArea events"
slug: textarea_events
position: 79
---

# Events

This article provides details about the event available in the TextArea API. 

## List of available TextArea events
* [Native InputEvent](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) - A Native TextArea event triggered every time a symbol is entered or deleted inside the component. 
* [TextAreaBlurEvent]({% slug api_inputs_textareablurevent %}) - Triggered when the TextArea is blurred/focused out.
* [TextAreaChangeEvent]({% slug api_inputs_textareachangeevent %}) - Triggered when the value of the TextArea has been changed when the component is blurred. If when the `blur event` is triggered and the value of the TextArea hasn't been changed, the `change event` won't be triggered. 
* [TextAreaFocusEvent]({% slug api_inputs_textareafocusevent %}) - Triggered when the component is focused.

## TextArea events demo

The below example demonstrates the usage of the different TextArea events.

{% meta height:420 %}
{% embed_file textarea/events/main.vue preview %}
{% embed_file textarea/events/Logger.vue %}
{% embed_file textarea/events/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the TextArea]({% slug api_inputs_textarea %})
* [API Reference of the TextAreaProps]({% slug api_inputs_textareaprops %})