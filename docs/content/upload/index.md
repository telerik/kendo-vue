---
title: Overview
description: "Learn about the Kendo UI for Vue component which is delivered by the Upload package."
slug: overview_upload
position: 0
---

# Kendo UI for Vue Native Upload Overview

The Kendo UI for Vue Upload helps users send files from their file systems to dedicated server handlers which are configured to receive them.

The Kendo UI for Vue Upload component is part of the Kendo UI for Vue library of Vue UI components. It is distributed through NPM under the [kendo-vue-upload package](https://www.npmjs.com/package/@progress/kendo-vue-upload).

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates the Upload in action.

{% meta height:350 %}
{% embed_file getting-started/main.vue preview %}
{% embed_file getting-started/main.js %}
{% endmeta %}

## Functionality and Features

* [Disabled Upload]({% slug disabledstate_upload %})
* [Modes of operation]({% slug controleduncontroled_upload %})
* [Credentials and additional data]({% slug credentials_upload %})
* [File processing]({% slug fileprocessing_upload %})
* [File restrictions]({% slug filerestrictions_upload %})
* [Dragging and dropping]({% slug drag_and_drop %})
* [Action Buttons]({% slug actionbuttons_upload %})
* [Custom rendering]({% slug rendering_upload %})
* [External Drop Zone]({% slug external_drop_zone %})
* [Globalization]({% slug globalization_upload %})
* [Keyboard navigation]({% slug keyboard_navigation_upload %})

## Installation
To initialize the Upload, either:

* [Use the CDN service](#toc-using-cdn), or
* [Use Webpack](#toc-initializing-with-webpack).

### Using CDN
To use the Kendo UI for Vue Native Upload component with CDN, follow the below steps:

1. Reference the `upload` and `intl` packages.

```sh
  <script src="https://unpkg.com/@progress/kendo-vue-intl@latest/dist/cdn/js/kendo-vue-intl.js"></script>
  <script src="https://unpkg.com/@progress/kendo-vue-upload@latest/dist/cdn/js/kendo-vue-upload.js"></script>
```

2. Reference one of the Kendo UI themes to style your components.

```sh
    // Load the Kendo Default Theme
    <link rel="stylesheet" href="https://unpkg.com/@progress/kendo-theme-default@latest/dist/all.css">

    // Load the Kendo Bootstrap Theme
    <link rel="stylesheet" href="https://unpkg.com/@progress/kendo-theme-bootstrap@latest/dist/all.css">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">

    // To load the Kendo Material Theme
    <link rel="stylesheet" href="https://unpkg.com/@progress/kendo-theme-material@latest/dist/all.css">

    // To load the Kendo Fluent Theme
    <link rel="stylesheet" href="https://unpkg.com/@progress/kendo-theme-fluent@latest/dist/all.css">
```


3. Follow the instructions in [this article]({% slug my_license %}#toc-set-license-key-when-using-cdn-scripts) to activate your product license. You can skip this step if your application already contains a license key.

### Initializing with Webpack

1. Download and install the package. Use Node.js v5.0.0 or later.

    ```sh
    npm install --save @progress/kendo-vue-upload @progress/kendo-licensing @progress/kendo-svg-icons
    ```

2. Once installed, import the package module.

    ```jsx-no-run
    // ES2015 module syntax
    import { Upload } from '@progress/kendo-vue-upload';
    ```

    ```jsx
    // CommonJS format
    const { Upload } = require('@progress/kendo-vue-upload');
    ```

3. You are required to install one of the Kendo UI for Vue themes to style your components. For more information on how to add the styles, refer to the article on [getting started]({% slug getting_started_javascript_composition_api %}#toc-5-import-the-kendo-ui-for-vue-css-styles).

1. Follow the instructions on the Kendo UI for Vue [My License page]({% slug my_license %}) to activate your license. You can skip this step if your application already contains a Kendo UI for Vue license file.

## Dependencies

The Upload package requires the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) that have to be installed by your application:

* vue 3.0.0*
* @progress/kendo-licensing
* @progress/kendo-svg-icons

> Vue 2 is currently in its end-of-support phase till Nov 2024. After our last major release for 2024, Vue 2 will no longer be supported in the new versions of the Kendo UI for Vue components. Please check our [Vue 2 End of Support article](slug:vue2-end-of-support) for more details.

## Events

The following example demonstrates basic Upload events.

{% meta height:580 %}
{% embed_file events/main.vue preview %}
{% embed_file events/main.js %}
{% endmeta %}

## Support and Learning Resources

* [Upload Homepage](https://www.telerik.com/kendo-vue-ui/upload)
* [API Reference of the Upload Component](slug:api_upload)
* [Getting Started with Kendo UI for Vue - JavaScript (Online Guide)](slug:getting_started_javascript_composition_api)
* [Getting Started with Kendo UI for Vue - TypeScript (Online Guide)](slug:getting_started_typescript_composition_api)
* [Getting Started with Kendo UI for Vue - JavaScript + Options API (Online Guide)](slug:getting_started_javascript_options_api)
* [Getting Started with Kendo UI for Vue - TypeScript + Options API (Online Guide)](slug:getting_started_typescript_options_api)
* [Getting Started with Kendo UI for Vue - Nuxt 3 (Online Guide)](slug:getting_started_nuxt_3)
* [Virtual Classroom (Training Course for Registered Users)](https://learn.telerik.com/learn/course/internal/view/elearning/45/kendo-ui-for-vue-with-typescript)
* [Upload Forum](https://www.telerik.com/forums/kendo-ui-vue?searchText=upload)
* [Knowledge Base](https://www.telerik.com/kendo-vue-ui/components/knowledge-base/)
* [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})

## Additional Resources

* [Vue Blogs](https://www.telerik.com/blogs/tag/kendo-ui-for-vue)
* [Kendo UI for Vue Roadmap](https://www.telerik.com/support/whats-new/kendo-vue-ui/roadmap)
