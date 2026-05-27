---
title: Getting Started
description: "Get started with the Kendo UI for Vue Native ListBox package and learn how to use the ListBox component in Vue projects."
slug: get_started_listbox
position: 1
---

# Getting Started with the Kendo UI for Vue Native ListBox

This guide provides essential information about using the Kendo UI for Vue Native ListBox package&mdash;you will learn how to install the ListBox package, add a ListBox component to your project, style the component, and activate your license.

<div data-component="StartFreeTrialSection"></div>

After completing this guide, you will be able to reproduce the following example.

{% meta height:500 %}
{% embed_file get-started/main.vue preview %}
{% embed_file get-started/main.js %}
{% embed_file shared/data.js %}
{% endmeta %}

## Setting Up Your Vue Project

Before you install the Kendo UI for Vue Native ListBox, make sure that you have a running Vue project. The easiest way to set up a Vue project is to use the approach described in the [Set up the Vue project](slug:getting_started_javascript_composition_api#toc-1-set-up-the-vue-project) section of the [First Steps with JavaScript ](slug:getting_started_javascript_composition_api) article.

## Installing the ListBox Package

All Kendo UI for Vue Native packages are distributed through npm and offer a similar installation experience. To use the ListBox component, start with the installation of the ListBox npm package and its [dependencies](#toc-dependencies). Use Node.js v5.0.0 or later.

```sh
npm install --save @progress/kendo-vue-listbox @progress/kendo-licensing @progress/kendo-svg-icons
```

## Importing the Component

After installing the package, import the ListBox component in the Vue App. To provide a flawless data transfer between multiple ListBox components, import the `processListBoxData` method.

In the `src/App.vue` file of your Vue project, import the `ListBox` component from the ListBox package.

```jsx-no-run
// ES2015 module syntax
import { ListBox } from "@progress/kendo-vue-listbox";
```

```jsx-no-run
// CommonJS format
const { ListBox } = require('@progress/kendo-vue-listbox');
```

## Using the Component

1. Import the `data` file in the `src/App.vue` file.

    ```jsx
      import { data } from './data';
    ```

1. Define the variables that will hold the data for the two ListBox components.

    ```jsx
      data() {
        return {
          employees: data,
          developers: [],
        };
      }
    ```

1. Set the [selectField]({% slug api_listbox_listboxprops %}#toc-selectfield) value. That value will determine which items are selected.

    ```jsx
      const SELECTED_FIELD = 'selected';
      .....
      data() {
        return {
          SELECTED_FIELD,
          ......
        };
      }
    ```

1. Add a handler for the [onItemClick]({% slug api_listbox_listboxprops %}#toc-onitemclick) event of the ListBox. It is needed select or deselect items.

    ```jsx
      handleItemClick(event, data, connectedData) {
        this[data] = this[data].map((item) => {
          if (item.name === event.dataItem.name) {
            item[SELECTED_FIELD] = !item[SELECTED_FIELD];
          } else if (!event.ctrlKey) {
            item[SELECTED_FIELD] = false;
          }
          return item;
        });
        this[connectedData] = this[connectedData].map((item) => {
          item[SELECTED_FIELD] = false;
          return item;
        });
      }
    ```

1. Add a handler for the [onToolClick]({% slug api_listbox_listboxtoolbarprops %}#toc-ontoolclick) event of the ListBoxToolbar. It is needed to update the lists.

    ```jsx
      handleToolBarClick(e) {
        let toolName = e.toolName || '';
        let result = processListBoxData(
          this.employees,
          this.developers,
          toolName,
          SELECTED_FIELD
        );

        this.employees = result.listBoxOneData;
        this.developers = result.listBoxTwoData;
      }
    ```

1. Add the markup of the two components to the template section of the `src/App.vue` file in your project.

    ```jsx
    <div class="container">
        <div class="row justify-content-center">
        <div class="col">
            <h6>Employees</h6>
            <ListBox
            :style="{ height: '400px', width: '100%' }"
            :dataItems="employees"
            :text-field="'name'"
            :selectedField="SELECTED_FIELD"
            :draggable="false"
            @itemclick="itemClick"
            :toolbar="'toolbar'"
            >
            <template #toolbar>
                <ListBoxToolbar
                :tools="[
                    'moveUp',
                    'moveDown',
                    'transferTo',
                    'transferFrom',
                    'transferAllTo',
                    'transferAllFrom',
                    'remove',
                ]"
                :dataItems="employees"
                :dataConnected="developers"
                @toolclick="handleToolBarClick"
                />
            </template>
            </ListBox>
        </div>
        <div class="col">
            <h6>Developers</h6>
            <ListBox
            :style="{ height: '400px', width: '100%' }"
            :dataItems="developers"
            :textField="'name'"
            :selectedField="SELECTED_FIELD"
            @itemclick="itemClick2"
            />
        </div>
        </div>
    </div>
    ```

1. To style the ListBox, install and import the [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/), which is one of the [four beautiful themes](slug:themesandstyles) for Kendo UI for Vue.

   1. Install the Default theme package.

      ```sh
      npm install --save @progress/kendo-theme-default
      ```

   2. Import the Theme package in `src/App.vue`..

      ```jsx
      import '@progress/kendo-theme-default';
      ```

1. Build, run and test the application by typing the following command in the root folder of your project:

   ```sh
   npm run dev
   ```

## Activating Your License Key

Using any of the UI components in the Kendo UI for Vue Native library requires either a commercial license key or an active trial license key.

Follow the instructions on the [My License page](slug:my_license) to activate your trial or commercial license. You can skip this step if your application already contains a Kendo UI for Vue license file.

## Dependencies

The ListBox package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name | Description |
|--------------|-------------|
| vue 2.6.14 or 3.0.0+ | Contains the functionality necessary to define Vue components. |
| @progress/kendo-licensing | Contains the internal infrastructure related to licensing. |
| @progress/kendo-svg-icons | Contains the svg icons for the components.                 |
| @progress/kendo-vue-buttons | Contains the definitions of all Button components available in the Kendo UI for Vue Native suite. |

> Vue 2 is currently in its end-of-support phase till Nov 2024. After our last major release for 2024, Vue 2 will no longer be supported in the new versions of the Kendo UI for Vue components. Please check our [Vue 2 End of Support article](slug:vue2-end-of-support) for more details.

## Suggested Links

* [Selection]({% slug selection_listbox %})
* [Drag and Drop]({% slug draganddrop_listbox %})
* [Customization]({% slug customization_listbox %})
* [Multiple Lists]({% slug multiplelists_listbox %})
* [Globalization]({% slug globalization_listbox %})

## Learning Resources

* [Kendo UI for Vue - First Steps with JavaScript]({% slug getting_started_javascript_composition_api %})
* [Kendo UI for Vue - First Steps with JavaScript + Options API]({% slug getting_started_javascript_options_api %})
* [Kendo UI for Vue - First Steps with TypeScript]({% slug getting_started_typescript_composition_api %})
* [Kendo UI for Vue - First Steps with TypeScript + Options API]({% slug getting_started_typescript_options_api %})
* [Virtual Classroom - Kendo UI for Vue with TypeScript(Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/internal/view/elearning/45/kendo-ui-for-vue-with-typescript)
* [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})
