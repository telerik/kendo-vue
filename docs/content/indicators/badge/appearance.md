---
title: Appearance
description: 'Specify the appearance of the Kendo UI for Vue Badge component in Vue projects.'
slug: appearance_badge
position: 4
---

# Kendo UI for Vue Badge Appearance Configuration

The `Badge` and `BadgeContainer` component provides many predefined appearance options such as different shapes, sizes, theme colors and optional cutout borders.

## Theme Color

The **Badge** and **BadgeContainer** allows you to specify predefined theme colors.

The available [`themeColor`]({% slug api_indicators_badgeprops %}#toc-themeColor) values are:

- `base`&mdash;Applies coloring based on base theme color.
- `primary`&mdash;Applies coloring based on primary theme color.
- `secondary`&mdash;Applies coloring based on secondary theme color.
- `tertiary`&mdash; Applies coloring based on tertiary theme color.
- `info`&mdash;Applies coloring based on info theme color.
- `success`&mdash; Applies coloring based on success theme color.
- `warning`&mdash; Applies coloring based on warning theme color.
- `error`&mdash; Applies coloring based on error theme color.

{% meta height:170 %}
{% embed_file badge/theme-color/main.vue preview %}
{% embed_file badge/theme-color/main.js %}
{% endmeta %}

## Rounded

The **Badge** and **BadgeContainer** components allow you to set its roundness and thus style it in different shapes.

The available [`rounded`]({% slug api_indicators_badgeprops %}#toc-rounded) values are:

- `none`&mdash;Does not set a `border radius` className.
- `small`&mdash;Sets the `border radius` to `1px`.
- `medium`&mdash;Sets the `border radius` to `2px`.
- `large`&mdash;Sets the `border radius` to `4px`.
- `full`&mdash;Sets the `border radius` to `4px`.

{% meta height:130 %}
{% embed_file badge/rounded/main.vue preview %}
{% embed_file badge/rounded/main.js %}
{% endmeta %}

## Size

The **Badge** and **BadgeContainer** allow you to set different sizes to the output badge.

The available [`size`]({% slug api_indicators_badgeprops %}#toc-size) values are:

- `small` &mdash; Sets the `padding` to `2px` and `8px`.
- `medium` &mdash; Sets the `padding` to `4px` and `8px`.
- `large` &mdash; Sets the `padding` to `6px` and `8px`.

{% meta height:130 %}
{% embed_file badge/size/main.vue preview %}
{% embed_file badge/size/main.js %}
{% endmeta %}

## Fill

The **Badge** and **BadgeContainer** components enable you to set styling options and create solid or outline badges by setting the `fill` property.

The available [`fill`]({% slug api_indicators_badgeprops %}#toc-fill) values are:

- `solid`&mdash;Sets a `background` color and `solid borders`.
- `outline`&mdash;Sets a `transparent background` and `solid borders`.

{% meta height:130 %}
{% embed_file badge/fill/main.vue preview %}
{% embed_file badge/fill/main.js %}
{% endmeta %}

## Cutout Border

You can specify whether or not to render an additional "cutout" border around the content for the **Badge** or **BadgeContainer**.

The available [`cutoutBorder`]({% slug api_indicators_badgeprops %}#toc-cutoutBorder) values are:

- `false`
- `true`

{% meta height:110 %}
{% embed_file badge/cutout-border/main.vue preview %}
{% embed_file badge/cutout-border/main.js %}
{% endmeta %}

## Suggested Links

- [API Reference of the BadgeContainer]({% slug api_indicators_badgecontainer %})
- [API Reference of the BadgeContainerProps]({% slug api_indicators_badgecontainerprops %})
- [API Reference of the Badge]({% slug api_indicators_badge %})
- [API Reference of the BadgeProps]({% slug api_indicators_badgeprops %})
- [Creating Custom Styles with ThemeBuilder]({% slug themebuilder %})
