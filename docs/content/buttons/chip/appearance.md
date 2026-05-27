---
title: Appearance
description: "Add alternative styling options to the Kendo UI for Vue Native Chip in Vue projects."
slug: appearance_chip
position: 6
---

# Appearance

The `Chip` provides a predefined set of appearance options.

Apart from the default vision of the Chip, these alternative styling options enable you to configure each individual aspect of the component's appearance.

The current article provides details about how the component changes when the different configurations of its properties are applied. Here are the sections you can directly access:
* [Chip Configurator demo](#toc-configurator-demo)
* [Chip Sizes](#toc-size)
* [Chip Roundness](#toc-roundness)
* [Chip Fill Mode](#toc-fill-mode)
* [Chip Theme Colors](#toc-theme-colors)

## Configurator demo

With the following example, you can dynamically change the different appearance properties of the `Chip` and see how it changes.


{% meta height:350 %}
{% embed_file chip/appearance/configurator/main.vue preview %}
{% embed_file chip/appearance/configurator/main.js %}
{% embed_file shared/ChipStyleConfigurator.vue %}
{% endmeta %}


## Size

The size of the `Chip` is controlled through its [`size`]({% slug api_buttons_chipprops %}#toc-size) property. The values we can pass to the property are as follows:
- `small` — Sets the `padding` to `3px`.
- `medium` — Sets the `padding` to `4px`.
- `large` — Sets the `padding` to `5px`.

The following example demonstrates the usage of each `size` option:

{% meta height:120 %}
{% embed_file chip/appearance/size/main.vue preview %}
{% embed_file chip/appearance/size/main.js %}
{% endmeta %}


## Roundness

The roundness of the `Chip` is controlled through its [`rounded`]({% slug api_buttons_chipprops %}#toc-rounded) property. The values we can pass to the property are as follows:
- `none` — Sets no `border radius`.
- `small` — Sets the `border radius` to `1px`.
- `medium` — Sets the `border radius` to `2px`.
- `large` — Sets the `border radius` to `4px`.
- `full` — Sets the `border radius` to `9999px`.

The following example demonstrates the usage of each `rounded` option:

{% meta height:160 %}
{% embed_file chip/appearance/rounded/main.vue preview %}
{% embed_file chip/appearance/rounded/main.js %}
{% endmeta %}

## Fill Mode

The styling of the `Chip` is controlled through its [`fillMode`]({% slug api_buttons_chipprops %}#toc-fillmode) property. The values we can pass to the property are as follows:

- `solid` — Sets a `background` color and `solid borders`.
- `outline` — Sets a `transparent background` and `solid borders`.

The following example demonstrates the usage of each `fillMode` option:

{% meta height:120 %}
{% embed_file chip/appearance/fill-mode/main.vue preview %}
{% embed_file chip/appearance/fill-mode/main.js %}
{% endmeta %}

## Theme Colors

The color of the `Chip` is controlled through its [`themeColor`]({% slug api_buttons_chipprops %}#toc-themecolor) property.

- `base` — The color of the Chip will be based on the `base` theme color.
- `info` — The color of the Chip will be based on the `info` theme color.
- `success` — The color of the Chip will be based on the `success` theme color.
- `warning` — The color of the Chip will be based on the `warning` theme color.
- `error` — The color of the Chip will be based on the `error` theme color.

The following example demonstrates the usage of each `themeColor` option:

{% meta height:120 %}
{% embed_file chip/appearance/theme-colors/main.vue preview %}
{% embed_file chip/appearance/theme-colors/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Chip]({% slug api_buttons_chipprops %})
* [Chip `size` options]({% slug api_buttons_chipprops %}#toc-size)
* [Chip `rounded` options]({% slug api_buttons_chipprops %}#toc-rounded)
* [Chip `fillMode` options]({% slug api_buttons_chipprops %}#toc-fillmode)
* [Chip `themeColor` options]({% slug api_buttons_chipprops %}#toc-themecolor)
* [Creating Custom Styles with ThemeBuilder]({% slug themebuilder %})
