---
title: Appearance
description: "Add alternative styling options to the Kendo UI for Vue MultiSelectTree in Vue projects."
slug: appearance_multiselecttree
position: 70
---

# Appearance

The `MultiSelectTree` provides a predefined set of appearance options.

Apart from the default vision of the `MultiSelectTree`, these alternative styling options enable you to configure each individual aspect of the component's appearance. 

The current article provides details about how the component changes when the different configurations of its properties are applied. Here are the sections you can directly access:

* [MultiSelectTree Configurator demo](#toc-configurator-demo)
* [MultiSelectTree Sizes](#toc-size)
* [MultiSelectTree Roundness](#toc-roundness)
* [MultiSelectTree Fill Mode](#toc-fill-mode)

## Configurator demo

The following example demonstrates configuring different aspects of a `MultiSelectTree` appearance through a configurator.

{% meta height:600 %}
{% embed_file multiselecttree/appearance/configurator/main.vue preview %}
{% embed_file multiselecttree/appearance/configurator/main.js %}
{% embed_file shared/DropDownStyleConfigurator.vue %}
{% embed_file shared/tree-data.js %}
{% embed_file shared/multiselecttree-data-operations.js %}
{% endmeta %}

## Size

The size of the `MultiSelectTree` is controlled through its [`size`]({% slug api_dropdowns_multiselecttreeprops %}#toc-size) property. The values we can pass to the property are as follows:
- `small` — Sets the `padding` to `2px` and `8px`.
- `medium` — Sets the `padding` to `4px` and `8px`.
- `large` — Sets the `padding` to `6px` and `8px`.

The following example demonstrates the usage of each `size` option: 

{% meta height:500 %}
{% embed_file multiselecttree/appearance/size/main.vue preview %}
{% embed_file multiselecttree/appearance/size/main.js %}
{% embed_file shared/DropDownStyleConfigurator.vue %}
{% embed_file shared/tree-data.js %}
{% embed_file shared/multiselecttree-data-operations.js %}
{% endmeta %}

## Roundness

The roundness of the `MultiSelectTree` is controlled through its [`rounded`]({% slug api_dropdowns_multiselecttreeprops %}#toc-rounded) property. The values we can pass to the property are as follows:
- `none` — Sets no `border radius`.

- `small` — Sets the `border radius` to `1px`.
- `medium` — Sets the `border radius` to `2px`.
* `large` — Sets the `border radius` to `4px`.
- `full` — Sets the `border radius` to `9999px`.

The following example demonstrates the usage of each `rounded` option: 

{% meta height:500 %}
{% embed_file multiselecttree/appearance/rounded/main.vue preview %}
{% embed_file multiselecttree/appearance/rounded/main.js %}
{% embed_file shared/DropDownStyleConfigurator.vue %}
{% embed_file shared/tree-data.js %}
{% embed_file shared/multiselecttree-data-operations.js %}
{% endmeta %}

## Fill Mode

The styling of the `MultiSelectTree` is controlled through its [`fillMode`]({% slug api_dropdowns_multiselecttreeprops %}#toc-fillmode) property. The values we can pass to the property are as follows:

- `solid` — Sets a `background` color and `solid borders`.
- `flat` — Sets `transparent background and borders` in default state, and `background color` in focused state.
- `outline` — Sets a `transparent background` and `solid borders`.

The following example demonstrates the usage of each `fillMode` option: 

{% meta height:500 %}
{% embed_file multiselecttree/appearance/fill-mode/main.vue preview %}
{% embed_file multiselecttree/appearance/fill-mode/main.js %}
{% embed_file shared/DropDownStyleConfigurator.vue %}
{% embed_file shared/tree-data.js %}
{% embed_file shared/multiselecttree-data-operations.js %}
{% endmeta %}

## Suggested Links

- [API Reference of the MultiSelectTree]({% slug api_dropdowns_multiselecttreeprops %})
- [MultiSelectTree `size` options]({% slug api_dropdowns_multiselecttreeprops %}#toc-size)
- [MultiSelectTree `rounded` options]({% slug api_dropdowns_multiselecttreeprops %}#toc-rounded)
- [MultiSelectTree `fillMode` options]({% slug api_dropdowns_multiselecttreeprops %}#toc-fillmode)
- [Creating Custom Styles with ThemeBuilder]({% slug themebuilder %})
