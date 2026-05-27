---
title: Getting Started
description: "Get started with the Kendo UI for Vue Native Notification package and learn how to use the Notification component in Vue projects."
slug: get_started_notification
position: 1
---

# Getting Started with the Kendo UI for Vue Native Notification

This guide provides essential information about using the Kendo UI for Vue Native Notification package component&mdash;you will learn how to install the Notification package, add a Notification component to your project, style the component, and activate your license.

<div data-component="StartFreeTrialSection"></div>

After completing this guide, you will be able to reproduce the following example.

{% meta height:280 %}
{% embed_file get-started/main.vue preview %}
{% embed_file get-started/main.js %}
{% embed_file get-started/styles.css %}
{% endmeta %}

## Setting Up Your Vue Project

Before you install the Kendo UI for Vue Native Notification, make sure that you have a running Vue project. The easiest way to set up a Vue project is to use the approach described in the [Set up the Vue project]({% slug getting_started_javascript_composition_api %}#toc-1-set-up-the-vue-project) section of the [First Steps with JavaScript ]({% slug getting_started_javascript_composition_api %}) article.

## Installing the Notification Package

All Kendo UI for Vue Native packages are distributed through npm and offer a similar installation experience. To use the Notification component, start with the installation of the Notification npm package and its [dependencies](#toc-dependencies). Use Node.js v5.0.0 or later.

```sh
npm install --save @progress/kendo-vue-notification @progress/kendo-licensing @progress/kendo-svg-icons
```

## Importing the Component

After installing the package, import the Notification and NotificationGroup components in the Vue App.

In the `src/App.vue` file of your Vue project, import the `Notification` and `NotificationGroup` components from the Notification package.

```jsx-no-run
// ES2015 module syntax
import { Notification, NotificationGroup } from '@progress/kendo-vue-notification';
```

```jsx-no-run
// CommonJS format
const { Notification, NotificationGroup } = require('@progress/kendo-vue-notification');
```

## Using the Component

1. Define a variable that will determine if the Notification will be visible.

    ```jsx
        data() {
            return {
                success: false,
            };
        },
    ```

1. Define method that will control the visibility of the Notification on a button click.

    ```jsx
        methods: {
            onToggle(flag) {
                this[flag] = !this[flag];
            },
        },
    ```

1. Add animation to the component by importing the `Fade` animation.

    ```jsx
        import { Fade } from '@progress/kendo-vue-animation';
    ```

1. Add the component's markup to the template section of the `src/App.vue` file in your project. You will render the Notification component based on the `success` value. Wrap the entire Notification component inside the `Fade` component to animate it.

    ```jsx
        <div>
            <button
                class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
                @click="onToggle('success')"
            >
                Toggle Notification
            </button>
            <NotificationGroup
            :style="{
                right: 0,
                bottom: 0,
                alignItems: 'flex-start',
                flexWrap: 'wrap-reverse'
            }"
            >
            <Fade :appear="success">
                <Notification
                v-if="success"
                :type="{ style: 'success', icon: true }"
                :closable="true"
                @close="onToggle('success')"
                >
                <span>Your data has been saved.</span>
                </Notification>
            </Fade>
            </NotificationGroup>
        </div>
    ```

1. To style the Notification, install and import the [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/), which is one of the [four beautiful themes]({% slug themesandstyles %}) for Kendo UI for Vue.

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

Follow the instructions on the [My License page]({% slug my_license %}) to activate your trial or commercial license. You can skip this step if your application already contains a Kendo UI for Vue Native license file.

## Dependencies

The Notification package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name | Description |
|--------------|-------------|
| vue 2.6.14 or 3.0.0+ | Contains the functionality necessary to define Vue components. |
| @progress/kendo-licensing | Contains the internal infrastructure related to licensing. |
| @progress/kendo-svg-icons | Contains the SVG icons for the components |

> Vue 2 is currently in its end-of-support phase till Nov 2024. After our last major release for 2024, Vue 2 will no longer be supported in the new versions of the Kendo UI for Vue components. Please check our [Vue 2 End of Support article](slug:vue2-end-of-support) for more details.

## Suggested Links

* [Notification types]({% slug types_notification %})
* [Animations]({% slug animations_notification %})
* [Positioning]({% slug positioning_notification %})

## Learning Resources

* [Kendo UI for Vue - First Steps with JavaScript]({% slug getting_started_javascript_composition_api %})
* [Kendo UI for Vue - First Steps with JavaScript + Options API]({% slug getting_started_javascript_options_api %})
* [Kendo UI for Vue - First Steps with TypeScript]({% slug getting_started_typescript_composition_api %})
* [Kendo UI for Vue - First Steps with TypeScript + Options API]({% slug getting_started_typescript_options_api %})
* [Virtual Classroom - Kendo UI for Vue with TypeScript(Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/internal/view/elearning/45/kendo-ui-for-vue-with-typescript)
* [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})

