---
title: Overview
description: "Get started with the Vue Excel Export package by Kendo UI for Vue and learn more about how to export data to Excel in Vue projects."
slug: overview_excelexport_vue
position: 0
---

# Kendo UI for Vue Native Excel Export Overview


The Kendo UI for Vue Native `saveExcel` method allows you to export and save data to Excel files, to customize the output cells and columns, and to filter the data after the export.

The `saveExcel` method is part of the Kendo UI for Vue library. It is distributed through NPM under the [kendo-vue-excel-export package](https://www.npmjs.com/package/@progress/kendo-vue-excel-export).

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates the `saveExcel` method in action.

{% meta height:300 %}
{% embed_file basic/main.vue preview %}
{% embed_file basic/main.js preview %}
{% embed_file shared/products.json %}
{% endmeta %}

## Functionality and Features

* [Configuration of exported columns]({% slug columns_excelexport_vue %})
* [Customization of exported cells]({% slug cells_excelexport_vue %})
* [Customization of the workbook]({% slug workbook_excelexport_vue %})
* [Filtering]({% slug filtering_excelexport_vue %})
* [Saving files on the server]({% slug filesaving_excelexport_vue %})
* [Right-to-left support]({% slug rtl_excelexport_vue %})

## Installation

1. Download and install the package:

    ```sh
       npm install --save @progress/kendo-vue-excel-export @progress/kendo-licensing
    ```

1. Once installed, import the method.

    ```jsx-no-run
    // ES2015 module syntax
    import { saveAs } from '@progress/kendo-file-saver';
    ```
    ```jsx-no-run
    // CommonJS format
    const { saveAs } = require('@progress/kendo-vue-excel-export');
    ```

1. Follow the instructions on the Kendo UI for Vue [Activate License Key page]({% slug my_license %}) to activate your license. You can skip this step if your application already contains a Kendo UI for Vue license file.

## Compatibility

The Excel Export package is compatible with both **Vue 2** and **Vue 3**.

> Historically, all Kendo UI for Vue Native components support both **Vue 2** and **Vue 3**, however Vue 2 is currently in its end-of-support phase till Nov 2024. After our last major release for 2024, Vue 2 will no longer be supported in the new versions of the Kendo UI for Vue components. Please check our [Vue 2 End of Support article](slug:vue2-end-of-support) for more details.

## Known Limitations

* Older browsers, such as Internet Explorer 9 and Safari, require you to implement a server proxy. For more information, refer to the section on the [`proxyUrl`]({% slug api_excel-export_excelexportoptions %}#toc-proxyurl) configuration.
* The maximum size of the exported file has a system-specific limit. For large data sets, we recommend using a server-side solution

## Support and Learning Resources

* [API Reference of the Excel Export Functionality](slug:api_excel-export)
* [Getting Started with Kendo UI for Vue - JavaScript (Online Guide)](slug:getting_started_javascript_composition_api)
* [Getting Started with Kendo UI for Vue - TypeScript (Online Guide)](slug:getting_started_typescript_composition_api)
* [Getting Started with Kendo UI for Vue - JavaScript + Options API (Online Guide)](slug:getting_started_javascript_options_api)
* [Getting Started with Kendo UI for Vue - TypeScript + Options API (Online Guide)](slug:getting_started_typescript_options_api)
* [Getting Started with Kendo UI for Vue - Nuxt 3 (Online Guide)](slug:getting_started_nuxt_3)
* [Virtual Classroom (Training Course for Registered Users)](https://learn.telerik.com/learn/course/internal/view/elearning/45/kendo-ui-for-vue-with-typescript)
* [Excel Export Forum](https://www.telerik.com/forums/kendo-ui-vue?searchText=excel)
* [Knowledge Base](https://www.telerik.com/kendo-vue-ui/components/knowledge-base/)
* [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})

## Additional Resources

* [Vue Blogs](https://www.telerik.com/blogs/tag/kendo-ui-for-vue)
* [Kendo UI for Vue Roadmap](https://www.telerik.com/support/whats-new/kendo-vue-ui/roadmap)
