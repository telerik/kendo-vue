---
title: First Steps (Composition API and Nuxt 3)
page_title: Kendo UI for Vue Native Components with Nuxt 3 Introduction - Kendo UI for Vue Docs & Demos
description: "Get started with the Kendo UI for Vue Native Components in Nuxt 3 using Typescript."
slug: getting_started_nuxt_3
brand: getting-started
heading: Get Started
position: 100
---

# Get Started with Kendo UI for Vue

> Prefer video tutorials? How about a free Telerik UI onboarding course? Check out the [Kendo UI for Vue with TypeScript](https://learn.telerik.com/learn/course/internal/view/elearning/45/kendo-ui-for-vue-with-typescript) training in [Telerik Virtual Classroom](https://learn.telerik.com/learn).

This tutorial will help you develop a simple app that includes a native Vue Data Grid component. To achieve this, you will build a project using [Vite](https://vitejs.dev/) and the [Vue Composition API](https://vuejs.org/guide/introduction.html#composition-api) paired with [Nuxt 3](https://nuxt.com/docs/getting-started/introduction) 


>Curious about JavaScript or the Composition API? This tutorial comes in several additional variants:
>* [Kendo UI for Vue with TypeScript and the Composition API](slug:getting_started_typescript_composition_api)
>* [Kendo UI for Vue with JavaScript and the Options API](slug:getting_started_javascript_options_api)
>* [Kendo UI for Vue with TypeScript and the Options API](slug:getting_started_typescript_options_api)

> Historically, all Kendo UI for Vue Native components have supported both **Vue 2** and **Vue 3**. However, Kendo UI for Vue versions released after **November 2024** will no longer support Vue 2. For more information, see [Vue 2 End of Life](https://www.telerik.com/kendo-vue-ui/components/vue2-deprecation/).

## Create the Vue Project

1. Create a Nuxt project named `my-app`:

```sh
npx nuxi init my-app
```

1. Run the newly created project by executing the following commands:

```
cd my-app
npm install
npm run dev
```

## Clean Up the Generated Project

Before you start playing with Kendo UI for Vue, clean up the sample app created by Nuxt:

1. Delete the `<NuxtWelcome />` line inside the `app.vue` file

## Add Application Data

Add dummy data needed by the components. Create folder `appdata` in the `src` folder. Add the following files to the `appdata` folder.

1. Create a new `appdata/categories.ts` file. Copy the content of [this GitHub file](https://github.com/telerik/kendo-vue/tree/master/getting-started-nuxt3/appdata/categories.ts) and paste it into the `categories.ts` file.

1. Create a new `appdata/products.ts` file. Copy the content of [this GitHub file](https://github.com/telerik/kendo-vue/tree/master/getting-started-nuxt3/appdata/products.ts) and paste it into the `products.ts` file.

## Install the Data Grid Component

Kendo UI for Vue is distributed as multiple NPM packages, scoped to `@progress`. For example, the name of the Grid package is `@progress/kendo-vue-grid`. To use the Grid in your app, add the component and its [dependencies](https://www.telerik.com/kendo-vue-ui/components/grid/#toc-dependencies):

```sh
npm install --save @progress/kendo-vue-grid @progress/kendo-data-query @progress/kendo-licensing @progress/kendo-vue-animation @progress/kendo-vue-data-tools @progress/kendo-vue-dateinputs @progress/kendo-vue-dropdowns @progress/kendo-vue-inputs @progress/kendo-vue-indicators @progress/kendo-vue-intl @progress/kendo-vue-popup
```

## Import the CSS Styles

Kendo UI for Vue includes [four artfully designed themes](slug:themesandstyles) available as separate NPM packages. To style the components, you can use each theme as is or [customize](slug:customizingthemes) it to your liking.

1. Install the [Default theme](https://www.telerik.com/kendo-vue-ui/components/styling/theme-default/):

    ```sh
      npm install --save @progress/kendo-theme-default
    ```

1. In the `nuxt.config.ts` file, import the CSS files provided by the installed theme package:  

    ```js
      import '@progress/kendo-theme-default/dist/all.css';
    ```


## Add a Vue Data Grid Component


1. Now that you've installed all required packages, you are ready to add the Kendo UI for Vue Data Grid to the application.

```sh
npx nuxi add page KendoGrid
```

1. In the `pages/KendoGrid.vue` file, add a `<script>` block and import the Grid and its data:


```js
import { productsData } from '../appdata/products';
import { process, DataResult, State, CompositeFilterDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { Grid as grid } from '@progress/kendo-vue-grid';
```

1. Add a `<template>` block with a simple heading and create a Data Grid. Bind it to the `products` data:

```html
<grid
  :data-items="products"
  :columns="columns"
></grid>
```

1. Add the Data Grid's data and columns in the `setup` section of the `KendoGrid.vue` file:

```js
const products = productsData;
const columns = [
  { field: 'ProductName', title: 'Product Name' },
  { field: 'UnitPrice', title: 'Price' },
  { field: 'UnitsInStock', title: 'Units in Stock' },
  { field: 'Discontinued' }
] as GridColumnProps[];
```

These steps let you render a very basic Grid by running `npm run dev` and navigating to the local URL displayed in the terminal.

> Notice the `No valid license found` message and the watermark in the Grid. They are informational and encourage you to activate your trial or commercial license and to [add a license file to your application](slug:my_license_vue). Once you complete these licensing steps, the license message and the watermark will disappear.

Now that you have a running Grid, you are ready to use some of its basic features like sorting and paging:

1. In the Grid declaration, add [paging](slug:paging_grid), [sorting](slug:sorting_grid), and a height style that activates [scrolling](slug:scrollmmodes_grid).

    ```html
      <template>
          <h1>Hello Kendo UI for Vue!</h1>
          <grid 
            :data-items="products"
            :columns="columns"
            :pageable="pageable"
            :sortable="sortable"
            :style="{ height: '400px' }"
          ></grid>
      </template>
    ```


1. Implement the paging and sorting functionality in the `data` option:

  * Set the [page size (`take`)](slug:api_grid_gridprops#toc-take) to 10.
  * Set the initial [`skip`](slug:api_grid_gridprops#toc-skip) for the paging.
  * Set the initial [sorting](slug:api_grid_gridprops#toc-sort) by Product name.

```js
const skip = ref<number | undefined>(0);
const take = ref<number | undefined>(10);
const sort = ref<SortDescriptor[] | undefined>([
  { field: "ProductName", dir: "asc" }
]);
```


## Get the Complete Source Code

Your Kendo UI for Vue Getting Started application is complete! You can download and run the complete sample application from the [kendo-vue GitHub repository](https://github.com/telerik/kendo-vue/tree/master/getting-started-nuxt3/). Alternatively, run, fork and [experiment with the application directly in StackBlitz](https://stackblitz.com/edit/nuxt-starter-qacprz?file=pages%2Findex.vue).


## Next Steps

* [Activate Your Kendo UI for Vue License](slug:my_license_vue)
* [Create Projects Faster with the Kendo UI for Vue VS Code Extension](slug:getting_started_vscode)
* [Take a Free Entry-Level Kendo UI for Vue (with TypeScript) Course](https://learn.telerik.com/learn/course/internal/view/elearning/45/kendo-ui-for-vue-with-typescript)

