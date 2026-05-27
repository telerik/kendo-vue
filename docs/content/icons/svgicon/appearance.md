---
title: Appearance
description: 'Learn how to set the color, size, and direction of the Kendo UI for Vue Native SVGIcon.'
slug: appearance_svgicon
position: 20
---

# Appearance

The SVGIcon provides various styling options that are related to its appearance.

> Kendo UI Icons version `^5.x.x` requires Kendo UI for Vue `v9.0.0` or later. For more information, refer to the [Icon Package Compatibility](slug:icons#icon-package-compatibility) section.

## Theme Color

In terms of the current theme, you can apply predefined theme colors to the SVGIcon by using the [`themeColor`]({% slug api_common_svgiconprops %}#toc-themecolor) property. To apply custom colors to the SVGIcon, style it with CSS.

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
{% embed_file svg-icons/appearance/theme-color/main.vue preview %}
{% embed_file svg-icons/appearance/theme-color/main.js %}
{% endmeta %}

## Size

You can apply predefined size options to the SVGIcon by using the [`size`]({% slug api_common_svgiconprops %}#toc-size) property. To apply custom sizes to the SVGIcon, style it with CSS.

The available `size` values are:

- `default` (Default)&mdash;Font-size: 16px; Width: 16px; Height: 16px.
- `xsmall`&mdash;Font-size: 8px; Width: 8px; Height: 8px.
- `small`&mdash;Font-size: 12px; Width: 12px; Height: 12px.
- `medium`&mdash;Font-size: 32px; Width: 32px; Height: 32px.
- `large`&mdash;Font-size: 48px; Width: 48px; Height: 48px.
- `xlarge`&mdash;Font-size: 64px; Width: 64px; Height: 64px.

{% meta height:310 %}
{% embed_file svg-icons/appearance/size/main.vue preview %}
{% embed_file svg-icons/appearance/size/main.js %}
{% endmeta %}

## Orientation

The SVGIcon allows you to invert it through an axis in different directions by using the [`flip`]({% slug api_common_svgiconprops %}#toc-flip) property.

The available `flip` values are:

- `default` (Default)&mdash;No flipping is applied.
- `horizontal`&mdash;Flips the icon in horizontal direction.
- `vertical`&mdash;Flips the icon in vertical direction.
- `both`&mdash;Flips the icon in both horizontal and vertical directions.

{% meta height:160 %}
{% embed_file svg-icons/appearance/orientation/main.vue preview %}
{% embed_file svg-icons/appearance/orientation/main.js %}
{% endmeta %}

## Variant

> Using the `variant` property requires `@progress/kendo-svg-icons` version `5.0.0` or later, as icon variant data is only available starting from that version.

You can render the SVGIcon component in different visual styles by using the `variant` property. The available values are `solid`, `outline`, and `duotone`.

When a variant is specified, the component uses the `variants` property of the [`SVGIcon`](slug:api_common_svgiconprops) object to render the corresponding path. If the requested variant is not present on the icon, the component falls back to the default `content` path.

The following example demonstrates the available `variant` values.

<demo metaUrl="icons/svg-icons/appearance/variant/" height="260"></demo>

## Suggested Links

- [API Reference of the SVGIcon](slug:api_common_svgiconprops)
- [SVGIcon List](slug:svgicon_list)
