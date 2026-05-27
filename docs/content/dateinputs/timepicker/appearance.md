---
title: Appearance
description: "Add alternative styling options to the Kendo UI for Vue TimePicker in Vue projects."
slug: appearance_timepicker
position: 6
---

# Appearance

The `TimePicker` provides a predefined set of appearance options.

Apart from the default vision of the `TimePicker`, these alternative styling options enable you to configure each individual aspect of the component's appearance.

The current article provides details about how the component changes when the different configurations of its properties are applied. Here are the sections you can directly access:

* [TimePicker Configurator demo](#toc-configurator-demo)
* [TimePicker Sizes](#toc-size)
* [TimePicker Roundness](#toc-roundness)
* [TimePicker Fill Mode](#toc-fill-mode)

## Configurator demo

The following example demonstrates configuring different aspects of a `TimePicker` appearance through a configurator.

{% meta height:620 %}
{% embed_file timepicker/appearance/configurator/main.vue preview %}
{% embed_file timepicker/appearance/configurator/main.js %}
{% embed_file shared/DateInputsStyleConfigurator.vue %}
{% endmeta %}


## Size

The size of the `TimePicker` is controlled through its [`size`]({% slug api_dateinputs_timepickerprops %}#toc-size) property. The values we can pass to the property are as follows:
- `small` — Sets the `padding` to `2px` and `8px`.
- `medium` — Sets the `padding` to `4px` and `8px`.
- `large` — Sets the `padding` to `6px` and `8px`.

The following example demonstrates the usage of each `size` option:

{% meta height:520 %}
{% embed_file timepicker/appearance/size/main.vue preview %}
{% embed_file timepicker/appearance/size/main.js %}
{% endmeta %}

## Roundness

The roundness of the `TimePicker` is controlled through its [`rounded`]({% slug api_dateinputs_timepickerprops %}#toc-rounded) property. The values we can pass to the property are as follows:
- `none` — Sets no `border radius`.

- `small` — Sets the `border radius` to `1px`.
- `medium` — Sets the `border radius` to `2px`.
* `large` — Sets the `border radius` to `4px`.
- `full` — Sets the `border radius` to `9999px`.

The following example demonstrates the usage of each `rounded` option:

{% meta height:520 %}
{% embed_file timepicker/appearance/rounded/main.vue preview %}
{% embed_file timepicker/appearance/rounded/main.js %}
{% endmeta %}

## Fill Mode

The styling of the `TimePicker` is controlled through its [`fillMode`]({% slug api_dateinputs_timepickerprops %}#toc-fillmode) property. The values we can pass to the property are as follows:

- `solid` — Sets a `background` color and `solid borders`.
- `flat` — Sets `transparent background and borders` in default state, and `background color` in focused state.
- `outline` — Sets a `transparent background` and `solid borders`.

The following example demonstrates the usage of each `fillMode` option:

{% meta height:520 %}
{% embed_file timepicker/appearance/fill-mode/main.vue preview %}
{% embed_file timepicker/appearance/fill-mode/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the TimePicker]({% slug api_dateinputs_timepickerprops %})
* [TimePicker `size` options]({% slug api_dateinputs_timepickerprops %}#toc-size)
* [TimePicker `rounded` options]({% slug api_dateinputs_timepickerprops %}#toc-rounded)
* [TimePicker `fillMode` options]({% slug api_dateinputs_timepickerprops %}#toc-fillmode)
* [Creating Custom Styles with ThemeBuilder]({% slug themebuilder %})
