---
title: Sparkline
description: "Get an overview of the features the Kendo UI for Vue Sparkline delivers and use the component in Vue projects."
slug: overview_sparkline_charts
position: 105
---

# Getting Started with Kendo UI for Vue Sparkline

The Kendo UI for Vue Sparkline is a tiny chart without axes, coordinates, legends, titles, or other chart-specific elements.

<div data-component="StartFreeTrialSection"></div>

Generally, Sparklines are simple, word-sized graphics that can be embedded in tables, headlines, or chunks of text. The concept for their graphical representation was developed by [Edward Tufte](https://en.wikipedia.org/wiki/Edward_Tufte). The Kendo UI for Vue Sparkline is a version of the Kendo UI for Vue Chart which is tailored for this specific application. While the standard Kendo UI for Vue Chart component behaves like a block element, due to its rendering inside a `div` element to allow for an easy embedding in texts, the Sparkline behaves like an inline element due to its rendering inside a `span` element.

While, typically, Sparklines are line charts, they can also be rendered as the following Chart types:

* Line (default)
* Bar (Data Bars)
* Column
* Area
* Pie
* Bullet

The Kendo UI for Vue Sparkline component is part of the Kendo UI for Vue Charts library. It is distributed through NPM under the [kendo-vue-charts package](https://www.npmjs.com/package/@progress/kendo-vue-charts).

## Basic Usage

The following example demonstrates the Sparkline in action.

{% meta height:470 %}
{% embed_file sparkline/main.vue preview %}
{% embed_file sparkline/main.js %}
{% endmeta %}

## Functionality and Features

> The Sparkline supports all configuration options that are applicable for the Categorical series type of the Chart.

Sparklines also include shortcuts for setting the [`dataItems`]({% slug api_charts_sparklineprops %}#toc-dataitems) and [`type`]({% slug api_charts_sparklineprops %}#toc-type) series options.

## Suggested Links

* [API Reference of the Charts]({% slug api_charts %})
* [Troubleshooting]({% slug troubleshooting_charts %})
* [Glossary]({% slug glossary_charts %})
* [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})
