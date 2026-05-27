---
title: Appearance
description: "Add alternative styling options to the Kendo UI for Vue Native DatePicker in Vue projects."
slug: appearance_datepicker
position: 6
---

# Appearance

The Kendo UI for Vue Native DatePicker provides a predefined set of appearance options.

Apart from the default vision of the `DatePicker`, these alternative styling options enable you to configure each individual aspect of the component's appearance.

The current article provides details about how the component changes when the different configurations of its properties are applied. Here are the sections you can directly access:

* [DatePicker Configurator demo](#toc-configurator-demo)
* [DatePicker Sizes](#toc-size)
* [DatePicker Roundness](#toc-roundness)
* [DatePicker Fill Mode](#toc-fill-mode)

## Configurator demo

The following example demonstrates configuring different aspects of a `DatePicker` appearance through a configurator.

{% meta height:540 %}
{% embed_file datepicker/appearance/configurator/main.vue preview %}
{% embed_file datepicker/appearance/configurator/main.js %}
{% embed_file shared/DateInputsStyleConfigurator.vue  %}
{% endmeta %}

## Size

The size of the `DatePicker` is controlled through its [`size`]({% slug api_dateinputs_datepickerprops %}#toc-size) property. The values we can pass to the property are as follows:
- `small` — Sets the `padding` to `2px` and `8px`.
- `medium` — Sets the `padding` to `4px` and `8px`.
- `large` — Sets the `padding` to `6px` and `8px`.

The following example demonstrates the usage of each `size` option:

{% meta height:480 %}
{% embed_file datepicker/appearance/size/main.vue preview %}
{% embed_file datepicker/appearance/size/main.js %}
{% endmeta %}

## Roundness

The roundness of the `DatePicker` is controlled through its [`rounded`]({% slug api_dateinputs_datepickerprops %}#toc-rounded) property. The values we can pass to the property are as follows:
- `none` — Sets no `border radius`.

- `small` — Sets the `border radius` to `1px`.
- `medium` — Sets the `border radius` to `2px`.
* `large` — Sets the `border radius` to `4px`.
- `full` — Sets the `border radius` to `9999px`.

The following example demonstrates the usage of each `rounded` option:

{% meta height:480 %}
{% embed_file datepicker/appearance/rounded/main.vue preview %}
{% embed_file datepicker/appearance/rounded/main.js %}
{% endmeta %}

## Fill Mode

The styling of the `DatePicker` is controlled through its [`fillMode`]({% slug api_dateinputs_datepickerprops %}#toc-fillmode) property. The values we can pass to the property are as follows:

- `solid` — Sets a `background` color and `solid borders`.
- `flat` — Sets `transparent background and borders` in default state, and `background color` in focused state.
- `outline` — Sets a `transparent background` and `solid borders`.

The following example demonstrates the usage of each `fillMode` option:

{% meta height:340 %}
{% embed_file datepicker/appearance/fill-mode/main.vue preview %}
{% embed_file datepicker/appearance/fill-mode/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the DatePicker]({% slug api_dateinputs_datepickerprops %})
* [DatePicker `size` options]({% slug api_dateinputs_datepickerprops %}#toc-size)
* [DatePicker `rounded` options]({% slug api_dateinputs_datepickerprops %}#toc-rounded)
* [DatePicker `fillMode` options]({% slug api_dateinputs_datepickerprops %}#toc-fillmode)
* [Customize the Color Inside the DatePicker Popup]({% slug change-datepicker-popup-color %})
* [Creating Custom Styles with ThemeBuilder]({% slug themebuilder %})
