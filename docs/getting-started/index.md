---
title: First Steps (Composition API and JavaScript)
page_title: Get Started with Kendo UI for Vue - Kendo UI for Vue Docs & Demos
description: "Get started with the Kendo UI for Vue Native Components and build your first Data Grid by using Vite and the Composition API."
slug: getting_started_javascript_composition_api
brand: getting-started
heading: Get Started
position: 0
---

# Get Started with Kendo UI for Vue

This tutorial will help you develop a simple app that includes a native Vue Data Grid component. To achieve this, you will build a project using [Vite](https://vitejs.dev/) and the [Vue Composition API](https://vuejs.org/guide/introduction.html#composition-api) paired with JavaScript.

>Curious about TypeScript or the Options API? This tutorial comes in several additional variants:
>* [Kendo UI for Vue with TypeScript and the Composition API](slug:getting_started_typescript_composition_api)
>* [Kendo UI for Vue with TypeScript and the Options API](slug:getting_started_typescript_options_api)
>* [Kendo UI for Vue with JavaScript and the Options API](slug:getting_started_javascript_options_api)

## Create the Vue Project

The recommended way to scaffold your Vue project is using [Vite](https://vuejs.org/guide/scaling-up/tooling.html#vite).

> You can use both NPM and Yarn to create the project and import the Kendo UI for Vue components. However, for the purposes of this tutorial, we demonstrate only NPM.

1. Create the Vue project:

    ```sh
    npm create vite@latest
    ```
    <!--- 
    ```sh
    yarn create vite
    ```
    --->

1. Enter the project name, for example, `my-app`.

1. Select the Vue framework by using the arrow keys.

    ```sh
    ? Select a framework: » - Use arrow-keys. Return to submit.
        Vanilla
    >   Vue
        React
        ...
    ```

1. Select the JavaScript framework variant

    ```sh
    ? Select a variant: » - Use arrow-keys. Return to submit.
        TypeScript
    >   JavaScript
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
??? 1. Delete the `import './style.css'` line in the `src/main.js` file.

Now that the project is clean, you can start developing the sample application.

## Add Application Data

Components like the Grid need some data that the can display, so, in this step, you will add two files with sample data:

1. In the `src` folder, create a new folder called `appdata` where you will place the JSON files with the data.

1. Create a new `src/appdata/categories.json` file. Copy the content of [this GitHub file](https://github.com/telerik/kendo-vue/tree/master/getting-started-javascript-composition-api/src/appdata/categories.json) and paste it into the `categories.json` file.

1. Create a new `src/appdata/products.json` file. Copy the content of [this GitHub file](https://github.com/telerik/kendo-vue/tree/master/getting-started-javascript-composition-api/src/appdata/products.json) and paste it into the `products.json` file.

## Install the Data Grid Component

Kendo UI for Vue is distributed as multiple NPM packages, scoped to `@progress`. For example, the name of the Grid package is `@progress/kendo-vue-grid`. To use the Grid in your app, add the component and its dependencies:

```sh
npm install --save @progress/kendo-data-query @progress/kendo-licensing @progress/kendo-vue-animation @progress/kendo-vue-data-tools @progress/kendo-vue-dateinputs @progress/kendo-vue-dropdowns @progress/kendo-vue-inputs @progress/kendo-vue-indicators @progress/kendo-vue-intl @progress/kendo-vue-popup
```
<!---
```sh
yarn add @progress/kendo-data-query @progress/kendo-licensing @progress/kendo-vue-animation @progress/kendo-vue-data-tools @progress/kendo-vue-dateinputs @progress/kendo-vue-dropdowns @progress/kendo-vue-inputs @progress/kendo-vue-indicators @progress/kendo-vue-intl @progress/kendo-vue-popup
```
--->

## Import the Kendo UI for Vue CSS Styles

Kendo UI for Vue includes [four artfully designed themes](slug:themesandstyles) available as separate NPM packages. To style the components, you can use each theme as is or [customize](slug:customizingthemes) it to your liking.

1. Install the [Default theme](https://www.telerik.com/kendo-vue-ui/components/styling/theme-default/):

  ```sh
  npm install --save @progress/kendo-theme-default
  ```
  <!---

  ```sh
  yarn add --save @progress/kendo-theme-default
  ```
  --->

1. In the `src/App.vue` file, import the CSS files provided by the installed theme package:  

  ```js
  import '@progress/kendo-theme-default/dist/all.css';
  ```

You can add any additional custom styles in the `<styles>` tag of the `src/App.vue` file.

## Add a Kendo UI for Vue Data Grid

In this section you’ll try out several of these features, but let’s start by seeing a simple Grid in action.

Import the `Grid` component, the `process` package and the `products.json` file to the `src/App.vue file`.

```js
import products from './appdata/products.json';
import { process } from '@progress/kendo-data-query';
import { Grid } from '@progress/kendo-vue-grid';
```

Add the code below to create a Grid bound to your list of products. Add it right after the `<p>` that contains the DropDownList in the template inside the `src/App.vue` file.

```html
<grid
  :data-items="products"
  :columns="columns"
></grid>
```

Define the Grid component with the following code:
```js
import { defineComponent } from 'vue';
  components: {
    'dropdownlist': DropDownList,
    'grid': Grid,
  },
//..............
```

In the data options add the following lines:

```js
setup() {
    //..............
    const products = productsData;
    const columns = [
      { field: 'ProductName', title: 'Product Name' },
      { field: 'UnitPrice', title: 'Price' },
      { field: 'UnitsInStock', title: 'Units in Stock' },
      { field: 'Discontinued' }
    ];

    return {
      products, columns, ........
    }
}
```

When your browser refreshes, you’ll see your first Grid! Pretty simple, but not quite real-world yet.

To fill out this example, let’s use the Grid APIs to add the list of features below. Read through the features, and then grab the updated App.vue code (below) to try the updated Grid for yourself.
* Add a height style to the Grid to activate [scrolling](slug:scrollmmodes_grid).
* Add user-friendly [column titles](slug:api_grid_gridcolumnprops#toc-title).
* [Format](slug:api_grid_gridcolumnprops#toc-format) the numbers in the Price column.
* Enable [paging](slug:paging_grid) and [sorting](slug:sorting_grid). This will require a few additions to the application code, explained below.
* Display the boolean values in the Discontinued column as checkboxes. For this purpose, we will [customize the table cell rendering](slug:custom_cells_grid) via the [cell property](slug:api_grid_gridcolumnprops#toc-cell) and a custom component.

Here is how we can implement the above functionality:
* Enable each data operation separately in the Grid declaration ( `:pageable="pageable"` and `:sortable="sortable"`). Add the following properties in the data option.

```js
setup() {
    //..............
    const pageable = ref(true);
    const sortable = ref(true);
    //..............

    return {
      pageable, sortable, ........
    }
}
```
* Configure data operation settings and the initial state of the Grid data. For example:
	* The initial [skip](slug:api_grid_gridprops#toc-skip) will be the first one.
	* The page [size (take)](slug:api_grid_gridprops#toc-take) will be 10.
	* The Grid will be [initially sorted](slug:api_grid_gridprops#toc-sort) by Product Name.
	* We will save all these settings in data properties and add them to the Grid using the below code:
```js
setup() {
    //..............
    const skip = ref(0);
    const take = ref(10);
    const sort = ref([
      { field: "ProductName", dir: "asc" }
    ]);
    //..............

    return {
      skip, take, sort, ........
    }
}
```
* To display the correct Grid data, we will bind the Grid to the output of a function, rather than the `products` array directly. We will use the imported `process` function, which is part of the [kendo-data-query package](https://www.npmjs.com/package/@progress/kendo-data-query). The result of the function will be stored in the `dataResult` data property.
* Define a `dataStateChange` handler. It does two things:
	* Update the state of the `take`, `skip`, `filter` and `sort` data properties after each user interaction via the `createAppState` function.
	* After the data properties are updated, the second thing that the function does is to get a result from the `process` function and set it to the `dataResult` property. This will cause the Grid to refresh and display the expected data. To display the applied data changes, we have to change the `data-items` property of the Grid to `:data-items="dataResult"`.
* Define a template for the Discontinued field of the Grid. Add the following inside the grid tag in the template section of the `src/App.vue` file

```html
<template v-slot:discontinuedTemplate="{ props }">
	<td colspan="1">
		<input type="checkbox" :checked = props.dataItem.Discontinued disabled="disabled" />
	</td>
</template>
```

Edit the columns data property by adding the cell property for the Discontinued cell

```js
const columns = [
  { field: 'ProductName', title: 'Product Name' },
  { field: 'UnitPrice', title: 'Price' },
  { field: 'UnitsInStock', title: 'Units in Stock' },
  { field: 'Discontinued', cell: 'discontinuedTemplate' }
];
```

* Finally, we will add Grid [filtering](slug:filtering_grid) via the DropDownList. To do that, we will use the existing `handleDropDownChang`e function and add a filter descriptor to `gridDataState`. We also need to reset the page index (skip) to zero, as the number of data items and pages will decrease.

To try all discussed above features, copy the below code and paste it in the App.vue file of your project.
```html
<template>
  <div id="app">
    <h1>Hello Kendo UI for Vue!</h1>
    <p>
      <dropdownlist :data-items="categories" :data-item-key="'CategoryID'" :text-field="'CategoryName'"
        :default-item="defaultItems" @change="handleDropDownChange" @rowclick="rowClick"></dropdownlist>&nbsp; Selected
      category ID:
      <strong>{{ dropdownlistCategory }}</strong>
    </p>

    <grid :data-items="dataResult" :pageable="pageable" :sortable="sortable" :sort="sort" :take="take" :skip="skip"
      :columns="columns" @datastatechange="dataStateChange" @rowclick="rowClick" :style="{ height: '400px' }">
      <template v-slot:discontinuedTemplate="{ props }">
        <td :colspan="1">
          <input type="checkbox" :checked="props.dataItem.Discontinued" disabled="disabled" />
        </td>
      </template>
    </grid>
  </div>
</template>

<script>
import { ref, onMounted, defineComponent } from 'vue';
import productsData from './appdata/products';
import categoriesData from './appdata/categories';
import { process } from '@progress/kendo-data-query';
import { Grid } from '@progress/kendo-vue-grid';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import '@progress/kendo-theme-default/dist/all.css';

export default defineComponent({
  components: {
    dropdownlist: DropDownList,
    grid: Grid,
  },
  setup() {
    onMounted(() => {
      const dataState = {
        skip: skip.value,
        take: take.value,
        sort: sort.value,
      };
      dataResult.value = process(products, dataState);
    });

    const categories = categoriesData;
    const products = productsData;
    const defaultItems = { CategoryID: null, CategoryName: "Product categories" };
    const dropdownlistCategory = ref(null);
    const pageable = ref(true);
    const sortable = ref(true);
    const skip = ref(0);
    const take = ref(10);
    const sort = ref([
      { field: "ProductName", dir: "asc" }
    ]);

    const filter = ref({ logic: "and", filters: [] });


    const columns = [
      { field: 'ProductName', title: 'Product Name' },
      { field: 'UnitPrice', title: 'Price' },
      { field: 'UnitsInStock', title: 'Units in Stock' },
      { field: 'Discontinued', cell: 'discontinuedTemplate' }
    ];

    const dataResult = ref({ data: [], total: 0 });
    const gridClickedRow = ref({});

    const handleDropDownChange = (e) => {
      dropdownlistCategory.value = e.target.value.CategoryID;
      if (e.target.value.CategoryID !== null) {
        filter.value = {
          logic: 'and',
          filters: [{ field: 'CategoryID', operator: 'eq', value: e.target.value.CategoryID }]
        };
        skip.value = 0;
      } else {
        filter.value = {};
        skip.value = 0;
      }

      const event = {
        data: {
          skip: skip.value,
          take: take.value,
          sort: sort.value,
          filter: filter.value
        }
      };

      dataStateChange(event);
    };

    const createAppState = (dataState) => {
      take.value = dataState.take;
      skip.value = dataState.skip;
      sort.value = dataState.sort;
    };

    const dataStateChange = (event) => {
      createAppState(event.data);
      if (event.data.filter !== undefined && event.data.filter.logic) {
        dataResult.value = process(products, {
          skip: event.data.skip,
          take: event.data.take,
          sort: event.data.sort,
          filter: event.data.filter
        });
      } else {
        dataResult.value = process(products, {
          skip: event.data.skip,
          take: event.data.take,
          sort: event.data.sort,
        });
      }
    };

    const rowClick = (event) => {
      gridClickedRow.value = event.dataItem;
    };

    return {
      dropdownlistCategory, categories, defaultItems,
      pageable, sortable, dataResult, columns,
      sort, take, skip, gridClickedRow,
      dataStateChange, handleDropDownChange, rowClick,
    };
  }

});
</script>
```

In this section you were able to add a robust grid to your application—complete with paging, filtering, and sorting. Not a bad accomplishment for a few minutes' worth of work!
Feel free to explore the [Kendo UI for Vue Data Grid documentation page](slug:overview_grid) to get a sense of just how many things the Grid can do.

## 8. Add a Kendo UI for Vue Window
The `products` array contains some fields which are not displayed in the Grid. In this section, you’ll use the Kendo UI for Vue Window to display those additional product details when users select a Grid row.

Here are the required steps.
First import the Window component:

```js
import { Window } from '@progress/kendo-vue-dialogs';

export default {
  components: {
    //..............
    'window': Window
  },
  //..............
```

Next, define new `windowVisible` and `gridClickedRow` data properties.
```js
setup() {
    //..............
    const gridClickedRow = ref({});
    const windowVisible = ref(false);
    //..............

    return {
      gridClickedRow, windowVisible ........
    }
}
```
Next, add a [row click handler](slug:api_grid_gridprops#toc-rowclick) to the Grid.
```html
<grid @rowclick="rowClick">
    //..............
</grid>
```
After that, add the `rowClick` function below, which will set the `windowVisible` flag to true, and assign the data item of the clicked row to the gridClickedRow property. You’ll use the data item values to render the Window's content.
```js
setup() {
    //..............
    const rowClick = (event: GridRowClickEvent) => {
      windowVisible.value = true;
      gridClickedRow.value = event.dataItem;
    };
    //..............

    return {
      rowClick, ........
    }
}
```
Next, add the following Window declaration. (Add it immediately after the Grid's definition in the template.) Notice how the Window will be rendered only if the `windowVisible` flag value is true.
```html
<window v-if="windowVisible" :title="'Product Details'" @close="closeWindow" :height="250">
  <dl style="{textAlign:left}">
    <dt>Product Name</dt>
    <dd>{{gridClickedRow.ProductName}}</dd>
    <dt>Product ID</dt>
    <dd>{{gridClickedRow.ProductID}}</dd>
    <dt>Quantity per Unit</dt>
    <dd>{{gridClickedRow.QuantityPerUnit}}</dd>
  </dl>
</window>
```
Finally, add the following Window [close handler](slug:api_dialogs_windowprops#toc-close), which will set the `windowVisible` flag to false when the user closes the Window.

```js
setup() {
    //..............
    const closeWindow = () => {
      windowVisible.value = false;
    }
    //..............

    return {
      closeWindow, ........
    }
}
```
With this code in place, try tapping on a row in the Grid. You should see a custom Window appear with additional product information.

Once again, note how simple this functionality was to implement. With Kendo UI for Vue, you get a collection of Vue components that are easy to drop in and solve hard problems—in this case, building a customizable cross-browser-friendly Window. That’s the power of Kendo UI for Vue!

You can learn more about the `Window component` and what it can do on the [Kendo UI for Vue Window documentation page](slug:overview_window).

## 9. Activate Your Trial or Commercial License
Kendo UI for Vue is a professionally developed library distributed under a [commercial license](https://www.telerik.com/purchase/license-agreement/kendo-ui). Starting from [version 2.0.0](https://www.telerik.com/kendo-vue-ui/components/changelogs/ui-for-vue/), using any of the UI components from the Kendo UI for Vue library requires either a commercial license key or an active trial license key.

> Since version 3.14.0 (13 September 2023) of Kendo UI for Vue, a missing license causes a watermark to appear over selected components. For more information, see the [Invalid License](slug:my_license_vue#toc-invalid-license) section. 

To experience the full potential of the Kendo UI for Vue components, follow the [license activation instructions](slug:my_license_vue) and hide the invalid/not-activated license messages and attributes. You can skip this step if your application already contains a Kendo UI for Vue license file.

## 10. Get the Complete Source Code
Your Kendo UI for Vue Getting Started application is complete! You can download and run the complete sample application from the [kendo-vue GitHub repository](https://github.com/telerik/kendo-vue/tree/master/getting-started-javascript-composition-api). Alternatively, run, fork and [experiment with the application directly in StackBlitz](https://stackblitz.com/edit/vue3-vite-starter-vfbur6?file=src%2FApp.vue).

* If you are using Vue 2, [here a link to the same project](https://codesandbox.io/s/goofy-rumple-hbcub4) implemented in Vue 2 context.

> Vue 2 is currently in its end-of-support phase till Nov 2024. After our last major release for 2024, Vue 2 will no longer be supported in the new versions of the Kendo UI for Vue components. Please check our [Vue 2 End of Support article](slug:vue2-end-of-support) for more details.

This article shows just a glimpse of what you can create with Kendo UI for Vue. We hope we’ve managed to get you excited about becoming more a productive Vue developer and building complex UI in a short time through our professional UI library. We’re in it for the long run, so dive in!"

## Additional Resources

The resources in this section will help you get the most out of Kendo UI for Vue.

### ThemeBuilder

To take full control over the appearance of the Kendo UI for Vue components, you can create your own styles by using [ThemeBuilder](slug:themebuilder).

ThemeBuilder is a web application that enables you to create new themes and customize existing ones. Every change that you make is visualized almost instantly. Once you are done styling the Vue components, you can export a zip file with the styles for your theme and use them in your Vue app.

### UI Kits for Figma

Kendo UI for Vue comes with [four UI Kits for Figma](slug:ui_kits_figma): Material, Bootstrap, Fluent, and Kendo UI Default. They provide the designers of your application with a building block that matches the UI components available in the Kendo UI for Vue suite. Having matching building blocks guarantees the smooth implementation of the design.

### VSCode Extension

To help you create projects even faster we have introduced [the Kendo UI VS Code Template Wizard](https://marketplace.visualstudio.com/items?itemName=KendoUI.kendotemplatewizard). To learn more about this awesome extension please check [Introducing the Kendo UI Template Wizard for Visual Studio Code](https://www.telerik.com/blogs/kendo-ui-template-wizard-for-visual-studio-code).

### Virtual Classroom

If you are aware of TypeScript and prefer the video tutorials, you can check our free [Kendo UI for Vue with TypeScript](https://learn.telerik.com/learn/course/internal/view/elearning/45/kendo-ui-for-vue-with-typescript) course in [Telerik Virtual Classroom](https://learn.telerik.com/learn).
