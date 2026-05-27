---
title: Prefix & Suffix Adornments
description: "Learn how to add prefix and suffix adornments to the Kendo UI for Vue NumericTextBox."
slug: numerictextbox_prefix_suffix
position: 45
---

# Prefix & Suffix Adornments

The `NumericTextBox` provides configuration properties for adding items as `prefix` and `suffix` adornments. The component can display both built-in and custom adornments. Below you can find more details about the different configuration options.

* [Built-In Adornments](#toc-built-in-adornments)
* [Prefix Adornments](#toc-prefix-adornments-customization)
* [Suffix Adornments](#toc-suffix-adornments-customization)
* [Disabled Adornments](#toc-disabled-adornments)


## Built-In Adornments

### Validation Icon
The `NumericTextBox` component provides the [showValidationIcon]({% slug api_inputs_numerictextboxprops %}#toc-showvalidationicon) prop that can be used in a combination with the [inputClass]({% slug api_inputs_numerictextboxprops %}#toc-inputclass) or the [valid]({% slug api_inputs_numerictextboxprops %}#toc-valid) properties. Configuring a combination of these properties we can show a validation icon that marks the `NumericTextBox` value as valid or invalid.    

{% meta height:210 %}
{% embed_file numerictextbox/adornments/validation-icon/main.vue preview %}
{% embed_file numerictextbox/adornments/validation-icon/main.js %}
{% endmeta %}

### Loading Icon
You can display a loading icon in the `NumericTextBox` by setting its [showLoadingIcon]({% slug api_inputs_numerictextboxprops %}#toc-showloadingicon) property to `true`.

{% meta height:130 %}
{% embed_file numerictextbox/adornments/loading-icon/main.vue preview %}
{% embed_file numerictextbox/adornments/loading-icon/main.js %}
{% endmeta %}

### Clear button
You can display the built-in `clear` button inside the `NumericTextBox` by setting its [showClearButton]({% slug api_inputs_numerictextboxprops %}#toc-showclearbutton) property to `true`. The `clear` button will appear once there is a value inside the `NumericTextBox`. 

{% meta height:130 %}
{% embed_file numerictextbox/adornments/clear-button/main.vue preview %}
{% embed_file numerictextbox/adornments/clear-button/main.js %}
{% endmeta %}

### Separator

In scenarios when we need to display a separator in the adornments, we can use the `InputSeparator` component as demonstrated in the following example.

{% meta height:130 %}
{% embed_file numerictextbox/adornments/separator/main.vue preview %}
{% embed_file numerictextbox/adornments/separator/main.js %}
{% endmeta %}

## Prefix Adornments Customization

The `NumericTextBox` component allows you to define custom template that will be visualized as a prefix inside the component. To define a custom `prefix`, use the [inputPrefix]({% slug api_inputs_numerictextboxprops %}#toc-inputprefix) property as in the following example. 

{% meta height:130 %}
{% embed_file numerictextbox/adornments/prefix/main.vue preview %}
{% embed_file numerictextbox/adornments/prefix/InputIcons.vue %}
{% embed_file numerictextbox/adornments/prefix/main.js %}
{% endmeta %}

## Suffix Adornments Customization

The `NumericTextBox` component allows you to define custom template that will be visualized as a suffix inside the component. To define a custom `suffix`, use the [inputSuffix]({% slug api_inputs_numerictextboxprops %}#toc-inputprefix) property as in the following example.

{% meta height:130 %}
{% embed_file numerictextbox/adornments/suffix/main.vue preview %}
{% embed_file numerictextbox/adornments/suffix/main.js %}
{% endmeta %}

## Disabled Adornments

All adornments defined for the `NumericTextBox` component are automatically **enabled/disabled** based on the [disabled]({% slug api_inputs_numerictextboxprops %}#toc-disabled) property. The property controls the **enabled/disabled** state of the whole `NumericTextBox`. 

{% meta height:130 %}
{% embed_file numerictextbox/adornments/disabled/main.vue preview %}
{% embed_file numerictextbox/adornments/disabled/main.js %}
{% endmeta %}



## Suggested Links

* [API Reference of the NumericTextBox]({% slug api_inputs_numerictextboxprops %})
* [NumericTextBox Appearance Configuration]({% slug appearance_numerictextbox %})

