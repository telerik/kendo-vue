---
title: Appearance
description: "Add styling options to the Kendo UI for Vue Chart in Vue projects."
slug: appearance_chart_charts
position: 8
---

# Appearance

The colors of the Chart are derived from the active [Kendo UI for Vue theme](https://github.com/telerik/kendo-themes). For customization of the themes, refer to the [customizing themes]({% slug themesandstyles %}#toc-customizing-themes) article.

## Setting the Dimensions

By default, the Chart is 400px high and as wide as its container. To set the dimensions of the Chart, use inline styles and CSS.

{% meta height:265 %}
{% embed_file styling/dimensions/main.vue preview %}
{% embed_file styling/dimensions/main.js %}
{% endmeta %}

## Limiting the Displayed Range

To limit the range which is displayed by the Chart:

1. Set the [`min`]({% slug api_charts_chartcategoryaxisitemprops %}#toc-min) and [`max`]({% slug api_charts_chartcategoryaxisitemprops %}#toc-max) options of the category axis.
1. Enable [panning]({% slug api_charts_chartprops %}#toc-pannable) and [zooming]({% slug api_charts_chartprops %}#toc-zoomable), so that the user is able to see the rest of the data.

{% meta height:465 %}
{% embed_file styling/range/main.vue preview %}
{% embed_file styling/range/main.js %}
{% endmeta %}

## Using Pattern Fills

In addition to solid colors, the Chart series can also be filled with repeating patterns by using the series item [`pattern`]({% slug api_charts_chartseriesitemprops %}#toc-pattern)

> The pattern inherits the series as main [`color`]({% slug api_charts_chartseriesitemprops %}#toc-color) and accepts an optional background color.

The following customizable pattern fills are available:

-   [Crosshatch Pattern]({% slug api_charts_crosshatchpattern %})&mdash;Uses crisscrossing lines to form a grid-like pattern.
-   [Diagonal Stripes Pattern]({% slug api_charts_diagonalstripespattern %})&mdash;Applies diagonal lines across the series.
-   [Dots Pattern]({% slug api_charts_dotspattern %})&mdash;Fills the series with evenly spaced dots.
-   [Grid Pattern]({% slug api_charts_gridpattern %})&mdash;Renders a regular grid pattern.
-   [Vertical Stripes Pattern]({% slug api_charts_verticalstripespattern %})&mdash;Displays vertical stripes.

The following example demonstrates the usage of the pattern fills for series.

{% meta height:465 %}
{% embed_file styling/pattern-fills/main.vue preview %}
{% embed_file styling/pattern-fills/main.js %}
{% endmeta %}



## Suggested Links

* [API Reference of the Chart]({% slug api_charts %})
* [Creating Custom Styles with ThemeBuilder]({% slug themebuilder %})
