---
title: Overview
description: "Get started with the Kendo UI for Vue Native Gauges package and learn more about how to use the Gauges components in Vue projects."
slug: overview_gauges
position: 0
---

# Kendo UI for Vue Native Gauges Overview

The Kendo UI for Vue Native Gauges provide a set of Vue components for building common gauge types.

The Gauges components are part of the Kendo UI for Vue Native library which provides native components for the Vue ecosystem and are available under the [kendo-vue-gauges NPM package](https://www.npmjs.com/package/@progress/kendo-vue-gauges).

<div data-component="StartFreeTrialSection"></div>

<Row>
    <Column count={6}>
        <Component href="{% slug overview_arcgauge_gauges %}">
        <svg id="arcgauge" viewBox="0 0 24 24">
            <path class="st0" d="M14,11l-2,2v4l2,2h2l2-2v-4l-2-2H14z M16,17h-2v-4h2V17z M6,11h5l0,2l-2,6l-2,0l1.8-6H6V11z M21.4,9.6L20,11
                c-1.8-2.4-4.7-4-8-4C6.5,7,2,11.5,2,17c0,0.5,0,1,0.1,1.5L0.2,19C0.1,18.4,0,17.7,0,17C0,10.4,5.4,5,12,5C15.8,5,19.2,6.8,21.4,9.6z
                M24,17c0,0.7-0.1,1.4-0.2,2l-1.9-0.5C22,18,22,17.5,22,17c0-1.5-0.3-2.9-0.9-4.2l1.5-1.5C23.5,13,24,14.9,24,17z"/>
        </svg>
        <ComponentTitle>ArcGauge</ComponentTitle>
        <ComponentDescription>A component for representing values on an arc scale.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_circulargauge_gauges %}">
        <svg id="circulargauge" viewBox="0 0 24 24" >
            <path class="st0" d="M14,8l-2,2v4l2,2h2l2-2v-4l-2-2H14z M16,14h-2v-4h2V14z M6,8h5l0,2l-2,6l-2,0l1.8-6H6V8z M24,12c0,6.6-5.4,12-12,12 S0,18.6,0,12S5.4,0,12,0c3.8,0,7.2,1.8,9.4,4.6L21,5l-1,1l0,0c-1.8-2.4-4.7-4-8-4C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10 c0-1.5-0.3-2.9-0.9-4.2l1.5-1.5C23.5,8,24,9.9,24,12z"/>
        </svg>
        <ComponentTitle>CircularGauge</ComponentTitle>
        <ComponentDescription>A component for representing values using an arc over a fully enclosed circle.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_lineargauge_gauges %}">
        <svg id="lineargauge" viewbox="0 0 72 72">
            <path d="M30,33h12v36H30V33z M30,3h12v18H30V3z M18,24v6h30l6-6H18z"></path>
        </svg>
        <ComponentTitle>LinearGauge</ComponentTitle>
        <ComponentDescription>A component for representing values on a linear scale.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_radialgauge_gauges %}">
        <svg id="radialgauge" viewBox="0 0 72 72">
          	<path d="M30.3,54h8.5L72,20.7v-8.5L30.3,54z M36,12c8.3,0,15.9,3.4,21.3,8.9l4.2-4.2C55.1,10.1,46,6,36,6  C16.1,6,0,22.1,0,42c0,9.2,3.5,17.5,9.1,23.9l4.2-4.2C8.8,56.4,6,49.5,6,42C6,25.4,19.4,12,36,12z M64.8,33.9  c0.7,2.6,1.2,5.3,1.2,8.1c0,7.5-2.8,14.4-7.4,19.6l4.2,4.2C68.5,59.5,72,51.2,72,42c0-4.5-0.9-8.9-2.4-12.9L64.8,33.9z"></path>
        </svg>
        <ComponentTitle>RadialGauge</ComponentTitle>
        <ComponentDescription>A component for representing values on a radial scale.</ComponentDescription>
        </Component>
    </Column>
</Row>

## Basic Usage

The following example demonstrates the Arc, Linear, and Radial Gauges in action.

{% meta height:470 %}
{% embed_file overview/main.vue preview %}
{% embed_file overview/main.js %}
{% endmeta %}

## Installation

1. Download and install the package. Use Node.js v5.0.0 or later.

    ```sh
    npm install --save @progress/kendo-vue-gauges @progress/kendo-drawing @progress/kendo-vue-intl @progress/kendo-licensing
    ```

1. Once installed, import the package module.

    ```jsx
    // ES2015 module syntax
    import { ArcGauge, CircularGauge, LinearGauge, RadialGauge } from '@progress/kendo-vue-gauges';
    ```

    ```jsx
    // CommonJS format
    const { ArcGauge, CircularGauge, LinearGauge, RadialGauge } = require('@progress/kendo-vue-gauges');
    ```

1. You are required to install one of the Kendo UI for Vue Native themes to style your components. For more information on how to add the styles, refer to the [style section]({% slug getting_started_javascript_composition_api %}#toc-5-import-the-kendo-ui-for-vue-css-styles) of our getting started article.

1. Follow the instructions on the Kendo UI for Vue [My License page]({% slug my_license %}) to activate your license. You can skip this step if your application already contains a Kendo UI for Vue license file.

## Dependencies

The Gauges package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

* vue 3.0.0*
* @progress/kendo-drawing
* @progress/kendo-licensing
* @progress/kendo-vue-intl

> Vue 2 is currently in its end-of-support phase till Nov 2024. After our last major release for 2024, Vue 2 will no longer be supported in the new versions of the Kendo UI for Vue components. Please check our [Vue 2 End of Support article](slug:vue2-end-of-support) for more details.

The following dependencies are automatically installed:

* @progress/kendo-vue-common
* @progress/kendo-charts

## Support and Learning Resources

* [ArcGauge Homepage](https://www.telerik.com/kendo-vue-ui/arcgauge)
* [CircularGauge Homepage](https://www.telerik.com/kendo-vue-ui/circulargauge)
* [LinearGauge Homepage](https://www.telerik.com/kendo-vue-ui/lineargauge)
* [RadialGauge Homepage](https://www.telerik.com/kendo-vue-ui/radialguage)
* [API Reference of the Gauges](slug:api_gauges)
* [Getting Started with Kendo UI for Vue - JavaScript (Online Guide)](slug:getting_started_javascript_composition_api)
* [Getting Started with Kendo UI for Vue - TypeScript (Online Guide)](slug:getting_started_typescript_composition_api)
* [Getting Started with Kendo UI for Vue - JavaScript + Options API (Online Guide)](slug:getting_started_javascript_options_api)
* [Getting Started with Kendo UI for Vue - TypeScript + Options API (Online Guide)](slug:getting_started_typescript_options_api)
* [Getting Started with Kendo UI for Vue - Nuxt 3 (Online Guide)](slug:getting_started_nuxt_3)
* [Virtual Classroom (Training Course for Registered Users)](https://learn.telerik.com/learn/course/internal/view/elearning/45/kendo-ui-for-vue-with-typescript)
* [Kendo UI for Vue Forum](https://www.telerik.com/forums/kendo-ui-vue)
* [Knowledge Base](https://www.telerik.com/kendo-vue-ui/components/knowledge-base/)
* [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})

## Additional Resources

* [Vue Blogs](https://www.telerik.com/blogs/tag/kendo-ui-for-vue)
* [Kendo UI for Vue Roadmap](https://www.telerik.com/support/whats-new/kendo-vue-ui/roadmap)
