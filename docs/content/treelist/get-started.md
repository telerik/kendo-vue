---
title: Getting Started
description: "Get started with the Kendo UI for Vue Native TreeList package and learn how to use the component in Vue projects."
slug: get_started_treelist
position: 10
---

# Getting Started with the Kendo UI for Vue Native TreeList

This guide provides essential information about using the Kendo UI for Vue Native TreeList package&mdash;you will learn how to install the TreeList package, add a TreeList component to your project, style the component, and activate your license.

<div data-component="StartFreeTrialSection"></div>

After completing this guide, you will be able to reproduce the following example.

{% meta height:380 %}
{% embed_file get-started/main.vue preview %}
{% embed_file get-started/main.js %}
{% embed_file shared/simple-data.js %}
{% endmeta %}

## Setting Up Your Vue Project

Before you install the Kendo UI for Vue Native TreeView, make sure that you have a running Vue project. The easiest way to set up a Vue project is to use the approach described in the [Set up the Vue project]({% slug getting_started_javascript_composition_api %}#toc-1-set-up-the-vue-project) section of the [First Steps with JavaScript ]({% slug getting_started_javascript_composition_api %}) article.

## Installing the TreeList Package

All Kendo UI for Vue Native packages are distributed through npm and offer a similar installation experience. To use the TreeList component, start with the installation of the TreeList npm package and its [dependencies](#toc-dependencies). Use Node.js v5.0.0 or later.

```sh
npm install --save @progress/kendo-vue-treelist @progress/kendo-data-query @progress/kendo-drawing @progress/kendo-date-math @progress/kendo-vue-data-tools @progress/kendo-vue-dateinputs @progress/kendo-vue-dropdowns @progress/kendo-vue-inputs @progress/kendo-vue-intl @progress/kendo-licensing
```

## Importing the Component

After installing the package, in the `src/App.vue` file of your Vue project, import the `TreeList` component from the TreeList package.

```jsx-no-run
// ES2015 module syntax
import { TreeList } from "@progress/kendo-vue-treelist";
```

```jsx-no-run
// CommonJS format
const { TreeList } = require('@progress/kendo-vue-treelist');
```

## Using the Component

1. Import the data for the TreeList.

    ```jsx
      import data from './simple-data';
    ```

1. Define the Native TreeList columns as a data property.

    ```jsx
      columns: [
        {
          field: 'name',
          title: 'Name',
          width: '250px',
          expandable: true,
        },
        {
          field: 'title',
          title: 'Title',
        },
      ],
    ```

1. Define a data property with the name of the field that will provide an array representation of the item subitems.

    ```jsx
      subItemsField: 'employees',
    ```

1. Define a data property with the name of the field that will provide a Boolean representation of the expanded state of each item.

    ```jsx
      expandField: 'expanded',
    ```

1. Add the following TreeView definition in the `template` section of the `src/App.vue` file in your project.

    ```jsx-no-run
      <TreeList
        :style="{
          'max-height': '510px',
          overflow: 'auto',
        }"
        :expand-field="expandField"
        :sub-items-field="subItemsField"
        :data-items="dataItems"
        :columns="columns"
      />
    ```

1. To style the TreeList, install and import the [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/), which is one of the [four beautiful themes]({% slug themesandstyles %}) for Kendo UI for Vue.

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

## Activating Your License Key

Using any of the UI components in the Kendo UI for Vue Native library requires either a commercial license key or an active trial license key.

Follow the instructions on the [My License page]({% slug my_license %}) to activate your trial or commercial license. You can skip this step if your application already contains a Kendo UI for Vue license file.

## Dependencies

The `TreeList` package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name | Description |
|--------------|-------------|
| vue 2.6.11 or 3.0.0 | Contains the functionality necessary to define Vue components. |
| @progress/kendo-licensing | Contains the internal infrastructure related to licensing. |
| @progress/kendo-svg-icons | Contains the SVG icons for the components |
| @progress/kendo-vue-intl | Contains the Kendo UI for Vue Native Internationalization package that applies the desired cultures by providing services and pipes for the parsing and formatting of dates and numbers. |
| @progress/kendo-data-query |  Applies sorting, filtering, grouping, and aggregate data operations. |
| @progress/kendo-vue-animation | Enables the animations in the Kendo UI for Vue Native components. |
| @progress/kendo-vue-data-tools | Delivers components required to manage and control the data in the application. |
| @progress/kendo-vue-dateinputs | Contains the Kendo UI for Vue Native Date Inputs components that are used to select the date and time for an appointment. |
| @progress/kendo-vue-dropdowns | Contains the Kendo UI for Vue Native Dropdowns, which allows users to choose from a predefined list of options. |
| @progress/kendo-vue-inputs | Contains the Kendo UI for Vue Native Inputs, which the input of data, based on a specific and predefined format. |
| @progress/kendo-drawing | Contains the Drawing library, which provides interactive vector graphics. |
| @progress/kendo-vue-buttons | Contains the Kendo UI for Vue Native Buttons library, which provides buttons. |
| @progress/kendo-date-math | Contains the logic for working with date objects and timezones. |

> Vue 2 is currently in its end-of-support phase till Nov 2024. After our last major release for 2024, Vue 2 will no longer be supported in the new versions of the Kendo UI for Vue components. Please check our [Vue 2 End of Support article](slug:vue2-end-of-support) for more details.

## Suggested Links

* Data operations
    * [Editing]({% slug editing_treelist %})
    * [Filtering]({% slug filtering_treelist %})
    * [Paging]({% slug paging_treelist %})
    * [Sorting]({% slug sorting_treelist %})
* Export options
    * [Excel export]({% slug overview_excelexport_treelist %})
    * [PDF export]({% slug overview_pdfexport_treelist %})
* Advanced implementations
    * [Aggregates]({% slug aggregates_treelist %})
* TreeList customization
    * [ToolBar configuration]({% slug toolbar_treelist %})
    * [Custom cell template]({% slug cells_content_treelist %})
* More settings
    * [Column features]({% slug width_treelist %})
    * [Virtual Scrolling]({% slug virtualscrolling_treelist %})
    * [Rows Drag and Drop]({% slug dragdrop_treelist %})
    <!-- * [Selection]({% slug selection_treelist %}) -->
    * [Flat data]({% slug flat_data_treelist %})
    * [Globalization]({% slug globalization_treelist %})

## Learning Resources

* [Getting Started with Kendo UI for Vue Native suite]({% slug getting_started_javascript_composition_api %})
* [Kendo UI for Vue - First Steps with JavaScript + Options API]({% slug getting_started_javascript_options_api %})
* [Kendo UI for Vue - First Steps with TypeScript]({% slug getting_started_typescript_composition_api %})
* [Kendo UI for Vue - First Steps with TypeScript + Options API]({% slug getting_started_typescript_options_api %})
* [Kendo UI for Vue TypeScript Integration Overview]({% slug overview_typescript_integration %})
* [Kendo UI for Vue with TypeScript Virtual Classroom Tutorial](https://learn.telerik.com/learn/course/internal/view/elearning/45/kendo-ui-for-vue-with-typescript)
* [Explore the Coffee Warehouse Sample Application](https://github.com/telerik/kendo-vue/tree/master/examples-standalone/coffee-warehouse)
* [Explore the GitHub Dashboard Sample Application](https://github.com/telerik/kendo-vue/tree/master/examples-standalone/dashboard)
* [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})
