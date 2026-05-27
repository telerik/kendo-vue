---
title: Overview
description: 'Get started with the Vue Buttons package by Kendo UI for Vue and learn more about how to use the Buttons components in Vue projects.'
slug: overview_buttons
position: 0
---

# Kendo UI for Vue Native Buttons Overview

The Kendo UI for Vue Buttons package deliver components that represent the trigger for a simple action that user can take.

The Buttons package is part of the Kendo UI for Vue library which provides native Kendo UI for Vue components for the Vue ecosystem and are available under the [kendo-vue-buttons NPM package](https://www.npmjs.com/package/@progress/kendo-vue-buttons).

<div data-component="StartFreeTrialSection"></div>

<Row>
   <Column count={6}>
    <Component href="{% slug overview_button %}">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>button</title>
        <path d="M0,5V19H24V5ZM22,17H2V7H22Zm-3-6H5v2H17Z" />
      </svg>
      <ComponentTitle>Button</ComponentTitle>
      <ComponentDescription>A Vue Button component.</ComponentDescription>
    </Component>
  </Column>
  <Column count={6}>
    <Component href="{% slug overview_buttongroup %}">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>buttongroup</title>
        <path class="cls-1" d="M0,7v9H24V7Zm7,7H2V9H7Zm8,0H9V9h6Zm7,0H17V9h5Z" />
      </svg>
      <ComponentTitle>ButtonGroup</ComponentTitle>
      <ComponentDescription>Grouped Buttons with identical functionalities.</ComponentDescription>
    </Component>
  </Column>
  <Column count={6}>
    <Component href="{% slug overview_chip %}">
      <svg id="chip" viewbox="0 0 72 72">
        <path d="M57,48H15v6h36L57,48z M0,30v42h72V30H0z M66,66H6V36h60V66z" />
      </svg>
      <ComponentTitle>Chip</ComponentTitle>
      <ComponentDescription>A component allowing users to enter information, make selections, filter content, or trigger actions.</ComponentDescription>
    </Component>
  </Column>
  <Column count={6}>
    <Component href="{% slug overview_chiplist %}">
      <svg id="chiplist" viewbox="0 0 72 72">
        <path d="M57,48H15v6h36L57,48z M0,30v42h72V30H0z M66,66H6V36h60V66z" />
      </svg>
      <ComponentTitle>ChipList</ComponentTitle>
      <ComponentDescription>A component allowing you to maintain a set of selected chips.</ComponentDescription>
    </Component>
  </Column>
  <Column count={6}>
    <Component href="{% slug overview_dropdownbutton %}">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>dropdownbutton</title>
        <path class="cls-1" d="M19,11H17v2h2ZM0,5V19H24V5ZM22,17H2V7H22Zm-8-6H5v2h7Z" />
      </svg>
      <ComponentTitle>DropDownButton</ComponentTitle>
      <ComponentDescription>A component for executing additional action items.</ComponentDescription>
    </Component>
  </Column>
  <Column count={6}>
    <Component href="{% slug overview_floatingactionbutton %}">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>floatingactionbutton</title>
          <path d="M17,15H0l2-2h15V15z M17,7H2L0,9h17V7z M17,1H2L0,3h17V1z M21,18c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S22.7,18,21,18z
	 M21,12c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S22.1,12,21,12z M21,6c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S22.1,6,21,6z M21,0
	c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S22.1,0,21,0z"/>
      </svg>
      <ComponentTitle>FloatingActionButton</ComponentTitle>
      <ComponentDescription>A component for specifying the primary action in an application..</ComponentDescription>
    </Component>
  </Column>
  <Column count={6}>
    <Component href="{% slug overview_splitbutton %}">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>splitbutton</title>
        <path class="cls-1" d="M12,11H5v2h5ZM0,5V19H24V5ZM15,17H2V7H15Zm7,0H17V7h5Z" />
      </svg>
      <ComponentTitle>SplitButton</ComponentTitle>
      <ComponentDescription>A component for executing default or predefined actions.</ComponentDescription>
    </Component>
  </Column>
  <Column count={6}>
    <Component href="{% slug overview_toolbar %}">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>toolbar</title>
        <path class="cls-1" d="M0,0V24H20l4-4V0ZM22,19.17,19.17,22H2V10H22ZM22,8H2V2H22ZM20,4H16V6h4ZM8,4H4V6H8Zm6,0H10V6h4Z" />
      </svg>
      <ComponentTitle>Toolbar</ComponentTitle>
      <ComponentDescription>A component for holding and organizing Button, ButtonGroup, DropDownButton & SplitButton elements.</ComponentDescription>
    </Component>
  </Column>
   <Column count={6}>
    <Component href="slug:overview_speechtotext">
      <ComponentIcon>
        <path class="cls-1" d="M12 2a2 2 0 0 1 2 2v8a2 2 0 0 1-4 0V4a2 2 0 0 1 2-2zm5 8a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V20H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-3.08A7 7 0 0 0 19 10h-2z"/>
      </ComponentIcon>
      <ComponentTitle>SpeechToText Button</ComponentTitle>
      <ComponentDescription>A component enabling speech recognition functionality within your application</ComponentDescription>
    </Component>
  </Column>
</Row>

## Basic Usage

The following example demonstrates all components from the Buttons package in action.

{% meta height:620 %}
{% embed_file overview/main.vue preview %}
{% embed_file overview/CustomChip.vue %}
{% embed_file overview/main.js %}
{% endmeta %}

## Installation

To initialize the Buttons, either:

- [Use the CDN service](#toc-using-cdn), or
- [Use Webpack](#toc-initializing-with-webpack).

### Using CDN

To use the Kendo UI for Vue Native Buttons with CDN, follow the below steps:

1. Reference the `buttons` package.

```sh
  <script src="https://unpkg.com/@progress/kendo-vue-buttons@latest/dist/cdn/js/kendo-vue-buttons.js"></script>
```

2. Reference one of the Kendo UI themes to style your components.

```sh
    // Load the Kendo Default Theme
    <link rel="stylesheet" href="https://unpkg.com/@progress/kendo-theme-default@latest/dist/all.css">

    // Load the Kendo Bootstrap Theme
    <link rel="stylesheet" href="https://unpkg.com/@progress/kendo-theme-bootstrap@latest/dist/all.css">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">

    // To load the Kendo Material Theme
    <link rel="stylesheet" href="https://unpkg.com/@progress/kendo-theme-material@latest/dist/all.css">

    // To load the Kendo Fluent Theme
    <link rel="stylesheet" href="https://unpkg.com/@progress/kendo-theme-fluent@latest/dist/all.css">
```

3. Follow the instructions in [this article]({% slug my_license %}#toc-set-license-key-when-using-cdn-scripts) to activate your product license. You can skip this step if your application already contains a license key.

### Initializing with Webpack

1. Download and install the package. Use Node.js v5.0.0 or later.

    ```sh
    npm install --save @progress/kendo-vue-buttons @progress/kendo-licensing
    ```

1. Once installed, import the package module.

    ```jsx-no-run
    // ES2015 module syntax
    import { Button, ButtonGroup, Chip, ChipList, DropDownButton, FloatingActionButton, SplitButton, Toolbar } from '@progress/kendo-vue-buttons';
    ```

    ```jsx-no-run
    // CommonJS format
    const { Button, ButtonGroup, Chip, ChipList, DropDownButton, FloatingActionButton, SplitButton, Toolbar } = require('@progress/kendo-vue-buttons');
    ```

1. You are required to install one of the Kendo UI for Vue themes to style your components. For more information on how to add the styles, refer to the article on [getting started]({% slug getting_started_javascript_composition_api %}#toc-5-import-the-kendo-ui-for-vue-css-styles).

1. Follow the instructions on the Kendo UI for Vue [My License page]({% slug my_license %}) to activate your license. You can skip this step if your application already contains a Kendo UI for Vue license file.

## Dependencies

The Buttons package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

- vue 3.0.0\*
- @progress/kendo-licensing

> Vue 2 is currently in its end-of-support phase till Nov 2024. After our last major release for 2024, Vue 2 will no longer be supported in the new versions of the Kendo UI for Vue components. Please check our [Vue 2 End of Support article](slug:vue2-end-of-support) for more details.

## Support and Learning Resources

- [Button Homepage](https://www.telerik.com/kendo-vue-ui/button)
- [ButtonGroup Homepage](https://www.telerik.com/kendo-vue-ui/buttongroup)
- [Chip Homepage](https://www.telerik.com/kendo-vue-ui/chip)
- [ChipList Homepage](https://www.telerik.com/kendo-vue-ui/chiplist)
- [DropDownButton Homepage](https://www.telerik.com/kendo-vue-ui/dropdownbutton)
- [FloatingActionButton Homepage](https://www.telerik.com/kendo-vue-ui/floatingactionbutton)
- [SplitButton Homepage](https://www.telerik.com/kendo-vue-ui/splitbutton)
- [ToolBar Homepage](https://www.telerik.com/kendo-vue-ui/toolbar)
- [API Reference of the Buttons](slug:api_buttons)
- [Getting Started with Kendo UI for Vue - JavaScript (Online Guide)](slug:getting_started_javascript_composition_api)
- [Getting Started with Kendo UI for Vue - TypeScript (Online Guide)](slug:getting_started_typescript_composition_api)
- [Getting Started with Kendo UI for Vue - JavaScript + Options API (Online Guide)](slug:getting_started_javascript_options_api)
- [Getting Started with Kendo UI for Vue - TypeScript + Options API (Online Guide)](slug:getting_started_typescript_options_api)
- [Getting Started with Kendo UI for Vue - Nuxt 3 (Online Guide)](slug:getting_started_nuxt_3)
- [Virtual Classroom (Training Course for Registered Users)](https://learn.telerik.com/learn/course/internal/view/elearning/45/kendo-ui-for-vue-with-typescript)
- [Kendo UI for Vue Forum](https://www.telerik.com/forums/kendo-ui-vue)
- [Knowledge Base](https://www.telerik.com/kendo-vue-ui/components/knowledge-base/)
- [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})

## Additional Resources

- [Vue Blogs](https://www.telerik.com/blogs/tag/kendo-ui-for-vue)
- [Kendo UI for Vue Roadmap](https://www.telerik.com/support/whats-new/kendo-vue-ui/roadmap)
