---
title: Adornments
description: "Add custom items using adornments for the Kendo UI for Vue Native TextBox component"
slug: adornments_textbox
position: 1
---

## Adornments

The `TextBox` provides configuration properties for adding items as `prefix` and `suffix` adornments. The component can display both built-in and custom adornments. Below you can find more details about the different configuration options.

* [Built-In Adornments](#toc-built-in-adornments)
* [Suffix and Prefix Custom Adornments](#toc-suffix-and-prefix-custom-adornments)


## Built-In Adornments

### Validation Icon
The `TextBox` component provides the [showValidationIcon]({% slug api_inputs_textboxprops %}#toc-showvalidationicon) prop that can be used in a combination with the [inputClass]({% slug api_inputs_textboxprops %}#toc-inputclass) or the [valid]({% slug api_inputs_textboxprops %}#toc-valid) properties. Configuring a combination of these properties we can show a validation icon that marks the `TextBox` value as valid or invalid.    

{% meta height:210 %}
{% embed_file textbox/validation-icon-built-in/main.vue preview %}
{% embed_file textbox/validation-icon-built-in/main.js %}
{% endmeta %}

### Loading Icon
You can display a loading icon in the `TextBox` by setting its [showLoadingIcon]({% slug api_inputs_textboxprops %}#toc-showloadingicon) property to `true`.

{% meta height:130 %}
{% embed_file textbox/loading-icon/main.vue preview %}
{% embed_file textbox/loading-icon/main.js %}
{% endmeta %}

### Clear button
You can display the built-in `clear` button inside the `TextBox` by setting its [showClearButton]({% slug api_inputs_textboxprops %}#toc-showclearbutton) property to `true`. The `clear` button will appear once there is a value inside the `TextBox`. 

{% meta height:130 %}
{% embed_file textbox/clear-button/main.vue preview %}
{% embed_file textbox/clear-button/main.js %}
{% endmeta %}


## Suffix and Prefix Custom Adornments

Render custom Vue Components like `Icon` and `Button` as `prefix` and `suffix` to the TextBox and implement custom functionality on top of them.

{% meta height:280 %}
{% embed_file textbox/adornments/main.vue preview %}
{% embed_file textbox/adornments/main.js %}
{% endmeta %}

### Separator

To visually separate the specified adornments, you can add an [`InputSeparator`]({% slug api_inputs_inputseparator %}).

{% meta height:280 %}
{% embed_file textbox/separator/main.vue preview %}
{% embed_file textbox/separator/main.js %}
{% endmeta %}

### Clear TextBox Value with Custom Solution

The TextBox can be reset by rendering a custom clickable component which controls its current value.

{% meta height:280 %}
{% embed_file textbox/clear-value/main.vue preview %}
{% embed_file textbox/clear-value/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the TextBox]({% slug api_inputs_textboxprops %})
* [API Reference of the Button]({% slug api_buttons_buttonprops %})