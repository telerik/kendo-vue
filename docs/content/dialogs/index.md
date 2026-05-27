---
title: Overview
description: "Get started with the Kendo UI for Vue Native Dialogs package by Kendo UI and learn more about how to use the Dialogs components in Vue projects."
slug: overview_dialogs
position: 0
---

# Kendo UI for Vue Native Dialogs Overview

The Kendo UI for Vue Native Dialogs are UI components for prompting user interaction.

The Dialogs components are part of the Kendo UI for Vue library which provides native Kendo UI components for the Vue ecosystem and are available under the [kendo-vue-dialogs NPM package](https://www.npmjs.com/package/@progress/kendo-vue-dialogs).

<Row>
  <Column count={12}>
    <Component href="{% slug overview_dialog %}">
      <svg id="dialog" viewbox="0 0 24 24">
        <path d="M2,4v20h16l4-4h0V4H2z M20,19.2L17.2,22H4V6h16V19.2z M6,12h8l-2,2H6V12z M20,0h2v2h-2V0z M2,0h16v2H2V0z M6,18
        h5l-2,2H6V18z M13,18h5l-2,2h-3V18z M6,8h12l-2,2H6V8z" />
      </svg>
      <ComponentTitle>Dialog</ComponentTitle>
      <ComponentDescription>A prompt for users to take specific actions by interacting with a modal dialog.</ComponentDescription>
    </Component>
  </Column>
   <Column count={12}>
    <Component href="{% slug overview_window %}">
      <svg id="window" viewbox="0 0 24 24">
        <path d="M4,4H2v2v16v2h2h14l3.999-3.999H22V6V4h-2H4z M20,19.172L17.172,22H4V6h16V19.172z M18,10H6v2h10L18,10z
        M20,0h2v2h-2V0z M16,0h2v2h-2V0z M2,0h12v2H2V0z M12,16l2-2H6v2H12z" />
      </svg>
      <ComponentTitle>Window</ComponentTitle>
      <ComponentDescription>A non-modal HTML window which provides information and can be moved and resized by users.</ComponentDescription>
    </Component>
  </Column>
</Row>

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates the Dialog components in action.

{% meta height:450 %}
{% embed_file overview/main.vue preview %}
{% embed_file overview/main.js %}
{% endmeta %}

## Installation

To initialize the Grid, either:

* [Use the CDN service](#toc-using-cdn), or
* [Use Webpack](#toc-initializing-with-webpack).

### Using CDN
To use the Kendo UI for Vue Native Dialogs with CDN, follow the below steps:

1. Reference the `dialogs` package.

```sh
  <script src="https://unpkg.com/@progress/kendo-vue-dialogs@latest/dist/cdn/js/kendo-vue-dialogs.js"></script>
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
    npm install --save @progress/kendo-vue-dialogs
    ```

1. Once installed, import the package module.

    ```jsx-no-run
    // ES2015 module syntax
    import { Dialog, Window } from '@progress/kendo-vue-dialogs';
    ```

    ```jsx-no-run
    // CommonJS format
    const { Dialog, Window } = require('@progress/kendo-vue-dialogs');
    ```

1. You are required to install one of the Kendo UI themes to style your components. For more information on how to add the styles, refer to the article on [getting started]({% slug getting_started_javascript_composition_api %}#toc-5-import-the-kendo-ui-for-vue-css-styles).

1. Follow the instructions on the Kendo UI for Vue [My License page]({% slug my_license %}) to activate your license. You can skip this step if your application already contains a Kendo UI license file.

## Dependencies

The Dialogs package requires the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) that have to be installed by your application:

* vue 3.0.0*
* @progress/kendo-licensing
* @progress/kendo-svg-icons

> Vue 2 is currently in its end-of-support phase till Nov 2024. After our last major release for 2024, Vue 2 will no longer be supported in the new versions of the Kendo UI for Vue components. Please check our [Vue 2 End of Support article](slug:vue2-end-of-support) for more details.

## Support and Learning Resources

* [Dialog Homepage](https://www.telerik.com/kendo-vue-ui/dialog)
* [Window Homepage](https://www.telerik.com/kendo-vue-ui/window)
* [API Reference of the Dialogs](slug:api_dialogs)
* [Getting Started with Kendo UI for Vue - JavaScript (Online Guide)](slug:getting_started_javascript_composition_api)
* [Getting Started with Kendo UI for Vue - TypeScript (Online Guide)](slug:getting_started_typescript_composition_api)
* [Getting Started with Kendo UI for Vue - JavaScript + Options API (Online Guide)](slug:getting_started_javascript_options_api)
* [Getting Started with Kendo UI for Vue - TypeScript + Options API (Online Guide)](slug:getting_started_typescript_options_api)
* [Getting Started with Kendo UI for Vue - Nuxt 3 (Online Guide)](slug:getting_started_nuxt_3)
* [Virtual Classroom (Training Course for Registered Users)](https://learn.telerik.com/learn/course/internal/view/elearning/45/kendo-ui-for-vue-with-typescript)
* [Kendo UI for Vue Native Forum](https://www.telerik.com/forums/kendo-ui-vue)
* [Knowledge Base](https://www.telerik.com/kendo-vue-ui/components/knowledge-base/)
* [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})

## Additional Resources

* [Vue Blogs](https://www.telerik.com/blogs/tag/kendo-ui-for-vue)
* [Kendo UI for Vue Roadmap](https://www.telerik.com/support/whats-new/kendo-vue-ui/roadmap)
