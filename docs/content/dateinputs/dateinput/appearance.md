---
title: Appearance
description: "Add alternative styling options to the Kendo UI for Vue DateInput in Vue projects."
slug: appearance_dateinput
position: 6
---

# Appearance

The `DateInput` provides a predefined set of appearance options.

Apart from the default vision of the `DateInput`, these alternative styling options enable you to configure each individual aspect of the component's appearance.

The current article provides details about how the component changes when the different configurations of its properties are applied. Here are the sections you can directly access:

* [DateInput Configurator demo](#toc-configurator-demo)
* [DateInput Sizes](#toc-size)
* [DateInput Roundness](#toc-roundness)
* [DateInput Fill Mode](#toc-fill-mode)

## Configurator demo

The following example demonstrates configuring different aspects of a `DateInput` appearance through a configurator.

{% meta height:340 %}
{% embed_file dateinput/appearance/configurator/main.vue preview %}
{% embed_file dateinput/appearance/configurator/main.js %}
{% embed_file shared/DateInputsStyleConfigurator.vue %}
{% endmeta %}

## Size

The size of the `DateInput` is controlled through its [`size`]({% slug api_dateinputs_dateinputprops %}#toc-size) property. The values we can pass to the property are as follows:
- `small` — Sets the `padding` to `2px` and `8px`.
- `medium` — Sets the `padding` to `4px` and `8px`.
- `large` — Sets the `padding` to `6px` and `8px`.

The following example demonstrates the usage of each `size` option:

{% meta height:280 %}
{% embed_file dateinput/appearance/size/main.vue preview %}
{% embed_file dateinput/appearance/size/main.js %}
{% endmeta %}

## Roundness

The roundness of the `DateInput` is controlled through its [`rounded`]({% slug api_dateinputs_dateinputprops %}#toc-rounded) property. The values we can pass to the property are as follows:
- `none` — Sets no `border radius`.
- `small` — Sets the `border radius` to `1px`.
- `medium` — Sets the `border radius` to `2px`.
* `large` — Sets the `border radius` to `4px`.
- `full` — Sets the `border radius` to `9999px`.

The following example demonstrates the usage of each `rounded` option:

{% meta height:300 %}
{% embed_file dateinput/appearance/rounded/main.vue preview %}
{% embed_file dateinput/appearance/rounded/main.js %}
{% endmeta %}

## Fill Mode

The styling of the `DateInput` is controlled through its [`fillMode`]({% slug api_dateinputs_dateinputprops %}#toc-fillmode) property. The values we can pass to the property are as follows:

- `solid` — Sets a `background` color and `solid borders`.
- `flat` — Sets `transparent background and borders` in default state, and `background color` in focused state.
- `outline` — Sets a `transparent background` and `solid borders`.

The following example demonstrates the usage of each `fillMode` option:

{% meta height:350 %}
{% embed_file dateinput/appearance/fill-mode/main.vue preview %}
{% embed_file dateinput/appearance/fill-mode/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the DateInput]({% slug api_dateinputs_dateinputprops %})
* [DateInput `size` options]({% slug api_dateinputs_dateinputprops %}#toc-size)
* [DateInput `rounded` options]({% slug api_dateinputs_dateinputprops %}#toc-rounded)
* [DateInput `fillMode` options]({% slug api_dateinputs_dateinputprops %}#toc-fillmode)
* [Creating Custom Styles with ThemeBuilder]({% slug themebuilder %})
