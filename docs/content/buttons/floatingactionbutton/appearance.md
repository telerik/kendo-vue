---
title: Appearance
description: 'Specify the appearance of the Kendo UI for Vue FloatingActionButton component in Vue projects.'
slug: appearance_floatingactionbutton
position: 6
---

## Appearance

The FloatingActionButton provides a predefined set of appearance options.

Apart from the default vision of the FloatingActionButton, these alternative styling options enable you to configure each individual aspect of the component's appearance.

The current article provides details about how the component changes when the different configurations of its properties are applied. Here are the sections you can directly access:

- [FloatingActionButton Configurator demo](#toc-configurator-demo)
- [FloatingActionButton Sizes](#toc-size)
- [FloatingActionButton Roundness](#toc-roundness)
- [FloatingActionButton Theme Colors](#toc-theme-colors)

## Configurator demo

The following example demonstrates configuring different aspects of a FloatingActionButton appearance through a configurator.

{% meta height:420 %}
{% embed_file floatingactionbutton/appearance/configurator/main.vue preview %}
{% embed_file floatingactionbutton/appearance/configurator/main.js %}
{% embed_file shared/FloatingActionButtonConfigurator.vue %}
{% endmeta %}

## Size

The size of the FloatingActionButton is controlled through its [`size`]({% slug api_buttons_floatingactionbuttonprops %}#toc-size) property. The values we can pass to the property are as follows:

- `small`&mdash;Applies half of the default padding, e.g. `8px`.
- `medium`&mdash;Applies the default padding, e.g. `16px`.
- `large`&mdash;Applies one and one half of the default padding, e.g. `24px`.

The following example demonstrates the usage of each `size` option:

{% meta height:280 %}
{% embed_file floatingactionbutton/appearance/size/main.vue preview %}
{% embed_file floatingactionbutton/appearance/size/main.js %}
{% endmeta %}

## Roundness

The roundness of the FloatingActionButton is controlled through its [`rounded`]({% slug api_buttons_floatingactionbuttonprops %}#toc-rounded) property. The values we can pass to the property are as follows:

- `none` — Sets no `border radius`.
- `small` — Sets the `border radius` to `1px`.
- `medium` — Sets the `border radius` to `2px`.
- `large` — Sets the `border radius` to `4px`.
- `full` — Sets the `border radius` to `9999px`.

The following example demonstrates the usage of each `rounded` option:

{% meta height:300 %}
{% embed_file floatingactionbutton/appearance/rounded/main.vue preview %}
{% embed_file floatingactionbutton/appearance/rounded/main.js %}
{% endmeta %}

## Theme Colors

The theme colors of the FloatingActionButton are controlled through its [`themeColor`]({% slug api_buttons_floatingactionbuttonprops %}#toc-themeColor) property. The values we can pass to the property are as follows:

- `base`&mdash;Applies the base coloring.
- `primary`&mdash;Applies coloring based on the primary theme color.
- `secondary`&mdash;Applies coloring based on the secondary theme color.
- `tertiary`&mdash;Applies coloring based on the tertiary theme color.
- `inverse`&mdash;Applies coloring based on the inverted theme color.

The following example demonstrates the usage of each `themeColor` option:

{% meta height:280 %}
{% embed_file floatingactionbutton/appearance/theme/main.vue preview %}
{% embed_file floatingactionbutton/appearance/theme/main.js %}
{% endmeta %}

## Suggested Links

- [API Reference of the FloatingActionButton]({% slug api_buttons_floatingactionbuttonprops %})
- [FloatingActionButton `size` options]({% slug api_buttons_floatingactionbuttonprops %}#toc-size)
- [FloatingActionButton `rounded` options]({% slug api_buttons_floatingactionbuttonprops %}#toc-rounded)
- [FloatingActionButton `themeColor` options]({% slug api_buttons_floatingactionbuttonprops %}#toc-themecolor)
- [Creating Custom Styles with ThemeBuilder]({% slug themebuilder %})
