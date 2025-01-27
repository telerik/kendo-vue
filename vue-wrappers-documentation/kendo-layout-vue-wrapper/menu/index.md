---
title: Overview
page_title: Menu Overview - Components - Kendo UI for Vue
description: "Get an overview of the features the Kendo UI Menu wrapper for Vue delivers and use the component in Vue projects."
slug: overview_menu_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/layout/menu/"
position: 1
---

<div><WrapperBanner link="/kendo-vue-ui/components/layout/menu"></WrapperBanner></div>    

# Menu Overview

The Menu displays hierarchical data as a multi-level menu.

It provides rich styling for unordered lists of items and can be used for both navigation and JavaScript commands.

The Menu wrapper for Vue is a client-side wrapper for the [Kendo UI Menu](https://demos.telerik.com/kendo-ui/menu/index) widget.

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates the Menu in action.

{% meta height:300 %}
{% embed_file menu/basic/main.vue preview %}
{% embed_file menu/basic/main.js %}
{% endmeta %}


## Installation

To initialize the Menu, either:

* [Use the CDN service]({% slug using_cdn %}), or
* [Use Webpack](#toc-initializing-with-webpack).

### Initializing with Webpack

1. Install Kendo UI and add a theme.

    ```sh
    npm install --save @progress/kendo-ui
    npm install --save @progress/kendo-theme-default
    ```

1. Install the Kendo UI Layout package for Vue.

    ```sh
    npm install --save @progress/kendo-layout-vue-wrapper
    ```

1. Import the Kendo UI packages to the App component. If you use the Kendo UI components more than once in your application, add all Kendo UI-related files to the `main.js` file. If you use the Kendo UI components once in your application, add the Kendo UI-related files the component where they will be referred.

    ```js-no-run
    import '@progress/kendo-ui'
    import '@progress/kendo-theme-default/dist/all.css'

    import { Menu, LayoutInstaller } from '@progress/kendo-layout-vue-wrapper'

    Vue.use(LayoutInstaller)

    new Vue({
        el: '#app',
        components: {
            Menu
        }
    })
    ```

## Functionality and Features

* [Data binding]({% slug databinding_menu_wrapper %})
* [Direction]({% slug direction_menu_wrapper %})
* [Orientation]({% slug orientation_menu_wrapper %})
* [Scrollable Menu]({% slug scrollable_menu_wrapper %})
* [Animation effects]({% slug animation_effects_menu_wrapper %})
* [Keyboard navigation]({% slug keyboard_navigation_menu_wrapper %})
* [RTL support]({% slug rtl_support_menu_wrapper %})

## Events

The following example demonstrates basic Menu events. You can subscribe to [all Menu events](https://docs.telerik.com/kendo-ui/api/javascript/ui/menu#events) by the handler name.

{% meta height:300 %}
{% embed_file menu/events/main.vue preview %}
{% embed_file menu/events/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Menu for jQuery](https://docs.telerik.com/kendo-ui/controls/navigation/menu/overview)
* [API Reference of the Menu Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/menu)
