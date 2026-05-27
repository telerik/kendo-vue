---
title: Appearance
description: 'Specify the appearance of the Kendo UI for Vue Native BottomNavigation component.'
slug: appearance_bottomnavigation
position: 4
---

# Appearance

The `BottomNavigation` provides a predefined set of appearance options.

Apart from the default appearance of the `BottomNavigation`, the following styling options allow you to configure each individual aspect of the component's appearance.

The current article provides details about how the component changes when the different configurations of its properties are applied. Here are the sections you can directly access:

- [BottomNavigation Configurator demo](#toc-configurator-demo)
- [BottomNavigation Theme Color](#toc-theme-color)
- [BottomNavigation Fill Mode](#toc-fill-mode)

## Configurator demo

The following example demonstrates configuring different aspects of a `BottomNavigation` appearance using a configurator.

{% meta height:500 %}
{% embed_file bottomnavigation/appearance/main.vue preview %}
{% embed_file bottomnavigation/appearance/BottomNavigationStyleConfigurator.vue %}
{% embed_file bottomnavigation/appearance/main.js %}
{% endmeta %}

## Theme Color

The `BottomNavigation` allows you to specify its theme color by choosing a value from a pre-defined list.

The available [`themeColor`]({% slug api_layout_bottomnavigationprops %}#toc-themeColor) values are:

- `base` &mdash; Applies the base coloring.
- `primary` &mdash; Applies coloring based on the primary theme color.
- `secondary` &mdash; Applies coloring based on the secondary theme color.
- `tertiary` &mdash; Applies coloring based on the tertiary theme color.
- `inverse` &mdash; Applies coloring based on the inverted theme color.

Any other regular color can be applied via custom CSS styling by targeting the BottomNavigation through its `k-bottom-nav` CSS class.

{% meta height:380 %}
{% embed_file bottomnavigation/theme-color/main.vue preview %}
{% embed_file bottomnavigation/theme-color/BottomNavigationStyleConfigurator.vue %}
{% embed_file bottomnavigation/theme-color/main.js %}
{% endmeta %}

## Fill

The `BottomNavigation` enables you to set styling options and create solid or flat layout by setting the `fill` property.

The available [`fill`]({% slug api_layout_bottomnavigationprops %}#toc-fill) values are:

- `flat` &mdash; Sets the theme color as the text color. The background will be white.
- `solid` &mdash; Sets the theme color as a background color.

{% meta height:300 %}
{% embed_file bottomnavigation/fill/main.vue preview %}
{% embed_file bottomnavigation/fill/BottomNavigationStyleConfigurator.vue %}
{% embed_file bottomnavigation/fill/main.js %}
{% endmeta %}

## Suggested Links

- [API Reference of the BottomNavigationProps]({% slug api_layout_bottomnavigationprops %})
- [API Reference of the BottomNavigationItemProps]({% slug api_layout_bottomnavigationitemprops %})
- [Creating Custom Styles with ThemeBuilder]({% slug themebuilder %})
