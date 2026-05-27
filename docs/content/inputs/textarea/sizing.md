---
title: Sizing
description: "Set the height of the Kendo UI for Vue Native TextArea component in Vue projects."
slug: sizing_textarea
position: 50
---

# Sizing

You can easily set the initial height of the TextArea component as well as setting an auto size option as the user types.

## Setting the Initial Rows

To set initial rows of the TextArea, use its [`rows`]({% slug api_inputs_textareaprops %}#toc-rows) property.



{% meta height:200 %}
{% embed_file textarea/sizing/initial/main.vue preview %}
{% embed_file textarea/sizing/initial/main.js %}
{% endmeta %}


## Auto-Resizing

To automatically adjust the height of the TextArea as the user types, set its [`autoSize`]({% slug api_inputs_textareaprops %}#toc-autoSize) property to `true`.



{% meta height:250 %}
{% embed_file textarea/sizing/auto-sizing/main.vue preview %}
{% embed_file textarea/sizing/auto-sizing/main.js %}
{% endmeta %}



## Suggested Links

* [API Reference of the TextArea]({% slug api_inputs_textarea %})
* [API Reference of the TextAreaProps]({% slug api_inputs_textareaprops %})
