---
title: Getting Started
description: "Get started with the Kendo UI for Vue Native ListView package and learn how to use the ListView component in Vue projects."
slug: get_started_listview
position: 10
---

# Getting Started with the Kendo UI for Vue Native ListView

This guide provides essential information about using the Kendo UI for Vue Native ListView package&mdash;you will learn how to install the ListView package, add a ListView component to your project, style the component, and activate your license.

<div data-component="StartFreeTrialSection"></div>

After completing this guide, you will be able to reproduce the following example.

{% meta height:680 %}
{% embed_file get-started/main.vue preview %}
{% embed_file get-started/main.js %}
{% embed_file shared/products.json %}
{% endmeta %}

## Setting Up Your Vue Project

Before you install the Kendo UI for Vue Native ListView, make sure that you have a running Vue project. The easiest way to set up a Vue project is to use the approach described in the [Set up the Vue project](slug:getting_started_javascript_composition_api#toc-1-set-up-the-vue-project) section of the [First Steps with JavaScript ](slug:getting_started_javascript_composition_api) article.

## Installing the ListView Package

All Kendo UI for Vue Native packages are distributed through npm and offer a similar installation experience. To use the ListView component, start with the installation of the ListView npm package and its [dependencies](#toc-dependencies). Use Node.js v5.0.0 or later.

```sh
npm install --save @progress/kendo-vue-listview @progress/kendo-licensing @progress/kendo-svg-icons
```

## Importing the Component

After installing the package, import the ListView component and the `products` data in the Vue App.

In the `src/App.vue` file of your Vue project, import the `ListView` component from the ListView package.

```jsx-no-run
// ES2015 module syntax
import { ListView } from "@progress/kendo-vue-listview";
```

```jsx-no-run
// CommonJS format
const { ListView } = require('@progress/kendo-vue-listview');
```

## Using the Component

1. Import the `products` data in the `src/App.vue` file.

    ```jsx-no-run
        import products from './products.json';
    ```

1. Add the ListView component in the `App` component.

    ```jsx-no-run
    <ListView
        :style="{ width: '100%', height: '600px' }"
        :data-items="products"
        :item="'myItem'"
    >
    </ListView>
    ```

1. Create and add inside the ListBox definition, the `myItem` slot template responsible for rendering each ListView item.

    ```jsx-no-run
    <template #myItem="{ props }">
      <div
        class="k-listview-item"
        :style="{ padding: '10px', borderBottom: '1px solid lightgrey' }"
      >
        {{ props.dataItem.ProductName }}
      </div>
    </template>
    ```

1. To style the ListView, install and import the [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/), which is one of the [four beautiful themes](slug:themesandstyles) for Kendo UI for Vue.

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

The ListView package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name | Description |
|--------------|-------------|
| vue 2.6.14 or 3.0.0+ | Contains the functionality necessary to define Vue components. |
| @progress/kendo-licensing | Contains the internal infrastructure related to licensing. |

> Vue 2 is currently in its end-of-support phase till Nov 2024. After our last major release for 2024, Vue 2 will no longer be supported in the new versions of the Kendo UI for Vue components. Please check our [Vue 2 End of Support article](slug:vue2-end-of-support) for more details.

## Suggested Links

* [Paging](slug:paging_listview)
* [Scrolling](slug:scrolling_listview)
* [Templates](slug:templates_listview)
* [Editing](slug:editing_listview)
* [Filtering](slug:filtering_listview)

## Learning Resources

* [Kendo UI for Vue - First Steps with JavaScript]({% slug getting_started_javascript_composition_api %})
* [Kendo UI for Vue - First Steps with JavaScript + Options API]({% slug getting_started_javascript_options_api %})
* [Kendo UI for Vue - First Steps with TypeScript]({% slug getting_started_typescript_composition_api %})
* [Kendo UI for Vue - First Steps with TypeScript + Options API]({% slug getting_started_typescript_options_api %})
* [Virtual Classroom - Kendo UI for Vue with TypeScript(Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/internal/view/elearning/45/kendo-ui-for-vue-with-typescript)
* [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})
