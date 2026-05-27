---
title: Overview
page_title: Overview - Kendo UI For Vue Native Grid
description: "Try the native Vue Grid by Kendo UI with ready-to-use features covering paging, sorting, filtering, data editing, and grouping."
slug: overview_grid
position: 0
---

# Kendo UI for Vue Native Data Grid Overview

The Kendo UI for Vue Native Data Grid (Table) provides 100+ ready-to-use features covering everything from paging, sorting, filtering, editing, and grouping to row and column virtualization, export to PDF and Excel and accessibility.

The Kendo UI for Vue Grid is built on Vue from the ground up, with zero dependencies, by a company with 10+ years of experience in making enterprise-ready Grids. This results in a Vue data grid that delivers lightning fast performance and offers extensive customization.

It supports the implementation of data operations and binds to local or remote data. As a native Vue component, it takes full advantage of the Vue framework.

<div data-component="StartFreeTrialSection"></div>

## Kendo UI for Vue Native Grid Demo

{% meta height:570 %}
{% embed_file basic/main.vue preview %}
{% embed_file basic/Grid.vue %}
{% embed_file basic/BudgetComponent.vue %}
{% embed_file basic/ContactNameComponent.vue %}
{% embed_file basic/EngagementComponent.vue %}
{% embed_file basic/FlagComponent.vue %}
{% embed_file basic/IsOnlineComponent.vue %}
{% embed_file basic/images.js %}
{% embed_file basic/employees.json %}
{% embed_file basic/main.js %}
{% embed_file basic/en-US.js %}
{% embed_file basic/fr.js %}
{% embed_file basic/es.js %}
{% endmeta %}

## Setting Up Your Vue Project

Before you install the Kendo UI for Vue Native Grid, make sure that you have a running Vue project. The easiest way to set up a Vue project is to use the approach described in the [Set up the Vue project]({% slug getting_started_javascript_composition_api %}#toc-1-set-up-the-vue-project) section of the [First Steps with JavaScript ]({% slug getting_started_javascript_composition_api %}) article.

## Installing the Components

All Kendo UI for Vue packages are distributed through npm and offer a similar installation experience. To use the Grid, start with the installation of the npm package and its [dependencies](#toc-dependencies).

Navigate to the root folder of your Vue project and run the following command:

   ```sh
   npm i @progress/kendo-vue-grid @progress/kendo-data-query @progress/kendo-vue-data-tools @progress/kendo-vue-inputs @progress/kendo-vue-intl @progress/kendo-vue-dropdowns @progress/kendo-vue-dateinputs @progress/kendo-drawing @progress/kendo-vue-animation @progress/kendo-vue-buttons @progress/kendo-vue-treeview @progress/kendo-vue-popup @progress/kendo-svg-icons @progress/kendo-theme-default @progress/kendo-licensing
   ```

## Importing the Components

After installing the Grid package, import the component in the Vue App.

In the App component file of your Vue project (for example, `src/App.vue`), add the following code:

   ```jsx-no-run
   // ES2015 module syntax
   import { Grid } from '@progress/kendo-vue-grid';
   ```

   ```jsx-no-run
   // CommonJS format
   const { Grid } = require('@progress/kendo-vue-grid');
   ```

## Using the Grid

1. After installing the listed above packages and importing the Grid component, add it to the template section of the App component file of your Vue project (for example, `src/App.vue`).
    ```jsx-no-run
    <Grid
        :style="{ height: '450px' }"
        :data-items="result"
        :columns="columns"
    >
    </Grid>
    ```
1. In the script section of the application, add definitions for the data items and the columns that the Grid will display:
    ```jsx-no-run
    export default {
        components: {
            Grid: Grid,
        },
        data: function () {
            return {
            dataItems: [.........],
            columns: [
                { field: 'ProductID' },
                { field: 'ProductName', title: 'Product Name' },
                { field: 'UnitPrice', title: 'Unit Price' },
            ],
        };
    }
    ```
1. To style the Grid, install and import the [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/), which is one of the [four beautiful themes]({% slug themesandstyles %}) for Kendo UI for Vue.

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

Follow the instructions on the Kendo UI for Vue [My License page]({% slug my_license %}) to activate your license. You can skip this step if your application already contains a Kendo UI license file.

## Functionality and Features

* Data operations
    * [Editing]({% slug editing_grid %})
    * [Filtering]({% slug filtering_grid %})
    * [Grouping]({% slug groupingbasics_grid %})
    * [Paging]({% slug paging_grid %})
    * [Sorting]({% slug sorting_grid %})
    * [Selection]({% slug selection_grid %})
    * [Clipboard]({% slug clipboard_grid %})
* Export options
    * [Excel export]({% slug exporting_grid %})
    * [PDF export]({% slug overview_pdfexport_grid %})
* Custom templates
    * [Cell template]({% slug custom_cells_grid %})
    * [Header template]({% slug custom_headers_grid %})
    * [Detail-row template]({% slug detailrow_grid %})
    * [Master-detail template]({% slug master_detail_grid %})
    * [Group header template]({% slug groupheadertemplate_grid %})
* More settings
    * [Column features]({% slug reordering_columns_grid %})
    * [Scroll modes]({% slug scrollmmodes_grid %})
    * [Globalization]({% slug globalization_grid %})


## Dependencies

The Grids package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

* vue 3.0.0*
* @progress/kendo-data-query
* @progress/kendo-licensing
* @progress/kendo-vue-animation
* @progress/kendo-vue-data-tools
* @progress/kendo-vue-dateinputs
* @progress/kendo-vue-dropdowns
* @progress/kendo-vue-inputs
* @progress/kendo-vue-indicators
* @progress/kendo-vue-intl
* @progress/kendo-vue-popup

> Vue 2 is currently in its end-of-support phase till Nov 2024. After our last major release for 2024, Vue 2 will no longer be supported in the new versions of the Kendo UI for Vue components. Please check our [Vue 2 End of Support article](slug:vue2-end-of-support) for more details.

## Support and Learning Resources

* [Grid Homepage](https://www.telerik.com/kendo-vue-ui/grid)
* [API Reference of the Grid Component](slug:api_grid)
* [Getting Started with Kendo UI for Vue - JavaScript (Online Guide)](slug:getting_started_javascript_composition_api)
* [Getting Started with Kendo UI for Vue - TypeScript (Online Guide)](slug:getting_started_typescript_composition_api)
* [Getting Started with Kendo UI for Vue - JavaScript + Options API (Online Guide)](slug:getting_started_javascript_options_api)
* [Getting Started with Kendo UI for Vue - TypeScript + Options API (Online Guide)](slug:getting_started_typescript_options_api)
* [Getting Started with Kendo UI for Vue - Nuxt 3 (Online Guide)](slug:getting_started_nuxt_3)
* [Virtual Classroom (Training Course for Registered Users)](https://learn.telerik.com/learn/course/internal/view/elearning/45/kendo-ui-for-vue-with-typescript)
* [Grid Forum](https://www.telerik.com/forums/kendo-ui-vue?searchText=grid)
* [Knowledge Base](https://www.telerik.com/kendo-vue-ui/components/knowledge-base/)
* [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})

## Additional Resources

* [Vue Blogs](https://www.telerik.com/blogs/tag/kendo-ui-for-vue)
* [Kendo UI for Vue Roadmap](https://www.telerik.com/support/whats-new/kendo-vue-ui/roadmap)
* [Multifunctional Grid Example with Grouping, Detail Template, Localization, etc.]({% slug grid-grouping-detail-template-localization-sortable-reorderable %})
