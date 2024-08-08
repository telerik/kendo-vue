---
title: First Steps (Options API and TypeScript)
page_title: Kendo UI for Vue Native Components with TypeScript  and Options API Introduction - Kendo UI for Vue Docs & Demos
description: "Get started with the Kendo UI for Vue Native Components using Typescript, Vite and Options API."
slug: getting_started_typescript_options_api
brand: getting-started
heading: Get Started
position: 30
---


# Get Started with Kendo UI for Vue

This tutorial will help you develop a simple app that includes a native Vue Data Grid component. To achieve this, you will build a project using [Vite](https://vitejs.dev/) and the [Vue Composition API](https://github.com/telerik/kendo-vue/tree/master/getting-started-javascript-options-api) paired with TypeScript.

>Curious about JavaScript or the Composition API? This tutorial comes in several additional variants:
>* [Kendo UI for Vue with TypeScript and the Composition API](slug:getting_started_typescript_composition_api)
>* [Kendo UI for Vue with JavaScript and the Options API](slug:getting_started_javascript_options_api)
>* [Kendo UI for Vue with the Composition API and Nuxt 3](slug:getting_started_nuxt_3)

## Create the Vue Project

The recommended way to scaffold your Vue project is using [Vite](https://vuejs.org/guide/scaling-up/tooling.html#vite).


> You can use both NPM and Yarn to create the project and import the Kendo UI for Vue components. This tutorial demonstrates only the NPM approach.

1. Create the Vue project:

    ```sh
    npm create vite@latest
    ```

1. Enter the project name, for example, `my-app`.

1. Select the Vue framework by using the arrow keys.

    ```sh
    ? Select a framework: » - Use arrow-keys. Return to submit.
        Vanilla
    >   Vue
        React
        ...
    ```

1. Select the TypeScript framework variant.

    ```sh
    ? Select a variant: » - Use arrow-keys. Return to submit.
    >  TypeScript
       JavaScript
        ...
    ```
1. Run the newly created project by executing the following commands:

    ```sh
    cd my-app
    npm install
    npm run dev
    ```

## Clean Up the Generated Project

Before you start playing with Kendo UI for Vue, clean up the sample app created by Vite:

1. Delete the `HelloWorld.vue` file in the `src/components` folder.
1. Remove everything in the `src/App.vue` file and leave it blank.
1. Delete the `import './style.css'` line in the `src/main.ts` file.

Now, when we are ready with the blank Vue project, we can continue the development of our sample application. 

## Add Application Data

Components like the Grid need some data that they can display, so, in this step, you will add a file with sample data:

1. Create a new `src/appdata/products.ts` file. Copy the content of [this GitHub file](https://github.com/telerik/kendo-vue/tree/master/getting-started-typescript-composition-api/src/appdata/categories.ts) and paste it into the `products.ts` file.

1. Create a new `src/appdata/categories.ts` file. Copy the content of [this GitHub file](https://github.com/telerik/kendo-vue/tree/master/getting-started-typescript-composition-api/src/appdata/categories.ts) and paste it into the `categories.ts` file.

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

1. In the `src/App.vue` file, import the CSS files provided by the installed theme package:  

    ```js
      import '@progress/kendo-theme-default/dist/all.css';
    ```

To add any custom styles to your app, insert a `<styles>` tag in the `src/App.vue` file and place your styles there.


## Add a Vue Data Grid Component

Now that you've installed all required packages, you are ready to add the Kendo UI for Vue Data Grid to the application:


1. In the `<script>` block of the `src/App.vue` file, import the Grid and its data. In addition, the `process` function from the [Data Query](https://www.telerik.com/kendo-vue-ui/components/dataquery/) package will allow you to apply data operations like sorting, paging, and filtering.


    ```js
    import { products } from './appdata/products';
    import { process } from '@progress/kendo-data-query';
    import { Grid } from '@progress/kendo-vue-grid';
    ```


1. Add a `<template>` block with a simple heading and create a Data Grid. Bind it to the `products` data:

    ```html
    <template>
        <h1>Hello Kendo UI for Vue!</h1>
        <grid
          :data-items="products"
          :columns="columns"
        ></grid>
    </template>
    ```

1. Define the Grid in the `<script>` configuration:

    ```js
    export default {
      name: 'App',
      components: {
        grid: Grid,
      },
    }
    ```
    
1. In the `data` options of the Grid:

   * Load the data from the `categories` and `products` files.
   * Define user friendly column names.

    ```js
    data: function() {
      return {
        categories: categories,
        products: products,
        columns: [
          { field: 'ProductName', title: 'Product Name' },
          { field: 'UnitPrice', title: 'Price' },
          { field: 'UnitsInStock', title: 'Units in Stock' },
          { field: 'Discontinued' }
        ]
      }
    }
    ```
 

These steps let you render a very basic Grid by running `npm run dev` and navigating to the local URL displayed in the terminal.

> Notice the `No valid license found` message and the watermark in the Grid. They are informational and encourage you to activate your trial or commercial license and to [add a license file to your application](slug:my_license_vue). Once you complete these licensing steps, the license message and the watermark will disappear.

## Add a Vue Data Grid Component

Now that you've installed all required packages, you are ready to add the Kendo UI for Vue Data Grid to the application:

1. In the `<script>` block of the `src/App.vue` file, import the Grid and its data. In addition, the `process` function from the [Data Query](https://www.telerik.com/kendo-vue-ui/components/dataquery/) package will allow you to use data operations like sorting, paging, and filtering.

    ```js
    import { products } from './appdata/products';
    import { process } from '@progress/kendo-data-query';
    import { Grid } from '@progress/kendo-vue-grid';
    ```

1. Add a `<template>` block with a simple heading and create a Data Grid. Bind it to the `products` data:

    ```html
    <template>
        <h1>Hello Kendo UI for Vue!</h1>
        <grid
          :data-items="products"
          :columns="columns"
        ></grid>
    </template>
    ```

1. Define the Grid in the `<script>` configuration:

    ```js
    export default {
      name: 'App',
      components: {
        grid: Grid,
      },
    }
    ```

1. In the `data` options of the Grid:

   * Load the data from the `categories` and `products` files.
   * Define user friendly column names.

    ```js
    data: function() {
      return {
        categories: categories,
        products: products,
        columns: [
          { field: 'ProductName', title: 'Product Name' },
          { field: 'UnitPrice', title: 'Price' },
          { field: 'UnitsInStock', title: 'Units in Stock' },
          { field: 'Discontinued' }
        ]
      }
    }
    ```


After completing all the steps above, your `App.vue` will look like this:

    ```js
    <script>
    import { products } from './appdata/products';
    import { process } from '@progress/kendo-data-query';
    import { Grid } from '@progress/kendo-vue-grid';

    export default {
      name: 'App',
      components: {
        grid: Grid,
      },
    },
    data: function() {
      return {
        categories: categories,
        products: products,
        columns: [
          { field: 'ProductName', title: 'Product Name' },
          { field: 'UnitPrice', title: 'Price' },
          { field: 'UnitsInStock', title: 'Units in Stock' },
          { field: 'Discontinued' }
        ]
      }
    }
    </script>

    <template>
    <h1>Hello Kendo UI for Vue!</h1>
     <grid :data-items="products" :columns="columns"></grid>
    </template>
    ```

This sample code lets you run an application with a very basic Grid:

1. Execute the `npm run dev` command.
1. Navigate to the local URL displayed in the terminal.

> Notice the `No valid license found` message and the watermark in the Grid. They are informational and encourage you to activate your trial or commercial license and to [add a license file to your application](slug:my_license_vue). Once you complete these licensing steps, the license message and the watermark will disappear.

## Configure the Vue Data Grid

Now that you have a running Grid, you are ready to use some of its basic features like sorting and paging.

1. Implement the paging and sorting functionality in the `data` option:

    - Set `sortable` to `true`.
    - Set `pageable` to `true`.
    - Set the page size (`take`) to `10` to define how many items are rendered on each page.
    - Set the initial `skip` value, which allows the Grid to calculate how many items to skip when paging.
    - Set the initial sorting by product name.
    - Initialize the `dataResult` empty array, which holds the results from the sorting and paging.

    ```js
    <script lang="ts">
    data: function() {
      return {
        skip: 0 as number | undefined,
        take: 10 as number | undefined,
        pageable: true,
        sortable: true,
        sort: [
          { field: "ProductName", dir: "asc" }
        ] as SortDescriptor[] | undefined,
        columns: [
          { field: 'ProductName', title: 'Product Name' },
          { field: 'UnitPrice', title: 'Price' },
          { field: 'UnitsInStock', title: 'Units in Stock' },
          { field: 'Discontinued', cell: 'discontinuedTemplate' }
        ] as GridColumnProps[],
        dataResult: { data: [] as any, total: 0 } as DataResult,
      }
    }
    </script>
    ```

1. Add the `created` hook. Inside, set the initial `dataState`. This allows the Grid to have the processed data ready for displaying when rendered for the first time.

    ```js
    <script lang="ts">
    created() {
      const dataState: State = {
        skip: this.skip,
        take: this.take,
        sort: this.sort,
      };

      this.dataResult = process(this.products, dataState);
    },
    </script>
    ```

1. Add the `methods` option. Inside handle the `dataStateChange` event and implement a `createAppState` helper method:

   * The `dataStateChange` event is triggered when the user interacts with the Grid and calls the `createAppState` helper method.
   * The `createAppState` helper method will update the component's state based on the Grid's current data state (`skip`, `take`, `sort`).
   * The `dataResult` is updated with the newly processed data and causes the Grid to re-render and display the data according to the new state.

    ```js
    <script lang="ts">
    methods: {
      createAppState: function (dataState: State) {
        this.take = dataState.take;
        this.skip = dataState.skip;
        this.sort = dataState.sort;
      },
      dataStateChange(event: GridDataStateChangeEvent) {
        this.createAppState(event.data);
      },
    }
    </script>
    ```

1. Re-define the Grid declaration to allow paging and sorting:

    * Set Grid data to `data-items="dataResult"`&mdash;With paging enabled, the `data` option must contain only the items for the current page.
    * Set the `pageable` and `sortable` props.
    * Set the `skip`, `take`, and `sort` props that configure paging and sorting.
    * Bind the `@datastatechange` event of the Grid to the `dataStateChange` method to handle the user interactions.

    ```html
      <template>
        <h1>Hello Kendo UI for Vue!</h1>
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

Your Kendo UI for Vue Getting Started application is complete! You can download and run the complete sample application from the [kendo-vue GitHub repository](https://github.com/telerik/kendo-vue/tree/master/getting-started-typescript-options-api). Alternatively, run, fork and [experiment with the application directly in StackBlitz](https://stackblitz.com/edit/vite-jco3ua?file=src%2FApp.vue).


## Next Steps

* [Activate Your Kendo UI for Vue License](slug:my_license_vue)
* [Create Projects Faster with the Kendo UI for Vue VS Code Extension](slug:getting_started_vscode)
* [Take a Free Entry-Level Kendo UI for Vue (with TypeScript) Course](https://learn.telerik.com/learn/course/internal/view/elearning/45/kendo-ui-for-vue-with-typescript)

