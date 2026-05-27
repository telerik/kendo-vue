---
title: Overview
description: "Get started with the Kendo UI for Vue Native Tooltip package and learn more about how to use the Tooltip component in Vue projects."
slug: overview_tooltip
position: 1
---

# Kendo UI for Vue Native Tooltip Overview

The Kendo UI for Vue Native Tooltip displays informative text when an element is hovered over or clicked.

The Kendo UI for Vue Tooltip component is part of the Kendo UI for Vue Native library of Vue UI components. It is distributed through NPM under the [kendo-vue-tooltip package](https://www.npmjs.com/package/@progress/kendo-vue-tooltip).

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates the Tooltip in action.



{% meta height:550 %}
{% embed_file overview/main.vue preview %}
{% embed_file overview/main.js %}
{% embed_file overview/styles.css %}
{% endmeta %}


## Functionality and Features

* [Controlled mode]({% slug controlledmode_tooltip %})
* [Specifying anchor elements]({% slug filter_elements_tooltip %})
* [Defining the position]({% slug positioning_tooltip %})
* [Setting a content template]({% slug templates_tooltip %})
* [Rendering multiple Tooltips]({% slug multiple_tooltips_tooltip %})
* [Customizing the Tooltip]({% slug customization_tooltip %})

## Installation

1. Download and install the package. Use Node.js v5.0.0 or later.

    ```sh
    npm install --save @progress/kendo-vue-tooltip @progress/kendo-licensing
    ```

1. Once installed, import the package module.

    ```jsx-no-run
    // ES2015 module syntax
    import { Tooltip } from '@progress/kendo-vue-tooltip';
    ```

    ```jsx-no-run
    // CommonJS format
    const { Tooltip } = require('@progress/kendo-vue-tooltip');
    ```

1. You are required to install one of the Kendo UI for Vue themes to style your components. For more information on how to add the styles, refer to the [style section]({% slug getting_started_javascript_composition_api %}#toc-5-import-the-kendo-ui-for-vue-css-styles) of our getting started article.

1. Follow the instructions on the Kendo UI for Vue [My License page]({% slug my_license %}) to activate your license. You can skip this step if your application already contains a Kendo UI for Vue license file.

## Dependencies

The Tooltip package requires the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) that have to be installed by your application:

* vue 3.0.0*
* @progress/kendo-licensing

> Vue 2 is currently in its end-of-support phase till Nov 2024. After our last major release for 2024, Vue 2 will no longer be supported in the new versions of the Kendo UI for Vue components. Please check our [Vue 2 End of Support article](slug:vue2-end-of-support) for more details.

## Support and Learning Resources

* [Tooltip Homepage](https://www.telerik.com/kendo-vue-ui/tooltip)
* [API Reference of the Tooltip Component](slug:api_tooltip_tooltipprops)
* [Getting Started with Kendo UI for Vue - JavaScript (Online Guide)](slug:getting_started_javascript_composition_api)
* [Getting Started with Kendo UI for Vue - TypeScript (Online Guide)](slug:getting_started_typescript_composition_api)
* [Getting Started with Kendo UI for Vue - JavaScript + Options API (Online Guide)](slug:getting_started_javascript_options_api)
* [Getting Started with Kendo UI for Vue - TypeScript + Options API (Online Guide)](slug:getting_started_typescript_options_api)
* [Getting Started with Kendo UI for Vue - Nuxt 3 (Online Guide)](slug:getting_started_nuxt_3)
* [Virtual Classroom (Training Course for Registered Users)](https://learn.telerik.com/learn/course/internal/view/elearning/45/kendo-ui-for-vue-with-typescript)
* [Tooltip Forum](https://www.telerik.com/forums/kendo-ui-vue?searchText=tooltip)
* [Knowledge Base](https://www.telerik.com/kendo-vue-ui/components/knowledge-base/)
* [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})

## Additional Resources

* [Vue Blogs](https://www.telerik.com/blogs/tag/kendo-ui-for-vue)
* [Kendo UI for Vue Roadmap](https://www.telerik.com/support/whats-new/kendo-vue-ui/roadmap)
