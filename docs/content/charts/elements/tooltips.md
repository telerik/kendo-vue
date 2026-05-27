---
title: Tooltips
description: "Configure the tooltips of the Kendo UI for Vue Native Chart in Vue projects."
slug: tooltips_chart_charts
---

# Tooltips

The Kendo UI for Vue Native Chart supports three types of tooltips.

The Chart tooltip types are:
* [Series tooltip]({% slug tooltips_chart_charts %}#series-tooltip)&mdash;A tooltip displayed for the hovered chart point.
* [Shared tooltip]({% slug tooltips_chart_charts %}#shared-tooltip)&mdash;A tooltip displayed for the hovered chart category.
* [Crosshair tooltip]({% slug tooltips_chart_charts %}#crosshair-tooltip)&mdash;A tooltip displayed for the axes crosshairs.

## Series Tooltip

The series tooltip is displayed when the user hovers over a point and is used to show the point values or any additional information. By default, the color of the tooltip matches the color of the point to help associate the tooltip with that point. It is also possible to set it to a specific color by using the [`background`]({% slug api_charts_charttooltipprops %}#toc-background) and [`border`]({% slug api_charts_charttooltipprops %}#toc-border) options.

### Tooltip configuration

To enable and configure the tooltip for all series, use the [`ChartTooltip`]({% slug api_charts_charttooltipprops %}) component. To enable and configure the tooltip for a specific series, use the [`ChartSeriesItemTooltip`]({% slug api_charts_chartseriesitemtooltipprops %}) component.

The following example demonstrates how to configure the tooltip globally and to override an option for a specific series.



{% meta height:465 %}
{% embed_file elements/tooltips/overview/main.vue preview %}
{% embed_file elements/tooltips/overview/main.js %}
{% endmeta %}


### Customizing Content

By default, the content of the tooltip is determined based on the point type. To customize the tooltip content, either:
* Use the [`format`]({% slug api_charts_charttooltipprops %}#toc-format) prop, or
* Specify a template through the [`render`]({% slug api_charts_charttooltipprops %}#toc-render) prop.

#### Using the format Option

The following example demonstrates how to customize the content of the tooltip through the `format` configuration.

{% meta height:465 %}
{% embed_file elements/tooltips/format/main.vue preview %}
{% embed_file elements/tooltips/format/main.js %}
{% endmeta %}


#### Specifying a Template

To specify a template, use the `render` prop of the [`ChartTooltip`]({% slug api_charts_charttooltipprops %}) or [`ChartSeriesItemTooltip`]({% slug api_charts_chartseriesitemtooltipprops %}) components.

The callback passed to the `render` props receives a single parameter - the context of the tooltip. When the `render` prop is defined on the `ChartTooltip` component, the context can be either of type [`SharedTooltipContext`]({% slug api_charts_sharedtooltipcontext %}) or [`TooltipContext`]({% slug api_charts_tooltipcontext %}) depending on whether the tooltip is [`shared`]({% slug tooltips_chart_charts %}#toc-sharedtooltip) or not. The type of context when defined on the `ChartSeriesItemTooltip` is always of type `TooltipContext`.

The following example demonstrates how to customize the content by using a `render` prop.

{% meta height:465 %}
{% embed_file elements/tooltips/template/main.vue preview %}
{% embed_file elements/tooltips/template/main.js %}
{% endmeta %}

## Shared Tooltip

The shared tooltip is displayed when the user hovers over a category and is used for Categorical charts. The shared tooltip shows a summary of all points in the hovered category. To enable the shared tooltip, use the `shared` option of the [`ChartTooltip`]({% slug api_charts_charttooltipprops %}#toc-shared) component.

The following example demonstrates how to enable the shared tooltip.

{% meta height:465 %}
{% embed_file elements/tooltips/one-tooltip/main.vue preview %}
{% embed_file elements/tooltips/one-tooltip/main.js %}
{% endmeta %}

<!-- ### Customizing Content

By default, the shared tooltip displays the category as a title and an item for each point in that category. To customize the content that is displayed for the points of a specific series, use the [`format`]({% slug api_charts_charttooltipprops %}#toc-format) option, or the template for the series. To customize the entire content, add a `render` prop to the [`ChartTooltip`]({% slug api_charts_charttooltipprops %}) component.

The callback function receives a single parameter of type [`SharedTooltipContext`]({% slug api_charts_sharedtooltipcontext %}).

```jsx
import {
    Chart,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartTooltip,
    ChartSeries,
    ChartSeriesItem
} from '@progress/kendo-vue-charts';

const seriesData = [1, 2, 3];
const categories = ['A', 'B', 'C'];

const SharedTooltip = (props) => {
    const { category, points } = props;

    return (
        <div>
            <div>{category}</div>
            {points.map((point) => (<div>{point.series.name} : {point.value}</div>))}
        </div>
    );
};

const sharedTooltipRender = (context) => (<SharedTooltip {...context} />);

const ChartContainer = () => (
    <Chart>
        <ChartTooltip shared={true} render={sharedTooltipRender} />
        <ChartCategoryAxis>
          <ChartCategoryAxisItem categories={categories} />
        </ChartCategoryAxis>
        <ChartSeries>
          <ChartSeriesItem name="A" data={seriesData} />
          <ChartSeriesItem name="B" data={seriesData} />
        </ChartSeries>
    </Chart>
);

ReactDOM.render(
    <ChartContainer />,
    document.querySelector('my-app')
);
``` -->

## Crosshair Tooltip

The crosshair tooltips are displayed next to the axes crosshairs and show the current value of the crosshairs. To enable the crosshair tooltip, use the specific axis crosshair-tooltip component.

### Using in Categorical Charts

The following example demonstrates how to enable the crosshair tooltips for the Categorical charts.

{% meta height:465 %}
{% embed_file elements/tooltips/categorical/main.vue preview %}
{% embed_file elements/tooltips/categorical/main.js %}
{% endmeta %}

### Using in Scatter Charts

The following example demonstrates how to enable the crosshair tooltips for the Scatter charts.

{% meta height:465 %}
{% embed_file elements/tooltips/scatter/main.vue preview %}
{% embed_file elements/tooltips/scatter/main.js %}
{% endmeta %}

## Suggested Links

* [Axes]({% slug axes_chart_charts %})
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
* [API Reference of the Chart]({% slug api_charts %})
