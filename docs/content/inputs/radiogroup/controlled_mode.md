---
title: Controlled Mode
description: "Control the value of the Kendo UI for Vue Radio Buttons within a RadioGroup in Vue projects."
slug: controlled_radiogroup
position: 2
---

# Controlled Mode

The RadioGroup provides options for controlling the checked state. It supports setting it's boolean value using `value` prop to the underlying `input` element.

## Controlling the Checked and Disabled states

To manage the checked state of the Radio buttons in a RadioGroup you have two options:
1. Use `v-model` and assign the value to it.

or:

1. Use its [`value`]({% slug api_inputs_radiogroupprops %}#toc-value) property.
1. Handle the [`onChange`]({% slug api_inputs_radiogroupprops %}#toc-onchange) event.
1. Pass the new value through the props.

{% meta height:240 %}
{% embed_file radiogroup/controlled/main.vue preview %}
{% embed_file radiogroup/controlled/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the RadioGroupProps]({% slug api_inputs_radiogroupprops %})
