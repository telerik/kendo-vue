---
title: Appearance
description: 'Get started with the Kendo UI for Vue Native Avatar and set its shape and size.'
slug: appearance_avatar
position: 2
---

# Appearance

The `Аvatar` allows you to set different styles based on its content.

## Type

The available [type]({% slug api_layout_avatarprops %}#toc-type) are:

- `Image` &mdash;By passing an `img` element as child element of the Avatar.
- `Text avatar`&mdash;By passing an given string to be rendered as text (initials).
- `Icon avatar`&mdash;By passing `icon` to the Avatar component.

The following example demonstrates the `type` options of the Avatar.

{% meta height:180 %}
{% embed_file avatar/appearance/shapes/main.vue preview %}
{% embed_file avatar/appearance/shapes/main.js %}
{% endmeta %}

## Theme Color

The `Аvatar` allows you to specify predefined theme colors.

The available [`themeColor`]({% slug api_layout_avatarprops %}#toc-themeColor) values are:

- `base`&mdash;Applies base coloring.
- `primary`&mdash;Applies coloring based on primary theme color.
- `secondary`&mdash;Applies coloring based on secondary theme color.
- `tertiary`&mdash; Applies coloring based on tertiary theme color.

{% meta height:300 %}
{% embed_file avatar/appearance/theme-color/main.vue preview %}
{% embed_file avatar/appearance/theme-color/main.js %}
{% endmeta %}

## Roundness

To `Avatar` enables you to apply different `border radius` through the [rounded]({% slug api_layout_avatarprops %}#toc-rounded) property.

The available rounded options are:

- `none` — Does not set a border radius className.
- `small` — Sets the border radius to 1px.
- `medium` — Sets the border radius to 2px.
- `large` — Sets the border radius to 4px.
- `full` — Sets the border radius to 9999px.

The following example demonstrates how to customize the `roundness` of the Avatar.

{% meta height:180 %}
{% embed_file avatar/appearance/rounded/main.vue preview %}
{% embed_file avatar/appearance/rounded/main.js %}
{% endmeta %}

## Size

The `Avatar` allows you to set predefined or custom sizes.
To specify a predefined size, set the [size]({% slug api_layout_avatarprops %}#toc-size) property.

The available [size]({% slug api_layout_avatarprops %}#toc-size) values are:

- `small`
- `medium`
- `large`

To specify a custom Avatar size, use the `style` property.

{% meta height:220 %}
{% embed_file avatar/appearance/size/main.vue preview %}
{% embed_file avatar/appearance/size/main.js %}
{% endmeta %}

## Fill Mode

The styling of the `Avatar` is controlled through its [`fillMode`]({% slug api_layout_avatarprops %}#toc-fillmode) property. The values we can pass to the property are as follows:

- `solid` — Sets a `background` color and `solid borders`.
- `outline` — Sets a `transparent background` and `solid borders`.

The following example demonstrates the usage of each `fillMode` option:

{% meta height:180 %}
{% embed_file avatar/appearance/fill-mode/main.vue preview %}
{% embed_file avatar/appearance/fill-mode/main.js %}
{% endmeta %}

## Border

The Avatar allows you to specify whether or not to render an additional [`border`]({% slug api_layout_avatarprops %}#toc-border) around its content by using the border property. By default, `border` is set to `false`.

{% meta height:180 %}
{% embed_file avatar/appearance/border/main.vue preview %}
{% embed_file avatar/appearance/border/main.js %}
{% endmeta %}

## Suggested Links

- [API Reference of the Avatar Component]({% slug api_layout_avatarprops %})
- [Avatar `size` options]({% slug api_layout_avatarprops %}#toc-size)
- [Avatar `rounded` options]({% slug api_layout_avatarprops %}#toc-rounded)
- [Avatar `fillMode` options]({% slug api_layout_avatarprops %}#toc-fillmode)
- [Avatar `themeColor` options]({% slug api_layout_avatarprops %}#toc-themecolor)
- [Avatar `border` options]({% slug api_layout_avatarprops %}#toc-border)
- [Creating Custom Styles with ThemeBuilder]({% slug themebuilder %})
