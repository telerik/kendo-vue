---
title: Overview
page_title: ListViews Overview - Components - Kendo UI for Vue
description: "Get an overview of the features the Kendo UI ListView delivers and use the component in Vue projects."
slug: overview_listviewpackage_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/listview"
position: 0
---

<div><WrapperBanner link="/kendo-vue-ui/components/listview"></WrapperBanner></div>

# ListViews Overview

The ListView components enable you to specify a custom type of layout for the items they display.

<Row>
    <Column count={6}>
        <Component href="{% slug overview_listview_wrapper %}">
            <svg id="listview" viewbox="0 0 72 72">
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
                <path d="M45,39h-6v6v18v6h6h12l12-12V45v-6h-6H45z M63,54.5L54.5,63H45V45h18V54.5z M9,39H3v6v18v6h6h12l12-12V45v-6h-6  H9z M27,54.5L18.5,63H9V45h18V54.5z M63,3H45h-6v6v18v6h6h12l12-12V9V3H63z M63,18.5L54.5,27H45V9h18V18.5z M9,3H3v6v18v6h6h12  l12-12V9V3h-6H9z M27,18.5L18.5,27H9V9h18V18.5z"></path>
            </svg>
            <ComponentTitle>ListView</ComponentTitle>
            <ComponentDescription>A component that lists the data items bound.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_pager_wrapper %}">
            <svg id="pager" viewBox="0 0 72 72">
            <path d="M6,0v72h24V60h36V0H6z M60,54H24v12H12V6h48V54z M48,24H18v-6h36L48,24z M54,66h12v6H54V66z M18,36v-6h24l-6,6  H18z M36,66h12v6H36V66z"></path>
            </svg>
            <ComponentTitle>Pager</ComponentTitle>
            <ComponentDescription>A component for paging the Kendo UI Data Source.</ComponentDescription>
        </Component>
    </Column>
</Row>

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates how to initialize the ListView and Pager.

{% meta height:520 %}
{% embed_file basic/main.vue preview %}
{% embed_file basic/main.js %}
{% endmeta %}

## Installation

To initialize the ListView, either:

* [Use the CDN service]({% slug using_cdn %}), or
* [Use Webpack](#toc-initializing-with-webpack).

### Initializing with Webpack

1. Install Kendo UI and add a theme.

    	```sh
    	npm install --save @progress/kendo-ui
    	npm install --save @progress/kendo-theme-default
    	```

1. Install the Kendo UI ListView package for Vue.

	```sh
	npm install --save @progress/kendo-listview-vue-wrapper
	```

  The package also exports the following wrappers for individual components:

    * ListView
    * Pager

1. Import the Kendo UI packages to the App component. If you use the Kendo UI components more than once in your application, add all Kendo UI-related files to the `main.js` file. If you use the Kendo UI components once in your application, add the Kendo UI-related files the component where they will be referred.

    ```js-no-run
    import '@progress/kendo-ui' // This will import the entire Kendo UI library
    // As an alternative, you could import only the scripts that are used by a specific widget:
    // import '@progress/kendo-ui/js/kendo.listview' // Imports only the ListView script and its dependencies
    // import '@progress/kendo-ui/js/kendo.pager' // Imports only the Pager script and its dependencies

    import '@progress/kendo-theme-default/dist/all.css'

    import { Pager,
             ListView,
             ListViewInstaller } from '@progress/kendo-listview-vue-wrapper'

    Vue.use(ListViewInstaller)

    new Vue({
        el: '#app',
        components: {
            Pager,
            ListView
        }
    })
    ```

## Suggested Links

* [Get Started with the ListView]({% slug overview_listview_wrapper %})
* [Get Started with the Pager]({% slug overview_pager_wrapper %})
