---
title: Overview
page_title: TreeView Overview - Components - Kendo UI for Vue
description: "Get an overview of the features the Kendo UI TreeView wrapper for Vue delivers and use the component in Vue projects."
slug: overview_treeview_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/treeview/"
position: 0
---

<div><WrapperBanner link="/kendo-vue-ui/components/treeview/"></WrapperBanner></div>    


# TreeView Overview

The TreeView displays hierarchical data in a traditional tree structure.

It supports user interaction through mouse or touch events and performs re-ordering operations by using the drag-and-drop functionality.

The TreeView wrapper for Vue is a client-side wrapper for the [Kendo UI TreeView](https://docs.telerik.com/kendo-ui/api/javascript/ui/treeview) widget.

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates how to initialize the TreeView.

{% meta height:470 %}
{% embed_file overview/basic-usage/main.vue preview %}
{% embed_file overview/basic-usage/main.js %}
{% endmeta %}

## Installation

To initialize the TreeView, either:

* [Use the CDN service]({% slug using_cdn %}), or
* [Use Webpack](#toc-initializing-with-webpack).

### Initializing with Webpack

1. Install Kendo UI and add a theme.

    ```sh
    npm install --save @progress/kendo-ui
    npm install --save @progress/kendo-theme-default
    ```

1. Install the Kendo UI TreeView package for Vue.

    ```sh
    npm install --save @progress/kendo-treeview-vue-wrapper
    ```

1. Import the Kendo UI packages to the App component. If you use the Kendo UI components more than once in your application, add all Kendo UI-related files to the `main.js` file. If you use the Kendo UI components once in your application, add the Kendo UI-related files the component where they will be referred.

    ```js-no-run
    import '@progress/kendo-ui' // This will import the entire Kendo UI library
    // As an alternative, you could import only the scripts that are used by a specific widget:
    // import '@progress/kendo-ui/js/kendo.treeview' // Imports only the TreeView script and its dependencies

    import '@progress/kendo-theme-default/dist/all.css'

    import { TreeView,
             TreeViewItem,
             TreeViewInstaller } from '@progress/kendo-treeview-vue-wrapper'

    Vue.use(TreeViewInstaller)

    new Vue({
        el: '#app',
        components: {
            TreeView
        }
    })
    ```

## Functionality and Features

* [Data binding]({% slug databinding_treeview_wrapper %})
* [Dragging and dropping]({% slug draganddrop_treeview_wrapper %})
* [Animation effects]({% slug animation_effects_treeview_wrapper %})
* [Icons in TreeView]({% slug icons_treeview_wrapper %})
* [Checkboxes]({% slug checkboxes_treeview_wrapper %})
* [Templates]({% slug templates_treeview_wrapper %})
* [Keyboard navigation]({% slug keyboard_navigation_treeview_wrapper %})
* [RTL support]({% slug rtl_treeview_wrapper %})

## Events

The following example demonstrates basic TreeView events. You can subscribe to [all TreeView events](https://docs.telerik.com/kendo-ui/api/javascript/ui/treeview#events) by the handler name.

{% meta height:450 %}
{% embed_file overview/events/main.vue preview %}
{% embed_file overview/events/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI TreeView for jQuery](https://docs.telerik.com/kendo-ui/controls/navigation/treeview/overview)
* [API Reference of the TreeView Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/treeview)
