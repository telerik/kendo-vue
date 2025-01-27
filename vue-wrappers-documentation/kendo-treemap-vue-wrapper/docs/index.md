---
title: Overview
page_title: Treemap Overview - Components - Kendo UI for Vue
description: "Get an overview of the features the Kendo UI TreeMap delivers and use the component in Vue projects."
slug: overview_treemap
position: 0
---

<div><WrapperBanner></WrapperBanner></div>

# TreeMap Overview

The TreeMap displays hierarchical data in a traditional tree structure.

It also support various rendering types such us Squarified, Vertical, and Horizontal (slice and dice algorithm).

The TreeMap wrapper for Vue is a client-side wrapper for the [Kendo UI TreeMap](https://docs.telerik.com/kendo-ui/controls/charts/treemap/overview) widget.

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates how to initialize the TreeMap.

{% meta height:460 %}
{% embed_file overview/main.vue preview %}
{% embed_file overview/main.js %}
{% endmeta %}

## Installation

To initialize the TreeMap, either:

* [Use the CDN service]({% slug using_cdn %}), or
* [Use Webpack](#toc-initializing-with-webpack).

### Initializing with Webpack

1. Install Kendo UI and add a theme.

    ```sh
    npm install --save @progress/kendo-ui
    npm install --save @progress/kendo-theme-default
    ```

1. Install the Kendo UI TreeMap package for Vue.

    ```sh
    npm install --save @progress/kendo-treemap-vue-wrapper
    ```

1. Import the Kendo UI packages to the App component. If you use the Kendo UI components more than once in your application, add all Kendo UI-related files to the `main.js` file. If you use the Kendo UI components once in your application, add the Kendo UI-related files the component where they will be referred.

    ```js-no-run
    import '@progress/kendo-ui' // This will import the entire Kendo UI library
    // As an alternative, you could import only the scripts that are used by a specific widget:
    // import '@progress/kendo-ui/js/kendo.dataviz.treemap' // Imports only the TreeMap script and its dependencies

    import '@progress/kendo-theme-default/dist/all.css'

    import { TreeMap, TreeMapInstaller } from '@progress/kendo-treemap-vue-wrapper'

    Vue.use(TreeMapInstaller)

    new Vue({
        el: '#app',
        components: {
            TreeMap
        }
    })
    ```

## Functionality and Features

The TreeMap supports [data binding]({% slug databinding_treemap %}).

## Suggested Links

* [Kendo UI TreeMap for jQuery](https://docs.telerik.com/kendo-ui/controls/charts/treemap/overview)
* [API Reference of TreeMap Widget](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/treemap)
