---
title: Overview
page_title: Map Overview - Components - Kendo UI for Vue
description: "Get an overview of the features the Kendo UI Map wrapper for Vue delivers and use the component in Vue projects."
slug: overview_map
position: 0
---

<div><WrapperBanner></WrapperBanner></div>

# Map Overview

The Map displays geospatial information which is organized in layers and is supported by both desktop and mobile devices.

The Map wrapper for Vue is a client-side wrapper for the [Kendo UI Map](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/map) widget.

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates how to initialize the Map.

{% meta height:560 %}
{% embed_file basic/main.vue preview %}
{% embed_file basic/main.js %}
{% endmeta %}

## Installation

To initialize the Map, either:

* [Use the CDN service]({% slug using_cdn %}), or
* [Use Webpack](#toc-initializing-with-webpack).

### Initializing with Webpack

1. Install Kendo UI and add a theme:

    ```sh
    npm install --save @progress/kendo-ui
    npm install --save @progress/kendo-theme-default
    ```

1. Install the Kendo UI for Vue Map package.

  	```sh
  	npm install --save @progress/kendo-map-vue-wrapper
  	```

1. Import the Kendo UI packages to the App component. If you use the Kendo UI components more than once in your application, add all Kendo UI-related files to the `main.js` file. If you use the Kendo UI components once in your application, add the Kendo UI-related files the component where they will be referred.

    ```js-no-run
    import '@progress/kendo-ui' // This will import the entire Kendo UI library
    // As an alternative, you could import only the scripts that are used by a specific widget:
    // import '@progress/kendo-ui/js/kendo.dataviz.map' // Imports only the Map script and its dependencies

    import '@progress/kendo-theme-default/dist/all.css'

    import { Map,
             MapMarker,
             MapLayer,
             MapInstaller } from '@progress/kendo-map-vue-wrapper'

    Vue.use(MapInstaller)

    new Vue({
        el: '#app',
        components: {
            Map,
            MapMarker,
            MapLayer,
            MapInstaller
        }
    })
    ```

## Functionality and Features

* [Layers]({% slug layers_map %})
* [Markers]({% slug markers_map %})
* [Export options]({% slug export_options_map %})

## Suggested Links

* [Kendo UI Map for jQuery](https://docs.telerik.com/kendo-ui/controls/diagrams-and-maps/map/overview)
* [API Reference of the Map Widget](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/map)
