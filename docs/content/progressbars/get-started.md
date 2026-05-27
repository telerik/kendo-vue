---
title: Getting Started
description: "Get started with the Kendo UI for Vue ProgressBars package and learn more about how to use the ProgressBar components in Vue projects."
slug: get_started_progressbars
position: 10
---

# Getting Started with the Kendo UI for Vue Native ProgressBars

This guide provides essential information about how the Kendo UI for Vue Native ProgressBars package can be used. Below you will learn how to install the package, add ProgressBars to your project, style these components, and activate your license. The steps demonstrated in this guide are applicable to all Kendo UI for Vue Native ProgressBars.

<div data-component="StartFreeTrialSection"></div>

After completing this guide, you will be able to reproduce the following example.

{% meta height:150 %}
{% embed_file get-started/main.vue preview %}
{% embed_file get-started/main.js %}
{% endmeta %}


## Setting Up Your Vue Project

Before you install the Kendo UI for Vue Native ProgressBars, make sure that you have a running Vue project. The easiest way to set up a Vue project is to use the approach described in the [Set up the Vue project](slug:getting_started_javascript_composition_api#toc-1-set-up-the-vue-project) section of the [First Steps with JavaScript ](slug:getting_started_javascript_composition_api) article.

## Installing the ProgressBars Package

All Kendo UI for Vue Native packages are distributed through npm and offer a similar installation experience. To use the ProgressBar/ChunkProgressBar component, start with the installation of the ProgressBars npm package and its [dependencies](#toc-dependencies). Use Node.js v5.0.0 or later.

```sh
npm install --save @progress/kendo-vue-progressbars @progress/kendo-licensing
```

## Importing the Component

After installing the package, import the ProgressBar component in the Vue App.

In the `src/App.vue` file of your Vue project, import the `ProgressBar` component from the ProgressBars package.

```jsx-no-run
// ES2015 module syntax
import { Progressbar, ChunkProgressBar } from '@progress/kendo-vue-progressbars';
```
```jsx-no-run
// CommonJS format
const { Progressbar, ChunkProgressBar } = require('@progress/kendo-vue-progressbars');
```

If your project requires more ProgressBars, you can import them too. The ProgressBars package provides the following components:
* ProgressBar
* ChunkProgressBar

## Using the Component

1. Add the ProgressBar in the `App.vue` component.

    ```jsx-no-run
    <ProgressBar :value="value" />
    ```
1. Define the `value` property.

    ```jsx-no-run
    data() {
      return {
        value: 55,
      };
    }
    ```
1. To style the ProgressBar, install and import the [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/), which is one of the [four beautiful themes](slug:themesandstyles) for Kendo UI for Vue.

   1. Install the Default theme package.

      ```sh
      npm install --save @progress/kendo-theme-default
      ```

   2. Import the Theme package in `src/App.vue`..

      ```jsx
      import '@progress/kendo-theme-default';
      ```

1. Build, run and test the application by typing the following command in the root folder of your project:

   ```sh
   npm run dev
   ```

## Activating Your License Key

Using any of the UI components in the Kendo UI for Vue Native library requires either a commercial license key or an active trial license key.

Follow the instructions on the [My License page](slug:my_license) to activate your trial or commercial license. You can skip this step if your application already contains a Kendo UI for Vue license file.

## Dependencies

The ProgressBars package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name | Description |
|--------------|-------------|
| vue 2.6.14 or 3.0.0+ | Contains the functionality necessary to define Vue components. |
| @progress/kendo-licensing | Contains the internal infrastructure related to licensing. |

> Vue 2 is currently in its end-of-support phase till Nov 2024. After our last major release for 2024, Vue 2 will no longer be supported in the new versions of the Kendo UI for Vue components. Please check our [Vue 2 End of Support article](slug:vue2-end-of-support) for more details.

## Suggested Links
* [Get Started with the ProgressBar]({% slug overview_progressbar %})
* [Get Started with the ChunkProgressBar]({% slug overview_chunkprogressbar %})
* [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})
