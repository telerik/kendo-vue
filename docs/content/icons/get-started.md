---
title: Getting Started
description: "Get started with the Kendo UI for Vue Icons package and learn more about how to use the different Icons components in Vue projects."
slug: get_started_icons
position: 1
---

# Getting Started with the Kendo UI for Vue Native Icons

This guide provides the information you need to start using the Kendo UI for Vue Native Icons&mdash;it includes instructions about the available installation approaches, the required dependencies, the code for running the project, and links to additional resources.

<div data-component="StartFreeTrialSection"></div>

After the completion of this guide, you will be able to achieve an end result as demonstrated in the following example.

{% meta height:100 %}
{% embed_file getting-started/main.vue preview %}
{% embed_file getting-started/main.js %}
{% endmeta %}

## Setting Up Your Vue Project

Before you install the Kendo UI for Vue Native Icons, make sure that you have a running Vue project. The easiest way to set up a Vue project is to use the approach described in the [Set up the Vue project](slug:getting_started_javascript_composition_api#toc-1-set-up-the-vue-project) section of the [First Steps with JavaScript ](slug:getting_started_javascript_composition_api) article.

## Installing the Icons Package

All Kendo UI for Vue Native packages are distributed through npm and offer a similar installation experience. To use the SvgIcon component, start with the installation of the `@progress/kendo-vue-common ` npm package and its [dependencies](#toc-dependencies).

```sh
npm install --save @progress/kendo-vue-common @progress/kendo-svg-icons @progress/kendo-licensing
```

## Importing the Component

After installing the package, import the `SvgIcon` component in the `src/App.vue` file.


```jsx-no-run
// ES2015 module syntax
import { SvgIcon } from '@progress/kendo-vue-common';
```

```jsx-no-run
// CommonJS format
const { SvgIcon } = require('@progress/kendo-vue-common');
```

## Using the Component

1. Import the `cameraIcon` icon from the `@progress/kendo-svg-icons` package.

    ```jsx
    import { cameraIcon } from '@progress/kendo-svg-icons';
    ```

1. Define the `cameraIcon` as a data property.

    ```jsx
      data() {
        return {
            cameraIcon
        };
      }
    ```

1. Add the markup of the `SvgIcon` to the template section of the `src/App.vue` file in your project.

    ```jsx
        <SvgIcon :icon="cameraIcon" />
    ```

1. To style the SvgIcon, install and import the [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/), which is one of the [four beautiful themes](slug:themesandstyles) for Kendo UI for Vue.

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

The Vue Common package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name | Description |
|--------------|-------------|
| vue 2.6.14 or 3.0.0+ | Contains the functionality necessary to define Vue components. |
| @progress/kendo-vue-common  | Contains logic and features that are common for many Kendo UI for Vue components. |
| @progress/kendo-svg-icons  | Contains the definitions of the SVG icons provided by the Kendo UI for Vue Native suite. |
| @progress/kendo-licensing | Contains the internal infrastructure related to licensing. |

> Vue 2 is currently in its end-of-support phase till Nov 2024. After our last major release for 2024, Vue 2 will no longer be supported in the new versions of the Kendo UI for Vue components. Please check our [Vue 2 End of Support article](slug:vue2-end-of-support) for more details.

## Next Steps

* [Icon Overview]({% slug overview_icon %})
* [SVGIcon Overview]({% slug overview_svgicon %})
* [Icons API Documentation]({% slug api_common %})

## Learning Resources

* [Kendo UI for Vue - First Steps with JavaScript]({% slug getting_started_javascript_composition_api %})
* [Kendo UI for Vue - First Steps with JavaScript + Options API]({% slug getting_started_javascript_options_api %})
* [Kendo UI for Vue - First Steps with TypeScript]({% slug getting_started_typescript_composition_api %})
* [Kendo UI for Vue - First Steps with TypeScript + Options API]({% slug getting_started_typescript_options_api %})
* [Virtual Classroom - Kendo UI for Vue with TypeScript(Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/internal/view/elearning/45/kendo-ui-for-vue-with-typescript)
* [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})

