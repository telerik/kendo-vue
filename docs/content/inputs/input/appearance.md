---
title: Appearance
description: "Add alternative styling options to the Kendo UI for Vue Native Input in Vue projects."
slug: appearance_input
position: 6
---

# Appearance

The Kendo UI for Vue Native Input provides a predefined set of appearance options.

Apart from the default vision of the `Input`, these alternative styling options enable you to configure each individual aspect of the component's appearance. 

The current article provides details about how the component changes when the different configurations of its properties are applied. Here are the sections you can directly access:

* [Input Configurator demo](#toc-configurator-demo)
* [Input Sizes](#toc-size)
* [Input Roundness](#toc-roundness)
* [Input Fill Mode](#toc-fill-mode)

## Configurator demo

The following example demonstrates configuring different aspects of a `Input` appearance through a configurator.

{% meta %}
{% embed_file input/appearance/configurator/main.vue preview %}
{% embed_file input/appearance/configurator/main.js %}
{% embed_file shared/InputStyleConfigurator.vue %}
{% endmeta %}

## Size

The size of the `Input` is controlled through its [`size`]({% slug api_inputs_inputprops %}#toc-size) property. The values we can pass to the property are as follows:
- `small` — Sets the `padding` to `2px` and `8px`.
- `medium` — Sets the `padding` to `4px` and `8px`.
- `large` — Sets the `padding` to `6px` and `8px`.

The following example demonstrates the usage of each `size` option: 

{% meta height:260 %}
{% embed_file input/appearance/size/main.vue preview %}
{% embed_file input/appearance/size/main.js %}
{% endmeta %}

## Roundness

The roundness of the `Input` is controlled through its [`rounded`]({% slug api_inputs_inputprops %}#toc-rounded) property. The values we can pass to the property are as follows:
- `none` — Sets no `border radius`.

- `small` — Sets the `border radius` to `1px`.
- `medium` — Sets the `border radius` to `2px`.
* `large` — Sets the `border radius` to `4px`.
- `full` — Sets the `border radius` to `9999px`.

The following example demonstrates the usage of each `rounded` option: 

{% meta height:300 %}
{% embed_file input/appearance/rounded/main.vue preview %}
{% embed_file input/appearance/rounded/main.js %}
{% endmeta %}

## Fill Mode

The styling of the `Input` is controlled through its [`fillMode`]({% slug api_inputs_inputprops %}#toc-fillmode) property. The values we can pass to the property are as follows:

- `solid` — Sets a `background` color and `solid borders`.
- `flat` — Sets `transparent background and borders` in default state, and `background color` in focused state.
- `outline` — Sets a `transparent background` and `solid borders`.

The following example demonstrates the usage of each `fillMode` option: 

{% meta height:320 %}
{% embed_file input/appearance/fill-mode/main.vue preview %}
{% embed_file input/appearance/fill-mode/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the Input]({% slug api_inputs_inputprops %})
* [Input `size` options]({% slug api_inputs_inputprops %}#toc-size)
* [Input `rounded` options]({% slug api_inputs_inputprops %}#toc-rounded)
* [Input `fillMode` options]({% slug api_inputs_inputprops %}#toc-fillmode)
* [Creating Custom Styles with ThemeBuilder]({% slug themebuilder %})
