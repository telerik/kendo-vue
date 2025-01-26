---
title: Overview
page_title: Charts Overview - Components - Kendo UI for Vue
description: "Learn about the Kendo UI wrappers for Vue which are delivered by the Charts package."
slug: overview_charts_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/charts/"
position: 0
---

<div><WrapperBanner link="/kendo-vue-ui/components/charts"></WrapperBanner></div>

# Charts Overview

The Charts are components for building common chart types.

The below code used to display the components' icons but after and update, Katana is throwing errors when applied.

<Row>
    <Column count={6}>
        <Component href="{% slug overview_chart_charts_wrapper %}">
       <svg id="bar" viewBox="0 0 72 72">
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#ffab09" />
                <stop offset="60%" stop-color="#ff6358" />
                </linearGradient>
            </defs>
            <path d="M0,60v6h66l6-6H0z M36,21h12v33H36V21z M54,6h12v48H54V6z M18,12h12v42H18V12z M0,27h12v27H0V27z" />
        </svg>
            <ComponentTitle>Chart</ComponentTitle>
            <ComponentDescription>A highly customizable chart of categorical, circular, freeform, and scatter series types.</ComponentDescription>
        </Component>
    </Column>    
    <Column count={6}>
        <Component href="{% slug overview_sparkline_charts_wrapper %}">
        <svg id="sparkline" viewBox="0 0 72 72">
        <path class="st0" d="M36,35.3l-12,12l-24-24v8.5l24,24l12-12l18,18l18-18v-8.5l-18,18L36,35.3z M51,32.3l-15-15L19.2,34.1l4.2,4.2
            L36,25.8l15,15l21-21v-8.5L51,32.3z M0,53.3v8.5l10.8-10.8l-4.2-4.2L0,53.3z" />
        </svg>
            <ComponentTitle>Sparkline</ComponentTitle>
            <ComponentDescription>A set of tiny charts without chart-specific elements, designed to be embedded in content.</ComponentDescription>
        </Component>
    </Column>    
    <Column count={6}>
        <Component href="{% slug overview_stockchart_charts_wrapper %}">
        <svg id="stock" viewBox="0 0 72 72">
        <path class="st0" d="M0,60v6h66l6-6H0z M36,27h12v9H36V27z M18,24h12v6H18V24z M0,27h12v15H0V27z M9,6l-6,6v12h6V6z M27,9l-6,6v6h6
            V9z M45,12l-6,6v6h6V12z M3,45h6v9H3V45z M21,33h6v12h-6V33z M54,33h12v6H54V33z M57,42h6v6h-6V42z M63,15l-6,6v9h6V15z M39,39h6v12
            h-6V39z"></path>
        </svg>
            <ComponentTitle>StockChart</ComponentTitle>
            <ComponentDescription>A specialized component for exploring financial time series.</ComponentDescription>
        </Component>
    </Column>
</Row>

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates how to initialize the Chart.

{% meta height:460 %}
{% embed_file overview/main.vue preview %}
{% embed_file overview/main.js %}
{% endmeta %}

## Installation

To initialize the Charts, either:

* [Use the CDN service]({% slug using_cdn %}), or
* [Use Webpack](#toc-initializing-with-webpack).

### Initializing with Webpack

1. Install Kendo UI and add a theme.

    ```sh
    npm install --save @progress/kendo-ui
    npm install --save @progress/kendo-theme-default
    ```

1. Install the Kendo UI Charts package for Vue.

    ```sh
    npm install --save @progress/kendo-charts-vue-wrapper
    ```

    The package also exports the following wrappers for individual components:

    * Chart
    * Sparkline
    * StockChart

1. Import the Kendo UI packages to the App component. If you use the Kendo UI components more than once in your application, add all Kendo UI-related files to the `main.js` file. If you use the Kendo UI components once in your application, add the Kendo UI-related files the component where they will be referred.

    ```js-no-run
    import '@progress/kendo-ui' // This will import the entire Kendo UI library
    // As an alternative, you could import only the scripts that are used by a specific widget:
    // import '@progress/kendo-ui/js/kendo.dataviz.chart' // Imports only the Chart script and its dependencies
    // import '@progress/kendo-ui/js/kendo.dataviz.sparkline' // Imports only the Sparkline script and its dependencies
    // import '@progress/kendo-ui/js/kendo.dataviz.stock' // Imports only the StockChart script and its dependencies

    import '@progress/kendo-theme-default/dist/all.css'

    import { Chart,
             ChartSeriesItem,
             Sparkline,
             SparklineSeriesItem,
             StockChart,
             ChartInstaller } from '@progress/kendo-charts-vue-wrapper'

    Vue.use(ChartInstaller)

    new Vue({
        el: '#app',
        components: {
            Chart,
            Sparkline,
            StockChart
        }
    })
    ```

## Suggested Links

* [Get Started with the Chart]({% slug overview_chart_charts_wrapper %})
* [Get Started with the Sparkline]({% slug overview_sparkline_charts_wrapper %})
* [Get Started with the StockChart]({% slug overview_stockchart_charts_wrapper %})
