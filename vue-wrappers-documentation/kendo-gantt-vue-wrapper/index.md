---
title: Overview
page_title: Gantt Overview - Components - Kendo UI for Vue
description: "Get an overview of the features the Kendo UI Gantt wrapper for Vue delivers and use the component in Vue projects."
slug: overview_gantt
position: 0
---

<div><WrapperBanner></WrapperBanner></div>

# Gantt Overview

The Gantt displays a set of tasks and dependencies for visualizing project planning data.

The component provides a tree-list section for the user to edit, sort, and reorder the tasks in a grid-like manner, and a timeline section, where the tasks and dependencies are visualized under an adjustable time ruler and can be resized, moved, edited, and removed by the user. The Gantt provides options for displaying its timeline in the  `day`, `week`, or `month` views.

The Gantt wrapper for Vue is a client-side wrapper for the [Kendo UI Gantt](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt) widget.

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates how to initialize the Gantt.

{% meta height:750 %}
{% embed_file overview/basic-usage/main.vue preview %}
{% embed_file overview/basic-usage/main.js %}
{% endmeta %}

## Installation

To initialize the Gantt, either:

* [Use the CDN service]({% slug using_cdn %}), or
* [Use Webpack](#toc-initializing-with-webpack).

### Initializing with Webpack

1. Install Kendo UI and add a theme.

    ```sh
    npm install --save @progress/kendo-ui
    npm install --save @progress/kendo-theme-default
    ```

1. Install the Kendo UI Gantt package for Vue.

    ```sh
    npm install --save @progress/kendo-gantt-vue-wrapper
    ```

1. Import the Kendo UI packages to the App component. If you use the Kendo UI components more than once in your application, add all Kendo UI-related files to the `main.js` file. If you use the Kendo UI components once in your application, add the Kendo UI-related files the component where they will be referred.

    ```js-no-run
    import '@progress/kendo-ui' // This will import the entire Kendo UI library
    // As an alternative, you could import only the scripts that are used by a specific widget:
    // import '@progress/kendo-ui/js/kendo.gantt' // Imports only the Gantt script and its dependencies

    import '@progress/kendo-theme-default/dist/all.css'

    import { Gantt, GanttInstaller} from '@progress/kendo-gantt-vue-wrapper'

    Vue.use(GanttInstaller)

    new Vue({
        el: '#app',
        components: {
            Gantt
        }
    })
    ```

## Functionality and Features

* [Data binding]({% slug databinding_gantt %})
* [Column features]({% slug columns_gantt %})
* [Selected dates and ranges]({% slug date_range_gantt %})
* [Resources]({% slug resources_gantt %})
* [PDF export]({% slug pdf_export_gantt %})
* [Templates]({% slug templates_gantt %})
* [Keyboard navigation]({% slug keyboard_navigation_gantt %})
* [RTL support]({% slug right_to_left_support_gantt %})

## Events

The following example demonstrates basic Gantt events. You can subscribe to [all Gantt events](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt#events) by the handler name.

{% meta height:750 %}
{% embed_file overview/events/main.vue preview %}
{% embed_file overview/events/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Gantt for jQuery](https://docs.telerik.com/kendo-ui/controls/scheduling/gantt/overview)
* [API Reference of the Gantt Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt)
