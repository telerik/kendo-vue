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

This tutorial will help you develop a simple app that includes a native Vue Data Grid component. To achieve this, you will build a project using [Vite](https://vitejs.dev/) and the [Vue Composition API](https://vuejs.org/guide/introduction.html#composition-api) paired with [Nuxt 3](https://nuxt.com/docs/getting-started/introduction) 


>Curious about JavaScript or the Composition API? This tutorial comes in several additional variants:
>* [Kendo UI for Vue with TypeScript and the Composition API](slug:getting_started_typescript_composition_api)
>* [Kendo UI for Vue with JavaScript and the Options API](slug:getting_started_javascript_options_api)
>* [Kendo UI for Vue with TypeScript and the Options API](slug:getting_started_typescript_options_api)

## Create the Vue Project

1. Create a Nuxt project named `my-app`:

    ```sh
    npx nuxi init my-app
    ```

1. Select the NPM package manager.

   > You can use both NPM and Yarn to create the project and import the Kendo UI for Vue components. This tutorial demonstrates only the NPM approach.

1. Run the newly created project by executing the following commands:

    ```
    cd my-app
    npm install
    npm run dev
    ```

## Clean Up the Generated Project

Before you start playing with Kendo UI for Vue, clean up the Nuxt sample app:

1. Replace the `<NuxtWelcome />` line inside the `app.vue` file with `<NuxtPage/>`.
1. Delete everything in the `nuxt.config.ts` file.

## Add Application Data

Add dummy data needed by the components. Create folder `appdata` in the `src` folder. Add the following files to the `appdata` folder.

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

    ```ts
      export default defineNuxtConfig({
        css: [
          '@progress/kendo-theme-default/dist/all.css',
        ],
      })
    ```

>To add any custom styles to your app, insert a `<styles>` tag in the `src/App.vue` file and place your styles there.

## Add a Vue Data Grid Component

1. Now that you've installed all required packages, you are ready to add the Kendo UI for Vue Data Grid to the application.

    ```sh
    npx nuxi add page KendoGrid
    ```

1. Add a `<script>` block to the `pages/KendoGrid.vue` file, import the Grid and its data. In addition, the `process` function from the [Data Query](https://www.telerik.com/kendo-vue-ui/components/dataquery/) package will allow you to apply data operations like sorting, paging, and filtering.

    ```js
    <script>
        import { productsData } from '../appdata/products';
        import { process, type DataResult, type State, type SortDescriptor } from '@progress/kendo-data-query';
        import { Grid as grid } from '@progress/kendo-vue-grid';
    </script>
    ```

1. Add a `<template>` block with a simple heading and create a Data Grid. Bind it to the `products` data:

    ```html
    <template>
        <h1>Hello Kendo UI for Vue with Nuxt 3!</h1>
        <grid
          :data-items="products"
          :columns="columns"
        ></grid>
    </template>
    ```

1. In the `<script>` section of the `pages\KendoGrid.vue` file:

   * Load the `products` file.
   * Define user friendly column names.

    ```js
    const products = productsData;
    const columns = [
      { field: 'ProductName', title: 'Product Name' },
      { field: 'UnitPrice', title: 'Price' },
      { field: 'UnitsInStock', title: 'Units in Stock' },
      { field: 'Discontinued' }
    ] as GridColumnProps[];
    ```

After completing all the steps above, your `KendoGrid.vue` will look like this:

    ```js
    import { productsData } from '../appdata/products';
    import { process, type DataResult, type State, type SortDescriptor } from '@progress/kendo-data-query';
    import { Grid as grid, type GridColumnProps, type GridDataStateChangeEvent } from '@progress/kendo-vue-grid';

    <script>
    const products = productsData;
    const columns = [
      { field: 'ProductName', title: 'Product Name' },
      { field: 'UnitPrice', title: 'Price' },
      { field: 'UnitsInStock', title: 'Units in Stock' },
      { field: 'Discontinued' }
    ] as GridColumnProps[];
    </script>
    
    <template>
     <h1>Hello Kendo UI for Vue with Nuxt 3!</h1>
     <grid :data-items="products" :columns="columns"></grid>
    </template>
    ```

This sample code lets you run an application with a very basic Grid:

1. Execute the `npm run dev` command.
1. Navigate to the local URL displayed in the terminal.

> Notice the `No valid license found` message and the watermark in the Grid. They are informational and encourage you to activate your trial or commercial license and to [add a license file to your application](slug:my_license_vue). Once you complete these licensing steps, the license message and the watermark will disappear.

## Configure the Vue Data Grid

Now that you have a running Grid, you are ready to use some of its basic features like sorting and paging.

1. In the Grid declaration, add [paging](slug:paging_grid), [sorting](slug:sorting_grid), and a height style that activates [scrolling](slug:scrollmmodes_grid).

    ```html
    <template>
        <h1>Hello Kendo UI for Vue with Nuxt 3!</h1>
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

    - Set the [page size (`take`)](slug:api_grid_gridprops#toc-take) to 10.
    - Set the initial [`skip`](slug:api_grid_gridprops#toc-skip) for the paging.
    - Set the initial [sorting](slug:api_grid_gridprops#toc-sort) by Product name.
    - Set [`sortable`](slug:api_grid_gridprops#toc-sortable) to `true`.
    - Set [`pageable`](slug:api_grid_gridprops#toc-pageable) to `true`.
    - Initialize the `dataResult` empty array.

    ```js
    <script lang="ts">
    const skip = ref<number | undefined>(0);
    const take = ref<number | undefined>(10);
    const pageable = ref(true);
    const sortable = ref(true);
    const sort = ref<SortDescriptor[] | undefined>([
      { field: "ProductName", dir: "asc" }
    ]);
    const columns = [
      { field: 'ProductName', title: 'Product Name' },
      { field: 'UnitPrice', title: 'Price' },
      { field: 'UnitsInStock', title: 'Units in Stock' },
      { field: 'Discontinued', cell: 'discontinuedTemplate' }
    ] as GridColumnProps[];
    const dataResult = ref<DataResult>({ data: [] as any, total: 0 });
    </script>
    <template>
      <grid
        :data-items="dataResult"
        :pageable="pageable"
        :sortable="sortable"
        :columns="columns"
        :skip="skip"
        :take="take"
        :sort="sort"
      ></grid>
    </template>
    ```

1. Inside the `onMounted` set the initial `dataState`. This allows the Grid to have the processed data ready for displaying when rendered for the first time.

    ```js
    <script lang="ts" setup>
    onMounted(() => {
      const dataState: State = {
        skip: skip.value,
        take: take.value,
        sort: sort.value,
      };
      dataResult.value = process(products, dataState);
    });
    ```

1. Inside the `script` tag handle the `dataStateChange` event and implement a `createAppState` helper method:

   * The `dataStateChange` event is triggered when the user interacts with the Grid and calls the `createAppState` helper method.
   * The `createAppState` helper method will update the component's state based on the Grid's current data state (`skip`, `take`, `sort`).
   * The `dataResult` is updated with the newly processed data and causes the Grid to re-render and display the data according to the new state.

    ```js
    <script lang="ts" setup>

    const createAppState = (dataState: State) => {
      take.value = dataState.take;
      skip.value = dataState.skip;
      sort.value = dataState.sort;
    };

    const dataStateChange = (event: GridDataStateChangeEvent) => {
      createAppState(event.data);
      dataResult.value = process(products, {
        skip: event.data.skip,
        take: event.data.take,
        sort: event.data.sort,
      });
    };

   </script>
    ```

1. Re-define the Grid declaration to allow paging and sorting:

    * Set Grid data to `data-items="dataResult"`&mdash;With paging enabled, the `data` option must contain only the items for the current page.
    * Set the `pageable` and `sortable` props.
    * Set the `skip`, `take`, and `sort` props that configure paging and sorting.
    * Bind the `@datastatechange` event of the Grid to the `dataStateChange` method to handle the user interactions.

    ```html
    <template>
      <grid
        :data-items="dataResult"
        :pageable="pageable"
        :sortable="sortable"
        :columns="columns"
        :skip="skip"
        :take="take"
        :sort="sort"
        @datastatechange="dataStateChange"
      ></grid>
    </template>
    ```

That's it. You now have a Data Grid configured for paging and sorting.

> Historically, all Kendo UI for Vue native components have supported both **Vue 2** and **Vue 3**. However, Kendo UI for Vue versions released after **November 2024** will no longer support Vue 2. For more information, see [Vue 2 End of Life](https://www.telerik.com/kendo-vue-ui/components/vue2-deprecation/).

## Get the Complete Source Code

Your Kendo UI for Vue Getting Started application is complete! You can download and run the complete sample application from the [kendo-vue GitHub repository](https://github.com/telerik/kendo-vue/tree/master/getting-started-nuxt3/). Alternatively, run, fork and [experiment with the application directly in StackBlitz](https://stackblitz.com/edit/nuxt-starter-qacprz?file=pages%2Findex.vue).


## Next Steps

* [Activate Your Kendo UI for Vue License](slug:my_license_vue)
* [Create Projects Faster with the Kendo UI for Vue VS Code Extension](slug:getting_started_vscode)
* [Take a Free Entry-Level Kendo UI for Vue (with TypeScript) Course](https://learn.telerik.com/learn/course/internal/view/elearning/45/kendo-ui-for-vue-with-typescript)

