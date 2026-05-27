---
title: Appearance
description: 'Add alternative styling options to the Kendo UI for Vue DropDownButton in Vue projects.'
slug: appearance_dropdownbutton
position: 6
---

# Appearance

The `DropDownButton` provides a predefined set of appearance options.

Apart from the default vision of the `DropDownButton`, these alternative styling options enable you to configure each individual aspect of the component's appearance.

The current article provides details about how the component changes when the different configurations of its properties are applied. Here are the sections you can directly access:

- [DropDownButton Configurator demo](#toc-configurator-demo)
- [DropDownButton Sizes](#toc-size)
- [DropDownButton Roundness](#toc-roundness)
- [DropDownButton Fill Mode](#toc-fill-mode)
- [DropDownButton Theme Colors](#toc-theme-colors)

## Configurator demo

The following example demonstrates configuring different aspects of a `DropDownButton` appearance through a configurator.

{% meta height:380 %}
{% embed_file dropdownbutton/appearance/configurator/main.vue preview %}
{% embed_file dropdownbutton/appearance/configurator/main.js %}
{% embed_file shared/ButtonsStyleConfigurator.vue %}
{% endmeta %}

## Size

The size of the `DropDownButton` is controlled through its [`size`]({% slug api_buttons_dropdownbuttonprops %}#toc-size) property. The values we can pass to the property are as follows:

- `small` — Sets the `padding` to `2px` and `8px`.
- `medium` — Sets the `padding` to `4px` and `8px`.
- `large` — Sets the `padding` to `6px` and `8px`.

The following example demonstrates the usage of each `size` option:

{% meta height:300 %}
{% embed_file dropdownbutton/appearance/size/main.vue preview %}
{% embed_file dropdownbutton/appearance/size/main.js %}
{% endmeta %}

## Roundness

The roundness of the `DropDownButton` is controlled through its [`rounded`]({% slug api_buttons_dropdownbuttonprops %}#toc-rounded) property. The values we can pass to the property are as follows:

- `none` — Sets no `border radius`.
- `small` — Sets the `border radius` to `1px`.
- `medium` — Sets the `border radius` to `2px`.
- `large` — Sets the `border radius` to `4px`.
- `full` — Sets the `border radius` to `9999px`.

The following example demonstrates the usage of each `rounded` option:

{% meta height:300 %}
{% embed_file dropdownbutton/appearance/rounded/main.vue preview %}
{% embed_file dropdownbutton/appearance/rounded/main.js %}
{% endmeta %}

## Fill Mode

The styling of the `DropDownButton` is controlled through its [`fillMode`]({% slug api_buttons_dropdownbuttonprops %}#toc-fillmode) property. The values we can pass to the property are as follows:

- `solid` — Sets a `background` color and `solid borders`.
- `flat` — Sets `transparent background and borders` in default state, and `background color` in focused state.
- `outline` — Sets a `transparent background` and `solid borders`.
- `link` — Sets `transparent background and borders`.

The following example demonstrates the usage of each `fillMode` option:

{% meta height:260 %}
{% embed_file dropdownbutton/appearance/fill-mode/main.vue preview %}
{% embed_file dropdownbutton/appearance/fill-mode/main.js %}
{% endmeta %}

## Theme Colors

The color of the `DropDownButton` is controlled through its [`themeColor`]({% slug api_buttons_dropdownbuttonprops %}#toc-themecolor) property.

- `base` — The color of the DropDownButton will be based on the `base` theme color.
- `primary` — The color of the DropDownButton will be based on the `primary` theme color.
- `secondary` — The color of the DropDownButton will be based on the `secondary` theme color.
- `tertiary` — The color of the DropDownButton will be based on the `tertiary` theme color.
- `info` — The color of the DropDownButton will be based on the `info` theme color.
- `success` — The color of the DropDownButton will be based on the `success` theme color.
- `warning` — The color of the DropDownButton will be based on the `warning` theme color.
- `error` — The color of the DropDownButton will be based on the `error` theme color.
- `inverse` — The color of the DropDownButton will be based on the `inverse` theme color.

The following example demonstrates the usage of each `themeColor` option:

{% meta height:340 %}
{% embed_file dropdownbutton/appearance/theme-colors/main.vue preview %}
{% embed_file dropdownbutton/appearance/theme-colors/main.js %}
{% endmeta %}

## Suggested Links

- [API Reference of the DropDownButton]({% slug api_buttons_dropdownbuttonprops %})
- [DropDownButton `size` options]({% slug api_buttons_dropdownbuttonprops %}#toc-size)
- [DropDownButton `rounded` options]({% slug api_buttons_dropdownbuttonprops %}#toc-rounded)
- [DropDownButton `fillMode` options]({% slug api_buttons_dropdownbuttonprops %}#toc-fillmode)
- [DropDownButton `themeColor` options]({% slug api_buttons_dropdownbuttonprops %}#toc-themecolor)
- [Creating Custom Styles with ThemeBuilder]({% slug themebuilder %})
