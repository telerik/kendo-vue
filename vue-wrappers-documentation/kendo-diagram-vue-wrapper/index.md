---
title: Overview
page_title: Diagram Overview - Components - Kendo UI for Vue
description: "Get an overview of the features the Kendo UI Diagram wrapper for Vue delivers and use the component in Vue projects."
slug: overview_diagram
position: 0
---

<div><WrapperBanner></WrapperBanner></div>

# Diagram Overview

The Diagram represents information in a schematic way and according to particular visualization techniques.

The Diagram wrapper for Vue is a client-side wrapper for the [Kendo UI Diagram](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram) widget.

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates how to initialize the Diagram.

{% meta height:660 %}
{% embed_file basic/main.vue preview %}
{% embed_file basic/main.js %}
{% endmeta %}

## Installation

To initialize the Diagram, either:

* [Use the CDN service]({% slug using_cdn %}), or
* [Use Webpack](#toc-initializing-with-webpack).

### Initializing with Webpack

1. Install Kendo UI and add a theme.

    ```sh
    npm install --save @progress/kendo-ui
    npm install --save @progress/kendo-theme-default
    ```

1. Install the Kendo UI Diagram package for Vue.

    ```sh
    npm install --save @progress/kendo-diagram-vue-wrapper
    ```

1. Import the Kendo UI packages to the App component. If you use the Kendo UI components more than once in your application, add all Kendo UI-related files to the `main.js` file. If you use the Kendo UI components once in your application, add the Kendo UI-related files the component where they will be referred.

    ```js-no-run
    import '@progress/kendo-ui' // This will import the entire Kendo UI library
    // As an alternative, you could import only the scripts that are used by a specific widget:
    // import '@progress/kendo-ui/js/kendo.dataviz.diagram' // Imports only the Diagram script and its dependencies

    import '@progress/kendo-theme-default/dist/all.css'

    import { Diagram, DiagramInstaller } from '@progress/kendo-diagram-vue-wrapper'

    Vue.use(DiagramInstaller)

    new Vue({
        el: '#app',
        components: {
            Diagram
        }
    })
    ```

## Functionality and Features

* [Built-in layouts]({% slug builtin_layouts_diagram %})
* [Editing]({% slug editing_diagram %})
* [Export options]({% slug export_options_diagram %})

## Suggested Links

* [Kendo UI Diagram for jQuery](https://docs.telerik.com/kendo-ui/controls/diagrams-and-maps/diagram/overview)
* [API Reference of the Diagram Widget](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram)
