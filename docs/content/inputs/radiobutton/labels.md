---
title: Labels
description: "Set the labels of the Kendo UI for Vue RadioButton in Vue projects."
slug: labels_radiobutton
position: 4
---

# Labels

The RadioButton enables you to add label next to the input, either before or after it.

## Setting Up the Label

To set the label, use the [`label`]({% slug api_inputs_radiobuttonprops %}#toc-label) property, which accepts `string`. To set position of the label, use the [`labelPlacement`]({% slug api_inputs_radiobuttonprops %}#toc-labelPlacement) property, which accepts `before` and `after` values.

{% meta height:130 %}
{% embed_file radiobutton/labels/setting-up/main.vue preview %}
{% embed_file radiobutton/labels/setting-up/main.js %}
{% endmeta %}

## Custom labels

To create a custom labels, set `id` prop of the RadioButton and provide custom markup for the label, including the `for` attribute for it.

{% meta height:130 %}
{% embed_file radiobutton/labels/custom-labels/main.vue preview %}
{% embed_file radiobutton/labels/custom-labels/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the RadioButtonProps]({% slug api_inputs_radiobuttonprops %})
