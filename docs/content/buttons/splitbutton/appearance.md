---
title: Appearance
description: 'Add alternative styling options to the Kendo UI for Vue SplitButton in Vue projects.'
slug: appearance_splitbutton
position: 6
---

# Appearance

The `SplitButton` provides a predefined set of appearance options.

Apart from the default vision of the `SplitButton`, these alternative styling options enable you to configure each individual aspect of the component's appearance.

The current article provides details about how the component changes when the different configurations of its properties are applied. Here are the sections you can directly access:

- [SplitButton Configurator demo](#toc-configurator-demo)
- [SplitButton Sizes](#toc-size)
- [SplitButton Roundness](#toc-roundness)
- [SplitButton Fill Mode](#toc-fill-mode)
- [SplitButton Theme Colors](#toc-theme-colors)

## Configurator demo

The following example demonstrates configuring different aspects of a `SplitButton` appearance through a configurator.

{% meta height:350 %}
{% embed_file splitbutton/appearance/configurator/main.vue preview %}
{% embed_file splitbutton/appearance/configurator/main.js %}
{% embed_file shared/ButtonsStyleConfigurator.vue %}
{% endmeta %}

## Size

The size of the `SplitButton` is controlled through its [`size`]({% slug api_buttons_splitbuttonprops %}#toc-size) property. The values we can pass to the property are as follows:

- `small` — Sets the `padding` to `2px` and `8px`.
- `medium` — Sets the `padding` to `4px` and `8px`.
- `large` — Sets the `padding` to `6px` and `8px`.

The following example demonstrates the usage of each `size` option:

{% meta height:260 %}
{% embed_file splitbutton/appearance/size/main.vue preview %}
{% embed_file splitbutton/appearance/size/main.js %}
{% endmeta %}

## Roundness

The roundness of the `SplitButton` is controlled through its [`rounded`]({% slug api_buttons_splitbuttonprops %}#toc-rounded) property. The values we can pass to the property are as follows:

- `none` — Sets no `border radius`.
- `small` — Sets the `border radius` to `1px`.
- `medium` — Sets the `border radius` to `2px`.
- `large` — Sets the `border radius` to `4px`.
- `full` — Sets the `border radius` to `9999px`.

The following example demonstrates the usage of each `rounded` option:

{% meta height:300 %}
{% embed_file splitbutton/appearance/rounded/main.vue preview %}
{% embed_file splitbutton/appearance/rounded/main.js %}
{% endmeta %}

## Fill Mode

The styling of the `SplitButton` is controlled through its [`fillMode`]({% slug api_buttons_splitbuttonprops %}#toc-fillmode) property. The values we can pass to the property are as follows:

- `solid` — Sets a `background` color and `solid borders`.
- `flat` — Sets `transparent background and borders` in default state, and `background color` in focused state.
- `outline` — Sets a `transparent background` and `solid borders`.
- `link` — Sets `transparent background and borders`.

The following example demonstrates the usage of each `fillMode` option:

{% meta height:260 %}
{% embed_file splitbutton/appearance/fill-mode/main.vue preview %}
{% embed_file splitbutton/appearance/fill-mode/main.js %}
{% endmeta %}

## Theme Colors

The color of the `SplitButton` is controlled through its [`themeColor`]({% slug api_buttons_splitbuttonprops %}#toc-themecolor) property.

- `base` — The color of the SplitButton will be based on the `base` theme color.
- `primary` — The color of the SplitButton will be based on the `primary` theme color.
- `secondary` — The color of the SplitButton will be based on the `secondary` theme color.
- `tertiary` — The color of the SplitButton will be based on the `tertiary` theme color.
- `info` — The color of the SplitButton will be based on the `info` theme color.
- `success` — The color of the SplitButton will be based on the `success` theme color.
- `warning` — The color of the SplitButton will be based on the `warning` theme color.
- `error` — The color of the SplitButton will be based on the `error` theme color.
- `inverse` — The color of the SplitButton will be based on the `inverse` theme color.

The following example demonstrates the usage of each `themeColor` option:

{% meta height:340 %}
{% embed_file splitbutton/appearance/theme-colors/main.vue preview %}
{% embed_file splitbutton/appearance/theme-colors/main.js %}
{% endmeta %}

## Suggested Links

- [API Reference of the SplitButton]({% slug api_buttons_splitbuttonprops %})
- [SplitButton `size` options]({% slug api_buttons_splitbuttonprops %}#toc-size)
- [SplitButton `rounded` options]({% slug api_buttons_splitbuttonprops %}#toc-rounded)
- [SplitButton `fillMode` options]({% slug api_buttons_splitbuttonprops %}#toc-fillmode)
- [SplitButton `themeColor` options]({% slug api_buttons_splitbuttonprops %}#toc-themecolor)
- [Creating Custom Styles with ThemeBuilder]({% slug themebuilder %})
