---
title: Getting Started
description: "Get started with the Inputs package by Kendo UI for Vue Native suite and learn how to use the components in Vue projects."
slug: getstarted_inputs
position: 1
---

# Getting Started with the Kendo UI for Vue Native Inputs

This guide provides essential information about using the Kendo UI for Vue Native Inputs package&mdash;you will learn how to install the package, add Input components to your project, style the components, and activate your license. You can apply the steps in this guide to all Kendo UI for Vue Native Inputs.

<div data-component="StartFreeTrialSection"></div>

After completing this guide, you will reproduce the following example.

{% meta height:480 %}
{% embed_file get-started/main.vue preview %}
{% embed_file get-started/main.js %}
{% endmeta %}

## Setting Up Your Vue Project

Before you install the Kendo UI for Vue Native Inputs, make sure that you have a running Vue project. The easiest way to set up a Vue project is to use the approach described in the [Set up the Vue project]({% slug getting_started_javascript_composition_api %}#toc-1-set-up-the-vue-project) section of the [First Steps with JavaScript ]({% slug getting_started_javascript_composition_api %}) article.

## Installing the Components

All Kendo UI for Vue packages are distributed through npm and offer a similar installation experience. To use any of the Indicators, start with the installation of the npm package and its [dependencies](#toc-dependencies). Use Node.js v5.0.0 or later.

Navigate to the root folder of your Vue project and run the following command:

   ```sh
   npm install --save @progress/kendo-vue-inputs @progress/kendo-vue-intl @progress/kendo-drawing @progress/kendo-licensing @progress/kendo-svg-icons
   ```

## Importing the Components

After installing the Inputs package, import the desired components in the Vue App. This guide shows how to add the [ColorPicker]({% slug overview_colorpicker %}).

In the App component file of your Vue project (for example, `src/App.vue`), add the following code:

```jsx-no-run
// ES2015 module syntax
import { ColorPicker } from '@progress/kendo-vue-inputs';
```

```jsx-no-run
// CommonJS format
const { ColorPicker } = require('@progress/kendo-vue-inputs');
```

If your project requires more Input components, you can import them. The Inputs package provides the following components:

* Checkbox
* ColorGradient
* ColorPalette
* ColorPicker
* FlatColorPicker
* Input
* MaskedTextBox
* NumericTextBox
* RadioButton
* RadioGroup
* RangeSlider
* Slider
* Switch
* TextArea

## Using the Components

1. After installing the Inputs package and importing the components, add the ColorPicker to the template section of the App component file of your Vue project (for example, `src/App.vue`).

      ```js
            <div class="example-wrapper">
               <ColorPicker :view="'gradient'" :default-value="'green'" />
            </div>
      ```

1. To style the Loader, install and import the [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/), which is one of the [four beautiful themes]({% slug themesandstyles %}) for Kendo UI for Vue.

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

Now try to add another component from the Inputs package yourself. The procedures for [installing](#toc-installing-the-components), [importing](#toc-importing-the-components), and [using](#toc-using-the-components) the Input components are identical for all components in the package.

## Activating Your License Key

Using any of the UI components in the Kendo UI for Vue Native library requires either a commercial license key or an active trial license key.

Follow the instructions on the [My License page]({% slug my_license %}) to activate your trial or commercial license. You can skip this step if your application already contains a license file.

## Dependencies

The Inputs package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name | Description |
|--------------|-------------|
| vue 2.6.14 or 3.0.0+ | Contains the functionality necessary to define Vue components. |
| @progress/kendo-licensing | Contains the internal infrastructure related to licensing. |
| @progress/kendo-svg-icons | Contains the SVG icons for the components |
| @progress/kendo-vue-intl | Contains the Kendo UI for Vue Native Internationalization package that applies the desired cultures by providing services and pipes for the parsing and formatting of dates and numbers. |
| @progress/kendo-drawing | Contains the Drawing library, which provides interactive vector graphics. |

> Vue 2 is currently in its end-of-support phase till Nov 2024. After our last major release for 2024, Vue 2 will no longer be supported in the new versions of the Kendo UI for Vue components. Please check our [Vue 2 End of Support article](slug:vue2-end-of-support) for more details.

## Suggested Links

* [Checkbox Overview]({% slug overview_checkbox %})
* [ColorPicker Overview]({% slug overview_colorpicker %})
* [ColorGradient Overview]({% slug overview_colorgradient %})
* [ColorPalette Overview]({% slug overview_colorpalette %})
* [FlatColorPicker Overview]({% slug overview_flatcolorpicker %})
* [Input Overview]({% slug overview_input %})
* [TextBox Overview]({% slug overview_textbox %})
* [MaskedTextBox Overview]({% slug overview_maskedtextbox %})
* [NumericTextBox Overview]({% slug overview_numerictextbox %})
* [RadioButton Overview]({% slug overview_radiobutton %})
* [RadioGroup Overview]({% slug overview_radiogroup %})
* [Slider Overview]({% slug overview_slider %})
* [RangeSlider Overview]({% slug overview_rangeslider %})
* [Switch Overview]({% slug overview_switch %})
* [TextArea Overview]({% slug overview_textarea %})
* [API Reference of the Inputs]({% slug api_inputs %})

## Learning Resources

* [Getting Started with Kendo UI for Vue Native suite]({% slug getting_started_javascript_composition_api %})
* [Kendo UI for Vue - First Steps with JavaScript + Options API]({% slug getting_started_javascript_options_api %})
* [Kendo UI for Vue - First Steps with TypeScript]({% slug getting_started_typescript_composition_api %})
* [Kendo UI for Vue - First Steps with TypeScript + Options API]({% slug getting_started_typescript_options_api %})
* [Virtual Classroom - Kendo UI for Vue with TypeScript(Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/internal/view/elearning/45/kendo-ui-for-vue-with-typescript)
* [Explore the Coffee Warehouse Sample Application](https://github.com/telerik/kendo-vue/tree/master/examples-standalone/coffee-warehouse)
* [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})
