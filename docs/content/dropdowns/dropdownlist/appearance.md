---
title: Appearance
description: "Add alternative styling options to the Kendo UI for Vue Native DropDownList in Vue projects."
slug: appearance_dropdownlist
position: 70
---

# Appearance

The Kendo UI for Vue DropdownList provides a predefined set of appearance options.

Apart from the default vision of the `DropDownList`, these alternative styling options enable you to configure each individual aspect of the component's appearance.

The current article provides details about how the component changes when the different configurations of its properties are applied. Here are the sections you can directly access:

* [DropDownList Configurator demo](#toc-configurator-demo)
* [DropDownList Sizes](#toc-size)
* [DropDownList Roundness](#toc-roundness)
* [DropDownList Fill Mode](#toc-fill-mode)

## Configurator demo

The following example demonstrates configuring different aspects of a `DropDownList` appearance through a configurator.

{% meta height:460 %}
{% embed_file dropdownlist/appearance/configurator/main.vue preview %}
{% embed_file dropdownlist/appearance/configurator/main.js %}
{% embed_file shared/DropDownStyleConfigurator.vue %}
{% endmeta %}


## Size

The size of the `DropDownList` is controlled through its [`size`]({% slug api_dropdowns_dropdownlistprops %}#toc-size) property. The values we can pass to the property are as follows:
- `small` — Sets the `padding` to `2px` and `8px`.
- `medium` — Sets the `padding` to `4px` and `8px`.
- `large` — Sets the `padding` to `6px` and `8px`.

The following example demonstrates the usage of each `size` option:

{% meta height:280 %}
{% embed_file dropdownlist/appearance/size/main.vue preview %}
{% embed_file dropdownlist/appearance/size/main.js %}
{% endmeta %}

## Roundness

The roundness of the `DropDownList` is controlled through its [`rounded`]({% slug api_dropdowns_dropdownlistprops %}#toc-rounded) property. The values we can pass to the property are as follows:
- `none` — Sets no `border radius`.
- `small` — Sets the `border radius` to `1px`.
- `medium` — Sets the `border radius` to `2px`.
- `large` — Sets the `border radius` to `4px`.
- `full` — Sets the `border radius` to `9999px`.

The following example demonstrates the usage of each `rounded` option:

{% meta height:300 %}
{% embed_file dropdownlist/appearance/rounded/main.vue preview %}
{% embed_file dropdownlist/appearance/rounded/main.js %}
{% endmeta %}

## Fill Mode

The styling of the `DropDownList` is controlled through its [`fillMode`]({% slug api_dropdowns_dropdownlistprops %}#toc-fillmode) property. The values we can pass to the property are as follows:

- `solid` — Sets a `background` color and `solid borders`.
- `flat` — Sets `transparent background and borders` in default state, and `background color` in focused state.
- `outline` — Sets a `transparent background` and `solid borders`.

The following example demonstrates the usage of each `fillMode` option:

{% meta height:350 %}
{% embed_file dropdownlist/appearance/fill-mode/main.vue preview %}
{% embed_file dropdownlist/appearance/fill-mode/main.js %}
{% endmeta %}


## Suggested Links

- [API Reference of the DropDownList]({% slug api_dropdowns_dropdownlistprops %})
- [DropDownList `size` options]({% slug api_dropdowns_dropdownlistprops %}#toc-size)
- [DropDownList `rounded` options]({% slug api_dropdowns_dropdownlistprops %}#toc-rounded)
- [DropDownList `fillMode` options]({% slug api_dropdowns_dropdownlistprops %}#toc-fillmode)
- [Creating Custom Styles with ThemeBuilder]({% slug themebuilder %})
