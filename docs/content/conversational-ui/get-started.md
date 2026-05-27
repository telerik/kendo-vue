---
title: Getting Started
description: 'Get started with the Kendo UI for Vue Native Conversational UI and learn how to use the component in Vue projects.'
slug: get_started_conui
position: 10
---

# Getting Started with the Kendo UI for Vue Conversational UI

This guide provides essential information about using the Kendo UI for Vue AIPrompt component, part of the Conversational UI package in the Kendo UI for Vue Native suite.
In this page you will learn how to:

-   Install the Conversational UI package that provides the AIPrompt
-   Add the AIPrompt component to your Vue project and apply basic configurations to it.
-   Style the component and activate your product license.

<div data-component="StartFreeTrialSection"></div>

After completing this guide, you will be able to reproduce the following example.

{% meta height:470 %}
{% embed_file overview/main.vue preview %}
{% embed_file overview/main.js %}
{% endmeta %}

## Setting Up Your Vue Project

Before you install the Kendo UI for Vue AIPrompt, make sure that you have a running Vue project. The easiest way to set up a Vue project is to use the approach described in the [Set up the Vue project]({% slug getting_started_javascript_composition_api %}#toc-1-set-up-the-vue-project) section of the [First Steps with JavaScript ]({% slug getting_started_javascript_composition_api %}) article.

## Installing the Conversational UI Package

All Kendo UI for Vue packages are distributed through npm and offer a similar installation experience. To use the AIPrompt component, start with the installation of the Conversational UI npm package and its [dependencies](#toc-dependencies).

```sh
npm install --save @progress/kendo-vue-conversational-ui @progress/kendo-vue-buttons @progress/kendo-vue-layout @progress/kendo-vue-inputs @progress/kendo-vue-progressbars @progress/kendo-licensing @progress/kendo-drawing @progress/kendo-svg-icons @progress/kendo-vue-intl
```

## Importing the Component

After installing the package, import the AIPrompt component in the Vue App.

In the `src/App.vue` file of your Vue project, import the `AIPrompt`, `AIPromptView` and `AIPromptOutputView` components together with the `outputViewDefaults` and `promptViewDefaults` default configurations from the Conversational UI package.

```jsx-no-run
// ES2015 module syntax
import { AIPrompt, AIPromptOutputView, AIPromptView, outputViewDefaults, promptViewDefaults } from "@progress/kendo-vue-conversational-ui";
```

```jsx-no-run
// CommonJS format
const { AIPrompt, AIPromptOutputView, AIPromptView, outputViewDefaults, promptViewDefaults } = require('@progress/kendo-vue-conversational-ui');
```

## Using the Component

1. Define the `AIPrompt`, `AIPromptView` and `AIPromptOutputView` components

    ```jsx-no-run
       <AIPrompt>
          <AIPromptView />
          <AIPromptOutputView />
       </AIPrompt>
    ```

1. Next, define the following:

-   [`activeView`]({% slug api_conversational-ui_aipromptprops %}#toc-activeView) property that sets the currently visible view for the component.
-   [`onActiveViewChange`]({% slug api_conversational-ui_aipromptprops %}#toc-onActiveViewChange) event triggered when the component's view is changed.
-   [`onPromptRequest`]({% slug api_conversational-ui_aipromptprops %}#toc-onPromptRequest) event which is triggered when the user clicks the `Generate` button in the Prompt view.

Finally pass `promptViewDefaults` and `outputViewDefaults` to the [`toolbarItems`]({% slug api_conversational-ui_aipromptprops %}#toc-toolbarItems) prop and define the outputs property in the `AIPromptOutputView` component.

```jsx-no-run
   <AIPrompt
      :activeView="activeView"
      @activeviewchange="handleActiveViewChange"
      @promptrequest="handleOnRequest"
      :toolbarItems="[promptViewDefaults, outputViewDefaults]"
   >
      <AIPromptView />
      <AIPromptOutputView :outputs="outputs" />
   </AIPrompt>
```

1. Add the following data properties and methods:

    ```jsx-no-run
       components: {
          AIPrompt,
          AIPromptOutputView,
          AIPromptView,
       },
       data: function () {
          return {
             outputViewDefaults,
             promptViewDefaults,
             activeView: promptViewDefaults.name,
             outputs: [],
          };
       },
       methods: {
          handleOnRequest(prompt, outputItem) {
             if (!prompt) {
             return;
             }

             this.outputs = [
             {
                id: this.outputs.length + 1,
                title: "Title",
                subTitle: `Request ${this.outputs.length + 1}`,
                responseContent: `Response content for prompt ${
                   prompt + ". Generation: " + this.outputs.length
                }`,
                prompt,
             },
             ...this.outputs,
             ];
             this.activeView = outputViewDefaults.name;
          },
          handleActiveViewChange(viewName) {
             this.activeView = viewName;
          },
       }
    ```

1. To make the AIPrompt look correctly, install and import the [Kendo UI Default Theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/), which is one of the [four beautiful themes]({% slug themesandstyles %}) for Kendo UI for Vue.

    1. Install the Default theme package.

        ```sh
        npm install --save @progress/kendo-theme-default
        ```

    1. Import the Theme package in `src/App.vue`.

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

The Conversational UI package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name                     | Description                                                                                                                                                                       |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| vue 2.6.14 or 3.0.0+             | Contains the functionality necessary to define Vue components.                                                                                                                    |
| @progress/kendo-licensing        | Contains the internal infrastructure related to licensing.                                                                                                                        |
| @progress/kendo-vue-buttons      | Contains the Kendo UI for Vue Buttons components.                                                                                                                                 |
| @progress/kendo-vue-layouts      | Contains all layout related components part of the Kendo UI for Vue suite.                                                                                                        |
| @progress/kendo-vue-inputs       | Contains the Inputs available in Kendo UI for Vue.                                                                                                                                |
| @progress/kendo-vue-progressbars | Contains the Kendo UI for Vue components that display progress.                                                                                                                   |
| @progress/kendo-vue-intl         | Contains the Kendo UI for Vue Internationalization package that applies the desired cultures by providing services and pipes for the parsing and formatting of dates and numbers. |
| @progress/kendo-svg-icons        | Contains the Kendo UI for Vue SVG icons.                                                                                                                                          |

> Vue 2 is currently in its end-of-support phase till Nov 2024. After our last major release for 2024, Vue 2 will no longer be supported in the new versions of the Kendo UI for Vue components. Please check our [Vue 2 End of Support article](slug:vue2-end-of-support) for more details.

## Suggested Links

-   [Prompt Suggestions]({% slug suggestions_aiprompt %})
-   [Custom Commands]({% slug commands_aiprompt %})
-   [AIPrompt Custom Templates]({% slug customization_aiprompt %})
-   [Events]({% slug events_aiprompt %})
-   [Globalization]({% slug globalization_aiprompt %})

## Learning Resources

-   [Kendo UI for Vue - First Steps with JavaScript]({% slug getting_started_javascript_composition_api %})
-   [Kendo UI for Vue - First Steps with JavaScript + Options API]({% slug getting_started_javascript_options_api %})
-   [Kendo UI for Vue - First Steps with TypeScript]({% slug getting_started_typescript_composition_api %})
-   [Kendo UI for Vue - First Steps with TypeScript + Options API]({% slug getting_started_typescript_options_api %})
-   [Virtual Classroom - Kendo UI for Vue with TypeScript(Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/internal/view/elearning/45/kendo-ui-for-vue-with-typescript)
-   [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})

## Suggested Links

-   [API Reference of the AIPromptProps]({% slug api_conversational-ui_aipromptprops %})
