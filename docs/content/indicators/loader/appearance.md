---
title: Appearance
description: 'Specify the appearance of the Kendo UI for Vue Loader component in Vue projects.'
slug: appearance_loader
position: 2
---

# Appearance

The Loader component provides many predefined appearance options such as different type, sizes, theme colors.

## Theme Color

The Loader allows you to specify predefined theme colors.

The available [`themeColor`]({% slug api_indicators_loaderprops %}#toc-themeColor) values are:

- `base`&mdash;Applies base coloring.
- `primary`&mdash;Applies coloring based on primary theme color.
- `secondary`&mdash;Applies coloring based on secondary theme color.
- `tertiary`&mdash; Applies coloring based on tertiary theme color.

{% meta height:170 %}
{% embed_file loader/theme-color/main.vue preview %}
{% embed_file loader/theme-color/main.js %}
{% endmeta %}

## Type

The Loader allows you to set different types.

The available [`type`]({% slug api_indicators_loaderprops %}#toc-type) values are:

- `pulsing`&mdash; Applies pulsing type on the Loader.
- `infinite-spinner`&mdash; Applies infinite spinner type on the Loader.
- `converging-spinner`&mdash; Applies converging spinner type on the Loader.

{% meta height:130 %}
{% embed_file loader/type/main.vue preview %}
{% embed_file loader/type/main.js %}
{% endmeta %}

## Size

The Loader allows you to set different sizes.

The available [`size`]({% slug api_indicators_loaderprops %}#toc-size) values are:

- `small`
- `medium`
- `large`

{% meta height:130 %}
{% embed_file loader/size/main.vue preview %}
{% embed_file loader/size/main.js %}
{% endmeta %}

## Suggested Links

- [API Reference of the LoaderProps]({% slug api_indicators_loaderprops %})
- [Creating Custom Styles with ThemeBuilder]({% slug themebuilder %})
