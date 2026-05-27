---
title: Getting Started
description: "Get started with the Kendo UI for Vue Native TreeView package and learn how to use the TreeView component in Vue projects."
slug: get_started_treeview
position: 1
---

# Getting Started with the Kendo UI for Vue Native TreeView

This guide provides essential information about using the Kendo UI for Vue Native TreeView package&mdash;you will learn how to install the TreeView package, add a TreeView component to your project, style the component, and activate your license.

<div data-component="StartFreeTrialSection"></div>

After completing this guide, you will be able to reproduce the following example.

{% meta height:380 %}
{% embed_file get-started/main.vue preview %}
{% embed_file get-started/main.js %}
{% endmeta %}

## Setting Up Your Vue Project

Before you install the Kendo UI for Vue Native TreeView, make sure that you have a running Vue project. The easiest way to set up a Vue project is to use the approach described in the [Set up the Vue project]({% slug getting_started_javascript_composition_api %}#toc-1-set-up-the-vue-project) section of the [First Steps with JavaScript ]({% slug getting_started_javascript_composition_api %}) article.

## Installing the TreeView Package

All Kendo UI for Vue packages are distributed through npm and offer a similar installation experience. To use the TreeView component, start with the installation of the TreeView npm package and its [dependencies](#toc-dependencies). Use Node.js v5.0.0 or later.

```sh
npm install --save @progress/kendo-vue-treeview @progress/kendo-licensing @progress/kendo-svg-icons
```

## Importing the Component

After installing the package, import the TreeView component in the Vue App.

In the `src/App.vue` file of your Vue project, import the `TreeView` component from the TreeView package.

```jsx-no-run
// ES2015 module syntax
import { TreeView } from "@progress/kendo-vue-treeview";
```

```jsx-no-run
// CommonJS format
const { TreeView } = require('@progress/kendo-vue-treeview');
```

## Using the Component

1. Add the hierarchical data that you will display in the TreeView.

    ```jsx
      tree: [
        {
          text: 'Furniture',
          expanded: true,
          items: [
            {
              text: 'Tables & Chairs',
            },
            {
              text: 'Sofas',
            },
            {
              text: 'Occasional Furniture',
            },
          ],
        },
        {
          text: 'Decor',
          expanded: true,
          items: [
            {
              text: 'Bed Linen',
            },
            {
              text: 'Curtains & Blinds',
            },
            {
              text: 'Carpets',
            },
          ],
        },
      ]
    ```

1. Add the component's markup to the template section of the `src/App.vue` file in your project.

    ```jsx
      <div>
        <TreeView :dataItems="tree" />
      </div>
    ```

1. To style the TreeView, install and import the [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/), which is one of the [four beautiful themes]({% slug themesandstyles %}) for Kendo UI for Vue.

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

The TreeView package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name | Description |
|--------------|-------------|
| vue 2.6.14 or 3.0.0+ | Contains the functionality necessary to define Vue components. |
| @progress/kendo-licensing | Contains the internal infrastructure related to licensing. |
| @progress/kendo-svg-icons | Contains the SVG icons for the components |

> Vue 2 is currently in its end-of-support phase till Nov 2024. After our last major release for 2024, Vue 2 will no longer be supported in the new versions of the Kendo UI for Vue components. Please check our [Vue 2 End of Support article](slug:vue2-end-of-support) for more details.

## Suggested Links
* [Data binding]({% slug databinding_treeview %})
* [Expanding items]({% slug expansion_treeview %})
* [Selection]({% slug selection_treeview %})
* [Checkboxes]({% slug checkboxes_treeview %})
* [Dragging and dropping]({% slug dragdrop_treeview %})
* [Custom rendering of items]({% slug rendering_treeview %})
* [Keyboard navigation]({% slug keyboard_navigation_treeview %})
* [Accessibility]({% slug accessibility_treeview %})

## Learning Resources

* [Kendo UI for Vue - First Steps with JavaScript]({% slug getting_started_javascript_composition_api %})
* [Kendo UI for Vue - First Steps with JavaScript + Options API]({% slug getting_started_javascript_options_api %})
* [Kendo UI for Vue - First Steps with TypeScript]({% slug getting_started_typescript_composition_api %})
* [Kendo UI for Vue - First Steps with TypeScript + Options API]({% slug getting_started_typescript_options_api %})
* [Virtual Classroom - Kendo UI for Vue with TypeScript(Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/internal/view/elearning/45/kendo-ui-for-vue-with-typescript)
* [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})

