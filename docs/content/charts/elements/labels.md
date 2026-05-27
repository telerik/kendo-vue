---
title: Labels
description: "Customize the content and appearance of the series and axis labels of the Kendo UI for Vue Native Chart in Vue projects."
slug: labels_chart_charts
---

# Labels

The Kendo UI for Vue Native Chart enables you to set the appearance and customize the content of the series and axis labels.

## Setting the Appearance

You can control the appearance of the labels through the following properties:

* `background`
* `border`
* `color`
* `font`
* `margin`
* `padding`

The following example demonstrates how to customize the appearance of the axis label by using the [`ChartValueAxisLabels`]({% slug api_charts_chartvalueaxislabelsprops %}) component.



{% meta height:500 %}
{% embed_file elements/labels/style-axis/main.vue preview %}
{% embed_file elements/labels/style-axis/main.js %}
{% endmeta %}


The following example demonstrates how to customize the appearance of the series label by using the [`ChartSeriesLabels`]({% slug api_charts_chartserieslabelsprops %}) component.



{% meta height:500 %}
{% embed_file elements/labels/style-series/main.vue preview %}
{% embed_file elements/labels/style-series/main.js %}
{% endmeta %}


## Customizing the Content

Normally, the series and axis Chart labels display an unformatted numeric value or a category name.

You can override the Chart label content by:

* [Using format strings](#toc-using-format-strings)
* [Setting content callbacks](#toc-setting-content-callbacks)
* [Rendering custom visuals](#toc-rendering-custom-visuals)

### Using Format Strings

The Chart enables you to assign a format string for the label. For the full list of available formats, refer to the [kendo-intl library](https://github.com/telerik/kendo-intl/blob/master/docs/num-formatting/index.md#types-of-number-formats).

#### Formatting Labels as Currency Values

The following example demonstrates how to format the value axis labels as a currency value.

{% meta height:500 %}
{% embed_file elements/labels/style-currency-axis/main.vue preview %}
{% embed_file elements/labels/style-currency-axis/main.js %}
{% endmeta %}

The following example demonstrates how to format the series labels as a currency value.

{% meta height:500 %}
{% embed_file elements/labels/style-currency-series/main.vue preview %}
{% embed_file elements/labels/style-currency-series/main.js %}
{% endmeta %}

#### Formatting Placeholders

Format strings for series labels can contain multiple value placeholders&mdash;for example, an X and Y value for the Scatter series. The following table lists the available placeholders.

|Series Type  |Placeholders
|:---         |:---
|Area, Bar, Column, Funnel, Pyramid, Line, and Pie |{0}&mdash;value
|Box Plot     |<ul><li>{0}&mdash;lower</li> <li>{1}&mdash;q1</li> <li>{2}&mdash;median</li> <li>{3}&mdash;q3</li> <li>{4}&mdash;upper</li> <li>{5}&mdash;mean</li> <li>{6}&mdash;category</li></ul>
|Bubble|<ul><li>{0}&mdash;X value</li> <li>{1}&mdash;Y value</li> <li>{2}&mdash;size value</li> <li>{3}&mdash;category name</li></ul>
|Bullet|<ul><li>{0}&mdash;current</li> <li>{1}&mdash;target</li></ul>
|RangeBar and RangeArea|<ul><li>{0}&mdash;from</li> <li>{1}&mdash;to</li></ul>
|Scatter and ScatterLine|<ul><li>{0}&mdash;X value</li> <li>{1}&mdash;Y value</li></ul>
|Candlestick and OHLC|<ul><li>{0}&mdash;open value</li> <li>{1}&mdash;high value</li> <li>{2}&mdash;low value</li> <li>{3}&mdash;close value</li> <li>{4}&mdash;category name</li></ul>

The following example demonstrates how to use value placeholders for the Scatter series labels.

{% meta height:500 %}
{% embed_file elements/labels/style-scatter-series/main.vue preview %}
{% embed_file elements/labels/style-scatter-series/main.js %}
{% endmeta %}

### Setting Content Callbacks

If provided, a `content` function is called to compute the text of each label. The function receives different parameters depending on the context. For more information, refer to the documentation on [`ChartCategoryAxisLabelsProps`]({% slug api_charts_chartcategoryaxislabelsprops %}#toc-content), [`ChartValueAxisLabelsProps`]({% slug api_charts_chartvalueaxislabelsprops %}#toc-content), and [`ChartSeriesLabelsProps`]({% slug api_charts_chartserieslabelsprops %}#toc-content).

The following example demonstrates how to override the content of the axis labels.

{% meta height:500 %}
{% embed_file elements/labels/override-axis-labels/main.vue preview %}
{% embed_file elements/labels/override-axis-labels/main.js %}
{% endmeta %}

The following example demonstrates how to override the content of the series labels.

{% meta height:500 %}
{% embed_file elements/labels/override-series-labels/main.vue preview %}
{% embed_file elements/labels/override-series-labels/main.js %}
{% endmeta %}

### Rendering Custom Visuals

You can customize the rendering of labels by using a `visual` function. The function receives a single parameter of type [`AxisLabelVisualArgs`]({% slug api_charts_axislabelvisualargs %}) or [`SeriesLabelsVisualArgs`]({% slug api_charts_serieslabelsvisualargs %}), and returns a group of [Drawing primitives]({% slug basicshapes_drawing %}) to represent the label.

The following example demonstrates how to override the rendering of the axis labels.



{% meta height:500 %}
{% embed_file elements/labels/visual-axis/main.vue preview %}
{% embed_file elements/labels/visual-axis/main.js %}
{% endmeta %}


The following example demonstrates how to override the rendering of the series labels.



{% meta height:500 %}
{% embed_file elements/labels/visual-series/main.vue preview %}
{% embed_file elements/labels/visual-series/main.js %}
{% endmeta %}


## Suggested Links

* [Axes]({% slug axes_chart_charts %})
* [Chart Area]({% slug chartarea_chart_charts %})
* [Crosshairs]({% slug crosshairs_chart_charts %})
* [Error Bars]({% slug crosshairs_chart_charts %})
* [Legend]({% slug legend_chart_charts %})
* [Notes]({% slug notes_chart_charts %})
* [Panes]({% slug panes_chart_charts %})
* [Plot Area]({% slug plotarea_chart_charts %})
* [Plot Bands]({% slug plotbands_chart_charts %})
* [Selection]({% slug selection_chart_charts %})
* [Series]({% slug series_chart_charts %})
* [Title]({% slug title_chart_charts %})
* [Tooltip]({% slug tooltips_chart_charts %})
* [API Reference of the Chart]({% slug api_charts %})
