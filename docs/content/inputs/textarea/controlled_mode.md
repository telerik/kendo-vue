---
title: Controlled Mode
description: "Control the value of the Kendo UI for Vue TextArea in Vue projects."
slug: controlled_textarea
position: 30
---

# Controlled Mode

By default, the TextArea is in an uncontrolled state.

The TextArea provides options for controlling the value. It supports setting it's value using `value` prop to the underlying `textarea` element.

## Controlling the Value

To manage the value of the TextArea:

1. Use its [`value`]({% slug api_inputs_textareaprops %}#toc-value) property.
1. Handle the [`onChange`]({% slug api_inputs_textareaprops %}#toc-onchange) event.
1. Pass the new value through the props.



{% meta height:170 %}
{% embed_file textarea/controlled/main.vue preview %}
{% embed_file textarea/controlled/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the TextArea]({% slug api_inputs_textarea %})
* [API Reference of the TextAreaProps]({% slug api_inputs_textareaprops %})
