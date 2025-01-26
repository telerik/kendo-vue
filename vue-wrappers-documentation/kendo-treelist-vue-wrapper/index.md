---
title: Overview
page_title: TreeList Overview - Components - Kendo UI for Vue
description: "Get an overview of the features the Kendo UI TreeList delivers and use the component in Vue projects."
slug: overview_treelist_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/treelist/"
position: 0
---

<div><WrapperBanner link="/kendo-vue-ui/components/treelist"></WrapperBanner></div> 

# TreeList Overview

The TreeList enables you to display self-referencing tabular data and to sort, filter, and edit its data.

It also shows a parent-child relation between the TreeList data items.

The TreeList wrapper for Vue is a client-side wrapper for the [Kendo UI TreeList](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist) widget.

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates how to initialize the TreeList.

{% meta height:380 %}
{% embed_file overview/basic-usage/main.vue preview %}
{% embed_file overview/basic-usage/main.js %}
{% endmeta %}

## Installation

To initialize the TreeList, either:

* [Use the CDN service]({% slug using_cdn %}), or
* [Use Webpack](#toc-initializing-with-webpack).

### Initializing with Webpack

1. Install Kendo UI and add a theme.

    ```sh
    npm install --save @progress/kendo-ui
    npm install --save @progress/kendo-theme-default
    ```

1. Install the Kendo UI TreeList package for Vue.

    ```sh
    npm install --save @progress/kendo-treelist-vue-wrapper
    ```

1. Import the Kendo UI packages to the App component. If you use the Kendo UI components more than once in your application, add all Kendo UI-related files to the `main.js` file. If you use the Kendo UI components once in your application, add the Kendo UI-related files the component where they will be referred.

    ```js-no-run
    import '@progress/kendo-ui' // This will import the entire Kendo UI library
    // As an alternative, you could import only the scripts that are used by a specific widget:
    // import '@progress/kendo-ui/js/kendo.treelist' // Imports only the TreeList script and its dependencies

    import '@progress/kendo-theme-default/dist/all.css'

    import { TreeList, TreeListInstaller } from '@progress/kendo-treelist-vue-wrapper'

    Vue.use(TreeListInstaller)

    new Vue({
        el: '#app',
        components: {
            TreeList
        }
    })
    ```

## Functionality and Features

* [Data binding]({% slug databinding_treelist_wrapper %})
* [Editing]({% slug editing_treelist_wrapper %})
* [Column features]({% slug columns_treelist_wrapper %})
* [Dragging and dropping]({% slug drag_and_drop_treelist_wrapper %})
* [Aggregates]({% slug aggregates_treelist_wrapper %})
* [Excel export]({% slug excelexport_treelist %})
* [PDF export]({% slug pdfexport_treelist %})
* [Keyboard navigation]({% slug keyboard_navigation_treelist_wrapper %})

## Events

The following example demonstrates basic TreeList events. You can subscribe to [all TreeList events](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist#events) by the handler name.

{% meta height:380 %}
{% embed_file overview/events/main.vue preview %}
{% embed_file overview/events/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI TreeList for jQuery](https://docs.telerik.com/kendo-ui/controls/data-management/treelist/overview)
* [API Reference of the TreeList Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist)
