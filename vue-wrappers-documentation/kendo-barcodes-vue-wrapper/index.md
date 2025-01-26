---
title: Overview
page_title: Barcodes Overview - Components - Kendo UI for Vue
description: "Learn about the Kendo UI wrappers for Vue which are delivered by the Barcodes package."
slug: overview_barcode_wrappers_wrapper
position: 0
---

<div><WrapperBanner></WrapperBanner></div>

# Barcodes Overview

The Barcodes enable the user to easily generate images that represent QR (Quick Response) codes and barcodes.

<Row>
    <Column count={6}>
        <Component href="{% slug overview_barcode_wrapper %}">
        <svg id="barcode" viewbox="0 0 72 72">
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
            <path d="M3,66h6V6l-6,6V66z M15,48h6V6l-6,6V48z M27,66h6V6l-6,6V66z M39,48h6V6l-6,6V48z M51,48h6V6l-6,6V48z M63,12  v54h6V6L63,12z"></path>
        </svg>
            <ComponentTitle>BarCode</ComponentTitle>
            <ComponentDescription>The Barcode represents data in a machine-readable format.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_qrcode_wrapper %}">
        <svg id="qrcode" viewBox="0 0 72 72">
          	<path d="M0,60h12v12H0V60z M6,48v-6H0v6v6h6V48z M36,60v-6h-6h-6v6v6h6v-6H36z M42,48h6h6h6v-6h-6h-6h-6h-6v6v6h6V48z   M48,66h6v6h-6V66z M30,66v6h6h6v-6h-6H30z M48,0h6v6h-6V0z M18,66h6v6h-6V66z M66,30v6h6v-6v-6h-6V30z M6,30h6v6H6V30z M24,48h6v-6  h-6h-6v6H24z M12,36h6v6h-6V36z M12,18h6v6h-6V18z M24,6h6v6h-6V6z M36,12h6V6V0h-6h-6v6h6V12z M0,18h6v6H0V18z M12,54h6v6h-6V54z   M48,36h6v-6h-6h-6v6H48z M36,24h6v6h-6V24z M30,18h-6v6v6h-6v6h6h6v-6v-6h6v-6H30z M42,60h6v6h-6V60z M48,54h6v6h-6V54z M66,72h6  v-6h-6h-6v6H66z M54,60h6v6h-6V60z M66,48v6h-6v6h6h6v-6v-6v-6h-6V48z M54,12h-6v6v6h6h6v-6h-6V12z M12,6h6h6V0h-6h-6H0v12h12V6z   M60,0v12v6h6v-6h6V0H60z"></path>
        </svg>
            <ComponentTitle>QRCode</ComponentTitle>
            <ComponentDescription>The QRCode helps generate Canvas and SVG images which represent QR codes.</ComponentDescription>
        </Component>
    </Column>
</Row>

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates how to initialize the Barcode and QRCode.

{% meta height:750 %}
{% embed_file barcode/overview/main.vue preview %}
{% embed_file barcode/overview/main.js %}
{% endmeta %}

## Installation

To initialize the Barcodes, either:

* [Use the CDN service]({% slug using_cdn %}), or
* [Use Webpack](#toc-initializing-with-webpack).

### Initializing with Webpack

1. Install Kendo UI and add a theme.

    ```sh
    npm install --save @progress/kendo-ui
    npm install --save @progress/kendo-theme-default
    ```

1. Install the Kendo UI Barcodes package for Vue.

    ```sh
    npm install --save @progress/kendo-barcodes-vue-wrapper
    ```

    The package also exports the following wrappers for individual components:

    * Barcode
    * QRCode

1. Import the Kendo UI packages to the App component. If you use the Kendo UI components more than once in your application, add all Kendo UI-related files to the `main.js` file. If you use the Kendo UI components once in your application, add the Kendo UI-related files the component where they will be referred.

    ```js-no-run
    import '@progress/kendo-ui' // This will import the entire Kendo UI library
    // As an alternative, you could import only the scripts that are used by a specific widget:
    // import '@progress/kendo-ui/js/kendo.dataviz.barcode' // Imports only the Barcode script and its dependencies
    // import '@progress/kendo-ui/js/kendo.dataviz.qrcode' // Imports only the QRCode script and its dependencies

    import '@progress/kendo-theme-default/dist/all.css'

    import { Barcode,
             QRCode,
             BarcodesInstaller } from '@progress/kendo-barcodes-vue-wrapper'

    Vue.use(BarcodesInstaller)

    new Vue({
        el: '#app',
        components: {
            Barcode,
            QRCode
        }
    })
    ```

## Suggested Links

* [Get Started with the Barcode]({% slug overview_barcode_wrapper %})
* [Get Started with the QRCode]({% slug overview_qrcode_wrapper %})
