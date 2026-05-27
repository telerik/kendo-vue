---
title: Adaptive Rendering
description: 'Configure the on-screen keyboard for the Kendo UI for Vue TextBox to implement adaptiveness in your Vue projects.'
slug: adaptive_rendering_textbox
position: 8
---

# Adaptive Rendering

The TextBox does not require specific adaptive rendering, but you can use the [`inputAttributes`]({% slug api_inputs_textboxprops %}#toc-inputAttributes) property to enable the browser to show an input-specific on-screen keyboard.

## On-Screen Keyboard

To enhance the mobile user experience of your Vue apps, you can configure the type of the on-screen keyboard for the Kendo UI for Vue TextBox. Use the [`inputAttributes`]({% slug api_inputs_textboxprops %}#toc-inputAttributes) property to set the `inputMode`. Based on the `inputMode` setting, the browser will display the most appropriate virtual keyboard.

The [`inputAttributes`]({% slug api_inputs_textboxprops %}#toc-inputAttributes) property lets you set custom HTML attributes to the inner focusable input.

> Check out the different type of virtual keyboard on a mobile device.

{% meta height:300 %}
{% embed_file textbox/input-mode/main.vue preview %}
{% embed_file textbox/input-mode/main.js %}
{% endmeta %}

## Suggested Links

-   [API Reference of the TextBox]({% slug api_inputs_textboxprops %})
-   [The `inputmode` Global Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode)
