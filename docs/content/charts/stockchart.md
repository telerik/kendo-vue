---
title: StockChart
description: "Get an overview of the features the Kendo UI for Vue StockChart delivers and use the component in Vue projects."
slug: overview_stockchart_charts
position: 110
---

# Getting Started with Kendo UI for Vue StockChart

The Kendo UI for Vue StockChart is a specialized control for visualizing the price movement of a financial instrument over a certain period of time.

Generally, Stockcharts include extensive touch support and a navigator pane for easy browsing of extended time periods. 

The Kendo UI for Vue StockChart component is part of the Kendo UI for Vue library. It is distributed through NPM under the [kendo-vue-charts package](https://www.npmjs.com/package/@progress/kendo-vue-charts).

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates the StockChart in action.

{% meta height:500 %}
{% embed_file stock-chart/default/main.vue preview %}
{% embed_file stock-chart/default/main.js %}
{% embed_file shared/stock-data.json %}
{% endmeta %}

## Functionality and Features

In addition to its [individual features](#toc-navigator), the StockChart supports all configuration options of the [Chart]({% slug api_charts_chartprops %}).

### Navigator

The StockChart navigator represents a pane that is placed at the bottom of the chart and which can be used to change the date interval in the main panes.

> To limit the range that is displayed by the Chart, refer to the article on [appearance]({% slug appearance_chart_charts %}#toc-limiting-the-displayed-range).

To configure the navigator, use the [`ChartNavigator`]({% slug api_charts_chartnavigatorprops %}) component and its child components.

#### Loading on Demand

To load the main series data for the selected period on demand, use the [`onNavigatorFilter`]({% slug api_charts_stockchartprops %}#toc-onnavigatorfilter) event. The event object contains the start and end of the selected period. Since the navigator should not be re-rendered when the main series are filtered set the [`partialRedraw`]({% slug api_charts_stockchartprops %}#toc-partialredraw)property of the StockChart to `true`.

{% meta height:500 %}
{% embed_file stock-chart/filter-data/main.vue preview %}
{% embed_file stock-chart/filter-data/main.js %}
{% embed_file shared/stock-data.json %}
{% endmeta %}

#### Multiple Panes

Similar to the Chart component, the StockChart supports multiple panes and displays all additional panes above the navigator pane.

{% meta height:730 %}
{% embed_file stock-chart/multiple-panes/main.vue preview %}
{% embed_file stock-chart/multiple-panes/main.js %}
{% embed_file shared/stock-data.json %}
{% endmeta %}

## Suggested Links

* [API Reference of the Charts]({% slug api_charts %})
* [Troubleshooting]({% slug troubleshooting_charts %})
* [Glossary]({% slug glossary_charts %})
* [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})

