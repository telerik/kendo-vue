---
title: Overview
description: "Get started with the Vue Popup package by Kendo UI and learn more about how to use the Popup component in Vue projects."
slug: overview_popup
position: 1
---

# Kendo UI for Vue Native Popup Component Overview

The KendoVue Popup positions a piece of content next to a specific anchor component.

The KendoVue Popup component is part of the KendoVue library of Vue UI components. It is distributed through NPM under the [kendo-vue-popup package](https://www.npmjs.com/package/@progress/kendo-vue-popup).

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates the Popup in action.

{% meta height:300 %}
{% embed_file basic/main.vue preview %}
{% embed_file basic/main.js %}
{% embed_file basic/styles.css %}
{% endmeta %}

## Functionality and Features

* [Hidden Popup]({% slug hidden_popup %})
* [Animations]({% slug animations_popup %})
* [Aligning and positioning]({% slug alignmentpositioning_popup %})
* [Viewport boundary detection]({% slug viewportboundarydetection_popup %})
* [Stack order]({% slug stackorder_popup %})
* [Appearance]({% slug appearance_popup %})

>To learn more about the appearance, anatomy, and accessibility of the Popup, visit the [Progress Design System documentation](https://www.telerik.com/design-system/docs/components/popup/). This information portal offers rich component usage guidelines, descriptions of the available style variables, and globalization support details.

## Installation

To initialize the Popup, either:

* [Use the CDN service](#toc-using-cdn), or
* [Use Webpack](#toc-initializing-with-webpack).

### Using CDN

### Using CDN
To use the Kendo UI for Vue Native Popup component with CDN, follow the below steps:

1. Reference the `popup` package.

```sh
  <script src="https://unpkg.com/@progress/kendo-vue-popup@latest/dist/cdn/js/kendo-vue-popup.js"></script>
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
    npm install --save @progress/kendo-vue-popup @progress/kendo-licensing
    ```

2. Once installed, import the package module.

   ```jsx-no-run
    // ES2015 module syntax
    import { Popup } from '@progress/kendo-vue-popup';
    ```
    ```jsx-no-run
    // CommonJS format
    const { Popup } = require('@progress/kendo-vue-popup');
    ```

3. You are required to install one of the Kendo UI themes to style your components. For more information on how to add the styles, refer to the article on [getting started]({% slug getting_started_javascript_composition_api %}#toc-5-import-the-kendo-ui-for-vue-css-styles).

4. Follow the instructions on the Kendo UI for Vue [My License page]({% slug my_license %}) to activate your license. You can skip this step if your application already contains a Kendo UI license file.

## Dependencies

The Popup package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

* vue 3.0.0*
* @progress/kendo-licensing

> Vue 2 is currently in its end-of-support phase till Nov 2024. After our last major release for 2024, Vue 2 will no longer be supported in the new versions of the Kendo UI for Vue components. Please check our [Vue 2 End of Support article](slug:vue2-end-of-support) for more details.

## Support and Learning Resources

* [Popup Homepage](https://www.telerik.com/kendo-vue-ui/popup)
* [API Reference of the Popup Component](slug:api_popup)
* [Getting Started with Kendo UI for Vue - JavaScript (Online Guide)](slug:getting_started_javascript_composition_api)
* [Getting Started with Kendo UI for Vue - TypeScript (Online Guide)](slug:getting_started_typescript_composition_api)
* [Getting Started with Kendo UI for Vue - JavaScript + Options API (Online Guide)](slug:getting_started_javascript_options_api)
* [Getting Started with Kendo UI for Vue - TypeScript + Options API (Online Guide)](slug:getting_started_typescript_options_api)
* [Getting Started with Kendo UI for Vue - Nuxt 3 (Online Guide)](slug:getting_started_nuxt_3)
* [Virtual Classroom (Training Course for Registered Users)](https://learn.telerik.com/learn/course/internal/view/elearning/45/kendo-ui-for-vue-with-typescript)
* [Popup Forum](https://www.telerik.com/forums/kendo-ui-vue?searchText=popup)
* [Knowledge Base](https://www.telerik.com/kendo-vue-ui/components/knowledge-base/)
* [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})

## Additional Resources

* [Vue Blogs](https://www.telerik.com/blogs/tag/kendo-ui-for-vue)
* [Kendo UI for Vue Roadmap](https://www.telerik.com/support/whats-new/kendo-vue-ui/roadmap)
