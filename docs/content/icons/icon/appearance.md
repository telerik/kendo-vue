---
title: Appearance
description: 'Learn how to set the color, size, and direction of the Kendo UI for Vue Native Icon.'
slug: appearance_icon
position: 2
---

# Appearance

The Icon provides various styling options that are related to its appearance.

> Kendo UI Icons version `^5.x.x` requires Kendo UI for Vue `v9.0.0` or later. For more information, refer to the [Icon Package Compatibility](slug:icons#icon-package-compatibility) section.

## Theme Color

In terms of the current theme, you can apply predefined theme colors to the Icon by using the [`themeColor`]({% slug api_common_iconthemecolor %}) property. To apply custom colors to the Icon, style it with CSS.

The available `themeColor` values are:

- `inherit` (Default)&mdash;Applies coloring based on the current color.
- `primary`&mdash;Applies coloring based on the primary theme color.
- `secondary`&mdash;Applies coloring based on the secondary theme color.
- `tertiary`&mdash; Applies coloring based on the tertiary theme color.
- `info`&mdash;Applies coloring based on the information theme color.
- `success`&mdash; Applies coloring based on the success theme color.
- `warning`&mdash; Applies coloring based on the warning theme color.
- `error`&mdash; Applies coloring based on the error theme color.
- `inverse`&mdash; Applies coloring based on the inverse theme color.

{% meta height:240 %}
{% embed_file font-icons/appearance/theme-color/main.vue preview %}
{% embed_file font-icons/appearance/theme-color/main.js %}
{% endmeta %}

## Size

You can apply predefined size options to the Icon by using the [`size`]({% slug api_common_iconsize %}) property. To apply custom sizes to the Icon, style it with CSS.

The available `size` values are:

- `default` (Default)&mdash;Font-size: 16px; Width: 16px; Height: 16px.
- `xsmall`&mdash;Font-size: 8px; Width: 8px; Height: 8px.
- `small`&mdash;Font-size: 12px; Width: 12px; Height: 12px.
- `medium`&mdash;Font-size: 32px; Width: 32px; Height: 32px.
- `large`&mdash;Font-size: 48px; Width: 48px; Height: 48px.
- `xlarge`&mdash;Font-size: 64px; Width: 64px; Height: 64px.

{% meta height:340 %}
{% embed_file font-icons/appearance/size/main.vue preview %}
{% embed_file font-icons/appearance/size/main.js %}
{% endmeta %}

## Orientation

The Icon allows you to invert it through an axis in different directions by using the [`flip`]({% slug api_common_iconflip %}) property.

The available `flip` values are:

- `default` (Default)&mdash;No flipping is applied.
- `horizontal`&mdash;Flips the icon in horizontal direction.
- `vertical`&mdash;Flips the icon in vertical direction.
- `both`&mdash;Flips the icon in both horizontal and vertical directions.

{% meta height:160 %}
{% embed_file font-icons/appearance/orientation/main.vue preview %}
{% embed_file font-icons/appearance/orientation/main.js %}
{% endmeta %}

## Suggested Links

- [API Reference of the Icon](slug:api_common_fonticonprops)
- [Icon List](slug:icon_list)
