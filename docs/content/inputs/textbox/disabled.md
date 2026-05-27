---
title: Disabled TextBox
description: "Enable or disable the Kendo UI for Vue Native TextBox Component in Vue projects."
slug: disabled_textbox
position: 4
---

# Disabled TextBox

By default, the TextBox component is enabled.

To disable the underlying `input` element, set the [`disabled`]({% slug api_inputs_textboxprops %}#toc-disabled) property to `true`. 

{% meta %}
{% embed_file textbox/disabled/main.vue preview %}
{% embed_file textbox/disabled/main.js %}
{% endmeta %}

## Disabled TextBox with Adornments

All adornments defined for the TextBox component are automatically enabled/disabled based on the [`disabled`]({% slug api_inputs_textboxprops %}#toc-disabled) property. The property controls the enabled/disabled state of the whole TextBox.

{% meta %}
{% embed_file textbox/disabled-adornments/main.vue preview %}
{% embed_file textbox/disabled-adornments/TextBoxIcons.vue %}
{% embed_file textbox/disabled-adornments/main.js %}
{% endmeta %}

## Suggested Links

- [API Reference of the TextBox Props]({% slug api_inputs_textboxprops %})
