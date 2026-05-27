---
title: Prefix & Suffix Adornments
description: "Learn how to add prefix and suffix adornments to the Kendo UI for Vue MaskedTextBox."
slug: maskedtextbox_prefix_suffix
position: 45
---

# Prefix & Suffix Adornments

The `MaskedTextBox` provides configuration properties for adding items as `prefix` and `suffix` adornments. The component can display both built-in and custom adornments. Below you can find more details about the different configuration options.

* [Built-In Adornments](#toc-built-in-adornments)
* [Prefix Adornments](#toc-prefix-adornments-customization)
* [Suffix Adornments](#toc-suffix-adornments-customization)
* [Disabled Adornments](#toc-disabled-adornments)


## Built-In Adornments

### Validation Icon
The `MaskedTextBox` component provides the [showValidationIcon]({% slug api_inputs_maskedtextboxprops %}#toc-showvalidationicon) prop that can be used in a combination with the [inputClass]({% slug api_inputs_maskedtextboxprops %}#toc-inputclass) or the [valid]({% slug api_inputs_maskedtextboxprops %}#toc-valid) properties. Configuring a combination of these properties we can show a validation icon that marks the `MaskedTextBox` value as valid or invalid.    

{% meta height:210 %}
{% embed_file maskedtextbox/adornments/validation-icon/main.vue preview %}
{% embed_file maskedtextbox/adornments/validation-icon/main.js %}
{% endmeta %}

### Loading Icon
You can display a loading icon in the `MaskedTextBox` by setting its [showLoadingIcon]({% slug api_inputs_maskedtextboxprops %}#toc-showloadingicon) property to `true`.

{% meta height:130 %}
{% embed_file maskedtextbox/adornments/loading-icon/main.vue preview %}
{% embed_file maskedtextbox/adornments/loading-icon/main.js %}
{% endmeta %}

### Clear button
You can display the built-in `clear` button inside the `MaskedTextBox` by setting its [showClearButton]({% slug api_inputs_maskedtextboxprops %}#toc-showclearbutton) property to `true`. The `clear` button will appear once there is a value inside the `MaskedTextBox`. 

{% meta height:130 %}
{% embed_file maskedtextbox/adornments/clear-button/main.vue preview %}
{% embed_file maskedtextbox/adornments/clear-button/main.js %}
{% endmeta %}

### Separator

In scenarios when we need to display a separator in the adornments, we can use the `InputSeparator` component as demonstrated in the following example.

{% meta height:130 %}
{% embed_file maskedtextbox/adornments/separator/main.vue preview %}
{% embed_file maskedtextbox/adornments/separator/main.js %}
{% endmeta %}

## Prefix Adornments Customization

The `MaskedTextBox` component allows you to define custom template that will be visualized as a prefix inside the component. To define a custom `prefix`, use the [inputPrefix]({% slug api_inputs_maskedtextboxprops %}#toc-inputprefix) property as in the following example. 

{% meta height:130 %}
{% embed_file maskedtextbox/adornments/prefix/main.vue preview %}
{% embed_file maskedtextbox/adornments/prefix/main.js %}
{% endmeta %}

## Suffix Adornments Customization

The `MaskedTextBox` component allows you to define custom template that will be visualized as a suffix inside the component. To define a custom `suffix`, use the [inputSuffix]({% slug api_inputs_maskedtextboxprops %}#toc-inputprefix) property as in the following example.

{% meta height:130 %}
{% embed_file maskedtextbox/adornments/suffix/main.vue preview %}
{% embed_file maskedtextbox/adornments/suffix/main.js %}
{% endmeta %}

## Disabled Adornments

All adornments defined for the `MaskedTextBox` component are automatically **enabled/disabled** based on the [disabled]({% slug api_inputs_maskedtextboxprops %}#toc-disabled) property. The property controls the **enabled/disabled** state of the whole `MaskedTextBox`. 

{% meta height:130 %}
{% embed_file maskedtextbox/adornments/disabled/main.vue preview %}
{% embed_file maskedtextbox/adornments/disabled/main.js %}
{% endmeta %}



## Suggested Links

* [API Reference of the MaskedTextBox]({% slug api_inputs_maskedtextboxprops %})
* [MaskedTextBox Appearance Configuration]({% slug appearance_maskedtextbox %})

