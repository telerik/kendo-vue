---
title: Appearance
description: "Add alternative styling options to the Kendo UI for Vue DropDownTree in Vue projects."
slug: appearance_dropdowntree
position: 70
---

# Appearance

The DropDownTree provides a predefined set of appearance options.

Apart from the default vision of the DropDownTree, these alternative styling options enable you to configure each individual aspect of the appearance of a DropDownTree.

- [`size`]({% slug api_dropdowns_dropdowntreeprops %}#toc-size)
- [`rounded`]({% slug api_dropdowns_dropdowntreeprops %}#toc-rounded)
- [`fillMode`]({% slug api_dropdowns_dropdowntreeprops %}#toc-fillmode)

The current article provides details about how the component changes when the different configurations of its properties are applied. Here are the sections you can directly access:

* [DropDownTree Configurator demo](#toc-configurator-demo)
* [DropDownTree Sizes](#toc-size)
* [DropDownTree Roundness](#toc-roundness)
* [DropDownTree Fill Mode](#toc-fill-mode)

## Configurator demo

The following example demonstrates configuring different aspects of a `DropDownTree` appearance through a configurator.

{% meta height:600 %}
{% embed_file dropdowntree/appearance/configurator/main.vue preview %}
{% embed_file dropdowntree/appearance/configurator/main.js %}
{% embed_file shared/DropDownStyleConfigurator.vue %}
{% embed_file shared/tree-data.js %}
{% embed_file shared/tree-data-operations.js %}
{% endmeta %}

## Size

The size of the `DropDownTree` is controlled through its [`size`]({% slug api_dropdowns_dropdowntreeprops %}#toc-size) property. The values we can pass to the property are as follows:
- `small` — Sets the `padding` to `2px` and `8px`.
- `medium` — Sets the `padding` to `4px` and `8px`.
- `large` — Sets the `padding` to `6px` and `8px`.

The following example demonstrates the usage of each `size` option: 

{% meta height:500 %}
{% embed_file dropdowntree/appearance/size/main.vue preview %}
{% embed_file dropdowntree/appearance/size/main.js %}
{% embed_file shared/DropDownStyleConfigurator.vue %}
{% embed_file shared/tree-data.js %}
{% embed_file shared/tree-data-operations.js %}
{% endmeta %}

## Roundness

The roundness of the `DropDownTree` is controlled through its [`rounded`]({% slug api_dropdowns_dropdowntreeprops %}#toc-rounded) property. The values we can pass to the property are as follows:
- `none` — Sets no `border radius`.

- `small` — Sets the `border radius` to `1px`.
- `medium` — Sets the `border radius` to `2px`.
* `large` — Sets the `border radius` to `4px`.
- `full` — Sets the `border radius` to `9999px`.

The following example demonstrates the usage of each `rounded` option: 

{% meta height:500 %}
{% embed_file dropdowntree/appearance/rounded/main.vue preview %}
{% embed_file dropdowntree/appearance/rounded/main.js %}
{% embed_file shared/DropDownStyleConfigurator.vue %}
{% embed_file shared/tree-data.js %}
{% embed_file shared/tree-data-operations.js %}
{% endmeta %}

## Fill Mode

The styling of the `DropDownTree` is controlled through its [`fillMode`]({% slug api_dropdowns_dropdowntreeprops %}#toc-fillmode) property. The values we can pass to the property are as follows:

- `solid` — Sets a `background` color and `solid borders`.
- `flat` — Sets `transparent background and borders` in default state, and `background color` in focused state.
- `outline` — Sets a `transparent background` and `solid borders`.

The following example demonstrates the usage of each `fillMode` option: 

{% meta height:500 %}
{% embed_file dropdowntree/appearance/fill-mode/main.vue preview %}
{% embed_file dropdowntree/appearance/fill-mode/main.js %}
{% embed_file shared/DropDownStyleConfigurator.vue %}
{% embed_file shared/tree-data.js %}
{% embed_file shared/tree-data-operations.js %}
{% endmeta %}

## Suggested Links

- [API Reference of the DropDownTree]({% slug api_dropdowns_dropdowntreeprops %})
- [DropDownTree `size` options]({% slug api_dropdowns_dropdowntreeprops %}#toc-size)
- [DropDownTree `rounded` options]({% slug api_dropdowns_dropdowntreeprops %}#toc-rounded)
- [DropDownTree `fillMode` options]({% slug api_dropdowns_dropdowntreeprops %}#toc-fillmode)
- [Creating Custom Styles with ThemeBuilder]({% slug themebuilder %})
