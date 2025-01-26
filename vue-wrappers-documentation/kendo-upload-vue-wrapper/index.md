---
title: Overview
page_title: Upload Overview - Components - Kendo UI for Vue
description: "Get an overview of the features the Kendo UI Upload wrapper for Vue delivers and use the component in Vue projects."
slug: overview_upload_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/upload/"
position: 0
---

<div><WrapperBanner link="/kendo-vue-ui/components/upload"></WrapperBanner></div>    

# Upload Overview

The Upload helps users send files from local file systems to dedicated server handlers which are configured to receive them.

The Upload wrapper for Vue is a client-side wrapper for the [Kendo UI Upload](https://docs.telerik.com/kendo-ui/api/javascript/ui/upload) widget.

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates how to initialize the Upload.

{% meta height:250 %}
{% embed_file overview/main.vue preview %}
{% embed_file overview/main.js %}
{% endmeta %}

## Installation

To initialize the Upload, either:

* [Use the CDN service]({% slug using_cdn %}), or
* [Use Webpack](#toc-initializing-with-webpack).

### Initializing with Webpack

1. Install Kendo UI and add a theme.

    ```sh
    npm install --save @progress/kendo-ui
    npm install --save @progress/kendo-theme-default
    ```

1. Install the Kendo UI Upload package for Vue.

    ```sh
    npm install --save @progress/kendo-upload-vue-wrapper
    ```

1. Import the Kendo UI packages to the App component. If you use the Kendo UI components more than once in your application, add all Kendo UI-related files to the `main.js` file. If you use the Kendo UI components once in your application, add the Kendo UI-related files the component where they will be referred.

    ```js-no-run
    import '@progress/kendo-ui' // This will import the entire Kendo UI library
    // As an alternative, you could import only the scripts that are used by a specific widget:
    // import '@progress/kendo-ui/js/kendo.upload' // Imports only the Upload script and its dependencies

    import '@progress/kendo-theme-default/dist/all.css'

    import { Upload, UploadInstaller } from '@progress/kendo-upload-vue-wrapper'

    Vue.use(UploadInstaller)

    new Vue({
        el: '#app',
        components: {
            Upload
        }
    })
    ```

## Functionality and Features

* [Initial files]({% slug initial_files_upload_wrapper %})
* [Validation]({% slug validation_upload_wrapper %})
* [Templates]({% slug templates_upload_wrapper %})
* [Chunk upload]({% slug chunk_upload_wrapper %})
* [Directory upload]({% slug directory_upload_wrapper %})
* [Custom drop zones]({% slug custom_drop_zone_wrapper %})
* [RTL support]({% slug right_to_left_support_upload_wrapper %})

## Suggested Links

* [Kendo UI Upload for jQuery](https://docs.telerik.com/kendo-ui/controls/editors/upload/overview)
* [API Reference of the Upload Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/upload)
