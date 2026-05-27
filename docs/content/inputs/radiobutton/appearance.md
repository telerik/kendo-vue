---
title: Appearance
description: "Add alternative styling options to the Kendo UI for Vue RadioButton in Vue projects."
slug: appearance_radiobutton
position: 2
---

# Appearance

The `RadioButton` provides a predefined set of appearance options.

Apart from the default vision of the `RadioButton`, these alternative styling options enable you to configure each individual aspect of the component's appearance. 

The current article provides details about how the component changes when the different configurations of its properties are applied. Here are the sections you can directly access:

* [RadioButton Size](#toc-size)

## Size

The size of the `RadioButton` is controlled through its [`size`]({% slug api_inputs_radiobuttonprops %}#toc-size) property. The values we can pass to the property are as follows:
- `small` — Sets the `width` and `height` of the component to `12px`.
- `medium` — Sets the `width` and `height` of the component to `16px`.
- `large` — Sets the `width` and `height` of the component to `24px`.

The following example demonstrates the usage of each `size` option: 

{% meta height:250 %}
{% embed_file radiobutton/appearance/main.vue preview %}
{% embed_file radiobutton/appearance/main.js %}
{% embed_file shared/RadioButtonStyleConfigurator.vue %}
{% endmeta %}

## Suggested Links

* [API Reference of the RadioButton]({% slug api_inputs_radiobuttonprops %})
* [RadioButton `size` options]({% slug api_inputs_radiobuttonprops %}#toc-size)
* [Creating Custom Styles with ThemeBuilder]({% slug themebuilder %})
