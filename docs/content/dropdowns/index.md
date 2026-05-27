---
title: Overview
description: "Get started with the Vue Dropdowns package by Kendo UI and learn more about how to use the Dropdowns components in Vue projects."
slug: overview_dropdowns
position: 0
---

# Kendo UI for Vue Native Dropdowns Overview

The KendoVue Dropdowns allow you to choose from a predefined list of options.

The Dropdowns components are part of the KendoVue library which provides native Kendo UI components for the Vue ecosystem and are available under the [kendo-vue-dropdowns NPM package](https://www.npmjs.com/package/@progress/kendo-vue-dropdowns).

<Row>
    <Column count={6}>
        <Component href="{% slug overview_autocomplete %}">
            <svg id="autocomplete" viewbox="0 0 72 72">
                <path d="M60,57.5L51.5,66H12V18H6v54h48l12-12V15h-6V57.5z M18,21v6h30l6-6H18z M54,33H18v6h30L54,33z M18,51h18l6-6H18 V51z M42,3v6h24l6-6H42z M0,0h36v12H0V0z" />
            </svg>
            <ComponentTitle>AutoComplete</ComponentTitle>
            <ComponentDescription>A list of suggestions for typed content.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_combobox %}">
            <svg id="combobox" viewbox="0 0 72 72">
                <path d="M66,12v48L54,72H12H6v-6V12h6v54h39.5l8.5-8.5V12H66z M18,24h30l6-6H18V24z M54,6h12l6-6H54V6z M0,6h48V0H0V6z M18,36h30l6-6H18V36z M18,48h18l6-6H18V48z" />
            </svg>
            <ComponentTitle>ComboBox</ComponentTitle>
            <ComponentDescription>A list for picking single items or entering custom values.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_dropdownlist %}">
            <svg id="dropdownlist" viewbox="0 0 72 72">
                <path d="M60,57.5L51.5,66H12V12H6v54v6h6h42l12-12V12h-6V57.5z M18,18v6h30l6-6H18z M0,0v6h66l6-6H0z M18,36h30l6-6H18 V36z M18,48h18l6-6H18V48z" />
            </svg>
            <ComponentTitle>DropDownList</ComponentTitle>
            <ComponentDescription>A predefined list of options for picking single values.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_dropdowntree %}">
            <svg id="dropdowntree" viewbox="0 0 24 24">
                <path d="M13,10v1h4l1-1H13z M15,13h-3v3h3V13z M16,14v1h1l1-1H16z M20,19.2L17.2,22H4V4H2v20h16l4-4l0,0V4h-2V19.2z M18,18h-5v1h4  L18,18z M9,12h3V9H9V12z M0,0v2h22l2-2H0z M10,6v1h7l1-1H10z M6,8h3V5H6V8z M9,20h3v-3H9V20z" />
            </svg>
            <ComponentTitle>DropDownTree</ComponentTitle>
            <ComponentDescription>A predefined hierarchical list of options.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_multiselect %}">
            <svg id="multiselect" viewbox="0 0 72 72">
                <path d="M60,57.5L51.5,66H12V12H6v54v6h6h42l12-12V12h-6V57.5z M18,18v6h30l6-6H18z M0,0v6h66l6-6H0z M18,36h30l6-6H18 V36z M18,48h18l6-6H18V48z" />
            </svg>
            <ComponentTitle>MultiSelect</ComponentTitle>
            <ComponentDescription>A predefined hierarchical list for multiple item selection.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="slug:overview_multiselecttree">
            <ComponentIcon>
                <path d="M13,10v1h4l1-1H13z M15,13h-3v3h3V13z M16,14v1h1l1-1H16z M20,19.2L17.2,22H4V4H2v20h16l4-4l0,0V4h-2V19.2z M18,18h-5v1h4
                L18,18z M9,12h3V9H9V12z M0,0v2h22l2-2H0z M10,6v1h7l1-1H10z M6,8h3V5H6V8z M9,20h3v-3H9V20z"/>
            </ComponentIcon>
            <ComponentTitle>MultiSelectTree</ComponentTitle>
            <ComponentDescription>A predefined list rendered in a tree-like structure for multiple item selection.</ComponentDescription>
        </Component>
    </Column>
</Row>

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates the `AutoComplete`, `ComboBox`, `DropDownList`, `DropDownTree`, `MultiSelect`, and `MultiSelectTree` components in action.

{% meta height:670 %}
{% embed_file overview/main.vue preview %}
{% embed_file overview/main.js %}
{% embed_file shared/tree-data.js %}
{% embed_file shared/multiselecttree-data-operations.js %}
{% embed_file shared/tree-data-operations.js %}
{% endmeta %}

## Installation

To initialize the DropDowns, either:

- [Use the CDN service](#toc-using-cdn), or
- [Use Webpack](#toc-initializing-with-webpack).

### Using CDN

To use the Kendo UI for Vue Native DropDowns with CDN, follow the below steps:

1. Reference the `dropdowns` and `intl` packages. If you need data manipulation you can add the data-query package reference it in the code by using `KendoDataQuery` object - for example KendoDataQuery.orderBy().

```sh
  <script src="https://unpkg.com/@progress/kendo-data-query@1.5.2/dist/cdn/js/kendo-data-query.js"></script>
  <script src="https://unpkg.com/@progress/kendo-vue-intl@latest/dist/cdn/js/kendo-vue-intl.js"></script>
  <script src="https://unpkg.com/@progress/kendo-vue-dropdowns@latest/dist/cdn/js/kendo-vue-dropdowns.js"></script>
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
   npm install --save @progress/kendo-vue-dropdowns @progress/kendo-vue-intl @progress/kendo-licensing @progress/kendo-svg-icons
   ```

1. Once installed, import the package module.

   ```jsx-no-run
    // ES2015 module syntax
    import { AutoComplete, ComboBox, DropDownList, DropDownTree, MultiSelect, MultiSelectTree } from '@progress/kendo-vue-dropdowns';
   ```

   ```jsx-no-run
   // CommonJS format
   const { AutoComplete, ComboBox, DropDownList, DropDownTree, MultiSelect, MultiSelectTree } = require('@progress/kendo-vue-dropdowns');
   ```

1. You are required to install one of the Kendo UI themes to style your components. For more information on how to add the styles, refer to the article on [getting started]({% slug getting_started_javascript_composition_api %}#toc-5-import-the-kendo-ui-for-vue-css-styles).

1. Follow the instructions on the Kendo UI for Vue [My License page]({% slug my_license %}) to activate your license. You can skip this step if your application already contains a Kendo UI license file.

## Dependencies

The Dropdowns package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

- vue 3.0.0*
- @progress/kendo-vue-intl
- @progress/kendo-licensing

> Vue 2 is currently in its end-of-support phase till Nov 2024. After our last major release for 2024, Vue 2 will no longer be supported in the new versions of the Kendo UI for Vue components. Please check our [Vue 2 End of Support article](slug:vue2-end-of-support) for more details.

## Support and Learning Resources

- [AutoComplete Homepage](https://www.telerik.com/kendo-vue-ui/autocomplete)
- [ComboBox Homepage](https://www.telerik.com/kendo-vue-ui/combobox)
- [DropDownList Homepage](https://www.telerik.com/kendo-vue-ui/dropdownlist)
- [DropDownTree Homepage](https://www.telerik.com/kendo-vue-ui/dropdowntree)
- [MultiSelect Homepage](https://www.telerik.com/kendo-vue-ui/multiselect)
- [MultiSelectTree Homepage](https://www.telerik.com/kendo-vue-ui/multiselecttree)
- [API Reference of the DropDowns](slug:api_dropdowns)
- [Getting Started with Kendo UI for Vue - JavaScript (Online Guide)](slug:getting_started_javascript_composition_api)
- [Getting Started with Kendo UI for Vue - TypeScript (Online Guide)](slug:getting_started_typescript_composition_api)
- [Getting Started with Kendo UI for Vue - JavaScript + Options API (Online Guide)](slug:getting_started_javascript_options_api)
- [Getting Started with Kendo UI for Vue - TypeScript + Options API (Online Guide)](slug:getting_started_typescript_options_api)
- [Getting Started with Kendo UI for Vue - Nuxt 3 (Online Guide)](slug:getting_started_nuxt_3)
- [Virtual Classroom (Training Course for Registered Users)](https://learn.telerik.com/learn/course/internal/view/elearning/45/kendo-ui-for-vue-with-typescript)
- [Kendo UI for Vue Native Forum](https://www.telerik.com/forums/kendo-ui-vue)
- [Knowledge Base](https://www.telerik.com/kendo-vue-ui/components/knowledge-base/)
- [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})

## Additional Resources

- [Vue Blogs](https://www.telerik.com/blogs/tag/kendo-ui-for-vue)
- [Kendo UI for Vue Roadmap](https://www.telerik.com/support/whats-new/kendo-vue-ui/roadmap)
