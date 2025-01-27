---
title: Overview
page_title: ListBox Overview - Components - Kendo UI for Vue
description: "Get an overview of the features the Kendo UI ListBox wrapper for Vue delivers and use the component in Vue projects."
slug: overview_listbox_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/listbox"
position: 0
---

<div><WrapperBanner link="/kendo-vue-ui/components/listbox"></WrapperBanner></div>    

# ListBox Overview

The ListBox displays a list of data that is contained in a box.

The ListBox wrapper for Vue is a client-side wrapper for the [Kendo UI ListBox](https://demos.telerik.com/kendo-ui/listbox/index) widget.

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates how to initialize the ListBox.

{% meta height:550 %}
{% embed_file basic/main.vue preview %}
{% embed_file basic/main.js %}
{% endmeta %}

## Installation

To initialize the ListBox, either:

* [Use the CDN service]({% slug using_cdn %}), or
* [Use Webpack](#toc-initializing-with-webpack).

### Initializing with Webpack

1. Install Kendo UI and add a theme.

    ```sh
    npm install --save @progress/kendo-ui
    npm install --save @progress/kendo-theme-default
    ```

1. Install the Kendo UI ListBox package for Vue.

    ```sh
    npm install --save @progress/kendo-listbox-vue-wrapper
    ```

1. Import the Kendo UI packages to the App component. If you use the Kendo UI components more than once in your application, add all Kendo UI-related files to the `main.js` file. If you use the Kendo UI components once in your application, add the Kendo UI-related files the component where they will be referred.

    ```js-no-run
    import '@progress/kendo-ui' // This will import the entire Kendo UI library
    // As an alternative, you could import only the scripts that are used by a specific widget:
    // import '@progress/kendo-ui/js/kendo.listbox' // Imports only the ListBox script and its dependencies

    import '@progress/kendo-theme-default/dist/all.css'

    import { ListBox, ListBoxInstaller } from '@progress/kendo-listbox-vue-wrapper'

    Vue.use(ListBoxInstaller)

    new Vue({
        el: '#vueapp',
        components: {
            ListBox
        }
    })
    ```

## Functionality and Features

* [Data binding]({% slug databinding_listbox_wrapper %})
* [Selection]({% slug selection_listbox_wrapper %})
* [Dragging and dropping]({% slug draganddrop_listbox_wrapper %})
* [Item templates]({% slug itemtemplates_listbox_wrapper %})
* [Localization]({% slug localization_listbox_wrapper %})
* [Keyboard navigation]({% slug keyboard_navigation_listbox_wrapper %})
* [RTL support]({% slug right_to_left_support_listbox_wrapper %})

## Suggested Links

* [Kendo UI ListBox for jQuery](https://demos.telerik.com/kendo-ui/listbox/index)
* [API Reference of the ListBox Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/listbox)
