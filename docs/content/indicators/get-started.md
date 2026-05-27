---
title: Getting Started
description: "Get started with the Kendo UI for Vue Native Indicators package and learn how to use the components in a Vue projects."
slug: get_started_indicators
position: 20
---

# Getting Started with the Kendo UI for Vue Native Indicators

This guide provides essential information about using the Kendo UI for Vue Indicators package&mdash;you will learn how to install the package, add Indicators to your project, style the components, and activate your license. The steps demonstrated in this guide are applicable to all Kendo UI for Vue Native Indicators.

<div data-component="StartFreeTrialSection"></div>

After completing this guide, you will be able to reproduce the following example.

{% meta height:250 %}
{% embed_file get-started/main.vue preview %}
{% embed_file get-started/main.js %}
{% endmeta %}

## Setting Up Your Vue Project

Before you install the Kendo UI for Vue Native Indicators, make sure that you have a running Vue project. The easiest way to set up a Vue project is to use the approach described in the [Set up the Vue project]({% slug getting_started_javascript_composition_api %}#toc-1-set-up-the-vue-project) section of the [First Steps with JavaScript ]({% slug getting_started_javascript_composition_api %}) article.

## Installing the Components

All Kendo UI for Vue packages are distributed through npm and offer a similar installation experience. To use any of the Indicators, start with the installation of the npm package and its [dependencies](#toc-dependencies). Use Node.js v5.0.0 or later.

Navigate to the root folder of your Vue project and run the following command:

   ```sh
   npm install --save @progress/kendo-vue-indicators @progress/kendo-licensing
   ```

## Importing the Components

After installing the Indicators package, import the desired components in the Vue App. This guide shows how to add the [Loader]({% slug overview_loader %}).

In the App component file of your Vue project (for example, `src/App.vue`), add the following code:

   ```jsx-no-run
   // ES2015 module syntax
   import { Loader } from '@progress/kendo-vue-indicators';
   ```

   ```jsx-no-run
   // CommonJS format
   const { Loader } = require('@progress/kendo-vue-indicators');
   ```

If your project requires more Indicators, you can import them too. The Indicators package provides the following components:

* Badge
* Loader
* Skeleton

## Using the Components

1. After installing the Indicators package and importing the components, add the Loader to the template section of the App component file of your Vue project (for example, `src/App.vue`).

      ```js
         <div class="example">
            <Loader />
         </div>
      ```

1. To style the Loader, install and import the [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/), which is one of the [four beautiful themes]({% slug themesandstyles %}) for Kendo UI for Vue.

   1. Install the Default theme package.

      ```sh
      npm install --save @progress/kendo-theme-default
      ```

   2. Import the Theme package in `src/App.vue`.

      ```jsx
      import '@progress/kendo-theme-default';
      ```

1. Build, run and test the application by typing the following command in the root folder of your project:

   ```sh
   npm run dev
   ```

Now try to add another component from the Indicators package yourself. The procedures for [installing](#toc-installing-the-components), [importing](#toc-importing-the-components), and [using](#toc-using-the-components) the Indicators components are identical for all components in the package.

## Activating Your License Key

Using any of the UI components in the Kendo UI for Vue Native library requires either a commercial license key or an active trial license key.

Follow the instructions on the [My License page]({% slug my_license %}) to activate your trial or commercial license. You can skip this step if your application already contains a license file.

## Dependencies

The Indicators package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name | Description |
|--------------|-------------|
| vue 2.6.14 or 3.0.0+ | Contains the functionality necessary to define Vue components. |
| @progress/kendo-licensing | Contains the internal infrastructure related to licensing. |

> Vue 2 is currently in its end-of-support phase till Nov 2024. After our last major release for 2024, Vue 2 will no longer be supported in the new versions of the Kendo UI for Vue components. Please check our [Vue 2 End of Support article](slug:vue2-end-of-support) for more details.

## Suggested Links

* [Badge Overview]({% slug overview_badge %})
* [Loader Overview]({% slug overview_loader %})
* [Skeleton Overview]({% slug overview_skeleton %})
* [API Reference of the Indicators]({% slug api_indicators %})

## Learning Resources

* [Kendo UI for Vue - First Steps with JavaScript]({% slug getting_started_javascript_composition_api %})
* [Kendo UI for Vue - First Steps with JavaScript + Options API]({% slug getting_started_javascript_options_api %})
* [Kendo UI for Vue - First Steps with TypeScript]({% slug getting_started_typescript_composition_api %})
* [Kendo UI for Vue - First Steps with TypeScript + Options API]({% slug getting_started_typescript_options_api %})
* [Virtual Classroom - Kendo UI for Vue with TypeScript(Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/internal/view/elearning/45/kendo-ui-for-vue-with-typescript)
* [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})


