---
title: Overview
description: "Get started with the Vue Labels package by Kendo UI for Vue and learn more about how to use the utility methods and functions it delivers in Vue projects."
slug: overview_labels
position: 0
---

# Labels Overview

The Kendo UI for Vue Labels package delivers components for adding hints, error messages and labelling form editors.

The Labels components are part of the Kendo UI for Vue library which provides native Kendo UI for Vue components for the Vue ecosystem and are available under the [kendo-vue-labels NPM package](https://www.npmjs.com/package/@progress/kendo-vue-labels).

<div data-component="StartFreeTrialSection"></div>

## Installation
To initialize the Labels, either:

* [Use the CDN service](#toc-using-cdn), or
* [Use Webpack](#toc-initializing-with-webpack).

### Using CDN
To use the Kendo UI for Vue Native Labels with CDN, follow the below steps:

1. Reference the `labels` and `intl` packages.

```sh
  <script src="https://unpkg.com/@progress/kendo-vue-intl@latest/dist/cdn/js/kendo-vue-intl.js"></script>
  <script src="https://unpkg.com/@progress/kendo-vue-labels@latest/dist/cdn/js/kendo-vue-labels.js"></script>
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
    npm install --save @progress/kendo-vue-labels @progress/kendo-vue-intl @progress/kendo-licensing
    ```

2. Once installed, import the package module.

    ```jsx-no-run
    // ES2015 module syntax
    import { Label, FloatingLabel, Hint, Error } from '@progress/kendo-vue-labels';
    ```

3. You are required to install one of the Kendo UI for Vue Native themes to style your components. For more information on how to add the styles, refer to the article on [getting started]({% slug getting_started_javascript_composition_api %}#toc-5-import-the-kendo-ui-for-vue-css-styles).

1. Follow the instructions on the [My License page]({% slug my_license %}) to activate your license. You can skip this step if your application already contains a Kendo UI for Vue license file.

## Dependencies

The Labels package requires the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) that have to be installed by your application:

* vue
* vue-dom
* @progress/kendo-licensing
* @progress/kendo-vue-intl

## Available Utilities

Currently, the Labels package provides the following components:
 * [Label component]({% slug label_labels %})
 * [FloatingLabel component]({% slug floating_label_labels %})
 * [Hint component]({% slug hint_labels %})
 * [Error component]({% slug error_labels %})

## Support and Learning Resources

* [Error Homepage](https://www.telerik.com/kendo-vue-ui/vue-error)
* [FloatingLabel Homepage](https://www.telerik.com/kendo-vue-ui/floatinglabel)
* [Hint Homepage](https://www.telerik.com/kendo-vue-ui/vue-hint)
* [Label Homepage](https://www.telerik.com/kendo-vue-ui/vue-label)
* [API Reference of the Labels Package](slug:api_labels)
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
