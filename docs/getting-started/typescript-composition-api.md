---
title: First Steps (Composition API and TypeScript)
page_title: Kendo UI for Vue Native Components with TypeScript and Composition API Introduction - Kendo UI for Vue Docs & Demos
description: "Get started with the Kendo UI for Vue Native Components using Typescript, Vite and Composition API."
slug: getting_started_typescript_composition_api
brand: getting-started
heading: Get Started
position: 20
---

# Get Started with Kendo UI for Vue

This tutorial will help you develop a simple app that includes a native Vue Data Grid component. To achieve this, you will build a project using [Vite](https://vitejs.dev/) and the [Vue Composition API](https://vuejs.org/guide/introduction.html#composition-api) paired with TypeScript.


>Curious about JavaScript or the Options API? This tutorial comes in several additional variants:
>* [Kendo UI for Vue with TypeScript and the Options API](slug:getting_started_typescript_options_api)
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
    >   TypeScript
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

Now that the project is clean, you can start developing the sample application.

## Add Application Data

Components like the Grid need some data that they can display, so, in this step, you will add a file with sample data:

1. In the `src` folder, create a new folder called `appdata`. 
2. In the `appdata` folder, create a new file called `products.ts`.
3. Copy the content of [this GitHub file](https://github.com/telerik/kendo-vue/blob/master/getting-started-typescript-composition-api/src/appdata/products.ts) and paste it into the `products.ts` file.

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


1. In the `src/App.vue` file, add a `<script>` block and import the CSS files provided by the installed theme package:

    ```js
      <script lang="ts">
        import '@progress/kendo-theme-default/dist/all.css';
      </script>
    ```

To add any custom styles to your app, insert a `<styles>` tag in the `src/App.vue` file and place your styles there.

## Add a Vue Data Grid Component

Now that you've installed all required packages, you are ready to add the Kendo UI for Vue Data Grid to the application:

1. In the `<script>` block of the `src/App.vue` file, import the Grid and its data. In addition, the `[GridColumnProps](https://www.telerik.com/kendo-vue-ui/components/grid/api/GridColumnProps/)` interface allows you to assign props to the Grid columns, for example, to define column names.

    ```js
    import { defineComponent } from 'vue';
    import { productsData } from './appdata/products';
    import { Grid, GridColumnProps } from '@progress/kendo-vue-grid';                    
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
    export default defineComponent({
      components: {
        grid: Grid,
      },
    });
    ```

1. In the `setup` function of the Grid:

   * Load the data from the `products` file.
   * Define user friendly column names.


    ```js
    setup() {
      const products = productsData;
      const columns = [
        { field: 'ProductName', title: 'Product Name' },
        { field: 'UnitPrice', title: 'Price' },
        { field: 'UnitsInStock', title: 'Units in Stock' },
        { field: 'Discontinued' }
      ] as GridColumnProps[];

      return {
        columns, products
      }
    }
    ```

After completing all the steps above, your `App.vue` will look like this:

```js
<script lang="ts">
  import '@progress/kendo-theme-default/dist/all.css';
  import { defineComponent } from 'vue';
  import { productsData } from './appdata/products';
  import { Grid, GridColumnProps } from '@progress/kendo-vue-grid';

  export default defineComponent({
    components: {
      grid: Grid,
    },

    setup() {
      const products = productsData;
      const columns = [
        { field: 'ProductName', title: 'Product Name' },
        { field: 'UnitPrice', title: 'Price' },
        { field: 'UnitsInStock', title: 'Units in Stock' },
        { field: 'Discontinued' }
      ] as GridColumnProps[];

      return {
        columns, products
      }
    }
  });
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

1. Implement the paging and sorting functionality in the `setup` function:

    - Set the [page size (`take`)](slug:api_grid_gridprops#toc-take) to 10.
    - Set the initial [`skip`](slug:api_grid_gridprops#toc-skip) for the paging.
    - Set the initial [sorting](slug:api_grid_gridprops#toc-sort) by Product name.
    - Set [`sortable`](slug:api_grid_gridprops#toc-sortable) to `true`.
    - Set [`pageable`](slug:api_grid_gridprops#toc-pageable) to `true`.
    - Initialize the `dataResult` empty array.
    
    ```js
    <script lang="ts">
    setup() {
      const products = productsData;
      const pageable = ref(true);
      const take = ref<number | undefined>(10);
      const skip = ref<number | undefined>(0);
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

      return {
        pageable, sortable, take, skip, sort, columns 
      }
    }
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

1. Set the initial `dataState` in the `onMounted` hook. This allows the Grid to have the processed data ready for displaying when rendered for the first time.

    ```js
    <script lang="ts">
    setup() {

      onMounted(() => {
        const dataState = {
          skip: skip.value,
          take: take.value,
          sort: sort.value,
        };
        dataResult.value = process(products, dataState);
      });
    }
    </script>
    ```


1. Inside the `setup` method handle the `dataStateChange` event and implement a `createAppState` helper method:

   * The `dataStateChange` event is triggered when the user interacts with the Grid and calls the `createAppState` helper method.
   * The `createAppState` helper method will update the component's state based on the Grid's current data state (`skip`, `take`, `sort`).
   * The `dataResult` is updated with the newly processed data and causes the Grid to re-render and display the data according to the new state.

    ```js
    <script lang="ts">
    setup() {
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

      return {
        dataResult,
        pageable,
        sortable,
        columns,
        skip,
        take,
        sort,
        dataStateChange,
      };
    },
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

Your Kendo UI for Vue Getting Started application is complete! You can download and run the complete sample application from the [kendo-vue GitHub repository](https://github.com/telerik/kendo-vue/tree/master/getting-started-typescript-composition-api). Alternatively, run, fork and [experiment with the application directly in StackBlitz](https://stackblitz.com/edit/vite-qpxlff?file=src%2Fmain.ts).

## Next Steps

* [Activate Your Kendo UI for Vue License](slug:my_license_vue)
* [Create Projects Faster with the Kendo UI for Vue VS Code Extension](slug:getting_started_vscode)
* [Take a Free Entry-Level Kendo UI for Vue (with TypeScript) Course](https://learn.telerik.com/learn/course/internal/view/elearning/45/kendo-ui-for-vue-with-typescript)
