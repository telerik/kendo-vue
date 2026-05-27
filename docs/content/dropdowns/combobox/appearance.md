---
title: Appearance
description: "Add alternative styling options to the Kendo UI for Vue ComboBox in Vue projects."
slug: appearance_combobox
position: 70
---

# Appearance

The `ComboBox` provides a predefined set of appearance options.

Apart from the default vision of the `ComboBox`, these alternative styling options enable you to configure each individual aspect of the component's appearance.

The current article provides details about how the component changes when the different configurations of its properties are applied. Here are the sections you can directly access:

* [ComboBox Configurator demo](#toc-configurator-demo)
* [ComboBox Sizes](#toc-size)
* [ComboBox Roundness](#toc-roundness)
* [ComboBox Fill Mode](#toc-fill-mode)

## Configurator demo

The following example demonstrates configuring different aspects of a `ComboBox` appearance through a configurator.

{% meta height:500 %}
{% embed_file combobox/appearance/configurator/main.vue preview %}
{% embed_file combobox/appearance/configurator/main.js %}
{% embed_file shared/DropDownStyleConfigurator.vue %}
{% endmeta %}


## Size

The size of the `ComboBox` is controlled through its [`size`]({% slug api_dropdowns_comboboxprops %}#toc-size) property. The values we can pass to the property are as follows:
- `small` — Sets the `padding` to `2px` and `8px`.
- `medium` — Sets the `padding` to `4px` and `8px`.
- `large` — Sets the `padding` to `6px` and `8px`.

The following example demonstrates the usage of each `size` option:

{% meta height:280 %}
{% embed_file combobox/appearance/size/main.vue preview %}
{% embed_file combobox/appearance/size/main.js %}
{% endmeta %}

## Roundness

The roundness of the `ComboBox` is controlled through its [`rounded`]({% slug api_dropdowns_comboboxprops %}#toc-rounded) property. The values we can pass to the property are as follows:
- `none` — Sets no `border radius`.

- `small` — Sets the `border radius` to `1px`.
- `medium` — Sets the `border radius` to `2px`.
* `large` — Sets the `border radius` to `4px`.
- `full` — Sets the `border radius` to `9999px`.

The following example demonstrates the usage of each `rounded` option:

{% meta height:300 %}
{% embed_file combobox/appearance/rounded/main.vue preview %}
{% embed_file combobox/appearance/rounded/main.js %}
{% endmeta %}

## Fill Mode

The styling of the `ComboBox` is controlled through its [`fillMode`]({% slug api_dropdowns_comboboxprops %}#toc-fillmode) property. The values we can pass to the property are as follows:

- `solid` — Sets a `background` color and `solid borders`.
- `flat` — Sets `transparent background and borders` in default state, and `background color` in focused state.
- `outline` — Sets a `transparent background` and `solid borders`.

The following example demonstrates the usage of each `fillMode` option:

{% meta height:350 %}
{% embed_file combobox/appearance/fill-mode/main.vue preview %}
{% embed_file combobox/appearance/fill-mode/main.js %}
{% endmeta %}


## Suggested Links

- [API Reference of the ComboBox]({% slug api_dropdowns_comboboxprops %})
- [ComboBox `size` options]({% slug api_dropdowns_comboboxprops %}#toc-size)
- [ComboBox `rounded` options]({% slug api_dropdowns_comboboxprops %}#toc-rounded)
- [ComboBox `fillMode` options]({% slug api_dropdowns_comboboxprops %}#toc-fillmode)
- [Creating Custom Styles with ThemeBuilder]({% slug themebuilder %})
