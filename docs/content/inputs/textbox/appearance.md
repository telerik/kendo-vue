---
title: Appearance
description: "Add alternative styling options to the Kendo UI for Vue Native TextBox in Vue projects."
slug: appearance_textbox
position: 7
---

# Appearance

The `TextBox` provides a predefined set of appearance options.

Apart from the default vision of the `TextBox`, these alternative styling options enable you to configure each individual aspect of the component's appearance. 

The current article provides details about how the component changes when the different configurations of its properties are applied. Here are the sections you can directly access:

* [TextBox Configurator demo](#toc-configurator-demo)
* [TextBox Sizes](#toc-size)
* [TextBox Roundness](#toc-roundness)
* [TextBox Fill Mode](#toc-fill-mode)

## Configurator demo

The following example demonstrates configuring different aspects of a `TextBox` appearance through a configurator.

{% meta %}
{% embed_file textbox/appearance/configurator/main.vue preview %}
{% embed_file textbox/appearance/configurator/main.js %}
{% embed_file shared/InputStyleConfigurator.vue %}
{% endmeta %}

## Size

The size of the `TextBox` is controlled through its [`size`]({% slug api_inputs_textboxprops %}#toc-size) property. The values we can pass to the property are as follows:
- `small` — Sets the `padding` to `2px` and `8px`.
- `medium` — Sets the `padding` to `4px` and `8px`.
- `large` — Sets the `padding` to `6px` and `8px`.

The following example demonstrates the usage of each `size` option: 

{% meta height:260 %}
{% embed_file textbox/appearance/size/main.vue preview %}
{% embed_file textbox/appearance/size/main.js %}
{% endmeta %}

## Roundness

The roundness of the `TextBox` is controlled through its [`rounded`]({% slug api_inputs_textboxprops %}#toc-rounded) property. The values we can pass to the property are as follows:
- `none` — Sets no `border radius`.

- `small` — Sets the `border radius` to `1px`.
- `medium` — Sets the `border radius` to `2px`.
* `large` — Sets the `border radius` to `4px`.
- `full` — Sets the `border radius` to `9999px`.

The following example demonstrates the usage of each `rounded` option: 

{% meta height:300 %}
{% embed_file textbox/appearance/rounded/main.vue preview %}
{% embed_file textbox/appearance/rounded/main.js %}
{% endmeta %}

## Fill Mode

The styling of the `TextBox` is controlled through its [`fillMode`]({% slug api_inputs_textboxprops %}#toc-fillmode) property. The values we can pass to the property are as follows:

- `solid` — Sets a `background` color and `solid borders`.
- `flat` — Sets `transparent background and borders` in default state, and `background color` in focused state.
- `outline` — Sets a `transparent background` and `solid borders`.

The following example demonstrates the usage of each `fillMode` option: 

{% meta height:320 %}
{% embed_file textbox/appearance/fill-mode/main.vue preview %}
{% embed_file textbox/appearance/fill-mode/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the TextBox]({% slug api_inputs_textboxprops %})
* [TextBox `size` options]({% slug api_inputs_textboxprops %}#toc-size)
* [TextBox `fillMode` options]({% slug api_inputs_textboxprops %}#toc-fillMode)
* [TextBox `rounded` options]({% slug api_inputs_textboxprops %}#toc-rounded)
* [Creating Custom Styles with ThemeBuilder]({% slug themebuilder %})
