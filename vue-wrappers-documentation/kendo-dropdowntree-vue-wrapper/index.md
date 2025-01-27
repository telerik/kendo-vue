---
title: Overview
page_title: DropDownTree Overview - Components - Kendo UI for Vue
description: "Get an overview of the features the Kendo UI DropDownTree wrapper for Vue delivers and use the component in Vue projects."
slug: overview_dropdowntree_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dropdowns/dropdowntree/"
position: 0
---

<div><WrapperBanner link="/kendo-vue-ui/components/dropdowns/dropdowntree"></WrapperBanner></div>

# DropDownTree Overview

The DropDownTree is an editor of hierarchical data, rendered in a tree-like structure, which provides multiple selection options and custom nodes.

The DropDownTree wrapper for Vue is a client-side wrapper for the [Kendo UI DropDownTree](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree) widget.

<div data-component="StartFreeTrialSection"></div>

## Basic usage

The following example demonstrates how to initialize the DropDownTree.

{% meta height:750 %}
{% embed_file overview/basic-usage/main.vue preview %}
{% embed_file overview/basic-usage/main.js %}
{% endmeta %}

## Installation

To initialize the DropDownTree, either:

* [Use the CDN service]({% slug using_cdn %}), or
* [Use Webpack](#toc-initializing-with-webpack).

### Initializing with Webpack

1. Install Kendo UI and add a theme.

    ```sh
    npm install --save @progress/kendo-ui
    npm install --save @progress/kendo-theme-default
    ```

1. Install the Kendo UI DropDownTree package for Vue.

    ```sh
    npm install --save @progress/kendo-dropdowntree-vue-wrapper
    ```

1. Import the Kendo UI packages to the App component. If you use the Kendo UI components more than once in your application, add all Kendo UI-related files to the `main.js` file. If you use the Kendo UI components once in your application, add the Kendo UI-related files the component where they will be referred.

    ```js-no-run
    import '@progress/kendo-ui' // This will import the entire Kendo UI library
    // As an alternative, you could import only the scripts that are used by a specific widget:
    // import '@progress/kendo-ui/js/kendo.dropdowntree' // Imports only the DropDownTree script and its dependencies

    import '@progress/kendo-theme-default/dist/all.css'

    import { DropDownTree, DropDownTreeInstaller } from '@progress/kendo-dropdowntree-vue-wrapper'

    Vue.use(DropDownTreeInstaller)

    new Vue({
        el: '#app',
        components: {
            DropDownTree
        }
    })
    ```

## Functionality and Features

* [Data binding]({% slug databinding_dropdowntree_wrapper %})
* [Checkboxes]({% slug checkboxes_dropdowntree_wrapper %})
* [Filtering]({% slug filtering_dropdowntree_wrapper %})
* [Keyboard navigation]({% slug keyboard_navigation_dropdowntree_wrapper %})
* [RTL support]({% slug rtl_dropdowntree_wrapper %})

## Events

The following example demonstrates basic DropDownTree events. You can subscribe to all [DropDownTree events](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree#events) by the handler name.

{% meta height:750 %}
{% embed_file overview/events/main.vue preview %}
{% embed_file overview/events/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI DropDownTree for jQuery](https://docs.telerik.com/kendo-ui/controls/editors/dropdowntree/overview)
* [API Reference of the DropDownTree Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree)
