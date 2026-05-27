---
title: Getting Started
description: "Get started with the Kendo UI for Vue Native ScrollView package and learn more about how to use the ScrollView component in Vue projects."
slug: get_started_scrollview
position: 1
---

# Getting Started with the Kendo UI for Vue Native ScrollView

This guide provides the information you need to start using the Kendo UI for Vue Native ScrollView — it includes instructions about the available installation approaches, the required dependencies, the code for running the project, and links to additional resources.

<div data-component="StartFreeTrialSection"></div>

After the completion of this guide, you will be able to achieve an end result as demonstrated in the following example.

{% meta  height:460 %}
{% embed_file get-started/main.vue preview %}
{% embed_file get-started/main.js %}
{% embed_file get-started/styles.css %}
{% endmeta %}

## Setting Up Your Vue Project

Before you install the Kendo UI for Vue Native Notification, make sure that you have a running Vue project. The easiest way to set up a Vue project is to use the approach described in the [Set up the Vue project]({% slug getting_started_javascript_composition_api %}#toc-1-set-up-the-vue-project) section of the [First Steps with JavaScript ]({% slug getting_started_javascript_composition_api %}) article.

## Installing the ScrollView Package

All Kendo UI for Vue packages are distributed through npm and offer a similar installation experience. To use the ScrollView component, start with the installation of the ScrollView npm package and its [dependencies](#toc-dependencies). Use Node.js v5.0.0 or later.

```sh
npm install --save @progress/kendo-vue-scrollview @progress/kendo-vue-intl @progress/kendo-licensing @progress/kendo-svg-icons
```

## Importing the Component

After installing the package, import the `ScrollView` component in the Vue App.

In the `src/App.vue` file of your Vue project, import the `ScrollView` component from the ScrollView package.

```jsx-no-run
// ES2015 module syntax
import { ScrollView } from "@progress/kendo-vue-scrollview";
```

```jsx-no-run
// CommonJS format
const { ScrollView } = require('@progress/kendo-vue-scrollview');
```

## Using the Component

1. Define the `items` property that holds the data of the images we want to display in the ScrollView. Add the following code in the `src/App.vue` file.

  ```jsx
    items: [
      {
        position: 1,
        url: 'https://demos.telerik.com/kendo-ui/content/shared/images/photos/1.jpg',
      },
      {
        position: 2,
        url: 'https://demos.telerik.com/kendo-ui/content/shared/images/photos/2.jpg',
      },
      {
        position: 3,
        url: 'https://demos.telerik.com/kendo-ui/content/shared/images/photos/3.jpg',
      },
      {
        position: 4,
        url: 'https://demos.telerik.com/kendo-ui/content/shared/images/photos/4.jpg',
      },
    ];
  ```

1. Add the component's markup to the template section of the `src/App.vue` file in your project.

  ```jsx-no-run
    <div>
      <ScrollView
        :style="{
          width: '512px',
          height: '384px',
        }"
        :data-items="items"
        :content="'content'"
      >
        <template #content="{ props }">
          <div class="image-with-text">
            <img
              :src="props.item.url"
              :alt="`Photo ${props.item.position}`"
              :style="{
                width: '512px',
                height: '384px',
              }"
              :draggable="false"
            />
          </div>
        </template>
      </ScrollView>
    </div>

  ```
1. Add the component's CSS to the styles section of the `src/App.vue` file.

  ```scss
  /* center the ScrollView horizontally */
  /* k-scrollview is the default component class */
  .k-scrollview {
      margin: 0 auto;
  }
  ```
1. To style the ScrollView, install and import the [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/), which is one of the [four beautiful themes]({% slug themesandstyles %}) for Kendo UI for Vue

   1. Install the Default theme package.

      ```sh
      npm install --save @progress/kendo-theme-default
      ```

   2. Import the CSS file from the package in `src/App.js`. Add this import before your existing `App.css` import.

      ```jsx
      import '@progress/kendo-theme-default/dist/all.css';
      ```

1. Build and run the application by typing the following command in the root folder of your project:

   ```sh
   npm run dev
   ```

## Activating Your License Key

Using any of the UI components in the Kendo UI for Vue library requires either a commercial license key or an active trial license key.

Follow the instructions on [My License page]({% slug my_license %}) to activate your trial or commercial license. You can skip this step if your application already contains a Kendo UI for Vue license file.

## Dependencies

The ScrollView package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name | Description |
|--------------|-------------|
| vue 2.6.14 or 3.0.0+ | Contains the functionality necessary to define Vue components. |
| @progress/kendo-licensing | Contains the internal infrastructure related to licensing. |
| @progress/kendo-svg-icons | Contains the SVG icons for the components |
| @progress/kendo-vue-intl | Contains the Kendo UI for Vue Native Internationalization package that applies the desired cultures by providing services and pipes for the parsing and formatting of dates and numbers. |

> Vue 2 is currently in its end-of-support phase till Nov 2024. After our last major release for 2024, Vue 2 will no longer be supported in the new versions of the Kendo UI for Vue components. Please check our [Vue 2 End of Support article](slug:vue2-end-of-support) for more details.

## Suggested Links

* [Enabling the endless scrolling]({% slug endlessscrolling_scrollview %})
* [Displaying pager overlays]({% slug paging_scrollview %})
* [API Reference of the ScrollView]({% slug api_scrollview_scrollview %})

## Learning Resources

* [Kendo UI for Vue - First Steps with JavaScript]({% slug getting_started_javascript_composition_api %})
* [Kendo UI for Vue - First Steps with JavaScript + Options API]({% slug getting_started_javascript_options_api %})
* [Kendo UI for Vue - First Steps with TypeScript]({% slug getting_started_typescript_composition_api %})
* [Kendo UI for Vue - First Steps with TypeScript + Options API]({% slug getting_started_typescript_options_api %})
* [Virtual Classroom - Kendo UI for Vue with TypeScript(Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/internal/view/elearning/45/kendo-ui-for-vue-with-typescript)
* [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})

