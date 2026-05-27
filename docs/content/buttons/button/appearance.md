---
title: Appearance
description: 'Add alternative styling options to the Kendo UI for Vue Button in Vue projects.'
slug: appearance_button
position: 6
---

# Appearance

The `Button` provides a predefined set of appearance options.

Apart from the default vision of the `Button`, these alternative styling options enable you to configure each individual aspect of the component's appearance.

The current article provides details about how the component changes when the different configurations of its properties are applied. Here are the sections you can directly access:

- [Button Configurator demo](#toc-configurator-demo)
- [Button Sizes](#toc-size)
- [Button Roundness](#toc-roundness)
- [Button Fill Mode](#toc-fill-mode)
- [Button Theme Colors](#toc-theme-colors)

## Configurator demo

The following example demonstrates configuring different aspects of a `Button` appearance through a configurator.

{% meta height:350 %}
{% embed_file button/appearance/configurator/main.vue preview %}
{% embed_file button/appearance/configurator/main.js %}
{% embed_file shared/ButtonStyleConfigurator.vue %}
{% endmeta %}

## Size

The size of the `Button` is controlled through its [`size`]({% slug api_buttons_buttonprops %}#toc-size) property. The values we can pass to the property are as follows:

- `small` — Sets the `padding` to `2px` and `8px`.
- `medium` — Sets the `padding` to `4px` and `8px`.
- `large` — Sets the `padding` to `6px` and `8px`.

The following example demonstrates the usage of each `size` option:

{% meta height:150 %}
{% embed_file button/appearance/size/main.vue preview %}
{% embed_file button/appearance/size/main.js %}
{% endmeta %}

## Roundness

The roundness of the `Button` is controlled through its [`rounded`]({% slug api_buttons_buttonprops %}#toc-rounded) property. The values we can pass to the property are as follows:

- `none` — Sets no `border radius`.
- `small` — Sets the `border radius` to `1px`.
- `medium` — Sets the `border radius` to `2px`.
- `large` — Sets the `border radius` to `4px`.
- `full` — Sets the `border radius` to `9999px`.

The following example demonstrates the usage of each `rounded` option:

{% meta height:200 %}
{% embed_file button/appearance/rounded/main.vue preview %}
{% embed_file button/appearance/rounded/main.js %}
{% endmeta %}

## Fill Mode

The styling of the `Button` is controlled through its [`fillMode`]({% slug api_buttons_buttonprops %}#toc-fillmode) property. The values we can pass to the property are as follows:

- `solid` — Sets a `background` color and `solid borders`.
- `flat` — Sets `transparent background and borders` in default state, and `background color` in focused state.
- `outline` — Sets a `transparent background` and `solid borders`.
- `link` — Sets `transparent background and borders`.

The following example demonstrates the usage of each `fillMode` option:

{% meta height:150 %}
{% embed_file button/appearance/fill-mode/main.vue preview %}
{% embed_file button/appearance/fill-mode/main.js %}
{% endmeta %}

## Theme Colors

The color of the `Button` is controlled through its [`themeColor`]({% slug api_buttons_buttonprops %}#toc-themecolor) property.

- `base` — The color of the Button will be based on the `base` theme color.
- `primary` — The color of the Button will be based on the `primary` theme color.
- `secondary` — The color of the Button will be based on the `secondary` theme color.
- `tertiary` — The color of the Button will be based on the `tertiary` theme color.
- `info` — The color of the Button will be based on the `info` theme color.
- `success` — The color of the Button will be based on the `success` theme color.
- `warning` — The color of the Button will be based on the `warning` theme color.
- `error` — The color of the Button will be based on the `error` theme color.
- `inverse` — The color of the Button will be based on the `inverse` theme color.

The following example demonstrates the usage of each `themeColor` option:

{% meta height:260 %}
{% embed_file button/appearance/theme-colors/main.vue preview %}
{% embed_file button/appearance/theme-colors/main.js %}
{% endmeta %}

## Suggested Links

- [API Reference of the Button]({% slug api_buttons_buttonprops %})
- [Button `size` options]({% slug api_buttons_buttonprops %}#toc-size)
- [Button `rounded` options]({% slug api_buttons_buttonprops %}#toc-rounded)
- [Button `fillMode` options]({% slug api_buttons_buttonprops %}#toc-fillmode)
- [Button `themeColor` options]({% slug api_buttons_buttonprops %}#toc-themecolor)
- [Creating Custom Styles with ThemeBuilder]({% slug themebuilder %})
