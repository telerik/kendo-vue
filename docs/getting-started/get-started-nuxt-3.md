---
title: First Steps with Nuxt 3
page_title: Kendo UI for Vue Native Components with Nuxt 3 Introduction - Kendo UI for Vue Docs & Demos
description: "Get started with the Kendo UI for Vue Native Components in Nuxt 3 using Typescript."
slug: getting_started_nuxt_3
brand: getting-started
heading: Get Started
position: 100
---


# Get Started with the Kendo UI for Vue Native Components using Nuxt 3

Since the release of Nuxt 3 in mid-November 2022, we are happy to announce the Kendo UI for Vue Native components are fully compatible with Nuxt 3 and all our Native components can be used in Nuxt 3 with SSR(server-side rendering) configuration. 

This article showcases how we can implement simple Nuxt 3 application using the Native Grid, DropDownList and Window components styled with a Kendo Theme. The current example uses `Vue Composition API` + `Typescript` but the same approach can be implemented using `Javascript` and/or `Vue Options API`.  


> If you prefer to see the ready implementation of the example discussed in this article, you can directly [check its code here](#toc-11-complete-source-code).

## 1. Set up your Nuxt 3 project
* To create a new Nuxt project with a name `my-app`, use the following command.

```sh
npx nuxi init my-app
```

When the processes followed by the execution of the above command are finished, to run the newly created project do the following commands:
```
cd my-app
npm install
npm run dev
```

## 2. Prepare the Generated Project

Before you continue with the next steps in the current article, please remove the following code from the template definition in the generated `app.vue` file:

```html
<NuxtWelcome />
```

## 3. Add JSON data

Add dummy data needed by the components. Create folder `appdata` in the root folder. Add the following files to the `appdata` folder.

* Add a `appdata/categories.ts` file and copy the content from [this GitHub file](https://github.com/telerik/kendo-vue/tree/master/getting-started-nuxt3/appdata/categories.ts).
* Add a `appdata/products.ts` file and copy the content from [this GitHub file](https://github.com/telerik/kendo-vue/tree/master/getting-started-nuxt3/appdata/products.ts).

## 4. Add the Kendo UI for Vue components

Kendo UI for Vue is distributed as multiple NPM packages, scoped to `@progress`. For example, the name of the `Grid` package is `@progress/kendo-vue-grid`.

Kendo UI for Vue is a rich suite of many modular components. For our dashboard example, we’ll use three of these components: the [Grid](slug:overview_grid), the [DropDownList](slug:overview_dropdownlist) and the [Window](slug:overview_window).

Let’s add the mentioned components’ packages and their dependencies:
```sh
npm install --save @progress/kendo-vue-grid @progress/kendo-data-query @progress/kendo-vue-inputs @progress/kendo-vue-intl @progress/kendo-vue-dropdowns @progress/kendo-vue-dateinputs @progress/kendo-drawing @progress/kendo-vue-data-tools @progress/kendo-vue-animation @progress/kendo-licensing @progress/kendo-svg-icons @progress/kendo-vue-indicators
```

With the above, we not only add the packages of the `Grid` and `DropDownList` but also add another important package – `kendo-data-query`. It contains useful functions for client-side data operations.

To install the Window component run the following:
```sh
npm install --save @progress/kendo-vue-dialogs @progress/kendo-licensing @progress/kendo-svg-icons
```

> To demonstrate the features of the Nuxt Framework, we will separate the implementation of the Grid, DropDownList, and Window components into separate Vue components that pass parameters to each other. 

## 5. Import the Kendo UI for Vue CSS styles

Kendo UI for Vue includes four gorgeous themes, which are all available as separate NPM packages. The available theme packages are [@progress/kendo-theme-default](https://www.npmjs.com/package/@progress/kendo-theme-default), [@progress/kendo-theme-bootstrap](https://www.npmjs.com/package/@progress/kendo-theme-bootstrap), [@progress/kendo-theme-material](https://www.npmjs.com/package/@progress/kendo-theme-material) and [@progress/kendo-theme-fluent](https://www.npmjs.com/package/@progress/kendo-theme-fluent).

Let’s take the Default theme and install it just like we did with the component packages:
```sh
npm install --save @progress/kendo-theme-default
```

To add the CSS definitions from the theme package in our project, we need to include them in the `nuxt.config.ts` file as follows:

```js
export default defineNuxtConfig({
    css: [
        '@progress/kendo-theme-default/dist/all.css',
    ],
})
```

## 6. Add a Kendo UI for Vue DropDownList
Now that you have everything set up and ready to go, let’s begin using the Kendo UI for Vue components, starting with the [DropDownList](slug:overview_dropdownlist) component.

As mentioned above, each of the Kendo UI for Vue components we are going to use in the getting started example will be added to a separate Vue component. To create the file in which we will add the DropDownList's logic run the following command:

```sh
npx nuxi add page KendoDropDownList
```

The above command will add a file with name `KendoDropDownList.vue` to the pages folder of your Nuxt 3 application. Having this file available we can continue further with our example. 

The first thing we should do is to add the already installed DropDownList component into the `pages/KendoDropDownList.vue` file and the `appdata/categories.ts` file using the following code:
```js
import { categoriesData } from '../appdata/categories';
import { DropDownList as dropdownlist, DropDownListChangeEvent } from '@progress/kendo-vue-dropdowns';
```

After importing the component, use the code below to bind a DropDownList to a list of categories.
```html
<dropdownlist
    :data-items="categories"
    :data-item-key="'CategoryID'"
    :text-field="'CategoryName'"
    >
</dropdownlist>
```
The data-items property of the DropDownList points to an array of objects or primitive values. In this case, you’re using an array of objects, and therefore specify both `data-item-key` and `text-field` properties.

You can also use the `default-item` property to display a hint for the users when no item is selected. The default item should have a field that matches the `text-field` name.

To show a little more of the DropDownList in action, update the `pages/KendoDropDownList.vue` file to use the below code.
```html
<template>
  <div id="app">
    <dropdownlist 
      :data-items="categories" 
      :data-item-key="'CategoryID'" 
      :text-field="'CategoryName'"
      :default-item="defaultItems" 
      @change="handleDropDownChange">
    </dropdownlist>&nbsp; Selected category ID:
    <strong>{{ dropdownlistCategory }}</strong>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { categoriesData } from '../appdata/categories';
  import { DropDownList as dropdownlist, DropDownListChangeEvent } from '@progress/kendo-vue-dropdowns';

  const emit = defineEmits(['change'])
  const categories = categoriesData;
  const defaultItems = { CategoryID: null, CategoryName: "Product categories" };
  const dropdownlistCategory = ref(null);

  const handleDropDownChange = (e: DropDownListChangeEvent) => {
    emit('change', { category: e.target.value.CategoryID })
  };
</script>
```
The above code additionally renders the ID of the selected category next to the `DropDownList`. You do this by defining a `dropdownlistCategory` field in the data options and implementing an [onChange](slug:api_dropdowns_dropdownlistchangeevent) handler to set it.

> In the definition on the `handleDropDownChange` method, you will see the `DropDownListChangeEvent` type defined for the event handler. This type should be defined when we work with TypeScript. The type is exported in the `@progress/kendo-vue-dropdowns` package.

What we did in this step of the getting started article is to build the basics of the DropDownList's functionality which [later will be combined with the other components](#toc-9-assembling-all-in-one) to create a complete product. 

## 7. Add a Kendo UI for Vue Data Grid

Now that you’ve seen what a basic Kendo UI for Vue component looks like, let’s now implement something more complex with the Kendo UI for Vue Data Grid.

The [Kendo UI for Vue Data Grid](slug:overview_grid) provides 100+ ready-to-use features, covering everything from paging, sorting, filtering, editing and grouping, to row and column virtualization and Excel export.
In this section you’ll try out several of these features, but let’s start by seeing a simple Grid in action. To create the file in which we will add the Grid's logic run the following command:

```sh
npx nuxi add page KendoGrid
```

The above command will add a file with name `KendoGrid.vue` to the pages folder of your Nuxt 3 application. In the newly created file, import the `Grid` component, the `process` package and the `products.ts` file to the `pages/KendoGrid.vue file`.

```js
import { productsData } from '../appdata/products';
import { process, DataResult, State, CompositeFilterDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { Grid as grid } from '@progress/kendo-vue-grid';
```

Add the code below to create a Grid bound to your list of products. 

```html
<grid
  :data-items="products"
  :columns="columns"
></grid>
```

In the `setup` section of the `KendoGrid.vue` file, define the Grid's data and columns as follows:

```js
const products = productsData;
const columns = [
  { field: 'ProductName', title: 'Product Name' },
  { field: 'UnitPrice', title: 'Price' },
  { field: 'UnitsInStock', title: 'Units in Stock' },
  { field: 'Discontinued' }
] as GridColumnProps[];
```

> The above code uses the `GridColumnProps` type. This type should be defined when we work with TypeScript. The type is exported in the `@progress/kendo-vue-grid` package and to use it we have to update the import definition as follows:
```html
import { Grid, GridColumnProps } from '@progress/kendo-vue-grid';
```
More details about the **GridColumnProps** you can find on [its API page](slug:api_grid_gridcolumnprops).

When your browser refreshes, you’ll see your first Grid build with TypeScript! Pretty simple, but not quite real-world yet.

To fill out this example, let’s use the Grid APIs to add the list of features below. Read through the features, and then grab the updated `KendoGrid.vue` code (below) to try the Grid by yourself.
* Add a height style to the Grid to activate [scrolling](slug:scrollmmodes_grid).
* Add user-friendly [column titles](slug:api_grid_gridcolumnprops#toc-title).
* [Format](slug:api_grid_gridcolumnprops#toc-format) the numbers in the Price column.
* Enable [paging](slug:paging_grid) and [sorting](slug:sorting_grid). This will require a few additions to the application code, explained below.
* Display the boolean values in the Discontinued column as checkboxes. For this purpose, we will [customize the table cell rendering](slug:custom_cells_grid) via the [cell property](slug:api_grid_gridcolumnprops#toc-cell) and a custom component.

Here is how we can implement the above functionality:
* Enable each data operation separately in the Grid declaration ( `:pageable="pageable"` and `:sortable="sortable"`). Add the following properties in the data option.

```js
const pageable = ref(true);
const sortable = ref(true);
```
* Configure data operation settings and the initial state of the Grid data. For example:
	* The initial [skip](slug:api_grid_gridprops#toc-skip) will be the first one.
	* The page [size (take)](slug:api_grid_gridprops#toc-take) will be 10.
	* The Grid will be [initially sorted](slug:api_grid_gridprops#toc-sort) by Product Name.
	* We will save all these settings in data properties and add them to the Grid using the below code:

```js
const skip = ref<number | undefined>(0);
const take = ref<number | undefined>(10);
const sort = ref<SortDescriptor[] | undefined>([
  { field: "ProductName", dir: "asc" }
]);
```
> The above code uses the `SortDescriptor` type. This type should be defined when we work with TypeScript. The type is exported in the `@progress/kendo-data-query` package and to use it we have to update the import definition as follows:
```html
import { SortDescriptor } from '@progress/kendo-data-query';
```
More details about the **SortDescriptor** you can find on [its API page](slug:api_kendo-data-query_sortdescriptor).

* To display the correct Grid data, we will bind the Grid to the output of a function, rather than the `products` array directly. We will use the imported `process` function, which is part of the [kendo-data-query package](https://www.npmjs.com/package/@progress/kendo-data-query). The result of the function will be stored in the `dataResult` data property.
* Define a `dataStateChange` handler. It does two things:
	* Update the state of the `take`, `skip`, `filter` and `sort` data properties after each user interaction via the `createAppState` function.
	* After the data properties are updated, the second thing that the function does is to get a result from the `process` function and set it to the `dataResult` property. This will cause the Grid to refresh and display the expected data. To display the applied data changes, we have to change the `data-items` property of the Grid to `:data-items="dataResult"`.
* Define a template for the Discontinued field of the Grid. Add the following inside the grid tag in the template section of the `pages/KendoGrid.vue` file

```html
<template v-slot:discontinuedTemplate="{ props }">
  <td :colspan="1">
    <KCheckBox :checked="props.dataItem.Discontinued" :disabled="true" />
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
] as GridColumnProps[];
```

* Finally, we will add Grid [filtering](slug:filtering_grid) via the DropDownList. To do that, we will use the existing `handleDropDownChang`e function and add a filter descriptor to `gridDataState`. We also need to reset the page index (skip) to zero, as the number of data items and pages will decrease.

To try all discussed above features, copy the below code and paste it in the KendoGrid.vue file of your project.
```html
  <div id="app">
    <grid :data-items="dataResult" :pageable="pageable" :sortable="sortable" :sort="sort" :take="take" :skip="skip"
      :columns="columns" @datastatechange="dataStateChange" @rowclick="rowClick" :style="{ height: '400px' }">
      <template v-slot:discontinuedTemplate="{ props }">
        <td :colspan="1">
          <KCheckBox :checked="props.dataItem.Discontinued" :disabled="true" />
        </td>
      </template>
    </grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { productsData } from '../appdata/products';
import { process, DataResult, State, CompositeFilterDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { Grid as grid, GridDataStateChangeEvent, GridRowClickEvent, GridColumnProps } from '@progress/kendo-vue-grid';
import { Checkbox as KCheckBox } from '@progress/kendo-vue-inputs';


const emit = defineEmits(['rowClick'])
const props = defineProps({
  category: { type: Number, default: null },
})


onMounted(() => {
  const dataState: State = {
    skip: skip.value,
    take: take.value,
    sort: sort.value,
  };
  dataResult.value = process(products, dataState);
});

const products = productsData;
const pageable = ref(true);
const sortable = ref(true);
const skip = ref<number | undefined>(0);
const take = ref<number | undefined>(10);
const sort = ref<SortDescriptor[] | undefined>([
  { field: "ProductName", dir: "asc" }
]);
const filter = ref<CompositeFilterDescriptor>({ logic: "and", filters: [] });

watch(() => props.category, () => handleDropDownChange())

const handleDropDownChange = () => {
  if (props.category !== null) {
    filter.value = {
      logic: 'and',
      filters: [{ field: 'CategoryID', operator: 'eq', value: props.category }]
    }
    skip.value = 0
  } else {
    filter.value = {} as CompositeFilterDescriptor
    skip.value = 0
  };

  const event: GridDataStateChangeEvent = {
    data: {
      skip: skip.value,
      take: take.value,
      sort: sort.value,
      filter: filter.value
    }
  };

  dataStateChange(event);
};

const columns = [
  { field: 'ProductName', title: 'Product Name' },
  { field: 'UnitPrice', title: 'Price' },
  { field: 'UnitsInStock', title: 'Units in Stock' },
  { field: 'Discontinued', cell: 'discontinuedTemplate' }
] as GridColumnProps[];

const dataResult = ref<DataResult>({ data: [] as any, total: 0 });

const createAppState = (dataState: State) => {
  take.value = dataState.take;
  skip.value = dataState.skip;
  sort.value = dataState.sort;
};

const dataStateChange = (event: GridDataStateChangeEvent) => {
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

const rowClick = (event: GridRowClickEvent) => {
  const windowVisible = true;
  const gridClickedRow = event.dataItem;
  emit('rowClick', { windowVisible, gridClickedRow })
};
</script>
```

> Above you will see the usage of the `GridDataStateChangeEvent`, `DataResult`, `State` and `CompositeFilterDescriptor` types. More details about the different types you can find on the [Data Query API page](slug:api_kendo-data-query) and [this GridDataStateChangeEvent API](slug:api_grid_griddatastatechangeevent) documentation.

In this section you were able to add a robust grid to your application—complete with paging, filtering, and sorting. Not a bad accomplishment for a few minutes' worth of work!
Feel free to explore the [Kendo UI for Vue Data Grid documentation page](slug:overview_grid) to get a sense of just how many things the Grid can do.

What we did in this step of the getting started article is to build the basics of the Grid's functionality which [later will be combined with the other components](#toc-9-assembling-all-in-one) to create a complete product. 

## 8. Add a Kendo UI for Vue Window
The `products` array contains some fields which are not displayed in the Grid. In this section, you’ll use the Kendo UI for Vue Window to display those additional product details when users select a Grid row.

To create the file in which we will add the Window's logic run the following command:

```sh
npx nuxi add page KendoWindow
```

In the newly created `KendoWindow.vue` file, add the following import.

```js
import { Window as window } from '@progress/kendo-vue-dialogs';
```

Next, add the following Window declaration in template section of the KendoWindow.vue component.
```html
<window v-if="props.rowData.windowVisible" :title="'Product Details'" @close="closeWindow" :height="250">
  <dl :style="{ 'text-align': 'left' }">
    <dt>Product Name</dt>
    <dd>{{ props.rowData.gridClickedRow.ProductName }}</dd>
    <dt>Product ID</dt>
    <dd>{{ props.rowData.gridClickedRow.ProductID }}</dd>
    <dt>Quantity per Unit</dt>
    <dd>{{ props.rowData.gridClickedRow.QuantityPerUnit }}</dd>
  </dl>
</window>
```

Next, define `windowVisible` property that controls the visibility of the Window. This value is imported as a prop inside the KendoWindow component.
```js
const props = defineProps({
  rowData: { type: Object, default: { windowVisible: false, gridClickedRow: { "ProductName": "", "ProductID": "", QuantityPerUnit: "" } } },
})
```

Finally, add the following Window [close handler](slug:api_dialogs_windowprops#toc-close), which will trigger a logic that will set the `windowVisible` flag to false when the user closes the Window.

```js
const closeWindow = () => {
  emit('closeWindow', { windowVisible: false })
};
```

The complete KendoWindow.vue code needed in our application is as follows:

```js
<script lang="ts" setup>
import { Window as window } from '@progress/kendo-vue-dialogs';
const emit = defineEmits(['closeWindow'])

const props = defineProps({
  rowData: { type: Object, default: { windowVisible: false, gridClickedRow: { "ProductName": "", "ProductID": "", QuantityPerUnit: "" } } },
})

const closeWindow = () => {
  emit('closeWindow', { windowVisible: false })
};
</script>

<template>
  <window v-if="props.rowData.windowVisible" :title="'Product Details'" @close="closeWindow" :height="250">
    <dl :style="{ 'text-align': 'left' }">
      <dt>Product Name</dt>
      <dd>{{ props.rowData.gridClickedRow.ProductName }}</dd>
      <dt>Product ID</dt>
      <dd>{{ props.rowData.gridClickedRow.ProductID }}</dd>
      <dt>Quantity per Unit</dt>
      <dd>{{ props.rowData.gridClickedRow.QuantityPerUnit }}</dd>
    </dl>
  </window>
</template>
```

Note how simple this functionality was to implement. With Kendo UI for Vue, you get a collection of Vue components that are easy to drop in and solve hard problems—in this case, building a customizable cross-browser-friendly Window. That’s the power of Kendo UI for Vue!

You can learn more about the `Window component` and what it can do on the [Kendo UI for Vue Window documentation page](slug:overview_window).

## 9. Assembling All in One
To assemble all of the above pages in one, we need to add a component that uses each of our `KendoGrid`, `KendoDropDownList` and `KendoWindow` components and handles the data passed between them. 

Execute the following command to add an `index` page to the Nuxt application.
```sh
npx nuxi add page index
```
Copy the following code into the newly created `index.vue` file.

```js-no-run
<script lang="ts" setup>
import DropDownList from './KendoDropDownList.vue';
import Grid from './KendoGrid.vue';
import Window from './KendoWindow.vue';

const rowData = ref({});
const category = ref();

const onRowClick = (event: any) => {
  rowData.value = event;
}

const onCloseWindow = (event: any) => {
  rowData.value = { windowVisible: false };
}

const onCategoryChange = (event: any) => {
  category.value = event.category;
}
</script>

<template>
  <div>
    <h1>Hello Kendo UI for Vue with Nuxt 3!</h1>
    <DropDownList @change="onCategoryChange" />
    <Grid @row-click="onRowClick" :category="category" />
    <Window :row-data="rowData" @close-window="onCloseWindow" />
  </div>
</template>
```

Having the final step implemented, we are ready to start and test our Getting started example. To do this you need to run the following command in the root folder of the `my-app` project:
```js-no-run
npm run dev
```

## 10. Activate Your Trial or Commercial License
Kendo UI for Vue is a professionally developed library distributed under a [commercial license](https://www.telerik.com/purchase/license-agreement/kendo-ui). Starting from [version 2.0.0](https://www.telerik.com/kendo-vue-ui/components/changelogs/ui-for-vue/), using any of the UI components from the Kendo UI for Vue library requires either a commercial license key or an active trial license key.

Follow the instructions on the Kendo UI for Vue [My License page](slug:my_license_vue) to activate your license.
## 11. Get the Complete Source Code
Your Kendo UI for Vue Getting Started application is complete! You can download and run the complete sample application from the [kendo-vue-examples GitHub repository](https://github.com/telerik/kendo-vue/tree/master/getting-started-nuxt3/). 

Alternatively, run, fork and [experiment with the application directly in StackBlitz](https://stackblitz.com/edit/nuxt-starter-qacprz?file=pages%2Findex.vue). 

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

### Kendo UI for Vue and TypeScript

For more specifics about the usage of the Kendo UI for Vue Native components, you can check the [Kendo UI for Vue TypeScript Integration Overview](slug:overview_typescript_integation) article. 

## Suggested Links

* [Getting Started with Kendo UI for Vue Native suite]({% slug getting_started_javascript_composition_api %})
* [Kendo UI for Vue - First Steps with JavaScript + Options API]({% slug getting_started_javascript_options_api %})
* [Kendo UI for Vue - First Steps with TypeScript]({% slug getting_started_typescript_composition_api %})
* [Kendo UI for Vue - First Steps with TypeScript + Options API]({% slug getting_started_typescript_options_api %})