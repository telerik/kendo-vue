---
title: Appearance
description: "Add alternative styling options to the Kendo UI for Vue Native NumericTextBox in Vue projects."
slug: appearance_numerictextbox
position: 60
---

# Appearance

The `NumericTextBox` provides a predefined set of appearance options.

Apart from the default vision of the `NumericTextBox`, these alternative styling options enable you to configure each individual aspect of the component's appearance. 

The current article provides details about how the component changes when the different configurations of its properties are applied. Here are the sections you can directly access:

* [NumericTextBox Configurator demo](#toc-configurator-demo)
* [NumericTextBox Sizes](#toc-size)
* [NumericTextBox Roundness](#toc-roundness)
* [NumericTextBox Fill Mode](#toc-fill-mode)

## Configurator demo

The following example demonstrates configuring different aspects of a `NumericTextBox` appearance through a configurator.

{% meta %}
{% embed_file numerictextbox/appearance/configurator/main.vue preview %}
{% embed_file numerictextbox/appearance/configurator/main.js %}
{% embed_file shared/NumericTextBoxStyleConfigurator.vue %}
{% endmeta %}


## Size

The size of the NumericTextBox is controlled through its [`size`]({% slug api_inputs_numerictextboxprops %}#toc-size) property. The values we can pass to the property are as follows:
- `small` — Sets the `padding` to `2px` and `8px`.
- `medium` — Sets the `padding` to `4px` and `8px`.
- `large` — Sets the `padding` to `6px` and `8px`.

The following example demonstrates the usage of each `size` option: 

{% meta height:260 %}
{% embed_file numerictextbox/appearance/size/main.vue preview %}
{% embed_file numerictextbox/appearance/size/main.js %}
{% endmeta %}

## Roundness

The roundness of the NumericTextBox is controlled through its [`rounded`]({% slug api_inputs_numerictextboxprops %}#toc-rounded) property. The values we can pass to the property are as follows:
- `none` — Sets no `border radius`.

- `small` — Sets the `border radius` to `1px`.
- `medium` — Sets the `border radius` to `2px`.
* `large` — Sets the `border radius` to `4px`.
- `full` — Sets the `border radius` to `9999px`.

The following example demonstrates the usage of each `rounded` option: 

{% meta height:300 %}
{% embed_file numerictextbox/appearance/rounded/main.vue preview %}
{% embed_file numerictextbox/appearance/rounded/main.js %}
{% endmeta %}

## Fill Mode

The styling of the NumericTextBox is controlled through its [`fillMode`]({% slug api_inputs_numerictextboxprops %}#toc-fillmode) property. The values we can pass to the property are as follows:

- `solid` — Sets a `background` color and `solid borders`.
- `flat` — Sets `transparent background and borders` in default state, and `background color` in focused state.
- `outline` — Sets a `transparent background` and `solid borders`.

The following example demonstrates the usage of each `fillMode` option: 

{% meta height:320 %}
{% embed_file numerictextbox/appearance/fill-mode/main.vue preview %}
{% embed_file numerictextbox/appearance/fill-mode/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the NumericTextBox]({% slug api_inputs_numerictextboxprops %})
* [NumericTextBox `size` options]({% slug api_inputs_numerictextboxprops %}#toc-size)
* [NumericTextBox `rounded` options]({% slug api_inputs_numerictextboxprops %}#toc-rounded)
* [NumericTextBox `fillMode` options]({% slug api_inputs_numerictextboxprops %}#toc-fillmode)
* [Creating Custom Styles with ThemeBuilder]({% slug themebuilder %})
