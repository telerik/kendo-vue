---
title: Overview
page_title: Sparkline Overview - Components - Kendo UI for Vue
description: "Get an overview of the features the Kendo UI Sparkline wrapper for Vue delivers and use the component in Vue projects."
slug: overview_sparkline_charts_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/charts/sparkline/"
position: 0
---
<div><WrapperBanner link="/kendo-vue-ui/components/charts/sparkline"></WrapperBanner></div>

# Sparkline Overview

The Sparkline is a very small chart, drawn without axes, coordinates, legends, titles or other chart-specific elements.

Generally, Sparklines are simple, word-sized graphics that can be embedded in tables, headlines, or chunks of text. The concept for their graphical representation was developed by [Edward Tufte](https://en.wikipedia.org/wiki/Edward_Tufte). The Kendo UI Sparkline is a version of the [Kendo UI Chart]({% slug overview_chart_charts_wrapper %}) which is tailored for this specific application. While the standard Kendo UI Chart component behaves like a block element, due to its rendering inside a `div` element to allow for an easy embedding in texts, the Sparkline behaves like an inline element due to its rendering inside a `span` element.

While, typically, Sparklines are line charts, they can also be rendered as the following Chart types:

* Line
* Bar
* Column
* Area
* Pie
* Bullet

The Sparkline wrapper for Vue is a client-side wrapper for the [Kendo UI Sparkline]({% slug api_chartcomponent_wrapper %}) widget.

> The Sparkline supports all configuration options that are applicable for the Categorical series type of the Chart.

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates the Sparkline in action.

{% meta height:460 %}
{% embed_file sparkline/main.vue preview %}
{% embed_file sparkline/main.js %}
{% endmeta %}


## Suggested Links

* [Kendo UI Sparkline for jQuery](https://docs.telerik.com/kendo-ui/controls/charts/sparkline/overview)
* [API Reference of the Sparkline Widget](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/sparkline)
