---
title: Appearance
description: 'Specify the appearance of the Kendo UI for Vue Native AppBar component.'
slug: appearance_appbar
position: 4
---

# Appearance

The AppBar component has a settings property allowing you to define different theme colors. The [themeColor]({% slug api_layout_appbarprops %}#toc-themecolor) configuration will be applied as background color inside the component.

## Theme Color

The AppBar allows you to specify predefined theme colors.

The available [`themeColor`]({% slug api_layout_appbarprops %}#toc-themeColor) values are:

- `base`&mdash;Applies the base coloring.
- `primary`&mdash;Applies coloring based on primary theme color.
- `secondary`&mdash;Applies coloring based on secondary theme color.
- `tertiary`&mdash; Applies coloring based on tertiary theme color.
- `inverse`&mdash; Applies coloring based on inverted theme color.

> You can define a custom **AppBar** background color by using the `k-appbar` CSS class.

{% meta height:540 %}
{% embed_file appbar/theme-color/main.vue preview %}
{% embed_file appbar/theme-color/main.js %}
{% endmeta %}

## Suggested Links

- [API Reference of the AppBarProps]({% slug api_layout_appbarprops %})
- [Creating Custom Styles with ThemeBuilder]({% slug themebuilder %})
