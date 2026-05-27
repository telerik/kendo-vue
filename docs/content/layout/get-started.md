---
title: Getting Started
description: "Get started with the Layout package by Kendo UI for Vue Native and learn how to use the Layout components in Vue projects."
slug: getstarted_layout
position: 1
---

# Getting Started with the Kendo UI for Vue Native Layout Package

This guide provides essential information about using the Kendo UI for Vue Native Layout package&mdash;you will learn how to install the package, add a PanelBar component to your project, style the component, and activate your license. The steps demonstrated in this guide are applicable to all Vue Layout components.

<div data-component="StartFreeTrialSection"></div>

After completing this guide, you will be able to reproduce the following example.

{% meta height:380 %}
{% embed_file get-started/main.vue preview %}
{% embed_file get-started/main.js %}
{% endmeta %}

## Setting Up Your Vue Project

Before you install the Kendo UI for Vue Native Layout package, make sure that you have a running Vue project. The easiest way to set up a Vue project is to use the approach described in the [Set up the Vue project]({% slug getting_started_javascript_composition_api %}#toc-1-set-up-the-vue-project) section of the [First Steps with JavaScript ]({% slug getting_started_javascript_composition_api %}) article.

## Installing the Layout Package

All Kendo UI for Vue Native packages are distributed through npm and offer a similar installation experience. To use the `PanelBar`(for example) component, start with the installation of the Layout npm package and its [dependencies](#toc-dependencies). Use Node.js v5.0.0 or later.

Navigate to the root folder of your Vue project and run the following command:

   ```sh
   npm install --save @progress/kendo-vue-layout @progress/kendo-vue-progressbars @progress/kendo-licensing @progress/kendo-vue-intl @progress/kendo-svg-icons
   ```

## Importing the Components

After installing the package, in the `src/App.vue` file of your Vue project, import the `PanelBar` component from the `Layout` package.

```jsx-no-run
// ES2015 module syntax
import { PanelBar } from "@progress/kendo-vue-layout";
```
```jsx-no-run
// CommonJS format
const { PanelBar } = require('@progress/kendo-vue-layout');
```

If your project requires more Layout components, you can import them too. The Layout package provides the following components:

* AppBar
* Avatar
* BottomNavigation
* Breadcrumb
* Card
* ContextMenu
* Drawer
* ExpansionPanel
* GridLayout
* Menu
* PanelBar
* Splitter
* StackLayout
* Stepper
* TabStrip
* TileLayout
* Wizard

## Using the Components


1. Define the Native PanelBar's rows as a data property.

    ```jsx
      items: [
        {
          title: 'Competition',
          content: 'competitionOverview',
        },
        {
          title: 'Winners',
          items: [
            { title: 'Winners 2022' },
            { title: 'Winner 2021' },
            { title: 'Winner 2020' },
          ],
        },
      ],
    ```

1. Add the following PanelBar definition in the `template` section of the `src/App.vue` file in your project.

    ```html
      <div class="panelbar-wrapper">
         <PanelBar :expand-mode="'single'" :items="items">
            <template #competitionOverview>
            <div style="padding: 10px">
               A very demanding competition with more than 5000 participants.
            </div>
            </template>
         </PanelBar>
      </div>
    ```

1. To style the `PanelBar`, install and import the [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/), which is one of the [four beautiful themes]({% slug themesandstyles %}) for Kendo UI for Vue.

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

1. Try the other Kendo UI for Vue Native Layout components
After going through the above steps, now you can try the all Layout components by yourself. Add other components to the newly created project by [importing](#toc-importing-the-components) and then defining them in the template section. More details about how the different component can be configured you can find in each of the links in the [Suggested Links](#toc-suggested-links) section below.

## Activating Your License Key

Using any of the UI components in the Kendo UI for Vue Native library requires either a commercial license key or an active trial license key.

Follow the instructions on the [My License page]({% slug my_license %}) to activate your trial or commercial license. You can skip this step if your application already contains a Kendo UI for Vue license file.

## Dependencies

The Layout package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name | Description |
|--------------|-------------|
| vue 2.6.11 or 3.0.0 | Contains the functionality necessary to define Vue components. |
| @progress/kendo-licensing | Contains the internal infrastructure related to the licensing of the Kendo UI for Vue Native components. |
| @progress/kendo-svg-icons | Contains the SVG icons for the components |
| @progress/kendo-vue-layout | Contains the Kendo UI for Vue Native Layout components. |
| @progress/kendo-vue-intl | Contains the Internationalization package that handles the desired cultures and applies data formatting in all Native Kendo UI for Vue components of your project. |

> Vue 2 is currently in its end-of-support phase till Nov 2024. After our last major release for 2024, Vue 2 will no longer be supported in the new versions of the Kendo UI for Vue components. Please check our [Vue 2 End of Support article](slug:vue2-end-of-support) for more details.

## Suggested Links

* [AppBar Overview]({% slug overview_appbar %})
* [Avatar Overview]({% slug overview_avatar %})
* [BottomNavigation Overview]({% slug overview_bottomnavigation %})
* [Breadcrumb Overview]({% slug overview_breadcrumb %})
* [Card Overview]({% slug overview_card %})
* [ContextMenu Overview]({% slug overview_contextmenu %})
* [Drawer Overview]({% slug overview_drawer %})
* [ExpansionPanel Overview]({% slug overview_expansionpanel %})
* [GridLayout Overview]({% slug overview_gridlayout %})
* [Menu Overview]({% slug overview_menu %})
* [PanelBar Overview]({% slug overview_panelbar %})
* [Splitter Overview]({% slug overview_splitter %})
* [StackLayout Overview]({% slug overview_stacklayout %})
* [Stepper Overview]({% slug overview_stepper %})
* [TabStrip Overview]({% slug overview_tabstrip %})
* [TileLayout Overview]({% slug overview_tilelayout %})
* [Wizard Overview]({% slug overview_wizard %})
* [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})
* [API Reference of the Layout Components]({% slug api_layout %})

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
