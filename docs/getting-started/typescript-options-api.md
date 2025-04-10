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

> Prefer video tutorials? How about a free Telerik UI onboarding course? Check out the [Kendo UI for Vue with TypeScript](https://learn.telerik.com/learn/course/internal/view/elearning/45/kendo-ui-for-vue-with-typescript) training in [Telerik Virtual Classroom](https://learn.telerik.com/learn).


This tutorial will help you develop a simple app that includes a native Vue Data Grid component. To achieve this, you will build a project using [Vite](https://vitejs.dev/) and the [Vue Composition API](https://github.com/telerik/kendo-vue/tree/master/getting-started-javascript-options-api) paired with TypeScript.

>Curious about JavaScript or the Composition API? This tutorial comes in several additional variants:
>* [Kendo UI for Vue with TypeScript and the Composition API](slug:getting_started_typescript_composition_api)
>* [Kendo UI for Vue with JavaScript and the Options API](slug:getting_started_javascript_options_api)
>* [Kendo UI for Vue with the Composition API and Nuxt 3](slug:getting_started_nuxt_3)


> Historically, all Kendo UI for Vue Native components have supported both **Vue 2** and **Vue 3**. However, Kendo UI for Vue versions released after **November 2024** will no longer support Vue 2. For more information, see [Vue 2 End of Life](https://www.telerik.com/kendo-vue-ui/components/vue2-deprecation/).

## Create the Vue Project

The recommended way to scaffold your Vue project is using [Vite](https://vuejs.org/guide/scaling-up/tooling.html#vite).


> You can use both NPM and Yarn to create the project and import the Kendo UI for Vue components. This tutorial demonstrates only the NPM approach.

1. Create the Vue project:

    ```sh
    npm create vite@latest
    ```
    or
    ```sh
    yarn create vite
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
1. Clear the script tag in `src/App.vue` for Options API configuration: 
  ```html-no-run
  <script>
  </script>
  ```

Now, when we are ready with the blank Vue project, we can continue the development of our sample application. 

## Add Application Data

Components like the Grid need some data that they can display, so, in this step, you will add a file with sample data:

1. Create a new `src/appdata/products.ts` file. Copy the content of [this GitHub file](https://github.com/telerik/kendo-vue/tree/master/getting-started-typescript-composition-api/src/appdata/categories.ts) and paste it into the `products.ts` file.

1. Create a new `src/appdata/categories.ts` file. Copy the content of [this GitHub file](https://github.com/telerik/kendo-vue/tree/master/getting-started-typescript-composition-api/src/appdata/categories.ts) and paste it into the `products.ts` file.

## Install the Data Grid Component

Kendo UI for Vue is distributed as multiple NPM packages, scoped to `@progress`. For example, the name of the Grid package is `@progress/kendo-vue-grid`. To use the Grid in your app, add the component and its [dependencies](https://www.telerik.com/kendo-vue-ui/components/grid/#toc-dependencies):

```sh
npm install --save @progress/kendo-vue-grid @progress/kendo-data-query @progress/kendo-licensing @progress/kendo-vue-animation @progress/kendo-vue-data-tools @progress/kendo-vue-dateinputs @progress/kendo-vue-dropdowns @progress/kendo-vue-inputs @progress/kendo-vue-indicators @progress/kendo-vue-intl @progress/kendo-vue-popup
```
or
```sh
yarn add @progress/kendo-vue-grid @progress/kendo-data-query @progress/kendo-licensing @progress/kendo-vue-animation @progress/kendo-vue-data-tools @progress/kendo-vue-dateinputs @progress/kendo-vue-dropdowns @progress/kendo-vue-inputs @progress/kendo-vue-indicators @progress/kendo-vue-intl @progress/kendo-vue-popup
```

## Import the CSS Styles

Kendo UI for Vue includes [four artfully designed themes](slug:themesandstyles) available as separate NPM packages. To style the components, you can use each theme as is or [customize](slug:customizingthemes) it to your liking.

1. Install the [Default theme](https://www.telerik.com/kendo-vue-ui/components/styling/theme-default/):

    ```sh
      npm install --save @progress/kendo-theme-default
    ```
    or
    ```sh
    yarn add --save @progress/kendo-theme-default
    ```

1. In the `src/App.vue` file, import the CSS files provided by the installed theme package:  

    ```js
      import '@progress/kendo-theme-default/dist/all.css';
    ```

You can add any additional custom styles in the `<styles>` tag of the `src/App.vue` file.



## Add a Vue Data Grid Component

Now that you've installed all required packages, you are ready to add the Kendo UI for Vue Data Grid to the application:


1. In the `src/App.vue` file, add a `<script>` block and import the Grid and its data:


```js
import { products } from './appdata/products';
import { process } from '@progress/kendo-data-query';
import { Grid } from '@progress/kendo-vue-grid';
```

1. Add a `<template>` block with a simple heading and create a Data Grid. Bind it to the `products` data:

```html
<grid
  :data-items="products"
  :columns="columns"
></grid>
```

1. Define the Grid in the `<script>` configuration:

```js
import { defineComponent } from 'vue';
  name: 'App',
  components: {
    'grid': Grid,
  },
//..............
```

In the data options add the following lines:

```js
data: function() {
  return {
    categories: categories,
    products: products,
      columns: [
          { field: 'ProductName', title: 'Product Name'},
          { field: 'UnitPrice', title: 'Price' },
          { field: 'UnitsInStock', title: 'Units in Stock' },
          { field: 'Discontinued'}
      ] as GridColumnProps[],
    //..............
  }
}
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
data: function() {
  return {
    //..............
    skip: 0 as number | undefined,
    take: 10 as number | undefined,
    sort: [
      { field: "ProductName", dir: "asc" }
    ] as SortDescriptor[] | undefined,
    //..............
  }
}
```
## Get the Complete Source Code

Your Kendo UI for Vue Getting Started application is complete! You can download and run the complete sample application from the [kendo-vue GitHub repository](https://github.com/telerik/kendo-vue/tree/master/getting-started-typescript-options-api). Alternatively, run, fork and [experiment with the application directly in StackBlitz](https://stackblitz.com/edit/vite-jco3ua?file=src%2FApp.vue).


## Next Steps

* [Activate Your Kendo UI for Vue License](slug:my_license_vue)
* [Create Projects Faster with the Kendo UI for Vue VS Code Extension](slug:getting_started_vscode)
* [Take a Free Entry-Level Kendo UI for Vue (with TypeScript) Course](https://learn.telerik.com/learn/course/internal/view/elearning/45/kendo-ui-for-vue-with-typescript)

