---
title: Axes
description: "Provide a value scale for the plotted data series when working with Kendo UI for Vue Native Charts in Vue projects."
slug: axes_chart_charts
---

# Axes

The Kendo UI for Vue Native Chart axes provide a value scale for the plotted data series.

Depending on the [series types]({% slug area_seriestypes_charts %}) you use, the Chart delivers:

* A pair of category and value axes (in Categorical and Radar series).
* A pair of X and Y axes (in Scatter and Polar series).
* No axes (in Pie, Funnel and Pyramid series).

## Categorical Chart Axes

Category axes are declared through the [ChartCategoryAxisItem]({% slug api_charts_chartcategoryaxisitemprops %}) configuration components and placed in a `ChartCategoryAxis` collection. For more information on the available data-binding options, refer to the section on [binding categories]({% slug databinding_chart_charts %}#toc-binding-categories).

Value axes are declared through the [ChartValueAxisItem]({% slug api_charts_chartvalueaxisitemprops %}) configuration components and placed in a `ChartValueAxis` collection.

The following example demonstrates how to configure the Value and Category axes of the category Chart.



{% meta height:500 %}
{% embed_file elements/axes/categorical/main.vue preview %}
{% embed_file elements/axes/categorical/main.js %}
{% endmeta %}


### Displaying Time Series

The Category axis delivers the following dedicated features which are tailored for displaying time series and get automatically activated when the [axis is bound]({% slug databinding_chart_charts %}#toc-binding-categories) to [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) objects:

* [Automatic selection for the duration of the category time slots (minutes, hours, days, and so on)](#toc-selecting-time-intervals)
* [Aggregated series values for each time slot](#toc-aggregating-data)
* [Label formatting that matches the time slot duration](#toc-limiting-the-number-of-labels)

> To disable the Category axis features for displaying time series, set the axis [mode]({% slug api_charts_chartcategoryaxisitemprops %}#toc-type) to `"category"`.



{% meta height:500 %}
{% embed_file elements/axes/time-series/main.vue preview %}
{% embed_file elements/axes/time-series/main.js %}
{% embed_file shared/weather-data.js %}
{% endmeta %}


#### Selecting Time Intervals

Set the Category Chart to display time series, and the Category axis divides into time slots. Define a "base unit," such as hours, days, or weeks, to set the time scale for these slots. By default, the base unit matches the smallest time interval between the source dates. This approach ensures that all data points that are present in the original series will be displayed as they are.

You can use the [`baseUnit`]({% slug api_charts_chartcategoryaxisitemprops %}#toc-baseunit) setting to manually select a different time unit. To display every Nth base unit, set the [`baseUnitStep`]({% slug api_charts_chartcategoryaxisitemprops %}#toc-baseunitstep) option.

Setting the base unit to `"fit"` limits the total number of categories either to the set [`maxDateGroups`]({% slug api_charts_chartcategoryaxisitemprops %}#toc-maxdategroups) value or, otherwise, to the default `maxDateGroups` value of `10`.



{% meta height:650 %}
{% embed_file elements/axes/time-intervals/main.vue preview %}
{% embed_file elements/axes/time-intervals/main.js   %}
{% embed_file shared/weather-data.js %}
{% endmeta %}


#### Aggregating Data

Set the Category Chart to display time series, and it processes the data points for each time slot, producing a new point using an aggregate function.

By default, the [`aggregate`]({% slug api_charts_chartseriesitemprops %}#toc-aggregate) function returns the maximum value of the value fields. If the category contains only one point, `aggregate` returns the point without modification. Other aggregates, such as `count` and `sum`, produce their own value even if the category contains only one data point.

{% meta height:600 %}
{% embed_file elements/axes/date-aggregates/main.vue preview %}
{% embed_file elements/axes/date-aggregates/main.js %}
{% embed_file shared/weather-data.js %}
{% endmeta %}

#### Limiting the Number of Labels

Normally, each date interval gets its own label. Labels may overlap and become illegible in densely populated charts. To work around this issue, set an upper limit to the number of labels for display by using the [`maxDivisions`]({% slug api_charts_chartcategoryaxisitemprops %}#toc-maxdivisions) option.



{% meta height:500 %}
{% embed_file elements/axes/max-divisions/main.vue preview %}
{% embed_file elements/axes/max-divisions/main.js %}
{% embed_file shared/weather-data.js %}
{% endmeta %}


You can save space and rotate the labels at a fixed or at an optimal (`"auto"`) angle by using the [`labels.rotation`]({% slug api_charts_chartcategoryaxislabelsprops %}#toc-rotation) option.



{% meta height:500 %}
{% embed_file elements/axes/label-rotation/main.vue preview %}
{% embed_file elements/axes/label-rotation/main.js %}
{% embed_file shared/weather-data.js %}
{% endmeta %}

#### Displaying the Axis Date Range

To display the exact start and end date of the axis range, set the [`rangeLabels.visible`]({% slug api_charts_categoryaxisrangelabels %}#toc-visible) setting to `true`.

The range labels support the same settings as the axis labels. If an option is not set, it will default to the value set for the regular labels. For example [`rangeLabels.color`]({% slug api_charts_chartcategoryaxisitemprops %}#toc-rangelabels) defaults to the value of [`labels.color`]({% slug api_charts_chartcategoryaxisitemprops %}#toc-labels).

Toggle the range labels in the example below to see how they differ from the regular axis labels:

{% meta height:560 %}
{% embed_file elements/axes/range-labels/main.vue preview %}
{% embed_file elements/axes/range-labels/main.js %}
{% embed_file shared/covid-data.json %}
{% endmeta %}

## Scatter Chart Axes

X axes are declared through the [ChartXAxisItem]({% slug api_charts_chartxaxisitemprops %}) configuration components and placed in a `ChartXAxis` collection.

Y axes are declared through the [ChartYAxisItem]({% slug api_charts_chartyaxisitemprops %}) configuration components and placed in a `ChartYAxis` collection.

The following example demonstrates how to configure the X and Y axes of the Scatter Chart.

{% meta height:480 %}
{% embed_file elements/axes/scatter/main.vue preview %}
{% embed_file elements/axes/scatter/main.js %}
{% endmeta %}

### Displaying Dates

The Scatter Chart provides option for:

* [Using its X and Y axes to display dates](#toc-using-the-x-and-y-axes)
* [Selecting time intervals](#toc-selecting-time-intervals)

<!-- #### Using the X and Y Axes

The following example demonstrates how to use the X and Y axes of the Chart to display dates.



{% meta height:600 id:date-values %}
{% embed_file chart/axes/date-values/func/main.tsx preview %}
{% embed_file shared/weather-data.js %}
{% embed_file chart/axes/date-values/class/main.tsx preview %}
{% embed_file shared/weather-data.ts %}
{% endmeta %} -->


#### Selecting Time Intervals

Set the Scatter Chart to display time series, and its axis divides into time slots. Define a "base unit," such as hours, days, or weeks, to set the time scale for these slots.

You can use the [`baseUnit`]({% slug api_charts_chartcategoryaxisitemprops %}#toc-baseunit) setting to manually select a different time unit. To display every Nth base unit, set the [`baseUnitStep`]({% slug api_charts_chartcategoryaxisitemprops %}#toc-baseunitstep) option.

> The `baseUnit` setting for the Scatter Charts affects only the axis labels. This behavior contrasts the settings of the [Categorical Chart axes](#toc-categorical-chart-axes) that are used by the Chart to compute time series aggregates.

## Default Axis Configuration

You can also apply settings to all Chart axes, regardless of their kind, by using the [ChartAxisDefaults]({% slug api_charts_chartaxisdefaultsprops %}) component.

The ChartAxisDefaults component supports the following child components:

* [ChartAxisDefaultsCrosshair]({% slug api_charts_chartaxisdefaultscrosshairprops %})
* [ChartAxisDefaultsLabels]({% slug api_charts_chartaxisdefaultslabelsprops %})
* [ChartAxisDefaultsTitle]({% slug api_charts_chartaxisdefaultstitleprops %})

The following example demonstrates how to set the default axis color and label font.

{% meta height:480 %}
{% embed_file elements/axes/axis-config/main.vue preview %}
{% embed_file elements/axes/axis-config/main.js %}
{% endmeta %}

### Multiple Value Axis

The Kendo UI for Vue Chart supports multiple axis. This helps you leverage the best charting performance and visualize data on any number of axis to provide solid business reports for your users.

The example illustrates a weather report and includes information for the: max and min temperatures, wind speed and rainfall in mm. Note that each of them has a unique name which is set through the [name]({% slug api_charts_chartseriesitemprops %}#toc-name)  property. You can also populate the [axisCrossingValue]({% slug api_charts_chartcategoryaxisitemprops %}#toc-axiscrossingvalue) array to specify the alignment of the value axes.



{% meta height:480 %}
{% embed_file elements/axes/multi-axis/main.vue preview %}
{% embed_file elements/axes/multi-axis/main.js %}
{% endmeta %}


## Suggested Links

* [Chart Area]({% slug chartarea_chart_charts %})
* [Crosshairs]({% slug crosshairs_chart_charts %})
* [Error Bars]({% slug crosshairs_chart_charts %})
* [Labels]({% slug labels_chart_charts %})
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
