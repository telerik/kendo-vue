---
title: Controlled Mode
description: "Control the value of the Kendo UI for Vue Native Checkbox in Vue projects."
slug: controlled_checkbox
position: 3
---

# Controlled Mode

By default, the Checkbox is in an uncontrolled state.

The Kendo UI for Vue Checkbox provides options for controlling the Value and Checked state. It supports setting it's boolean value using either `value` or `checked` prop. Note that if you provide both props, the `value` prop will be passed to the underlying `input` element.

## Controlling the Value

To manage the value of the Checkbox you have two options:

1. Use `v-model` and assign the value to it.

or:

1. Use its [`value`]({% slug api_inputs_checkboxprops %}#toc-value) property.
1. Handle the [`onChange`]({% slug api_inputs_checkboxprops %}#toc-onchange) event.
1. Pass the new value through the props.

{% meta height:100 %}
{% embed_file checkbox/controlled/value/main.vue preview %}
{% embed_file checkbox/controlled/value/main.js %}
{% endmeta %}


## Controlling the Checked state

To manage the checked state of the Checkbox:

1. Use `v-model` and assign the value to it you have two options.

or:

1. Use its [`checked`]({% slug api_inputs_checkboxprops %}#toc-checked) property.
1. Handle the [`onChange`]({% slug api_inputs_checkboxprops %}#toc-onchange) event.
1. Pass the new value through the props.

{% meta height:100 %}
{% embed_file checkbox/controlled/checked/main.vue preview %}
{% embed_file checkbox/controlled/checked/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Checkbox]({% slug api_inputs_checkboxprops %})
