---
title: Overview
page_title: Gauges Overview - Components - Kendo UI for Vue
description: "Learn about the Kendo UI wrappers for Vue, which are delivered by the Gauges package."
slug: overview_gauges_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/gauges/"
position: 0
---

<div><WrapperBanner link="/kendo-vue-ui/components/gauges/"></WrapperBanner></div>    

# Gauges Overview

The Gauges are wrapper components for building common gauge types.

<Row>
    <Column count={6}>
        <Component href="{% slug overview_lineargauge_wrapper %}">
         <svg id="lineargauge" viewbox="0 0 72 72">
            <defs>
                <linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="-3.8848" y1="56.8728" x2="74.8848" y2="11.3951">
                    <stop offset="0" style="stop-color:#FF9B5E"></stop>
                    <stop offset="8.618834e-02" style="stop-color:#FF8C5D"></stop>
                    <stop offset="0.1949" style="stop-color:#FF7F5B"></stop>
                    <stop offset="0.3" style="stop-color:#FF7B5B"></stop>
                    <stop offset="0.7" style="stop-color:#FF6358"></stop>
                    <stop offset="0.7835" style="stop-color:#FC5F59"></stop>
                    <stop offset="0.8701" style="stop-color:#F4525E"></stop>
                    <stop offset="0.9577" style="stop-color:#E63E65"></stop>
                    <stop offset="1" style="stop-color:#DD3169"></stop>
                </linearGradient>
            </defs>
            <path d="M30,33h12v36H30V33z M30,3h12v18H30V3z M18,24v6h30l6-6H18z"></path>
        </svg>
            <ComponentTitle>LinearGauge</ComponentTitle>
            <ComponentDescription>A component for representing values on a linear scale.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_radialgauge_wrapper %}">
        <svg id="radialgauge" viewBox="0 0 72 72">
          	<path d="M30.3,54h8.5L72,20.7v-8.5L30.3,54z M36,12c8.3,0,15.9,3.4,21.3,8.9l4.2-4.2C55.1,10.1,46,6,36,6  C16.1,6,0,22.1,0,42c0,9.2,3.5,17.5,9.1,23.9l4.2-4.2C8.8,56.4,6,49.5,6,42C6,25.4,19.4,12,36,12z M64.8,33.9  c0.7,2.6,1.2,5.3,1.2,8.1c0,7.5-2.8,14.4-7.4,19.6l4.2,4.2C68.5,59.5,72,51.2,72,42c0-4.5-0.9-8.9-2.4-12.9L64.8,33.9z"></path>         
        </svg>
            <ComponentTitle>RadialGauge</ComponentTitle>
            <ComponentDescription>A component for representing values on a radial scale.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_arcgauge_wrapper %}">
       <svg id="arcgauge" viewBox="0 0 24 24">
        <path fill="#808080" class="st0" d="M14,11l-2,2v4l2,2h2l2-2v-4l-2-2H14z M16,17h-2v-4h2V17z M6,11h5l0,2l-2,6l-2,0l1.8-6H6V11z M21.4,9.6L20,11
                c-1.8-2.4-4.7-4-8-4C6.5,7,2,11.5,2,17c0,0.5,0,1,0.1,1.5L0.2,19C0.1,18.4,0,17.7,0,17C0,10.4,5.4,5,12,5C15.8,5,19.2,6.8,21.4,9.6z
                M24,17c0,0.7-0.1,1.4-0.2,2l-1.9-0.5C22,18,22,17.5,22,17c0-1.5-0.3-2.9-0.9-4.2l1.5-1.5C23.5,13,24,14.9,24,17z"></path>
        </svg>
            <ComponentTitle>ArcGauge</ComponentTitle>
            <ComponentDescription>A component for representing values on an arc scale.</ComponentDescription>
        </Component>
    </Column>
</Row>

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates how to initialize the LinearGauge and RadialGauge.

{% meta height:750 %}
{% embed_file overview/basic-usage/main.vue preview %}
{% embed_file overview/basic-usage/main.js %}
{% endmeta %}

## Installation

To initialize the Gauges, either:

* [Use the CDN service]({% slug using_cdn %}), or
* [Use Webpack](#toc-initializing-with-webpack).

### Initializing with Webpack

1. Install Kendo UI and add a theme.

  ```sh
  npm install --save @progress/kendo-ui
  npm install --save @progress/kendo-theme-default
  ```

1. Install the Kendo UI Gauges package fro Vue.

  ```sh
  npm install --save @progress/kendo-gauges-vue-wrapper
  ```

  The package also exports the following wrappers for individual components:

    * ArcGauge
    * LinearGauge
    * RadialGauge

1. Import the Kendo UI packages to the App component. If you use the Kendo UI components more than once in your application, add all Kendo UI-related files to the `main.js` file. If you use the Kendo UI components once in your application, add the Kendo UI-related files the component where they will be referred.

  ```js-no-run
  import '@progress/kendo-ui' // This will import the entire Kendo UI library
  // As an alternative, you could import only the scripts that are used by a specific widget:
  // import '@progress/kendo-ui/js/kendo.dataviz.gauge' // Imports only the Gauges script and its dependencies

  import '@progress/kendo-theme-default/dist/all.css'

  import { LinearGauge,
            LinearGaugePointer,
            RadialGauge,
            RadialGaugePointer,
            ArcGauge,
            ArcGaugeColor,
            GaugesInstaller} from '@progress/kendo-gauges-vue-wrapper'

  Vue.use(GaugesInstaller)

  new Vue({
      el: '#app',
      components: {
            LinearGauge,
            LinearGaugePointer,
            RadialGauge,
            RadialGaugePointer,
            ArcGauge,
            ArcGaugeColor
      }
  })
  ```

## Suggested Links

* [Get Started with the ArcGauge]({% slug overview_arcgauge_wrapper %})
* [Get Started with the LinearGauge]({% slug overview_lineargauge_wrapper %})
* [Get Started with the RadialGauge]({% slug overview_radialgauge_wrapper %})
