---
title: Appearance
description: "Add alternative styling options to the Kendo UI for Vue MaskedTextBox in Vue projects."
slug: appearance_maskedtextbox
position: 60
---

# Appearance

The `MaskedTextBox` provides a predefined set of appearance options.

Apart from the default vision of the `MaskedTextBox`, these alternative styling options enable you to configure each individual aspect of the component's appearance.

The current article provides details about how the component changes when the different configurations of its properties are applied. Here are the sections you can directly access:

* [MaskedTextBox Configurator demo](#toc-configurator-demo)
* [MaskedTextBox Sizes](#toc-size)
* [MaskedTextBox Roundness](#toc-roundness)
* [MaskedTextBox Fill Mode](#toc-fill-mode)

## Configurator demo

The following example demonstrates configuring different aspects of a `MaskedTextBox` appearance through a configurator.

{% meta %}
{% embed_file maskedtextbox/appearance/configurator/main.vue preview %}
{% embed_file maskedtextbox/appearance/configurator/main.js %}
{% embed_file shared/MaskedTextBoxStyleConfigurator.vue %}
{% endmeta %}


## Size

The size of the `MaskedTextBox` is controlled through its [`size`]({% slug api_inputs_maskedtextboxprops %}#toc-size) property. The values we can pass to the property are as follows:
- `small` — Sets the `padding` to `2px` and `8px`.
- `medium` — Sets the `padding` to `4px` and `8px`.
- `large` — Sets the `padding` to `6px` and `8px`.

The following example demonstrates the usage of each `size` option:

{% meta height:260 %}
{% embed_file maskedtextbox/appearance/size/main.vue preview %}
{% embed_file maskedtextbox/appearance/size/main.js %}
{% endmeta %}

## Roundness

The roundness of the `MaskedTextBox` is controlled through its [`rounded`]({% slug api_inputs_maskedtextboxprops %}#toc-rounded) property. The values we can pass to the property are as follows:
- `none` — Sets no `border radius`.
- `small` — Sets the `border radius` to `1px`.
- `medium` — Sets the `border radius` to `2px`.
* `large` — Sets the `border radius` to `4px`.
- `full` — Sets the `border radius` to `9999px`.

The following example demonstrates the usage of each `rounded` option:

{% meta height:300 %}
{% embed_file maskedtextbox/appearance/rounded/main.vue preview %}
{% embed_file maskedtextbox/appearance/rounded/main.js %}
{% endmeta %}

## Fill Mode

The styling of the `MaskedTextBox` is controlled through its [`fillMode`]({% slug api_inputs_maskedtextboxprops %}#toc-fillmode) property. The values we can pass to the property are as follows:

- `solid` — Sets a `background` color and `solid borders`.
- `flat` — Sets `transparent background and borders` in default state, and `background color` in focused state.
- `outline` — Sets a `transparent background` and `solid borders`.

The following example demonstrates the usage of each `fillMode` option:

{% meta height:320 %}
{% embed_file maskedtextbox/appearance/fill-mode/main.vue preview %}
{% embed_file maskedtextbox/appearance/fill-mode/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the MaskedTextBox]({% slug api_inputs_maskedtextboxprops %})
* [MaskedTextBox `size` options]({% slug api_inputs_maskedtextboxprops %}#toc-size)
* [MaskedTextBox `rounded` options]({% slug api_inputs_maskedtextboxprops %}#toc-rounded)
* [MaskedTextBox `fillMode` options]({% slug api_inputs_maskedtextboxprops %}#toc-fillmode)
* [Creating Custom Styles with ThemeBuilder]({% slug themebuilder %})
