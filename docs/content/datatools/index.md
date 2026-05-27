---
title: Overview
description: "Get started with the Kendo UI for Vue Data Tools package and learn more about how to use the components in Vue projects."
slug: overview_datatools
position: 0
---

# Kendo UI for Vue Native Data Tools Overview

The Kendo UI for Vue Data Tools package delivers data-related components.

<div data-component="StartFreeTrialSection"></div>

## Installation
To initialize the DataTools, either:

* [Use the CDN service](#toc-using-cdn), or
* [Use Webpack](#toc-initializing-with-webpack).

### Using CDN
To use the Kendo UI for Vue Native DataTools with CDN, follow the below steps:

1. Reference the `data-tools` and `intl` packages.

```sh
  <script src="https://unpkg.com/@progress/kendo-vue-intl@latest/dist/cdn/js/kendo-vue-intl.js"></script>
  <script src="https://unpkg.com/@progress/kendo-vue-data-tools@latest/dist/cdn/js/kendo-vue-data-tools.js"></script>
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

## Initializing with Webpack

1. Download and install the package. Use Node.js v5.0.0 or later.

    ```sh
    npm install --save @progress/kendo-vue-data-tools @progress/kendo-vue-intl @progress/kendo-licensing
    ```

1. Once installed, import the package module.

   ```jsx-no-run
    // ES2015 module syntax
    import { Pager, Filter } from '@progress/kendo-vue-data-tools';
    ```

    ```jsx-no-run
    // CommonJS format
    const { Pager, Filter } = require('@progress/kendo-vue-data-tools');
    ```

1. You are required to install one of the Kendo UI for Vue themes to style your components. For more information on how to add the styles, refer to the article on [getting started]({% slug getting_started_javascript_composition_api %}#toc-5-import-the-kendo-ui-for-vue-css-styles).

1. Follow the instructions on the Kendo UI for Vue [My License page]({% slug my_license %}) to activate your license. You can skip this step if your application already contains a Kendo UI for Vue license file.

## Dependencies

The Data Tools package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

* vue 3.0.0*
* @progress/kendo-licensing
* @progress/kendo-svg-icons
* @progress/kendo-data-query
* @progress/kendo-drawing
* @progress/kendo-vue-buttons
* @progress/kendo-vue-dateinputs
* @progress/kendo-vue-dropdowns
* @progress/kendo-vue-inputs
* @progress/kendo-vue-intl

> Vue 2 is currently in its end-of-support phase till Nov 2024. After our last major release for 2024, Vue 2 will no longer be supported in the new versions of the Kendo UI for Vue components. Please check our [Vue 2 End of Support article](slug:vue2-end-of-support) for more details.

## Available Components

* [Pager component]({% slug overview_pager %}).
* [Filter component]({% slug overview_filter %}).

## Support and Learning Resources

* [Filter Homepage](https://www.telerik.com/kendo-vue-ui/filter)
* [Pager Homepage](https://www.telerik.com/kendo-vue-ui/vue-pager)
* [API Reference of the DataTools Package](slug:api_data-tools)
* [Getting Started with Kendo UI for Vue - JavaScript (Online Guide)](slug:getting_started_javascript_composition_api)
* [Getting Started with Kendo UI for Vue - TypeScript (Online Guide)](slug:getting_started_typescript_composition_api)
* [Getting Started with Kendo UI for Vue - JavaScript + Options API (Online Guide)](slug:getting_started_javascript_options_api)
* [Getting Started with Kendo UI for Vue - TypeScript + Options API (Online Guide)](slug:getting_started_typescript_options_api)
* [Getting Started with Kendo UI for Vue - Nuxt 3 (Online Guide)](slug:getting_started_nuxt_3)
* [Virtual Classroom (Training Course for Registered Users)](https://learn.telerik.com/learn/course/internal/view/elearning/45/kendo-ui-for-vue-with-typescript)
* [Kendo UI for Vue Forum](https://www.telerik.com/forums/kendo-ui-vue)
* [Knowledge Base](https://www.telerik.com/kendo-vue-ui/components/knowledge-base/)
* [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})

## Additional Resources

* [Vue Blogs](https://www.telerik.com/blogs/tag/kendo-ui-for-vue)
* [Kendo UI for Vue Roadmap](https://www.telerik.com/support/whats-new/kendo-vue-ui/roadmap)


