---
title: Appearance
description: "Add alternative styling options to the Kendo UI for Vue Native Checkbox in Vue projects."
slug: appearance_checkbox
position: 7
---

# Appearance

The `CheckBox` provides a predefined set of appearance options.

Apart from the default vision of the `CheckBox`, these alternative styling options enable you to configure each individual aspect of the component's appearance. 

The current article provides details about how the component changes when the different configurations of its properties are applied. Here are the sections you can directly access:

* [CheckBox Configurator demo](#toc-configurator-demo)
* [CheckBox Sizes](#toc-size)
* [CheckBox Roundness](#toc-roundness)

## Configurator demo

The following example demonstrates configuring different aspects of a `CheckBox` appearance through a configurator.

{% meta %}
{% embed_file checkbox/appearance/configurator/main.vue preview %}
{% embed_file checkbox/appearance/configurator/main.js %}
{% embed_file shared/CheckboxStyleConfigurator.vue %}
{% endmeta %}


## Size

The size of the `CheckBox` is controlled through its [`size`]({% slug api_inputs_checkboxprops %}#toc-size) property. The values we can pass to the property are as follows:
- `small` — Sets the `width` and `height` of the component to `12px`.
- `medium` — Sets the `width` and `height` of the component to `16px`.
- `large` — Sets the `width` and `height` of the component to `24px`.

The following example demonstrates the usage of each `size` option: 

{% meta height:260 %}
{% embed_file checkbox/appearance/size/main.vue preview %}
{% embed_file checkbox/appearance/size/main.js %}
{% endmeta %}

## Roundness

The roundness of the `CheckBox` is controlled through its [`rounded`]({% slug api_inputs_checkboxprops %}#toc-rounded) property. The values we can pass to the property are as follows:
- `none` — Sets no `border radius`.

- `small` — Sets the `border radius` to `1px`.
- `medium` — Sets the `border radius` to `2px`.
* `large` — Sets the `border radius` to `4px`.

The following example demonstrates the usage of each `rounded` option: 

{% meta height:300 %}
{% embed_file checkbox/appearance/rounded/main.vue preview %}
{% embed_file checkbox/appearance/rounded/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Checkbox]({% slug api_inputs_checkboxprops %})
* [Checkbox `size` options]({% slug api_inputs_checkboxprops %}#toc-size)
* [Checkbox `rounded` options]({% slug api_inputs_checkboxprops %}#toc-rounded)
* [Creating Custom Styles with ThemeBuilder]({% slug themebuilder %})
